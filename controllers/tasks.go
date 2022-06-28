package controllers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/robbailey3/todo-app/models"
	"github.com/robbailey3/todo-app/query"
	"github.com/robbailey3/todo-app/repositories"
	"github.com/robbailey3/todo-app/response"
	"strconv"
)

func GetTasks(ctx *fiber.Ctx) error {
	var q query.TaskQuery

	if err := ctx.QueryParser(&q); err != nil {
		return ctx.Status(fiber.StatusBadRequest).JSON(err)
	}

	if err := q.Validate(); err != nil {
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

func UpdateTask(ctx *fiber.Ctx) error {
	var task models.Task

	err := ctx.BodyParser(&task)

	if err != nil {
		return err
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

func CreateTask(ctx *fiber.Ctx) error {
	var task models.Task

	err := ctx.BodyParser(&task)

	if err != nil {
		return err
	}

	err = repositories.CreateTask(task)

	if err != nil {
		return ctx.Status(500).SendString(err.Error())
	}

	return ctx.Status(201).SendString("")
}

func DeleteTask(ctx *fiber.Ctx) error {
	err := repositories.DeleteTask(ctx.Params("id"))

	if err != nil {
		return ctx.Status(500).SendString(err.Error())
	}

	return ctx.Status(204).SendString("")
}
