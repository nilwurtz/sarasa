import { FileDriver } from '@/driver/FileDriver';
import { FilePort } from '@/port/FilePort';

export class FileGateway implements FilePort {
  constructor(readonly fileDriver: FileDriver) {}
  async readBase64(path: string) {
    return await this.fileDriver.read(path, { encoding: "utf-8" });
  }
  save(path: string, body: Buffer) {
    this.fileDriver.save(path, body);
  }
}
