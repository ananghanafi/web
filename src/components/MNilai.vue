<template>
    <v-layout>
        <!-- <v-flex :class="labelGrid">
            <strong>{{label}}</strong>
        </v-flex>         -->
        <v-flex v-if="val">
            <slot name="val">
            {{val}}
            </slot>
        </v-flex>
    </v-layout>    
</template>

<script>
export default {
    name: 'm-nilai',
    props : {
        label : {},
        val : {
            default:0
        }
    },
    computed: {
        labelGrid() {
            if (this.val === "")
                return ""
            else
                return "lg3 md4 sm5 xs5"
        },
    }
}
</script>

<style>

</style>
