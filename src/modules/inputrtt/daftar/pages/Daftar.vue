<template>
    <div id="container">
        <table border="1">
            <template v-for="row in storage.rows">
            
                <h1> Tabel Report Biaya </h1>
                    <table border  height="400px" width="50%">
                        <tr>
                            <th rowspan="2" bgcolor="#d6d8db" style="border-bottom:3px solid black;">NO</th>
                            <th rowspan="2" bgcolor="#d6d8db" style="border-bottom:3px solid black;">KABUPATEN</th>
                            <th rowspan="2" bgcolor="#d6d8db" style="border-bottom:3px solid black;">URPG</th>
                            <th colspan="3" bgcolor="#d6d8db">LOKASI & LUAS AREAL RESTORASI</th>
                            <th colspan="3" bgcolor="#d6d8db">      SUMUR BOR       </th>
                            <th colspan="2" bgcolor="#d6d8db">BIAYA</th>
                        </tr>
                        <tr>
                           <th rowspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">KECAMATAN</th>
                           <th rowspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">DESA</th>
                           <th rowspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">LUAS AREAL RESTORASI(Hektar) </th>
                           <th rowspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">INDIKATIF FUNGSI BUDIDAYA E.G(Unit)</th>
                           <th rowspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">INDIKATIF FUNGSI BUDIDAYA E.G (Unit)</th>
                           <th rowspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">TOTAL(Unit)</th>
                           <th rowspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">SATUAN(Rp)</th>
                           <th rowspan="1" bgcolor="#d6d8db" style="border-bottom:3px solid black;">TOTAL(Rp)</th>
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
                        </tr>   
                        <tr>
                        <td colspan="5">TOTAL   </td>
                        <td colspan="1">SUM</td>
                        <td colspan="1">SUM   </td>
                        <td colspan="1">SUM   </td>
                        <td colspan="1">SUM   </td>
                        <td colspan="1">SUM   </td>
                        <td colspan="1">SUM   </td>
                        </tr>
                    </table>
            </template>
        </table>
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
                
            }
        }
    }
}
</script>

// styling for a template
<style>
</style>