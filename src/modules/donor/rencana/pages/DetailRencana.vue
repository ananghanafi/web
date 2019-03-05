<template>
    <v-container grid-list-md>
    <v-layout column>
        <v-flex xs12>
            <v-card>
                <v-card-text>                
                    <v-form>
                        <v-layout v-if="user" row wrap>
                            <v-flex md6>
                                <v-layout row wrap>
                                    <v-flex md12>
                                        <v-card color="secondary" tile>
                                            <v-card-text>INFORMASI KEGIATAN DONOR</v-card-text>
                                        </v-card>
                                    </v-flex>
                                    <v-flex md4>
                                        <v-text-field
                                            v-model="user.id"
                                            label="ID"
                                            type="number"
                                            disabled
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex md4>                        
                                        <v-text-field v-model="user.title" label="Nama Kegiatan" disabled></v-text-field>
                                    </v-flex>
                                    <v-flex md4>                        
                                        <v-text-field v-model="user.summary" label="Ringkasan Kegiatan" disabled></v-text-field>
                                    </v-flex>
                                    <v-flex md4>                        
                                        <v-text-field v-model="user.amount" label="NOMINAL DANA" ></v-text-field>
                                    </v-flex>
                                    <v-flex md4>                        
                                        <v-text-field v-model="fund.fullName" label="SUMBER DANA " counter="50"></v-text-field>
                                    </v-flex>
                                    <v-flex md4>                        
                                        <v-text-field v-model="cur.code" label="MATA UANG" counter="50"></v-text-field>
                                    </v-flex>
                                    <v-flex md12>                        
                                        <v-text-field v-model="brgMandat.descEn" label="RELEVANSI DENGAN MANDAT BRG" counter="50"></v-text-field>
                                    </v-flex>
                                    <v-flex md12>                        
                                        <v-text-field v-model="impl.fullName" label="IMPLEMENTING AGENCY" counter="50"></v-text-field>
                                    </v-flex>
                                    <v-flex md12>
                                        <v-card color="secondary" tile>
                                            <v-card-text>LOKASI</v-card-text>
                                        </v-card>
                                    </v-flex>
                                    <v-flex md3>                        
                                        <v-text-field v-model="admin.province.longName" label="PROVINSI" counter="50"></v-text-field>
                                    </v-flex>
                                    <v-flex md3>                        
                                        <v-text-field v-model="admin.city.longName" label="KOTA" counter="50"></v-text-field>
                                    </v-flex>
                                    <v-flex md3>                        
                                        <v-text-field v-model="admin.subDistrict.longName" label="KECAMATAN" counter="50"></v-text-field>
                                    </v-flex>
                                    <v-flex md3>                        
                                        <v-text-field v-model="admin.village" label="DESA" counter="50"></v-text-field>
                                    </v-flex>
                                    <v-flex md4>                        
                                        <v-text-field v-model="phu.name" label="KHG" counter="50"></v-text-field>
                                    </v-flex>
                                    <v-flex md4>                        
                                        <v-text-field v-model="user.x" label="LONGITUDE" counter="50"></v-text-field>
                                    </v-flex>
                                    <v-flex md4>                        
                                        <v-text-field v-model="user.y" label="LATITUDE" counter="50"></v-text-field>
                                    </v-flex>
                                    <!-- <v-flex md6>                        
                                        <v-text-field v-model="person.fullName" label="NAMA LENGKAP" counter="50"></v-text-field>
                                    </v-flex>
                                    <v-flex md3>                        
                                        <v-text-field v-model="person.titleSuffix" label="GELAR (belakang)" counter="50"></v-text-field>
                                    </v-flex> -->
                                    <!-- <v-flex md6>
                                        <v-text-field
                                            v-model="person.birthPlace"
                                            label="TEMPAT LAHIR"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex md6>
                                        <m-datepicker v-model="person.birthDate" label="TANGGAL LAHIR"></m-datepicker>
                                    </v-flex>
                                    <v-flex md12>
                                        <v-select 
                                            v-model="person.organization" 
                                            :items="list_org" 
                                            item-text="shortName"
                                            item-value="id"
                                            chips 
                                            label="ORGANISASI" 
                                            multiple
                                            return-object
                                        ></v-select>
                                    </v-flex> -->
                                </v-layout>
                            </v-flex>
                            <v-flex md6>
                                <v-layout row wrap>
                                    <v-flex md12>
                                        <v-card color="secondary" tile>
                                            <v-card-text>LAMPIRAN</v-card-text>
                                        </v-card>
                                    </v-flex>
                                </v-layout>        
                            </v-flex>
                            <v-flex md6 pl-2 pb-2>
                            </v-flex>
                        </v-layout>
                    </v-form>                                
                </v-card-text>
                <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" flat @click.native="$router.push({name:'donor_rencana'})">Batal</v-btn>
                        <v-btn color="primary" flat @click.native="save">Simpan</v-btn>
                    </v-card-actions>                
            </v-card>
        </v-flex>
    </v-layout>
    </v-container>
