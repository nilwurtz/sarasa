import { ClipBoard } from '@/domain/ClipBoard';
import { ImageFile } from '@/domain/ImageFIle';

export class ImageUsecase {
  toImage(clipBoard: ClipBoard) {
    const imageFile = new ImageFile(clipBoard.value);
    return imageFile;
  }
}
