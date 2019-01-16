<template>
    <v-toolbar-items>
        <MToolBarMenu title="Tahun" :lists="[{value:2015, caption:'2016'},{value:2017, caption:'2017'},{value:2018, caption:'2018'}]" />
        <MToolBarMenu title="Anggaran" :lists="[{value:1, caption:'Daerah'},{value:2, caption:'Swasta'}]" />
        <MToolBarMenu title="Wilayah" :lists="[{value:1, caption:'Jawa'},{value:2, caption:'Sumatera'}]" />
        <MToolBarMenu title="Jenis Kegiatab" :lists="[{value:1, caption:'Konstruksi'},{value:2, caption:'Lain-lain'}]" />
    </v-toolbar-items>         
</template>

<script>
import MToolBarMenu from '@/components/MToolBarMenu'
export default {
    components : {
        MToolBarMenu
    }

}
</script>

<style>

</style>
