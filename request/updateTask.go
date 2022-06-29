package request

type UpdateTask struct {
	Completed bool   `json:"completed"`
	Title     string `json:"title" validate:"required,min=1,max=255"`
}
