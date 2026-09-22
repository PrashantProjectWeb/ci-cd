import { test } from "node:test";
import assert from "node:assert";
import { add } from "../src/app.js";


test("add 2 + 3 = 5", () => {
  assert.strictEqual(add(2, 3), 5);
});

