<template>
    <v-container grid-list-xs fill-height>
        <v-layout>
            <v-flex xs12>
                <v-card class="pb-3">
                    <v-card-title class="elevation-1 font-weight-bold">
                        PERENCANAAN KONSTRUKSI SEKAT KANAL
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
                                        {{ props.item.generalActivity.name }}
                                    </v-layout>
                                </td>
                                <td class="">{{ props.item.generalActivity.code }}</td>
                                <td class="">{{ props.item.generalActivity.administrativeArea.province.longName }}</td>
                                <!-- <td class="">{{ props.item.generalActivity.unit }}</td> -->
                                <!-- <td class="text-xs-right">{{ props.item.generalActivity.affectedArea }}</td> -->
                                <td class="">{{ props.item.generalActivity.administrativeArea.city.shortName }}</td>
                                <!-- <td class="">{{ props.item.generalActivity.canalBlockingType.desc }}</td> -->
                                <td class="text-xs-right">{{ props.item.generalActivity.cost | toC }}</td>
                                <td class="">{{ props.item.generalActivity.fundingSource ? props.item.generalActivity.fundingSource.remark : '-'}}</td>
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
                                                <m-labelval class="font-weight-light" label="KESATUAN HIDROLOGIS GAMBUT" val=""/>
                                                <m-labelval label="Kode" :val="pVal(props.item.generalActivity.phu,'code')"/>
                                                <m-labelval label="Nama" :val="pVal(props.item.generalActivity.phu,'name')"/>
                                                <m-labelval label="" val="" class="mt-2"/>
                                                <m-labelval class="font-weight-light" label="LOKASI KEGIATAN" val=""/>
                                                <m-labelval label="Desa" 
                                                    :val="props.item.generalActivity.administrativeArea.village"/>
                                                <m-labelval label="Kecamatan" 
                                                    :val="pVal(props.item.generalActivity.administrativeArea,'subDistrict','shortName')"/>
                                                <m-labelval label="Kota/Kab." 
                                                    :val="pVal(props.item.generalActivity.administrativeArea,'city','shortName')"/>
                                                <m-labelval label="Provinsi"
                                                    :val="pVal(props.item.generalActivity.administrativeArea,'province','longName')"/>
                                                <m-labelval label="Status" v-if="props.item.status!==null && props.item.status.id!==STATUS_INIT" val=" ">
                                                    <v-chip small slot="val" class="white--text elevation-2" :color="statusCls(props.item)">{{ statusStr(props.item) }}</v-chip>
                                                </m-labelval>
                                            </v-flex>
                                            <v-flex md6>
                                                <v-layout row wrap>
                                                    <v-flex md12>
                                                        <v-text-field v-model="props.item.generalActivity.cost" label="Nominal Anggaran" :disabled="isReadOnly(props.item)" :rules="[v => !!v || 'Item is required']"></v-text-field>
                                                    </v-flex>
                                                    <v-flex md8>
                                                        <v-autocomplete 
                                                            v-model="props.item.generalActivity.fundingSource"
                                                            chips
                                                            deletable-chips
                                                            autocomplete
                                                            :items="list_fundingSource"
                                                            item-text="remark"
                                                            item-value="id"
                                                            label="Sumber Anggaran" 
                                                            return-object
                                                            :disabled="isReadOnly(props.item)"
                                                            :rules="[v => !!v || 'Item is required']"
                                                        ></v-autocomplete>
                                                    </v-flex>
                                                    <v-flex md4>
                                                        <v-autocomplete
                                                            v-model="props.item.status"
                                                            chips
                                                            deletable-chips
                                                            autocomplete
                                                            :items="list_status"
                                                            item-text="remark"
                                                            item-value="id"
                                                            label="Status"
                                                            return-object
                                                            disabled
                                                            :color="statusCls(props.item)"
                                                        ></v-autocomplete>
                                                    </v-flex>
                                                    <v-flex md12>
                                                        <v-textarea v-model="props.item.generalActivity.remark" 
                                                            label="KETERANGAN" 
                                                            :disabled="isReadOnly(props.item)"></v-textarea>
                                                    </v-flex>
                                                </v-layout>
                                            </v-flex>
                                        </v-layout>
                                    </v-card-text>
                                    <v-divider></v-divider>
                                    <v-card-actions class="grey lighten-2">
                                        <template>
                                            <v-spacer></v-spacer>
                                            <v-btn @click="edit(props.item)" flat color="warning darken-2">Edit/Lihat</v-btn>
                                            <v-btn @click="updateItems(props.item)" flat color="success darken-2" 
                                                v-if="props.item.status==null || props.item.status.id==STATUS_INIT"
                                                :disabled="!props.item.valid">Setujui</v-btn>
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
                    value: 'generalActivity.name'
                },
                { text: 'Kode', value: 'generalActivity.code', sortable: false},
                { text: 'Provinsi', value: 'generalActivity.administrativeArea.province.longName', sortable: false},
                { text: 'Kota/Kab.', value: 'generalActivity.administrativeArea.city.shortName', sortable: false},
                { text: 'Anggaran', value: 'generalActivity.cost', sortable: false },
                { text: 'Sumber Anggaran', value: 'generalActivity.fundingSource.id', sortable: false },
                { text: '',sortable : false}
            ],
            items : [],
            list_province : [],
            list_fundingSource : [],
            list_city : [],
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
                this.$store.dispatch('fundingSource/get'),
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
        isReadOnly(item){
            if(item.status.id == STATUS_APPROVE)
                return true
            else
                return false
        },
        add(){
            this.$refs.dlg.open()
            .then(e=>e)
            .catch(e=>e)
        },
        load(pg=1){
            this.loading = true
            this.$store.dispatch('skanal/perencanaan/get',{...this.filter,page:pg})
            .then(res=>{
                // let index = 0
                // ada pagging
                // console.log(res.data)
                this.page = res
                // this.items = res.data //res.data.map((d)=>{d.index=index++;return d})
                this.items = res.data ? Object.keys(res.data).map(k=>({...res.data[k], id:res.data[k].generalActivity.id})) : []
                
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
            this.$router.push({name:'skanal_rencana_detail', params : {id : item.id}})
        },
        approve(item){
            this.$confirm(`Setujui rencana ini ?<br><strong class="text-xs-center d-block title">${item.generalActivity.code}<br>${item.generalActivity.name}</strong>`)
            .then(()=>{
                return this.$store.dispatch('skanal/perencanaan/approveReject',{id:item.generalActivity.id, is_approve : true})
            })            
            .then(()=>{
                this.load()
            })
        },
        updateItems(item){
            return this.$store.dispatch('skanal/perencanaan/updateItems',{
                id:item.generalActivity.id, 
                cost:item.generalActivity.cost, 
                funding_source:item.generalActivity.fundingSource.id,
                remark:item.generalActivity.remark,
                status: STATUS_APPROVE})
            .then(() => {
                this.$success('Data Perencanaan berhasil disetujui')
                this.load()
            })
        },
        reject(item){
            this.$confirmDanger(`Tolak rencana ini ?<br><strong class="text-xs-center d-block title red--text">${item.generalActivity.code}<br>${item.generalActivity.name}</strong>`)
            .then(()=>{
                return this.$store.dispatch('skanal/perencanaan/approveReject',{id:item.generalActivity.id, is_approve : false})
            })            
            .then(()=>{
                this.load()
            })
        }
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
