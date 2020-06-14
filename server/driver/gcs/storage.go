package gcs

import (
	"context"
	"io"

	"cloud.google.com/go/storage"
)

// Storage ストレージのインターフェース
type Storage interface {
	WriteFile(ctx context.Context, name string) io.WriteCloser
	ReadFile(ctx context.Context, name string) (io.ReadCloser, error)
}

//CloudStorage はStorageインターフェースを実装する
type CloudStorage struct {
	client     *storage.Client
	bucketName string
}

//NewStorage はCloudStorageのインスタンスを作成する
func NewStorage(ctx context.Context, bucketName string) (*CloudStorage, error) {
	client, err := storage.NewClient(ctx)
	if err != nil {
		return nil, err
	}
	return &CloudStorage{client: client, bucketName: bucketName}, nil
}

//WriteFile ストレージに
func (s *CloudStorage) WriteFile(ctx context.Context, name string) io.WriteCloser {
	writer := s.client.Bucket(s.bucketName).Object(name).NewWriter(ctx)
	writer.ACL = []storage.ACLRule{{Entity: storage.AllUsers, Role: storage.RoleReader}}
	return writer
}

//ReadFile 引数で受け取ったファイル名をバケットから取得する。
func (s *CloudStorage) ReadFile(ctx context.Context, name string) (io.ReadCloser, error) {
	reader, err := s.client.Bucket(s.bucketName).Object(name).NewReader(ctx)
	if err != nil {
		return nil, err
	}
	return reader, nil
}

//GetMediaURL 引数で受け取ったファイルのURLを取得する
func (s *CloudStorage) GetMediaURL(ctx context.Context, name string) (string, error) {
	attr, err := s.client.Bucket(s.bucketName).Object(name).Attrs(ctx)
	if err != nil {
		return "", err
	}
	return attr.MediaLink, nil
}

//IsExsist ファイルが存在するかの確認
func (s *CloudStorage) IsExsist(ctx context.Context, name string) bool {
	_, err := s.client.Bucket(s.bucketName).Object(name).NewReader(ctx)
	if err == storage.ErrObjectNotExist {
		return false
	}
	return true
}
