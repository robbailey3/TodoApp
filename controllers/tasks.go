package controllers

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
	"github.com/robbailey3/todo-app/models"
	"github.com/robbailey3/todo-app/query"
	"github.com/robbailey3/todo-app/repositories"
)

func GetTasks(ctx *fiber.Ctx) error {
	var q query.TaskQuery

	err := ctx.QueryParser(&q)

	if err != nil {
		return err
	}

	if q.Limit == 0 {
		q.Limit = 10
	}

	fmt.Println(q)

	tasks, error := repositories.GetTasks(q)

	if error != nil {
		return ctx.Status(500).SendString(error.Error())
	}

	return ctx.JSON(tasks)
}

func UpdateTask(ctx *fiber.Ctx) error {
	var task models.Task

	err := ctx.BodyParser(&task)

	if err != nil {
		return err
	}

	err = repositories.UpdateTask(ctx.Params("id"), task)

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
