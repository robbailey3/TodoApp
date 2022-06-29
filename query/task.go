package query

// type TaskQuery struct {
// 	Deleted interface{} `query:"deleted"`
// 	Limit   interface{} `query:"limit"`
// 	Offset  interface{} `query:"offset"`
// }

// func (t *TaskQuery) Validate() []*ErrorResponse {
// 	var errors []*ErrorResponse
// 	validate := validator.New()
// 	err := validate.Struct(t)

// 	if err != nil {
// 		for _, err := range err.(validator.ValidationErrors) {
// 			var element ErrorResponse
// 			element.FailedField = err.StructNamespace()
// 			element.Tag = err.Tag()
// 			element.Value = err.Param()
// 			errors = append(errors, &element)
// 		}
// 		return errors
// 	}

// 	return nil
// }
