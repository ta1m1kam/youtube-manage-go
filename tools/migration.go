package main

import (
	"github.com/TaigaMikami/youtube-manage-go/databases"
	"github.com/TaigaMikami/youtube-manage-go/models"
	"github.com/sirupsen/logrus"
)

func main() {
	db, err := databases.Connect()
	defer db.Close()

	if err != nil {
		logrus.Fatal(err)
	}

	db.Debug().AutoMigrate(&models.User{})
	db.Debug().AutoMigrate(&models.Favorite{})
}
