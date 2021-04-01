<template>
  <div>
    <button class="createTag" @click="$emit('click', $event)">
      <slot />
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Button extends Vue {}
</script>

<style lang="scss" scoped>
.createTag {
  background: #efa5ba;
  color: white;
  padding: 0 16px;
  border-radius: 4px;
  border: none;
  height: 40px;
}
</style>