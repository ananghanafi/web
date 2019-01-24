<template>
    <v-container grid-list-md>
        <v-layout column>
            <v-flex xs12 md12>
                <v-card>
                    <!-- <v-card-title>Input Donor Activity</v-card-title> -->
                    <v-card-title class="elevation-1 font-weight-bold">
                        INPUT DONOR ACTIVITY
                    </v-card-title>
                    <v-card-text>
                        <v-layout row wrap>
                            <v-flex md6>
                                <v-layout row wrap pr-2>
                                    <v-flex md12>
                                        <v-card color="secondary" tile>
                                            <v-card-text>INFORMASI UMUM</v-card-text>
                                        </v-card>
                                    </v-flex>
                                    <v-flex md12><v-text-field label="Nama Kegiatan" counter="150" v-model="page.title"></v-text-field></v-flex>
                                    <v-flex md6>
                                        <m-datepicker
                                            v-model="page.startDate"
                                            label="Tanggal Mulai"
                                        ></m-datepicker>
                                    </v-flex>
                                    <v-flex md6>
                                        <m-datepicker
                                            v-model="page.endDate"
                                            label="Tanggal Selesai"
                                        ></m-datepicker>
                                    </v-flex>
                                    <v-flex md12><v-textarea label="Ringkasan Kegiatan" counter="150" row=3 v-model="page.summary"></v-textarea></v-flex>
                                    <v-flex md4>
                                        <v-autocomplete 
                                            v-model="page.currency" 
                                            chips
                                            deletable-chips
                                            small-chips
                                            autocomplete
                                            :items="list_currency"
                                            item-text="code"
                                            item-value="id"
                                            label="Mata Uang"
                                            return-object
                                        ></v-autocomplete>
                                    </v-flex>
                                    <v-flex md4><v-text-field label="Nominal Dana" v-model="page.amount"></v-text-field></v-flex>
                                    <v-flex md4>
                                        <v-autocomplete 
                                            v-model="page.fundingSource" 
                                            chips
                                            deletable-chips
                                            small-chips
                                            autocomplete
                                            :items="list_org"
                                            item-text="shortName"
                                            item-value="id"
                                            label="Sumber Dana"
                                            return-object
                                        ></v-autocomplete>
                                    </v-flex>
                                    <v-flex md12><v-text-field label="Catatan" counter="150" v-model="page.remark"></v-text-field></v-flex>
                                    <!-- <v-flex md12><v-subheader>Relevansi dengan Mandat BRG</v-subheader></v-flex> -->
                                    <v-flex md12>
                                        <v-autocomplete 
                                            v-model="page.brgMandat" 
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
                                        <!-- <v-flex md6 v-for="(mandat, idx) in list_brg_mandat" :key="idx">
                                            <v-checkbox 
                                                :label="mandat.descEn" 
                                                :value="mandat.id" 
                                                v-model="page.relevancy"
                                                color="primary"
                                                return-object
                                            >
                                            </v-checkbox>
                                        </v-flex> -->
                                </v-layout>
                            </v-flex>
                            <v-flex md6>
                                <v-layout row wrap>
                                    <v-flex md12>
                                        <v-card color="secondary" tile>
                                            <v-card-text>LOKASI</v-card-text>
                                        </v-card>
                                    </v-flex>
                                    <v-flex md6>
                                        <v-autocomplete 
                                            v-model="page.administrativeArea.province"
                                            chips
                                            deletable-chips
                                            small-chips
                                            autocomplete
                                            :items="list_provinsi"
                                            item-text="longName"
                                            item-value="id"
                                            label="Provinsi"
                                            return-object
                                        ></v-autocomplete>
                                    </v-flex>
                                    <v-flex md6>
                                        <v-autocomplete 
                                            v-model="page.administrativeArea.city"
                                            chips
                                            deletable-chips
                                            small-chips
                                            autocomplete
                                            no-data-text="Pilih Provinsi terlebih dahulu"
                                            :items="list_kota"
                                            item-text="longName"
                                            item-value="id"
                                            label="Kota/Kab."
                                            return-object
                                        ></v-autocomplete>
                                    </v-flex>
                                    <v-flex md6>
                                        <v-autocomplete 
                                            v-model="page.administrativeArea.subDistrict"
                                            chips
                                            deletable-chips
                                            small-chips
                                            autocomplete
                                            :items="list_kec"
                                            item-text="longName"
                                            item-value="id"
                                            label="Kecamatan"
                                            return-object
                                        ></v-autocomplete>
                                    </v-flex>
                                    <v-flex md6><v-text-field label="Desa" v-model="page.administrativeArea.village"></v-text-field></v-flex>
                                    <v-flex md6>
                                        <v-autocomplete 
                                            v-model="page.phu"
                                            chips
                                            deletable-chips
                                            small-chips
                                            autocomplete
                                            multiple
                                            :items="list_phu"
                                            item-text="name"
                                            item-value="id"
                                            label="KHG"
                                            return-object
                                        ></v-autocomplete>
                                    </v-flex>
                                    <v-flex md3><v-text-field label="Latitude" v-model="page.x"></v-text-field></v-flex>
                                    <v-flex md3><v-text-field label="Longitude" v-model="page.y"></v-text-field></v-flex>
                                    <v-flex md12>
                                        <v-card color="secondary" tile>
                                            <v-card-text>LAMPIRAN</v-card-text>
                                        </v-card>
                                    </v-flex>

                                    <v-flex><v-text-field label="Dokumen"></v-text-field></v-flex>
                                    <v-flex><v-text-field label="Foto"></v-text-field></v-flex>

                                    <v-flex>
                                        <v-layout>
                                        <v-flex xs4>
                                    <v-card-title>Dokumen</v-card-title>
                                        </v-flex>
                                        <v-flex xs8>
                                     <div>
                                       
                                        <input type="file" :accept="accept" :multiple="false" :disabled="disabled"
                                            ref="fileInput" @change="onFileChange">
                                    </div>
                                        </v-flex>
                                    </v-layout>
                                    </v-flex>

                                     <v-flex>
                                        <v-layout>
                                        <v-flex xs4>
                                    <v-card-title>Gambar</v-card-title>
                                        </v-flex>
                                        <v-flex xs8>
                                     <div>
                                        
                                        <input type="file" :accept="accept" :multiple="false" :disabled="disabled"
                                            ref="fileInput" @change="onFileChange">
                                    </div>
                                        </v-flex>
                                    </v-layout>
                                    </v-flex>

                                </v-layout>
                            </v-flex>
                        </v-layout>
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
<script>
export default {
    data() {
        return {
            page: {
                administrativeArea: {
                    province: {
                        provinceId: null,
                    },
                    city: {
                        cityId: null,
                    },
                    subDistrict: {
                        id: null,
                    },
                    village: null,
                },
                implementingAgency: {
                    id: 2,
                }
            },
            list_currency: [],
            list_brg_mandat: [],
            list_phu  : [],
            list_provinsi : [],
            list_kota : [],
            list_kec : [],
            list_desa : [],
            list_org: [],
        }
    },
    mounted(){
        this.loadChoice()
    },
    methods: {
        loadChoice(){
            return Promise.all([
                this.$store.dispatch('donor/perencanaan/getOrg'),
                this.$store.dispatch('brgMandat/get'),
                this.$store.dispatch('currency/get'),
                this.$store.dispatch('phu/get'),
                
                this.$store.dispatch('administrativeArea/getTargetedProv'),
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
            this.$store.dispatch('donor/perencanaan/create', this.page)
            .then(()=>{
                this.$success('Data Perencanaan berhasil disimpan')
                this.$router.push({name:'donor_rencana'})
            })
        }
    },
    computed:{
        prov(){
            return this.page.administrativeArea.province.provinceId
        },
        kota(){
            return this.page.administrativeArea.city.cityId
        },
        kec(){
            return this.page.administrativeArea.subDistrict.id
        }
    },
    watch:{
        prov(n){
            if (!n){
                return this.list_kota = []
            }
            this.$store.dispatch('administrativeArea/getKota',n)
            .then(res=>{
                this.list_kota = res
            })
        },
        kota(n){
            if (!n){
                return this.list_kec = []
            }
            this.$store.dispatch('administrativeArea/getKec',n)
            .then(res=>{
                this.list_kec = res
            })
        }
    }
    
}
</script>
