<template>
    <v-layout row align-baseline>
        <v-flex :class="labelGrid">
            <strong>{{label}}</strong>
        </v-flex>        
        <v-flex lg9 md8 sm7 xs7 v-if="val">
            <slot name="val">
            {{val}}
            </slot>
        </v-flex>
    </v-layout>    
</template>

<script>
export default {
    name: 'm-labelval',
    props : {
        label : {},
        val : {}
    },
    computed: {
        labelGrid() {
            if (this.val === "")
                return "lg12 md12 sm12 xs12"
            else
                return "lg3 md4 sm5 xs5"
        },
    }
}
</script>

<style>

</style>
