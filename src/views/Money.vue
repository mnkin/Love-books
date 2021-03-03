<template>
  <Layout classPrefix="layout">
    <number-pad />
    <Types :xxx="555" />
    <Notes />
    <Tags />
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
};
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
