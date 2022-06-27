package repositories

import (
	"github.com/robbailey3/todo-app/config"
	"github.com/robbailey3/todo-app/models"
)

func GetTasks() ([]models.Task, error) {
	var tasks []models.Task

	result := config.DbConn.Find(&tasks)

	if result.Error != nil {
		return nil, result.Error
	}

	return tasks, nil
}
