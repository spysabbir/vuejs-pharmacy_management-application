<template>
<!--begin::Toolbar-->
<TheBreadcrumb title="Overview"></TheBreadcrumb>
<!--end::Toolbar-->

<!--begin::Post-->
<div class="post d-flex flex-column-fluid" id="kt_post">
  <!--begin::Container-->
  <div id="kt_content_container" class="container">
    <div>Chart</div>
    <Chart :size="{ width: 500, height: 420 }"
      :data="plByMonth"
      :margin="margin"
      :direction="direction"
    >
      <template #layers>
        <Grid strokeDasharray="2,2" />
        <Line
          :dataKeys="['name', 'purchase']"
          :lineStyle="{ strokeWidth: '10px' }"
        />
      </template>
    </Chart>

  </div>
  <!--end::Container-->
</div>
<!--end::Post-->
 

</template>

<script>
import TheBreadcrumb from '../../components/TheBreadcrumb.vue';
import { showErrorMessage, showSuccessMessage } from "../../utils/functions";
import privateService from "../../service/privateService";
import {Chart, Grid, Line} from "vue3-charts"

export default {
  data: () => ({
    overview: {},
    gettingOverview: false,
    plByMonth: [
      { name: 'Jan', purchase: 1000, avg: 500, inc: 300 },
      { name: 'Feb', purchase: 2000, avg: 900, inc: 400 },
      { name: 'Apr', purchase: 400, avg: 400, inc: 500 },
      { name: 'Mar', purchase: 3100, avg: 1300, inc: 700 },
      { name: 'May', purchase: 200, avg: 100, inc: 200 },
      { name: 'Jun', purchase: 600, avg: 400, inc: 300 },
      { name: 'Jul', purchase: 500, avg: 90, inc: 100 }
    ],
    direction: 'horizontal',
    margin: {
      left: 0,
      top: 20,
      right: 20,
      bottom: 0
    },
  }),
  mounted() {
    setTimeout(this.getOverview, 100)
  },
  computed: {

  },
  components: {
    TheBreadcrumb,
    Chart,
    Grid,
    Line,
  },
  methods: {
    getOverview(){
      this.gettingOverview = true;
      privateService.getOverview()
      .then((res) => {
        this.overview = res.data.data;
      }).catch(err => {
        showErrorMessage(err);
      }).finally(() => {
        this.gettingOverview = false;
      });
    },
  }
}
</script>


