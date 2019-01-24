<template>
     <v-container >
        <v-layout justify-center>
            <v-flex xs12 >
                <v-card class="pb-3">
                    <v-card-title class="elevation-1">
                    GENERAL INFORMATION
                    <v-spacer></v-spacer>
                    <!-- <v-btn icon @click="load(1)"><v-icon>refresh</v-icon></v-btn> -->
                    </v-card-title>
                    <v-card-text class="py-0">
                        <!-- <v-container grid-list-md class="pa-0">
                            <v-layout row wrap> -->
                                <v-form
                                    ref="form"
                                    v-model="valid"
                                    lazy-validation
                                >
                                    <v-layout>
                                        <v-flex xs4>
                                        <v-card-title>Country</v-card-title>
                                        </v-flex>

                                        <v-flex xs8>
                                        <v-select
                                        v-model="select5"
                                        :items="country"
                                        :rules="[v => !!v || 'Mohon dipilih']"
                                        label="country"
                                        required
                                        ></v-select>
                                        </v-flex>
                                    </v-layout>
                                    <v-layout>
                                        <v-flex xs4>
                                         <v-card-title>Name of Insitution</v-card-title>
                                        </v-flex>
                                        <v-flex xs8>
                                    <v-select
                                    v-model="select6"
                                    :items="institusi"
                                    :rules="[v => !!v || 'Mohon dipilih']"
                                    label="institusi"
                                    required
                                    ></v-select>
                                    </v-flex>
                                    </v-layout>

                                    <v-layout>
                                        <v-flex xs4>
                                    <v-card-title>Upload</v-card-title>
                                        </v-flex>
                                        <v-flex xs8>
                                     <div>
                                        <v-text-field prepend-icon="attach_file" single-line
                                                    v-model="filename" :label="label" :required="required"
                                                    @click.native="onFocus"
                                                    :disabled="disabled" ref="fileTextField"></v-text-field>
                                        <input type="file" :accept="accept" :multiple="false" :disabled="disabled"
                                            ref="fileInput" @change="onFileChange">
                                    </div>
                                        </v-flex>
                                    </v-layout>
                                    <v-card-title class="elevation-1">
                    FUNDING SOURCE
                    <v-spacer></v-spacer>
                    <!-- <v-btn icon @click="load(1)"><v-icon>refresh</v-icon></v-btn> -->
                    </v-card-title>
                                    <v-layout>
                                        <v-flex xs4>
                                        <v-card-title>Name of Institution</v-card-title>
                                        </v-flex>
                                        <v-flex xs8>
                                    <v-select
                                        v-model="select7"
                                        :items="institusi2"
                                        :rules="[v => !!v || 'Mohon dipilih']"
                                        label="institusi2"
                                        required
                                        ></v-select>
                                    </v-flex>
                                    </v-layout>
                                    <v-card-title class="elevation-1">
                    IMPLEMENTING AGENCY
                    <v-spacer></v-spacer>
                    <!-- <v-btn icon @click="load(1)"><v-icon>refresh</v-icon></v-btn> -->
                    </v-card-title>
                                    <v-layout>
                                        <v-flex xs4>
                                        <v-card-title>Name of Institution</v-card-title>
                                        </v-flex>
                                   <v-flex xs8>
                                    <v-select
                                        v-model="select8"
                                        :items="institusi3"
                                        :rules="[v => !!v || 'Mohon dipilih']"
                                        label="institusi3"
                                        required
                                        ></v-select>
                                    </v-flex>
                                    </v-layout>
                    <v-card-title class="elevation-1">
                    Type of Development Partner
                    <v-spacer></v-spacer>
                    <!-- <v-btn icon @click="load(1)"><v-icon>refresh</v-icon></v-btn> -->
                    </v-card-title>
                    <v-layout>
                                        <v-flex xs4>
                                        <v-card-title>Key Activities</v-card-title>
                                        </v-flex>
                                   <v-flex xs8>
                                    <v-select
                                        v-model="select9"
                                        :items="institusi4"
                                        :rules="[v => !!v || 'Mohon dipilih']"
                                        label="institusi4"
                                        required
                                        ></v-select>
                                    </v-flex>
                                    </v-layout>
                    <v-layout>
                                        <v-flex xs4>
                                        <v-card-title>FOCAL POINT TO BRG</v-card-title>
                                        </v-flex>

                                        <v-flex xs8>
                                        <v-text-field
                                            v-model="focal"
                                            :rules="focalRules"
                                            label="focal"
                                            append-icon="edit"
                                            required
                                            ></v-text-field>
                                        </v-flex>
                                    </v-layout>
                    <v-container>
                    <v-card-title class="elevation-1">
                    +ADD PROJECT
                    <v-spacer></v-spacer>
                    <v-btn @click.native="$router.push({name:'donor_rencana_baru'})">Kegiatan Baru</v-btn>
                    
                    </v-card-title>
                    </v-container>
                                     
                                    <v-layout justify-center>
                                    <v-btn large="true"
                                    :disabled="valid"
                                    color="success"
                                    @click="register"
                                    >
                                    Submit
                                    </v-btn>
                                    </v-layout>
                                </v-form>
                            <!-- </v-layout>
                        </v-container> -->
                    </v-card-text>  
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>

