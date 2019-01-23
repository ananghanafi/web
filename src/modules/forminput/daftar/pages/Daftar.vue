<template>
    <v-container grid-list-xs fill-height>
        <v-layout>
            <v-flex xs12>
                <v-card class="pb-3">
                    <v-card-title class="elevation-1 font-weight-bold">
                        FORM INPUT  DONOR MAPPING OF BRG (BADAN RESTORASI GAMBUT) INDONESIA
                    </v-card-title>
                    <v-container fluid>
                   
                    <v-card-text>
                        GENERAL INFORMATION
                    </v-card-text>
                            <v-layout row>
                            <v-flex xs4>
                                <v-subheader>Country</v-subheader>
                            </v-flex>
                            <v-flex xs8>
                                <v-text-field
                                label="Country"
                                value=" "
                                
                                ></v-text-field>
                            </v-flex>
                            </v-layout>

                            <v-layout row>
                            <v-flex xs4>
                                <v-subheader>Name Of Instituion</v-subheader>
                            </v-flex>
                            <v-flex xs8>
                                <v-text-field
                                label="Institution"
                                value=""
                                
                                ></v-text-field>
                            </v-flex>
                            </v-layout>

                            <v-layout row>
                            <v-flex xs4>
                                <v-subheader>Upload Logo</v-subheader>
                            </v-flex>
                            <v-flex xs8>
                                <v-text-field
                                label="Upload Image"
                                value=""
                                suffix=""
                                ></v-text-field>
                            </v-flex>
                            </v-layout>

                        <v-card-text>
                        FUNDING SOURCE
                        </v-card-text>
                        <v-layout row>
                            <v-flex xs4>
                                <v-subheader>Name Of Instituion</v-subheader>
                            </v-flex>
                            <v-flex xs8>
                                <v-text-field
                                label="Institution"
                                value=""
                                suffix=""
                                ></v-text-field>
                            </v-flex>
                            </v-layout>
                        <v-card-text>
                        IMPLEMENTING AGENCY
                        </v-card-text>
                        <v-layout row>
                            <v-flex xs4>
                                <v-subheader>Name Of Instituion</v-subheader>
                            </v-flex>
                            <v-flex xs8>
                                <v-text-field
                                label="Institution"
                                value=""
                                suffix=""
                                ></v-text-field>
                            </v-flex>
                            </v-layout>
                        <v-layout row>
                            <v-flex xs4>
                                <v-subheader>TYPE OF DEVELOPMENT PARTNER KEY ACTIVITIES</v-subheader>
                            </v-flex>
                            <v-select
                            v-model="select"
                            :items="organisasi"
                            :rules="[v => !!v || 'Item is required']"
                            label="Item"
                            required
                            ></v-select>
                            </v-layout>
                        <v-layout row>
                            <v-flex xs4>
                                <v-subheader>FOCAL POINT TO BRG</v-subheader>
                            </v-flex>
                            
                            <v-flex xs8>
                                <v-text-field
                                label="choice"
                                value=""
                                suffix=""
                                ></v-text-field>
                            </v-flex>
                            </v-layout>
                        <v-layout row>
                            <v-flex xs4>
                                <v-subheader>Upload Photo</v-subheader>
                            </v-flex>
                        <div>
                            <v-text-field prepend-icon="attach_file" single-line
                                        v-model="filename" :label="label" :required="required"
                                        @click.native="onFocus"
                                        :disabled="disabled" ref="fileTextField"></v-text-field>
                            <input type="file" :accept="accept" :multiple="false" :disabled="disabled"
                                ref="fileInput" @change="onFileChange">
                        
                        </div>
                        </v-layout>
                             <v-layout justify-center>
                                    <v-btn large="true"
                                    :disabled="valid"
                                    color="#4caf50"
                                    
                                    @click="register"
                                    >
                                    Submit
                                    </v-btn>
                                    </v-layout>
    </v-container>
                        
                                   
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

export default {
    components : {
    },
    data: ()=>({
                select: null,
                organisasi: [
                    'NATIONAL NGO',
                    'INTERNATIONAL NGO',
                    'BILATERAL',
                    'TRUST FUND',
                    'UNIVERSITY',
                    'IMPLEMENTING PARTNER/CONTRACTOR',
                    'GOVERNMENT',
                    'DEVELOPMENT BANK',
                    'RESEARCH CENTER',
                    'ASSOCIATION OF DISTRICT HEADS',
                    'INSTITUTION',
                    'KONSORSIUM',
                    'MULTILATERAL',
                    'OTHER'
                ],
    }),
    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      register(){
            this.loading = true
            this.$store.dispatch('forminput',{
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

<style>
    .arr_open {
        transform: rotate(-180deg);
    }
</style>
