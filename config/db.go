package config

import (
	"fmt"
	"github.com/robbailey3/todo-app/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"os"
)

var DbConn *gorm.DB

func InitDatabase() error {
	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=disable TimeZone=Europe/London", os.Getenv("DB_HOST"), os.Getenv("DB_USERNAME"), os.Getenv("DB_PASSWORD"), os.Getenv("DB_NAME"), os.Getenv("DB_PORT"))

	db, err := gorm.Open(postgres.New(postgres.Config{
		DSN:                  dsn,
		PreferSimpleProtocol: true, // disables implicit prepared statement usage
	}), &gorm.Config{})

	if err != nil {
		return err
	}

	DbConn = db

	if err := db.AutoMigrate(&models.Task{}); err != nil {
		return err
	}

	return nil
}
