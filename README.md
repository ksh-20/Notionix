# Notionix 🗒️

**Notionix** is a simple, full-stack note-taking application built with a React + Vite frontend and an Express + MongoDB backend. It includes basic CRUD for notes, an Upstash-backed rate limiter, CORS configuration for the frontend, and a minimal, easy-to-run developer experience.

---

## 🚀 Features

- Create, read, update and delete notes (CRUD)
- Backend built with Express and Mongoose
- MongoDB for persistent storage (Atlas or local)
- Rate limiting via Upstash Redis + @upstash/ratelimit
- Frontend built with React (Vite) and Tailwind/DaisyUI

---

## 🧰 Tech Stack

- Backend: Node.js, Express, Mongoose, MongoDB, Upstash Redis
- Frontend: React (Vite), Tailwind CSS, DaisyUI, React-hot-toast, Axios
- Dev tools: Nodemon (backend), Vite (frontend)
- Testing tools: Postman

**Important packages (from package.json)**

- Backend: `express`, `mongoose`, `@upstash/redis`, `@upstash/ratelimit`, `dotenv`, `cors`
- Frontend: `react`, `react-dom`, `vite`, `axios`, `tailwindcss`, `daisyui`, `react-hot-toast`

---

## 📁 Repository structure

```
README.md
backend/
  package.json
  src/
    server.js
    config/
      db.js
      upstash.js
    controllers/
      notesController.js
    middlewares/
      rateLimiter.js
    models/
      Note.js
    routes/
      notesRoutes.js
frontend/
  package.json
  src/
    lib/
      axios.js
    components/
      RateLimit.jsx
    pages/
      HomePage.jsx
      CreatePage.jsx
      NoteDetailPage.jsx
    App.jsx
```

---

## ⚙️ Prerequisites

- Node.js (recommended v18+)
- npm
- MongoDB (local or Atlas account)
- Upstash account (for Redis rate limiting) — optional but recommended to reproduce rate limiting behavior
- Postman

Useful links:
- Node.js: https://nodejs.org/
- MongoDB Atlas: https://www.mongodb.com/cloud/atlas
- Upstash: https://upstash.com/

---

## 🔧 Setup & Installation

Below are step-by-step instructions for running the project locally.

### 1) Clone the repo

```bash
git clone https://github.com/ksh-20/Notionix.git
cd Notionix
```

### 2) Backend setup

```bash
cd backend
npm install
```

Create a `.env` file in `backend/` (or copy `.env.example` if you create one) with the following variables:

```
PORT=5001
MONGO_URI=<your_mongodb_connection_string>
# Upstash environment variables for Redis when using Upstash (recommended)
UPSTASH_REDIS_REST_URL=<your_upstash_redis_rest_url>
UPSTASH_REDIS_REST_TOKEN=<your_upstash_redis_rest_token>
```

Notes:
- `PORT` should match the port used by the frontend `axios` base URL (default in this project is `5001`).
- If you're using MongoDB Atlas, put the connection string in `MONGO_URI`.
- If you don't configure Upstash, the rate limiter may fail — either configure it or temporarily disable the `rateLimiter` middleware in `server.js`.

Start the backend in development mode:

```bash
npm run dev
# or in production
npm start
```

You should see `Server started on port: 5001` and `Connected to MongoDB Successfully` in the console if env variables are set correctly.

### 3) Frontend setup

Open a new terminal and run:

```bash
cd frontend
npm install
npm run dev
```

The frontend runs with Vite and is configured to expect the backend at `http://localhost:5001/api` (see `src/lib/axios.js`).

> Tip: For production, set an environment-specific base URL (e.g., `VITE_API_BASE_URL`) and update `src/lib/axios.js` to use `import.meta.env.VITE_API_BASE_URL`.

---

## 📡 API Documentation

Base URL (default): `http://localhost:5001/api`

### Endpoints (/api/notes)

- GET `/` — Get all notes
  - Status: `200` — returns JSON array of note objects

- GET `/:id` — Get a single note
  - Status: `200` — returns note object
  - Status: `404` — note not found

- POST `/` — Create a note
  - Body: `{ "title": "...", "content": "..." }`
  - Status: `201` — returns created note object

- PUT `/:id` — Update a note
  - Body: `{ "title": "...", "content": "..." }`
  - Status: `200` — returns updated note object
  - Status: `404` — note not found

- DELETE `/:id` — Delete a note
  - Status: `200` — returns deleted note object
  - Status: `404` — note not found

- Rate limiting: If a client exceeds the rate limit, the backend returns `429 Too Many Requests` with `{ message: "Too Many Requests. Please try again later" }`.

### cURL examples

Create a note:

```bash
curl -X POST http://localhost:5001/api/notes \
  -H "Content-Type: application/json" \
  -d '{"title":"My note","content":"Hello world"}'
```

Get all notes:

```bash
curl http://localhost:5001/api/notes
```

---

## 🧪 Testing & Troubleshooting

- If MongoDB connection fails, verify `MONGO_URI` and network access (Atlas IP whitelist or SRV connection string format).
- If you see CORS errors, confirm the frontend is served from `http://localhost:5173` (default Vite dev server) or adjust the `cors` configuration in `backend/src/server.js`.
- If the rate limiter rejects all requests, confirm Upstash secrets and that `Redis.fromEnv()` finds the env vars.
- If ports conflict, change `PORT` in the `.env` file and update the frontend `axios` base URL if needed.

---

## ✅ Recommended Improvements

- Make `BASE_URL` for Axios configurable with `VITE_API_BASE_URL`.
- Add authentication (JWT) to scope rate-limiting per-user.
- Add validation (e.g., `express-validator`) for request bodies.
- Add unit and integration tests (Jest / Supertest) for the backend.

---

## ☁️ Deployment Notes

- For backend hosting consider: Render, Railway, Heroku (deprecated on free tier), Fly.io, or DigitalOcean App Platform.
- For frontend hosting consider: Vercel, Netlify, or static hosting from a CDN.
- Before deploying, set environment variables on your host (MongoDB URI, Upstash vars, `PORT`). Also update CORS origins from `http://localhost:5173` to your production frontend URL.

---

## 📚 External Links

- Express: https://expressjs.com/
- Mongoose: https://mongoosejs.com/
- MongoDB Atlas: https://www.mongodb.com/cloud/atlas
- Upstash Redis: https://upstash.com/
- Vite: https://vitejs.dev/
- React: https://reactjs.org/

---

## 🤝 Contributing

Contributions are welcome. If you'd like to add a feature or fix a bug, please open an issue or send a pull request with a clear explanation and tests when applicable.

---