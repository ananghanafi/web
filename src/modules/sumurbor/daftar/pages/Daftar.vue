<template>
<div>
<div class="pb-3">
    <v-container grid-list-xs fill-height>
        <v-layout>
            <v-flex xs12>
                <v-card class="pb-3">
                    <v-card-title class="elevation-1 font-weight-bold">
                       Rencana Biaya RTT - R1.1 Sumur Bor 
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
                                <v-card-text>
                                DAFTAR TINDAKAN RTT KHG ... Provinsi ... Tahun ... 
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
                                                            :colspan="header.colspan"
                                                            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                                                            @click="changeSort(header.value)"
                                                          >
                                                            <v-icon small>arrow_upward</v-icon>
                                                            {{ header.text }}
                                                          </th>
                                                        <th
                                                            v-for="header in headers9"
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
                                                            v-for="header in headers6"
                                                            :key="header.text"
                                                            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                                                            @click="changeSort(header.value)"
                                                          >
                                                            <v-icon small>arrow_upward</v-icon>
                                                            {{ header.text }}
                                                          </th>
                                                        <th
                                                            v-for="header in headers8"
                                                            :key="header.text"
                                                            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                                                            @click="changeSort(header.value)"
                                                          >
                                                            <v-icon small>arrow_upward</v-icon>
                                                            {{ header.text }}
                                                          </th>     
                                                            <th
                                                            v-for="header in headers10"
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
                                                  <td rowspan="2">{{ props.item.name }}</td>
                                                  <td rowspan="2" class="text-xs-right">{{ props.item.calories }}</td>
                                                  <td class="text-xs-right">{{ props.item.fat }}</td>
                                                  <td class="text-xs-right">{{ props.item.carbs }}</td>
                                                    </tr>
                                                    <tr>
                                                  <td rowspan="1"class="text-xs-right">{{ props.item.satuan }}</td>
                                                  <td rowspan="1"class="text-xs-right">{{ props.item.total}}</td>
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
    <h1> INPUT ANGGARAN KEGIATAN R1, R2</h1>
        <table border="5">
            <template v-for="row in storage.rows">
                
                    <table border  height="300px" width="100%">
                        <tr>
                            <th rowspan="2" bgcolor="#d6d8db" style="border-bottom:3px solid black;">NO</th>
                            <th rowspan="2" bgcolor="#d6d8db" style="border-bottom:3px solid black;">KABUPATEN</th>
                            <th rowspan="2" bgcolor="#d6d8db" style="border-bottom:3px solid black;">URPG</th>
                            <th colspan="3" bgcolor="#d6d8db">LOKASI & LUAS AREAL RESTORASI</th>
                            <th colspan="3" bgcolor="#d6d8db">      SUMUR BOR       </th>
                            <th colspan="2" bgcolor="#d6d8db">BIAYA</th>
                        </tr>
                        <tr>
                           <th rowspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">KECAMATAN</th>
                           <th rowspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">DESA</th>
                           <th rowspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">LUAS AREAL RESTORASI(Hektar) </th>
                           <th rowspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">INDIKATIF FUNGSI BUDIDAYA E.G(Unit)</th>
                           <th rowspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">INDIKATIF FUNGSI BUDIDAYA E.G (Unit)</th>
                           <th rowspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">TOTAL(Unit)</th>
                           <th rowspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">SATUAN(Rp)</th>
                           <th rowspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">TOTAL(Rp)</th>
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
                        <td colspan="5">TOTAL   </td>
                        <td colspan="1">SUM</td>
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
            text: 'LOKASI & LUAS AREAL RESTORASI',
            align: 'left',
            sortable: 'false',
            value: 'lokasi',
            colspan: '3',
            }
        ],
        headers6: [
        
            { text: 'Kecamatan', value: 'Kecamatan' },
            { text: 'Desa', value: 'Desa' },
            { text: 'Luas Areal Restorasi(hektar)', value: 'luasarealrestorasi' },
            
            ],
        headers7: [
        {
            text: 'SUMUR BOR',
            align: 'left',
            sortable: 'false',
            value: 'SUMURBOR',
            colspan: '3',
            }
        ],
        headers8: [
            { text: 'INDIKATIF FUNGSI BUDIDAYA E.G(Unit)', value: 'indikatif1' },
            { text: 'INDIKATIF FUNGSI BUDIDAYA E.G(Unit)', value: 'indikatif2' },
            { text: 'Total(Rp)', value: 'total' },

        ],
        headers9: [
        {
            text: 'Biaya',
            align: 'left',
            sortable: 'false',
            value: 'BIAYA',
            colspan: '2',
            }
        ],
        headers10:[
             { text: 'Satuan (Rp)', value: 'biayasatuan' },
             { text: 'Total (Rp)', value: 'biayatotal' }
        ],
        sekatkanal:[
        {
          value: false,
          No: '',
          Kabupaten: '',
          UPRG: '',
          Jumlah: '',
          LuasArealRestorasi: '',
          BiayaSatuan: '',
          BiayaTotal: '',
        }],
        items: [
            {
                value: false,
                no: '1',
                kabupaten: 'Malang',
                program: 'Bantuan',
                jenis: 'Gotong Royong',
                volume: 200
            },
            {
                value: false,
                no: '2',
                kabupaten: 'Malang',
                program: 'Bantuan',
                jenis: 'Gotong Royong',
                volume: 200
            },
            {
                value: false,
                no: '3',
                kabupaten: 'Malang',
                program: 'Bantuan1',
                jenis: 'Gotong Royong',
                volume: 201
            },
            {
                value: false,
                no: '4',
                kabupaten: 'Malang',
                program: 'Bantuan',
                jenis: 'Gotong Royong1',
                volume: 222
            },
            {
                value: false,
                no: '5',
                kabupaten: 'Malang',
                program: 'Bantuan2',
                jenis: 'Gotong Royong3',
                volume: 204
            },
            {
                value: false,
                no: '6',
                kabupaten: 'Jember',
                program: 'Bantuan',
                jenis: 'Gotong Royong',
                volume: 206
            },
        ],
        jumlah:[
            {
                value: false,
                nojumlah: '',
                kabupatenjumlah: '',
                jumlah:'Jumlah',
                volumejumlah: 206
            },
            {
                value: false,
                nojumlah: '',
                kabupatenjumlah: '',
                jumlah:'Jumlah Desa',
                volumejumlah: 206
            },
            {
                value: false,
                nojumlah: '',
                kabupatenjumlah: '',
                jumlah:'Anggaran rata-rata tiap desa',
                volumejumlah: 206
            },
        ]
      }
        
    }
}
</script>

// styling for a template
<style>
</style>