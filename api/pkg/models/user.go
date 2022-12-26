package models

import (
	"github.com/martoast/go-bookstore/pkg/config"

	"github.com/jinzhu/gorm"
)

type User struct {
	gorm.Model
	Username string `json:"username"`
	Password string `json:"password"`
}

func init() {
	config.Connect()
	db = config.GetDB()
	db.AutoMigrate(&User{})
}
func (b *User) CreateUser() *User {
	db.NewRecord(b)
	db.Create(&b)
	return b
}

func GetAllUsers() []User {
	var Users []User
	db.Find(&Users)
	return Users
}

func GetUserById(ID int64) (*User, *gorm.DB) {
	var getUser User
	db := db.Where("ID=?", ID).Find(&getUser)
	return &getUser, db
}

func GetUserByUsername(Username string) (*User, *gorm.DB) {
	var getUser User
	db := db.Where("username=?", Username).Find(&getUser)
	return &getUser, db
}

func ValidateUser(Username, Password string) (*User, *gorm.DB) {
	var getUser User
	db := db.Where(&User{Username: Username, Password: Password}).Find(&getUser)
	return &getUser, db
}
