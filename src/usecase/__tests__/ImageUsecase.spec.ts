import { ClipBoard } from '@/domain/ClipBoard';
import { ImageFile } from '@/domain/ImageFile';

import { ImageUsecase } from '../ImageUsecase';

describe("ImageUsecase", () => {
  describe("toImage", () => {
    it("ImageFileを返す", () => {
      const clipBoard = new ClipBoard(
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgA"
      );
      const target = new ImageUsecase();

      const actual = target.toImage(clipBoard);
      expect(actual).toBeInstanceOf(ImageFile);
    });
  });
});
