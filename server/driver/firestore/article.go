package firestore

import (
	"context"

	"cloud.google.com/go/firestore"
	"github.com/HirotoSasaki11/sample-app/server/entity/model"
	"github.com/HirotoSasaki11/sample-app/server/entity/repository"
	"github.com/topgate/mostro/server/infra/appengine"
	"google.golang.org/api/iterator"
)

// Article のエンティティ
type Article struct {
	// storage *storage.Client
	client *firestore.Client
}

//NewArticle Articleのインスタンスを作成する
func NewAirticle(c *firestore.Client) repository.Article {
	return &Article{client: c}
}

//Get fire storeからidに紐づいたデータを取得する
func (a *Article) Get(ctx context.Context, id string) (*model.Article, error) {
	doc, err := a.client.Collection("article").Doc(id).Get(ctx)
	if err != nil {
		return nil, err
	}
	article := new(model.Article)
	doc.DataTo(article)
	return article, nil
}

//Create idに紐づいたfire storeのデータを作成する
func (a *Article) Create(ctx context.Context, article *model.Article) (*model.Article, error) {
	ref := a.client.Collection("article").NewDoc().ID
	_, err := a.client.Collection("article").Doc(ref).Set(ctx, article)
	if err != nil {
		return nil, err
	}
	article.ID = ref
	return article, nil
}

//Delete idに紐づいたfire storeのデータを削除する
func (a *Article) Delete(ctx context.Context, id string) error {
	_, err := a.client.Collection("article").Doc(id).Delete(ctx)
	if err != nil {
		return err
	}
	return nil
}

//List 全ての記事を取得
func (a *Article) List(ctx context.Context) ([]model.Article, error) {
	iter := a.client.Collection("article").Documents(ctx)

	articles := make([]model.Article, 0)
	for {
		snap, err := iter.Next()
		if err == iterator.Done {
			break
		} else if err != nil {
			return nil, err
		}

		article := new(model.Article)
		if err := snap.DataTo(article); err != nil {
			return nil, appengine.WrapError(err)
		}
		article.ID = snap.Ref.ID
		articles = append(articles, *article)
	}
	return articles, nil
}
