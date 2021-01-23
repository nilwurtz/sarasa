import { paste } from 'copy-paste';

export class ClipBoardDriver {
  getClipBoard() {
    return paste();
  }
}
