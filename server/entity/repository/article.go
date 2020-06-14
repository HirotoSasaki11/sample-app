package repository

import (
	"context"

	"github.com/HirotoSasaki11/sample-app/server/entity/model"
)

type (
	// Article Articleリポジトリ
	Article interface {
		Get(ctx context.Context, id string) (*model.Article, error)
		Create(ctx context.Context, media *model.Article) (*model.Article, error)
		Delete(ctx context.Context, id string) error
		List(ctx context.Context) ([]model.Article, error)
	}
)
