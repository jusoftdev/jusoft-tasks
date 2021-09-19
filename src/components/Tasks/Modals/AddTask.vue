<template>
	<q-card>
		<modal-header>Add Task</modal-header>

		<form @submit.prevent="submitForm">
			<q-card-section class="q-pt-none">

				<modal-task-name
				  :name.sync="taskToSubmit.name"
					ref="modalTaskName"
				/>

				<modal-due-date
				  :dueDate.sync="taskToSubmit.dueDate"
					@clear="clearDueDate"
				/>

				<modal-due-time
					v-if="taskToSubmit.dueDate"
					:dueTime.sync="taskToSubmit.dueTime"
				/>

			</q-card-section>

			<modal-buttons />

		</form>

	</q-card>
</template>

<script>
import { mapActions } from 'vuex'
import mixinAddEditTask from 'src/mixins/mixin-add-edit-task'

export default {
	mixins: [mixinAddEditTask],
	data() {
		return {
			taskToSubmit: {
				name: '',
				dueDate: '',
				dueTime: '',
				completed: false
			}
		}
	},
	methods: {
		...mapActions('tasks', ['addTask']),

		submitTask() {
			this.addTask(this.taskToSubmit)
			this.$emit('close')
		},

	}
}
</script>