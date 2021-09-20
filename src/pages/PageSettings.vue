<template>
  <q-page padding>
    <q-list
      class="q-mb-md"
      bordered
      padding
    >

      <q-item-label header>Settings</q-item-label>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Show 12 hour time format</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle
            v-model="show12HourTimeFormat"
            color="blue"
          />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Show tasks in one list</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle
            v-model="showTasksInOneList"
            color="blue"
          />
        </q-item-section>
      </q-item>

    </q-list>

    <q-list bordered padding>

      <q-item-label header>More</q-item-label>

      <q-item
        to="/settings/help"
        v-ripple
        tag="label"
      >
        <q-item-section>
          <q-item-label>Help</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>

      <q-item
        @click="visitOurWebsite"
        v-ripple
        tag="label"
      >
        <q-item-section>
          <q-item-label>Powered by JuSoft</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>

      <q-item
        @click="githubRepo"
        v-ripple
        tag="label"
      >
        <q-item-section>
          <q-item-label>Github</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>

    </q-list>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { openURL } from 'quasar'

export default {
  computed: {
    ...mapGetters('settings', ['settings']),
    show12HourTimeFormat: {
      get() {
        return this.settings.show12HourTimeFormat
      },
      set(value) {
        this.setShow12HourTimeFormat(value)
      }
    },
    showTasksInOneList: {
      get() {
        return this.settings.showTasksInOneList
      },
      set(value) {
        this.setShowTasksInOneList(value)
      }
    },
  },
  methods: {
    ...mapActions('settings', ['setShow12HourTimeFormat', 'setShowTasksInOneList']),
    visitOurWebsite() {
      openURL('https://jusoft.dev')
    },
    githubRepo() {
      openURL('https://github.com/jusoftdev/jusoft-tasks')
    }
  }
}
</script>

<style>
</style>
