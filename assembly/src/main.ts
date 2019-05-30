/**
 * Some example calculation which you might offload for performance.
 */
export function calculate(x: i32, y: i32): i32 {
  let result: i32 = 0;
  for (let i: i32 = 0; i < y; i++) {
    result += x * i / y;
  }
  return result;
}
