<template>
    <v-container grid-list-lg fill-height>
        <v-layout row wrap fill-height >
            <!-- <v-flex md12>
                DASHBOARD DONOR
            </v-flex> -->
           
            <v-flex xl8>
                <!-- <m-widget title="Monitoring Donor Mapping"> -->
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
                        <!-- <h3>   <span>SEBARAN BIAYA DONOR BERDASARKAN MANDAT BRG</span></h3> -->
                        <v-card-title primary-title class="blue-grey text-xs-center">
                        <h3>   <span class="white--text">Monitoring Donor Mapping</span></h3>
                        </v-card-title>  
                        <l-map ref="map" :zoom="zoom" :center="center" style="z-index:1">
                            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                            <!-- <v-marker-cluster :options="clusterOptions">
                                <v-geo-json v-for="geoJson in features" :key="geoJson.kegiatan" :geojson="geoJson" :options="geoJsonOptions"></v-geo-json>
                            </v-marker-cluster> -->
                        </l-map>
                    </v-flex>
                    
                    <v-flex xs4>
                                        <v-card-title primary-title class="blue-grey text-xs-center">
                                    <h3>   <span class="white--text">SEBARAN BIAYA DONOR BERDASARKAN MANDAT BRG</span></h3>
                                    </v-card-title>
                                     <m-nilai-tabel label="1.Peatland_rewetting " :val="peatlandrewetting" class="text-lg-left"/>
                                                          
                                    
                                    <m-nilai-tabel label="2.Vegetation Rehabilitation (Revegetation)  " :val="revegetasi" class="text-lg-left" />
                                    
                                    <m-nilai-tabel label="3.Socioeconomic Revitalization of the Community  " :val="revitalization" class="text-lg-left"/>
                                    <m-nilai-tabel label="4.Planning Base Stabilization  " :val="baseStabilization" class="text-lg-left"/>
                                     <v-divider></v-divider>   
                                    <m-nilai-tabel label="5.Policy and Institutional Strengthening" :val="instStrengthening" class="text-lg-left"/>
                                     <v-divider></v-divider>   
                                    <m-nilai-tabel label="6.International Cooperation Improvement" :val="coopImprove" class="text-lg-left" />
                                     <v-divider></v-divider>  
                                    <m-nilai-tabel label="7.Improvement of Active Roles of the Parties" :val="actifRoles" class="text-lg-left"/>
                                    <v-divider></v-divider>  
                                    <m-nilai-tabel label="8.Peatland Restoration Empowerment" :val="peatlandRestoration" class="text-lg-left"/>
                                     <v-divider></v-divider>  
                                    <m-nilai-tabel label="9.Administration of Management and Institutional" :val="administrationManagement"  class="text-lg-left"/>
                                 
                        <!-- <m-widget title="SEBARAN BIAYA DONOR BERDASARKAN MANDAT BRG" > --> 

                             <!-- <v-data-table
                                :hide-headers="true"
                                :items="items"
                                class="elevation-1"
                                :rows-per-page-items="[5]"
                            > -->
                                <!-- <template slot="items" slot-scope="props" :val="peatlandrewetting"> -->
                                    
                                <!-- <template > -->
                                    <!-- <td :val="peatlandrewetting" class="">{{ props.item.name }}</td> -->
                                    <!-- <td class="">{{ props.item.value }}</td> -->
                                     <!-- <td class="">sf</td>
                                    <td class="">fdf</td> -->
                                     <!-- <tr>
                                        <td>Jill</td>
                                        <td>Smith</td>
                                        <td>50</td>
                                    </tr>
                                     <tr>
                                        <td>Jill</td>
                                        <td>Smith</td>
                                        <td>50</td>
                                    </tr> -->
                                <!-- </template> -->
                             <!-- </v-data-table>               -->
                              
                              
                            <!-- <v-card flat color="grey lighten-5" class="ra-0">  -->
                                <!-- <v-card class="blue-grey text-xs-center">        -->
                                    <!-- <v-card-title primary-title class="blue-grey text-xs-center">
                                    <h3>   <span class="white--text">SEBARAN BIAYA DONOR BERDASARKAN MANDAT BRG</span></h3>
                                    </v-card-title>    
                                   
                                    <m-labelval label="1.Peatland_rewetting " :val="peatlandrewetting" class="text-lg-center"/>
                                                          
                                    
                                    <m-labelval label="2.Vegetation Rehabilitation (Revegetation)  " :val="revegetasi" class="text-lg-center" />
                                    
                                    <m-labelval label="3.Socioeconomic Revitalization of the Community  " :val="revitalization" />
                                    <m-labelval label="4.Planning Base Stabilization  " :val="baseStabilization" />
                                     <v-divider></v-divider>   
                                    <m-labelval label="5.Policy and Institutional Strengthening" :val="instStrengthening" />
                                     <v-divider></v-divider>   
                                    <m-labelval label="6.International Cooperation Improvement" :val="coopImprove" />
                                     <v-divider></v-divider>  
                                    <m-labelval label="7.Improvement of Active Roles of the Parties" :val="actifRoles"/>
                                    <v-divider></v-divider>  
                                    <m-labelval label="8.Peatland Restoration Empowerment" :val="peatlandRestoration" />
                                     <v-divider></v-divider>  
                                    <m-labelval label="9.Administration of Management and Institutional" :val="administrationManagement" />
                                 
                            </v-card> -->
                                 
                        <!-- </m-widget> -->
                    </v-flex>
                </v-layout>
                <!-- </m-widget> -->
            </v-flex>
            <v-flex md12 xs12>  
               ''
            </v-flex>
            <v-flex md12 xs12>  
                ''
            </v-flex>
            <v-flex md12 xs12>
                <v-layout row wrap>
                    <v-flex xs8>
                        <m-widget title="SUMMARY">
                            <v-container grid-list-md >
                                <v-layout row wrap>                                
                                    <v-flex xs6 >
                                        <v-card class="red text-xs-center">
                                             <h1><span class="white--text"> 
                                                 <!-- <m-labelval :val="totallembaga" class="text--center"/> -->
                                                 <!-- <v-card-text :val="totallembaga" ></v-card-text> -->
                                                   <m-nilai :val="totallembaga"> </m-nilai>
                                                 </span></h1>
                                             <div class="white red--text">LEMBAGA DONOR</div>  
                                            
                                        </v-card>
                                    </v-flex>
                                    <v-flex xs6>
                                         <v-card class="blue-grey text-xs-center">
                                             <h1><span class="white--text">
                                                 <!-- <m-labelval :val="totalkegiatan" class="text--center"/> -->
                                                 <m-nilai :val="totalkegiatan"> </m-nilai>
                                                 </span></h1>
                                             <div class="white blue-grey--text">KEGIATAN</div>  
                                        </v-card>                                       
                                    </v-flex>
                                    <!-- <v-flex xs6 >
                                        <v-card class="green text-xs-center">
                                             <h1><span class="white--text">20</span></h1>
                                             <div class="white blue-grey--text">KEGIATAN</div> 
                                             
                                        </v-card>
                                    </v-flex>
                                    <v-flex xs6>
                                         <v-card class="orange text-xs-center">
                                             <h1><span class="white--text">14</span></h1>
                                             <div class="white orange--text">KEGIATAN SELESAI</div>  
                                        </v-card>                                       
                                    </v-flex> -->
                                </v-layout>
                            </v-container>
                        </m-widget>
                    </v-flex>

                    <v-flex xs4>
                         <v-card class="blue-grey text-xs-center">       
                            <v-card-title primary-title>
                             <h4>   <span class="white--text">% PEMBIAYAAN BERDASARKAN KEGIATAN</span></h4>
                            </v-card-title>                          
                        <!-- <m-widget title="% PEMBIAYAAN BERDASARKAN KEGIATAN"> -->
                            <AreaChartPie/>
                        <!-- </m-widget> -->
                         </v-card>
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
                        <v-card class="blue-grey text-xs-center">       
                            <v-card-title primary-title>
                             <h4>   <span class="white--text">% JUMLAH BIAYA BERDASARKAN WILAYAH</span></h4>
                            </v-card-title>  
                        <!-- <m-widget  class=" font-weight-light" title="% JUMLAH BIAYA BERDASARKAN WILAYAH" aria-setsize="8"> -->
                           
                            <AnggaranChartPie/>
                        <!-- </m-widget> -->
                        </v-card>
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
            totalkegiatan: '',
            revitalization: '',
            peatlandrewetting: '',
            revegetasi: '',
            baseStabilization: '',
            instSrengthening: '',
            coopImprove: '',
            actifRoles: '',
            peatlandRestoration: '',
            administrationManagement: '',
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
            // headers: [
            //     { text: 'Name', value: 'name', sortable: false},
            //     { text: 'Value', value: 'value', sortable: false},
            //  ],
             items : [
                // { name:"kalau ini", value: this.instStrengthening},
             ],
        //     headers: [{
        //         text: 'kegiatan',
        //         align: 'left',
        //         sortable: false,
        //         value: 'name'

        //     },
        //     {
        //         text: 'total',
        //         align: 'left',
        //         sortable: false,
        //         value: 'nilai'
                
        //     }],
        //    harga: [{
        //         name: 'peatland',
        //         value: 'peatlandrewetting'

        //     },
            // {   name:'revegetasi', value:'revegetasi'
            // },
            // ]
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
             this.$store.dispatch('donordash/totalkegiatan')
            .then(res=>{
                this.totalkegiatan = res.status;
            })
            this.$store.dispatch('donordash/totallembaga')
            .then(res=>{
                this.totallembaga = res.id;
            })
            this.$store.dispatch('donordash/getPlanningrevegetasi')
            .then(res=>{
                this.revegetasi = res.anggaran;
            })
             this.$store.dispatch('donordash/getPlanningrevitalization')
            .then(res=>{
                this.revitalization = res.anggaran;
            })
             this.$store.dispatch('donordash/getPlanningStabilization')
            .then(res=>{
                this.baseStabilization = res.anggaran;
            })  
            this.$store.dispatch('donordash/getPlanninginstStrengthening')
            .then(res=>{
                this.instStrengthening = res.anggaran;
                this.semua = this.instStrengthening;
            }) 

            
             this.$store.dispatch('donordash/getPlanningcoopImprove')
            .then(res=>{
                this.coopImprove = res.anggaran;
            })
            this.$store.dispatch('donordash/getPlanningactifRoles')
            .then(res=>{
                this.actifRoles = res.anggaran;
            })
            this.$store.dispatch('donordash/getPlanningpeatlandRestoration')
            .then(res=>{
                this.peatlandRestoration = res.anggaran;
            })      
            this.$store.dispatch('donordash/getPlanningadminstrartionManagement')
            .then(res=>{
                this.adminstrartionManagement = res.anggaran;
            })
                  this.$store.dispatch('donordash/getKhg',{...this.filter,page:pg})
            .then(res=>{
                // let index = 0
                // ada pagging
                // console.log(res.data)
                this.page = res
                // this.items = res.data //res.data.map((d)=>{d.index=index++;return d})
                this.items = res.data ? Object.keys(res.data).map(k=>({...res.data[k], id:res.data[k].id})) : []
                
                // console.log(this.items)
                this.loading = false
            })
            .catch(()=>this.loading=false)
            // this.$store.dispatch('donordash/getKhg')
            // // .then(([a])=>{
            // //     this.items = a
               
            // // })
            // .then(res=>{
            //     // this.options.series[0].data = res ? Object.values(res) : []
            //    // this.items = res.data ? Object.keys(res.data).map(k=>({...res.data[k], id:res.data[k].id})) : []
            //     //   this.items= res.name;
            //     //   document.write(this.items);
            // //                  this.items =[
            // //     { name:"kalau ini", value: "ss"},
            // //     { name:"kalau ini", value: this.instStrengthening},
            // //  ]
            // })
            // .catch(()=>this.loading=false)
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
        }
        // load(pg=1){
        //     this.loading = true
        //     this.$store.dispatch('donordash/getKhg',{...this.filter,page:pg})
        //     .then(res=>{
        //         // let index = 0
        //         // ada pagging
        //         // console.log(res.data)
        //         this.page = res
        //         // this.items = res.data //res.data.map((d)=>{d.index=index++;return d})
        //         this.items = res.data ? Object.keys(res.data).map(k=>({...res.data[k], id:res.data[k].id})) : []
                
        //         // console.log(this.items)
        //         this.loading = false
        //     })
        //     .catch(()=>this.loading=false)
        // },
    }
}
</script>

<style>
@import "~leaflet.markercluster/dist/MarkerCluster.css";
@import "~leaflet.markercluster/dist/MarkerCluster.Default.css";
.map{  height:100vh; width: 100vw; }

  m-widget {
    font-size: 2em;
  }

</style>
