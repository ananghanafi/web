<template>
    <v-navigation-drawer
      persistent
      :mini-variant="false"
      :clipped="false"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
      class="grey lighten-3"
      width="300"
      id="s_menu"
    >
    <v-layout row wrap class="mt-5" v-if="false">
        <v-flex xs12 justify-center align-center layout>            
            <v-avatar
                
                :size="200"
                color="grey lighten-3"
                >
                <img src="/img/baju_def.png" alt="Company">
            </v-avatar>            
        </v-flex>
    </v-layout>

      <v-list dense class="grey lighten-3" :class="$vuetify.breakpoint.mdAndDown ? '':'mt-5'">
          <template v-for="(item,i) in items">
              <m-list-group  v-if="item.items" :level="0" :key="i" :item="item"/>
              <m-list-tile  v-else :key="i" :level="0" :item="item"/>
          </template>
      </v-list>
    </v-navigation-drawer>    
</template>

<script>
import MListGroup from './MListGroup'
import MListTile from './MListTile'
import menus from '../menus'
export default {
    components : {
        MListGroup,
        MListTile
    },
    props:{
        value:{
            type: Boolean,
            default : true,
        }
    },
    data(){
        return {
            drawer : this.value,
            items: menus         
        }
    },
    watch:{
        value(n){
            this.drawer=n
        },
        drawer(n){
            this.$emit('input',n)
        }        
    }    
}
</script>

<style>
  #app
    .v-navigation-drawer__border {
        display: none
    }

    #s_menu .v-list__tile__title {
        height: initial;
        line-height : initial;
    }
    #s_menu .v-list__tile__title, .v-list__tile__sub-title {
        white-space: initial;
    }
</style>