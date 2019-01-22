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
                                <v-card-text>
                            TINDAKAN RTT    TAHUN ...... Provinsi ...... KHG ...... 
                            </v-card-text>
                            <button @click="print">Print this component</button>
                            </v-container>
                            
                        </v-card-text>
                            
                    <template>
  <v-data-table
    :headers="headers"
    :items="sekatkanal"
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
                    

                    <th
                        v-for="header in headers6"
                        :key="header.text"
                        :rowspan="header.rowspan"
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
                    </tr>


                    <tr>      
                        <th
                        v-for="header in headers8"
                        :key="header.text"
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
              <td>{{ props.item.No }}</td>
              <td class="text-xs-right">{{ props.item.Kabupaten }}</td>
              <td class="text-xs-right">{{ props.item.UPRG }}</td>
              <td class="text-xs-right">{{ props.item.Jumlah }}</td>
              <td class="text-xs-right">{{ props.item.LuasArealRestorasi }}</td>
              <td class="text-xs-right">{{ props.item.BiayaSatuan}}</td>
               <td class="text-xs-right">{{ props.item.BiayaTotal}}</td>
                </tr>
    
            </template>
        </v-data-table>
</template>
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
                            <th rowspan="2" bgcolor="#d6d8db" style="border-bottom:3px solid black;">JUMLAH(UNIT)</th>
                            <th rowspan="2" bgcolor="#d6d8db" style="border-bottom:3px solid black;">LUAS AREAL RESTORASI(HEKTAR)</th>
                            <th colspan="2" bgcolor="#d6d8db" style="border-bottom:3px solid black;">BIAYA</th>
                        </tr>
                        <tr>
                            <th rowspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">SATUAN(Rp)
                            </th>
                            <th rowspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">TOTAL(Rp)
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
                                                  
                        </tr>
                        <tr>
                         <td>...</td>
                         <td>...</td>
                         <td>...</td>
                         <td>...</td>
                         <td>...</td>
                         <td>...</td>
                         <td>...</td>
                         
                        </tr>   
                        <tr>
                        <td colspan="3">TOTAL   </td>
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
            value: 'name',
            rowspan: '2',
          },
       
         
        ],
        
        headers3: [
        {
            text: 'Kabupaten',
            align: 'left',
            sortable: 'false',
            value: 'name',
            rowspan: '2',
            }
        ],
        headers4: [
        {
            text: 'UPRG',
            align: 'left',
            sortable: 'false',
            value: 'name',
            rowspan: '2',
            }
        ],
        headers5: [
        {
            text: 'Jumlah (unit)',
            align: 'left',
            sortable: 'false',
            value: 'name',
            rowspan: '2',
            }
        ],
        headers6: [
        {
            text: 'Luas Areal Restorasi(Hektar)',
            align: 'left',
            sortable: 'false',
            value: 'name',
            rowspan: '2',
            }
        ],
        headers7: [
        {
            text: 'Biaya',
            align: 'left',
            sortable: 'false',
            value: 'name',
            colspan: '2',
            }
        ],
        headers8:[
             { text: 'Satuan (Rp)', value: 'biayasatuan' },
             { text: 'Total (Rp)', value: 'biayatotal' }
        ],
        sekatkanal:[
        {
          value: false,
          No: '1',
          Kabupaten: 'Malang',
          UPRG: 'UPRG',
          Jumlah: 'Banyak',
          LuasArealRestorasi: 'Tak terbatas',
          BiayaSatuan: 'Tak Terbatas',
          BiayaTotal: 'Tak Terbatas',
        },
        {
          value: false,
          No: '2',
          Kabupaten: 'Papua Barat',
          UPRG: 'UPRG',
          Jumlah: 'Banyak',
          LuasArealRestorasi: 'Tak terbatas',
          BiayaSatuan: 'Tak Terbatas',
          BiayaTotal: 'Tak Terbatas',
        },
        {
          value: false,
          No: '3',
          Kabupaten: 'Malang',
          UPRG: 'UPRG',
          Jumlah: 'Banyak',
          LuasArealRestorasi: 'Tak terbatas',
          BiayaSatuan: 'Tak Terbatas',
          BiayaTotal: 'Tak Terbatas',
        }
        ],
        desserts: [
          {
            value: false,
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%'
          },
          {
            value: false,
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%'
          },
          {
            value: false,
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%'
          },
          {
            value: false,
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%'
          },
          {
            value: false,
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%'
          },
          {
            value: false,
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%'
          },
          {
            value: false,
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%'
          },
          {
            value: false,
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%'
          },
          {
            value: false,
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%'
          },
          {
            value: false,
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%'
          }
        ]
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