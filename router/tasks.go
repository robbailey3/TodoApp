package router

import (
	"github.com/gofiber/fiber/v2"
	"github.com/robbailey3/todo-app/controllers"
)

func SetupTaskRoutes(router fiber.Router) {
	group := router.Group("/tasks")

	group.Get("/", controllers.GetTasks)
}
