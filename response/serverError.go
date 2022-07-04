package response

import (
	"time"

	"github.com/gofiber/fiber/v2"
)

func ServerError(ctx *fiber.Ctx, err error) error {
	return ctx.Status(fiber.StatusInternalServerError).JSON(struct {
		Message string `json:"message"`
		HttpResponse
	}{
		HttpResponse: HttpResponse{
			Timestamp:  time.Now().Unix(),
			StatusCode: fiber.StatusInternalServerError,
		},
		Message: err.Error(),
	})
}
