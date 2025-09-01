
# Tugas Akhir PBL - BBPVP Bandung

Sebuah aplikasi web yang memudahkan pelanggan mencari cafe sekaligus membantu pemilik cafe mengelola ketersediaan meja dan produk.

## Features

- Cafe Search  
    - Users can search for cafes by name or location.

- Cafe Details  
Displays detailed information about the cafe, including:  
    - Table availability (number of available/occupied tables)  
    - Product list (available food and drink menu)

- Cafe Management  
Admins or cafe owners can manage:  
    - Table availability (update table status: available/occupied)  
    - Products/menu (add, edit, delete products)


## Built with

- MongoDB (Mongoose)
- ExpressJS 
- React
- NodeJS

## Design Prototype
[figma](https://www.figma.com/design/9xdtiurKDJnKsZB270lMcS/cafe-prototype?m=auto&t=Aoa55YHK1BmHFYV7-1)

## Run Locally

Clone the project

```bash
  git clone https://github.com/gemadp01/tugas-akhir-gemadp.git
```

### Configure Client:  
Go to the project directory

```bash
  cd client 
```

Install dependencies

```bash
  npm install
```

Start the client
```bash
  npm run dev
```

### Configure Server:
Go to the project directory

```bash
  cd server
```

copy .env from .env.example (for custom token)

```bash
  copy .env.example .env
```

set your costum token

```bash
  ACCESS_TOKEN_SECRET=[your-custom-token-here]
```

Install dependencies

```bash
  npm install
```

Start the server
```bash
  npm run dev
```

## Authors

- [@gemadp01](https://www.github.com/gemadp01)

