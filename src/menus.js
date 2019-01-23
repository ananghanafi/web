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
        title: 'INPUT RTT',       
        items : [
        {
            icon: 'local_drink',
            title: 'Input Anggaran Kegiatan R1 R2',
            to: {name: 'inputrtt_daftar'}
        },
        {   icon: 'view_carousel',
            title: 'REVITALISASI R3',
            to: {name: 'revitalisasir3_daftar'}
        },
        {   icon: 'how_to_vote',
            title: 'INPUT DATA RTT',
            to: {name: 'inputdatartt_daftar'}
        },]
    },  
    {
        icon: 'gavel',
        title: 'REPORT RTT',
        items : [
            {
                icon: 'today',
                title: 'R1 & R2',
                to : {name : 'R1danR2_daftar'}                
            },
            {
                icon: 'today',
                title: 'Summary R1 & R2',
                to : {name : 'summaryR1danR2_daftar'}
            },
            {
                icon: 'today',
                title: 'R3',
                to : {name : 'R3_daftar'}
            },
            {
                icon: 'today',
                title: 'Summary R3',
                to : {name : 'SummaryR3_daftar'}
            }
        ]        
    },
    {
        icon: 'gavel',
        title: 'REPORT BIAYA RTT',
        items : [
            {
                icon: 'local_drink',
                title: 'Sumur Bor',
                to : {name : 'sumurbor_daftar'}                
            },
            {
                icon: 'local_drink',
                title: 'Summary Sumur Bor',
                to : {name : 'summarysumurbor_daftar'}
            },
            {
                icon: 'view_carousel',
                title: 'Sekat Kanal',
                to : {name : 'sekatkanal_daftar'}
            },
            {
                icon: 'how_to_vote',
                title: 'Penimbunan Kanal',
                to : {name : 'penimbunankanal_daftar'}
            },
            {
                icon: 'today',
                title: 'Revegetasi R2',
                to : {name : 'revegetasiiR2_daftar'}
            },
            {
                icon: 'today',
                title: 'Revitalisasi R3',
                to : {name : 'revitalisasiiR3_daftar'}
            },
            {
                icon: 'today',
                title: 'Summary Revitalisasi R3',
                to : {name : 'summaryrevitalisasiiR3_daftar'}
            }
        ]        
    },
    {
        icon : 'today',
        title : 'KELOLA PETA',
        subheader : 1,
    },
    {
        icon: 'map',
        title: 'WIL ADMINISTRATIF',
        items : [
            {
                // icon: 'local_drink',
                title: 'Provinsi',
                to : {name : 'Provinsi_daftar'}
            },
            {
                // icon: 'view_carousel',
                title: 'Kab/Kota',
                to : {name : 'KabupatenKota_daftar'}
            },
            {
                // icon: 'view_day',
                title: 'Batas Provinsi',
                to : {name : 'BatasProvinsi_daftar'}
            },
            {
                // icon: 'how_to_vote',
                title: 'Batas Kabupaten',
                to : {name : 'BatasKabupaten_daftar'}
            },
            {
                // icon: 'how_to_vote',
                title: 'Jalan',
                to : {name : 'Jalan_daftar'}
            },
            {
                // icon: 'how_to_vote',
                title: 'Sungai',
                to : {name : 'Sungai_daftar'}
            }
        ]        
    },
    {
        icon: 'map',
        title: 'TEMATIK',
        items : [
            {
                // icon: 'local_drink',
                title: 'Lahan Gambut',
                to : {name : 'LahanGambut_daftar'}
            },
            {
                // icon: 'view_carousel',
                title: 'Kesatuan Hidrologis Gambut',
                to : {name : 'KesatuanHidrologisGambut_daftar'}
            },
            {
                // icon: 'view_day',
                title: 'Fungsi Ekosistem Gambut',
                to : {name : 'FungsiEkosistemGambut_daftar'}
            },
            {
                // icon: 'how_to_vote',
                title: 'Kanal Lahan Gambut',
                to : {name : 'KanalLahanGambut_daftar'}
            },
            {
                // icon: 'how_to_vote',
                title: 'Area Kanal',
                to : {name : 'AreaKanal_daftar'}
            },
            {
                // icon: 'how_to_vote',
                title: 'Prioritas Indikatif Restorasi Gambut',
                to : {name : 'PrioritasIndikatifRestorasiGambut_daftar'}
            },
            {
                // icon: 'how_to_vote',
                title: 'Konsesi',
                to : {name : 'Konsesi_daftar'}
            },
            {
                // icon: 'how_to_vote',
                title: 'Pola Ruang Provinsi',
                to : {name : 'PolaRuangProvinsi_daftar'}
            },
            {
                // icon: 'how_to_vote',
                title: 'Area Terbakar 2015-2017',
                to : {name : 'AreaTerbakar20152017_daftar'}
            },
            {
                // icon: 'how_to_vote',
                title: 'Nama KHG',
                to : {name : 'NamaKHG_daftar'}
            },
            {
                // icon: 'how_to_vote',
                title: 'Moratorium Kawasan Hutan & Gambut',
                to : {name : 'MorarotiumKawasanHutanGambut_daftar'}
            },
            {
                // icon: 'how_to_vote',
                title: 'Tutupan Lahan',
                to : {name : 'TutupanLahan_daftar'}
            },
            {
                // icon: 'how_to_vote',
                title: 'Kawasan Hutan',
                to : {name : 'KawasanHutan_daftar'}
            }
        ]        
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
        to : {name : 'Dashboard2_daftar'}   
    }, 
    {
        icon: 'map',
        title: 'PETA MONITORING',   
        to : {name : 'PetaMonitoring_daftar'} 
    }, 
    {
        icon: 'gavel',
        title: 'INPUT REWETTING',
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
                title: 'Ruas Kanal',
                to : {name : 'embung_implementasi'}
            }

        ]        
    },             
    {
        icon: 'today',
        title: 'REVEGETASI',
        items : [
            {
                icon: 'local_drink',
                title: 'Sukses Alami',
                to : {name : 'bor_implementasi'}                
            },
            {
                icon: 'view_carousel',
                title: 'Pengkayaan Tanaman',
                to : {name : 'skanal_implementasi'}
            },
            {
                icon: 'how_to_vote',
                title: 'Penanaman Pola Maksimal',
                to : {name : 'pkanal_implementasi'}
            }
        ]     
    },
    {
        icon: 'today',
        title: 'REVITALISASI',
        items : [
            {
                icon: 'local_drink',
                title: 'Desa Peduli Gambut',
                to : {name : 'bor_implementasi'}                
            },
            {
                icon: 'view_carousel',
                title: 'Kapasitas Kelembagaan',
                to : {name : 'skanal_implementasi'}
            },
            {
                icon: 'how_to_vote',
                title: 'Alt Kapasitas & Mata Pencaharian',
                to : {name : 'pkanal_implementasi'}
            }
        ] 
    },
    {
        icon : 'today',
        title : 'REPORTING',
        to : {name : 'skanal_implementasi'}
    },

    // {
    //     icon : 'today',
    //     title : 'DONOR',
    //     subheader : 1,
    // },
    // {
    //     icon: 'today',
    //     title: 'AKTIVITAS',
    //     to : {name : 'donor_rencana'} 

    // },
    // {
    //     icon : 'today',
    //     title : 'KELOLA PETA',
    //     subheader : 1,
    // },
    // {
    //     icon: 'map',
    //     title: 'Peta Dasar',
    //     items : [
    //         {
    //             icon: 'local_drink',
    //             title: 'Peta Wilayah Administasi',
    //         },
    //         {
    //             icon: 'view_carousel',
    //             title: 'Peta KHG',
    //         },
    //         {
    //             icon: 'view_day',
    //             title: 'Peta Lahan Gambut',
    //         },
    //         {
    //             icon: 'how_to_vote',
    //             title: 'Peta Desa Peduli Gambut',
    //         },
    //         {
    //             icon: 'how_to_vote',
    //             title: 'Peta Fungsi Ekosistem Gambut'
    //         }

    //     ]        
    // },
    // {
    //     icon: 'map',
    //     title: 'Peta Prioritas Restorasi',
    //     items : [
    //         {
    //             icon: 'local_drink',
    //             title: 'Peta Prioritas Pasca Kebakaran 2015-2016',
    //         },
    //         {
    //             icon: 'view_carousel',
    //             title: 'Peta Prioritas Lindung Gambut Berkanal',
    //         },
    //         {
    //             icon: 'view_day',
    //             title: 'Peta Prioritas Gambut Tak Berkanal',
    //         },
    //         {
    //             icon: 'how_to_vote',
    //             title: 'Peta Prioritas Gambut Budidaya',
    //         }
    //     ]        
    // },
    // {
    //     icon: 'map',
    //     title: 'Peta Tata Guna Lahan',
    //     items : [
    //         {
    //             icon: 'local_drink',
    //             title: 'Peta Perkebunan Sawit',
    //         },
    //         {
    //             icon: 'view_carousel',
    //             title: 'Peta Hak Penguasaan Hutan',
    //         },
    //         {
    //             icon: 'view_day',
    //             title: 'Peta Hutan Tanaman Industri',
    //         },
    //         {
    //             icon: 'how_to_vote',
    //             title: 'Peta Moratorium Kawasan Hutan dan Gambut',
    //         },
    //         {
    //             icon: 'how_to_vote',
    //             title: 'Peta Tutupan Lahan',
    //         },
    //         {
    //             icon: 'how_to_vote',
    //             title: 'Peta Kawasan Hutan',
    //         }
    //     ]        
    // },
    // {
    //     icon : 'today',
    //     title : 'KELOLA DATA MASTER',
    //     subheader : 1,
    // },
    // {
    //     icon: 'today',
    //     title: 'Wilayah Administratif'

    // },
    {
        icon : 'today',
        title : 'DESA PEDULI GAMBUT',
        subheader : 1,
    },  
    {
        icon: 'dashboard',
        title: 'DASHBOARD', 
        to : {name : 'Dashboard3_daftar'}  
    }, 
    {
        icon: 'map',
        title: 'PETA DESA',  
        to : {name : 'PetaDesa_daftar'}     
    }, 
    {
        icon: 'today',
        title: 'RENCANA KEGIATAN',    
        to : {name : 'Rencanakegiatan_daftar'}   
    }, 
    {
        icon: 'today',
        title: 'MONITORING KEGIATAN',  
        to : {name : 'MonitoringKegiatan_daftar'}     
    }, 
    {
        icon: 'today',
        title: 'KELOLA PETA DPG', 
        to : {name : 'KelolaPeta_daftar'}      
    }, 
    {
        icon: 'today',
        title: 'REPORTING',    
        to : {name : 'reporting_daftar'}   
    }, 
    {
        icon : 'today',
        title : 'MONITORING DONOR',
        subheader : 1,
    },  
    {
        icon: 'dashboard',
        title: 'DASHBOARD',   
        to : {name : 'donordash'} 
    }, 
    {
        icon: 'map',
        title: 'PETA MONITORING',
        to : {name : 'PetaMonitoring2_daftar'}        
    }, 
    {
        icon: 'today',
        title: 'INPUT',   
        items: [
            {
                // icon: 'local_drink',
                title: 'Form Input',
                to : {name : 'forminput_daftar'}
            },
            {
                // icon: 'local_drink',
                title: 'Form Edit View Table',
                to : {name : 'formeditviewtable_daftar'}
            }
        ]
    },
    {
        icon: 'today',
        title: 'REPORTING',  
        items: [
                {
                title: 'List  Partners in 7 Priority Provinces',
                to : {name : 'listpartner_daftar'}
                },
                {
                title: 'ACTIVITY DEVELOPMENT PARTNERS VS BRG"S POLICY & STRATEGI',
                to : {name : 'activitydevelopment_daftar'}
                }
        ]
        
    },
    {
        icon : 'today',
        title : 'KELOLA ORGANISASI',
        subheader : 1,
    },
    {
        icon: 'people',
        title: 'PERSONAL', 
        to : {name : 'personal_daftar'}      
    }, 
    // {
    //     icon: 'how_to_reg',
    //     title: 'ORGANISASI',
    //     to : {name : 'personal_daftar'}    
    // }, 

]

export default menus