import { FilePath } from '@/domain/FilePath';
import { ImageFile } from '@/domain/ImageFile';

import { PathUsecase } from '../PathUsecase';

describe("PathUsecase", () => {
  describe("getTargetPath", () => {
    it("ImageFileとFilePathからFilePathを返す", () => {
      const imageFile = {} as ImageFile;
      const ext = "png";
      imageFile.getExtention = jest.fn().mockReturnValue(ext);

      const filePath = {} as FilePath;
      const name = "name";
      const dirName = "/home/user/tmp";
      filePath.fileNameWithoutExtention = jest.fn().mockReturnValue(name);
      filePath.dir = jest.fn().mockReturnValue(dirName);

      const actual = new PathUsecase().getTargetPath(imageFile, filePath);
      expect(actual).toBeInstanceOf(FilePath);
      expect(actual.dir()).toBe(dirName);
      expect(actual.fileName()).toBe(name + "." + ext);
      expect(actual.fileNameWithoutExtention()).toBe(name);
    });
  });
});
