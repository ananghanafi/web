<template>
    <v-subheader v-if="item.subheader">
        {{ item.title }}        
    </v-subheader>    
    <v-list-tile v-else :to="item.to ? item.to : null">
        <v-list-tile-action v-if="level==0">
            <v-icon v-html="item.icon"></v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action v-if="level>0">
            <v-icon v-html="item.icon"></v-icon>
        </v-list-tile-action>
    </v-list-tile>    
</template>

<script>
export default {
    name : 'm-list-tile',
    props : {
        item : {
            type : Object,
        },
        level : {
            type : Number,
        }
    },
}
</script>

<style>

</style>
