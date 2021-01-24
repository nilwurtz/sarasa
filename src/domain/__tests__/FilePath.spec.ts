import path from 'path';

import { FilePath } from '../FilePath';

describe("FilePath", () => {
  describe("fileName", () => {
    it("fileNameを返す", () => {
      const fileName = "name.txt";
      const path = `/temp/${fileName}`;
      const target = new FilePath(path);

      expect(target.fileName()).toBe(fileName);
    });
  });
  describe("fileNameWithoutExtention", () => {
    it("nameを返す", () => {
      const name = "name";
      const path = `/home/user/${name}.txt`;
      const target = new FilePath(path);

      expect(target.fileNameWithoutExtention()).toBe(name);
    });
    it(".がない場合、Filenameをそのまま返す", () => {
      const name = "name";
      const path = `/home/user/${name}`;
      const target = new FilePath(path);

      expect(target.fileNameWithoutExtention()).toBe(name);
    });
  });
  describe("dir", () => {
    it("dirnameを返す", () => {
      const fileName = "name.txt";
      const dir = "/home/user";
      const fullPath = path.join(dir, fileName);
      const target = new FilePath(fullPath);

      expect(target.dir()).toBe(dir);
    });
  });
});
