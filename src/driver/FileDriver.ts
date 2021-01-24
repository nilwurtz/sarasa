import { OpenMode } from 'fs';
import { readFile, writeFile } from 'fs/promises';

export class FileDriver {
  async read(
    path: string,
    options?: { encoding?: BufferEncoding; flag?: OpenMode }
  ) {
    try {
      const buffer = await readFile(path, options);
      return buffer.toString();
    } catch {
      throw new Error(`Cannot read file: ${path}`);
    }
  }
  save(path: string, body: Buffer) {
    writeFile(path, body)
      .then(() => console.log(`File saved: ${path}`))
      .catch((e) => {
        throw new Error(e);
      });
  }
}
