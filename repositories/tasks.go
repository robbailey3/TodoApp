package repositories

import (
  "gorm.io/gorm/clause"
  "time"

  "github.com/robbailey3/todo-app/config"
  "github.com/robbailey3/todo-app/models"
  "github.com/robbailey3/todo-app/query"
)

func GetTasks(query query.TaskQuery) ([]models.Task, error) {
  var tasks []models.Task

  result := config.DbConn.
    Where("deleted = ?", query.Deleted.(bool)).
    Offset(query.Offset.(int)).Limit(query.Limit.(int)).
    Order(clause.OrderByColumn{Column: clause.Column{Name: "id"}, Desc: true}).
    Find(&tasks)

  if result.Error != nil {
    return nil, result.Error
  }

  return tasks, nil
}

func UpdateTask(id uint, task models.Task) error {
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

func CreateTask(task models.Task) error {
  result := config.DbConn.Create(&task)

  if result.Error != nil {
    return result.Error
  }

  return nil
}

func DeleteTask(id string) error {
  result := config.DbConn.Model(&models.Task{}).Where("id = ?", id).Updates(&models.Task{
    Deleted:   true,
    DeletedAt: &time.Time{},
  })

  if result.Error != nil {
    return result.Error
  }

  return nil
}
