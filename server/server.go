package server

import (
	"fmt"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/robbailey3/todo-app/router"
)

func Init() {

	app := fiber.New(fiber.Config{})

	port := os.Getenv("PORT")

	if port == "" {
		port = "8080"
	}

	app.Static("/", "./ui/dist")

	api := app.Group("/api")

	router.SetupTaskRoutes(api)

	if err := app.Listen(fmt.Sprintf(":%s", port)); err != nil {
		panic(err)
	}
}
