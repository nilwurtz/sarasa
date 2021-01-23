import { ClipBoard } from '../domain/ClipBoard';
import { ClipBoardDriver } from '../driver/ClipBoardDriver';
import { ClipBoardPort } from '../port/ClipBoardPort';

export class ClipBoardGateway implements ClipBoardPort {
  constructor(readonly clipBoardDriver: ClipBoardDriver) {}
  getClipBoard() {
    const pasted = this.clipBoardDriver.getClipBoard();
    return new ClipBoard(pasted);
  }
}
