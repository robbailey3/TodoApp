export interface ApiResponse<T> {
  result: T;
  timestamp: number;
  statusCode: number;
}