<template>
    <v-container grid-list-xs fill-height>
        <v-layout>
            <v-flex xs12>
                <v-card class="pb-3">
                    <v-card-title class="elevation-1">
                        Pelaksanaan Revitalisasi
                        <v-spacer></v-spacer>
                    </v-card-title>                                        
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
                                <!-- <td class="">{{ props.item.generalActivity.unit }}</td>
                                <td class="text-xs-right">{{ props.item.generalActivity.affectedArea }}</td>
                                <td class="">{{ pVal(props.item.generalActivity.zoneType,'desc') }}</td> -->
                                <td class="text-xs-right">{{ props.item.generalActivity.cost | toC }}</td>
                                <td class="">{{ props.item.generalActivity.fundingSource ? props.item.generalActivity.fundingSource.type+' '+props.item.generalActivity.fundingSource.year : '-'}}</td>
                                <td>
                                    <v-icon @click.stop="props.expanded = !props.expanded" :class="{'arr_open':props.expanded}" small>keyboard_arrow_down</v-icon>
                                </td>
                            </tr>
                        </template>
                        <template slot="expand" slot-scope="props">
                            <v-card flat color="grey lighten-5" class="ra-0">
                                <v-card-text class="px-5">
                                    <!-- <v-layout column>
                                        <v-layout row justify-center align-center v-for="i in 5" :key="i">
                                            <v-flex xs2>
                                                Progress 1
                                            </v-flex>
                                            <v-flex xs10>
                                                <v-progress-linear :indeterminate="false" :value="Math.random()*100"></v-progress-linear>
                                            </v-flex>
                                        </v-layout>
                                    </v-layout> -->
                                </v-card-text>                                   

                                <v-divider></v-divider>
                                <v-card-actions class="grey lighten-2" v-if="props.item.status.id==STATUS_INIT">
                                    <template>
                                        <v-spacer></v-spacer>
                                        <v-btn @click="edit(props.item)" flat color="warning darken-2">Edit</v-btn>
                                        <!-- <v-btn @click="progress(props.item)" flat color="info darken-2">Progres</v-btn> -->
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
                    sortable: true,
                    value: 'generalActivity.name'
                },
                { text: 'Kode', value: 'generalActivity.code'},
                // { text: 'Unit', value: 'generalActivity.unit' },
                // { text: 'Luas (Ha)', value: 'generalActivity.affectedArea' },
                // { text: 'Tipe Kawasan', value: 'generalActivity.zoneType.desc' },
                { text: 'Biaya', value: 'generalActivity.cost' },
                { text: 'Anggaran', value: 'generalActivity.fundingSource.remark' },
                { text: '',sortable : false}
            ],
            items : [],
         
            page  : {},
        }
    },
    methods: {
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
            this.$store.dispatch('revitalisasi/implementasi/get',{page:pg})
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
            this.$router.push({name:'revitalisasi_implementasi_detail', params : {id : item.id}})
        },
        progress(item){
            this.$router.push({name:'revitalisasi_implementasi_progress', params : {id : item.id}})
        },        
        approve(item){
            this.$confirm(`Setujui rencana ini ?<br><strong class="text-xs-center d-block title">${item.generalActivity.code}<br>${item.generalActivity.name}</strong>`)
            .then(()=>{
                return this.$store.dispatch('revitalisasi/implementasi/approveReject',{id:item.generalActivity.id, is_approve : true})
            })            
            .then(()=>{
                this.load()
            })
        },
        reject(item){
            this.$confirmDanger(`Tolak rencana ini ?<br><strong class="text-xs-center d-block title red--text">${item.generalActivity.code}<br>${item.generalActivity.name}</strong>`)
            .then(()=>{
                return this.$store.dispatch('revitalisasi/implementasi/approveReject',{id:item.generalActivity.id, is_approve : false})
            })            
            .then(()=>{
                this.load()
            })
        }
    },
    mounted(){
        this.load()
    }

}
</script>

<style>
    .arr_open {
        transform: rotate(-180deg);
    }
</style>
