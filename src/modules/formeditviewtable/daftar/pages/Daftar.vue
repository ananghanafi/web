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
                            
                            <button  @click="print">Print this component</button>
                            
                            
                        </v-card-text>
                            
                    <template>
  <v-data-table
    :headers="headers"
    :items="sekatkanal"
    :pagination.sync="pagination"
    item-key="name"
    class="elevation-1"
    
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
                        v-for="header in headers2"
                        :key="header.text"
                        :colspan="header.colspan"
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
                        :rowspan="header.rowspan"
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
                    </tr>
                    <tr>
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
                      <th
                        v-for="header in headers24"
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
              <td class="text-xs-right">{{ props.item.COUNTRY }}</td>
              <td class="text-xs-right">{{ props.item.INSTITUTIONNAME }}</td>
              <td class="text-xs-right">{{ props.item.INSTITUTIONNAME2 }}</td>
              <td class="text-xs-right">{{ props.item.INSTITUTIONNAME3 }}</td>
              <td class="text-xs-right">{{ props.item.TIPE}}</td>
              <td class="text-xs-right">{{ props.item.KEY}}</td>
              <td class="text-xs-right">{{ props.item.JUDULPROJEK}}</td>
              <td class="text-xs-right">{{ props.item.PROJECTSUMMARY}}</td>
              <td class="text-xs-right">{{ props.item.LOCATION}}</td>
              <td class="text-xs-right">{{ props.item.PROVINCE}}</td>
              <td class="text-xs-right">{{ props.item.DISTRICT}}</td>
              <td class="text-xs-right">{{ props.item.KHG}}</td>
              <td class="text-xs-right">{{ props.item.STATUSPROJECT}}</td>
              <td class="text-xs-right">{{ props.item.TANGGALMULAI}}</td>
              <td class="text-xs-right">{{ props.item.TANGGALAKHIR}}</td>
              <td class="text-xs-right">{{ props.item.REMARK}}</td>
              <td class="text-xs-right">{{ props.item.relevancy}}</td>
              <td class="text-xs-right">{{ props.item.focalpoint}}</td>
              <td class="text-xs-right">{{ props.item.NEXT}}</td>
              <td class="justify-center layout px-0">
          
        </td>
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
            sortable: false,
            value: 'No',
            rowspan: '2',
          }
        ],
         headers2: [
        {
            text: ' GENERAL INFORMATION',
            align: 'left',
            sortable: 'false',
            value: 'GENERALINFORMATION',
            colspan: '2',
            }
        ],
        headers3: [
        {
            text: 'FUNDING SOURCE',
            align: 'left',
            sortable: 'false',
            value: 'FUNDINGSOURCE',
            rowspan: '1',
            }
        ],
        headers4: [
        {
            text: 'IMPLEMENTING AGENCY',
            align: 'left',
            sortable: 'false',
            value: 'IMPLEMENTINGAGENCY',
            rowspan: '1',
            }
        ],
        headers5: [
        {
            text: 'TYPE OF DEVELOPMENT PARTNER',
            align: 'left',
            sortable: 'false',
            value: 'TIPE',
            rowspan: '2',
            }
        ],
        headers6: [
        {
            text: 'KEY ACTIVITIES',
            align: 'left',
            sortable: 'false',
            value: 'KEY',
            rowspan: '2',
            }
        ],
        headers7: [
        {
            text: 'PROJECT',
            align: 'left',
            sortable: 'false',
            value: 'PROJECT',
            colspan: '10',
            }
        ],
        headers8: [
        {
            text: 'Relevancy to BRG Mandat',
            align: 'left',
            sortable: 'false',
            value: 'relevancy',
            rowspan: '2',
            }
        ],
        headers9: [
        {
            text: 'Focal Point (PIC) from BRG',
            align: 'left',
            sortable: 'false',
            value: 'focalpoint',
            rowspan: '2',
            }
        ],
        headers10: [
        {
            text: 'NEXT STEP',
            align: 'left',
            sortable: 'false',
            value: 'NEXT',
            rowspan: '2',
            }
        ],


        headers11: [
        {
            text: 'COUNTRY',
            align: 'left',
            sortable: 'false',
            value: 'COUNTRY',
            rowspan: '1',
            }
        ],
        headers12: [
        {
            text: 'NAME OF INSTITUTION',
            align: 'left',
            sortable: 'false',
            value: 'INSTITUTIONNAME',
            rowspan: '1',
            }
        ],
        headers13: [
        {
            text: 'NAME OF INTITUTION',
            align: 'left',
            sortable: 'false',
            value: 'INSTITUTIONNAME2',
            rowspan: '1',
            }
        ],
        headers14: [
        {
            text: 'NAME OF INTITUTION',
            align: 'left',
            sortable: 'false',
            value: 'INSTITUTIONNAME3',
            rowspan: '1',
            }
        ],
        headers15: [
        {
            text: 'PROJECT TITLE',
            align: 'left',
            sortable: 'false',
            value: 'JUDULPROJEK',
            rowspan: '1',
            }
        ],
        headers16: [
        {
            text: 'PROJECT SUMMARY',
            align: 'left',
            sortable: 'false',
            value: 'PROJECTSUMMARY',
            rowspan: '1',
            }
        ],
        headers17: [
        {
            text: 'LOCATION',
            align: 'left',
            sortable: 'false',
            value: 'LOCATION',
            rowspan: '1',
            }
        ],
        headers18: [
        {
            text: 'NAME OF PROVINCE',
            align: 'left',
            sortable: 'false',
            value: 'PROVINCE',
            rowspan: '1',
            }
        ],
        headers19: [
        {
            text: 'NAME OF DISTRICT/REGENCY',
            align: 'left',
            sortable: 'false',
            value: 'DISTRICT',
            rowspan: '1',
            }
        ],
        headers20: [
        {
            text: 'NAME OF KHG',
            align: 'left',
            sortable: 'false',
            value: 'KHG',
            rowspan: '1',
            }
        ],
        headers21: [
        {
            text: 'PROJECT STATUS',
            align: 'left',
            sortable: 'false',
            value: 'STATUSPROJECT',
            rowspan: '1',
            }
        ],
        headers22: [
        {
            text: 'START DATE',
            align: 'left',
            sortable: 'false',
            value: 'TANGGALMULAI',
            rowspan: '1',
            }
        ],
        headers23: [
        {
            text: 'END DATE',
            align: 'left',
            sortable: 'false',
            value: 'TANGGALAKHIR',
            rowspan: '1',
            }
        ],
        headers24: [
        {
            text: 'REMARK',
            align: 'left',
            sortable: 'false',
            value: 'REMARK',
            rowspan: '1',
            }
        ],
        sekatkanal:[
        {
          value: true,
          No: '1',
          TIPE: '1',
          KEY: '1',
          relevancy: '1',
          focalpoint: '1',
          NEXT: '1',
          COUNTRY: '1',
          INSTITUTIONNAME: '1',
          INSTITUTIONNAME2: '1',
          INSTITUTIONNAME3: '1',
          JUDULPROJEK: '1',
          PROJECTSUMMARY: '1',
          LOCATION: '1',
          PROVINCE: '1',
          DISTRICT: '1',
          KHG: '1',
          STATUSPROJECT: '1',
          TANGGALMULAI: '1',
          TANGGALAKHIR: '1',
          REMARK: '1',
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