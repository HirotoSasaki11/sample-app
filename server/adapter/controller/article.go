package controller

import (
	"net/http"

	"github.com/labstack/echo"
)

type Article struct {
}

func GetArticle(c echo.Context) error {
	panic("not implemant")
}

func ArticleList(c echo.Context) error {
	panic("not implemant")
}

func UploadArticle(c echo.Context) error {
	panic("not implemant")
}

func DeleteArticle(c echo.Context) error {
	panic("not implemant")
}

func CreateArticle(c echo.Context) error {
	panic("not implemant")
}

func MainPage() echo.HandlerFunc {
	return func(c echo.Context) error {
		username := c.Param("username") //プレースホルダusernameの値取り出し
		return c.String(http.StatusOK, "Hello World "+username)
	}
}
