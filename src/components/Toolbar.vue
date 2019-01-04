<template>
    <v-toolbar
        color="toolbar"
        app
        dense
        clipped-left
        >
        <v-toolbar-side-icon v-if="user" color="white--text" 
            @click.stop="clickDrawer"></v-toolbar-side-icon>
        <v-btn icon v-if="false">
            <v-icon v-html="'chevron_right'"></v-icon>
        </v-btn>
        <v-avatar size="40">
            <v-img src="/img/logobrg.png"></v-img>
        </v-avatar>
        <v-toolbar-title class="subheading brown--text ml-0">            
            <v-list-tile :inactive="true" :to="{name:'home'}">
                <!-- {{title}}  -->
                <b>SISTEM INFORMASI BADAN RESTORASI GAMBUT</b>
            </v-list-tile>
        </v-toolbar-title>

        <v-spacer></v-spacer>       
        <div class="hidden-sm-and-down">            
            <slot name="menu">
            </slot>
        </div>
        <div class="hidden-sm-and-up">
            <slot name="minimenu">
            </slot>
        </div>
        <v-menu
            attach
            v-if="user"
            v-model="menu"
            :close-on-content-click="false"
            offset-y
            bottom
            left
            content-class="ra-2"
            >
            <v-btn slot="activator" color="indigo" dark small flat icon fab>
                <v-avatar size="30">
                    <img src="/img/user.png" alt="alt">
                </v-avatar>
            </v-btn>

            <v-card :width="300">
                <v-list>
                    <v-list-tile avatar>
                        <v-list-tile-avatar>
                            <img src="/img/user.png" alt="John">
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>{{user.name}}</v-list-tile-title>
                            <v-list-tile-sub-title>{{user.email}}</v-list-tile-sub-title>
                        </v-list-tile-content>

                        <v-list-tile-action v-if="false">
                            <v-btn
                                :class="fav ? 'red--text' : ''"
                                icon
                                @click="fav = !fav"
                            >
                                <v-icon>favorite</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn :loading="loading" color="primary" flat @click="logout">Logout</v-btn>
                </v-card-actions>
            </v-card>
        </v-menu>
        <v-tooltip bottom v-else>
            
            <v-btn 
                color=""
                dark
                small
                
                icon
                fab
                slot="activator"
                @click="$router.push({name:'login'})"
            >
                <v-icon color="black">person</v-icon>

            </v-btn>
            <span>Login</span>
        </v-tooltip>
    </v-toolbar>    
</template>

<script>
import { TITLE } from '../const'

export default {
    data(){
        return {
            menu : false,
            // message : 'asdasd',
            // fav : false,
            loading : false,
            items: [
                { to : {name : 'home'}, title : 'Halaman Depan'},
                { to : {name : 'home'}, title : 'Perencanaan'},
                { to : {name : 'home'}, title : 'Implementasi'},
                { to : {name : 'home'}, title : 'Laporan'},
            ]
        }
    },
    computed:{
        user(){
            let u = this.$store.getters['user/user']
            // eslint-disable-next-line
            return u ? u : null
        },
        title(){
            return TITLE
        },
        isShow(){
            return this.$route.name !== 'home'
        }
    },
    methods:{
        clickDrawer(){
            this.$emit('dclicked')
        },
        logout(){
            this.loading = true
            this.$store.dispatch('user/logout')
            .then(()=>{
                this.menu = false
                this.loading = false
                this.$router.push({name:'login'})
            })  
            .catch(()=>{
                this.loading = false
            })          
        }
    }

}
</script>