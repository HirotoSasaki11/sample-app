package controller

import (
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

func NewRouter() {
	e := echo.New()
	e.Use(middleware.Logger())
	e.GET("", GetMedia)
	e.PUT("", UploadMedia)
	e.DELETE("", DeleteMedia)

	e.GET("article-list", ArticleList)
	e.GET("article", GetArticle)
	e.PUT("article/{article_id}", UploadArticle)
	e.POST("article/{article_id}", CreateArticle)
	e.DELETE("article/{article_id}", DeleteArticle)
}
