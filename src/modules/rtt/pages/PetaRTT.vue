<template>
<v-container class="pa-0" fluid fill-height>
        <v-layout>
            <v-flex xs12>
                <l-map ref="map" :zoom="zoom" :center="center" style="z-index:1">
                    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                    <!-- <v-marker-cluster :options="clusterOptions">
                        <v-geo-json v-for="geoJson in features" :key="geoJson.kegiatan" :geojson="geoJson" :options="geoJsonOptions"></v-geo-json>
                    </v-marker-cluster> -->
                </l-map>
            </v-flex>
        </v-layout>
</v-container>
</template>

<script>
import {MAP_SERVER} from '@/const'
import {LMap, LTileLayer, LMarker, LPopup, LGeoJson, L} from 'vue2-leaflet'
import "leaflet/dist/leaflet.css"
import LMarkerCluster from 'vue2-leaflet-markercluster'

// Build icon assets.
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.imagePath = ''
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

export default {
    components:{
        LMap,
        LTileLayer,
        'v-marker': LMarker,
        'v-geo-json': LGeoJson,
        'v-popup': LPopup,
        'v-marker-cluster': LMarkerCluster,
    },
    data(){
        let geoJsonOptions = {
            onEachFeature: function (feature, layer) {
                layer.getLatLng = function() { return this.getBounds().getCenter() }
                layer.setLatLng = function() { }
                layer._latlng = layer.getLatLng();
            }
        }
        return {
            zoom:5.4,
            center: L.latLng(-3.0723357, 117.5130651),
            // url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            url: 'http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png',
            attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            marker: L.latLng(-3.0723357, 117.5130651),
            features: Object,
            geoJsonOptions,
            clusterOptions: {},
        }

    },
    methods:{
    },
    mounted(){
        setTimeout(() => {
        this.$nextTick(() => {
            this.map = this.$refs.map.mapObject
        // });

            var targetedProvincesLayer = L.tileLayer.wms(MAP_SERVER, {
                    layers: 'brg:sasaran_provinsi',
                    format: 'image/png',
                    transparent: true,
                });
            var phuBorderLayer = L.tileLayer.wms(MAP_SERVER, {
                    layers: 'brg:batas_khg',
                    format: 'image/png',
                    transparent: true,
                });
            var wellLayer = L.tileLayer.wms(MAP_SERVER, {
                    layers: 'brg:rtt-sumur_bor',
                    format: 'image/png',
                    styles: 'dev_well_point_stacker',
                    exceptions: 'application/vnd.ogc.se_inimage',
                    transparent: true,
                });
            var canalBlockLayer = L.tileLayer.wms(MAP_SERVER, {
                    layers: 'brg:rtt-sekat_kanal',
                    format: 'image/png',
                    styles: 'dev_well_point_stacker_orange',
                    exceptions: 'application/vnd.ogc.se_inimage',
                    transparent: true,
                });
            var canalHoardingLayer = L.tileLayer.wms(MAP_SERVER, {
                    layers: 'brg:rtt-kanal_timbun',
                    format: 'image/png',
                    styles: 'dev_style_kanal_timbun',
                    exceptions: 'application/vnd.ogc.se_inimage',
                    transparent: true,
                });
            var retentionBasinLayer = L.tileLayer.wms(MAP_SERVER, {
                    layers: 'brg:rtt-embung',
                    format: 'image/png',
                    styles: 'dev_style_point',
                    exceptions: 'application/vnd.ogc.se_inimage',
                    transparent: true,
                });
            var revegetationLayer = L.tileLayer.wms(MAP_SERVER, {
                    layers: 'brg:rtt-revegetasi',
                    format: 'image/png',
                    styles: 'dev_style_revegetasi',
                    exceptions: 'application/vnd.ogc.se_inimage',
                    transparent: true,
                });
            var revitalizationLayer = L.tileLayer.wms(MAP_SERVER, {
                    layers: 'brg:rtt-revitalisasi',
                    format: 'image/png',
                    styles: 'dev_style_revitalisasi',
                    exceptions: 'application/vnd.ogc.se_inimage',
                    transparent: true,
                });

            // this.$store.dispatch('skanal/perencanaan/getGeoJson', 15)
            // .then(res=>{
            //     this.features = res.features
            // })

            // var geoJsonLayer = L.geoJson(this.features);

            var baseMaps = {
                "Sasaran Provinsi": targetedProvincesLayer,
                "Batas KHG": phuBorderLayer,
            };

            var overlayMaps = {
                "RTT Sumur Bor": wellLayer,
                "RTT Sekat Kanal": canalBlockLayer,
                "RTT Penimbunan Kanal": canalHoardingLayer,
                "RTT Embung": retentionBasinLayer,
                "RTT Revegetasi": revegetationLayer,
                "RTT Revitalisasi": revitalizationLayer,
                // "geoJson": geoJsonLayer,
            };

            phuBorderLayer.addTo(this.map) // set this layer selected by default

            L.control.layers(baseMaps, overlayMaps, {collapsed: false}).addTo(this.map);

        });
        }, 4000);

    }
}
</script>

<style>
@import "~leaflet.markercluster/dist/MarkerCluster.css";
@import "~leaflet.markercluster/dist/MarkerCluster.Default.css";
.map{  height:100vh; width: 100vw; }
</style>
