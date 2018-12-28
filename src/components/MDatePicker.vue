<template>
    <v-menu
        :close-on-content-click="false"
        v-model="menu"
        :nudge-right="40"
        :return-value.sync="tgl"
        lazy
        transition="scale-transition"
        full-width
        max-width="290px"
        min-width="290px"
        ref="menu"
        content-class="ra-2"
        >
        <v-text-field
            slot="activator"
            :value="value | toSD"
            :label="label"
            append-icon="event"
            readonly
        ></v-text-field>
        <v-date-picker v-model="sel_tgl" >
                <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>            
                <v-spacer></v-spacer>
                <v-btn flat color="orange" @click="hapus">Hapus</v-btn>
                <v-btn flat color="primary" @click="save">OK</v-btn>
        </v-date-picker>
    </v-menu>    
</template>

<script>

export default {
    props:{
        value : {
            default : null
        },
        label : {
            type : String,
            default : 'Date'
        }
    },
    data(){
        return {
            menu : false,
            tgl : null,
            sel_tgl : null,
        }
    },
    mounted(){
        this.tgl = this.value
        this.sel_tgl = this.tgl
    },
    methods:{
        hapus(){
            this.tgl = null
            this.menu = false
        },
        save(){
            this.tgl = this.sel_tgl
            this.menu = false
            this.$emit('input', this.tgl)
        }
    },
    // watch:{
    //     tgl(n){
    //         this.$emit('input', n)
    //     }
    // }
}
</script>

<style>

</style>
