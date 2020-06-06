package main

import (
	"github.com/HirotoSasaki11/sample-app/server/adapter/controller"
	"github.com/HirotoSasaki11/sample-app/server/registory"
)

func main() {
	controller.NewRouter(registory.New())
}
