<template>
  <v-app id="app" light>
    <v-fade-transition mode="out-in">
      <MSideBar v-cloak v-if="is_sidebar_show && user" v-model="drawer"/>
    </v-fade-transition>
    <MToolbar v-cloak v-if="is_toolbar_show" @dclicked="drawer=!drawer">
      <router-view name="toolbar" slot="menu"></router-view>
      <router-view name="minitoolbar" slot="minimenu"></router-view>
    </MToolbar>
      <progress-l :loading="isLoading"/>

    <v-content  class="grey lighten-3">
      <v-fade-transition mode="out-in">
        <component :is="comp"></component>
      </v-fade-transition>
    </v-content>
    <MFooter/>
   
    <confirm ref="confirm" />

    <v-snackbar 
      multi-line
      v-model="snackbar.value" right :timeout="snackbar.type=='error' ? 10000:4000" top>      
        <v-icon v-if="snackbar.type=='error'" color="red" class="mr-3">error_outline</v-icon>
        <v-icon v-else  color="white" class="mr-3">info</v-icon>
        <span v-html="snackbar.text"></span>
      <v-btn :class="snackbar.cls"
        flat
        @click="snackbar.value = false"
      >
        Tutup
      </v-btn>
    </v-snackbar>    
  </v-app>
</template>
<style>
  html {
    overflow: auto;
  }
</style>

<script>
import Vue from 'vue'
import Confirm from './components/Confirm'
// import CompP from './components/CompProgress'
// import CompE from './components/CompError'
import V403 from './modules/404/pages/403'
import MToolbar from './components/Toolbar'
import MSideBar from './components/SideBar'
import MFooter from './components/Footer'
export default {
  name: 'App',
  components: {
    MToolbar,
    MSideBar,
    MFooter,
    V403,
    Confirm, 
  },
  data () {
    return {
      is_mounted : false,
      loading: false,
      clipped: false,
      drawer: true,
      fixed: false,

      miniVariant: false,
      right: true,
      rightDrawer: false,

      snackbar : {
        value : false,
        text : '',
        type : 'info',
        cls : '',
      }
    }
  },
  mounted(){  
    Vue.prototype.$confirm = this.$refs.confirm.open
    Vue.prototype.$confirmDanger = (message,op,title)=>{
      return this.$refs.confirm.open(message,{...op,color:'red'},title)
    }

    // eslint-disable-next-line
    Vue.prototype.$snack = (type,message,obj)=>{    
      this.snackbar.text = message
      this.snackbar.value = true
      this.snackbar.type = type
      this.snackbar.cls = `${type}--text`
    }
    Vue.prototype.$error = (message,obj)=>{
      this.$snack('error',message,obj)
    }
    Vue.prototype.$info = (message,obj)=>{
      this.$snack('info',message,obj)      
    }
    Vue.prototype.$success = (message,obj)=>{
      this.$snack('success',message,obj)
    }
    Vue.prototype.$warning = (message,obj)=>{
      this.$snack('warning',message,obj)
    }

    // fetch me
    // this.$store.dispatch('user/fetch')
    // .catch(e=>e)
  },
  computed:{
    isLoading(){
      return this.loading || this.$store.getters['main/isAnyProgress']
    },
    is_sidebar_show(){
      return this.$route.name !== 'login' && this.$route.name !== '404' && this.$route.name !== 'home'
    },
    is_toolbar_show(){
      return this.$route.name !== 'login' && this.$route.name !== '404'
    },

    user(){
      return this.$store.getters['user/user']
    },
    403(){
      return this.$store.getters['main/403']
    },
    comp(){
      if (this.$store.getters['main/403'])
        return 'V403'
      else
        return 'router-view'

    }
  },
  watch:{
    $route(){
      // this.drawer = false
    }
  }
}
</script>