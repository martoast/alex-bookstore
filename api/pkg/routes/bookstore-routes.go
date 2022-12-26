package routes

import (
	"net/http"

	"github.com/gorilla/mux"
	"github.com/martoast/go-bookstore/pkg/controllers"
	"github.com/martoast/go-bookstore/pkg/utils"
)

var RegisterRoutes = func(router *mux.Router) {
	router.HandleFunc("/api/users/", controllers.CreateUser).Methods("POST")
	router.HandleFunc("/api/users/", controllers.GetUsers).Methods("GET")
	router.HandleFunc("/books/", controllers.GetBook).Methods("GET")
	router.HandleFunc("/books/{bookId}", controllers.GetBookById).Methods("GET")
	router.HandleFunc("/api/auth/token", utils.Middleware(http.HandlerFunc(controllers.CreateToken))).Methods("GET")
	router.HandleFunc("/books/", utils.Middleware(http.HandlerFunc(controllers.CreateBook))).Methods("POST")
	router.HandleFunc("/books/{bookId}", utils.Middleware(http.HandlerFunc(controllers.UpdateBook))).Methods("PUT")
	router.HandleFunc("/books/{bookId}", utils.Middleware(http.HandlerFunc(controllers.DeleteBook))).Methods("DELETE")
}
