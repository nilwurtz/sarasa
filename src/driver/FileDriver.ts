import { writeFile } from 'fs/promises';

export class FileDriver {
  save(path: string, body: Buffer) {
    writeFile(path, body).catch((e) => {
      throw new Error(e);
    });
  }
}
