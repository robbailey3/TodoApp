import type { ApiResponse } from "@/models/apiResponse";
import type { Task } from "@/models/task";
import axios from "axios";

class TasksService {
  private readonly http = axios.create({
    baseURL: "http://localhost:8000/api/tasks"
  });

  public async getTasks(): Promise<Task[]> {
    const response = await this.http.get<ApiResponse<Task[]>>("");

    return response.data.result;
  }

  public async updateTask(task: Task): Promise<void> {
    await this.http.patch(`/${task.id}`, { ...task });
  }
}

export default new TasksService();
