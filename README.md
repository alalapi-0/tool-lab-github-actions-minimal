# tool-lab-github-actions-minimal

用 **GitHub Actions** 在每次 **push / Pull Request** 时，于 GitHub 云端虚拟机自动执行 **`npm test`**——让你看见「CI = 持续集成检查」的最小形态。

## GitHub Actions 是什么

- 在仓库 `.github/workflows/*.yml` 里声明**触发条件**与**步骤**。
- 推送代码后，到 GitHub 仓库 **Actions** 标签页查看绿勾/红叉。

## 这个最小实验验证什么

- `src/greet.js` + `test/greet.test.js`：使用 **Node 内置 `node --test`**（不重复 Vitest 课程）。
- `.github/workflows/ci.yml`：`ubuntu-latest` 上 `npm ci` → `npm test`。

## 本地先跑通

```bash
cd tool-lab-github-actions-minimal
npm install   # 本仓库无第三方依赖，主要用于生成 package-lock 供 npm ci
npm test
```

应看到 **2 passing**（或类似通过统计）。

## 推送到 GitHub 后如何验收

1. 将本仓库 push 到 GitHub（见总目录 `README.md` 的 `gh repo create` 说明）。
2. 打开仓库 **Actions** → 选择 **CI** workflow → 查看最新一次 run 是否为绿色。

若你是 fork 后首次 push，Actions 可能需在仓库 **Settings → Actions** 中确认已启用。

## 常见失败原因

| 现象 | 可能原因 |
| --- | --- |
| CI 红叉、`npm ci` 失败 | 未提交 `package-lock.json` 或与 `package.json` 不同步 |
| 本地过、云端不过 | Node 版本差异；workflow 已固定 `22`，本地请尽量接近 |
| Actions 页为空 | 未 push 到 `main`，或 workflow 路径/文件名错误 |

## 安全注意事项

- **不要**在 workflow 里写明文密钥；应使用 GitHub **Secrets**。
- 本实验 workflow 仅跑测试，不部署、不访问第三方 API。

笔记：[`docs/NOTES.md`](./docs/NOTES.md)。
