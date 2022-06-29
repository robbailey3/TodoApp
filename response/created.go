package response

import (
	"github.com/gofiber/fiber/v2"
	"time"
)

func Created(ctx *fiber.Ctx, data interface{}) error {
	return ctx.Status(fiber.StatusCreated).JSON(struct {
		Result interface{} `json:"result"`
		HttpResponse
	}{
		HttpResponse: HttpResponse{
			Timestamp:  time.Now().Unix(),
			StatusCode: fiber.StatusCreated,
		},
		Result: data,
	})
}
