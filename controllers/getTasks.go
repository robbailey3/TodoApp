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
		return response.BadRequest(ctx, err)
	}

	if q.Limit == 0 {
		q.Limit = 100
	}

	tasks, err := repositories.GetTasks(q)

	if err != nil {
		return response.ServerError(ctx, err)
	}

	return response.Ok(ctx, tasks)
}
