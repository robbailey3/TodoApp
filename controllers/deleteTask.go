package controllers

import (
	"strconv"

	"github.com/gofiber/fiber/v2"
	"github.com/robbailey3/todo-app/repositories"
	"github.com/robbailey3/todo-app/response"
)

func DeleteTask(ctx *fiber.Ctx) error {
	taskId, err := strconv.ParseUint(ctx.Params("id"), 10, 32)

	if err != nil {
		return response.BadRequest(ctx, err)
	}

	err = repositories.DeleteTask(uint(taskId))

	if err != nil {
		return response.ServerError(ctx, err)
	}

	return response.Accepted(ctx)
}
