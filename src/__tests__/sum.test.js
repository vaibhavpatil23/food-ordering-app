// import { sum } from "../sum";
import { sum } from "../componant/sum";

test("sum function should calculate the sum of two number", () => {
  const result = sum(7, 4);

  expect(result).toBe(11);
});
