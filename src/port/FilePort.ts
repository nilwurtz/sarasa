export interface FilePort {
  save(path: string, body: Buffer): void;
}
