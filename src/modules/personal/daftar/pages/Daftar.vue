<template>
    <!-- <v-container grid-list-xs fill-height>
        <v-layout>
            <v-flex xs12>
                <v-card class="pb-3">
                    <v-card-title class="elevation-1">
                        DAFTAR
                        <v-spacer></v-spacer>
                        <v-btn icon @click="load(1)"><v-icon>refresh</v-icon></v-btn>
                    </v-card-title>
                    <v-card-text class="py-0">
                        <v-container grid-list-md class="pa-0">
                            <v-layout row wrap>
                                <v-flex md3 sm6>
                                    <v-text-field
                                        append-icon="edit"
                                        label="Nama"
                                        single-line
                                        hide-details
                                    ></v-text-field>
                                </v-flex>
                                <v-flex md3 sm6>
                                    <v-text-field
                                        append-icon="edit"
                                        label="Email"
                                        single-line
                                        hide-details
                                    ></v-text-field>
                                </v-flex>
                                <v-flex md3 sm6>
                                    <v-select :items="jenis">

                                    </v-select>

                                </v-flex>
                                <v-flex md3 sm6>
                                    <v-text-field
                                        append-icon="edit"
                                        label="Jumlah Anggota"
                                        single-line
                                        hide-details
                                    ></v-text-field>
                                </v-flex>
                                <v-flex md3 sm6> -->
                                    <!-- <v-text-field
                                        append-icon="edit"
                                        label="Admin"
                                        single-line
                                        hide-details
                                    ></v-text-field> -->
                                    <!-- <v-select :items="admin">

                                    </v-select>
                                </v-flex>
                                <v-menu>
                                    <v-text-field :value="tanggal" slot="activator" label="Tanggal" prepend-icon="date_range">

                                    </v-text-field>
                                    <v-date-picker v-model="tanggal"> 

                                    </v-date-picker>
                                </v-menu>
                               
                                 <v-flex md3 sm6>
                                <v-btn block color="primary" outline @click="load(1)">Submit</v-btn>
               
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container> -->
    
    <v-container >
        <v-layout justify-center>
            <v-flex xs12 sm10 md8 lg6>
                <v-card class="pb-3">
                    <v-card-title class="elevation-1">
                    DAFTAR
                    <v-spacer></v-spacer>
                    <v-btn icon @click="load(1)"><v-icon>refresh</v-icon></v-btn>
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
                                    v-model="select"
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
                                    v-model="Jumlahanggota"
                                    label="Jumlah Anggota"
                                    :rules="jmlRules"
                                    required                                    
                                    append-icon="edit"
                                    ></v-text-field>
                                    <v-select
                                    v-model="select"
                                    :items="admin"
                                    :rules="[v => !!v || 'Mohon dipilih']"
                                    label="Admin"
                                    required
                                    ></v-select>
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
                                    @click="validate"
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
      namaRules: [
        v => !!v || 'Nama harus di isi'
      ],
      jmlRules:[
        v => !!v || 'Jumlah anggota harus di isi, jika tidak kasih 0'
      ],
      select: null,
      jenis: [
        'Lembaga',
        'Instansi',
        'Universitas',
        'Organisasi',
        'Institusi'
      ],
      admin:[
          'Provinsi',
          'Kabupaten/Kota',
          'Kecamatan',
          'Kelurahan'
      ],
      tanggal: null,
      checkbox: false
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      }
    }
  }
</script>

