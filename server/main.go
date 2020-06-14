package main

import (
	"github.com/HirotoSasaki11/sample-app/server/adapter/controller"
	"github.com/HirotoSasaki11/sample-app/server/registry"
)

func main() {
	controller.NewRouter(registry.New())
}
