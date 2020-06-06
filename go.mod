module github.com/HirotoSasaki11/sample-app

go 1.13

require (
	cloud.google.com/go/firestore v1.2.0
	cloud.google.com/go/storage v1.6.0
	github.com/dgrijalva/jwt-go v3.2.0+incompatible // indirect
	github.com/go-openapi/errors v0.19.4
	github.com/go-openapi/strfmt v0.19.5
	github.com/go-openapi/swag v0.19.9
	github.com/go-openapi/validate v0.19.8
	github.com/labstack/echo v3.3.10+incompatible
	github.com/labstack/gommon v0.3.0 // indirect
	github.com/stretchr/testify v1.6.1 // indirect
	github.com/topgate/mostro v0.0.0-20200408014828-3045846ad9f0
	github.com/topgate/mostro/event-handler/thumbnail-generator v0.0.0-20200408014828-3045846ad9f0 // indirect
	golang.org/x/crypto v0.0.0-20200604202706-70a84ac30bf9 // indirect
	google.golang.org/api v0.20.0
)

replace github.com/HirotoSasaki11/sample-app => ../sample-app
