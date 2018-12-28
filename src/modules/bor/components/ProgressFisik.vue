<template>
    <v-menu v-model="menu" left :close-on-content-click="false" content-class="ra-2">
        <v-btn small flat icon color="primary" slot="activator">
            <v-icon small>edit</v-icon>
        </v-btn>
        <v-card width="300">
            <v-card-title primary-title class="mb-0 pb-0">
                <span class="title">Progress Fisik</span>
            </v-card-title>
            <v-card-text class="px-3 py-0">
                <v-slider
                    v-model="progress"
                    :label="`${progress}%`"
                    inverse-label
                ></v-slider>                
            </v-card-text>
            <v-card-actions class="rb-2">
                <v-btn flat @click="menu=false">Cancel</v-btn>
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="save">Save</v-btn>
            </v-card-actions>
        </v-card>
    </v-menu>
</template>

<script>
export default {
    props:{
        item:{
            type: Object,
        },
    },
    mounted(){
        this.progress = this.item.physicalPct
    },
    data(){
        return {
            menu: false,
            progress: 0,
        }
    },
    methods:{
        save(){
            let obj = {...this.item, physicalPct: this.progress}
            this.$store.dispatch('bor/implementasi/implProgress', obj)
            .then(()=>{
                this.item.physicalPct = this.progress
                this.menu = false
                this.$success('Progress fisik berhasil disimpan');
            })
            .catch(e=>e)          
        }
    }
}
</script>

<style>

</style>
