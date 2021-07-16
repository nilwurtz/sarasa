import path from "path";

export class FilePath {
  constructor(readonly value: string) {}
  fileNameWithoutExtention() {
    const fileName = this.fileName();
    if (fileName.match(".") === null) return fileName;
    return fileName.split(".")[0];
  }
  fileName() {
    return path.basename(this.value);
  }
  dir() {
    return path.dirname(this.value);
  }
}
