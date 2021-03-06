import type { ApiResponse } from '@/models/apiResponse';
import type { Task } from '@/models/task';
import axios from 'axios';

class TasksService {
	private readonly http = axios.create({
		baseURL: import.meta.env.PROD
			? '/api/tasks'
			: 'http://localhost:8000/api/tasks'
	});

	public async getTasks(): Promise<Task[]> {
		const response = await this.http.get<ApiResponse<Task[]>>('');

		return response.data.result;
	}

	public async createTask(title: string): Promise<Task> {
		const response = await this.http.post<ApiResponse<Task>>('', {
			title
		});

		return response.data.result;
	}

	public async updateTask(task: Task): Promise<void> {
		await this.http.patch(`/${task.id}`, { ...task });
	}

	public async deleteTask(taskId: number): Promise<void> {
		await this.http.delete(`/${taskId}`);
	}
}

export default new TasksService();
