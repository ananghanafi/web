<template>
<div>
<div class="pb-3">
    <v-container grid-list-xs fill-height>
        <v-layout>
            <v-flex xs12>
                <v-card class="pb-3">
                    <v-card-title class="elevation-1 font-weight-bold">
                         SUMMARY RTT - R1 dan R2 berbasis KHG
                    </v-card-title>
                        <v-card-text class="py-0">
                            <v-container grid-list-md class="pa-0">
                                
                                
                            <button v-print="'#myTable'" @click="print">Print this component</button>
                            </v-container>
                            
                        </v-card-text>
                            
                    <template>
  <v-data-table
    :headers="headers"
    :items="sekatkanal"
    :pagination.sync="pagination"
    item-key="name"
    class="elevation-1"
    id="myTable"
  >
            <template slot="headers" slot-scope="props">
                    <tr>
                      <th
                        v-for="header in props.headers"
                        :key="header.text"
                        :rowspan="header.rowspan"
                        :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                        @click="changeSort(header.value)"
                      >
                        <v-icon small>arrow_upward</v-icon>
                        {{ header.text }}
                      </th>

                      <th
                        v-for="header in headers3"
                        :key="header.text"
                        :colspan="header.colspan"
                        :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                        @click="changeSort(header.value)"
                      >
                        <v-icon small>arrow_upward</v-icon>
                        {{ header.text }}
                      </th>
                    

                    <th
                        v-for="header in headers4"
                        :key="header.text"
                        :colspan="header.colspan"
                        :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                        @click="changeSort(header.value)"
                      >
                        <v-icon small>arrow_upward</v-icon>
                        {{ header.text }}
                      </th>

                    <th
                        v-for="header in headers5"
                        :key="header.text"
                        :colspan="header.colspan"
                        :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                        @click="changeSort(header.value)"
                      >
                        <v-icon small>arrow_upward</v-icon>
                        {{ header.text }}
                      </th>
                    

                    <th
                        v-for="header in headers6"
                        :key="header.text"
                        :colspan="header.colspan"
                        :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                        @click="changeSort(header.value)"
                      >
                        <v-icon small>arrow_upward</v-icon>
                        {{ header.text }}
                      </th>
                   

                    <th
                        v-for="header in headers7"
                        :key="header.text"
                        :colspan="header.colspan"
                        :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                        @click="changeSort(header.value)"
                      >
                        <v-icon small>arrow_upward</v-icon>
                        {{ header.text }}
                      </th>
                    <th
                        v-for="header in headers8"
                        :key="header.text"
                        :colspan="header.colspan"
                        :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                        @click="changeSort(header.value)"
                      >
                        <v-icon small>arrow_upward</v-icon>
                        {{ header.text }}
                      </th>
                      <th
                        v-for="header in headers9"
                        :key="header.text"
                        :colspan="header.colspan"
                        :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                        @click="changeSort(header.value)"
                      >
                        <v-icon small>arrow_upward</v-icon>
                        {{ header.text }}
                      </th>
                    </tr>
                    </tr>


                    <tr>      
                        <th
                        v-for="header in headers10"
                        :key="header.text"
                        :rowspan="header.rowspan"
                        :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                        @click="changeSort(header.value)"
                      >
                        <v-icon small>arrow_upward</v-icon>
                        {{ header.text }}
                      </th>
                      <th
                        v-for="header in headers11"
                        :key="header.text"
                        :rowspan="header.rowspan"
                        :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                        @click="changeSort(header.value)"
                      >
                        <v-icon small>arrow_upward</v-icon>
                        {{ header.text }}
                      </th>
                      <th
                        v-for="header in headers12"
                        :key="header.text"
                        :rowspan="header.rowspan"
                        :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                        @click="changeSort(header.value)"
                      >
                        <v-icon small>arrow_upward</v-icon>
                        {{ header.text }}
                      </th>
                      <th
                        v-for="header in headers13"
                        :key="header.text"
                        :rowspan="header.rowspan"
                        :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                        @click="changeSort(header.value)"
                      >
                        <v-icon small>arrow_upward</v-icon>
                        {{ header.text }}
                      </th>
                      <th
                        v-for="header in headers14"
                        :key="header.text"
                        :rowspan="header.rowspan"
                        :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                        @click="changeSort(header.value)"
                      >
                        <v-icon small>arrow_upward</v-icon>
                        {{ header.text }}
                      </th>
                      <th
                        v-for="header in headers15"
                        :key="header.text"
                        :rowspan="header.rowspan"
                        :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                        @click="changeSort(header.value)"
                      >
                        <v-icon small>arrow_upward</v-icon>
                        {{ header.text }}
                      </th>
                      <th
                        v-for="header in headers16"
                        :key="header.text"
                        :rowspan="header.rowspan"
                        :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                        @click="changeSort(header.value)"
                      >
                        <v-icon small>arrow_upward</v-icon>
                        {{ header.text }}
                      </th>
                      <th
                        v-for="header in headers17"
                        :key="header.text"
                        :rowspan="header.rowspan"
                        :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                        @click="changeSort(header.value)"
                      >
                        <v-icon small>arrow_upward</v-icon>
                        {{ header.text }}
                      </th>
                      <th
                        v-for="header in headers18"
                        :key="header.text"
                        :rowspan="header.rowspan"
                        :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                        @click="changeSort(header.value)"
                      >
                        <v-icon small>arrow_upward</v-icon>
                        {{ header.text }}
                      </th>
                      <th
                        v-for="header in headers19"
                        :key="header.text"
                        :rowspan="header.rowspan"
                        :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                        @click="changeSort(header.value)"
                      >
                        <v-icon small>arrow_upward</v-icon>
                        {{ header.text }}
                      </th>
                      <th
                        v-for="header in headers20"
                        :key="header.text"
                        :rowspan="header.rowspan"
                        :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                        @click="changeSort(header.value)"
                      >
                        <v-icon small>arrow_upward</v-icon>
                        {{ header.text }}
                      </th>
                      <th
                        v-for="header in headers21"
                        :key="header.text"
                        :rowspan="header.rowspan"
                        :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                        @click="changeSort(header.value)"
                      >
                        <v-icon small>arrow_upward</v-icon>
                        {{ header.text }}
                      </th>
                      <th
                        v-for="header in headers22"
                        :key="header.text"
                        :rowspan="header.rowspan"
                        :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                        @click="changeSort(header.value)"
                      >
                        <v-icon small>arrow_upward</v-icon>
                        {{ header.text }}
                      </th>
                      <th
                        v-for="header in headers23"
                        :key="header.text"
                        :rowspan="header.rowspan"
                        :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                        @click="changeSort(header.value)"
                      >
                        <v-icon small>arrow_upward</v-icon>
                        {{ header.text }}
                      </th>
                    </tr>
                  </template>
                <template slot="items" slot-scope="props">
    
                <tr>
              <td>{{ props.item.No }}</td>
              <td class="text-xs-right">{{ props.item.institusiriau }}</td>
              <td class="text-xs-right">{{ props.item.amountriau }}</td>
              <td class="text-xs-right">{{ props.item.institusijambi }}</td>
              <td class="text-xs-right">{{ props.item.amountjambi }}</td>
              <td class="text-xs-right">{{ props.item.institusisouthsumatra}}</td>
              <td class="text-xs-right">{{ props.item.amountsouthsumatra}}</td>
              <td class="text-xs-right">{{ props.item.institusiwestkalimantan }}</td>
              <td class="text-xs-right">{{ props.item.amountwestkalimantan }}</td>
              <td class="text-xs-right">{{ props.item.institusicentralkalimantan }}</td>
              <td class="text-xs-right">{{ props.item.amountcentralkalimantan }}</td>
              <td class="text-xs-right">{{ props.item.institusisouthkalimantan}}</td>
              <td class="text-xs-right">{{ props.item.amountsouthkalimantan}}</td>
              <td class="text-xs-right">{{ props.item.institusipapua}}</td>
              <td class="text-xs-right">{{ props.item.amountpapua}}</td>
                </tr>
    
            </template>
        </v-data-table>
