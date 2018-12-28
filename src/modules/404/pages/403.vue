<template>
    <v-layout row wrap fill-height justify-center align-center>
        <v-flex md8 xs12>                
            <v-card flat class="pa-4">
                <v-flex xs12 layout justify-center align-center>
                    <span class="display-4 font-weight-light mr-4 orange--text">403</span>
                    <v-layout row wrap>
                        <v-flex xs12>
                            <p class="orange--text">
                                <strong>Mohon maaf,Anda tidak memiliki cukup hak untuk mengakses halaman ini !</strong> <br>
                                Silahkan menghubungi administrator anda atau silahkan klik tombol di bawah
                                ini untuk kemabali ke halaman depan

                            </p>
                        </v-flex>    
                        <v-flex xs12>                            
                            <v-btn :to="{name:'home'}" class="ma-0 mt-3" outline color="orange">HOME</v-btn>
                        </v-flex>                    
                    </v-layout>
                </v-flex>            
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
export default {

}
</script>

<style>

</style>