</template>
<style>
</style>

<script>
export default {
    components : {
    },
    data(){
        return {
            tab : 0,
            user : null, // keseluruhan object
            person : null, // hanya person
            org : null, // hanya organisasi
            cur : null,
            fund : null,
            impl : null,
            admin : null,
            brgMandat : null,
            phu : null,

            list_org : [],            
            list_phu  : [],
            list_provinsi : [],
            list_kota : [],
            list_kec : [],
            list_desa : [],
        }
    },
    mounted(){
        this.loadData()
        this.loadChoice()
    },
    methods:{
        loadData(){
            return this.$store.dispatch('donor/perencanaan/show', parseInt(this.$route.params.id))
            .then(res=>{
                this.user = res
                this.cur = res.currency
                this.fund = res.fundingSource
                this.impl = res. implementingAgency
                this.admin = res.administrativeArea
                this.brgMandat = res.brgMandat
                this.phu = res.phu
                // this.person = res
               
                // this.org = res.person.organization
            })
        },        
        // loadChoice(){
        //     return Promise.all([
        //         this.$store.dispatch('user/get'),
        //         this.$store.dispatch('phu/get'),
                
        //         this.$store.dispatch('administrativeArea/getProv'),
        //         Promise.resolve([]),
        //         Promise.resolve([]),
        //     ])
        //     .then(([c, d, e, f, g])=>{
        //         this.list_org = c
        //         this.list_phu = d

        //         this.list_provinsi = e
        //         this.list_kota = f
        //         this.list_kec = g
        //     })
        // },
        save(){
            this.$store.dispatch('donor/perencanaan/update', this.user)
            .then(()=>{
                this.$success('Data Pengguna berhasil disimpan')
                this.$router.push({name:'donor_rencana'})
            })
        }
    },
    computed:{
        // prov(){
        //     return this.doc && this.doc.administrativeArea ? this.doc.administrativeArea.province : null
        // },
        // kota(){
        //     return this.doc && this.doc.administrativeArea ? this.doc.administrativeArea.city : null
        // },
        // kec(){
        //     return this.doc && this.doc.administrativeArea ? this.doc.administrativeArea.subDistrict : null
        // }
    },
    watch:{
        // prov(n){
        //     if (!n){
        //         this.list_kota = []
        //         // this.doc.administrativeArea.city = null
        //         return
        //     }
        //     this.$store.dispatch('administrativeArea/getKota',n.provinceId)
        //     .then(res=>{
        //         this.list_kota = res
        //     })
        // },
        // kota(n){
        //     if (!n){
        //         this.list_kec = []
        //         // this.doc.administrativeArea.subDistrict = null
        //         // this.doc.administrativeArea.village = null
        //         return
        //     }
        //     this.$store.dispatch('administrativeArea/getKec',n.cityId)
        //     .then(res=>{
        //         this.list_kec = res
        //     })
        // }
    }
}
</script>

<style>

</style>
