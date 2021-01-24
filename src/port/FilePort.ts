export interface FilePort {
  readBase64(path: string): Promise<string>;
  save(path: string, body: Buffer): void;
}
