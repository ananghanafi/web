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
      let data = []
    return {
        options : {
            title: {
                text: 'Tindakan Restorasi per Provinsi'
            },
            legend:{
                orient: 'horizontal',
                x: 'center',
                y: 'bottom'
            },
            tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },   
            series: [
                {
                    name:'Tindakan Restorasi',
                    type:'pie',
                    radius: ['20%', '80%'],
                    avoidLabelOverlap: false,
                    roseType: 'area',
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
          this.$store.dispatch('perencanaan/getPlanningActionByProvince')
          .then(res=>{
              this.options.series[0].data = res ? Object.values(res) : []
          })
      }
  }
};
</script>