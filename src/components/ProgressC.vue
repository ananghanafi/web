<template>
    <v-flex xs12 layout justify-center v-if="loading">
        <v-progress-circular
            indeterminate
            color="primary"
            class="ma-0"
        ></v-progress-circular>        
    </v-flex>
</template>

<script>
export default {
    props : {
        loading : {
            type : Boolean
        }
    }
}
</script>

<style>

</style>
