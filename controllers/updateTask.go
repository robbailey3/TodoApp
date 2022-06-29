package controllers

import (
	"strconv"

	"github.com/go-playground/validator/v10"
	"github.com/gofiber/fiber/v2"
	"github.com/robbailey3/todo-app/repositories"
	"github.com/robbailey3/todo-app/request"
)

type ErrorResponse struct {
	FailedField string `json:"failedField"`
	Tag         string `json:"tag"`
	Value       string `json:"value"`
}

func UpdateTask(ctx *fiber.Ctx) error {
	var task request.UpdateTask

	err := ctx.BodyParser(&task)

	if err != nil {
		return err
	}

	errors := validateUpdateTaskRequest(task)

	if errors != nil {
		return ctx.Status(fiber.StatusBadRequest).JSON(errors)
	}

	taskId, err := strconv.ParseUint(ctx.Params("id"), 10, 32)

	if err != nil {
		return err
	}

	err = repositories.UpdateTask(uint(taskId), task)

	if err != nil {
		return ctx.Status(500).SendString(err.Error())
	}

	return ctx.Status(204).SendString("")
}

func validateUpdateTaskRequest(req request.UpdateTask) []*ErrorResponse {
	var errors []*ErrorResponse
	validate := validator.New()
	err := validate.Struct(req)

	if err != nil {
		for _, err := range err.(validator.ValidationErrors) {
			var element ErrorResponse
			element.FailedField = err.StructNamespace()
			element.Tag = err.Tag()
			element.Value = err.Param()
			errors = append(errors, &element)
		}
		return errors
	}

	return nil
}
