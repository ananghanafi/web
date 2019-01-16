import Vue from 'vue'
import Vuex from 'vuex'
// import { API } from './const';
// import axios from 'axios'

Vue.use(Vuex)
import user from './modules/user/store'
import bor from './modules/bor/store'
import skanal from './modules/sekat_kanal/store'
import pkanal from './modules/penimbunan_kanal/store'
import canalType from './modules/canalType/store'
import canalBlockingType from './modules/canalBlockingType/store'
import revegetasi from './modules/revegetasi/store'
import zoneType from './modules/zoneType/store'
import constructionType from './modules/constructionType/store'
import fundingSource from './modules/fundingSource/store'
import phu from './modules/peatHydrologicalUnity/store'
import administrativeArea from './modules/administrativeArea/store'
import revegetationType from './modules/revegetationType/store'
import burnStatus from './modules/burnStatus/store'
import embung from './modules/embung/store'
import revitalisasi from './modules/revitalisasi/store'
import perencanaan from './modules/perencanaan/store'
import donor from './modules/donor/store'
import currency from './modules/currency/store'
import brgMandat from './modules/brgMandat/store'
import personal from './modules/personal/store'
import inputrtt from './modules/inputrtt/store'
import revitalisasir3 from './modules/revitalisasir3/store'
import inputdatartt from './modules/inputdatartt/store'
import R1danR2 from './modules/R1danR2/store'
import summaryR1danR2 from './modules/summaryR1danR2/store'
import R3 from './modules/R3/store'
import SummaryR3 from './modules/SummaryR3/store'
import summarysumurbor from './modules/summarysumurbor/store'
import sekatkanal from './modules/sekatkanal/store'
import penimbunankanal from './modules/penimbunankanal/store'
import revegetasiiR2 from './modules/revegetasiiR2/store'
import revitalisasiiR3 from './modules/revitalisasiiR3/store'
import summaryrevitalisasiiR3 from './modules/summaryrevitalisasiiR3/store'
import Dashboard3 from './modules/Dashboard3/store'
import PetaDesa from './modules/PetaDesa/store'
import Rencanakegiatan from './modules/Rencanakegiatan/store'
import MonitoringKegiatan from './modules/MonitoringKegiatan/store'
import KelolaPeta from './modules/KelolaPeta/store'
import reporting from './modules/reporting/store'
import Dashboard2 from './modules/Dashboard2/store'
import PetaMonitoring from './modules/PetaMonitoring/store'
import Dashboard4 from './modules/Dashboard4/store'
import PetaMonitoring2 from './modules/PetaMonitoring2/store'
import Input from './modules/Input/store'
import Reporting2 from './modules/Reporting2/store'
import Provinsi from './modules/Provinsi/store'
import KabupatenKota from './modules/KabupatenKota/store'
import BatasProvinsi from './modules/BatasProvinsi/store'
import BatasKabupaten from './modules/BatasKabupaten/store'
import Jalan from './modules/Jalan/store'
import Sungai from './modules/Sungai/store'
import LahanGambut from './modules/LahanGambut/store'
import KesatuanHidrologisGambut from './modules/KesatuanHidrologisGambut/store'
import FungsiEkosistemGambut from './modules/FungsiEkosistemGambut/store'
import KanalLahanGambut from './modules/KanalLahanGambut/store'
import AreaKanal from './modules/AreaKanal/store'
import PrioritasIndikatifRestorasiGambut from './modules/PrioritasIndikatifRestorasiGambut/store'
import Konsesi from './modules/Konsesi/store'
import PolaRuangProvinsi from './modules/PolaRuangProvinsi/store'
import AreaTerbakar20152017 from './modules/AreaTerbakar20152017/store'
import NamaKHG from './modules/NamaKHG/store'
import MorarotiumKawasanHutanGambut from './modules/MorarotiumKawasanHutanGambut/store'
import TutupanLahan from './modules/TutupanLahan/store'
import KawasanHutan from './modules/KawasanHutan/store'
import donordash from './modules/donordash/store'

const main = {
    namespaced: true,
    state: {
        is_403: false,
        progress : 0, // counter progress
    },
    getters: {
        403(state) {
            return state.is_403
        },
        isAnyProgress(state){
            return state.progress > 0
        }
    },
    mutations: {
        403(state, val) {
            state.is_403 = val
        },
    
        pStart(state){
            state.progress++
        },
        pEnd(state){
            state.progress--
            if (state.progress<0)
                state.progress=0
        }
    }
}
const store = new Vuex.Store({
    modules:{
        main,
        user,
        bor,
        revegetasi,
        skanal,
        canalType,
        canalBlockingType,
        pkanal,
        zoneType,
        constructionType,
        fundingSource,
        phu,
        administrativeArea,
        revegetationType,
        burnStatus,
        embung,
        revitalisasi,
        perencanaan,
        donor,
        currency,
        brgMandat,
        personal,
        inputrtt,
        revitalisasir3,
        inputdatartt,
        R1danR2,
        summaryR1danR2,
        R3,
        SummaryR3,
        summarysumurbor,
        sekatkanal,
        penimbunankanal,
        revegetasiiR2,
        revitalisasiiR3,
        summaryrevitalisasiiR3,
        Dashboard3,
        PetaDesa,
        Rencanakegiatan,
        MonitoringKegiatan,
        KelolaPeta,
        reporting,
        Dashboard2,
        PetaMonitoring,
        Dashboard4,
        PetaMonitoring2,
        Input,
        Reporting2,
        Provinsi,
        KabupatenKota,
        BatasProvinsi,
        BatasKabupaten,
        Jalan,
        Sungai,
        LahanGambut,
        KesatuanHidrologisGambut,
        FungsiEkosistemGambut,
        KanalLahanGambut,
        AreaKanal,
        PrioritasIndikatifRestorasiGambut,
        Konsesi,
        PolaRuangProvinsi,
        AreaTerbakar20152017,
        NamaKHG,
        MorarotiumKawasanHutanGambut,
        TutupanLahan,
        KawasanHutan,
        donordash,
    }
})

export default store;