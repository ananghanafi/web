<template>
    <div id="container">
        <table border="1">
            <template v-for="row in storage.rows">
                <tr>
                    <td rowspan="2"><input type="checkbox"></td>
                    <td rowspan="2">{{row.sn}}</td>
                    <td>{{row.source}}</td>
                </tr>
                <tr>
                    <td>{{row.pair.source}}</td>
                </tr>
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
                    {sn: 222, source: 'EK', pair: {source: 'VLT', in: 200}}
                ]
            }
        }
    }
}
</script>

// styling for a template
<style>
</style>