package model

import "time"

// Media のエンティティ
type Media struct {
	ID         string
	Name       string    `firestore:"Name"`
	URL        string    `firestore:"URL"`
	Type       string    `firestore:"Type"`
	UploadUser string    `firestore:"UploadUser"`
	UploadDate time.Time `firestore:"UploadDate"`
}
