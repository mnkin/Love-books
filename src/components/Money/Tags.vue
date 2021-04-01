<template>
  <div>
    <div class="tags">
      <div class="new">
        <button @click="createTag">新增标签</button>
      </div>
      <ul class="current">
        <li
          v-for="tag in tagList"
          :key="tag.id"
          @click="toggle(tag)"
          :class="{ selected: selectedTags.indexOf(tag) >= 0 }"
        >
          {{ tag.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import TagHelper from "@/mixins/TagHelper";
import { mixins } from "vue-class-component";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class Tags extends mixins(TagHelper) {
  selectedTags: string[] = [];

  get tagList() {
    return this.$store.state.tagList;
  }
  created() {
    this.$store.commit("fetchTags");
  }
  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit("update:value", this.selectedTags);
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background: #fbfaf4;
  font-size: 14px;
  color: #858687;
  padding: 12px;
  display: flex;
  flex-grow: 1;
  flex-direction: column-reverse;
  justify-content: space-between;
  > .current {
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    > li {
      background: #d9d9d9;
      height: 24px;
      line-height: 24px;
      border-radius: (24px/2);
      padding: 0 16px;
      margin-top: 6px;
      margin-right: 12px;
      &.selected {
        color: white;
        background: #f2ce79;
      }
    }
  }
  > .new {
    padding-top: 16px;
    button {
      background: transparent;
      border: none;
      color: #f1a2bc;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}
</style>