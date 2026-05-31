/**
 * 最小问候函数：供 Node 内置 test runner 与 GitHub Actions CI 使用。
 */
export function greet(name) {
  if (typeof name !== 'string' || name.trim().length === 0) {
    throw new Error('name 必须是非空字符串');
  }
  return `Hello ${name.trim()}`;
}
