# 学习笔记（NOTES）

## 为什么用 `npm ci` 而不是 `npm install`

CI 环境要求**可重复**：`npm ci` 严格按 `package-lock.json` 安装，锁文件缺失时会直接失败——逼你在本地先 `npm install` 并提交 lock。

## `on: push` 与 `pull_request`

- **push**：你往 `main` 推代码时跑。
- **pull_request**：别人（或你自己）开 PR 时也会跑，防止合入坏代码。

## 与 Vitest / Playwright 的分工

本仓库刻意用 Node 内置测试，避免 CI 还要下载 Playwright 浏览器。真实项目里可在 workflow 增加 `npm run test:e2e` 等 job，并拆分并行。
