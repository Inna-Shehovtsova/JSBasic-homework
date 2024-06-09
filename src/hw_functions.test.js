import {
  sum,
  mul,
  strLengthSum,
  maximum,
  mothFromIndex,
  squareInSircle,
} from "./hw_functions";

describe("Sum", () => {
  it("return sum of two numbers", () => {
    expect(sum(1, 2)).toEqual(3);
  });
  it("return sum of two numbers", () => {
    expect(sum(-1, 0)).toEqual(-1);
  });
  it("return sum of two numbers", () => {
    expect(sum(0, 0)).toEqual(0);
  });
  it("return sum of two numbers", () => {
    expect(sum(-2, 2)).toEqual(0);
  });
});

describe("Mul", () => {
  it("return multiple of two numbers", () => {
    expect(mul(1, 2)).toEqual(2);
  });
  it("return multiple of two numbers", () => {
    expect(mul(-1, 0)).toEqual(-0);
  });
  it("return multiple of two numbers", () => {
    expect(mul(1, 0)).toEqual(0);
  });
  it("return multiple of two numbers", () => {
    expect(mul(0, 0)).toEqual(0);
  });
  it("return multiple of two numbers", () => {
    expect(mul(-2, 2)).toEqual(-4);
  });
});

describe("Sum two strings length", () => {
  it("return sum of str len", () => {
    expect(strLengthSum("", "")).toEqual(0);
  });
  it("return sum of str len", () => {
    expect(strLengthSum("a", "")).toEqual(1);
  });
  it("return sum of str len", () => {
    expect(strLengthSum("a", "b")).toEqual(2);
  });
  it("return sum of str len", () => {
    expect(strLengthSum("test", "test case")).toEqual(13);
  });
});

describe("maximum", () => {
  it("return max of two numbers", () => {
    expect(maximum(1, 2)).toEqual(2);
  });
  it("return max of two numbers", () => {
    expect(maximum(-1, 0)).toEqual(0);
  });
  it("return max of two numbers", () => {
    expect(maximum(1, 0)).toEqual(1);
  });
  it("return max of two numbers", () => {
    expect(maximum(110, 110)).toEqual(110);
  });
  it("return max of two numbers", () => {
    expect(maximum(2, -2)).toEqual(2);
  });
});

describe("Name of Month", () => {
  it("return month name from index 1", () => {
    expect(mothFromIndex(1)).toEqual("January");
  });
  it("return month name from index 12", () => {
    expect(mothFromIndex(12)).toEqual("December");
  });
  it("return month name from index 0", () => {
    expect(() => {
      mothFromIndex(0);
    }).toThrow(Error);
  });
  it("return month name from index 110", () => {
    expect(() => {
      mothFromIndex(110);
    }).toThrow("Month index must be in 1-12!");
  });
  it("return month name from index 13", () => {
    expect(() => {
      mothFromIndex(13);
    }).toThrow(new Error("Month index must be in 1-12!"));
  });
});

describe("Can square to be in circle", () => {
  it("return if sircle 1 can be in square 10", () => {
    expect(squareInSircle(10, 1)).toBeTruthy();
  });
  it("return if sircle 10 can be in square 1", () => {
    expect(squareInSircle(1, 10)).toBeFalsy();
  });
  it("return if sircle 5  can be in square 4", () => {
    expect(squareInSircle(4, 5)).toBeTruthy();
  });
});
