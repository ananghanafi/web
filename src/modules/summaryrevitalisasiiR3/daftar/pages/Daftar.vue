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
                    <button @click="print">Print this component</button>
                    <v-data-table 
                                :headers="headers"
                                :items="items"
                                item-key="name"
                                class="elevation-1"
                                >
                                <template slot="items" slot-scope="props">
                                    <td class="text-xs-center">{{ props.item.no }}</td>
                                    <td class="text-xs-left">{{ props.item.kabupaten }}</td>
                                    <td class="text-xs-left">{{ props.item.program }}</td>
                                    <td class="text-xs-left">{{ props.item.jenis }}</td>
                                    <td class="text-xs-left">{{ props.item.volume }}</td>
                                    <td class="text-xs-left">{{ props.item.harga }}</td>
                                    <td class="text-xs-left">{{ props.item.total }}</td>
                                </template>
                                <template slot="jumlah" slot-scope="props">
                                    <td class="text-xs-center">{{ props.item.nojumlah }}</td>
                                    <td class="text-xs-left">{{ props.item.kabupatenjumlah }}</td>
                                    <td class="text-xs-center" colspan="2">{{ props.item.jumlah }}</td>
                                    <td class="text-xs-left"></td>{{ props.item.volumejumlah }}
                                </template>
                                </v-data-table>             
                                <v-data-table 
                                :headers="headers"
                                :items="items"
                                item-key="name"
                                class="elevation-1"
                                >
                                <template slot="jumlah" slot-scope="props">
                                    <td class="text-xs-center">{{ props.item.nojumlah }}</td>
                                    <td class="text-xs-left">{{ props.item.kabupatenjumlah }}</td>
                                    <td class="text-xs-center" colspan="2">{{ props.item.jumlah }}</td>
                                    <td class="text-xs-left"></td>{{ props.item.volumejumlah }}
                                </template>
                                </v-data-table>    
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
                            <th rowspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">NO</th>
                            <th rowspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">KABUPATEN</th>
                            <th rowspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">PROGRAM</th>
                            <th colspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">JENIS KEGIATAN</th>
                            <th colspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">VOLUME</th>
                            
                            <th colspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">HARGA(Rp)</th>
                            <th colspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">Total(Rp)</th>
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
                         <td colspan="2">Jumlah</td>
                         <td>...</td>
                         <td>...</td>
                         <td>...</td>                                       
                        </tr>  
                        </tr>  
                         <tr>
                         <td>...</td>
                         <td>...</td>
                         <td colspan="2">Jumlah Desa</td>
                         <td>...</td>
                        <td>...</td>
                        <td>...</td>                          
                        </tr> 
                        </tr>  
                         <tr>
                         <td>...</td>
                         <td>...</td>
                         <td colspan="2">Anggaran Rata-rata Tiap Desa</td>
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
                align:'center',
                value: 'no',
            },
            { text: 'Kabupaten', value: 'kabupaten',align:'center',},
            { text: 'Program', value: 'program', align:'center',},
            { text: 'Jenis Kegiatan', value: 'jenis',align:'center',},
            { text: 'Volume', value: 'volume',align:'center',},
            { text: 'Harga(Rp)', value: 'harga',align:'center',},
            { text: 'Total(Rp)', value: 'total',align:'center',},
        ],
        items: [
            {
                value: false,
                no: '1',
                kabupaten: 'Malang',
                program: 'Bantuan',
                jenis: 'Gotong Royong',
                volume: 200,
                harga: 9000,
                total: 10000,
            },
            {
                value: false,
                no: '2',
                kabupaten: 'Malang',
                program: 'Bantuan',
                jenis: 'Gotong Royong',
                volume: 200,
                harga: 9000,
                total: 10000,
            },
            {
                value: false,
                no: '3',
                kabupaten: 'Malang',
                program: 'Bantuan1',
                jenis: 'Gotong Royong',
                volume: 201,
                harga: 9000,
                total: 10000,
            },
            {
                value: false,
                no: '4',
                kabupaten: 'Malang',
                program: 'Bantuan',
                jenis: 'Gotong Royong1',
                volume: 222,
                harga: 9000,
                total: 10000,
            },
            {
                value: false,
                no: '5',
                kabupaten: 'Malang',
                program: 'Bantuan2',
                jenis: 'Gotong Royong3',
                volume: 204,
                harga: 9000,
                total: 10000,
            },
            {
                value: false,
                no: '6',
                kabupaten: 'Jember',
                program: 'Bantuan',
                jenis: 'Gotong Royong',
                volume: 206,
                harga: 9000,
                total: 10000,
            },
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