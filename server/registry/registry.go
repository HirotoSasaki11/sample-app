package registry

import (
	"context"

	"cloud.google.com/go/firestore"
	"cloud.google.com/go/storage"
	fi "github.com/HirotoSasaki11/sample-app/server/driver/firestore"
	"github.com/HirotoSasaki11/sample-app/server/entity/repository"
)

type Repository interface {
	Media() repository.Media
	Ariticle() repository.Article
}

type registry struct{}

// New creates registry for appengine.
func New() Repository {
	return new(registry)
}

func (r *registry) Media() repository.Media {
	//proj := config.ProjectID
	ctx := context.Background()
	client, err := firestore.NewClient(ctx, "")
	if err != nil {
		return nil
	}
	storage, err := storage.NewClient(ctx)
	if err != nil {
		return nil
	}
	return fi.NewMedia(client, storage)
}

func (r *registry) Ariticle() repository.Article {
	ctx := context.Background()
	client, err := firestore.NewClient(ctx, "")
	if err != nil {
		return nil
	}

	return fi.NewAirticle(client)
}
