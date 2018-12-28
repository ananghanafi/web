<template>
    <v-list-group
            :prepend-icon="level==0 ? item.icon:''"
            no-action
            :sub-group="level>0"
            v-model="is_open"
        >
        <v-list-tile slot="activator">
            <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
        <template v-for="(subItem,i) in item.items">
            <m-list-tile v-if="!subItem.items" :level="level+1" :key="i" :item="subItem"/>
            <m-list-group v-else :level="level+1" :item="subItem" :key="i"/>
        </template>
    </v-list-group>    
</template>

<script>
import MListTile from './MListTile'
export default {
    name : 'm-list-group',
    props : {
        item : {
            type : Object
        },
        level : {
            type : Number
        }
    },
    components : {
        MListTile
    },
    data(){
        return {
            is_open:false
        }
    }

}
</script>