export default {
  methods: {
		submitForm() {
			this.$refs.modalTaskName.$refs.name.validate()
			if (!this.$refs.modalTaskName.$refs.name.hasError) {
				this.submitTask()
			}
		},
		clearDueDate() {
			this.taskToSubmit.dueDate = ''
			this.taskToSubmit.dueTime = ''
		}
  },
	components: {
		'modal-header': require('components/Tasks/Modals/Shared/ModalHeader.vue').default,
		'modal-task-name': require('components/Tasks/Modals/Shared/ModalTaskName.vue').default,
		'modal-due-date': require('components/Tasks/Modals/Shared/ModalDueDate.vue').default,
		'modal-due-time': require('components/Tasks/Modals/Shared/ModalDueTime.vue').default,
		'modal-buttons': require('components/Tasks/Modals/Shared/ModalButtons.vue').default
	}
}