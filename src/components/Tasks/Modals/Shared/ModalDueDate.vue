<template>
  <div class="row q-mb-sm">
    <q-input
      :value="dueDate"
      @input="$emit('update:dueDate', $event)"
      label="Due date"
      outlined
    >
      <template v-slot:append>
        <q-icon
          v-if="dueDate"
          @click="$emit('clear')"
          class="cursor-pointer"
          name="close"
        />
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date
              :value="dueDate"
              @input="$emit('update:dueDate', $event)"
            >
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  props: ['dueDate']
}
</script>