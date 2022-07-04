package response

import (
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/robbailey3/todo-app/utils"
)

func ValidationFailed(ctx *fiber.Ctx, err []*utils.ValidationError) error {
	return ctx.Status(fiber.StatusBadRequest).JSON(struct {
		Errors []*utils.ValidationError `json:"errors"`
		HttpResponse
	}{
		HttpResponse: HttpResponse{
			Timestamp:  time.Now().Unix(),
			StatusCode: fiber.StatusBadRequest,
		},
		Errors: err,
	})
}
