# DECISIONS.md

Architecture and project decisions. Only decisions explicitly reflected in the repository or made in-session are recorded.

## 2026-08-01 Decision: Store face embeddings in PostgreSQL via pgvector

- Context: face-api.js produces 128-D face descriptors. `FaceEmbedding.vector` is declared `Unsupported("vector(128)")` in `backend/prisma/schema.prisma`, and all vector writes/searches use raw SQL — `prisma.$executeRaw` INSERT in `backend/src/services/face.service.ts` and `prisma.$queryRaw` with the `<->` distance operator in `backend/src/controllers/event.controllers.ts`.
- Decision: Use the pgvector extension in the same PostgreSQL database as application data rather than a separate vector store.
- Alternatives considered: Not recorded in repository (no other vector store referenced anywhere).

## 2026-08-01 Decision: Server-side face detection with bundled face-api.js models

- Context: `backend/models/` ships `ssd_mobilenetv1`, `face_landmark_68`, and `face_recognition` weights; `backend/src/services/face.service.ts` monkey-patches node-canvas classes into face-api's env, loads the models from disk once at startup (`loadModels()` in `server.ts`), and runs detection during upload and search.
- Decision: Run face detection and embedding extraction server-side in Node.js.
- Alternatives considered: Not recorded in repository (no client-side inference exists in the code).

## 2026-08-01 Decision: Guest access via unauthenticated share tokens

- Context: `event` has a unique `shareToken`; `GET /api/events/share/:shareToken` and `POST /api/events/share/:shareToken/search` carry no auth middleware (`backend/src/routes/event.routes.ts`), and the frontend exposes a public `/share/:shareToken` route (`frontend/src/App.tsx`).
- Decision: Guests search and view galleries through share links without creating an account.
- Alternatives considered: Not recorded in repository.

## 2026-08-01 Decision: Local disk storage served statically

- Context: Multer `diskStorage` writes to `uploads/` (`backend/src/middlewares/upload.middleware.ts`), `app.use("/uploads", express.static(...))` serves them, and the DB stores absolute URLs built from `req.protocol`/`req.get('host')` (e.g. `backend/src/controllers/event.controllers.ts`).
- Decision: Store uploaded files on local disk and serve them statically over HTTP.
- Alternatives considered: Not recorded in repository (no cloud storage integration present).

## 2026-08-01 Decision: JWT + bcrypt authentication

- Context: `backend/src/controllers/user.controllers.ts` hashes passwords with `bcrypt.hash(password, 10)` and signs JWTs with `jwt.sign({ id }, JWT_SECRET, { expiresIn: '7d' })`; `backend/src/middlewares/authMiddleware.ts` verifies the Bearer token and sets `res.locals.userId`. JWT is stored in localStorage on the frontend (`frontend/src/utils/auth.ts`).
- Decision: Use JWT bearer tokens in the Authorization header and bcrypt-hashed passwords.
- Alternatives considered: Not recorded in repository.

## 2026-08-01 Decision: Zod validation middleware on auth routes

- Context: `backend/src/middlewares/inputValidation.ts` defines `userSignUpSchema`, `userLogInSchema`, and a `validateInput(schema)` factory; it is wired into `POST /user/signup` and `POST /user/login` only.
- Decision: Validate request bodies with a reusable Zod middleware factory, currently scoped to auth routes.
- Alternatives considered: Not recorded in repository (no other validation approach in the codebase).

## 2026-08-01 Decision: Cross-agent context files (AGENTS.md, PROGRESS.md, DECISIONS.md)

- Context: Task requested a lightweight cross-agent context system; no AGENTS.md, PROGRESS.md, or DECISIONS.md existed in the repository.
- Decision: Create the three root-level files following the specified formats, documenting only what is observable in the repository and the decisions made in this session. No new tooling was introduced.
- Alternatives considered:
  - A single combined handoff document — rejected to keep the three responsibilities (standing context, running log, decision record) separate and idiomatic.
  - Adding tooling configs (CI, tests, formatter, backend ESLint) now — rejected because the task asked to detect existing tooling only and to ask the user before adding any.
