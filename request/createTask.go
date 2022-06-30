package request

type CreateTask struct {
	Title string `json:"title" validate:"required,min=1,max=255"`
	IP    string `json:"ip" validate:"ipv4"`
}
