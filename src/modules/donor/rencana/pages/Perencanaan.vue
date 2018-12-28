<template>
    <v-container grid-list-xs fill-height>
        <v-layout>
            <v-flex xs12>
                <v-card flat class="pb-3">
                    <v-card-title class="elevation-1 font-weight-bold">
                        PERENCANAAN KEGIATAN DONOR
                        <v-spacer></v-spacer>
                        <v-btn @click.native="$router.push({name:'donor_rencana_baru'})">Kegiatan Baru</v-btn>
                    </v-card-title>
                    <v-card-text class="py-0">
                        <v-container grid-list-md class="pa-0">
                            <v-layout row wrap>
                                <v-flex md2 sm6>
                                    <v-text-field
                                        append-icon="search"
                                        label="Kode"
                                        single-line
                                        hide-details
                                        @input="q_code"
                                    ></v-text-field>
                                </v-flex>
                                <v-flex md2 sm6>
                                    <v-autocomplete
                                        clearable
                                        :items="list_province"
                                        item-text="longName"
                                        item-value="provinceId"
                                        label="Provinsi"
                                        hide-details
                                        v-model="filter.qf_province_id"
                                    ></v-autocomplete>
                                </v-flex>
                                <v-flex md2 sm6>
                                    <v-autocomplete
                                        clearable
                                        :items="list_city"
                                        item-text="shortName"
                                        item-value="cityId"
                                        label="Kota/Kab."
                                        hide-details
                                        v-model="filter.qf_city_id"
                                    ></v-autocomplete>
                                </v-flex>
                                <v-flex md2 sm6>
                                    <v-autocomplete
                                        clearable
                                        :items="list_fundingSource"
                                        label="Sumber Anggaran"
                                        item-text="remark"
                                        item-value="id"
                                        hide-details
                                        v-model="filter.qf_funding_source"
                                    ></v-autocomplete>
                                </v-flex>
                                <v-flex md2 sm6>
                                    <v-autocomplete
                                        clearable
                                        :items="list_status"
                                        label="Status"
                                        item-text="remark"
                                        item-value="id"
                                        hide-details
                                        v-model="filter.qf_status"
                                    ></v-autocomplete>
                                </v-flex>
                                <v-flex md2 sm6>
                                    <v-btn block color="primary" outline @click="load(1)">Filter</v-btn>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-text>
                    <v-data-table
                        :headers="headers"
                        :items="items"
                        item-key="id"
                        :rows-per-page-items="[10]"
                        :total-items="page.total"
                        @update:pagination="pageUpdated"
                    >
                        <template slot="items" slot-scope="props">
                            <tr @click="props.expanded = !props.expanded">
                                <td>
                                    <v-layout row>
                                        <div :class="statusCls(props.item)" class="mr-1" style="width: 5px;"></div>
                                        {{ props.item.title }}
                                    </v-layout>
                                </td>
                                <td class="">{{ props.item.administrativeArea.province.longName }}</td>
                                <td class="">{{ props.item.administrativeArea.city ? props.item.administrativeArea.city.shortName : '-' }}</td>
                                <td class="">{{ props.item.currency.code }}</td>
                                <td class="text-xs-right">{{ props.item.amount | toC }}</td>
                                <td class="">{{ props.item.fundingSource ? props.item.fundingSource.shortName : '-'}}</td>
                                <td>
                                    <v-icon @click.stop="props.expanded = !props.expanded" :class="{'arr_open':props.expanded}" small>keyboard_arrow_down</v-icon>
                                </td>
                            </tr>
                        </template>
                        <template slot="expand" slot-scope="props">
                            <v-form v-model="props.item.valid">
                                <v-card flat color="grey lighten-5" class="ra-0">
                                    <v-card-text class="px-5">
                                        <v-layout row wrap>
                                            <v-flex md6>
                                                <m-labelval label="" val="" class="mt-2"/>
                                                <m-labelval class="font-weight-light" label="Lokasi Kegiatan" val=""/>
                                                <v-layout row wrap>
                                                    <v-flex md6>
                                                        <v-text-field v-model="props.item.administrativeArea.province.longName" label="Provinsi" disabled></v-text-field>
                                                    </v-flex>
                                                    <v-flex md6>
                                                        <v-text-field 
                                                            v-if="props.item.administrativeArea.city"
                                                            v-model="props.item.administrativeArea.city.longName" 
                                                            label="Kota/Kab." disabled>
                                                        </v-text-field>
                                                        <v-text-field
                                                            v-else label="Kota/Kab." disabled>
                                                        </v-text-field>
                                                    </v-flex>
                                                    <!-- <v-flex md6>
                                                        <v-text-field 
                                                            v-if="props.item.administrativeArea.subDistrict"
                                                            v-model="props.item.administrativeArea.subDistrict.shortName" 
                                                            label="Kecamatan" disabled
                                                        ></v-text-field>
                                                        <v-text-field 
                                                            v-else label="Kecamatan" disabled
                                                        ></v-text-field>
                                                    </v-flex>
                                                    <v-flex md6>
                                                        <v-text-field v-model="props.item.administrativeArea.village" label="Desa" disabled></v-text-field>
                                                    </v-flex> -->
                                                    <v-flex md12>Kesatuan Hidrologis Gambut</v-flex>
                                                    <v-chip v-for="n in props.item.phu" :key="n.id">{{ n.name }}</v-chip>
                                                    <v-flex md12>Relevansi dengan Mandat BRG</v-flex>
                                                    <v-chip v-for="n in props.item.brgMandat" :key="n.id">{{ n.descEn }}</v-chip>
                                                </v-layout>
                                            </v-flex>
                                            <v-flex md6>
                                                <v-layout row wrap pl-2>
                                                    <v-flex md2>
                                                        <v-text-field v-model="props.item.currency.code" label="Mata Uang" disabled></v-text-field>
                                                    </v-flex>
                                                    <v-flex md4>
                                                        <v-text-field v-model="props.item.amount" label="Nominal Anggaran" disabled></v-text-field>
                                                    </v-flex>
                                                    <v-flex md6>
                                                        <v-text-field v-model="props.item.fundingSource.shortName" label="Sumber Anggaran" disabled></v-text-field>
                                                    </v-flex>
                                                    <v-flex md12>
                                                        <v-textarea v-model="props.item.remark" label="Catatan" disabled></v-textarea>
                                                    </v-flex>
                                                </v-layout>
                                            </v-flex>
                                        </v-layout>
                                    </v-card-text>
                                    <v-divider></v-divider>
                                    <v-card-actions class="grey lighten-2">
                                        <template>
                                            <v-spacer></v-spacer>
                                            <v-btn @click="edit(props.item)" flat color="primary">Edit/Lihat</v-btn>
                                        </template>
                                    </v-card-actions>
                                </v-card>
                            </v-form>
                        </template>
                    </v-data-table>                
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>

