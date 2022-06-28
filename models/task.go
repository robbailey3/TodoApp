package models

import "time"

type Task struct {
	Id        string     `gorm:"primary_key" json:"id"`
	CreatedAt time.Time  `json:"createdAt"`
	UpdatedAt time.Time  `json:"updatedAt"`
	DeletedAt *time.Time `gorm:"index" json:"deletedAt"`
	Title     string     `json:"title"`
	Completed bool       `json:"completed"`
	Deleted   bool       `json:"deleted"`
}
