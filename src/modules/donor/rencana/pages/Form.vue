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
                                        <!-- <v-autocomplete 
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
                                        ></v-autocomplete> -->
                                        <v-autocomplete 
                                            v-model="page.fundingSource" 
                                            chips
                                            deletable-chips
                                            small-chips
                                            autocomplete
                                            :items="list_org"
                                            item-text="name"
                                            item-value="id"
                                            label="Sumber Dana"
                                            return-object
                                        ></v-autocomplete>
                                         <!-- <v-select 
                                            v-model="fSource" 
                                            chips
                                            deletable-chips
                                            small-chips
                                            autocomplete
                                            :items="list_org"
                                            item-text="shortName"
                                            item-value="id"
                                            label="Sumber Dana"
                                            return-object
                                        ></v-select> -->
                                        
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
                                            <v-card-text>IMPLEMENTING AGENCY</v-card-text>
                                        </v-card>
                                    </v-flex>
                                   <!-- <v-autocomplete 
                                            v-model="page.agency" 
                                            chips
                                            deletable-chips
                                            small-chips
                                            autocomplete
                                            :items="list_org"
                                            item-text="shortName"
                                            item-value="id"
                                            label="Name of Instituion"
                                            return-object
                                        ></v-autocomplete> -->
                                         <v-autocomplete 
                                            v-model="page.implementingAgency" 
                                            chips
                                            deletable-chips
                                            small-chips
                                            autocomplete
                                            :items="list_org"
                                            item-text="name"
                                            item-value="id"
                                            label="Name of Instituion"
                                            return-object
                                        ></v-autocomplete>
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
                                    <v-flex>
                                        <v-layout>
                                        <v-flex xs4>
                                    <v-card-title>Dokumen</v-card-title>
                                        </v-flex>
                                        <v-flex xs8>
                                     <div>
                                       
                                        <input type="file"  :multiple="false" 
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
                                        
                                        <input type="file" :multiple="false"
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
            agency: [],
        //     institusi2: '',
        //     institusi2: null,
        //     institusi2:[
        //   'Kingdom of Norway',
        //   'DFID UK Climate Change Unit Indonesia  (UKCCU)',
        //   'Japan',
        //   'Millenium Challenge Corporation',
        //   'Norway',
        //   'French Government (shareholder) ; financial markets (loans) ; delegated funds (grants)',
        //   'Department of Foreign Affairs and Trade (DFAT)',
        //   'Climate Works Foundation',
        //   'Ford Foundation',
        //   'Packard Foundation',
        //   'Good Energies Foundation',
        //   'UKCCU ',
        //   'Government of Norway/Embassy of Norway',
        //   'World Economic Forum',
        //   'Embassy of the Kingdom of the Netherlands',
        //   'APP Group ',
        //   'Global Affairs Canada ',
        //   'Climate and Land Use Alliance (CLUA)',
        //     'USAID (United States Agency for International Development)',
        //     'MCA-I',
        //     'Republic of South Korea',
        //     'Ministry of Foreign Affairs of Denmark',
        //     'EC (European Commission)',
        //     'Federal Ministry for Economic Cooperation and Development (grant)',
        //     'WWF Network',
        //     'EMM',
        //     'Walhi Jambi, Scale Up, UNDP, EMM, SAFIR, Madani',
        //     'UNDP, TFCa, MCA, Belantara, IDH (Inisiasi Dagang Hijau), ICCTF (for on going project only ICCTF and Belantara)',
        //     'European Union, International Fund for Agricultural Development (IFAD), Global Environment Facility (GEF) through IFAD',
        //     'Royal Norwegian Embassy ',
        //     'Kingdom of Denmark & Norway',

        //         ],
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
                    id: "",
                },
            },
            list_currency: [],
            list_brg_mandat: [],
            list_phu  : [],
            list_provinsi : [],
            list_institusi1: [],
            list_institusi2: [],
            list_kota : [],
            list_kec : [],
            list_desa : [],
            list_org: [],
            list_org_type: [],
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
                // this.list_org = a
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
        },
        
        getFormData(files){
                const data = new FormData();
                [...files].forEach(file => {
                    data.append('data', file, file.name); // currently only one file at a time
                });
                return data;
            },
            onFocus(){
                if (!this.disabled) {
                    debugger;
                    this.$refs.fileInput.click();
                }
            },
            onFileChange($event){
                const files = $event.target.files || $event.dataTransfer.files;
                const form = this.getFormData(files);
                if (files) {
                    if (files.length > 0) {
                        this.filename = [...files].map(file => file.name).join(', ');
                    } else {
                        this.filename = null;
                    }
                } else {
                    this.filename = $event.target.value.split('\\').pop();
                }
                this.$emit('input', this.filename);
                this.$emit('formData', form);
            },
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      register(){
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
            this.loading = true
            this.$store.dispatch('personal',{
                email:this.email,
                // firstname:this.reg.firstname, 
                // lastname:this.reg.lastname,
                nama:this.nama ,
                jenis:this.jenis,
                tanggal:this.tanggal,
                admin:this.admin,
                password:this.password, 
                password2:this.password2
            })
            // .then((res)=>{
            //     this.reg.email = ''
            //     this.reg.firstname = ''
            //     this.reg.lastname = ''
            //     this.reg.password = ''
            //     this.reg.confirm_password = ''

            //     this.loading = false
            //     this.register_ok = res
            //     // this.$router.push({name:'home'})
            //     // eslint-disable-next-line
            //     // console.log(res)
            // })
            // .catch(()=>{
            //     this.loading = false
            // })

        },
    
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
