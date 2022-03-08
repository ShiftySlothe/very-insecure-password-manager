import { XORKeys } from "../createKey";

test("XOR Keys: Buffers of different length throw error", () => {
  const a = Buffer.from("1");
  const b = Buffer.from("123456789101112131415");
  expect(() => XORKeys(a, b)).toThrowError();
});

test("XORKeys: XORS Buffers", () => {
  const a = Buffer.from("00ff0f", "hex");
  const b = Buffer.from("0f0f0f", "hex");
  const expected = "0ff000";

  console.log("result", XORKeys(a, b).toString("hex"));
  expect(XORKeys(a, b).toString("hex")).toEqual(expected);
});
