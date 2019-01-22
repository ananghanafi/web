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
                            <button  @click="print">Print this component</button>
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
                        :rowspan="header.rowspan"
                        :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                        @click="changeSort(header.value)"
                      >
                        <v-icon small>arrow_upward</v-icon>
                        {{ header.text }}
                      </th>
                      <th
                        v-for="header in headers11"
                        :key="header.text"
                        :rowspan="header.rowspan"
                        :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                        @click="changeSort(header.value)"
                      >
                        <v-icon small>arrow_upward</v-icon>
                        {{ header.text }}
                      </th>
                      <th
                        v-for="header in headers12"
                        :key="header.text"
                        :rowspan="header.rowspan"
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
                      
                    </tr>
                    
                  </template>
                <template slot="items" slot-scope="props">
    
                <tr>
              <td>{{ props.item.No }}</td>
              <td class="text-xs-right">{{ props.item.WILAYAHADMINISTRATIF }}</td>
              <td class="text-xs-right">{{ props.item.KHGKOORDINATIFXY }}</td>
              <td class="text-xs-right">{{ props.item.UPRG }}</td>
              <td class="text-xs-right">{{ props.item.KATEGORI }}</td>
              <td class="text-xs-right">{{ props.item.JENISKEGIATAN}}</td>
              <td class="text-xs-right">{{ props.item.VOLUME}}</td>
              <td class="text-xs-right">{{ props.item.SATUAN}}</td>
              <td class="text-xs-right">{{ props.item.ANGGARAN}}</td>
              <td class="text-xs-right">{{ props.item.SUMBERANGGARAN}}</td>
              <td class="text-xs-right">{{ props.item.KETERANGANANGGARAN}}</td>
              <td class="text-xs-right">{{ props.item.ACTION}}</td>
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
            value: 'No',
            rowspan: '2',
          }
        ],
        headers3: [
        {
            text: 'WILAYAH ADMINISTRATIF',
            align: 'left',
            sortable: 'false',
            value: 'WILAYAHADMINISTRATIF',
            rowspan: '2',
            }
        ],
        headers4: [
        {
            text: 'KHG, KOORDINATIF X,Y',
            align: 'left',
            sortable: 'false',
            value: 'KHGKOORDINATIFXY',
            rowspan: '2',
            }
        ],
        headers5: [
        {
            text: 'UPRG',
            align: 'left',
            sortable: 'false',
            value: 'UPRG',
            rowspan: '2',
            }
        ],
        headers6: [
        {
            text: 'KATEGORI',
            align: 'left',
            sortable: 'false',
            value: 'KATEGORI',
            rowspan: '2',
            }
        ],
        headers7: [
        {
            text: 'JENIS KEGIATAN',
            align: 'left',
            sortable: 'false',
            value: 'JENISKEGIATAN',
            rowspan: '2',
            }
        ],
        headers9: [
        {
            text: 'VOLUME',
            align: 'left',
            sortable: 'false',
            value: 'VOLUME',
            rowspan: '2',
            }
        ],
        headers10: [
        {
            text: 'SATUAN',
            align: 'left',
            sortable: 'false',
            value: 'SATUAN',
            rowspan: '2',
            }
        ],
        headers11: [
        {
            text: 'ANGGARAN(RP)',
            align: 'left',
            sortable: 'false',
            value: 'ANGGARAN',
            rowspan: '2',
            }
        ],
        headers12: [
        {
            text: 'SUMBER ANGGARAN',
            align: 'left',
            sortable: 'false',
            value: 'SUMBERANGGARAN',
            rowspan: '2',
            }
        ],
        headers13: [
        {
            text: 'KETERANGAN ANGGARAN',
            align: 'left',
            sortable: 'false',
            value: 'KETERANGANANGGARAN',
            rowspan: '2',
            }
        ],
        headers14: [
        {
            text: 'ACTION',
            align: 'left',
            sortable: 'false',
            value: 'ACTION',
            rowspan: '2',
            }
        ],
        sekatkanal:[
        {
          value: true,
          No: '1',
          WILAYAHADMINISTRATIF: 'MALANG',
          KHGKOORDINATIFXY: '80,90',
          UPRG: 'UPRG',
          KATEGORI: 'APA AJA',
          JENISKEGIATAN: 'PERAMPOKAN',
          VOLUME: 'BANYAK',
          SATUAN: 'GAK KEHITUNG',
          ANGGARAN: 'TAK TERBATAS',
          SUMBERANGGARAN: 'PRIBADI',
          KETERANGANANGGARAN: 'MAHAL',
          ACTION: ''
        },
        {
          value: true,
          No: '2',
          WILAYAHADMINISTRATIF: 'MALANG',
          KHGKOORDINATIFXY: '80,90',
          UPRG: 'UPRG',
          KATEGORI: 'APA AJA',
          JENISKEGIATAN: 'PERAMPOKAN',
          VOLUME: 'BANYAK',
          SATUAN: 'GAK KEHITUNG',
          ANGGARAN: 'TAK TERBATAS',
          SUMBERANGGARAN: 'PRIBADI',
          KETERANGANANGGARAN: 'MAHAL',
          ACTION: ''
        },
        {
          value: true,
          No: '3',
          WILAYAHADMINISTRATIF: 'MALANG',
          KHGKOORDINATIFXY: '80,90',
          UPRG: 'UPRG',
          KATEGORI: 'APA AJA',
          JENISKEGIATAN: 'PERAMPOKAN',
          VOLUME: 'BANYAK',
          SATUAN: 'GAK KEHITUNG',
          ANGGARAN: 'TAK TERBATAS',
          SUMBERANGGARAN: 'PRIBADI',
          KETERANGANANGGARAN: 'MAHAL',
          ACTION: ''
        }
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