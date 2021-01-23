import { ClipBoard } from '@/domain/ClipBoard';
import { ClipBoardDriver } from '@/driver/ClipBoardDriver';

import { ClipBoardGateway } from '../ClipBoardGateway';

describe("ClipBoardGateway", () => {
  describe("getClipBoard", () => {
    it("ClipBoardを返す", () => {
      const driver = {} as ClipBoardDriver;
      const getClipBoard = jest.fn().mockReturnValue("string");
      driver.getClipBoard = getClipBoard;
      const target = new ClipBoardGateway(driver);

      expect(target.getClipBoard()).toBeInstanceOf(ClipBoard);
    });
  });
});
