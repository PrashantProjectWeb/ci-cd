import { test } from "node:test";
import assert from "node:assert";
import { add } from "../src/app.js";
import os from "node:os";

test("add 2 + 3 = 5", () => {
  assert.strictEqual(add(2, 3), 5);
});

test("sirf windows par pass hoga", () => {
  assert.strictEqual(os.platform(), "win32");
})