package controllers

import (
	"github.com/go-playground/validator/v10"
	"github.com/gofiber/fiber/v2"
	"github.com/robbailey3/todo-app/repositories"
	"github.com/robbailey3/todo-app/request"
)

func CreateTask(ctx *fiber.Ctx) error {
	var task request.CreateTask

	err := ctx.BodyParser(&task)

	if err != nil {
		return err
	}

	errors := validateCreateTaskRequest(task)

	if errors != nil {
		return ctx.Status(fiber.StatusBadRequest).JSON(errors)
	}

	err = repositories.CreateTask(task)

	if err != nil {
		return ctx.Status(500).SendString(err.Error())
	}

	return ctx.Status(201).SendString("")
}

func validateCreateTaskRequest(req request.CreateTask) []*ErrorResponse {
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
	}

	return errors
}
