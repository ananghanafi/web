<template>
    <v-container grid-list-lg fill-height>
        <v-layout row wrap fill-height >
            <v-flex md12>
                DASHBOARD DONOR
            </v-flex>
           
            <v-flex md12 xs12>
                <m-widget title="Monitoring Donor Mapping">
                <v-layout row wrap>
                    <v-flex xs8>
                        <l-map ref="map" :zoom="zoom" :center="center" style="z-index:1">
                            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                            <!-- <v-marker-cluster :options="clusterOptions">
                                <v-geo-json v-for="geoJson in features" :key="geoJson.kegiatan" :geojson="geoJson" :options="geoJsonOptions"></v-geo-json>
                            </v-marker-cluster> -->
                        </l-map>
                    </v-flex>
                    
                    <v-flex xs4>
                        <m-widget title="SEBARAN BIAYA DONOR BERDASARKAN MANDAT BRG">
                            <v-data-table 
                            :hide-headers="true"   
                            :items="harga"
                            class="elevation-1">
                                <template slot="items" slot-scope="props">
                                    <td class="text-xs-left">{{ props.item.nama }}</td>
                                   
                                <m-single-stat
                                    :statValue="'Rp.' + ($options.filters.toC(totalCost)) + ',-'"
                                    />
                   
                                </template>
                            </v-data-table>
                            
                        </m-widget>
                    </v-flex>
                </v-layout>
                </m-widget>
            </v-flex>
            <v-flex md12 xs12>
                <v-layout row wrap>
                    <v-flex xs8>
                        <m-widget title="SUMMARY">
                            <v-container grid-list-md >
                                <v-layout row wrap>                                
                                    <v-flex xs6 >
                                        <v-card class="red text-xs-center">
                                             <h1><span class="white--text">18</span></h1>
                                             <div class="white red--text">Rp.200.000.000.000,-</div>  
                                        </v-card>
                                    </v-flex>
                                    <v-flex xs6>
                                         <v-card class="blue-grey text-xs-center">
                                             <h1><span class="white--text">18</span></h1>
                                             <div class="white blue-grey--text">Rp.200.000.000.000,-</div>  
                                        </v-card>                                       
                                    </v-flex>
                                    <v-flex xs6 >
                                        <v-card class="green text-xs-center">
                                             <h1><span class="white--text">18</span></h1>
                                             <div class="white green--text">Rp.200.000.000.000,-</div>  
                                        </v-card>
                                    </v-flex>
                                    <v-flex xs6>
                                         <v-card class="orange text-xs-center">
                                             <h1><span class="white--text">18</span></h1>
                                             <div class="white orange--text">Rp.200.000.000.000,-</div>  
                                        </v-card>                                       
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </m-widget>
                    </v-flex>

                    <v-flex xs4>                        
                        <m-widget title="% PEMBIAYAAN BERDASARKAN KEGIATAN">
                            <AreaChartPie/>
                        </m-widget>
                    </v-flex>
                    <!-- <v-flex xs4>                        
                        <m-widget title="Tindakan Restorasi per Provinsi">
                            <ActionChartPie/>
                        </m-widget>
                    </v-flex> -->
                </v-layout>
            </v-flex>
             <v-flex md12 xs12>
                <v-layout row wrap>
                    <v-flex xs8>
                       
                    </v-flex>

                    <v-flex xs4>                        
                        <m-widget title="% JUMLAH BIAYA BERDASARKAN WILAYAH">
                            <AreaChartPie/>
                        </m-widget>
                    </v-flex>
                    <!-- <v-flex xs4>                        
                        <m-widget title="Tindakan Restorasi per Provinsi">
                            <ActionChartPie/>
                        </m-widget>
                    </v-flex> -->
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import MWidget from '@/components/MWidget'
import MSingleStat from '@/components/MSingleStat'
import AnggaranChartPie from '../components/AnggaranChartPie'
import FundingSourceChartPie from '../components/FundingSourceChartPie'
import AreaChartPie from '../components/AreaChartPie'
import ActionChartPie from '../components/ActionChartPie'
import {MAP_SERVER} from '@/const'
import {LMap, LTileLayer, LMarker, LPopup, LGeoJson, L} from 'vue2-leaflet'
import "leaflet/dist/leaflet.css"
import LMarkerCluster from 'vue2-leaflet-markercluster'
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.imagePath = ''
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})
export default {
    components : {
        MWidget,
        MSingleStat,
        AnggaranChartPie,
        FundingSourceChartPie,
        AreaChartPie,
        ActionChartPie,
         LMap,
        LTileLayer,
        'v-marker': LMarker,
        'v-geo-json': LGeoJson,
        'v-popup': LPopup,
        'v-marker-cluster': LMarkerCluster,
    },
    data(){
        let geoJsonOptions = {
            onEachFeature: function (feature, layer) {
                layer.getLatLng = function() { return this.getBounds().getCenter() }
                layer.setLatLng = function() { }
                layer._latlng = layer.getLatLng();
            }
        }
        return {
            center: L.latLng(-3.0723357, 117.5130651),
            // url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            url: 'http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png',
            attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            marker: L.latLng(-3.0723357, 117.5130651),
            features: Object,
            geoJsonOptions,
            clusterOptions: {},
            totalCost: '',
            totalArea: '',
            totalAction: '',
            list_province : [],
            list_phu : [],
            list_year : [],
            filter : {
                qf_year : null,
                qf_province_id : null,
                qf_code : null,
            },
            harga: [
          {
            value: false,
            nama: '1. Peatland Rewetting',
            harga: '',
          },
           {
            value: false,
            nama: '2. Vegetation Rehabilitation (Revegetation)',
            harga: '',
          },
           {
            value: false,
            nama: '3. Socioeconomic Revization of the Community',
            harga: '',
          },
           {
            value: false,
            nama: '4. Planning Base Stabilization',
            harga: '',
          },
           {
            value: false,
            nama: '5. Policy and Institutional Strengthening',
            harga: '',
          },
           {
            value: false,
            nama: '6. International Cooperation Improvement',
            harga: '',
          },
           {
            value: false,
            nama: '7. Improvemenent of Active Roles of thr Parties',
            harga: '',
          },
           {
            value: false,
            nama: '8. Peatland Restoration Empowerment',
            harga: '',
          },
           {
            value: false,
            nama: '9. Admintration of Mangement an Intituional Support',
            harga: '',
          },
          
          ]

        }
    },
    mounted(){
        this.load()
        this.loadFilter
    },
    methods: {
        load(){
            this.loading = true
            this.$store.dispatch('donordash/anggaran')
            .then(res=>{
                this.totalCost = res.totalCost ? res.totalCost : []
            })
            this.$store.dispatch('perencanaan/getPlanningArea')
            .then(res=>{
                this.totalArea = res.totalArea ? res.totalArea : []
            })
            this.$store.dispatch('perencanaan/getPlanningAction')
            .then(res=>{
                this.totalAction = res.totalAction ? res.totalAction : []
            })
        },
        loadFilter(){
            Promise.all([
            this.$store.dispatch('administrativeArea/getTargetedProv'),
            this.$store.dispatch('peatHydrologicalUnit/getAll'),
            ])
            .then(arr=>{
                [this.list_province,this.list_phu] = arr
            })
        },
        },
          mounted(){
        setTimeout(() => {
        this.$nextTick(() => {
            this.map = this.$refs.map.mapObject
        // });

            var targetedProvincesLayer = L.tileLayer.wms(MAP_SERVER, {
                    layers: 'brg:sasaran_provinsi',
                    format: 'image/png',
                    transparent: true,
                });
            var phuBorderLayer = L.tileLayer.wms(MAP_SERVER, {
                    layers: 'brg:batas_khg',
                    format: 'image/png',
                    transparent: true,
                });
            var wellLayer = L.tileLayer.wms(MAP_SERVER, {
                    layers: 'brg:rtt-sumur_bor',
                    format: 'image/png',
                    styles: 'dev_well_point_stacker',
                    exceptions: 'application/vnd.ogc.se_inimage',
                    transparent: true,
                });
            var canalBlockLayer = L.tileLayer.wms(MAP_SERVER, {
                    layers: 'brg:rtt-sekat_kanal',
                    format: 'image/png',
                    styles: 'dev_well_point_stacker_orange',
                    exceptions: 'application/vnd.ogc.se_inimage',
                    transparent: true,
                });
            var canalHoardingLayer = L.tileLayer.wms(MAP_SERVER, {
                    layers: 'brg:rtt-kanal_timbun',
                    format: 'image/png',
                    styles: 'dev_style_kanal_timbun',
                    exceptions: 'application/vnd.ogc.se_inimage',
                    transparent: true,
                });
            var retentionBasinLayer = L.tileLayer.wms(MAP_SERVER, {
                    layers: 'brg:rtt-embung',
                    format: 'image/png',
                    styles: 'dev_style_point',
                    exceptions: 'application/vnd.ogc.se_inimage',
                    transparent: true,
                });
            var revegetationLayer = L.tileLayer.wms(MAP_SERVER, {
                    layers: 'brg:rtt-revegetasi',
                    format: 'image/png',
                    styles: 'dev_style_revegetasi',
                    exceptions: 'application/vnd.ogc.se_inimage',
                    transparent: true,
                });
            var revitalizationLayer = L.tileLayer.wms(MAP_SERVER, {
                    layers: 'brg:rtt-revitalisasi',
                    format: 'image/png',
                    styles: 'dev_style_revitalisasi',
                    exceptions: 'application/vnd.ogc.se_inimage',
                    transparent: true,
                });

            // this.$store.dispatch('skanal/perencanaan/getGeoJson', 15)
            // .then(res=>{
            //     this.features = res.features
            // })

            // var geoJsonLayer = L.geoJson(this.features);

            var baseMaps = {
                "Sasaran Provinsi": targetedProvincesLayer,
                "Batas KHG": phuBorderLayer,
            };

            var overlayMaps = {
                "RTT Sumur Bor": wellLayer,
                "RTT Sekat Kanal": canalBlockLayer,
                "RTT Penimbunan Kanal": canalHoardingLayer,
                "RTT Embung": retentionBasinLayer,
                "RTT Revegetasi": revegetationLayer,
                "RTT Revitalisasi": revitalizationLayer,
                // "geoJson": geoJsonLayer,
            };

            phuBorderLayer.addTo(this.map) // set this layer selected by default

            L.control.layers(baseMaps, overlayMaps, {collapsed: false}).addTo(this.map);

        });
        }, 4000);

    }
    

}
</script>

<style>
@import "~leaflet.markercluster/dist/MarkerCluster.css";
@import "~leaflet.markercluster/dist/MarkerCluster.Default.css";
.map{  height:100vh; width: 100vw; }
</style>
