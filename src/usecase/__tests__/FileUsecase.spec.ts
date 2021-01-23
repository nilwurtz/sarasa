import { FilePort } from '@/port/FilePort';

import { FileUsecase } from '../FileUsecase';

describe("FileUsecase", () => {
  describe("saveImageFile", () => {
    it("filePort.saveが１回呼ばれる", () => {
      const port = {} as FilePort;
      const save = jest.fn();
      port.save = save;
      const path = "/tmp/sample.png";
      const body = Buffer.from("");
      const target = new FileUsecase(port);

      target.saveImageFile(path, body);
      expect(save.mock.calls.length).toBe(1);
      expect(save.mock.calls[0][0]).toBe(path);
      expect(save.mock.calls[0][1]).toBe(body);
    });

    it("filePort.saveに失敗したら、例外を投げる", () => {
      const port = {} as FilePort;
      const save = jest.fn().mockImplementation(() => {
        throw new Error("");
      });
      port.save = save;
      const path = "/tmp/sample.png";
      const body = Buffer.from("");
      const target = new FileUsecase(port);

      expect(() => target.saveImageFile(path, body)).toThrow(Error);
      expect(save.mock.calls.length).toBe(1);
    });
  });
});
