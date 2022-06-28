package controllers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/robbailey3/todo-app/repositories"
)

func GetTasks(ctx *fiber.Ctx) error {
	tasks, error := repositories.GetTasks()

	if error != nil {
		return ctx.Status(500).SendString(error.Error())
	}

	return ctx.JSON(tasks)
}
