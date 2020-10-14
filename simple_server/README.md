# Simple API server using Golang
This is a simple example of creating a server in Golang programming language.

## Prerequisites
- [Golang binary](https://golang.org/)
- Packages
    - [Mux](https://github.com/gorilla/mux)
    - [Handlers](https://github.com/gorilla/handlers)

## Usage
To be able to run the program, we need to build it:
```sh
go build -o bin/server .
```
You should now have a binary in the folder *bin/* called *server*. We can now run the server:
```sh
./bin/server
````
Visit your localhost at [http://localhost:8080/](http://localhost:8080/) to see the request.
