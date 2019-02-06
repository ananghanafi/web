<template>
<div>
<div class="pb-3">
    <v-container grid-list-xs fill-height>
        <v-layout>
            <v-flex xs12>
                <v-card class="pb-3">
                    
                        <v-card-text class="py-0">
                            <v-container grid-list-md class="pa-0">
                                <v-layout row wrap>
                                    <v-flex md2 sm6>
                                        <v-text-field
                                            append-icon="search"
                                            label="COUNTRY"
                                            single-line
                                            hide-details
                                            @input="q_code"
                                        ></v-text-field>
                                        
                                    </v-flex>
                                    <v-flex md2 >
                                        <v-text-field
                                            append-icon="search"
                                            label="NAME OF INSTITUTION"
                                            single-line
                                            hide-details
                                            @input="q_code"
                                        ></v-text-field>
                                        
                                    </v-flex>
                                    <v-flex md2 sm6>
                                    <v-btn block color="primary" outline @click="load(1)">Search</v-btn>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                              
                                <button @click="print">Print this component</button>
                                <template>
                                      <v-data-table
                                        :headers="headers"
                                        :items="summary"
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
                                                            :rowspan="header.rowspan"
                                                            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                                                            @click="changeSort(header.value)"
                                                          >
                                                            <v-icon small>arrow_upward</v-icon>
                                                            {{ header.text }}
                                                          </th>
                                                        </tr>
                                                </template>
                                                            <template slot="items" slot-scope="props">
                                                                 <tr>
                                                            <td class="text-xs-left">{{ props.item.nomor}}</td>
                                                            <td class="text-xs-left">{{ props.item.kota}}</td>
                                                            <td class="text-xs-left">{{ props.item.institusi}}</td>
                                                            <td class="text-xs-left">{{ props.item.fundingsource}}</td>
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
                                  },
                                ],
                        headers3: [
                                  {
                                    text: 'Country',
                                    align: 'left',
                                    sortable: false,
                                    value: 'kota',
                                  },
                                ],
                        headers4: [
                                  {
                                    text: 'Name of Institution',
                                    align: 'left',
                                    sortable: false,
                                    value: 'institusi',
                                  },
                                ],
                        headers5: [
                                  {
                                    text: 'Funding Source',
                                    align: 'left',
                                    sortable: false,
                                    value: 'fundingsource',
                                  },
                                ],
                        summary: [
                            {
                                value: false,
                                nomor: '-',
                                kota: '-',
                                institusi: '-',
                                fundingsource: '-',
                            },
                        ]
                        // headers5: [
                        //           {
                        //             text: 'No',
                        //             align: 'left',
                        //             sortable: false,
                        //             value: 'nomor',
                        //           },
                        //         ],
                        // headers6: [
                        //           {
                        //             text: 'PROGRAM',
                        //             align: 'left',
                        //             sortable: false,
                        //             value: 'PROGRAM',
                        //           },
                        //         ],
                        // headers7: [
                        //           {
                        //             text: 'JENIS KEGIATAN',
                        //             align: 'left',
                        //             sortable: false,
                        //             value: 'JENISKEGIATAN',
                        //           },
                        //         ],
                        // headers8: [
                        //           {
                        //             text: 'VOLUME',
                        //             align: 'left',
                        //             sortable: false,
                        //             value: 'VOLUME',
                        //           },
                        //         ],
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