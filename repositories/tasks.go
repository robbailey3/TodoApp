package repositories

import (
	"github.com/robbailey3/todo-app/config"
	"github.com/robbailey3/todo-app/models"
	"github.com/robbailey3/todo-app/query"
	"github.com/robbailey3/todo-app/request"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
)

func GetTasks(q query.GetTask) ([]models.Task, error) {
	var tasks []models.Task

	var result *gorm.DB

	if q.Deleted {
		result = config.DbConn.Unscoped().Offset(q.Offset).Limit(q.Limit).
			Order(clause.OrderByColumn{Column: clause.Column{Name: "id"}, Desc: true}).
			Find(&tasks)
	} else {
		result = config.DbConn.
			Offset(q.Offset).Limit(q.Limit).
			Order(clause.OrderByColumn{Column: clause.Column{Name: "id"}, Desc: true}).
			Find(&tasks)
	}

	if result.Error != nil {
		return nil, result.Error
	}

	return tasks, nil
}

func UpdateTask(id uint, task request.UpdateTask) error {
	result := config.DbConn.
		Model(&models.Task{}).
		Where("id = ?", id).
		Select("title", "completed").
		Updates(map[string]interface{}{
			"title":     task.Title,
			"completed": task.Completed,
		})

	if result.Error != nil {
		return result.Error
	}

	return nil
}

func CreateTask(task request.CreateTask) error {
	result := config.DbConn.Create(&models.Task{
		Title: task.Title,
	})

	if result.Error != nil {
		return result.Error
	}

	return nil
}

func DeleteTask(id uint) error {
	result := config.DbConn.Delete(&models.Task{
		Id: id,
	})

	if result.Error != nil {
		return result.Error
	}

	return nil
}
