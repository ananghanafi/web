<template>
    <v-container grid-list-md>
        <v-layout column>
            <v-flex xs12>
        
                <v-card>       
                    <v-tabs v-model="tab" fixed centered slider-color="primary lighten-4" class="rt-2">
                        <v-tab>Informasi Umum</v-tab>
                        <v-tab>Pelaksanaan</v-tab>
                        <v-tab>Progress Realisasi</v-tab>
                        <v-tab>Dokumentasi</v-tab>
                    </v-tabs>                 
                    <v-card-text id="cana_detail" class="pa-0 px-2">
                        <v-tabs v-model="tab" fixed>
                            <v-tab>Informasi Umum</v-tab>
                            <v-tab>Pelaksanaan</v-tab>
                            <v-tab>Progress Realisasi</v-tab>
                            <v-tab>Dokumentasi</v-tab>
                            <!-- Informasi Umum -->
                            <v-tab-item>
                                <v-card flat>                   
                                    <v-card-text>
                                        <v-form>
                                            <v-layout v-if="doc" row wrap>
                                                <v-flex md6>
                                                    <!-- Left Side -->
                                                    <v-layout row wrap>
                                                        <v-flex md12>
                                                            <v-card color="secondary" tile>
                                                                <v-card-text>PELAKSANAAN PENIMBUNAN KANAL</v-card-text>
                                                            </v-card>
                                                        </v-flex>
                                                        <v-flex md4>
                                                            <v-text-field
                                                                v-model="doc.year"
                                                                label="TAHUN RTT"
                                                                type="number"
                                                                disabled
                                                            ></v-text-field>
                                                        </v-flex>
                                                        <v-flex md4>                        
                                                            <v-text-field v-model="doc.code" label="KODE" disabled></v-text-field>
                                                        </v-flex>
                                                        <v-flex md4>                        
                                                            <v-text-field v-model="impl.status.remark" label="STATUS" disabled></v-text-field>
                                                        </v-flex>
                                                        <v-flex md12>                        
                                                            <v-text-field v-model="doc.name" label="NAMA KEGIATAN" counter="50"></v-text-field>
                                                        </v-flex>
                                                        <v-flex md6>
                                                            <v-text-field v-model="doc.length" label="PANJANG" suffix="meter" disabled></v-text-field>
                                                        </v-flex>
                                                        <v-flex md12>
                                                            <v-card color="secondary" tile>
                                                                <v-card-text>ANGGARAN</v-card-text>
                                                            </v-card>
                                                        </v-flex>
                                                        <v-flex md6>
                                                            <v-text-field
                                                                v-model="doc.cost"
                                                                label="NILAI ANGGARAN"
                                                                type="number"
                                                            ></v-text-field>
                                                        </v-flex>
                                                        <v-flex md6>                        
                                                            <v-autocomplete
                                                                v-model="doc.fundingSource"
                                                                chips
                                                                deletable-chips
                                                                small-chips
                                                                autocomplete
                                                                :items="list_fundingSource"
                                                                item-text="remark"
                                                                item-value="id"
                                                                label="SUMBER ANGGARAN"
                                                                return-object
                                                            ></v-autocomplete>                        
                                                        </v-flex>
                                                        <v-flex md12>
                                                            <v-textarea
                                                                class="mt-3"
                                                                v-model="doc.remark"
                                                                label="KETERANGAN"
                                                                box
                                                                rows="3"
                                                            >
                                                            </v-textarea>                                                    
                                                        </v-flex>
                                                        <v-flex md12>
                                                            <v-card color="secondary" tile>
                                                                <v-card-text>UPRG</v-card-text>
                                                            </v-card>
                                                        </v-flex>
                                                        <v-flex md6>
                                                            <v-text-field v-model="doc.uprgSlug" label="KODE UPRG" disabled></v-text-field>
                                                        </v-flex>
                                                        <v-flex md6>
                                                            <v-text-field v-model="doc.uprgText" label="NAMA" disabled></v-text-field>
                                                        </v-flex>
                                                    </v-layout>
                                                </v-flex>
                                                <v-flex md6>
                                                    <!-- Right Side -->
                                                    <v-layout row wrap pl-2 pb-2>
                                                        <v-flex md12>
                                                            <MiniMap pRef="pkanal" :doc="doc" :phu="doc ? doc.phu : null" title="LOKASI KEGIATAN"/>
                                                        </v-flex>
                                                        <v-flex md3>
                                                            <v-text-field v-model="doc.lat" label="LATITUDE"></v-text-field>
                                                        </v-flex>
                                                        <v-flex md3>
                                                            <v-text-field v-model="doc.lng" label="LONGITUDE"></v-text-field>
                                                        </v-flex>
                                                        <v-flex md6>                        
                                                            <v-autocomplete 
                                                                disabled
                                                                v-model="doc.phu"
                                                                chips
                                                                deletable-chips
                                                                small-chips
                                                                autocomplete
                                                                :items="list_phu"
                                                                item-text="name"
                                                                item-value="id"
                                                                label="KESATUAN HIDROLOGIS GAMBUT"
                                                                return-object
                                                            ></v-autocomplete>                        
                                                        </v-flex>
                                                        <v-flex md6 xs12>
                                                            <v-autocomplete 
                                                                v-model="doc.administrativeArea.province"
                                                                chips
                                                                deletable-chips
                                                                small-chips
                                                                autocomplete
                                                                :items="list_provinsi"
                                                                item-text="longName"
                                                                item-value="id"
                                                                label="PROVINSI"
                                                                return-object
                                                                disabled
                                                            ></v-autocomplete>                                                                        
                                                        </v-flex>
                                                        <v-flex md6 xs12>
                                                            <v-autocomplete 
                                                                v-model="doc.administrativeArea.city"
                                                                chips
                                                                deletable-chips
                                                                small-chips
                                                                autocomplete
                                                                :items="list_kota"
                                                                item-text="shortName"
                                                                item-value="id"
                                                                label="KOTA/KAB"
                                                                return-object
                                                                disabled
                                                            ></v-autocomplete>                                                                        
                                                        </v-flex>    
                                                        <v-flex md6 xs12>
                                                            <v-autocomplete 
                                                                v-model="doc.administrativeArea.subDistrict"
                                                                chips
                                                                deletable-chips
                                                                small-chips
                                                                autocomplete
                                                                :items="list_kec"
                                                                item-text="shortName"
                                                                item-value="id"
                                                                label="KECAMATAN"
                                                                return-object
                                                            ></v-autocomplete>                                                                        
                                                        </v-flex>                                            
                                                        <v-flex md6 xs12>
                                                            <v-text-field
                                                                v-model="doc.administrativeArea.village"
                                                                label="DESA"
                                                            ></v-text-field>
                                                        </v-flex>
                                                    </v-layout>
                                                </v-flex>
                                            </v-layout>
                                            </v-form>                                
                                        </v-card-text>                        
                                </v-card>                            
                            </v-tab-item>  
                            <!-- Pelaksanaan -->
                            <v-tab-item>
                                <v-card flat>
                                    <v-card-text>
                                        <v-form>
                                            <v-layout v-if="doc" row wrap="">
                                                <v-flex md6>
                                                    <!-- Left Side -->
                                                    <v-layout row wrap="">
                                                        <v-flex xs12>
                                                            <v-card color="secondary" tile>
                                                                <v-card-text>WAKTU DAN PELAKSANA</v-card-text>
                                                            </v-card>
                                                        </v-flex>
                                                        <v-flex md6>
                                                            <m-datepicker
                                                                v-model="det.startDate"
                                                                label="Tanggal Mulai"
                                                            ></m-datepicker>
                                                        </v-flex>
                                                        <v-flex md6>
                                                            <m-datepicker
                                                                v-model="det.endDate"
                                                                label="Tanggal Selesai"
                                                            ></m-datepicker>
                                                        </v-flex>
                                                        <v-flex md6>
                                                            <v-text-field
                                                                label="Nama Pelaksana"
                                                                v-model="det.execTeam"
                                                            ></v-text-field>
                                                        </v-flex>
                                                        <v-flex md6>
                                                            <v-text-field
                                                                label="Kategori Pelaksana"
                                                                v-model="det.execTeamCategory"
                                                            ></v-text-field>
                                                        </v-flex>
                                                        <v-flex md12>
                                                            <v-text-field
                                                                label="Keterangan"
                                                                v-model="det.execTeamRemark"
                                                            ></v-text-field>
                                                        </v-flex>
                                                    </v-layout>
                                                    <v-layout row wrap="">
                                                        <v-flex md12>
                                                            <v-card color="secondary" tile>
                                                                <v-card-text>KOORDINAT GEOGRAFIS DAN AKSES LOKASI</v-card-text>
                                                            </v-card>
                                                        </v-flex>
                                                        <v-flex md12>
                                                            <v-layout row wrap="">
                                                                <!-- info -->
                                                                <v-flex md6>
                                                                    <v-layout row wrap="">
                                                                        <v-flex md12>
                                                                            <v-text-field
                                                                                v-model="doc.lat"
                                                                                label="Lintang/Latitude"
                                                                            ></v-text-field>
                                                                        </v-flex>
                                                                        <v-flex md12>
                                                                            <v-text-field
                                                                                v-model="doc.lng"
                                                                                label="Bujur/Longitude"
                                                                            ></v-text-field>
                                                                        </v-flex>
                                                                        <v-flex md12>
                                                                            <v-text-field
                                                                                v-model="det.utmZone"
                                                                                label="Zona UTM"
                                                                                suffix=" meter "
                                                                            ></v-text-field>
                                                                        </v-flex>
                                                                        <v-flex md12>
                                                                            <v-text-field
                                                                                v-model="det.elevation"
                                                                                label="Elevasi"
                                                                                suffix=" (mdpl) "
                                                                            ></v-text-field>
                                                                        </v-flex>
                                                                    </v-layout>
                                                                </v-flex>
                                                                <!-- sketsa -->
                                                                <v-flex md6 pa-2>
                                                                    <v-card class="grey lighten-4">
                                                                        <v-img
                                                                            :src="impl.files.detailSketch[0] ? impl.files.detailSketch[0].url  : '/img/camera.jpg'"
                                                                            height="200px" contain
                                                                        >
                                                                        </v-img>
                                                                        <v-card-actions class="pl-3 white">
                                                                            <span class="font-weight-medium">Sketsa Detail</span>
                                                                            <v-spacer></v-spacer>
                                                                            <v-btn
                                                                                icon
                                                                                @click="editImg(1)"
                                                                            >
                                                                                <v-icon>edit</v-icon>
                                                                            </v-btn>
                                                                        </v-card-actions>
                                                                    </v-card>
                                                                </v-flex>
                                                            </v-layout>
                                                        </v-flex>
                                                        <v-flex md6>
                                                            <v-textarea
                                                                v-model="det.roadAccess"
                                                                :rows="3"
                                                                label="Akses/Jalan ke Lokasi"
                                                            ></v-textarea>
                                                        </v-flex>
                                                        <v-flex md6>
                                                            <v-textarea
                                                                v-model="det.locationRemark"
                                                                :rows="3"
                                                                label="Uraian Lokasi"
                                                            ></v-textarea>
                                                        </v-flex>
                                                    </v-layout>
                                                </v-flex>
                                                <v-flex md6>
                                                    <!-- Right Side -->
                                                    <v-layout row wrap="">
                                                        <v-flex xs12>
                                                            <v-card color="secondary" tile>
                                                                <v-card-text>ARAH PANDANG</v-card-text>
                                                            </v-card>
                                                        </v-flex>
                                                        <template>
                                                            <v-flex md12>
                                                                <v-card flat>
                                                                    <v-container
                                                                        fluid
                                                                        grid-list-md
                                                                        class="pa-0"
                                                                    >
                                                                        <v-layout row wrap="">
                                                                            <v-flex
                                                                                v-for="card in cards"
                                                                                xs6
                                                                                :key="card.title"
                                                                            >
                                                                                <v-card class="grey lighten-4">
                                                                                    <v-img
                                                                                        :src="impl.files[card.obj][0] ? impl.files[card.obj][0].url : '/img/camera.jpg'"
                                                                                        height="200px" contain aspect-ration="1.7"
                                                                                    >
                                                                                    </v-img>
                                                                                    <v-card-actions class="pl-3 white">
                                                                                        <span class="font-weight-medium">{{card.title}}</span>
                                                                                        <v-spacer></v-spacer>
                                                                                        <v-btn
                                                                                            icon
                                                                                            @click="editImg(card.tag)"
                                                                                        >
                                                                                            <v-icon>edit</v-icon>
                                                                                        </v-btn>
                                                                                    </v-card-actions>
                                                                                </v-card>
                                                                            </v-flex>
                                                                        </v-layout>
                                                                    </v-container>
                                                                </v-card>
                                                            </v-flex>
                                                        </template>
                                                    </v-layout>
                                                    <v-layout column>
                                                        <v-flex xs12>
                                                            <v-card color="secondary" tile>
                                                                <v-card-text>
                                                                    <v-layout
                                                                        row
                                                                        wrap=""
                                                                        align-center
                                                                    >
                                                                        <span>DOKUMEN PENDUKUNG</span>
                                                                        <v-spacer></v-spacer>
                                                                        <v-btn
                                                                            @click="editImg(7)"
                                                                            small
                                                                            flat
                                                                            icon
                                                                            right
                                                                            class="ma-0"
                                                                        >
                                                                            <v-icon>add_circle</v-icon>
                                                                        </v-btn>
                                                                    </v-layout>
                                                                </v-card-text>
                                                            </v-card>
                                                        </v-flex>
                                                        <v-card flat class="pa-0">
                                                            <v-card-text class="py-0 px-1">
                                                                <v-list class="py-0">
                                                                    <v-list-tile
                                                                        avatar
                                                                        @click="()=>{}"
                                                                        v-for="(fl, index) in impl.files.document"
                                                                        :key="index"
                                                                    >
                                                                        <v-list-tile-avatar>
                                                                            <v-icon>attach_file</v-icon>
                                                                        </v-list-tile-avatar>
                                                                        <v-list-tile-content>
                                                                            <v-list-tile-title>{{fl.description}}</v-list-tile-title>
                                                                        </v-list-tile-content>
                                                                        <v-list-tile-action v-if="false">
                                                                            <v-btn icon>
                                                                                <v-icon>delete</v-icon>
                                                                            </v-btn>
                                                                        </v-list-tile-action>
                                                                    </v-list-tile>
                                                                </v-list>
                                                            </v-card-text>
                                                        </v-card>
                                                    </v-layout>
                                                </v-flex>
                                            </v-layout>
                                        </v-form>
                                    </v-card-text>
                                </v-card>
                            </v-tab-item>
                            <!-- Progress Realisasi -->
                            <v-tab-item>
                                <v-card flat dense>
                                    <v-card-title>
                                        <v-spacer></v-spacer>
                                        <div class="font-weight-medium">Waktu Pelaksanaan :</div>
                                        <v-subheader>Tanggal Mulai</v-subheader>
                                        <m-datepicker v-model="det.startDate" label ></m-datepicker>
                                        <v-subheader>Tanggal Selesai</v-subheader>
                                        <m-datepicker v-model="det.endDate" label ></m-datepicker>
                                    </v-card-title>
                                    <ProgressRealisasi module="pkanal" :item="impl"/>                                
                                </v-card>
                            </v-tab-item>
                            <!-- Dokumentasi -->
                            <v-tab-item>
                                <Gallery :item="impl" module="pkanal"/>
                            </v-tab-item>
                        </v-tabs>
                    </v-card-text>
                <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" flat @click.native="$router.push({name:'pkanal_implementasi'})">Batal</v-btn>
                        <v-btn color="primary" flat @click.native="save">Simpan</v-btn>
                    </v-card-actions>                
            </v-card>
        </v-flex>
    </v-layout>
        <MImgDialog ref="dlgImg" />
    </v-container>
