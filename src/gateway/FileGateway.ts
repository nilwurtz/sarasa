import { FileDriver } from '@/driver/FileDriver';
import { FilePort } from '@/port/FilePort';

export class FileGateway implements FilePort {
  constructor(readonly fileDriver: FileDriver) {}
  save(path: string, body: Buffer) {
    this.fileDriver.save(path, body);
  }
}
