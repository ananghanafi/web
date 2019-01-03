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
                            item-value="yearId"
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
                            item-text="longName"
                            item-value="provinceId"
                            label="KHG"
                            hide-details
                            v-model="filter.qf_code"                            
                        ></v-autocomplete>
                    </v-flex>
                    <v-flex md2 sm6>
                        <v-btn block color="primary" outline @click="load(1)">Filter</v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
            <!-- <v-flex md2 sm6>
                <v-text-field
                    append-icon="search"
                    label="Kode"
                    single-line
                    hide-details
                    @input="q_code"
                ></v-text-field>
            </v-flex> -->
            
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
                    <v-flex xs4>                        
                        <m-widget title="Sumber Anggaran">
                            <FundingSourceChartPie />
                        </m-widget>
                    </v-flex>
                    <v-flex xs14>
                        <m-widget title="Alokasi Anggaran per Provinsi">
                            <AnggaranChartPie/>
                        </m-widget>
                    </v-flex>

                    <v-flex xs4>                        
                        <m-widget title="Luas Area Intervensi per Provinsi">
                            <AreaChartPie/>
                        </m-widget>
                    </v-flex>
                    <v-flex xs4>                        
                        <m-widget title="Tindakan Restorasi per Provinsi">
                            <ActionChartPie/>
                        </m-widget>
                    </v-flex>
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
