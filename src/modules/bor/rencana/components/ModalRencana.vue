<template>
    <v-dialog v-model="dialog" max-width="700" scrollable lazy>        
        <v-card>
            <v-toolbar color="primary" class="elevation-0">
                <v-toolbar-title class="white--text">
                    Buat Rencana
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon @click="dialog=false" color="white">close</v-icon>
                </v-btn>
            </v-toolbar>    
            <v-tabs v-model="tab" fixed centered slider-color="primary lighten-4">
                <v-tab>
                    Detil Kegiatan
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
                                    <v-layout column>
                                        <v-flex xs12>                        
                                            <v-text-field label="Nama"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12>                        
                                            <v-text-field label="Kode"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12>                        
                                        <v-flex xs12>                        
                                            <v-autocomplete 
                                                chips
                                                deletable-chips
                                                small-chips
                                                autocomplete
                                                :items="list_constructionType"
                                                item-text="desc"
                                                item-value="id"
                                                label="Jenis Kegiatan"
                                            ></v-autocomplete>                        
                                        </v-flex>
                                        </v-flex>
                                        <v-flex xs12>                        
                                            <v-text-field label="Unit" hint="Jumlah Unit" type="number"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12>                        
                                            <v-text-field label="Luas Terdampak (ha)"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12>                        
                                            <v-autocomplete 
                                                chips
                                                deletable-chips
                                                small-chips
                                                autocomplete
                                                :items="list_zoneType"
                                                item-text="desc"
                                                item-value="id"
                                                label="Tipe Kawasan"
                                            ></v-autocomplete>                        
                                        </v-flex>
                                        <v-flex xs12>
                                            <v-text-field
                                                label="Biaya"
                                                type="number"
                                            ></v-text-field>
                                        </v-flex>
                                        <v-flex xs12>                        
                                            <v-autocomplete 
                                                chips
                                                deletable-chips
                                                small-chips
                                                autocomplete
                                                :items="list_fundingSource"
                                                item-text="desc"
                                                item-value="id"
                                                label="Sumber Anggaran"
                                            ></v-autocomplete>                        
                                        </v-flex>
                                        <v-flex xs12>                        
                                            <v-autocomplete 
                                                chips
                                                deletable-chips
                                                small-chips
                                                autocomplete
                                                :items="list_peatHydrologicalUnity"
                                                item-text="shortName"
                                                item-value="id"
                                                label="Kesatuan Hidrologis Gambut (KHG)"
                                            ></v-autocomplete>                        
                                        </v-flex>                                        
                                        <v-textarea
                                            label="Keterangan"
                                            box
                                            rows="3"
                                        >
                                        </v-textarea>
                                        <v-subheader class="px-0">Wilayah Administratif</v-subheader>
                                        <v-container grid-list-sm class="pa-0">   
                                            <v-layout column>                                                
                                                <v-layout row wrap>
                                                    <v-flex md6 xs12>
                                                        <v-autocomplete 
                                                            chips
                                                            deletable-chips
                                                            small-chips
                                                            autocomplete
                                                            :items="list_provinsi"
                                                            item-text="shortName"
                                                            item-value="id"
                                                            label="Provinsi"
                                                        ></v-autocomplete>                                                                        
                                                    </v-flex>
                                                    <v-flex md6 xs12>
                                                        <v-autocomplete 
                                                            chips
                                                            deletable-chips
                                                            small-chips
                                                            autocomplete
                                                            :items="list_kota"
                                                            item-text="shortName"
                                                            item-value="id"
                                                            label="Kota/Kab"
                                                        ></v-autocomplete>                                                                        
                                                    </v-flex>    
                                                </v-layout>
                                                <v-layout row wrap>                                        
                                                    <v-flex md6 xs12>
                                                        <v-autocomplete 
                                                            chips
                                                            deletable-chips
                                                            small-chips
                                                            autocomplete
                                                            :items="list_kec"
                                                            item-text="shortName"
                                                            item-value="id"
                                                            label="Kecamatan"
                                                        ></v-autocomplete>                                                                        
                                                    </v-flex>                                            
                                                    <v-flex md6 xs12>
                                                        <v-autocomplete 
                                                            chips
                                                            deletable-chips
                                                            small-chips
                                                            autocomplete
                                                            :items="list_desa"
                                                            item-text="shortName"
                                                            item-value="id"
                                                            label="Desa"
                                                        ></v-autocomplete>                                                                        
                                                    </v-flex>                                            

                                                </v-layout>
                                            </v-layout>
                                        </v-container>
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
                    <v-btn color="primary" flat @click.native="dialog = false">Batal</v-btn>
                    <v-btn color="primary" flat @click.native="dialog = false">Simpan</v-btn>
                </v-card-actions>                
        </v-card>

    </v-dialog>
</template>
<style>
    #cana_detail .v-tabs__bar {
        display: none;
    }
</style>

<script>
export default {
    data(){
        return {
            tab : 0,
            dialog : false,
            resolve : null,
            reject : null,

            list_zoneType : [],
            list_constructionType : [],
            list_fundingSource : [],            
            list_peatHydrologicalUnity  : [],
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
        this.loadChoice()
    },
    methods:{
        loadChoice(){
            return Promise.all([
                this.$store.dispatch('zoneType/get'),
                this.$store.dispatch('constructionType/get'),
                this.$store.dispatch('fundingSource/get'),
                this.$store.dispatch('peatHydrologicalUnity/get'),
                
                this.$store.dispatch('administrativeArea/getProv'),
                this.$store.dispatch('administrativeArea/getKota'),
                this.$store.dispatch('administrativeArea/getKec'),
            ])
            .then(([a,b, c, d, e, f, g,h])=>{
                this.list_zoneType = a
                this.list_constructionType = b
                this.list_fundingSource = c
                this.list_peatHydrologicalUnity = d

                this.list_provinsi = e
                this.list_kota = f
                this.list_kec = g
                this.list_desa = h
            })
        },
        open(){
            return this.loadChoice()
            .then(()=>{                
                return new Promise((resolve, reject)=>{
                    this.resolve = resolve
                    this.reject = reject
                    this.dialog = true
                })
            })
            .catch(()=>{
                return Promise.reject()
            })
        }
    },
    watch:{
        dialog(n){
            if (!n) this.reject(null)
        }
    }
}
</script>

<style>

</style>
