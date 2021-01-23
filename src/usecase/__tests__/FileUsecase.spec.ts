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
      const target = new FileUsecase(port);

      target.saveImageFile(image);
      expect(save.mock.calls.length).toBe(1);
      expect(save.mock.calls[0][0]).toBe("/tmp/sample.png");
      expect(save.mock.calls[0][1]).toBe(buffer);
    });

    it("filePort.saveに失敗したら、例外を投げる", () => {
      const port = {} as FilePort;
      const save = jest.fn().mockImplementation(() => {
        throw new Error("");
      });
      port.save = save;
      const image = {} as ImageFile;
      const target = new FileUsecase(port);

      expect(() => target.saveImageFile(image)).toThrow(Error);
    });
  });
});
