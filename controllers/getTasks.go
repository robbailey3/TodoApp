package controllers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/robbailey3/todo-app/query"
	"github.com/robbailey3/todo-app/repositories"
	"github.com/robbailey3/todo-app/response"
)

func GetTasks(ctx *fiber.Ctx) error {
	var q query.GetTask

	if err := ctx.QueryParser(&q); err != nil {
		return ctx.Status(fiber.StatusBadRequest).JSON(err)
	}

	if q.Deleted == nil {
		q.Deleted = false
	}

	if q.Limit == nil {
		q.Limit = 100
	}

	if q.Offset == nil {
		q.Offset = 0
	}

	tasks, err := repositories.GetTasks(q)

	if err != nil {
		return ctx.Status(500).SendString(err.Error())
	}

	return response.Ok(ctx, tasks)
}
