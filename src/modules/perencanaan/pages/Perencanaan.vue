<template>
    <v-container grid-list-lg fill-height>
        <v-layout row wrap fill-height >
            <v-flex md12>
                DASHBOARD PERENCANAAN RESTORASI BRG
            </v-flex>
            
            <v-flex md12 xs12>
                <v-layout row wrap>
                    
                    <v-flex md2 sm6>
                        <v-autocomplete
                            clearable
                            :items="list_province"
                            item-text="year"
                            item-value="year"
                            label="TAHUN"
                            hide-details
                            v-model="filter.qf_year"                            
                        ></v-autocomplete>
                    </v-flex>                        
                    <v-flex md2 sm6>
                        <v-autocomplete
                            clearable
                            :items="list_province"
                            item-text="longName"
                            item-value="provinceId"
                            label="PROVINSI"
                            hide-details
                            v-model="filter.qf_province_id"
                        ></v-autocomplete>
                    </v-flex>
                    <v-flex md2 sm6>
                        <v-autocomplete
                            clearable
                            :items="list_province"
                            item-text="name"
                            item-value="code"
                            label="KHG"
                            hide-details
                            v-model="filter.qf_code"                            
                        ></v-autocomplete>
                    </v-flex>
                    <v-flex md2 sm6>
                        <v-btn block color="primary" outline @click="load()">Filter</v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
            
            <v-flex md12 xs12>
                <v-layout row wrap>
                    <v-flex xs4 md3>
                        <m-single-stat
                            title="Total Anggaran"
                            :statValue="'Rp.' + ($options.filters.toC(totalCost)) + ',-'"
                            />
                    </v-flex>
                    <v-flex xs4 md2>
                        <m-single-stat
                            title="Luas Area"
                            :statValue="totalArea | toC"
                            statPrefix="Hektar"
                            />
                    </v-flex>
                    <v-flex xs4 md3>
                        <m-single-stat
                            title="Tindakan Restorasi"
                            :statValue="totalAction | toC"
                            statPrefix="Tindakan"
                            />
                    </v-flex>
                    <v-flex xs4 md2>
                        <m-single-stat
                            title="Jumlah DPG"
                            statValue="7.500"
                            statPrefix="Desa Peduli Gambut"
                            />
                    </v-flex>
                    <v-flex xs4 md2>
                        <m-single-stat
                            title="Jumlah UPRG"
                            statValue="200"
                            statPrefix="Instansi"
                            />
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex md12 xs12>
                 <v-layout row wrap>
                    <v-flex xs8>
                        <m-widget title="Jumlah Kegiatan Tindakan">
                            <v-container grid-list-md >
                                <v-layout row wrap>    
                                    <v-flex xs3>
                                        <v-card class="pb-3">
                                            <v-card-title class="elevation-1 justify-center" text-xs-center>
                                                <div>
                                                    <h3><span class="green--text">Total R1</span></h3>  
                                                    <div class="green--text">2500 Tindakan</div>                                        
                                                </div>                                           
                                            </v-card-title>
                                            <v-card-text>
                                                R1.1 = 1000<br>
                                                R1.2 = 750<br>
                                                R1.3 = 750<br>
                                            </v-card-text>
                                        </v-card>
                                    </v-flex>
                                    <v-flex xs3>
                                        <v-card class="pb-3">
                                            <v-card-title class="elevation-1 justify-center">
                                                <div>
                                                    <h3><span class="blue--text">Total R2</span> </h3>                                          
                                                    <div class="blue--text">2000 Tindakan</div>                                        
                                                </div>
                                            </v-card-title>
                                            <v-card-text>
                                                R2.1 = 1000<br>
                                                R2.2 = 500<br>
                                                R2.3 = 500<br>
                                            </v-card-text>
                                        </v-card>
                                    </v-flex>
                                    <v-flex xs6>
                                        <v-card class="pb-3">
                                            <v-card-title class="elevation-1 justify-center">
                                                <div>
                                                    <h3><span class="red--text">Total R3</span></h3>                                          
                                                    <div class="red--text">500 Tindakan</div>                                        
                                                </div>                                            
                                            </v-card-title>
                                            <v-card-text>                                            
                                                <tr><td>DESA PEDULI GAMBUT &nbsp;</td><td> : 100</td></tr>
                                                <tr><td>PENINGKATAN KAPASITAS &nbsp;</td><td> : 100</td></tr>
                                                <tr><td>KOMODITAS ON FARM &nbsp;</td><td> : 100</td></tr>
                                                <tr><td>KOMODITAS OFF FARM &nbsp;</td><td> : 100</td></tr>
                                                <tr><td>KEGIATAN NON FARM &nbsp;</td><td> : 100</td></tr>
                                            </v-card-text>
                                        </v-card>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </m-widget>
                    </v-flex>
                    
                    <v-flex xs4>
                        <m-widget title="Alokasi Anggaran per Provinsi">
                            <AnggaranChartPie/>
                        </m-widget>
                    </v-flex>
                 </v-layout>
            </v-flex>
            <v-flex md12 xs12>
                <v-layout row wrap>
                    <v-flex xs8>
                        <m-widget title="Biaya Per Kegiatan Tindakan">
                            <v-container grid-list-md >
                                <v-layout row wrap>                                
                                    <v-flex xs3>
                                        <v-card class="pb-3">
                                            <v-card-title class="elevation-1 justify-center">
                                                <div>
                                                    <h3><span class="green--text">Total R1</span></h3>
                                                    <div class="green--text">Rp.200.000.000.000,-</div>                                            
                                                </div>                                           
                                            </v-card-title>
                                            <v-card-text>
                                                R1.1 = Rp. 100.000 (Juta)<br>
                                                R1.2 = Rp. 50.000 (Juta)<br>
                                                R1.3 = Rp. 50.000 (Juta)<br>
                                            </v-card-text>
                                        </v-card>
                                    </v-flex>
                                    <v-flex xs3>
                                        <v-card class="pb-3">
                                            <v-card-title class="elevation-1 justify-center">
                                                <div>
                                                    <h3><span class="blue--text">Total R2</span></h3>
                                                    <div class="blue--text">Rp.50.000.000.000,-</div>                                            
                                                </div>
                                            </v-card-title>
                                            <v-card-text>
                                                R1.1 = Rp. 30.000 (Juta)<br>
                                                R1.2 = Rp. 10.000 (Juta)<br>
                                                R1.3 = Rp. 10.000 (Juta)<br>
                                            </v-card-text>
                                        </v-card>
                                    </v-flex>
                                    <v-flex xs6>
                                        <v-card class="pb-3">
                                            <v-card-title class="elevation-1 justify-center">
                                                <div>
                                                    <h3><span class="red--text">Total R3</span></h3>
                                                    <div class="red--text">Rp.50.000.000.000,-</div>                                            
                                                </div>                                            
                                            </v-card-title>
                                            <v-card-text>
                                                <tr><td>DESA PEDULI GAMBUT &nbsp;</td><td> : Rp. 10.000. (Juta)</td></tr>
                                                <tr><td>PENINGKATAN KAPASITAS &nbsp;</td><td> : Rp. 10.000. (Juta)</td></tr>
                                                <tr><td>KOMODITAS ON FARM &nbsp;</td><td> : Rp. 10.000. (Juta)</td></tr>
                                                <tr><td>KOMODITAS OFF FARM &nbsp;</td><td> : Rp. 10.000. (Juta)</td></tr>
                                                <tr><td>KEGIATAN NON FARM &nbsp;</td><td> : Rp. 10.000. (Juta)</td></tr>
                                            </v-card-text>
                                        </v-card>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </m-widget>
                    </v-flex>

                    <v-flex xs4>                        
                        <m-widget title="Luas Area Intervensi per Provinsi">
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
            }
        }
    },
    mounted(){
        this.load()
        this.loadFilter
    },
    methods: {
        load(){
            this.loading = true
            this.$store.dispatch('perencanaan/getPlanningCost')
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
    }
}
</script>

<style>

</style>
