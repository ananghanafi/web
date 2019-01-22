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
                            <v-card-text>
                            DAFTAR TINDAKAN RTT KHG ... Provinsi ... Tahun ... 
                            </v-card-text>
                        <template>
     <v-container grid-list-xs fill-height>
        <v-layout>
            <v-flex xs12>
                <v-card class="pb-3">
                    <v-card-title class="elevation-1 font-weight-bold">
                         SUMMARY RTT - R1 dan R2 berbasis KHG
                    </v-card-title>
                    <button @click="print">Print this component</button>
                    <v-container>
                        <v-layout row wrap>
                            <v-card-text class="py-0">
                                <v-data-table 
                                :headers="headers"
                                :items="items"
                                item-key="name"
                                class="elevation-1"
                                >
                                <template slot="items" slot-scope="props">
                                    <td class="text-xs-center">{{ props.item.No }}</td>
                                    <td class="text-xs-left">{{ props.item.WILAYAH_ADMINISTRATIF }}</td>
                                    <td class="text-xs-left">{{ props.item.KHG,KOORDINATIF_X,Y }}</td>
                                    <td class="text-xs-left">{{ props.item.UPRG }}</td>
                                    <td class="text-xs-left">{{ props.item.KATEGORI }}</td>
                                    <td class="text-xs-center">{{ props.item.JENIS_KEGIATAN }}</td>
                                    <td class="text-xs-center">{{ props.item.VOLUME }}</td>
                                    <td class="text-xs-center">{{ props.item.SATUAN }}</td>
                                    <td class="text-xs-center">{{ props.item.ANGGARAN }}</td>
                                    <td class="text-xs-center">{{ props.item.SUMBER_ANGGARAN }}</td>
                                    <td class="text-xs-center">{{ props.item.KETERANGAN_ANGGARAN }}</td>
                                    <td class="text-xs-center">{{ props.item.ACTION }}</td>
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
                        </v-layout>
                    </v-container>
                </v-card>        
            </v-flex>
        </v-layout>
       
    </v-container>
</template>

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
                
            },
            headers: [
            {
                text: 'No',
                align:'center',
                value: 'no',
            },
            { text: 'WILAYAH_ADMINTRATIF', value: 'WILAYAH_ADMINISTRATIF',align:'center',},
            { text: 'KHG,KOORDINATIF_X,Y', value: 'KHG,KOORDINATIF_X,Y', align:'center',},
            { text: 'UPRG', value: 'UPRG',align:'center',},
            { text: 'KATEGORI', value: 'KATEGORI',align:'center',},
            { text: 'JENIS KEGIATAN', value: 'JENISKEGIATAN',align:'center',},
            { text: 'VOLUME', value: 'VOLUME',align:'center',},
            { text: 'SATUAN', value: 'SATUAN',align:'center',},
            { text: 'ANGGARAN(Rp)', value: 'ANGGARAN',align:'center',},
            { text: 'SUMBER_ANGGARAN', value: 'SUMBER_ANGGARAN',align:'center',},
            { text: 'KETERANGAN_ANGGARAN', value: 'KETERANG_ANANGGARAN',align:'center',},
            { text: 'ACTION', value: 'ACTION',align:'center',},
        ],
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