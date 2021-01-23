import { ClipBoard } from '../ClipBoard';

describe("ClipBoard", () => {
  it("ClipBoardを組み立てる", () => {
    const str = "test";
    const target = new ClipBoard(str);
    expect(target.value).toBe(str);
    expect(target.isEmpty()).toBe(false);
  });
  it("isEmptyのテスト", () => {
    const emptyStr = "";
    const target = new ClipBoard(emptyStr);
    expect(target.isEmpty()).toBe(true);
  });
});
