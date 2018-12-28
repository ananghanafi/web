<template>
    <v-container grid-list-md>
        <v-layout column>
            <v-flex xs12>
                <v-card>       
                    <v-tabs v-model="tab" fixed centered slider-color="primary lighten-4" class="rt-2">
                        <v-tab>
                            Informasi Umum
                        </v-tab>         
                        <v-tab>
                            Dokumen Terkait
                        </v-tab>     
                    </v-tabs>                 
                    <v-card-text id="cana_detail" class="pa-0 px-2">
                        <v-tabs v-model="tab" fixed>
                            <v-tab>
                                Detil Kegiatan
                            </v-tab>          
                            <v-tab>
                                Dokumen Terkait
                            </v-tab>
                            <!-- Detail Kegiatan -->
                            <v-tab-item>
                                <v-card flat>                   
                                    <v-card-text>                
                                        <v-form>
                                            <v-layout v-if="doc" row wrap>
                                                <v-flex md6>
                                                    <v-layout row wrap>
                                                        <v-flex md12>
                                                            <v-card color="secondary" tile>
                                                                <v-card-text>PERENCANAAN KEGIATAN DONOR</v-card-text>
                                                            </v-card>
                                                        </v-flex>
                                                        <v-flex md12>                        
                                                            <v-text-field v-model="doc.title" label="NAMA KEGIATAN" counter="150"></v-text-field>
                                                        </v-flex>
                                                        <v-flex md6>
                                                            <m-datepicker
                                                                v-model="doc.startDate"
                                                                label="Tanggal Mulai"
                                                            ></m-datepicker>
                                                        </v-flex>
                                                        <v-flex md6>
                                                            <m-datepicker
                                                                v-model="doc.endDate"
                                                                label="Tanggal Selesai"
                                                            ></m-datepicker>
                                                        </v-flex>
                                                        <v-flex md12>
                                                            <v-textarea label="Ringkasan Kegiatan" counter="150" row=3 v-model="doc.summary"></v-textarea>
                                                        </v-flex>
                                                        <v-flex md12>
                                                            <v-card color="secondary" tile>
                                                                <v-card-text>ANGGARAN</v-card-text>
                                                            </v-card>
                                                        </v-flex>
                                                        <v-flex md2>                        
                                                            <v-autocomplete
                                                                v-model="doc.currency"
                                                                chips
                                                                deletable-chips
                                                                small-chips
                                                                autocomplete
                                                                :items="list_currency"
                                                                item-text="code"
                                                                item-value="id"
                                                                label="MATA UANG"
                                                                return-object
                                                            ></v-autocomplete>                        
                                                        </v-flex>
                                                        <v-flex md3>
                                                            <v-text-field
                                                                v-model="doc.amount"
                                                                label="NILAI ANGGARAN"
                                                                type="number"
                                                            ></v-text-field>
                                                        </v-flex>
                                                        <v-flex md7>                        
                                                            <v-autocomplete
                                                                v-model="doc.fundingSource"
                                                                chips
                                                                deletable-chips
                                                                small-chips
                                                                autocomplete
                                                                :items="list_org"
                                                                item-text="shortName"
                                                                item-value="id"
                                                                label="SUMBER ANGGARAN"
                                                                return-object
                                                            ></v-autocomplete>                        
                                                        </v-flex>
                                                        <v-flex md12>
                                                            <v-textarea
                                                                class="mt-3"
                                                                v-model="doc.remark"
                                                                label="CATATAN"
                                                                box
                                                                rows="3"
                                                            >
                                                            </v-textarea>
                                                        </v-flex>
                                                        <v-flex md12>
                                                            <v-autocomplete 
                                                                v-model="doc.brgMandat" 
                                                                chips
                                                                color="primary"
                                                                deletable-chips
                                                                small-chips
                                                                autocomplete
                                                                multiple
                                                                :items="list_brg_mandat"
                                                                item-text="descEn"
                                                                item-value="id"
                                                                label="Relevansi dengan Mandat BRG"
                                                                return-object
                                                            ></v-autocomplete>
                                                        </v-flex>
                                                    </v-layout>
                                                </v-flex>
                                                <v-flex md6 pl-2>
                                                    <v-layout row wrap>
                                                        <v-flex md12>
                                                            <v-card color="secondary" tile>
                                                                <v-card-text>IMPLEMENTING AGENCY</v-card-text>
                                                            </v-card>
                                                        </v-flex>
                                                        <v-flex md4>
                                                            <v-card flat>
                                                                <v-card-text class="text-xs-center">
                                                                    <v-avatar
                                                                    slot="offset"
                                                                    class="mx-auto d-block"
                                                                    size="130"
                                                                    >
                                                                    <img
                                                                    src="/img/logo-wwf.png"
                                                                    >
                                                                </v-avatar>
                                                                </v-card-text>
                                                            </v-card>
                                                        </v-flex>
                                                        <v-flex md8>
                                                            <v-card flat>
                                                                <v-card-title><h1>WWF</h1></v-card-title>
                                                                <v-card-text><h4>World Wide Fund for Nature</h4></v-card-text>
                                                            </v-card>
                                                        </v-flex>
                                                        <v-flex md12>
                                                            <v-card color="secondary" tile>
                                                                <v-card-text>LOKASI</v-card-text>
                                                            </v-card>
                                                        </v-flex>
                                                        <!-- <v-flex md12 pb-2>
                                                            <MiniMap pRef="revegetasi" :doc="doc" :phu="doc ? doc.phu : null" title="LOKASI KEGIATAN" />
                                                        </v-flex> -->
                                                        <v-flex md6 xs12>
                                                            <v-autocomplete 
                                                                v-model="doc.administrativeArea.province"
                                                                chips
                                                                deletable-chips
                                                                small-chips
                                                                autocomplete
                                                                :items="list_provinsi"
                                                                item-text="longName"
                                                                item-value="id"
                                                                label="PROVINSI"
                                                                return-object
                                                            ></v-autocomplete>                                                                        
                                                        </v-flex>
                                                        <v-flex md6 xs12>
                                                            <v-autocomplete 
                                                                v-model="doc.administrativeArea.city"
                                                                chips
                                                                deletable-chips
                                                                small-chips
                                                                autocomplete
                                                                :items="list_kota"
                                                                item-text="shortName"
                                                                item-value="id"
                                                                label="KOTA/KAB"
                                                                return-object
                                                            ></v-autocomplete>                                                                        
                                                        </v-flex>
                                                        <v-flex md6 xs12>
                                                            <v-autocomplete 
                                                                v-model="doc.administrativeArea.subDistrict"
                                                                chips
                                                                deletable-chips
                                                                small-chips
                                                                autocomplete
                                                                :items="list_kec"
                                                                item-text="shortName"
                                                                item-value="id"
                                                                label="KECAMATAN"
                                                                return-object
                                                            ></v-autocomplete>                                                                        
                                                        </v-flex>                                            
                                                        <v-flex md6 xs12>
                                                            <v-text-field
                                                                v-model="doc.administrativeArea.village"
                                                                label="DESA"
                                                            ></v-text-field>
                                                        </v-flex>
                                                        <v-flex md3>
                                                            <v-text-field v-model="doc.x" label="LATITUDE"></v-text-field>
                                                        </v-flex>
                                                        <v-flex md3>
                                                            <v-text-field v-model="doc.y" label="LONGITUDE"></v-text-field>
                                                        </v-flex>
                                                        <v-flex md6>                        
                                                            <v-autocomplete 
                                                                v-model="doc.phu"
                                                                chips
                                                                deletable-chips
                                                                small-chips
                                                                autocomplete
                                                                multiple
                                                                :items="list_phu"
                                                                item-text="name"
                                                                item-value="id"
                                                                label="KESATUAN HIDROLOGIS GAMBUT"
                                                                return-object
                                                            ></v-autocomplete>                        
                                                        </v-flex>
                                                    </v-layout>
                                                </v-flex>
                                            </v-layout>
                                        </v-form>                                
                                    </v-card-text>                        
                                </v-card>                            
                            </v-tab-item>
                            <!-- Dokumen Terkait   -->
                            <v-tab-item>
                                <v-layout column class="pa-2">
                                </v-layout>                               
                            </v-tab-item>
                        </v-tabs>                    
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
    #cana_detail .v-tabs__bar {
        display: none;
    }
