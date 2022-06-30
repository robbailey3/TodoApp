package controllers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/robbailey3/todo-app/repositories"
	"github.com/robbailey3/todo-app/request"
	"github.com/robbailey3/todo-app/response"
	"github.com/robbailey3/todo-app/utils"
)

func CreateTask(ctx *fiber.Ctx) error {
	var task request.CreateTask

	err := ctx.BodyParser(&task)

	if err != nil {
		return err
	}

	task.IP = ctx.IP()

	errors := validateCreateTaskRequest(task)

	if errors != nil {
		return ctx.Status(fiber.StatusBadRequest).JSON(errors)
	}

	newTask, err := repositories.CreateTask(task)

	if err != nil {
		return ctx.Status(500).SendString(err.Error())
	}

	return response.Created(ctx, newTask)
}

func validateCreateTaskRequest(req request.CreateTask) []*utils.ValidationError {
	return utils.ValidateStruct(&req)
}
