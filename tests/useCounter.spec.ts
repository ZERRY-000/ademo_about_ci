import { renderHook, act } from "@testing-library/react";
import useCounter from "../src/hooks/features/homepage/useCounter";

describe("useCounter", () => {
  it("should initialize count to 0", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  it("should initialize val to 1", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.val).toBe(1);
  });

  it("should increment count by val", () => {
    const { result, rerender } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    rerender();
    expect(result.current.count).toBe(1);
  });

  it("should update val and increment by new val", () => {
    const { result, rerender } = renderHook(() => useCounter());
    act(() => {
      result.current.setVal(5);
    });
    rerender();
    act(() => {
      result.current.increment();
    });
    rerender();
    expect(result.current.count).toBe(5);
  });

  it("should accumulate count with multiple increments", () => {
    const { result, rerender } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
      result.current.increment();
    });
    rerender();
    expect(result.current.count).toBe(2);
  });
});
