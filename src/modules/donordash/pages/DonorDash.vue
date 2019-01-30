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
                            hide-headers="true"
                            :items="harga"
                            class="elevation-1">
                                <template slot="items" slot-scope="props">
                                    
                                     <td class="text-xs-left">{{ props.item.nama}}</td>
                                    
                                     
                                    <v-card>
                                    <m-single-stat
                                        :statValue="anggaran | toC"
                                        />
                                    </v-card>
                                    
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
import MWidget from '@/components/MWidget'
import MSingleStat from '@/components/MSingleStat'
import AnggaranChartPie from '../components/AnggaranChartPie'
import FundingSourceChartPie from '../components/FundingSourceChartPie'
import AreaChartPie from '../components/AreaChartPie'
import ActionChartPie from '../components/ActionChartPie'
export default {
    components : {
        MWidget,
        MSingleStat,
        AnggaranChartPie,
        FundingSourceChartPie,
        AreaChartPie,
        ActionChartPie,
    },
    data(){
        return {
            anggaran: '',
            
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
           harga: [{
                nama:'Peatland Rewetting',
                value:'anggaran'

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
            this.$store.dispatch('donordash/getPlanningAnggaran')
            .then(res=>{
                this.anggaran = res.anggaran;
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
