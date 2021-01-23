import { ImageFile } from '../ImageFile';

const validString = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgA";

describe("ImageFile", () => {
  describe("constructor", () => {
    it("Valid base64 value", () => {
      expect(() => new ImageFile(validString)).not.toThrow(Error);
    });
    it("Invalid value", () => {
      const invalidString = "text";
      expect(() => new ImageFile(invalidString)).toThrow(Error);
    });
  });
  describe("data", () => {
    it("returns data string", () => {
      const target = new ImageFile(validString);
      expect(target.data()).toBe("iVBORw0KGgoAAAANSUhEUgA");
    });
  });
  describe("getBuffer", () => {
    it("returns buffer", () => {
      const target = new ImageFile(validString);
      expect(target.getBuffer()).toBeInstanceOf(Buffer);
    });
  });
  describe("getExtention", () => {
    it("returns extention", () => {
      const target = new ImageFile(validString);
      expect(target.getExtention()).toBe("png");
    });
  });
});
