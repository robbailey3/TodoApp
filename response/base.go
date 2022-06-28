package response

type HttpResponse struct {
	Timestamp  int64 `json:"timestamp"`
	StatusCode int   `json:"statusCode"`
}
