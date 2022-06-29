package utils

import (
	"fmt"
	"strings"

	"github.com/go-playground/validator/v10"
)

type ValidationError struct {
	FieldName    string `json:"fieldName"`
	ErrorMessage string `json:"message"`
}

func getErrorMessage(tag string, field string, param string) string {
	switch tag {
	case "required":
		return field + " is required"
	case "min":
		return field + " must be at least " + param + " characters long"
	case "max":
		return field + " must be at most " + param + " characters long"
	default:
		return field + " is invalid"
	}
}

func ValidateStruct(str interface{}) []*ValidationError {
	var errors []*ValidationError
	validate := validator.New()
	err := validate.Struct(str)

	if err != nil {
		for _, err := range err.(validator.ValidationErrors) {
			fmt.Println(err.Param())
			var element ValidationError
			fieldName := strings.Join(strings.Split(err.Namespace(), ".")[1:], ".")
			element.FieldName = fieldName
			element.ErrorMessage = getErrorMessage(err.Tag(), fieldName, err.Param())
			errors = append(errors, &element)
		}
	}

	return errors
}
