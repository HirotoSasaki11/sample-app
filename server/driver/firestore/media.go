package firestore

import (
	"context"

	"cloud.google.com/go/firestore"
	"cloud.google.com/go/storage"
	"github.com/HirotoSasaki11/sample-app/server/entity/model"
	"github.com/HirotoSasaki11/sample-app/server/entity/repository"
)

// MediaManager のエンティティ
type MediaManager struct {
	storage *storage.Client
	client  *firestore.Client
}

//NewMedia Medirのインスタンスを作成する
func NewMedia(c *firestore.Client, s *storage.Client) repository.Media {
	return &MediaManager{
		client:  c,
		storage: s,
	}
}

//Get fire storeからidに紐づいたデータを取得する
func (m *MediaManager) Get(ctx context.Context, id string) (*model.Media, error) {
	doc, err := m.client.Collection("media").Doc(id).Get(ctx)
	if err != nil {
		return nil, err
	}
	media := new(model.Media)
	doc.DataTo(media)
	return media, nil
}

//Create idに紐づいたfire storeのデータを作成する
func (m *MediaManager) Create(ctx context.Context, media *model.Media) (*model.Media, error) {
	ref := m.client.Collection("media").NewDoc().ID
	_, err := m.client.Collection("media").Doc(ref).Set(ctx, media)
	if err != nil {
		return nil, err
	}
	media.ID = ref
	return media, nil
}

//Delete idに紐づいたfire storeのデータを削除する
func (m *MediaManager) Delete(ctx context.Context, id string) error {
	_, err := m.client.Collection("media").Doc(id).Delete(ctx)
	if err != nil {
		return err
	}
	return nil
}