</template>
<style>
    .arr_open {
        transform: rotate(-180deg);
    }
</style>
<script>
// export default {
//     // data(){
//     //     return{
//     //         tanggal: null
//     //     }
       
//     // }
//     data: () => ({
//       jenis: ['Lembaga', 'Instansi','Universitas','Organisasi','Institusi'],
//       admin: ['Provinsi', 'Kabupaten/Kota','Kecamatan','Kelurahan'],
      
//     }),
// }
</script>
<script>
  export default {
      props: {
          value: {
                type: [Array, String]
            },
            accept: {
                type: String,
                default: "*"
            },
            label: {
                type: String,
                default: "Please choose..."
            },
            required: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            multiple: {
                type: Boolean, // not yet possible because of data
                default: false
            }
        },
        watch: {
            value(v){
                this.filename = v;
            }
        },
        mounted() {
            this.filename = this.value;
        },

       
            
    
    data: () => ({
      valid: true,
      country: '',
      institusi: '',
      institusi2: '',
      institusi3: '',
      focal: '',
      projecttitle: '',
      startdate:'',
      
      email: '',
      jumlahanggota:'',
      filename: "",
      emailRules: [
        v => !!v || 'Email harus di isi',
        v => /.+@.+/.test(v) || 'E-mail harus valid'
      ],
        show1: false,
        show2: false,
        password: null,
        password2:null,
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match')
        },
        rules2: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match')
        },
      countryRules: [
        v => !!v || 'Nama harus di isi'
      ],

      
      projecttitleRules: [
        v => !!v || 'Nama harus di isi'
      ],
      startdateRules: [
        v => !!v || 'Nama harus di isi'
      ],
      focalRules: [
        v => !!v || 'Nama harus di isi'
      ],
      institusiRules: [
        v => !!v || 'Nama harus di isi'
      ],
      institusi2Rules: [
        v => !!v || 'Nama harus di isi'
      ],
      institusi3Rules: [
        v => !!v || 'Nama harus di isi'
      ],
      jmlRules:[
        v => !!v || 'Jumlah anggota harus di isi, jika tidak kasih 0'
      ],
      select1: null,
      jenis: [
        'Lembaga',
        'Instansi',
        'Universitas',
        'Organisasi',
        'Institusi'
      ],
      select2: null,
      admin:[
          'Provinsi',
          'Kabupaten/Kota',
          'Kecamatan',
          'Kelurahan'
      ],
        select5: null,
      country:[
          'Norway',
          'Switzerland',
          'United Kingdom(UK)',
          'Sweden',
        'Japan',
        'USA',
        'Indonesia',
        'France',
        'Asia',
        'Australia',
        'New Zealand',
        'International',
        'South East Asia(Indonesia)',
        'Sweden',
        'Netherland',
        'Singapore',
        'Canada',
        'Korea',
        'Denmark',
        'European Union(EU)',
        'Germany',
        'Denmark & Norway',
      ],
      select6: null,
      institusi:[
          'Royal Norwegian Embassy  ',
          'Embassy of Switzerland',
          'Embassy of Great Britain ',
          'Embassy of Sweden',
          'Japan International Cooperation Agency (JICA)',
          'USAID (United States Agency for International Development)',
          'MCA-I',
          'GGGI',
         'The Ford Foundation ',
          'Agence Française de Développement (AFD)',
          'Asian Development Bank',
          'Embassy of Australia',
          'Embassy of New Zealand ',
          'Climate and Land Use Alliance (CLUA)',
          'Indonesia Climate Change Trust Fund (ICCTF) (partnership with ukccu)',
          'UNDP (United Nations Development Program)',
          'Asia Group Advisor ',
          'TFA (Tropical Forest Alliance)/IBCSD',
          'IPPF (Indonesian Peatlands Partnership Fund) ',
          'International Finance Corporation ',
          'Partnership for Forest ',
          'Embassy of the Kingdom of the Netherlands',
          'Belantara Foundation ',
          'Embassy of Singapore',
          'Embassy of Canada',
          'Embassy of the United State of  America',
          'Korea Embassy ',
          'Embassy of Denmark',
          'EU',
          'Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ)',
          'WWF Indonesia',
          'WWF Indonesia (Jambi)',
          'Konsorsium Masyarakat Gambut Jambi',
          'Kehijau Berbak',
          'Jaringan Masyarakat Gambut Jambi',
          'Perkumpulan Gita Buana ',
          'Asean Secretariat',
          'Food and Agricultural Organization (FAO)',
          'Embassy of Denmark & The Royal Norwegian Embassy ',
          'Rajawali Foundation',
          'Kreditanstalt Fuer Wiederaufbau (KFW)',
          'Overseas Private Investment Corporation (OPIC)',
          'The Asia Foundation',
          'European Space Agency',
          'TFCA Kalimantan',
      ],
      select7: null,
      institusi2:[
          'Kingdom of Norway',
          'DFID UK Climate Change Unit Indonesia  (UKCCU)',
          'Japan',
          'Millenium Challenge Corporation',
          'Norway',
          'French Government (shareholder) ; financial markets (loans) ; delegated funds (grants)',
          'Department of Foreign Affairs and Trade (DFAT)',
          'Climate Works Foundation',
          'Ford Foundation',
          'Packard Foundation',
          'Good Energies Foundation',
          'UKCCU ',
          'Government of Norway/Embassy of Norway',
          'World Economic Forum',
          'Embassy of the Kingdom of the Netherlands',
          'APP Group ',
          'Global Affairs Canada ',
          'Climate and Land Use Alliance (CLUA)',
        'USAID (United States Agency for International Development)',
        'MCA-I',
        'Republic of South Korea',
        'Ministry of Foreign Affairs of Denmark',
        'EC (European Commission)',
        'Federal Ministry for Economic Cooperation and Development (grant)',
        'WWF Network',
        'EMM',
        'Walhi Jambi, Scale Up, UNDP, EMM, SAFIR, Madani',
        'UNDP, TFCa, MCA, Belantara, IDH (Inisiasi Dagang Hijau), ICCTF (for on going project only ICCTF and Belantara)',
        'European Union, International Fund for Agricultural Development (IFAD), Global Environment Facility (GEF) through IFAD',
        'Royal Norwegian Embassy ',
        'Kingdom of Denmark & Norway',

      ],
      select8: null,
      institusi3: [
        'UNDP (United Nations Development Program)',
        'World Bank',
        'UNDP (United Nations Development Program)',
        'World Resources Institute (WRI)',
        'Kemitraan Partnership',
        'Wetland Indonesia',
        'ICCTF',
            'Zoological London Society',
            'Dana Ilmu Pengetahuan Indonesia',
            'JICA',
            'Hokkaido University',
            'UNOPS (Gambut Project)',
            'USAID LESTARI',
            'MCA-I',
            'Satker Bapenas',
            'Global Green Growth Institute',
            'Agence Française de Développement (AFD)',
            'Australian Center for International Agricultural Research (ACIAR)',
            'The World Bank',
            'World Resources Institute (WRI)',
            'Wetland International',
            'Association for the Renewal of the Community and Ecology-Based Law',
            'Jikalahari',
            'Forest People Programmes',
            'Aliansi Masyarakat Adat Nusantara',
            'Komunitas Konservasi Indonesia (KKI) WARSI',
            'Samdhana',
            'Kemitraan Bagi Pembaharuan Tata Pemerintahan',
            'JKPP/BRWA',
            'Lembaga Gamawan',
            'TNC',
            'WWF',
            'Lingkar Temu Kabupaten Lestari (LTKL)',
            'Winrock International',
            'Indonesia Climate Change Trust Fund (ICCTF) (partnership with ukccu)',
            'UNDP',
            'Tropical Forest Alliance (TFA)',
            'UN Environment',
            'Wageningen University and Research Center',
            'Kemitraan',
            'Perkumpulan Gita Buana',
            'TBC',
            'KEMITRAAN Partnership',
            'World Resources Institute (WRI)',
            'IDEA',
            'LESTARI',
            'World Wild Fund (WWF)',
            'Euroconsult Mott MacDonald (EMM)',
            'Korea indonesia Forest Center',
            'Danish International Development Agency (DANIDA)',
            'ECHO (European Commission Humanitarian Aid Office)',
            'Forest and Climate Change Programm (FORCLIME) (GIZ)',
            'WWF Indonesia',
            'Kelompok Tani Harapan Lestari',
            'Kehati',
            'Belantara',
            'Konsorsium Restorasi Gambut Jambi (Mitra Aksi, Gita Buana, YLBHL)',
            'Kehijau Berbak',
            'Jaringan Masyarakat Gambut Jambi',
            'Global Environment Center',
            'FAO',
            'World Bank',
            'WRI',
            'Systemiq',
            'Swiss State Secretariat for Economic Affairs (SECO)',
            'SMI',

      ],
      select9: null,
      institusi4:[
          'National NGO',
          'International NGO',
          'Bilateral',
          'Trust Fund',
          'University',
          'Implementing Partner/Contractor',
          'Government',
          'Development Bank',
          'Research Center',
          'Association of district Heads',
          'INstitution',
          'Konsorsium',
          'Multilateral',
          'Other',
      ],
      tanggal: null,
      checkbox: false,
      
    }),
    

    methods: {
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

        }
    }
   
  }
</script>

