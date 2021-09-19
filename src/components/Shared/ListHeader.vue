<template>
  <q-banner
    :class="bgColor"
    class="list-header text-white text-center"
    inline-actions
    dense
  >
    <span class="text-bold text-subtitle1"><slot></slot></span>
  </q-banner>
</template>

<script>
export default {
  props: ['bgColor']
}
</script>

<style>
  .list-header {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
</style>