</style>

<script>
import MiniMap from '@/components/MiniMap'
export default {
    components : {
        MiniMap
    },
    data(){
        return {
            tab : 0,
            plan : null, // keseluruhan object
            doc : null, // hanya general activity
            list_currency: [],
            list_brg_mandat: [],
            list_org : [],            
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
            return this.$store.dispatch('donor/perencanaan/show', parseInt(this.$route.params.id))
            .then(res=>{
                this.doc = res
                // this.doc = res.generalActivity
                // this.list_burnStatus = [{id: this.doc.burnStatus.id, desc : this.doc.burnStatus.desc}]
                // this.list_revegetationType = [{id: this.doc.revegetationType.id, desc : this.doc.revegetationType.desc}]
                // this.list_fundingSource = [{id: this.doc.fundingSource.id, desc : this.doc.fundingSource.type}]
            })
        },        
        loadChoice(){
            return Promise.all([
                this.$store.dispatch('donor/perencanaan/getOrg'),
                this.$store.dispatch('brgMandat/get'),
                this.$store.dispatch('currency/get'),
                this.$store.dispatch('phu/get'),
                
                this.$store.dispatch('administrativeArea/getProv'),
                Promise.resolve([]),
                Promise.resolve([]),
            ])
            .then(([a, b, c, d, e, f, g])=>{
                this.list_org = a
                this.list_brg_mandat = b
                this.list_currency = c
                this.list_phu = d

                this.list_provinsi = e
                this.list_kota = f
                this.list_kec = g
            })
        },
        save(){
            this.$store.dispatch('donor/perencanaan/update', this.doc)
            .then(()=>{
                this.$success('Data Perencanaan berhasil disimpan')
                this.$router.push({name:'donor_rencana'})
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
