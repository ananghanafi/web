<template>
    <v-layout row fill-height align-center justify-center
        :class="{'grad_login':st==1, 'grad_register':st==2}"
    >
        <v-flex lg6 md8 sm8 >            
            <v-card v-if="!register_ok" flat class="elevation-2 ma-2">
                <v-layout row wrap>
                    <v-flex :md7="st==1" :md5="st==2" hidden-sm-and-down :class="st==1 ? 'grey darken-1':'lime darken-4' " 
                        class="pa-4 pr-5 white--text">
                        <span class="text-xs-right d-block display-2 font-weight-light">SIM Monitoring</span>
                        <span class="text-xs-right d-block display-1 font-weight-light">Restorasi Gambut</span>
                        <span class="text-xs-right d-block font-weight-bold mt-5">
                            Badan Restorasi Gambut<br>
                            Republik Indonesia
                        </span>
                        <span class="text-xs-right d-block font-weight-normal mt-5">Kantor Pusat:<br>
                            Gedung Sekretariat Negara lantai 2,<br>
                            Jl Teuku Umar 10, Jakarta Pusat,<br> 
                            DKI Jakarta Indonesia
                        </span>
                    </v-flex>
                    <v-flex :md5="st==1" :md7="st==2" sm12>
                        <v-stepper v-model="st">     
                            <v-stepper-items>
                                <v-stepper-content step="1" class="pa-0">                                               
                                    <v-layout column wrap class="pa-4">
                                        <v-flex class="mb-5">
                                            <img src="img/logo-brg.png">
                                        </v-flex>
                                        <v-flex class="mt-5">
                                            <v-text-field
                                                hide-details
                                                label="Email"
                                                v-model="lg.email"
                                                :disabled="loading"
                                            ></v-text-field>
                                            
                                        </v-flex>
                                        <v-flex>
                                            <v-text-field
                                                hide-details
                                                type="password"
                                                label="Password"
                                                v-model="lg.password"
                                                @keyup.13="login"
                                                :disabled="loading"
                                            ></v-text-field>                                
                                        </v-flex>
                                        <v-layout class="mt-2" >
                                            <v-flex layout justify-end>
                                                <v-btn flat :loading="loading" @click="login" color="success" class="mr-0">LOGIN
                                                </v-btn>
                                            </v-flex>
                                        </v-layout>
                                        <v-layout column class="mt-5">
                                            <v-flex >
                                                <a @click.prevent="regPage" class="text-center">Halaman Register</a>
                                            </v-flex>
                                            <v-flex >
                                                <a @click.prevent="$router.push({name:'home'})" >Halaman depan</a>
                                            </v-flex>
                                        </v-layout>

                                    </v-layout>
                                </v-stepper-content>
                                <v-stepper-content step="2" class="pa-0">                                               
                                    <v-layout column class="pa-4">
                                        <v-flex class="mb-5">
                                            <span class="display-2 font-weight-light">Register</span>
                                        </v-flex>
                                        <v-flex class="mt-5">
                                            <v-text-field
                                                hide-details
                                                label="Nama depan"
                                                v-model="reg.firstname"
                                            ></v-text-field>                                            
                                        </v-flex>
                                        <v-flex>
                                            <v-text-field
                                                hide-details
                                                label="Nama belakang"
                                                v-model="reg.lastname"
                                            ></v-text-field>                                            
                                        </v-flex>
                                        <v-flex>
                                            <v-text-field
                                                hide-details
                                                label="Email"
                                                v-model="reg.email"
                                            ></v-text-field>                                            
                                        </v-flex>
                                        <v-flex>
                                            <v-text-field
                                                hide-details
                                                type="password"
                                                label="Password"
                                                v-model="reg.password"
                                                @keyup.13="login"
                                            ></v-text-field>                                
                                        </v-flex>
                                        <v-flex>
                                            <v-text-field
                                                hide-details
                                                type="password"
                                                label="Confirm Password"
                                                v-model="reg.confirm_password"
                                                @keyup.13="register"
                                            ></v-text-field>                                
                                        </v-flex>
                                        <v-layout class="mt-2">
                                                <v-flex layout justify-end>
                                                    <v-btn flat :loading="loading" @click="register" color="success" class="mr-0">REGISTER
                                                    </v-btn>
                                                </v-flex>
                                        </v-layout>
                                        <v-layout column>
                                            <v-flex >
                                                <a @click.prevent="loginPage" class="text-center">Halaman Login</a>
                                            </v-flex>
                                            <v-flex >
                                                <a @click.prevent="$router.push({name:'home'})" >Halaman depan</a>
                                            </v-flex>
                                        </v-layout>                                       

                                    </v-layout>
                                </v-stepper-content>                                
                            </v-stepper-items>
                        </v-stepper>
                    </v-flex>

                </v-layout>
            </v-card>
            <v-card v-else>
                <v-card-text>
                    <span class="display-1 font-weight-light">Registrasi berhasil</span>
                    <p class="mt-3 mb-0">
                        Selanjutnya, silahkan menunggu persetujuan yang akan dikirim ke dalam surel anda di bawah ini                        
                    </p>
                    <p class="text-xs-center">
                        <span class="headline font-weight-normal">{{register_ok.email}}</span>
                    </p>

                    <v-layout column>
                        <v-flex >
                            <a @click.prevent="loginPage" class="text-center">Halaman Login</a>
                        </v-flex>
                        <v-flex >
                            <a @click.prevent="$router.push({name:'home'})" >Halaman depan</a>
                        </v-flex>
                    </v-layout>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>


<script>
export default {
    data(){
        return {
            lg : {
                email : '',
                password : '',
            },
            reg : {
                firstname : '',
                lastname : '',
                email : '',
                password : '',
                confirm_password : '',
            },
            loading : false,
            st : 1,

            register_ok : null,
        }
    },
    methods:{
        loginPage(){
            this.st=1
            this.register_ok = false
        },
        regPage(){
            this.st=2
            this.register_ok = false
        },
        login(){
            this.loading = true
            this.$store.dispatch('user/login',{email:this.lg.email, password:this.lg.password})
            .then(()=>{
                this.lg.email = ''
                this.lg.password = ''
                this.loading = true // keep loading sampai pindah halaman
                this.$router.push({name:'home'})
            })
            .catch(()=>{
                this.loading = false
                this.lg.password = ''
            })
        },
        register(){
            this.loading = true
            this.$store.dispatch('user/register',{
                email:this.reg.email,
                firstname:this.reg.firstname, 
                lastname:this.reg.lastname, 
                password:this.reg.password, 
                comfirm_password:this.reg.confirm_password
            })
            .then((res)=>{
                this.reg.email = ''
                this.reg.firstname = ''
                this.reg.lastname = ''
                this.reg.password = ''
                this.reg.confirm_password = ''

                this.loading = false
                this.register_ok = res
                // this.$router.push({name:'home'})
                // eslint-disable-next-line
                // console.log(res)
            })
            .catch(()=>{
                this.loading = false
            })

        }
    }    

}
</script>

<style scoped>
    .v-stepper{
        box-shadow: none;
    }
    
    .grad_login {
        background:  #ace7d9;
    }
    .grad_register {
        background: #e5e1bd;
    }
</style>
