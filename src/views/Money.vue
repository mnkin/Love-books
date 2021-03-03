<template>
  <Layout classPrefix="layout">
    <number-pad />
    <Types />
    <Notes />
    <Tags :dataSource="tags" />
  </Layout>
</template>

<script>
import Layout from "@/components/Layout.vue";
import Tags from "@/components/Money/Tags.vue";
import Notes from "@/components/Money/Notes.vue";
import Types from "@/components/Money/Types.vue";
import NumberPad from "@/components/Money/NumberPad.vue";
export default {
  components: { Layout, Tags, Notes, Types, NumberPad },
  data() {
    return {
      tags: ["衣", "食", "住", "行"],
    };
  },
};
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
