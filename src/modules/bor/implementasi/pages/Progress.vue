<template>
    <v-container grid-list-md>
        <v-layout column>
            <v-flex xs12>                
            <v-card class="pa-3">
              <v-card-text>
                  <v-layout column>
                      <v-layout row wrap align-center>
                        <v-flex xs2>
                            Fisik
                        </v-flex>
                        <v-flex xs10>
                            <v-slider :thumb-size="24" thumb-label="always"></v-slider>
                        </v-flex>
                      </v-layout>
                      
                      <v-layout row wrap align-center>
                        <v-flex xs2>
                            Keuangan
                        </v-flex>
                        <v-flex xs10>
                            <v-slider :thumb-size="24" thumb-label="always"></v-slider>
                        </v-flex>
                      </v-layout>                      
                  </v-layout>
                  
              </v-card-text>
            </v-card>
                        </v-flex>

        </v-layout>
    </v-container>
</template>
<style>
    #cana_detail .v-tabs__bar {
        display: none;
    }
</style>

<script>
import KHG from '../../components/KHG'
export default {
    components : {
        KHG
    },
    data(){
        return {
            tab : 0,
            plan : null, // keseluruhan object
            doc : null, // hanya general activity
            list_zoneType : [],
            list_constructionType : [],
            list_fundingSource : [],            
            list_phu  : [],
            list_provinsi : [],
            list_kota : [],
            list_kec : [],
            list_desa : [],

            lampiran : [
                {
                    id : 1,
                    fileType : 'doc',
                    fileName : 'KAK Konstruksi Sumur Bor.doc',
                    url : '',
                    keterangan : 'KAK Konstruksi Sumur Bor'
                },
                {
                    id : 2,
                    fileType : 'pdf',
                    fileName : 'Blueprint.pdf',
                    url : '',
                    keterangan : 'Blueprint'
                },          
                {
                    id : 3,
                    fileType : 'pdf',
                    fileName : 'Denah.pdf',
                    url : '',
                    keterangan : 'Ini Denah konstruksi versi 1.0'
                },                          
            ]
        }
    },
    mounted(){
        this.loadData()
        this.loadChoice()
    },
    methods:{
        loadData(){
            return this.$store.dispatch('bor/perencanaan/show', parseInt(this.$route.params.id))
            .then(res=>{
                this.plan = res
                this.doc = res.generalActivity
                this.list_constructionType = [{id: this.doc.type.id, desc : this.doc.type.desc}]
                this.list_zoneType = [{id: this.doc.zoneType.id, desc : this.doc.zoneType.desc}]
            })
        },        
        loadChoice(){
            return Promise.all([
                this.$store.dispatch('zoneType/get'),
                this.$store.dispatch('constructionType/get'),
                this.$store.dispatch('fundingSource/get'),
                this.$store.dispatch('phu/get'),
                
                this.$store.dispatch('administrativeArea/getProv'),
                Promise.resolve([]),
                Promise.resolve([]),
            ])
            .then(([a,b, c, d, e, f, g])=>{
                this.list_zoneType = a
                this.list_constructionType = b
                this.list_fundingSource = c
                this.list_phu = d

                this.list_provinsi = e
                this.list_kota = f
                this.list_kec = g
            })
        },
        save(){
            this.$store.dispatch('bor/perencanaan/update', this.plan)
            .then(()=>{
                this.$success('Data Perencanaan berhasil disimpan')
                this.$router.push({name:'bor_rencana'})
            })
        }
    },
    computed:{
        prov(){
            return this.doc && this.doc.administrativeArea ? this.doc.administrativeArea.province : null
        },
        kota(){
            return this.doc && this.doc.administrativeArea ? this.doc.administrativeArea.city : null
        },
        kec(){
            return this.doc && this.doc.administrativeArea ? this.doc.administrativeArea.subDistrict : null
        }
    },
    watch:{
        prov(n){
            if (!n){
                this.list_kota = []
                // this.doc.administrativeArea.city = null
                return
            }
            this.$store.dispatch('administrativeArea/getKota',n.provinceId)
            .then(res=>{
                this.list_kota = res
            })
        },
        kota(n){
            if (!n){
                this.list_kec = []
                // this.doc.administrativeArea.subDistrict = null
                // this.doc.administrativeArea.village = null
                return
            }
            this.$store.dispatch('administrativeArea/getKec',n.cityId)
            .then(res=>{
                this.list_kec = res
            })
        }
    }
}
</script>

<style>

</style>
