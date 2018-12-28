<template>
    <v-menu v-model="menu" left :close-on-content-click="false" content-class="ra-2">
        <v-btn small flat icon color="primary" slot="activator">
            <v-icon small>edit</v-icon>
        </v-btn>
        <v-card width="300">
            <v-card-title primary-title class="mb-0 pb-0">
                <span class="title">Progress Keuangan</span>
            </v-card-title>
            <v-card-text class="px-3 py-0">
                <v-text-field
                    label="Nilai (Rp.)"
                    v-model="cost"
                ></v-text-field>
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
        this.progress = this.item.costPct
        this.cost = this.item.cost
    },
    data(){
        return {
            menu: false,
            progress: 0,
            cost: 0,
        }
    },
    methods:{
        save(){
            let obj = {...this.item, costPct: this.progress, cost:this.cost}
            this.$store.dispatch('bor/implementasi/implProgress', obj)
            .then(()=>{
                this.item.costPct = this.progress
                this.menu = false
                this.$success('Progress keuangan berhasil disimpan');
            })
            .catch(e=>e)          
        }
    }
}
</script>

<style>

</style>
