<template>
    <v-menu attach offset-y bottom left 
        :close-on-content-click="false">
        <v-btn slot="activator" icon>
            <v-icon color="white darken-3">list_alt</v-icon>
        </v-btn>

        <v-card :width="250">
            <v-list>                
                <v-list-group 
                    :prepend-icon="m.icon"
                    no-action
                    v-for="(m,i) in items" :key="i"
                    v-model="m_open[i]"
                >
                        <v-list-tile slot="activator">
                            <v-list-tile-content>
                                <v-list-tile-title>{{ m.title }}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile v-for="(mm,ii) in m.items" :key="ii">
                            <v-list-tile-content>
                                <v-list-tile-title>{{ mm.title }}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    
                </v-list-group>    
            </v-list>
        </v-card>
    </v-menu>    
</template>

<script>

export default {
    components : {
    },
    data(){
        return {
            m_open : [],
            items : [
                {
                    icon: 'today',
                    title: 'Tahun',
                    items : [
                        {
                            icon: 'today',
                            title: '2016',
                        },
                        {
                            icon: 'today',
                            title: '2017',
                        },
                        {
                            icon: 'today',
                            title: '2018',
                        },

                    ]        
                },
                {
                    icon: 'attach_money',
                    title: 'Anggaran',
                    items : [
                        {
                            icon: 'today',
                            title: 'Daerah',
                        },
                        {
                            icon: 'today',
                            title: 'Swasta',
                        },
                    ]        
                },
                {
                    icon: 'map',
                    title: 'Wilayah',
                    items : [
                        {
                            icon: 'today',
                            title: 'Jawa Timur',
                        },
                        {
                            icon: 'today',
                            title: 'DKI',
                        },
                    ]        
                },
                {
                    icon: 'gavel',
                    title: 'Jenis Kegiatan',
                    items : [
                        {
                            icon: 'today',
                            title: 'Konstruksi',
                        },
                        {
                            icon: 'today',
                            title: 'Zonasi',
                        },
                    ]        
                },                
            ]
        }
    }
}
</script>

<style>

</style>
