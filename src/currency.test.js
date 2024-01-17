import { handleCurrency } from "./currency";
import { it, expect } from "vitest";

it('has a dollar before its number', () => {
  const resultA =  handleCurrency(1);
  expect(resultA).toBe('$1')
  const resultB =  handleCurrency(12);
  expect(resultB).toBe('$12')
})
