<template>
    <v-menu offset-y left attach>
        <v-btn flat class="white--text" slot="activator">
            <template v-if="selected">
            <label class="lbl_toolbar_active">{{title}}</label>
            <label class="lbl_caption_active">{{selected.caption}}</label>
            </template>
            <template v-else>
                <label>{{title}}</label>
            </template>
        </v-btn>
        <v-card :width="width">
            <v-list v-if="lists && lists.length>0">
                <v-list-tile @click="selected=i" v-for="i in lists" :key="i.value">
                    <v-list-tile-title>{{i.caption}}</v-list-tile-title>
                </v-list-tile>
            </v-list>                
        </v-card>
    </v-menu>    
</template>

<script>
export default {
    props : {
        width : {
            type : Number,
            default : 0
        },
        title : {
            type : String,
            default : 'MENU'
        },
        lists : {
             //{value:sadasd,caption:adasd}
            default : []
        }
    },
    data(){
        return {
            selected : this.lists && this.lists.length>0 ? this.lists[0]:{value:'',caption : this.title}
        }
    }
}
</script>


<style>
    .lbl_caption_active {
        padding-top: 10px;
    }

    .lbl_toolbar_active {
        position: absolute;
        transform: translateY(-7px) scale(0.55);        
    }
</style>