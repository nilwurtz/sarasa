import { ClipBoard } from '@/domain/ClipBoard';
import { ImageFile } from '@/domain/ImageFIle';

import { ImageUsecase } from '../ImageUsecase';

describe("ImageUsecase", () => {
  describe("toImage", () => {
    it("ImageFileを返す", () => {
      const clipBoard = {} as ClipBoard;
      const target = new ImageUsecase();

      const actual = target.toImage(clipBoard);
      expect(actual).toBeInstanceOf(ImageFile);
    });
  });
});
