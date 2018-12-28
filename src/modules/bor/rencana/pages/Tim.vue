<template>
    <v-container grid-list-xs>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                     <v-toolbar color="cyan lighten-4"  class="elevation-0">
                        <v-toolbar-title>Tim</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-text-field
                        append-icon="search"
                        ></v-text-field>
                    </v-toolbar>                    
                    <v-data-table
                        :headers="headers"
                        :items="[]"
                        hide-actions
                        item-key="id"
                        loading="true"
                        search="search"
                    >
                        
                    </v-data-table>
                    <v-card-actions>
                        <v-btn flat>
                            <v-icon class="pr-2">add_circle</v-icon>
                            Tambah
                        </v-btn>
                    </v-card-actions>                                    
                </v-card>    
            
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data(){
        return {
            headers: [
                {
                    text: 'Provinsi-Kab-Kec',
                    align: 'left',
                    sortable: false,
                    value: 'name'
                },
                {
                    text: 'DESA',
                    align: 'left',
                    sortable: false,
                    value: 'name'
                },             
                {
                    text: 'Nama-Jabatan-Alamat',
                    align: 'left',
                    sortable: false,
                    value: 'name'
                },                   
                {
                    text: '',
                    sortable: false,
                },                
            ],            
        }
    }
}
</script>

<style>

</style>
