<template>
  <v-card height="300"> 
      <v-chart auto-resize :options="options"/>
</v-card>
</template>

<style>
.echarts {
  width: 100%;
  height: 100%;
}
</style>

<script>
import ECharts from "vue-echarts/components/ECharts";
import "echarts/lib/chart/pie";
import 'echarts/lib/component/tooltip'
import "echarts/lib/component/legend";

export default {
  components: {
    "v-chart": ECharts
  },
  data: function(){
      let data = [
      ]
    return {
        options : {
            title: {
                text: 'Sumber Anggaran'
            },
            legend:{
                orient: 'vertical',
                x: 'right',
            },
            tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },   
            series: [
                {
                    name:'Sumber Anggaran',
                    type:'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: true,                                      
                    data: data
                }
            ]
       },
    }
  },
  mounted() {
      this.load()
  },
  methods: {
      load(){
          this.$store.dispatch('perencanaan/getPlanningCostByFundingSource')
          .then(res=>{
              this.options.series[0].data = res ? Object.values(res) : []
          })
      }
  }
};
</script>