package repository

import (
	"context"

	"github.com/HirotoSasaki11/sample-app/server/entity/model"
)

type (
	// Media メディアリポジトリ
	Media interface {
		Get(ctx context.Context, id string) (*model.Media, error)
		Create(ctx context.Context, media *model.Media) (*model.Media, error)
		Delete(ctx context.Context, id string) error
	}
)
