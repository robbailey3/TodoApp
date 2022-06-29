package controllers

import (
	"strconv"

	"github.com/gofiber/fiber/v2"
	"github.com/robbailey3/todo-app/repositories"
)

func DeleteTask(ctx *fiber.Ctx) error {
	taskId, err := strconv.ParseUint(ctx.Params("id"), 10, 32)

	if err != nil {
		return err
	}

	err = repositories.DeleteTask(uint(taskId))

	if err != nil {
		return ctx.Status(500).SendString(err.Error())
	}

	return ctx.Status(204).SendString("")
}