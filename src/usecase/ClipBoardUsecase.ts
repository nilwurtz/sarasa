import { ClipBoardPort } from '../port/ClipBoardPort';

export class ClipBoardUsecase {
  constructor(readonly clipBoardPort: ClipBoardPort) {}
  getClipBoard() {
    const clipBoard = this.clipBoardPort.getClipBoard();
    if (clipBoard.isEmpty()) throw new Error("No value on clipboard.");
    return clipBoard;
  }
}
