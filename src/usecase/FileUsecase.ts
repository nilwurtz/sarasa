import { FilePort } from '@/port/FilePort';

export class FileUsecase {
  constructor(readonly filePort: FilePort) {}
  saveImageFile(path: string, body: Buffer) {
    this.filePort.save(path, body);
  }
}
