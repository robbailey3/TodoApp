package models

import (
	"time"

	"gorm.io/gorm"
)

type Task struct {
	Id        uint           `gorm:"primary_key" json:"id"`
	CreatedAt time.Time      `json:"createdAt"`
	UpdatedAt time.Time      `json:"updatedAt"`
	DeletedAt gorm.DeletedAt `gorm:"index" json:"deletedAt"`
	Title     string         `json:"title" validate:"required"`
	Completed bool           `json:"completed" validate:"required"`
	IP        string         `json:"ip"`
}
