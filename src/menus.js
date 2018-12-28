// import home from './modules/home/menus'
// import bor from './modules/bor/menus'
// import skanal from './modules/sekat_kanal/menus'
// import rkanal from './modules/ruas_kanal/menus'
// import pkanal from './modules/penimbunan_kanal/menus'
// const menus = [
//     home,
//     bor,
//     skanal,
//     rkanal,
//     pkanal,
// ]

const menus = [
    {
        icon : 'today',
        title : 'PERENCANAAN',
        subheader : 1,
    },
    {
        icon: 'dashboard',
        title: 'DASHBOARD',   
        to : {name:'perencanaan'}    
    }, 
    {
        icon: 'map',
        title: 'PETA RTT',       
        to : {name : 'rtt'}
    }, 
    {
        icon: 'gavel',
        title: 'REWETTING',
        items : [
            {
                icon: 'local_drink',
                title: 'Sumur Bor',
                to : {name : 'bor_rencana'}                
            },
            {
                icon: 'view_carousel',
                title: 'Sekat Kanal',
                to : {name : 'skanal_rencana'}
            },
            {
                icon: 'how_to_vote',
                title: 'Penimbunan Kanal',
                to : {name : 'pkanal_rencana'}
            },
            {
                icon: 'view_day',
                title: 'Embung',
                to : {name : 'embung_rencana'}
            }
        ]        
    },
    {
        icon: 'today',
        title: 'REVEGETASI',
        to : {name : 'revegetasi_rencana'}
    },
    {
        icon: 'today',
        title: 'REVITALISASI',
        to : {name: 'revitalisasi_rencana'}

    },
    {
        icon : 'today',
        title : 'PELAKSANAAN',
        subheader : 1,
    },  
    {
        icon: 'dashboard',
        title: 'DASHBOARD',   
    }, 
    {
        icon: 'map',
        title: 'PETA MONITORING',       
    }, 
    {
        icon: 'gavel',
        title: 'REWETTING',
        items : [
            {
                icon: 'local_drink',
                title: 'Sumur Bor',
                to : {name : 'bor_implementasi'}                
            },
            {
                icon: 'view_carousel',
                title: 'Sekat Kanal',
                to : {name : 'skanal_implementasi'}
            },
            {
                icon: 'how_to_vote',
                title: 'Penimbunan Kanal',
                to : {name : 'pkanal_implementasi'}
            },
            {
                icon: 'view_day',
                title: 'Embung',
                to : {name : 'embung_implementasi'}
            }

        ]        
    },             
    {
        icon: 'today',
        title: 'REVEGETASI',
        to : {name : 'revegetasi_implementasi'}

    },
    {
        icon: 'today',
        title: 'REVITALISASI',
        to : {name : 'revitalisasi_implementasi'} 

    },
    {
        icon : 'today',
        title : 'DONOR',
        subheader : 1,
    },
    {
        icon: 'today',
        title: 'AKTIVITAS',
        to : {name : 'donor_rencana'} 

    },
    {
        icon : 'today',
        title : 'KELOLA PETA',
        subheader : 1,
    },
    {
        icon: 'map',
        title: 'Peta Dasar',
        items : [
            {
                icon: 'local_drink',
                title: 'Peta Wilayah Administasi',
            },
            {
                icon: 'view_carousel',
                title: 'Peta KHG',
            },
            {
                icon: 'view_day',
                title: 'Peta Lahan Gambut',
            },
            {
                icon: 'how_to_vote',
                title: 'Peta Desa Peduli Gambut',
            },
            {
                icon: 'how_to_vote',
                title: 'Peta Fungsi Ekosistem Gambut'
            }

        ]        
    },
    {
        icon: 'map',
        title: 'Peta Prioritas Restorasi',
        items : [
            {
                icon: 'local_drink',
                title: 'Peta Prioritas Pasca Kebakaran 2015-2016',
            },
            {
                icon: 'view_carousel',
                title: 'Peta Prioritas Lindung Gambut Berkanal',
            },
            {
                icon: 'view_day',
                title: 'Peta Prioritas Gambut Tak Berkanal',
            },
            {
                icon: 'how_to_vote',
                title: 'Peta Prioritas Gambut Budidaya',
            }
        ]        
    },
    {
        icon: 'map',
        title: 'Peta Tata Guna Lahan',
        items : [
            {
                icon: 'local_drink',
                title: 'Peta Perkebunan Sawit',
            },
            {
                icon: 'view_carousel',
                title: 'Peta Hak Penguasaan Hutan',
            },
            {
                icon: 'view_day',
                title: 'Peta Hutan Tanaman Industri',
            },
            {
                icon: 'how_to_vote',
                title: 'Peta Moratorium Kawasan Hutan dan Gambut',
            },
            {
                icon: 'how_to_vote',
                title: 'Peta Tutupan Lahan',
            },
            {
                icon: 'how_to_vote',
                title: 'Peta Kawasan Hutan',
            }
        ]        
    },
    {
        icon : 'today',
        title : 'KELOLA DATA MASTER',
        subheader : 1,
    },
    {
        icon: 'today',
        title: 'Wilayah Administratif'

    },
    {
        icon : 'today',
        title : 'KELOLA ORGANISASI',
        subheader : 1,
    },
    {
        icon: 'people',
        title: 'Personal', 
        to : {name : 'donor_implementasi'}       
    }, 
    {
        icon: 'how_to_reg',
        title: 'Organisasi',
    }, 

]

export default menus