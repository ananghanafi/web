<template>
    <v-container grid-list-xs fill-height>
        <v-layout>
            <v-flex xs12>
                <v-card class="pb-3">
                    <v-card-title class="elevation-1 font-weight-bold">
                        INPUT ANGGARAN KEGIATAN R1,R2
                    </v-card-title>
                    <v-card-text class="py-0">
                        <v-container grid-list-md class="pa-0">
                            <v-layout row wrap>
                                <v-flex md2 sm6>
                                    <v-text-field
                                        append-icon="search"
                                        label="TAHUN"
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
                                        label="KHG"
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
                                        label="KHG"
                                        hide-details
                                        v-model="filter.qf_city_id"
                                    ></v-autocomplete>
                                </v-flex>
                                <v-flex md2 sm6>
                                    <v-autocomplete
                                        clearable
                                        :items="list_fundingSource"
                                        label="KECAMATAN"
                                        item-text="remark"
                                        item-value="id"
                                        hide-details
                                        v-model="filter.qf_funding_source"
                                    ></v-autocomplete>

                                </v-flex>
                                <v-btn block color="primary" outline @click="load(1)">Search</v-btn>
                            </v-layout>

                        </v-container>

                        <v-container grid-list-md class="pa-1">
                            <v-layout row wrap>
                                <v-flex md2 sm6>
                                    <v-autocomplete
                                        clearable
                                        :items="list_province"
                                        label="PROVINSI"
                                        item-text="remark"
                                        item-value="id"
                                        hide-details
                                        v-model="filter.qf_province"
                                    ></v-autocomplete>
                                </v-flex>
                            
                                <v-flex md2 sm6>
                                    <v-autocomplete
                                        clearable
                                        :items="list_kabupaten"
                                        label="KABUPATEN"
                                        item-text="remark"
                                        item-value="id"
                                        hide-details
                                        v-model="filter.qf_kabupaten"
                                    ></v-autocomplete>
                                </v-flex>

                                <v-flex md2 sm6>
                                    <v-autocomplete
                                        clearable
                                        :items="list_desa"
                                        label="DESA"
                                        item-text="remark"
                                        item-value="id"
                                        hide-details
                                        v-model="filter.qf_desa"
                                    ></v-autocomplete>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-text>
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
                                <td class="text-xs-right">{{ props.item.calories }}</td>
                                <td class="text-xs-right">{{ props.item.fat }}</td>
                                <td class="text-xs-right">{{ props.item.carbs }}</td>
                                <td class="text-xs-right">{{ props.item.protein }}</td>
                                <td class="text-xs-right">{{ props.item.iron }}</td>
                                <td>
                                    <v-icon @click.stop="props.expanded = !props.expanded" :class="{'arr_open':props.expanded}" small>keyboard_arrow_down</v-icon>
                                </td>
                            </tr>
                        </template>
                        <template slot="expand" slot-scope="props">
                            <v-card flat color="grey lighten-5" class="ra-0">
                                <v-card-text class="px-5">
                                    <m-labelval label="Nama" 
                                        :val="props.item.generalActivity.name"/>
                                    <m-labelval label="Kode" 
                                        :val="props.item.generalActivity.code"/>
                                    <m-labelval label="Tindakan" 
                                        :val="props.item.generalActivity.revegetationType.desc"/>
                                    <m-labelval label="Status Terbakar"
                                        :val="props.item.generalActivity.burnStatus.desc"/>
                                    <m-labelval label="Tutupan Lahan"
                                        :val="props.item.generalActivity.vegetationDensity.density + ' - ' + props.item.generalActivity.vegetationDensity.landCover"/>
                                    <m-labelval label="Luas (Ha)"
                                        :val="props.item.generalActivity.totalArea"/>
                                    <m-labelval label="Biaya" 
                                        :val="props.item.generalActivity.cost | toC"/>
                                    <m-labelval label="Sumber Anggaran" 
                                        :val="props.item.generalActivity.fundingSource ? props.item.generalActivity.fundingSource.remark : '-'"/>
                                    <m-labelval label="" val="" class="mt-2"/>
                                    <m-labelval class="font-weight-light" label="Kesatuan Hidrologis Gambut" val=""/>
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
                                    
                                    <m-labelval label="" val="" class="mt-2"/>                                        
                                    <m-labelval label="Keterangan" 
                                        :val="props.item.generalActivity.remark | toC"/>
                                    <!-- <m-labelval label="Status" v-if="props.item.status!==null && props.item.status.id!==STATUS_IMPL_INIT"> -->
                                    <m-labelval label="Status">
                                        <v-chip small slot="val" class="white--text elevation-2" :color="statusCls(props.item)">{{ statusStr(props.item) }}</v-chip>
                                    </m-labelval>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions class="grey lighten-2" v-if="props.item.status==null || props.item.status.id==STATUS_IMPL_INIT">
                                    <template>
                                        <v-spacer></v-spacer>
                                        <v-btn @click="edit(props.item)" flat color="warning darken-2">Edit</v-btn>                                        
                                        <v-btn @click="approve(props.item)" flat color="success darken-2">Setujui</v-btn>
                                        <v-btn v-if="false" @click="reject(props.item)" flat color="error darken-2">Totak</v-btn>
                                    </template>
                                </v-card-actions>
                            </v-card>
                        </template>      
                    </v-data-table>                
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import {STATUS_IMPL_INIT, STATUS_IMPL_OPENED, STATUS_IMPL_ONPROGRESS, STATUS_IMPL_CLOSED, STATUS_IMPL_PENDING,
        STATUS_IMPL_INIT_STR, STATUS_IMPL_OPENED_STR, STATUS_IMPL_ONPROGRESS_STR,
        STATUS_IMPL_CLOSED_STR, STATUS_IMPL_PENDING_STR} from '@/const'
