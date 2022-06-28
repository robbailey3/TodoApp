package models

import "time"

type Task struct {
	Id        uint       `gorm:"primary_key" json:"id"`
	CreatedAt time.Time  `json:"createdAt"`
	UpdatedAt time.Time  `json:"updatedAt"`
	DeletedAt *time.Time `gorm:"index" json:"deletedAt"`
	Title     string     `json:"title" validate:"required"`
	Completed bool       `json:"completed" validate:"required"`
	Deleted   bool       `json:"deleted"`
}
