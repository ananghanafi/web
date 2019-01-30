<template>
    <v-container grid-list-lg fill-height>
        <v-layout row wrap fill-height >
            <v-flex md12>
                DASHBOARD DONOR
            </v-flex>
           
            <v-flex md12 xs12>
                <m-widget title="Monitoring Donor Mapping">
                <v-layout row wrap>
                    <v-container class="pa-0" fluid fill-height>
        <v-layout>
            <v-flex xs12>
                <l-map ref="map" :zoom="zoom" :center="center" style="z-index:1">
                    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                    <!-- <v-marker-cluster :options="clusterOptions">
                        <v-geo-json v-for="geoJson in features" :key="geoJson.kegiatan" :geojson="geoJson" :options="geoJsonOptions"></v-geo-json>
                    </v-marker-cluster> -->
                </l-map>
            </v-flex>
        </v-layout>
</v-container>
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
                            :headers="headers"
                            :items="harga"
                            class="elevation-1">
                                <template slot="items" slot-scope="props">
                                    
                                     <td class="text-xs-left">{{ props.item.name}}</td>
                                     <td class="text-xs-left">{{ props.item.value}}</td>
                                     <td class>
                                         <v-card>
                                        
                                    <m-single-stat
                                        :statValue="peatlandrewetting | toC"
                                        />
                                    </v-card>
                                     </td>
                                         <td class>
                                         <v-card>
                                        
                                    <m-single-stat
                                        :statValue="revegetasi | toC"
                                        />
                                    </v-card>
                                     </td>                   
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
                                             <div class="white blue-grey--text">Rp.200.000.000.000,-</div> 
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
import {MAP_SERVER} from '@/const'
import {LMap, LTileLayer, LMarker, LPopup, LGeoJson, L} from 'vue2-leaflet'
import "leaflet/dist/leaflet.css"
import LMarkerCluster from 'vue2-leaflet-markercluster'
import MWidget from '@/components/MWidget'
import MSingleStat from '@/components/MSingleStat'
import AnggaranChartPie from '../components/AnggaranChartPie'
import FundingSourceChartPie from '../components/FundingSourceChartPie'
import AreaChartPie from '../components/AreaChartPie'
import ActionChartPie from '../components/ActionChartPie'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.imagePath = ''
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})
export default {
    components : {
        LMap,
        LTileLayer,
        'v-marker': LMarker,
        'v-geo-json': LGeoJson,
        'v-popup': LPopup,
        'v-marker-cluster': LMarkerCluster,
        MWidget,
        MSingleStat,
        AnggaranChartPie,
        FundingSourceChartPie,
        AreaChartPie,
        ActionChartPie,
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
            zoom:5.4,
            center: L.latLng(-3.0723357, 117.5130651),
            // url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            url: 'http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png',
            attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            marker: L.latLng(-3.0723357, 117.5130651),
            features: Object,
            geoJsonOptions,
            clusterOptions: {},
            anggaran: '',
            peatlandrewetting: '',
            revegetasi: '',
            totalcost: '',
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
            headers: [{
                text: 'kegiatan',
                align: 'left',
                sortable: false,
                value: 'name'

            },
            {
                text: 'total',
                align: 'left',
                sortable: false,
                value: 'nilai'
                
            }],
           harga: [{
                name: 'peatland',
                value: this.peatlandrewetting

            },
            // {   name:'revegetasi', value:'revegetasi'
            // },
            ]
        }
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
        this.load()
        this.loadFilter
    },
    methods: {
        load(){
            
            this.loading = true
            this.$store.dispatch('donordash/getPlanningAnggaran')
            .then(res=>{
                this.peatlandrewetting = res.anggaran;
            })
            this.$store.dispatch('donordash/getPlanningrevegetasi')
            .then(res=>{
                this.revegetasi = res.anggaran;
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
    }
}
</script>

<style>
@import "~leaflet.markercluster/dist/MarkerCluster.css";
@import "~leaflet.markercluster/dist/MarkerCluster.Default.css";
.map{  height:100vh; width: 100vw; }
</style>
