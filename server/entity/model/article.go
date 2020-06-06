package model

type Article struct {

	// 投稿者
	Author string `firestore:"Author"`

	// コンテンツ
	Content string `firestore:"Content"`

	// 記事ID
	ID string `firestore:"ID"`

	// media
	Media *Media `json:"media,omitempty"`

	// Todo　余裕があれば実装
	//Tags []*Tag `json:"tags"`

	// 記事タイトル
	Title string `firestore:"Title"`
}
