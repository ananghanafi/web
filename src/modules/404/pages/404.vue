<template>
    <v-layout row wrap fill-height justify-center align-center>
        <v-flex md8 xs12>                
            <v-card flat class="pa-4">
                <v-flex xs12 layout justify-center align-center>
                    <span class="display-4 font-weight-light mr-4 orange--text">404</span>
                    <v-layout row wrap>
                        <v-flex xs12> 
                            <p class="orange--text">
                                <strong> Mohon maaf, halaman yang anda tuju tidak ditemukan</strong> <br>
                                    Silahkan klik tombol di bawah ini untuk kembali ke halaman depan
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
