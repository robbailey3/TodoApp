package response

import (
	"time"

	"github.com/gofiber/fiber/v2"
)

func BadRequest(ctx *fiber.Ctx, err error) error {
	return ctx.Status(fiber.StatusBadRequest).JSON(struct {
		Message string `json:"message"`
		HttpResponse
	}{
		HttpResponse: HttpResponse{
			Timestamp:  time.Now().Unix(),
			StatusCode: fiber.StatusBadRequest,
		},
		Message: err.Error(),
	})
}
