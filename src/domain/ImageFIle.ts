export class ImageFile {
  private pattern: RegExp;
  constructor(readonly value: string) {
    this.pattern = /^data:\w+\/\w+;base64,/;
    if (value.match(this.pattern) === null)
      throw new Error("Not supported value.");
  }
  data() {
    return this.value.replace(this.pattern, "");
  }
  getBuffer() {
    return Buffer.from(this.data(), "base64");
  }
}
