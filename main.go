package main

import (
	"log"
	"net"
	"os"
	"os/exec"

	"github.com/robbailey3/todo-app/config"
	"github.com/robbailey3/todo-app/server"
)

func main() {
	if err := config.Init(); err != nil {
		log.Fatal(err)
	}

	if err := config.InitDatabase(); err != nil {
		log.Fatal(err)
	}

	if os.Getenv("APP_ENV") == "development" {
		startUiApp()
	}
	server.Init()
}

// Check if anything is running on port 3000
func isUiAppRunning() bool {
	port := ":3000"
	ln, err := net.Listen("tcp", port)
	if err != nil {
		return true
	}
	defer ln.Close()
	return false
}

func startUiApp() {
	if isUiAppRunning() {
		log.Println("UI app is already running")
		return
	}
	log.Println("Starting UI app")

	go func() {
		cmd := exec.Command("npm", "run", "dev")
		cmd.Dir = "./ui"

		if err := cmd.Start(); err != nil {
			log.Fatal(err)
		}

		if err := cmd.Wait(); err != nil {
			log.Fatal(err)
		}
		log.Println("UI app started with process id:", cmd.Process.Pid)
	}()

}
