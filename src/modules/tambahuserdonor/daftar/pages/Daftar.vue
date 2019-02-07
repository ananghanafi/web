<template>
     <v-container >
        <v-layout justify-center>
            <v-flex xs12 >
                <!-- <v-flex xs12 sm10 md8 lg6> -->
                <v-card class="pb-3">
                    <v-card-title class="elevation-1">
                    DAFTAR
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
                                    <v-text-field
                                    v-model="nama"
                                    :rules="namaRules"
                                    label="Nama"
                                    append-icon="edit"
                                    required
                                    ></v-text-field>

                                    <v-text-field
                                    v-model="email"
                                    :rules="emailRules"
                                    label="E-mail"
                                    append-icon="mail"
                                    required
                                    ></v-text-field>

                                    <v-select
                                    v-model="select1"
                                    :items="jenis"
                                    :rules="[v => !!v || 'Mohon dipilih']"
                                    label="Jenis"
                                    required
                                    
                                    ></v-select>
                                    <v-menu full-width="true">
                                        <v-text-field :value="tanggal" slot="activator" label="Tanggal" append-icon="date_range">

                                        </v-text-field>
                                        <v-date-picker v-model="tanggal"> 

                                        </v-date-picker>
                                    </v-menu>
                                    <v-text-field
                                    v-model="jumlahanggota"
                                    label="Jumlah Anggota"
                                    :rules="jmlRules"
                                    required                                    
                                    append-icon="edit"
                                    ></v-text-field>
  
                                    <v-select
                                    v-model="select2"
                                    :items="admin"
                                    :rules="[v => !!v || 'Mohon dipilih']"
                                    label="Admin"
                                    required
                                    ></v-select>
                                  <v-text-field
                                        v-model="password"
                                        :append-icon="show1 ? 'visibility_off' : 'visibility'"
                                        :rules="[rules.required, rules.min]"
                                        :type="show1 ? 'text' : 'password'"
                                        name="input-10-1"
                                        label="Kata Sandi"
                                        hint="At least 8 characters"
                                        counter
                                        @click:append="show1 = !show1"
                                    ></v-text-field>
                                  <v-text-field
                                        v-model="password2"
                                        :append-icon="show2 ? 'visibility_off' : 'visibility'"
                                        :rules="[rules.required, rules.min]"
                                        :type="show2 ? 'text' : 'password'"
                                        name="input-10-1"
                                        label="Konfirmasi Kata Sandi"
                                        hint="At least 8 characters"
                                        counter
                                        @click:append="show2 = !show2"
                                    ></v-text-field>
                                    <v-checkbox
                                    v-model="checkbox"
                                    :rules="[v => !!v || 'Centang baru lanjut']"
                                    label="Apakah kamu menyetujuinya?"
                                    required
                                    ></v-checkbox>
                                    <v-layout justify-center>
                                    <v-btn large="true"
                                    :disabled="!valid"
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
    data: () => ({
      valid: true,
      nama: '',
      email: '',
      jumlahanggota:'',
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
      namaRules: [
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

      tanggal: null,
      checkbox: false,
      
    }),
    

    methods: {
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

