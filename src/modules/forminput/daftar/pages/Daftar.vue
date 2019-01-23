<template>
    <v-container grid-list-xs fill-height>
        <v-layout>
            <v-flex xs12>
                <v-card class="pb-3">
                    <v-card-title class="elevation-1 font-weight-bold">
                        FORM INPUT  DONOR MAPPING OF BRG (BADAN RESTORASI GAMBUT) INDONESIA
                    </v-card-title>
                    <v-container fluid>
                   
                    <v-card-text>
                        GENERAL INFORMATION
                    </v-card-text>
                            <v-layout row>
                            <v-flex xs4>
                                <v-subheader>Country</v-subheader>
                            </v-flex>
                            <v-flex xs8>
                                <v-text-field
                                label="Country"
                                value=" "
                                
                                ></v-text-field>
                            </v-flex>
                            </v-layout>

                            <v-layout row>
                            <v-flex xs4>
                                <v-subheader>Name Of Instituion</v-subheader>
                            </v-flex>
                            <v-flex xs8>
                                <v-text-field
                                label="Institution"
                                value=""
                                
                                ></v-text-field>
                            </v-flex>
                            </v-layout>

                            <v-layout row>
                            <v-flex xs4>
                                <v-subheader>Upload Logo</v-subheader>
                            </v-flex>
                            <v-flex xs8>
                                <v-text-field
                                label="Upload Image"
                                value=""
                                suffix=""
                                ></v-text-field>
                            </v-flex>
                            </v-layout>

                        <v-card-text>
                        FUNDING SOURCE
                        </v-card-text>
                        <v-layout row>
                            <v-flex xs4>
                                <v-subheader>Name Of Instituion</v-subheader>
                            </v-flex>
                            <v-flex xs8>
                                <v-text-field
                                label="Institution"
                                value=""
                                suffix=""
                                ></v-text-field>
                            </v-flex>
                            </v-layout>
                        <v-card-text>
                        IMPLEMENTING AGENCY
                        </v-card-text>
                        <v-layout row>
                            <v-flex xs4>
                                <v-subheader>Name Of Instituion</v-subheader>
                            </v-flex>
                            <v-flex xs8>
                                <v-text-field
                                label="Institution"
                                value=""
                                suffix=""
                                ></v-text-field>
                            </v-flex>
                            </v-layout>
                        <v-layout row>
                            <v-flex xs4>
                                <v-subheader>TYPE OF DEVELOPMENT PARTNER KEY ACTIVITIES</v-subheader>
                            </v-flex>
                            <v-flex xs8>
                                <v-text-field
                                label="choice"
                                value=""
                                suffix=""
                                ></v-text-field>
                            </v-flex>
                            </v-layout>
                        <v-layout row>
                            <v-flex xs4>
                                <v-subheader>FOCAL POINT TO BRG</v-subheader>
                            </v-flex>
                            <v-select
                            v-model="select"
                            :items="organisasi"
                            :rules="[v => !!v || 'Item is required']"
                            label="Item"
                            required
                            ></v-select>
                            </v-layout>
                            
  </v-container>
                        
                                   
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

export default {
    components : {
    },
    data: ()=>({
                select: null,
                organisasi: [
                    'NATIONAL NGO',
                    'INTERNATIONAL NGO',
                    'BILATERAL',
                    'TRUST FUND',
                    'UNIVERSITY',
                    'IMPLEMENTING PARTNER/CONTRACTOR',
                    'GOVERNMENT',
                    'DEVELOPMENT BANK',
                    'RESEARCH CENTER',
                    'ASSOCIATION OF DISTRICT HEADS',
                    'INSTITUTION',
                    'KONSORSIUM',
                    'MULTILATERAL',
                    'OTHER'
                ],
    }),
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
