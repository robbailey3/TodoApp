package main

import (
	"github.com/robbailey3/todo-app/config"
	"github.com/robbailey3/todo-app/server"
	"log"
)

func main() {
	if err := config.Init(); err != nil {
		log.Fatal(err)
	}

	if err := config.InitDatabase(); err != nil {
		log.Fatal(err)
	}

	server.Init()
}
