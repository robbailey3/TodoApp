package server

import (
	"fmt"
	"github.com/gofiber/fiber/v2"
	"os"
)

func Init() {

	app := fiber.New(fiber.Config{})

	port := os.Getenv("PORT")

	if port == "" {
		port = "8080"
	}

	app.Static("/", "./ui/dist")

	if err := app.Listen(fmt.Sprintf(":%s", port)); err != nil {
		panic(err)
	}
}
