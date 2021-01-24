import { FilePath } from '@/domain/FilePath';
import { ImageFile } from '@/domain/ImageFile';
import { FilePort } from '@/port/FilePort';

import { FileUsecase } from '../FileUsecase';

describe("FileUsecase", () => {
  describe("saveImageFile", () => {
    it("filePort.saveが１回呼ばれる", () => {
      const port = {} as FilePort;
      const save = jest.fn();
      port.save = save;

      const image = {} as ImageFile;
      const buffer = {} as Buffer;
      image.getBuffer = jest.fn().mockReturnValue(buffer);
      image.getExtention = jest.fn().mockReturnValue("png");

      const targetPath = "/tmp/sample.png";
      const filePath = new FilePath(targetPath);
      const target = new FileUsecase(port);

      target.saveImageFile(image, filePath);
      expect(save.mock.calls.length).toBe(1);
      expect(save.mock.calls[0][0]).toBe(targetPath);
      expect(save.mock.calls[0][1]).toBe(buffer);
    });

    it("filePort.saveに失敗したら、例外を投げる", () => {
      const port = {} as FilePort;
      const save = jest.fn().mockImplementation(() => {
        throw new Error("");
      });
      port.save = save;

      const image = {} as ImageFile;
      const filePath = {} as FilePath;
      const target = new FileUsecase(port);

      expect(() => target.saveImageFile(image, filePath)).toThrow(Error);
    });
  });
  describe("getBase64File", () => {
    it("ImageFileを返す", async () => {
      const port = {} as FilePort;
      const validString = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgA";
      const readBase64 = jest.fn().mockResolvedValue(validString);
      port.readBase64 = readBase64;
      const target = new FileUsecase(port);

      const actual = await target.getBase64File("");
      expect(actual).toBeInstanceOf(ImageFile);
    });
  });
});
