<template>
<div>
<div class="pb-3">
    <v-container grid-list-xs fill-height>
        <v-layout>
            <v-flex xs12>
                <v-card class="pb-3">
                    <v-card-title class="elevation-1 font-weight-bold">
                         RTT - R1 dan R2 berbasis KHG
                    </v-card-title>
                        <v-card-text class="py-0">
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
                                            label="KHG"
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
                                            label="KECAMATAN"
                                            single-line
                                            hide-details
                                            @input="q_code"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex md2 sm6>
                                        <v-text-field
                                            append-icon="search"
                                            label="UPRG"
                                            single-line
                                            hide-details
                                            @input="q_code"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex md2 sm6>
                                        <v-text-field
                                            append-icon="search"
                                            label="TAHUN"
                                            single-line
                                            hide-details
                                            @input="q_code"
                                        ></v-text-field>
                                    </v-flex>
                                    <v-btn block color="primary" outline @click="load(1)">Search</v-btn>
                                </v-layout>
                            </v-container>
                            
                        </v-card-text>

                </v-card>
                    <v-card-text>
                        TINDAKAN RTT TAHUN ...... Provinsi ...... KHG ...... 
                    </v-card-text>            
            </v-flex>

        </v-layout>
       
    </v-container>
</div>

<div class="container">
    
        <table border="5">
            <template v-for="row in storage.rows">
                
                    <table border  height="300px" width="100%">
                        <tr>
                            <th rowspan="3" bgcolor="#d6d8db" style="border-bottom:3px solid black;">NO</th>
                            <th rowspan="3" bgcolor="#d6d8db" style="border-bottom:3px solid black;">KABUPATEN</th>
                            <th rowspan="3" bgcolor="#d6d8db" style="border-bottom:3px solid black;">URPG</th>
                            <th colspan="3" bgcolor="#d6d8db">LOKASI & LUAS AREAL RESTORASI</th>
                            <th colspan="7" bgcolor="#d6d8db">ARAH TINDAKAN REWETTING(R1)</th>
                            <th colspan="3" bgcolor="#d6d8db">ARAH TINDAKAN REVEGASI (R2)</th>
                        </tr>
                        <tr>
                           <th rowspan="2" bgcolor="#d6d8db" style="border-bottom:3px solid black;">KECAMATAN</th>
                           <th rowspan="2" bgcolor="#d6d8db" style="border-bottom:3px solid black;">DESA</th>
                           <th rowspan="2" bgcolor="#d6d8db" style="border-bottom:3px solid black;">LUAS AREAL RESTORASI(Hektar) </th>
                           <th rowspan="2" bgcolor="#d6d8db" style="border-bottom:3px solid black;">SUMUR BOR(UNIT) </th>
                           <th colspan="2" bgcolor="#d6d8db" style="border-bottom:3px solid black;">PENYEKATAN KANAL (UNIT)</th>
                           <th colspan="2" bgcolor="#d6d8db" style="border-bottom:3px solid black;">RUAS KANAL (METER)</th>
                           <th colspan="2" bgcolor="#d6d8db" style="border-bottom:3px solid black;">PENIMBUNAN(METER)</th>
                           <th rowspan="2" bgcolor="#d6d8db" style="border-bottom:3px solid black;">PENANAMAN POLA MAKSIMAL (HEKTAR)</th>
                           <th rowspan="2" bgcolor="#d6d8db" style="border-bottom:3px solid black;">PENGKAYAAN TANAMAN(HEKTAR)</th>
                           <th rowspan="2" bgcolor="#d6d8db" style="border-bottom:3px solid black;">SUKSESI ALAMI (HEKTAR)</th>
                        </tr>
                        <tr>
                           <th rowspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">Sekat Sekunder& Tersier</th>
                           <th rowspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">Sekat Primer</th>
                            <th rowspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">Kanal Sekunder & Tersier</th>
                            <th rowspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">Kanal Primer</th>
                            <th rowspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">Sekat Sekunder& Tersier</th>
                            <th rowspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">Sekat Kanal Primer</th>
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
                         <td>...</td>
                         <td>...</td>
                         <td>...</td>
                         <td>...</td>
                         
                        </tr>   
                        <tr>
                        <td colspan="5">TOTAL   </td>
                        <td colspan="1">SUM</td>
                        <td colspan="1">SUM   </td>
                        <td colspan="1">SUM   </td>
                        <td colspan="1">SUM   </td>
                        <td colspan="1">SUM   </td>
                        <td colspan="1">SUM   </td>
                        <td colspan="1">SUM   </td>
                        <td colspan="1">SUM   </td>
                        <td colspan="1">SUM   </td>
                        <td colspan="1">SUM   </td>
                        <td colspan="1">SUM   </td>
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