</template>
<style>
    #cana_detail .v-tabs__bar {
        display: none;
    }
</style>

<script>
import MiniMap from '@/components/MiniMap'
import MImgDialog from '@/components/MImgDialog'
import Gallery from '@/components/Gallery'
import ProgressRealisasi from '@/components/ProgressRealisasi'

export default {
    components : {
        MiniMap,
        MImgDialog,
        Gallery,
        ProgressRealisasi,
    },
    data(){
        return {
            tab : 0,
            impl : null, // keseluruhan object
            doc : null, // hanya general activity
            det : {}, // detail act
            list_fundingSource : [],            
            list_phu  : [],
            list_provinsi : [],
            list_kota : [],
            list_kec : [],
            list_desa : [],
            menu: false,
            menu2: false,

            cards: [
                { title: 'Arah Pandang ke Utara', tag: 2, obj: 'toNorth' },
                { title: 'Arah Pandang ke Selatan', tag: 4, obj: 'toSouth' },
                { title: 'Arah Pandang ke Timur', tag: 3, obj: 'toEast' },
                { title: 'Arah Pandang ke Barat', tag: 5, obj: 'toWest' }
            ],

        }
    },
    mounted(){
        this.loadData()
        this.loadChoice()
    },
    methods:{
        editImg(tag) {
            // 1 --> sketsa detail
            // 2 --> utaran dst dst
            // 
            let op = {}
            switch (tag) {
                case 1:
                    op = { collection: 'detail-sketch', obj: 'detailSketch', title: 'Upload Sketsa Detail' }; break;
                case 2:
                    op = { collection: 'to-north', obj: 'toNorth', title: 'Upload Arah Pandang Utara' }; break;
                case 3:
                    op = { collection: 'to-east', obj: 'toEast', title: 'Upload Arah Pandang Timur' }; break;
                case 4:
                    op = { collection: 'to-south', obj: 'toSouth', title: 'Upload Arah Pandang Selatan' }; break;
                case 5:
                    op = { collection: 'to-west', obj: 'toWest', title: 'Upload Arah Pandang Barat' }; break;

                // case 6:
                //     op = { title: 'Upload Galeri' }; break;
                case 7:
                    op = { title: 'Upload Dokumen Pendukung' }; break;

            }
            switch (tag) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    op.img = this.impl.files[op.obj][0] ? this.impl.files[op.obj][0].url : null;
                    op.func = 'pkanal/implementasi/uploadImage';
                    break;
                // case 6:
                //     op.img = null;
                //     op.func = 'pkanal/implementasi/uploadGallery';
                //     op.options = {
                //         description: true,
                //         category: true,
                //     }
                //     break;
                case 7:
                    op.img = null;
                    op.func = 'pkanal/implementasi/uploadDocument';
                    op.options = {
                        description: true,
                        category: false,
                        preview: false,
                        // doc,docx,xls,xlsx,pdf,zip
                        mime: 
                            `
                            application/pdf,
                            application/msword,
                            application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                            application/zip,
                            application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,
                            `                        
                    }
                    break;
            }
            op.id = this.impl.generalActivity.id
            this.$refs.dlgImg.open(op)
                .then(res => {
                    this.impl.files = { ...res.files }
                })
        },
        loadData(){
            return this.$store.dispatch('pkanal/implementasi/show', parseInt(this.$route.params.id))
            .then(res=>{
                this.impl = res
                if (!this.impl.detailActivity)
                    this.impl.detailActivity = {}
                this.doc = this.impl.generalActivity
                this.det = this.impl.detailActivity
            })
        },        
        loadChoice(){
            return Promise.all([
                this.$store.dispatch('fundingSource/get'),
                this.$store.dispatch('phu/get'),
                
                this.$store.dispatch('administrativeArea/getProv'),
                Promise.resolve([]),
                Promise.resolve([]),
            ])
            .then(([c, d, e, f, g])=>{
                this.list_fundingSource = c
                this.list_phu = d

                this.list_provinsi = e
                this.list_kota = f
                this.list_kec = g
            })
        },
        save(){
            this.$store.dispatch('pkanal/implementasi/update', this.impl)
            .then(()=>{
                this.$success('Data Implementasi berhasil disimpan')
                this.$router.push({name:'pkanal_implementasi'})
            })
        }
    },
    computed:{
        prov(){
            return this.doc && this.doc.administrativeArea ? this.doc.administrativeArea.province : null
        },
        kota(){
            return this.doc && this.doc.administrativeArea ? this.doc.administrativeArea.city : null
        },
        kec(){
            return this.doc && this.doc.administrativeArea ? this.doc.administrativeArea.subDistrict : null
        }
    },
    watch:{
        prov(n){
            if (!n){
                this.list_kota = []
                // this.doc.administrativeArea.city = null
                return
            }
            this.$store.dispatch('administrativeArea/getKota',n.provinceId)
            .then(res=>{
                this.list_kota = res
            })
        },
        kota(n){
            if (!n){
                this.list_kec = []
                // this.doc.administrativeArea.subDistrict = null
                // this.doc.administrativeArea.village = null
                return
            }
            this.$store.dispatch('administrativeArea/getKec',n.cityId)
            .then(res=>{
                this.list_kec = res
            })
        }
    }
}
</script>

<style>

</style>
