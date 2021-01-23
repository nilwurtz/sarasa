import { throws } from 'assert';

import { ClipBoardGateway } from '@/gateway/ClipBoardGateway';

import { ClipBoard } from '../../domain/ClipBoard';
import { ClipBoardUsecase } from '../ClipBoardUsecase';

describe("ClipBoardUsecase", () => {
  describe("getClipBoard", () => {
    describe("正常系", () => {
      it("returns ClipBoard instance", () => {
        const getClipBoard = jest.fn().mockReturnValue(new ClipBoard("text"));
        const port = {} as ClipBoardGateway;
        port.getClipBoard = getClipBoard;
        const target = new ClipBoardUsecase(port);

        const actual = target.getClipBoard();
        expect(actual).toBeInstanceOf(ClipBoard);
      });
    });
    describe("異常系", () => {
      it("Throws Error when empty clipboard", () => {
        const getClipBoard = jest.fn().mockReturnValue(new ClipBoard(""));
        const port = {} as ClipBoardGateway;
        port.getClipBoard = getClipBoard;
        const target = new ClipBoardUsecase(port);

        expect(() => target.getClipBoard()).toThrow(Error);
        expect(getClipBoard.mock.calls.length).toBe(1);
      });
    });
  });
});
