package main

import (
	"fmt"
	"github.com/gorilla/mux"
	"github.com/gorilla/handlers"
	"net/http"
	"log"
)


func main(){
	fmt.Println("Starting server on localhost:8080")
	// Router
	router := mux.NewRouter()
	// CORS
	header  := handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"})
	methods := handlers.AllowedMethods([]string{"GET", "POST", "PUT", "HEAD", "OPTIONS"})
	origins := handlers.AllowedOrigins([]string{"*"})
	// Routes
	router.HandleFunc("/", home).Methods("GET")
	// Start server or log error
	log.Fatal(http.ListenAndServe(":8080", handlers.CORS(header, methods, origins)(router)))
}

func home(w http.ResponseWriter, r *http.Request){
	w.Write([]byte("Hello hackers of Hacktoberfest 2020!"))
}
