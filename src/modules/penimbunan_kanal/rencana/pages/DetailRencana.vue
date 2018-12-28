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
                        <v-tab-item>
                            <v-card flat>                   
                                <v-card-text>                
                                    <v-form>
                                        <v-layout v-if="doc" row wrap>
                                            <v-flex md6>
                                                <v-layout row wrap>
                                                    <v-flex md12>
                                                        <v-card color="secondary" tile>
                                                            <v-card-text>PERENCANAAN PENIMBUNAN KANAL</v-card-text>
                                                        </v-card>
                                                    </v-flex>
                                                    <v-flex md4>
                                                        <v-text-field
                                                            v-model="doc.year"
                                                            label="TAHUN RTT"
                                                            type="number"
                                                            disabled
                                                        ></v-text-field>
                                                    </v-flex>
                                                    <v-flex md4>                        
                                                        <v-text-field v-model="doc.code" label="KODE" disabled></v-text-field>
                                                    </v-flex>
                                                    <v-flex md4>                        
                                                        <v-text-field v-model="plan.status.altStatus" label="STATUS" disabled></v-text-field>
                                                    </v-flex>
                                                    <v-flex md12>                        
                                                        <v-text-field v-model="doc.name" label="NAMA KEGIATAN" counter="50"></v-text-field>
                                                    </v-flex>
                                                    <v-flex md6>
                                                        <v-text-field v-model="doc.length" label="PANJANG" suffix="meter" disabled></v-text-field>
                                                    </v-flex>
                                                    <v-flex md12>
                                                        <v-card color="secondary" tile>
                                                            <v-card-text>ANGGARAN</v-card-text>
                                                        </v-card>
                                                    </v-flex>
                                                    <v-flex md6>
                                                        <v-text-field
                                                            v-model="doc.cost"
                                                            label="NILAI ANGGARAN"
                                                            type="number"
                                                        ></v-text-field>
                                                    </v-flex>
                                                    <v-flex md6>                        
                                                        <v-autocomplete
                                                            v-model="doc.fundingSource"
                                                            chips
                                                            deletable-chips
                                                            small-chips
                                                            autocomplete
                                                            :items="list_fundingSource"
                                                            item-text="remark"
                                                            item-value="id"
                                                            label="SUMBER ANGGARAN"
                                                            return-object
                                                        ></v-autocomplete>                        
                                                    </v-flex>
                                                    <v-flex md12>
                                                        <v-textarea
                                                            class="mt-3"
                                                            v-model="doc.remark"
                                                            label="KETERANGAN"
                                                            box
                                                            rows="3"
                                                        >
                                                        </v-textarea>                                                    
                                                    </v-flex>
                                                    <v-flex md12>
                                                        <v-card color="secondary" tile>
                                                            <v-card-text>UPRG</v-card-text>
                                                        </v-card>
                                                    </v-flex>
                                                    <v-flex md6>
                                                        <v-text-field v-model="doc.uprgSlug" label="KODE UPRG" disabled></v-text-field>
                                                    </v-flex>
                                                    <v-flex md6>
                                                        <v-text-field v-model="doc.uprgText" label="NAMA" disabled></v-text-field>
                                                    </v-flex>
                                                </v-layout>
                                            </v-flex>
                                            <v-flex md6 pl-2 pb-2>
                                                <v-layout row wrap>
                                                    <v-flex md12>
                                                        <MiniMap pRef="pkanal" :doc="doc" :phu="doc ? doc.phu : null" title="LOKASI KEGIATAN" />
                                                    </v-flex>
                                                    <v-flex md3>
                                                        <v-text-field v-model="doc.lat" label="LATITUDE" disabled></v-text-field>
                                                    </v-flex>
                                                    <v-flex md3>
                                                        <v-text-field v-model="doc.lng" label="LONGITUDE" disabled></v-text-field>
                                                    </v-flex>
                                                    <v-flex md6>                        
                                                        <v-autocomplete 
                                                            disabled
                                                            v-model="doc.phu"
                                                            chips
                                                            deletable-chips
                                                            small-chips
                                                            autocomplete
                                                            :items="list_phu"
                                                            item-text="name"
                                                            item-value="id"
                                                            label="KESATUAN HIDROLOGIS GAMBUT"
                                                            return-object
                                                        ></v-autocomplete>                        
                                                    </v-flex>
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
                                                            disabled
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
                                                            disabled
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
                                                            disabled
                                                        ></v-autocomplete>                                                                        
                                                    </v-flex>                                            
                                                    <v-flex md6 xs12>
                                                        <v-text-field
                                                            v-model="doc.administrativeArea.village"
                                                            label="DESA"
                                                            disabled
                                                        ></v-text-field>
                                                    </v-flex>                                            
                                                </v-layout>
                                            </v-flex>
                                        </v-layout>
                                    </v-form>                                
                                </v-card-text>                        
                            </v-card>                            
                        </v-tab-item>  
                        <v-tab-item>
                            <v-layout column class="pa-2">
                                <v-card class="mt-2">
                                    <v-toolbar dense class="elevation-0">
                                        <v-tooltip bottom>
                                            <v-btn slot="activator" icon>
                                                <v-icon color="">add_circle</v-icon></v-btn>
                                            <span>Tambah dokumen</span>
                                        </v-tooltip>                                            
                                        <v-tooltip bottom>
                                            <v-btn slot="activator" icon>
                                                <v-icon color="red">delete_sweep</v-icon></v-btn>
                                            <span>Hapus semua dokumen</span>
                                        </v-tooltip>                                            

                                    </v-toolbar>
                                    
                                    <v-layout row wrap class="mt-2 px-4" v-for="(i,index) in lampiran" :key="index">
                                        <v-text-field
                                            :autocomplete="false"
                                            :label="i.fileName"
                                            v-model="i.keterangan"
                                        >
                                            <v-btn small icon slot="append">
                                                <v-icon>delete</v-icon>
                                            </v-btn>
                                        </v-text-field>
                                    </v-layout>

                                </v-card>
                            </v-layout>                               
                        </v-tab-item>
                    </v-tabs>                    
                </v-card-text>
                <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" flat @click.native="$router.push({name:'pkanal_rencana'})">Batal</v-btn>
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
            list_burnStatus : [],
            list_revegetationType : [],
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
            return this.$store.dispatch('pkanal/perencanaan/show', parseInt(this.$route.params.id))
            .then(res=>{
                this.plan = res
                this.doc = res.generalActivity
                // this.list_burnStatus = [{id: this.doc.burnStatus.id, desc : this.doc.burnStatus.desc}]
                // this.list_revegetationType = [{id: this.doc.revegetationType.id, desc : this.doc.revegetationType.desc}]
                // this.list_fundingSource = [{id: this.doc.fundingSource.id, desc : this.doc.fundingSource.type}]
            })
        },        
        loadChoice(){
            return Promise.all([
                this.$store.dispatch('fundingSource/get'),
                this.$store.dispatch('phu/get'),
                
                this.$store.dispatch('administrativeArea/getProv'),
                Promise.resolve([]),
                Promise.resolve([]),
            ])
            .then(([c, d, e, f, g])=>{
                // this.list_burnStatus = a
                // this.list_revegetationType = b
                this.list_fundingSource = c
                this.list_phu = d

                this.list_provinsi = e
                this.list_kota = f
                this.list_kec = g
            })
        },
        save(){
            this.$store.dispatch('pkanal/perencanaan/update', this.plan)
            .then(()=>{
                this.$success('Data Perencanaan berhasil disimpan')
                this.$router.push({name:'pkanal_rencana'})
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
