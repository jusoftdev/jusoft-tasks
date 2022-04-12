<template>
  <form @submit.prevent="submitForm">
    <div class="row q-mb-md">
      <q-banner class="bg-grey-3 col">
        <template v-slot:avatar>
          <q-icon name="account_circle" color="primary" />
        </template>
        {{ tab | titleCase }} to access JuSoft Workspace Services
      </q-banner>
    </div>
    <div class="row q-mb-md">
      <q-input
        v-model="formData.email"
        :rules="[ val => isValidEmailAddress(val) || 'Please enter a valid email address.']"
        ref="email"
        lazy-rules
        class="col"
        label="Email"
        outlined
        stack-label
      />
    </div>
    <div class="row q-mb-md">
      <q-input
        v-model="formData.password"
        :rules="[ val => val.length >= 6 || 'Please enter at least 6 characters.']"
        ref="password"
        lazy-rules
        type="password"
        class="col"
        label="Password"
        outlined
        stack-label
      />
    </div>
    <div class="row">
      <q-space />
      <q-btn
        color="primary"
        :label="tab"
        type="submit"
      />
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['tab'],
  data() {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions('auth', ['registerUser', 'loginUser']),
    isValidEmailAddress(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
    },
    submitForm() {
      this.$refs.email.validate()
      this.$refs.password.validate()
      if (!this.$refs.email.hasError && !this.$refs.password.hasError) {
        if (this.tab === 'login') {
          this.loginUser(this.formData)
        }
        else {
          this.registerUser(this.formData)
        }
      }
    }
  },
  filters: {
    titleCase(value) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>