<template>
    <v-menu
        :close-on-content-click="false"
        v-model="menu"
        :nudge-right="40"
        lazy
        transition="scale-transition"
        full-width
        max-width="290px"
        min-width="290px"
        ref="menu"
        :return-value.sync="date_time"
        >
        <v-text-field
            slot="activator"
            :value="value | toSDT"
            :label="label"
            append-icon="event"
            readonly
        ></v-text-field>
        <v-card flat>            
            <v-layout column>
                <span v-if="tgl && st==2" class="title grey--text text--lighten-2 text-xs-right px-3 pt-2 primary white--text">
                    {{ tgl | toD }}
                </span>
                <v-stepper v-model="st" class="elevation-0">
                    <v-stepper-items>
                        <v-stepper-content step="1" class="pa-0">
                            <v-date-picker v-model="tgl" no-title  @input="tglSelected">
                            </v-date-picker>                    
                        </v-stepper-content>
                        <v-stepper-content step="2" class="pa-0">
                            <v-time-picker v-model="waktu"  format="24hr"></v-time-picker>
                        </v-stepper-content>
                    </v-stepper-items>
                    <v-card-actions>
                        <template v-if="st==1">
                            <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>                            
                            <v-spacer></v-spacer>
                            <v-btn v-if="tgl" icon flat color="primary" @click="st=2">
                                <v-icon>arrow_forward</v-icon>
                            </v-btn>
                        </template>
                        <template v-if="st==2">
                        <v-btn icon flat color="primary" @click="st=1">
                            <v-icon>arrow_back</v-icon>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                        <v-btn flat color="primary" @click="save">OK</v-btn>                                                        
                        </template>
                    </v-card-actions>
                </v-stepper>
            </v-layout>
        </v-card>
    </v-menu>    
</template>

<script>
import format from 'date-fns/format'
import parse from 'date-fns/parse'
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
            waktu : null,
            date_time : null,
            st : 1,
        }
    },
    methods : {
        tglSelected(){
            this.st=2
        },
        save(){
            this.date_time = new Date(this.tgl+' '+this.waktu)
            this.$emit('input', this.date_time)
            this.$refs.menu.save(this.date_time)
        }
    },
    mounted(){
        this.tgl = null
        this.waktu = null

        if (this.value){
            let d = null
            if (this.value instanceof Date){
                d = this.value
            }
            else if (this.value instanceof String){
                d = parse(this.value)
            }
            this.tgl = format(d, 'YYYY-DD-MM')
            this.waktu = format(d, 'HH:mm')
        }
    },
    watch:{
        menu(n){
            if (!n) this.st=1
        },
    }

}
</script>

<style>

</style>
