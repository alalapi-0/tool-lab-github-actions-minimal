#!/usr/bin/env node
/**
 * CI 占位脚本：`npm test` 在流水线里跑一次即可打印 Node 版本并正常退出。
 * 真实项目的 test 常会换成 lint / vitest / build。
 */
console.log('[ci-smoke]', 'Node:', process.version, '| platform:', process.platform);
process.exit(0);
