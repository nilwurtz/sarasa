export class ClipBoard {
  constructor(readonly value: string) {}
  isEmpty() {
    return this.value === "";
  }
}
