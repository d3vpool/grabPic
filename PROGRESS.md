# PROGRESS.md

Cross-agent progress log. Read the latest entry first to pick up where work left off.

## 2026-08-01 - Kilo

- Done:
  - Initial state capture at the start of the cross-agent context setup.
  - Repository inspected: git history available (18 commits, latest `9e36859` "Improve frontend UI"); no AGENTS.md, PROGRESS.md, or DECISIONS.md existed before this session.
  - Feature set present: JWT signup/login, event CRUD + cover photos + visibility toggle, bulk image upload with server-side face indexing (face-api.js, 128-D embeddings via pgvector), selfie face search (private + public share-token), public share gallery, image deletion, frontend UI pages (MyEvents, EventDetails, CreateEvent, UploadPhotos, FindMyPhotos, PublicEvent, auth pages).
  - Tooling detected: ESLint (frontend only), npm as package manager, TypeScript strict in both projects. No tests, no CI, no formatter, no backend linting.
- Why:
  - Capture an accurate baseline of the project state so future agents can continue work without re-deriving context.
- Left to do:
  - Background/async face processing (current upload handler blocks on sequential detection).
  - pgvector HNSW/IVFFlat index on `FaceEmbedding.vector`.
  - Event delete cleanup (cascade images/embeddings/files; schema has no `onDelete` cascade and deletes can 500 on FK constraints).
  - Resolve `isPublic` default vs README "private by default" contradiction (share endpoints require `isPublic: true`).
  - Add `.env.example` files (README references them but none exist).
  - Align CORS default (`http://localhost:5174`) with the README's `5173`/actual Vite port.
  - Rate limiting/abuse protection on public selfie-search endpoint.
  - Automated tests (none exist); backend linting/config.
  - Roadmap items from README: cloud storage (S3/R2), BullMQ job queue, multiple face matches per event per search, email/SMS share delivery, admin dashboard with analytics.
- Open questions:
  - Is `isPublic` defaulting to `true` intentional, or should events default to private?
  - Should tooling (CI, tests, formatter, backend ESLint) be added? None was introduced in this session.

## 2026-08-01 - Kilo

- Done:
  - Created `AGENTS.md` at repo root: project overview, tech stack, key architecture decisions, coding conventions, folder structure, error handling style, testing approach, known gotchas, and tooling detection (frontend-only ESLint; no tests/CI/formatting/commit tooling detected).
  - Created `PROGRESS.md` at repo root (this file) with an initial state entry and this session entry.
  - Created `DECISIONS.md` at repo root documenting only decisions observable in the repository plus the decision made this session.
  - Verified no pre-existing context files or CI/formatting configs before writing.
- Why:
  - Set up a lightweight cross-agent context system so agents in separate sessions/tools can seamlessly continue each other's work.
- Left to do:
  - None for this task. All three files created; no source code changed.
- Open questions:
  - Whether to add any of the missing tooling (tests, CI, formatter, backend lint). Not added per instructions; ask before introducing.
