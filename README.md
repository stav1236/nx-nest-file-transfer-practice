# Nx Nest File Transfer 🚀

This is a **practice Nx monorepo** using **NestJS** and **Multer** for file handling.  
It contains two applications:

- **App1**: Accepts a file as `FormData`, converts it to Base64, and sends it to App2.
- **App2**: Receives the Base64 string and logs it.

Additionally, the monorepo includes:

- **Swagger documentation** for API testing.
- A **shared library (`mylib`)** for reusable utilities.

---

## 📦 Project Structure

```
my-workspace/
├── apps/
│   ├── app1/        # Handles file upload and conversion
│   ├── app2/        # Receives base64 and logs it
│
├── libs/
│   ├── mylib/       # Shared utility library
│
├── package.json
├── nx.json
└── tsconfig.base.json
```

---

## 🚀 Getting Started

### 1️⃣ Install Dependencies

```sh
npm install
```

### 2️⃣ Run Applications

Start **App1** (on port `3000` by default):

```sh
nx serve apps/app1
```

Start **App2** (on port `3001` by default):

```sh
nx serve apps/app2
```

---

## 🔄 How It Works

### **App1 (File Upload & Base64 Conversion)**

1. Accepts a file from `FormData` (via **Multer**).
2. Converts the file to **Base64**.
3. Sends the Base64 string to **App2**.

### **App2 (Receive Base64 & Log)**

1. Receives the Base64 string via an HTTP `POST` request.
2. Logs or processes the received data.

---

## 📜 API Documentation (Swagger)

Each app provides Swagger UI for API testing:

- **App1 Swagger UI**: [http://localhost:3000/api](http://localhost:3000/api)
- **App2 Swagger UI**: [http://localhost:3001/api](http://localhost:3001/api)

---

## 📚 Shared Library (`mylib`)

A **utility library** for shared logic between `app1` and `app2`.

### ✅ Generate the Shared Library

```sh
nx g @nx/js:lib libs/mylib
```

### ✅ Use `mylib` in `app1`

```typescript
import { myUtilityFunction } from '@my-workspace/mylib';
```

---

## 🛠 Commands for Nx Workspace

### 📌 Create a Nx Workspace

```sh
npx create-nx-workspace my-workspace --preset=nest
```

### 📌 Create a New App

```sh
nx g @nx/nest:app apps/new-app
```

### 📌 Create a New Shared Library

```sh
nx g @nx/js:lib libs/new-lib
```

### 📌 Run a Specific App

```sh
nx serve app1
```

---

## 📜 License

This project is licensed under the MIT License.
