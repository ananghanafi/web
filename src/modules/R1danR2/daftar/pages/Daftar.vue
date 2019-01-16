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
                            <v-card-text>
                        TINDAKAN RTT TAHUN ...... Provinsi ...... KHG ...... 
                            </v-card-text>  
                            <button @click="print">Print this component</button>
                                <template>
                                          <v-data-table
                                            :headers="headers"
                                            :items="desserts"
                                            :pagination.sync="pagination"
                                            item-key="name"
                                            class="elevation-1"
                                          >
                                <template slot="headers" slot-scope="props">
                                                        <tr>
                                                          <th
                                                            v-for="header in props.headers"
                                                            :key="header.text"
                                                            :rowspan="header.rowspan"
                                                            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                                                            @click="changeSort(header.value)"
                                                          >
                                                            <v-icon small>arrow_upward</v-icon>
                                                            {{ header.text }}
                                                          </th>

                                                          <th
                                                            v-for="header in headers3"
                                                            :key="header.text"
                                                            :rowspan="header.rowspan"
                                                            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                                                            @click="changeSort(header.value)"
                                                          >
                                                            <v-icon small>arrow_upward</v-icon>
                                                            {{ header.text }}
                                                          </th>
                                                        

                                                        <th
                                                            v-for="header in headers4"
                                                            :key="header.text"
                                                            :rowspan="header.rowspan"
                                                            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                                                            @click="changeSort(header.value)"
                                                          >
                                                            <v-icon small>arrow_upward</v-icon>
                                                            {{ header.text }}
                                                          </th>

                                                        <th
                                                            v-for="header in headers5"
                                                            :key="header.text"
                                                            :colspan="header.colspan"
                                                            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                                                            @click="changeSort(header.value)"
                                                          >
                                                            <v-icon small>arrow_upward</v-icon>
                                                            {{ header.text }}
                                                          </th>
                                                        

                                                        <th
                                                            v-for="header in headers6"
                                                            :key="header.text"
                                                            :colspan="header.colspan"
                                                            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                                                            @click="changeSort(header.value)"
                                                          >
                                                            <v-icon small>arrow_upward</v-icon>
                                                            {{ header.text }}
                                                          </th>
                                                        <th
                                                            v-for="header in headers7"
                                                            :key="header.text"
                                                            :colspan="header.colspan"
                                                            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                                                            @click="changeSort(header.value)"
                                                          >
                                                            <v-icon small>arrow_upward</v-icon>
                                                            {{ header.text }}
                                                          </th>
                                                        
                                                        </tr>
                                                        <tr>
                                                        <th
                                                            v-for="header in headers8"
                                                            :key="header.text"
                                                            :rowspan="header.rowspan"
                                                            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                                                            @click="changeSort(header.value)"
                                                          >
                                                            <v-icon small>arrow_upward</v-icon>
                                                            {{ header.text }}
                                                          </th>

                                                        <th
                                                            v-for="header in headers9"
                                                            :key="header.text"
                                                            :rowspan="header.rowspan"
                                                            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                                                            @click="changeSort(header.value)"
                                                          >
                                                            <v-icon small>arrow_upward</v-icon>
                                                            {{ header.text }}
                                                          </th>
                                                        <th
                                                            v-for="header in headers10"
                                                            :key="header.text"
                                                            :colspan="header.colspan"
                                                            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                                                            @click="changeSort(header.value)"
                                                          >
                                                            <v-icon small>arrow_upward</v-icon>
                                                            {{ header.text }}
                                                          </th>
                                                        <th
                                                            v-for="header in headers11"
                                                            :key="header.text"
                                                            :colspan="header.colspan"
                                                            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                                                            @click="changeSort(header.value)"
                                                          >
                                                            <v-icon small>arrow_upward</v-icon>
                                                            {{ header.text }}
                                                          </th>
                                                        <th
                                                            v-for="header in headers12"
                                                            :key="header.text"
                                                            :colspan="header.colspan"
                                                            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                                                            @click="changeSort(header.value)"
                                                          >
                                                            <v-icon small>arrow_upward</v-icon>
                                                            {{ header.text }}
                                                          </th>
                                                        <th
                                                            v-for="header in headers13"
                                                            :key="header.text"
                                                            :rowspan="header.rowspan"
                                                            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                                                            @click="changeSort(header.value)"
                                                          >
                                                            <v-icon small>arrow_upward</v-icon>
                                                            {{ header.text }}
                                                          </th>
                                                        </tr>
                                                        <tr>
                                                        <th
                                                            v-for="header in headers14"
                                                            :key="header.text"
                                                            :rowspan="header.rowspan"
                                                            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                                                            @click="changeSort(header.value)"
                                                          >
                                                            <v-icon small>arrow_upward</v-icon>
                                                            {{ header.text }}
                                                          </th>
                                                        <th
                                                            v-for="header in headers15"
                                                            :key="header.text"
                                                            :rowspan="header.rowspan"
                                                            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                                                            @click="changeSort(header.value)"
                                                          >
                                                            <v-icon small>arrow_upward</v-icon>
                                                            {{ header.text }}
                                                          </th>
                                                        <th
                                                            v-for="header in headers16"
                                                            :key="header.text"
                                                            :rowspan="header.rowspan"
                                                            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                                                            @click="changeSort(header.value)"
                                                          >
                                                            <v-icon small>arrow_upward</v-icon>
                                                            {{ header.text }}
                                                          </th>
                                                        </tr>
                                                    </tr>
                                                </template>


                                    </v-data-table>
                                </template>

                        </v-card-text>

                </v-card>
                              
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
                
            },
            headers: [
                                  {
                                    text: 'No',
                                    align: 'left',
                                    sortable: false,
                                    value: 'nomor',
                                    rowspan: '3',
                                  },
                                ],
            headers3: [
                                  {
                                    text: 'KABUPATEN',
                                    align: 'left',
                                    sortable: false,
                                    value: 'KABUPATEN',
                                    rowspan: '3',
                                  },
                                ],
            headers4: [
                                  {
                                    text: 'UPRG',
                                    align: 'left',
                                    sortable: false,
                                    value: 'UPRG',
                                    rowspan: '3',
                                  },
                                ],
            headers5: [
                                  {
                                    text: 'LOKASI & LUAS AREAL RESTORASI',
                                    align: 'left',
                                    sortable: false,
                                    value: 'LOKASI',
                                    colspan: '3',
                                  },
                                ],
            headers6: [
                                  {
                                    text: 'ARAH TINDAKAN REWETTING(R1)',
                                    align: 'left',
                                    sortable: false,
                                    value: 'REWETTING',
                                    colspan: '7',
                                  },
                                ],
            headers7: [
                                  {
                                    text: 'ARAH TINDAKAN REVEGASI(R2)',
                                    align: 'left',
                                    sortable: false,
                                    value: 'REVEGASI',
                                    colspan: '3',
                                  },
                                ],
            headers8: [
                        { text: 'KECAMATAN', value: 'KECAMATAN', rowspan: '2' },
                        { text: 'DESA', value: 'DESA', rowspan: '2' },
                        { text: 'LUAS AREAL RESTORASI(HEKTAR)', value: 'LUASAREAL', rowspan: '2' },
                    ],
            headers9: [
                                  {
                                    text: 'SUMUR BOR(UNIT)',
                                    align: 'left',
                                    sortable: false,
                                    value: 'REVEGASI',
                                    rowspan: '2',
                                  },
                                ],
            headers10: [
                                  {
                                    text: 'PENYEKATAN KANAL(UNIT)',
                                    align: 'left',
                                    sortable: false,
                                    value: 'REVEGASI',
                                    colspan: '2',
                                  },
                                ],
            headers11: [
                                  {
                                    text: 'RUAS KANAL(METER)',
                                    align: 'left',
                                    sortable: false,
                                    value: 'REVEGASI',
                                    colspan: '2',
                                  },
                                ],
            headers12: [
                                  {
                                    text: 'PENIMBUNAN(METER)',
                                    align: 'left',
                                    sortable: false,
                                    value: 'REVEGASI',
                                    colspan: '2',
                                  },
                                ],
            headers13: [
                                 
                        { text: 'PENANAMAN POLA MAKSIMAL(HEKTAR)', value: 'PENANAMANPOLA',rowspan: '2' },
                        { text: 'PENGKAYAAN TANAMAN(HEKTAR)', value: 'PENGKAYAANTANAMAN',rowspan: '2'  },
                        { text: 'SUKSESI ALAMI(HEKTAR)', value: 'SUKSESIALAMI',rowspan: '2'  },
                                ],
            headers14: [
                                 
                        { text: 'SEKAT SEKUNDER & TERSIER', value: 'SEKATSEKUNDER1',rowspan: '1' },
                        { text: 'SEKAT PRIMER', value: 'SEKATPRIMER1',rowspan: '1'  },
                                ],
            headers15: [
                                 
                        { text: 'KANAL SEKUNDER & TERSIER', value: 'KANALSEKUNDER',rowspan: '1' },
                        { text: 'KANAL PRIMER', value: 'KANALPRIMER',rowspan: '1'  },
                                ],
            headers16: [
                                 
                        { text: 'SEKAT SEKUNDER & TERSIER', value: 'SEKATSEKUNDER2',rowspan: '1' },
                        { text: 'SEKAT KANAL PRIMER', value: 'SEKATKANALPRIMER',rowspan: '1'  },
                                ],
        }
    },
     methods: {
    
    print () {
    window.print();
      this.d.print( this.$el, this.cssText)
    }
    
  }
}
</script>

// styling for a template
<style>
</style>