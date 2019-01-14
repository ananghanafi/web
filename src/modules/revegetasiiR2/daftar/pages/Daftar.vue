<template>
<div>
<div class="pb-3">
    <v-container grid-list-xs fill-height>
        <v-layout>
            <v-flex xs12>
                <v-card class="pb-3">
                    <v-card-title class="elevation-1 font-weight-bold">
                         SUMMARY RTT - R1 dan R2 berbasis KHG
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
                        TINDAKAN RTT    TAHUN ...... Provinsi ...... KHG ...... 
                    </v-card-text>   

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
                                                            v-for="header in headers7"
                                                            :key="header.text"
                                                            :rowspan="header.rowspan"
                                                            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                                                            @click="changeSort(header.value)"
                                                          >
                                                            <v-icon small>arrow_upward</v-icon>
                                                            {{ header.text }}
                                                          </th>
                                                        <th
                                                            v-for="header in headers8"
                                                            :key="header.text"
                                                            :colspan="header.colspan"
                                                            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                                                            @click="changeSort(header.value)"
                                                          >
                                                            <v-icon small>arrow_upward</v-icon>
                                                            {{ header.text }}
                                                          </th> 
                                                        
                                                        <th

                                                            v-for="header in headers10"
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
                                                        
                                                        

                                                        <tr> 
                                                        <th
                                                            v-for="header in headers6"
                                                            :key="header.text"
                                                            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                                                            @click="changeSort(header.value)"
                                                          >
                                                            <v-icon small>arrow_upward</v-icon>
                                                            {{ header.text }}
                                                          </th>
                                                        <th
                                                            v-for="header in headers9"
                                                            :key="header.text"
                                                            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                                                            @click="changeSort(header.value)"
                                                          >
                                                            <v-icon small>arrow_upward</v-icon>
                                                            {{ header.text }}
                                                          </th>     
                                                            
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
                            <th rowspan="2" bgcolor="#d6d8db" style="border-bottom:3px solid black;">NO</th>
                            <th rowspan="2" bgcolor="#d6d8db" style="border-bottom:3px solid black;">KABUPATEN</th>
                            <th rowspan="2" bgcolor="#d6d8db" style="border-bottom:3px solid black;">UPRG</th>
                            <th colspan="3" bgcolor="#d6d8db" style="border-bottom:3px solid black;">Arah Tindakan Restorasi(Ha)</th>
                            <th rowspan="2" bgcolor="#d6d8db" style="border-bottom:3px solid black;">Total(Ha)</th>
                            <th colspan="3" bgcolor="#d6d8db" style="border-bottom:3px solid black;">Arah Tindakan Restorasi(Rp)</th>
                            <th rowspan="2" bgcolor="#d6d8db" style="border-bottom:3px solid black;">BIAYA TOTAL(Rp)</th>
                        </tr>
                        <tr>
                            <th rowspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">Penanaman Pola Maksimal(R2.3)
                            </th>
                            <th rowspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">Pengkayaan Tanaman(R.2)
                            </th>
                            <th rowspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">Suksesi Alami (R2.1)
                            </th>
                            <th rowspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">Penanaman Pola Maksimal(R2.3)
                            </th>
                            <th rowspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">Pengkayaan Tanaman(R.2)
                            </th>
                            <th rowspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">Suksesi Alami (R2.1)
                            </th>
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
                        </tr>   
                        <tr>
                        <td colspan="4">TOTAL   </td>
                        <td colspan="1">SUM</td>
                        <td colspan="1">SUM</td>
                        <td colspan="1">SUM</td>
                        <td colspan="1">SUM</td>
                        <td colspan="1">SUM</td>
                        <td colspan="1">SUM</td>
                        <td colspan="1">SUM</td>
                        
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
            rowspan: '2',
          },
       
         
        ],
        
        headers3: [
        {
            text: 'Kabupaten',
            align: 'left',
            sortable: 'false',
            value: 'Kabupaten',
            rowspan: '2',
            }
        ],
        headers4: [
        {
            text: 'UPRG',
            align: 'left',
            sortable: 'false',
            value: 'uprg',
            rowspan: '2',
            }
        ],
        headers5: [
        {
            text: 'Arah Tindakan Restorasi(Ha)',
            align: 'left',
            sortable: 'false',
            value: 'arahtindakanrestorasi',
            colspan: '3',
            }
        ],
        headers6: [
        
            { text: 'Penanaman Pola Maksimal(R2.3)', value: 'penanamanpola' },
            { text: 'Pengkayaan Tanaman(R.2)', value: 'pengkayaantanaman' },
            { text: 'Suksesi Alami(R2.1)', value: 'suksesialami' },
            
            ],
        headers7: [
        {
            text: 'Total(Ha)',
            align: 'left',
            sortable: 'false',
            value: 'total',
            rowspan: '2',
            }
        ],
         headers8: [
        {
            text: 'Arah Tindakan Restorasi(Rp)',
            align: 'left',
            sortable: 'false',
            value: 'arahtindakanrestorasi',
            colspan: '3',
            }
        ],
        headers9: [
            { text: 'Penanaman Pola Maksimal(R2.3)', value: 'penanamanpola2' },
            { text: 'Pengkayaan Tanaman(R.2)', value: 'pengkayaantanaman2' },
            { text: 'Suksesi Alami(R2.1)', value: 'suksesialami2' },

        ],
        headers10: [
        {
            text: 'Biaya',
            align: 'left',
            sortable: 'false',
            value: 'biaya',
            rowspan: '2',
            }
        ],
        
        }
    }
}
</script>

// styling for a template
<style>
</style>