<template>
  <Layout>
    <Tabs :dataSource="recordTypeList" :value.sync="type" classPrefix="zzz" />
    <Tabs :dataSource="intervalList" :value.sync="interval" />
    <div>
      type:{{ type }}
      <br />
      intervale:{{ interval }}
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Types from "../components/Money/Types.vue";
import Tabs from "../components/Tabs.vue";
import interValList from "../constants/intervalList";
import recordTypeList from "../constants/recordTypeList";

@Component({ components: { Tabs } })
export default class Statistics extends Vue {
  type = "-";
  interval = "day";
  intervalList = interValList;
  recordTypeList = recordTypeList;
}
</script>


<style lang="scss" scoped>
::v-deep .zzz-tabs-item {
  background: white;
  &.selected {
    border: 1px solid red;
    background: #c4c4c4;
    &::after {
      display: none;
    }
  }
}
.statistic-item {
  border: 1px solid red;
}
</style>
