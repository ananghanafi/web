<template>
<div>
<div class="pb-3">
    <v-container grid-list-xs fill-height>
        <v-layout>
            <v-flex xs12>
                <v-card class="pb-3">
                    <v-card-title class="elevation-1 font-weight-bold">
                        INPUT ANGGARAN KEGIATAN R1,R2
                    </v-card-title>
                        <v-card-text class="py-0">
                            <v-container grid-list-md class="pa-0">
                                <v-layout row wrap>
                                    <v-flex md2 sm6>
                                        <v-text-field
                                            append-icon="search"
                                            label="TAHUN"
                                            single-line
                                            hide-details
                                            @input="q_code"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex md2 sm6>
                                        <v-text-field
                                            append-icon="search"
                                            label="KHG"
                                            single-line
                                            hide-details
                                            @input="q_code"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex md2 sm6>
                                        <v-text-field
                                            append-icon="search"
                                            label="KECAMATAN"
                                            single-line
                                            hide-details
                                            @input="q_code"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex md2 sm6>
                                        <v-text-field
                                            append-icon="search"
                                            label="JENIS KEGIATAN"
                                            single-line
                                            hide-details
                                            @input="q_code"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-btn block color="primary" outline @click="load(1)">Search</v-btn>
                                </v-layout>
                            </v-container>
                            <v-container grid-list-md class="pa-0">
                                <v-layout row wrap>
                                    <v-flex md2 sm6>
                                        <v-text-field
                                            append-icon="search"
                                            label="PROVINSI"
                                            single-line
                                            hide-details
                                            @input="q_code"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex md2 sm6>
                                        <v-text-field
                                            append-icon="search"
                                            label="KABUPATEN"
                                            single-line
                                            hide-details
                                            @input="q_code"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex md2 sm6>
                                        <v-text-field
                                            append-icon="search"
                                            label="DESA"
                                            single-line
                                            hide-details
                                            @input="q_code"
                                        ></v-text-field>
                                    </v-flex>
                                                                      
                                </v-layout>
                            </v-container>

                        </v-card-text>

                </v-card>
 <v-card-text>
                        DAFTAR TINDAKAN RTT KHG ... Provinsi ... Tahun ... 
                    </v-card-text>            </v-flex>

        </v-layout>
       
    </v-container>
</div>

<div class="container">
    <h1> INPUT ANGGARAN KEGIATAN R1, R2</h1>
        <table border="5">
            <template v-for="row in storage.rows">
                
                    <table border  height="300px" width="100%">
                        <tr>
                            <th rowspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">NO</th>
                            <th rowspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">WILAYAH ADMINISTRATIF</th>
                            <th rowspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">KHG, KOORDINATIF X,Y</th>
                            <th colspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">UPRG</th>
                            <th colspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">KATEGORI</th>
                            <th colspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">JENIS KEGIATAN</th>
                            <th colspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">VOLUME</th>
                            <th colspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">SATUAN</th>
                            <th colspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">ANGGARAN(RP)</th>
                            <th colspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">SUMBER ANGGARAN</th>
                            <th colspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">KETERANGAN ANGGARAN</th>
                            <th colspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">ACTION</th>
                        </tr>
                        <tr>
                         <td>...</td>
                         <td>...</td>
                         <td>...</td>
                         <td>...</td>
                         <td>...</td>
                         <td>...</td>
                         <td>...</td>
                         <td>...</td>
                         <td>...</td>
                         <td>...</td>
                         <td>...</td>
                         <td>...</td>
                        </tr>
                        <tr>
                         <td>...</td>
                         <td>...</td>
                         <td>...</td>
                         <td>...</td>
                         <td>...</td>
                         <td>...</td>
                         <td>...</td>
                         <td>...</td>
                         <td>...</td>
                         <td>...</td>
                         <td>...</td>
                         <td>...</td>
                        </tr>   
                        
                    </table>
            </template>
        </table>
    </div>
</div>
</template>


<script>
export default {
    // a data has to be a function within a vue component
    data () {
        return {
            storage: {
                rows: [
                    {sn: 111, source: 'EK', pair: {source: 'VLT', in: 100}},
                    
                ]
                
            }
        }
    }
}
</script>

// styling for a template
<style>
</style>