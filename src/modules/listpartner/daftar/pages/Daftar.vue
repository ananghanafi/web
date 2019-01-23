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
          institusiriau: '1',
          amountriau: '1',
          institusijambi: '1',
          amountjambi: '1',
          institusisouthsumatra: '1',
          amountsouthsumatra: '1',
          institusiwestkalimantan: '1',
          amountwestkalimantan: '1',
          institusicentralkalimantan: '1',
          amountcentralkalimantan: '1',
          institusisouthkalimantan: '1',
          amountsouthkalimantan: '1',
          institusipapua: '1',
          amountpapua: '1',
        },
        
        
        ],
        desserts: [
          {
            value: false,
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%'
          },
          {
            value: false,
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%'
          },
          {
            value: false,
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%'
          },
          {
            value: false,
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%'
          },
          {
            value: false,
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%'
          },
          {
            value: false,
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%'
          },
          {
            value: false,
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%'
          },
          {
            value: false,
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%'
          },
          {
            value: false,
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%'
          },
          {
            value: false,
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%'
          }
        ]
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