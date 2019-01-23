const menus = {
    icon: 'business',
    title: 'Sekat Kanal',
    items: [
        {
            icon: 'today',
            title: 'Perencanaan',            
            // items: [
            //     {
            //         icon: 'group',
            //         title: 'Tim Pembuat Sumur Bor',
            //         to: { name: 'bor_tim' }
            //     },
            //     {
            //         icon: 'gavel',
            //         title: 'Pembagian Peralatan SBO',
            //         to: { name: 'bor_peralatan' }
            //     },
            //     {
            //         icon: 'my_location',
            //         title: 'Rencana Lokasi SBO',
            //         to: { name: 'bor_lokasi' }
            //     }
            // ],
        }, {
            icon: 'chart',
            title: 'Laporan',
            to: { name: 'skanal_laporan' }
        }
    ]
}

export default menus;