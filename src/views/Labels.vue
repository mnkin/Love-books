<template>
  <Layout>
    <div class="navBar">
      <span>标签页</span>
    </div>
    <div class="tags">
      <router-link
        class="tag"
        :to="`/labels/edit/${tag.id}`"
        v-for="tag in tags"
        :key="tag.id"
      >
        <span>{{ tag.name }}</span>
        <Icon name="right" />
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <Button @click="createTag">新建标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import TagHelper from "@/mixins/TagHelper";
import { mixins } from "vue-class-component";
import { Component } from "vue-property-decorator";
import Button from "../components/Button.vue";

@Component({
  components: { Button },
})
export default class Labels extends mixins(TagHelper) {
  get tags() {
    return this.$store.state.tagList;
  }
  beforeCreate() {
    this.$store.commit("fetchTags");
  }
}
</script>

<style lang="scss" scoped>
.navBar {
  text-align: center;
  font-size: 24px;
  color: white;
  padding: 9px 16px;
  background: #efa5ba;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
}
.tags {
  background: white;
  font-size: 16px;
  padding-left: 16px;
  > .tag {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    svg {
      width: 18px;
      height: 18px;
      color: #666;
      margin-right: 16px;
    }
  }
}
.createTag-wrapper {
  text-align: center;
  border-radius: 4px;
  margin-top: 28px;
}
</style>