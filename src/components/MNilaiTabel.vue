<template>

    <v-layout >
        <v-flex  xs18>
            <!-- <v-card class="white"> -->
        <table   style="width:100%">
            <tr>
                <th style="width:70%">{{ label }}</th>
                <th style="width:30%" >{{ val }}</th> 
            </tr>
        </table>    
        <!-- </v-card>      -->
        </v-flex>
    </v-layout>    
</template>

<script>
export default {
    name: 'm-nilai-tabel',
//  items: [
        props:{
            label: {},
            val: {},
        },
                    
            // label1: 'Frozen Yogurt',
            // val1: 159,
          
        //  ]
         
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
