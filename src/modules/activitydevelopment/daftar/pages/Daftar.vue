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
                        :rowspan="header.rowspan"
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
                        :rowspan="header.rowspan"
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
                        v-for="header in headers6"
                        :key="header.text"
                        :rowspan="header.rowspan"
                        :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                        @click="changeSort(header.value)"
                      >
                        <v-icon small>arrow_upward</v-icon>
                        {{ header.text }}
                      </th>   
                      <th
                        v-for="header in headers7"
                        :key="header.text"
                        :rowspan="header.rowspan"
                        :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                        @click="changeSort(header.value)"
                      >
                        <v-icon small>arrow_upward</v-icon>
                        {{ header.text }}
                      </th>
                      <th
                        v-for="header in headers8"
                        :key="header.text"
                        :rowspan="header.rowspan"
                        :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                        @click="changeSort(header.value)"
                      >
                        <v-icon small>arrow_upward</v-icon>
                        {{ header.text }}
                      </th>
                      <th
                        v-for="header in headers9"
                        :key="header.text"
                        :rowspan="header.rowspan"
                        :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                        @click="changeSort(header.value)"
                      >
                        <v-icon small>arrow_upward</v-icon>
                        {{ header.text }}
                      </th>

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
                      
                    </tr>
                  </template>
                <template slot="items" slot-scope="props">
    
                <tr>
              <td>{{ props.item.No }}</td>
              <td class="text-xs-right">{{ props.item.partner }}</td>
              
              <td class="text-xs-right">{{ props.item.no1 }}</td>
              <td class="text-xs-right">{{ props.item.no2 }}</td>
              <td class="text-xs-right">{{ props.item.no3}}</td>
              <td class="text-xs-right">{{ props.item.no4}}</td>
              <td class="text-xs-right">{{ props.item.no5 }}</td>
              <td class="text-xs-right">{{ props.item.no6 }}</td>
              <td class="text-xs-right">{{ props.item.no7 }}</td>
              <td class="text-xs-right">{{ props.item.no8 }}</td>
              <td class="text-xs-right">{{ props.item.no9}}</td>
              <td class="text-xs-right">{{ props.item.total}}</td>
              
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
            value: 'No',
            rowspan: '2',
          },
       
         
        ],
        
        headers3: [
        {
            text: 'Development Partners',
            align: 'left',
            sortable: 'false',
            value: 'partner',
            rowspan: '2',
            }
        ],
        headers4: [
        {
            text: 'BRG’s Policy and StrategyBRG’s Policy and Strategy',
            align: 'left',
            sortable: 'false',
            value: 'policy',
            colspan: '9',
            }
        ],
        headers5: [
        {
            text: 'TOTAL AMOUNT',
            align: 'left',
            sortable: 'false',
            value: 'total',
            rowspan: '2',
            }
        ],
        headers6: [
        {
            text: '1',
            align: 'left',
            sortable: 'false',
            value: 'no1',
            rowspan: '1',
            }
        ],
        headers7: [
        {
            text: '2',
            align: 'left',
            sortable: 'false',
            value: 'no2',
            rowspan: '1',
            }
        ],
        headers8: [
        {
            text: '3',
            align: 'left',
            sortable: 'false',
            value: 'no3',
            rowspan: '1',
            }
        ],
        headers9: [
        {
            text: '4',
            align: 'left',
            sortable: 'false',
            value: 'no4',
            rowspan: '1',
            }
        ],
        headers10: [
        {
            text: '5',
            align: 'left',
            sortable: 'false',
            value: 'no5',
            rowspan: '1',
            }
        ],
        headers11: [
        {
            text: '6',
            align: 'left',
            sortable: 'false',
            value: 'no6',
            rowspan: '1',
            }
        ],
        headers12: [
        {
            text: '7',
            align: 'left',
            sortable: 'false',
            value: 'no7',
            rowspan: '1',
            }
        ],
        headers13: [
        {
            text: '8',
            align: 'left',
            sortable: 'false',
            value: 'no8',
            rowspan: '1',
            }
        ],
        headers14: [
        {
            text: '9',
            align: 'left',
            sortable: 'false',
            value: 'no9',
            rowspan: '1',
            }
        ],
               
        sekatkanal:[
        {
          value: false,
          No: '1',
          partner: 'AFD',
          policy: '1',
          no1: '',
          no2: '',
          no3: '',
          no4: '',
          no5: '',
          no6: 'V',
          no7: '',
          no8: '',
          no9: '',
          total: '',
        },
        {
          value: false,
          No: '2',
          partner: 'ASEAN',
          no1: '',
          no2: 'V',
          no3: 'V',
          no4: 'V',
          no5: 'V',
          no6: 'V',
          no7: 'V',
          no8: 'V',
          no9: 'V',
          total: '',
        },
        {
          value: false,
          No: '3',
          partner: 'Austrila',
          no1: '',
          no2: '',
          no3: '',
          no4: '',
          no5: 'V',
          no6: 'V',
          no7: 'V',
          no8: '',
          no9: '',
          total: '',
        },
        {
          value: false,
          No: '4',
          partner: 'MCA-I',
          no1: 'V',
          no2: '',
          no3: 'V',
          no4: 'V',
          no5: '',
          no6: 'V',
          no7: 'V',
          no8: 'V',
          no9: 'V',
          total: '',
        },
        {
          value: false,
          No: '5',
          partner: 'MCATFA/IBCSD-I',
          no1: '',
          no2: '',
          no3: '',
          no4: '',
          no5: '',
          no6: 'V',
          no7: '',
          no8: '',
          no9: '',
          total: '',
        },
        {
          value: false,
          No: '6',
          partner: 'Netherlands',
          no1: '',
          no2: '',
          no3: 'V',
          no4: '',
          no5: 'V',
          no6: 'V',
          no7: '',
          no8: 'V',
          no9: '',
          total: '',
        },
        {
          value: false,
          No: '7',
          partner: 'GIZ',
          no1: '',
          no2: '',
          no3: '',
          no4: 'V',
          no5: 'V',
          no6: 'V',
          no7: 'V',
          no8: 'V',
          no9: '',
          total: '',
        },{
          value: false,
          No: '8',
          partner: 'AKCCU',
          no1: 'V',
          no2: 'V',
          no3: 'V',
          no4: 'V',
          no5: 'V',
          no6: 'V',
          no7: 'V',
          no8: 'V',
          no9: 'V',
          total: '',
        },{
          value: false,
          No: '9',
          partner: 'NORWAY',
          no1: 'V',
          no2: 'V',
          no3: 'V',
          no4: 'V',
          no5: 'V',
          no6: 'V',
          no7: 'V',
          no8: 'V',
          no9: 'V',
          total: '',
        },{
          value: false,
          No: '10',
          partner: 'JICA',
          no1: '',
          no2: '',
          no3: '',
          no4: 'V',
          no5: 'V',
          no6: 'V',
          no7: '',
          no8: 'V',
          no9: '',
          total: '',
        },{
          value: false,
          No: '11',
          partner: 'WWF',
          no1: 'V',
          no2: 'V',
          no3: 'V',
          no4: 'V',
          no5: 'V',
          no6: 'V',
          no7: 'V',
          no8: '',
          no9: 'V',
          total: '',
        },{
          value: false,
          No: '12',
          partner: 'CLUA',
          no1: '',
          no2: '',
          no3: '',
          no4: 'V',
          no5: 'V',
          no6: 'V',
          no7: 'V',
          no8: '',
          no9: '',
          total: '',
        },{
          value: false,
          No: '13',
          partner: 'USAID',
          no1: 'V',
          no2: 'V',
          no3: 'V',
          no4: '',
          no5: 'V',
          no6: 'V',
          no7: 'V',
          no8: '',
          no9: 'V',
          total: '',
        },{
          value: false,
          No: '14',
          partner: 'Mitra Aksi',
          no1: '',
          no2: '',
          no3: '',
          no4: '',
          no5: '',
          no6: '',
          no7: '',
          no8: '',
          no9: '',
          total: '',
        },{
          value: false,
          No: '15',
          partner: 'Kehijau Berbak',
          no1: '1V',
          no2: 'V',
          no3: '',
          no4: '',
          no5: '',
          no6: '',
          no7: '',
          no8: '',
          no9: '',
          total: '',
        },{
          value: false,
          No: '16',
          partner: 'Belantara ',
          no1: '1',
          no2: '1',
          no3: '1',
          no4: '1',
          no5: '1',
          no6: '1',
          no7: '1',
          no8: '1',
          no9: '1',
          total: '1',
        },{
          value: false,
          No: '17',
          partner: 'Perkumpulan Gita Buana',
          no1: '',
          no2: 'V',
          no3: 'V',
          no4: '',
          no5: '',
          no6: '',
          no7: '',
          no8: '',
          no9: '',
          total: '',
        },{
          value: false,
          No: '18',
          partner: 'GGGI',
          no1: '',
          no2: 'V',
          no3: 'V',
          no4: 'V',
          no5: 'V',
          no6: 'V',
          no7: 'V',
          no8: 'V',
          no9: '',
          total: '1',
        },{
          value: false,
          No: '19',
          partner: 'UNDP',
          no1: 'V',
          no2: 'V',
          no3: 'V',
          no4: 'V',
          no5: 'V',
          no6: 'V',
          no7: 'V',
          no8: 'V',
          no9: 'V',
          total: '',
        },{
          value: false,
          No: '20',
          partner: 'Jaringan Masyarakat Gambut Jambi',
          no1: '',
          no2: '',
          no3: 'V',
          no4: '',
          no5: '',
          no6: '',
          no7: 'V',
          no8: 'V',
          no9: '',
          total: '',
        },{
          value: false,
          No: '21',
          partner: 'ICCTF',
          no1: '',
          no2: 'V',
          no3: 'V',
          no4: '',
          no5: 'v',
          no6: 'v',
          no7: '',
          no8: '',
          no9: '',
          total: '',
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