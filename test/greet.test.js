import assert from 'node:assert/strict';
import { test } from 'node:test';
import { greet } from '../src/greet.js';

test('greet 返回问候语', () => {
  assert.equal(greet('Ryo'), 'Hello Ryo');
});

test('greet 拒绝空名字', () => {
  assert.throws(() => greet('   '), /name 必须是非空字符串/);
});
