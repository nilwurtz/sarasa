export class ImageFile {
  private pattern: RegExp;
  constructor(readonly value: string) {
    this.pattern = /^data:\w+\/\w+;base64,/;
    if (value.match(this.pattern) === null)
      throw new Error(`Not supported value: "${value.slice(0, 50)}"`);
  }
  data() {
    return this.value.replace(this.pattern, "");
  }
  getBuffer() {
    return Buffer.from(this.data(), "base64");
  }
  getExtention() {
    return this.value
      .toString()
      .slice(this.value.indexOf("/") + 1, this.value.indexOf(";"));
  }
}