</template>
                </v-card>
                                
            </v-flex>

        </v-layout>
       
    </v-container>
</div>

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
                
            },
          
          headers: [
          {
            text: 'No',
            align: 'left',
            sortable: 'false',
            value: 'name',
            rowspan: '2',
          },
       
         
        ],
        
        headers3: [
        {
            text: 'Riau',
            align: 'left',
            sortable: 'false',
            value: 'name',
            colspan: '2',
            }
        ],
        headers4: [
        {
            text: 'Jambi',
            align: 'left',
            sortable: 'false',
            value: 'name',
            colspan: '2',
            }
        ],
        headers5: [
        {
            text: 'South Sumatra',
            align: 'left',
            sortable: 'false',
            value: 'name',
            colspan: '2',
            }
        ],
        headers6: [
        {
            text: 'West Kalimantan',
            align: 'left',
            sortable: 'false',
            value: 'name',
            colspan: '2',
            }
        ],
        headers7: [
        {
            text: 'Central Kalimantan',
            align: 'left',
            sortable: 'false',
            value: 'name',
            colspan: '2',
            }
        ],
        headers8: [
        {
            text: 'South Kalimantan',
            align: 'left',
            sortable: 'false',
            value: 'name',
            colspan: '2',
            }
        ],
        headers9: [
        {
            text: 'Papua',
            align: 'left',
            sortable: 'false',
            value: 'name',
            colspan: '2',
            }
        ],
        headers10: [
        {
            text: 'Institution',
            align: 'left',
            sortable: 'false',
            value: 'institusiriau',
            rowspan: '1',
            }
        ],
        headers11: [
        {
            text: 'Amount (USD)',
            align: 'left',
            sortable: 'false',
            value: 'amountriau',
            rowspan: '1',
            }
        ],
        headers12: [
        {
            text: 'Institution',
            align: 'left',
            sortable: 'false',
            value: 'institusijambi',
            rowspan: '1',
            }
        ],
        headers13: [
        {
            text: 'Amount (USD)',
            align: 'left',
            sortable: 'false',
            value: 'amountjambi',
            rowspan: '1',
            }
        ],
        headers14: [
        {
            text: 'Institution',
            align: 'left',
            sortable: 'false',
            value: 'institusisouthsumatra',
            rowspan: '1',
            }
        ],
        headers15: [
        {
            text: 'Amount (USD)',
            align: 'left',
            sortable: 'false',
            value: 'amountsouthsumatra',
            rowspan: '1',
            }
        ],
        headers16: [
        {
            text: 'Institution',
            align: 'left',
            sortable: 'false',
            value: 'institusiwestsumatra',
            rowspan: '1',
            }
        ],
        headers17: [
        {
            text: 'Amount (USD)',
            align: 'left',
            sortable: 'false',
            value: 'amountwestsumatra',
            rowspan: '1',
            }
        ],
        headers18: [
        {
            text: 'Institution',
            align: 'left',
            sortable: 'false',
            value: 'institusicentralkalimantan',
            rowspan: '1',
            }
        ],
        headers19: [
        {
            text: 'Amount (USD)',
            align: 'left',
            sortable: 'false',
            value: 'amountcentralkalimantan',
            rowspan: '1',
            }
        ],
        headers20: [
        {
            text: 'Institution',
            align: 'left',
            sortable: 'false',
            value: 'institusisouthkalimantan',
            rowspan: '1',
            }
        ],
        headers21: [
        {
            text: 'Amount (USD)',
            align: 'left',
            sortable: 'false',
            value: 'amountsouthkalimantan',
            rowspan: '1',
            }
        ],
        headers22: [
        {
            text: 'Institution',
            align: 'left',
            sortable: 'false',
            value: 'institusipapua',
            rowspan: '1',
            }
        ],
        headers23: [
        {
            text: 'Amount (USD)',
            align: 'left',
            sortable: 'false',
            value: 'amountpapua',
            rowspan: '1',
            }
        ],
        
        sekatkanal:[
        {
          value: false,
          No: '1',
          institusiriau: 'ASEAN',
          amountriau: '',
          institusijambi: 'BELANTARA FOUNDATION',
          amountjambi: '',
          institusisouthsumatra: 'CLUA',
          amountsouthsumatra: '',
          institusiwestkalimantan: 'ASEAN',
          amountwestkalimantan: '',
          institusicentralkalimantan: 'CLUA',
          amountcentralkalimantan: '',
          institusisouthkalimantan: 'GGGI',
          amountsouthkalimantan: '',
          institusipapua: 'CLUA',
          amountpapua: '',
        },{
          value: false,
          No: '2',
          institusiriau: 'CLUA',
          amountriau: '',
          institusijambi: 'CLUA',
          amountjambi: '',
          institusisouthsumatra: 'ASUTRALIA EMBASSY',
          amountsouthsumatra: '',
          institusiwestkalimantan: 'CLUA',
          amountwestkalimantan: '',
          institusicentralkalimantan: 'AUSTRALIA EMBASSY',
          amountcentralkalimantan: '',
          institusisouthkalimantan: 'JICA',
          amountsouthkalimantan: '',
          institusipapua: 'NETHERLAND EMBASSY',
          amountpapua: '',
        },{
          value: false,
          No: '3',
          institusiriau: 'NETHERLANDS EMBASSY',
          amountriau: '',
          institusijambi: 'JARINGAN MASY GAMBUT JAMBI',
          amountjambi: '',
          institusisouthsumatra: 'GIZ',
          amountsouthsumatra: '',
          institusiwestkalimantan: 'GIZ',
          amountwestkalimantan: '',
          institusicentralkalimantan: 'NETHERLAND EMBASSY',
          amountcentralkalimantan: '',
          institusisouthkalimantan: 'NORWAY EMBASSY',
          amountsouthkalimantan: '',
          institusipapua: 'NORWAY EMBASSY',
          amountpapua: '',
        },{
          value: false,
          No: '4',
          institusiriau: 'ASEAN',
          amountriau: '',
          institusijambi: 'BELANTARA FOUNDATION',
          amountjambi: '',
          institusisouthsumatra: 'CLUA',
          amountsouthsumatra: '',
          institusiwestkalimantan: 'ASEAN',
          amountwestkalimantan: '',
          institusicentralkalimantan: 'CLUA',
          amountcentralkalimantan: '',
          institusisouthkalimantan: 'GGGI',
          amountsouthkalimantan: '',
          institusipapua: 'CLUA',
          amountpapua: '',
        },{
          value: false,
          No: '5',
          institusiriau: 'JICA',
          amountriau: '',
          institusijambi: 'KEHIJAU BERBAK',
          amountjambi: '',
          institusisouthsumatra: 'NORWEGIAN EMBASSY',
          amountsouthsumatra: '',
          institusiwestkalimantan: 'MCA-INDONESIA',
          amountwestkalimantan: '',
          institusicentralkalimantan: 'JICA',
          amountcentralkalimantan: '',
          institusisouthkalimantan: '',
          amountsouthkalimantan: '',
          institusipapua: '',
          amountpapua: '',
        },{
          value: false,
          No: '6',
          institusiriau: 'MCA-INDONESIA',
          amountriau: '',
          institusijambi: 'MCA-INDONESIA',
          amountjambi: '',
          institusisouthsumatra: 'TFA-IBCSD',
          amountsouthsumatra: '',
          institusiwestkalimantan: 'NORWEGIAN EMBASSY',
          amountwestkalimantan: '',
          institusicentralkalimantan: 'NORWEGIAN EMBASSY',
          amountcentralkalimantan: '',
          institusisouthkalimantan: '',
          amountsouthkalimantan: '',
          institusipapua: '',
          amountpapua: '',
        },{
          value: false,
          No: '7',
          institusiriau: 'NORWEGIAN EMBASSY',
          amountriau: '',
          institusijambi: 'MITRA AKSI',
          amountjambi: '',
          institusisouthsumatra: 'UKCCU',
          amountsouthsumatra: '',
          institusiwestkalimantan: 'TFA-IBCSD',
          amountwestkalimantan: '',
          institusicentralkalimantan: 'TFA-IBCSD',
          amountcentralkalimantan: '',
          institusisouthkalimantan: '',
          amountsouthkalimantan: '',
          institusipapua: '',
          amountpapua: '',
        },{
          value: false,
          No: '8',
          institusiriau: 'TFA-IBCSD',
          amountriau: '',
          institusijambi: 'PERKUMPULAN GITA BUANA',
          amountjambi: '',
          institusisouthsumatra: '',
          amountsouthsumatra: '',
          institusiwestkalimantan: 'UKCCU',
          amountwestkalimantan: '',
          institusicentralkalimantan: 'UKCCU',
          amountcentralkalimantan: '',
          institusisouthkalimantan: '',
          amountsouthkalimantan: '',
          institusipapua: '',
          amountpapua: '',
        },{
          value: false,
          No: '9',
          institusiriau: 'UKCCU',
          amountriau: '',
          institusijambi: 'NORWEGIAN EMBASSY',
          amountjambi: '',
          institusisouthsumatra: '',
          amountsouthsumatra: '',
          institusiwestkalimantan: '',
          amountwestkalimantan: '',
          institusicentralkalimantan: 'USAID',
          amountcentralkalimantan: '',
          institusisouthkalimantan: '',
          amountsouthkalimantan: '',
          institusipapua: '',
          amountpapua: '',
        },{
          value: false,
          No: '10',
          institusiriau: '',
          amountriau: '',
          institusijambi: 'TFA-IBCSD',
          amountjambi: '',
          institusisouthsumatra: '',
          amountsouthsumatra: '',
          institusiwestkalimantan: '',
          amountwestkalimantan: '',
          institusicentralkalimantan: 'WWF',
          amountcentralkalimantan: '',
          institusisouthkalimantan: '',
          amountsouthkalimantan: '',
          institusipapua: '',
          amountpapua: '',
        },{
          value: false,
          No: '11',
          institusiriau: '',
          amountriau: '',
          institusijambi: 'UKCCU',
          amountjambi: '',
          institusisouthsumatra: '',
          amountsouthsumatra: '',
          institusiwestkalimantan: '',
          amountwestkalimantan: '',
          institusicentralkalimantan: '',
          amountcentralkalimantan: '',
          institusisouthkalimantan: '',
          amountsouthkalimantan: '',
          institusipapua: '',
          amountpapua: '',
        },{
          value: false,
          No: '12',
          institusiriau: '',
          amountriau: '',
          institusijambi: 'WWF',
          amountjambi: '',
          institusisouthsumatra: '',
          amountsouthsumatra: '',
          institusiwestkalimantan: '',
          amountwestkalimantan: '',
          institusicentralkalimantan: '',
          amountcentralkalimantan: '',
          institusisouthkalimantan: '',
          amountsouthkalimantan: '',
          institusipapua: '',
          amountpapua: '',
        },
        
        
        ],          
        
      }
        
    },
    methods: {
    
    print () {
    window.print();
      this.d.print( this.$el, this.cssText)
    }
    
  }
}

</script>

// styling for a template
<style>
</style>