</template>

<script>
import {STATUS_INIT, STATUS_APPROVE, STATUS_REJECT,
        STATUS_INIT_STR, STATUS_APPROVE_STR, STATUS_REJECT_STR} from '@/const'
export default {
    components : {
    },
    data(){
        return {
            STATUS_INIT,
            STATUS_APPROVE,
            STATUS_REJECT,
            loading: false,
            headers: [
                {
                    text: 'Nama',
                    align: 'left',
                    sortable: false,
                    value: 'title'
                },
                { text: 'Provinsi', value: 'administrativeArea.province.longName', sortable: false},
                { text: 'Kota/Kab.', value: 'administrativeArea.city.shortName', sortable: false},
                { text: '', value: 'currency.code', sortable: false},
                { text: 'Anggaran', value: 'amount', sortable: false },
                { text: 'Sumber Anggaran', value: 'fundingSource.shortName', sortable: false },
                { text: '',sortable : false}
            ],
            items : [],
            list_province : [],
            list_city : [],
            list_fundingSource : [],
            list_status: [
                {'id': 1, 'remark': 'Diajukan'},
                {'id': 2, 'remark': 'Disetujui'},
                ],
            page  : {},
            filter : {
                qf_code : null,
                qf_province_id : null,
                qf_city_id : null,
                qf_funding_source : null,
                qf_status : null,
            }
        }
    },
    methods: {
        q_code(val) {
            this.filter.qf_code = val ? "~" + val : null
        },
        loadFilter(){
            Promise.all([
            this.$store.dispatch('administrativeArea/getTargetedProv'),
            this.$store.dispatch('donor/perencanaan/getOrg'),
            ])
            .then(arr=>{
                [this.list_province,this.list_fundingSource] = arr
            })
        },
        statusCls(item){
            if (item.status==null || item.status.id==STATUS_INIT) 
                return 'orange lighten-3'
            else if (item.status.id==null || item.status.id==STATUS_APPROVE)
                return 'success darken-1'
            else
                return 'error darken-1'
        },
        statusStr(item){
            if (!item.status)
                return STATUS_INIT_STR;
            switch (item.status.id){
                case STATUS_INIT : return STATUS_INIT_STR
                case STATUS_APPROVE : return STATUS_APPROVE_STR
                case STATUS_REJECT : return STATUS_REJECT_STR
                default :
                    return ''
            }
        },
        add(){
            this.$refs.dlg.open()
            .then(e=>e)
            .catch(e=>e)
        },
        load(pg=1){
            this.loading = true
            this.$store.dispatch('donor/perencanaan/get',{...this.filter,page:pg})
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
        },
        pageUpdated(o){
            // console.log(o)
            this.load(o.page)
        },
        edit(item){
            this.$router.push({name:'donor_rencana_detail', params : {id : item.id}})
        },
    },
    mounted(){
        this.load()
        this.loadFilter()
    },
    computed:{
        prov(){
            return this.filter.qf_province_id
        }
    },
    watch: {
        prov(n){
            if(!n) {
                this.list_city = []
                return
            }
            this.$store.dispatch('administrativeArea/getKota',n)
            .then(res=>{
                this.list_city = res
            })
        }
    }

}
</script>

<style>
    .arr_open {
        transform: rotate(-180deg);
    }
</style>
