package response

import (
	"github.com/gofiber/fiber/v2"
	"time"
)

func Ok(ctx *fiber.Ctx, data interface{}) error {
	return ctx.Status(fiber.StatusOK).JSON(struct {
		Result interface{} `json:"result"`
		HttpResponse
	}{
		HttpResponse: HttpResponse{
			Timestamp:  time.Now().Unix(),
			StatusCode: fiber.StatusOK,
		},
		Result: data,
	})
}
