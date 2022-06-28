import type { Task } from "@/models/task";
import tasksService from "@/services/tasksService";
import { defineStore } from "pinia";

export interface TasksState {
  tasks: Task[];
  loading: boolean;
  error: boolean;
}

const useTaskStore = defineStore("tasks", {
  state: (): TasksState => ({
    tasks: [],
    loading: false,
    error: false
  }),
  actions: {
    async loadTasks() {
      this.loading = true;
      try {
        const tasks = await tasksService.getTasks();
        this.tasks = tasks;
        this.loading = false;
      } catch (error) {
        console.error(error);
        this.loading = false;
        this.error = true;
      }
    },
    async updateTask(task: Task) {
      await tasksService.updateTask(task);

      this.loadTasks();
    }
  }
});

export default useTaskStore;