export default {
    components : {
    },
    data(){
        return {
            STATUS_IMPL_INIT,
            STATUS_IMPL_OPENED,
            STATUS_IMPL_ONPROGRESS,
            STATUS_IMPL_CLOSED,
            STATUS_IMPL_PENDING,
            loading: false,
            headers: [
                {
                    text: 'No',
                    align: 'left',
                    sortable: true,
                    value: 'generalActivity.name'
                },
                { text: 'Wilayah Administratif', value: 'generalActivity.code'},
                { text: 'KHG', value: 'generalActivity.code'},
                { text: 'UPRG, Koordinatif X,Y', value: 'generalActivity.revegetationType.desc' },
                { text: 'Kategori', value: 'generalActivity.administrativeArea.province.longName'},
                { text: 'Jenis Kegiatan', value: 'generalActivity.administrativeArea.city.shortName' },
                { text: 'Volume', value: 'generalActivity.cost' },
                { text: 'Satuan', value: 'generalActivity.fundingSource.id' },
                { text: 'Anggaran', value: 'generalActivity.code'},
                { text: 'Sumber Anggaran', value: 'generalActivity.code'},
                { text: 'Keterangan Anggaran', value: 'generalActivity.code'},
                { text: 'Action', value: 'generalActivity.code'},
                { text: '',sortable : false}
            ],
            items : [],
            list_province : [],
            // list_city : [],
            list_fundingSource : [],
            page  : {},
            filter : {
                qf_code : null,
                qf_province_id : null,
                // city : null,
                qf_funding_source : null,
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
                // console.log(this.list_province)
            })
        },
        statusCls(item){
            if (item.status==null || item.status.id==STATUS_IMPL_INIT) 
                return 'orange lighten-3'
            else if (item.status.id==null || item.status.id==STATUS_IMPL_OPENED)
                return 'success darken-1'
            else
                return 'error darken-1'
        },
        statusStr(item){
            if (!item.status)
                return STATUS_IMPL_INIT_STR;
            switch (item.status.id){
                case STATUS_IMPL_INIT : return STATUS_IMPL_INIT_STR
                case STATUS_IMPL_OPENED : return STATUS_IMPL_OPENED_STR
                case STATUS_IMPL_ONPROGRESS : return STATUS_IMPL_ONPROGRESS_STR
                case STATUS_IMPL_CLOSED : return STATUS_IMPL_CLOSED_STR
                case STATUS_IMPL_PENDING : return STATUS_IMPL_PENDING_STR
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
            this.$store.dispatch('revegetasi/implementasi/get',{...this.filter,page:pg})
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
            this.$router.push({name:'revegetasi_implementasi_detail', params : {id : item.id}})
        },
        approve(item){
            this.$confirm(`Setujui Kegiatan Ini ?<br><strong class="text-xs-center d-block title">${item.generalActivity.code}<br>${item.generalActivity.name}</strong>`)
            .then(()=>{
                return this.$store.dispatch('revegetasi/implementasi/approveReject',{id:item.generalActivity.id, is_approve : true})
            })            
            .then(()=>{
                this.load()
            })
        },
        reject(item){
            this.$confirmDanger(`Tolak rencana ini ?<br><strong class="text-xs-center d-block title red--text">${item.generalActivity.code}<br>${item.generalActivity.name}</strong>`)
            .then(()=>{
                return this.$store.dispatch('revegetasi/implementasi/approveReject',{id:item.generalActivity.id, is_approve : false})
            })            
            .then(()=>{
                this.load()
            })
        }
    },
    mounted(){
        this.load()
        this.loadFilter()
    }

}
</script>

<style>
    .arr_open {
        transform: rotate(-180deg);
    }
</style>
