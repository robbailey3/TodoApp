package router

import (
	"github.com/gofiber/fiber/v2"
	"github.com/robbailey3/todo-app/controllers"
)

func SetupTaskRoutes(router fiber.Router) {
	group := router.Group("/tasks")

	group.Get("/", controllers.GetTasks)
	group.Post("/", controllers.CreateTask)
	group.Patch("/:id", controllers.UpdateTask)
	group.Delete("/:id", controllers.DeleteTask)
}
