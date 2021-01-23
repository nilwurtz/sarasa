import { ClipBoard } from '@/domain/ClipBoard';
import { ImageFile } from '@/domain/ImageFile';

export class ImageUsecase {
  toImage(clipBoard: ClipBoard) {
    const imageFile = new ImageFile(clipBoard.value);
    return imageFile;
  }
}
