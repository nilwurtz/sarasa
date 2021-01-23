import { ClipBoard } from '../domain/ClipBoard';

export interface ClipBoardPort {
  getClipBoard(): ClipBoard;
}
