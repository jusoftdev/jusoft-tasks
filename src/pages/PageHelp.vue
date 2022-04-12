<template>
  <q-page padding>
    <q-btn
      to="/settings"
      color="primary"
      icon="chevron_left"
      label="Back"
      flat
    />

    <h5>How to use JuSoft Tasks</h5>
    <p>Tasks has been designed by to make the app as simple as possible and quick to understand</p>
    <p>ㅤ</p>
    <q-space />
    <p>The icon has been designed using resources from Flaticon.com</p>
    <q-item
      @click="legal"
      v-ripple
      tag="label"
    >
      <q-item-section>
        <q-item-label>Legal Notice</q-item-label>
      </q-item-section>
      <q-item-section side >
        <q-icon name="chevron_right" />
      </q-item-section>
    </q-item>
    <q-item
      @click="privacy"
      v-ripple
      tag="label"
    >
      <q-item-section>
        <q-item-label>Data Policy</q-item-label>
      </q-item-section>
      <q-item-section side >
        <q-icon name="chevron_right" />
      </q-item-section>
    </q-item>
  </q-page>
</template>

<script>
import {openURL} from "quasar";

export default {
methods: {
  legal() {
    openURL('https://jusoft.dev/impressum.html')
  },
  privacy() {
    openURL('https://jusoft.dev/datenschutz.html')
  }
}
}
</script>
