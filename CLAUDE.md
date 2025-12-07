# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev      # 개발 서버 실행 (localhost:3000)
yarn build    # 프로덕션 빌드
yarn start    # 프로덕션 서버 실행
yarn lint     # ESLint 실행
```

## Tech Stack

- Next.js 16 (App Router, React 19)
- TypeScript (strict mode)
- Tailwind CSS v4 (CSS-first 설정, `@theme` 지시어 사용)
- shadcn/ui (new-york 스타일, Radix UI 기반)
- Pretendard 폰트 (로컬 variable font)

## Architecture

- `app/` - Next.js App Router 페이지 및 레이아웃
- `app/_components/` - 앱 전용 컴포넌트 (Navigation 등)
- `components/ui/` - shadcn/ui 컴포넌트
- `lib/utils.ts` - `cn()` 유틸리티 (clsx + tailwind-merge)
- `hooks/` - 커스텀 훅 (`useIsMobile` 등)

## Conventions

- 경로 별칭: `@/*` → 프로젝트 루트
- shadcn/ui 컴포넌트 추가: `npx shadcn@latest add <component>`
- Tailwind 설정은 `app/globals.css`의 `@theme inline` 블록에서 관리
