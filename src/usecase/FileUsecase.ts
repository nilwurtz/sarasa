import { FilePath } from '@/domain/FilePath';
import { ImageFile } from '@/domain/ImageFile';
import { FilePort } from '@/port/FilePort';

export class FileUsecase {
  constructor(readonly filePort: FilePort) {}
  saveImageFile(image: ImageFile, filePath: FilePath) {
    this.filePort.save(filePath.value, image.getBuffer());
  }
  async getBase64File(path: string) {
    const body = await this.filePort.readBase64(path);
    return new ImageFile(body);
  }
}
