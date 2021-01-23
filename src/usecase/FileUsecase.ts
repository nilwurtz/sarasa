import { ImageFile } from '@/domain/ImageFile';
import { FilePort } from '@/port/FilePort';

export class FileUsecase {
  constructor(readonly filePort: FilePort) {}
  saveImageFile(image: ImageFile) {
    this.filePort.save(
      `/tmp/sample.${image.getExtention()}`,
      image.getBuffer()
    );
  }
}
