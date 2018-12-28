<template>
    <v-layout column>        
        <v-card height="300" id="map" flat tabindex="1" >
        </v-card>
        <span class="ml-2 mt-3 caption grey--text text--lighten-1">Klik peta di atas lalu scroll dengan mouse untuk zoom</span>
        <div id="popup" class="ol-popup">
            <a href="#" id="popup-closer" class="ol-popup-closer"></a>
            <div id="popup-content">
                <v-layout class="mt-2" column v-for="(f,index) in features" :key="index" 
                    style="max-height:180px;overflow-y:auto;overflow-x: hidden;">
                    <template v-for="l in Object.keys(f.properties)">
                        <m-labelval  :key="l" :label="l" :val="f.properties[l]"/>
                    </template>
                </v-layout>
            </div>
        </div>    
    </v-layout>
</template>
<style>
      .ol-popup {
        position: absolute;
        background-color: white;
        -webkit-filter: drop-shadow(0 1px 4px rgba(0,0,0,0.2));
        filter: drop-shadow(0 1px 4px rgba(0,0,0,0.2));
        padding: 15px;
        border-radius: 10px;
        border: 1px solid #cccccc;
        bottom: 12px;
        left: -50px;
        min-width: 480px;
      }
      .ol-popup:after, .ol-popup:before {
        top: 100%;
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
      }
      .ol-popup:after {
        border-top-color: white;
        border-width: 10px;
        left: 48px;
        margin-left: -10px;
      }
      .ol-popup:before {
        border-top-color: #cccccc;
        border-width: 11px;
        left: 48px;
        margin-left: -11px;
      }
      .ol-popup-closer {
        text-decoration: none;
        position: absolute;
        top: 2px;
        right: 8px;
      }
      .ol-popup-closer:after {
        content: "✖";
      }
</style>
<script>
import {Map, View, Overlay} from 'ol'
// import {METERS_PER_UNIT} from 'ol/proj'
import TileLayer from 'ol/layer/Tile'
import TileWMS from 'ol/source/TileWMS'
// import TileJSON from 'ol/source/TileJSON.js';
// import XYZ from 'ol/source/XYZ';
import {defaults as defaultInteractions} from 'ol/interaction.js';

import {MAP_SERVER} from '@/const'
// import {toStringHDMS} from 'ol/coordinate';
// import {toLonLat} from 'ol/proj';
// import axios from 'axios'
// import {normParam} from '@/tools'

export default {
    props : {
        doc : {
            type : Object,
            default : null,
        },
        phu : {
            type : Object,
            default : null,
        }
    },
    components : {
    },
    data(){
        return {
            updated : false,
            map : null,
            layers : [],
            overlay : null,
            view : null,
            khgWMS : null,
            features : [],
            layers_source: [
                { obj:null, code: 'brg:batas_provinsi' , title : 'Batas Wilayah'},
                { obj:null, code: 'brg:rtt-sumur_bor' , title : 'Sumur Bor'},
            ],
        }
    },
    mounted(){       
        var container = document.getElementById('popup');
        // var content = document.getElementById('popup-content');
        var closer = document.getElementById('popup-closer');        
        closer.onclick=()=>{
            this.overlay.setPosition(undefined);
            closer.blur();
            return false;
        };
        this.overlay = new Overlay({
            element: container,
            autoPan: true,
            autoPanAnimation: {
                duration: 250
            }
        });

        this.layers = this.layers_source.map(l=>{
            l.obj =  new TileLayer({
                source: new TileWMS({
                    url : MAP_SERVER,
                    params : {
                        'FORMAT': 'image/png', 
                        'VERSION': '1.1.1',
                        tiled: true,
                        "LAYERS": l.code,
                        "exceptions": 'application/vnd.ogc.se_inimage',
                    }
                })
            })
            return l.obj
        })
        
        this.khgWMS = this.layers[1].getSource()

        this.layers[1]= new TileLayer({
            source : this.khgWMS,
        })

        this.view = new View({
            // projection: "EPSG:3857",
            projection : "EPSG:4326",
            center : [117.5130651,-3.0723357],
            zoom: 4.67
        })

        this.map = new Map({
            interactions: defaultInteractions({
                constrainResolution: true, onFocusOnly: true
            }),            
            target: 'map',
            layers: this.layers,
            overlays: [this.overlay],
            view: this.view,
        })

        var bounds = [100.30319172787422, -6.660077192947979,
                    139.53419886577674, 2.448883485390566];

        // this.map.getView().on('change:sssresolution', (evt)=>{
            // var resolution = evt.target.get('resolution');
            // var units = this.map.getView().getProjection().getUnits();
            // var dpi = 25.4 / 0.28;
            // var mpu = METERS_PER_UNIT[units];
            // var scale = resolution * mpu * 39.37 * dpi;
            // if (scale >= 9500 && scale <= 950000) {
            // scale = Math.round(scale / 1000) + "K";
            // } else if (scale >= 950000) {
            // scale = Math.round(scale / 1000000) + "M";
            // } else {
            // scale = Math.round(scale);
            // }
            // document.getElementById('scale').innerHTML = "Scale = 1 : " + scale;
        // });

        this.map.getView().fit(bounds, this.map.getSize())

        // eslint-disable-next-line
        // this.map.on('singleclick', (evt)=>{
        //     let coordinate = evt.coordinate

        //     this.overlay.setPosition(undefined)
        //     this.features = []
        //     var viewResolution = /** @type {number} */ (this.view.getResolution());            
        //     var url = this.khgWMS.getGetFeatureInfoUrl(evt.coordinate, viewResolution, 'EPSG:4326',
        //         {'INFO_FORMAT': 'application/json'}
        //     );
        //     if (url) {
        //         // get info using fetch, karena error waktu menggunakan axios
        //         fetch(url)
        //         .then(r=>r.json())
        //         .then(o=>{
        //             // baca geojson
        //             this.features = o.features
        //             if (this.features && this.features.length>0)
        //                 this.overlay.setPosition(coordinate)
        //         }).catch(e=>{
        //             let {message='Gagal mendapatkan info'} = e
        //             this.$error(message)
        //         })
        //     }
        // });
        // update peta
        setTimeout(() => {
            this.map.getView().fit(bounds, this.map.getSize())
        }, 1000);

        // update khg
        if (this.phu){
            this.layers[1].setVisible(true)
            this.khgWMS.updateParams({
                CQL_FILTER : `kode_sbo='${this.doc.code}'`
            })
        }
        else {
            this.layers[1].setVisible(false)
        }
    },
    methods:{    
        updateMap(){
            if (!this.updated){
                setTimeout(() => {
                    this.map.updateSize()
                    this.updated = true
                }, 100);           
            } 
        },     
    },
    watch:{
        phu(n){
            if (this.overlay)
                this.overlay.setPosition(undefined)
            if (n){
                this.layers[1].setVisible(true)
                this.khgWMS.updateParams({
                    CQL_FILTER : `kode_khg='${n.code}'`
                })
            }
            else {
                this.layers[1].setVisible(false)
                let par = this.khgWMS.params_
                delete par.CQL_FILTER
                this.khgWMS.updateParams(par)               
            }
        }
    }
}
</script>

<style>
</style>
