<template>
  <Layout>
    <Tabs classPrefix="type" :dataSource="recordTypeList" :value.sync="type" />
    <Tabs
      classPrefix="interval"
      :dataSource="intervalList"
      :value.sync="interval"
    />
    <ol>
      <li v-for="(group, index) in result" :key="index">
        <h3 class="title">{{ group.title }}</h3>
        <ol>
          <li v-for="item in group.items" :key="item.id" class="record">
            <span>{{ tagString(item.tags) }}</span>
            <span class="notes">{{ item.notes }}</span>
            <span>¥{{ item.amount }}</span>
          </li>
        </ol>
      </li>
    </ol>
  </Layout>
</template>

<script lang="ts">
import recordTypeList from "@/constants/recordTypeList";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Tabs from "../components/Tabs.vue";
import interValList from "../constants/intervalList";

@Component({ components: { Tabs } })
export default class Statistics extends Vue {
  tagString(tags: Tag[]) {
    return tags.length === 0 ? "无" : tags.join(",");
  }

  get recordList() {
    return (this.$store.state as RootState).recordList;
  }

  get result() {
    const { recordList } = this;
    type HashTableValue = { title: string; items: RecordItem[] };
    const hashTable: { [key: string]: HashTableValue } = {};
    for (let i = 0; i < recordList.length; i++) {
      const [date, time] = recordList[i].createdAt!.split("T");
      hashTable[date] = hashTable[date] || { title: date, items: [] };
      console.log(hashTable[date]);
      hashTable[date].items.push(recordList[i]);
    }
    return hashTable;
  }

  beforeCreated() {
    this.$store.commit("fetchRecords");
  }

  type = "-";
  interval = "day";
  intervalList = interValList;
  recordTypeList = recordTypeList;
}
</script>


<style lang="scss" scoped>
::v-deep .type-tabs-item {
  background: white;
  &.selected {
    background: #c4c4c4;
    &::after {
      display: none;
    }
  }
}
::v-deep .interval-tabs-item {
  height: 48px;
}
%item {
  padding: 8px 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  @extend %item;
}
.record {
  @extend %item;
  background: white;
}
.notes {
  margin-right: auto;
  margin-left: 16px;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
