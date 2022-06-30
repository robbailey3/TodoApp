package server

import (
	"fmt"
	"os"
	"time"

	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/etag"
	"github.com/gofiber/fiber/v2/middleware/limiter"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/monitor"
	"github.com/gofiber/fiber/v2/middleware/recover"
	"github.com/gofiber/helmet/v2"

	"github.com/gofiber/fiber/v2"
	"github.com/robbailey3/todo-app/router"
)

func setupMiddleware(app *fiber.App) {
	app.Get("/metrics", monitor.New(monitor.Config{Title: "Todo App"}))
	app.Use(logger.New())
	app.Use(recover.New())
	app.Use(limiter.New(limiter.Config{
		Max:      100,
		Duration: 30 * time.Second,
	}))
	app.Use(helmet.New())
	app.Use(etag.New())
}

func Init() {

	app := fiber.New(fiber.Config{})

	port := os.Getenv("PORT")

	if port == "" {
		port = "8080"
	}

	if os.Getenv("APP_ENV") == "development" {
		app.Use(cors.New())
	} else {
		app.Static("/", "./ui/dist")
	}

	setupMiddleware(app)

	api := app.Group("/api")

	router.SetupTaskRoutes(api)

	if err := app.Listen(fmt.Sprintf(":%s", port)); err != nil {
		panic(err)
	}
}
