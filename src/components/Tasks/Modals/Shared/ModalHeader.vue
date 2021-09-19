<template>
  <q-card-section class="row">
    <div class="text-h6"><slot></slot></div>
    <q-space />
    <q-btn
      v-close-popup
      icon="close"
      flat
      round
      dense
    />
  </q-card-section>
</template>

<script>
export default {

}
</script>