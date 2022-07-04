package controllers

import (
	"strconv"

	"github.com/gofiber/fiber/v2"
	"github.com/robbailey3/todo-app/repositories"
	"github.com/robbailey3/todo-app/request"
	"github.com/robbailey3/todo-app/response"
	"github.com/robbailey3/todo-app/utils"
)

func UpdateTask(ctx *fiber.Ctx) error {
	var task request.UpdateTask

	err := ctx.BodyParser(&task)

	if err != nil {
		return response.BadRequest(ctx, err)
	}

	errors := validateUpdateTaskRequest(task)

	if errors != nil {
		return response.ValidationFailed(ctx, errors)
	}

	taskId, err := strconv.ParseUint(ctx.Params("id"), 10, 32)

	if err != nil {
		return response.BadRequest(ctx, err)
	}

	err = repositories.UpdateTask(uint(taskId), task)

	if err != nil {
		return response.ServerError(ctx, err)
	}

	return response.Accepted(ctx)
}

func validateUpdateTaskRequest(req request.UpdateTask) []*utils.ValidationError {
	return utils.ValidateStruct(req)
}
