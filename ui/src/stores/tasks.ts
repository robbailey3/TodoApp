import type { Task } from '@/models/task';
import tasksService from '@/services/tasksService';
import { defineStore } from 'pinia';

export interface TasksState {
  tasks: Task[];
  loading: boolean;
  error: boolean;
}

const useTaskStore = defineStore('tasks', {
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
      } catch (e) {
        console.error(e);
        this.loading = false;
        this.error = true;
      }
    },
    async createTask(title: string) {
      this.loading = true;
      try {
        const task = await tasksService.createTask(title);
        this.tasks.push(task);
        this.tasks.sort((a, b) => b.id - a.id);
        this.loading = false;
      } catch (e) {
        console.error(e);
        this.loading = false;
        this.error = true;
      }
    },
    async updateTask(task: Task) {
      await tasksService.updateTask(task);
      this.loadTasks();
    },
    async deleteTask(taskId: number) {
      await tasksService.deleteTask(taskId);
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
    }
  }
});

export default useTaskStore;
