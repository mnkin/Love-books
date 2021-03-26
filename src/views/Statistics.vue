<template>
  <Layout>
    <Tabs :dataSource="typeList" :value.sync="type" classPrefix="zzz" />
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

@Component({ components: { Tabs } })
export default class Statistics extends Vue {
  type = "-";
  interval = "day";
  intervalList = [
    { text: "按天", value: "day" },
    { text: "按周", value: "week" },
    { text: "按月", value: "month" },
  ];
  typeList = [
    { text: "支出", value: "-" },
    { text: "收入", value: "+" },
  ];
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
