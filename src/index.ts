import { ClipBoardDriver } from './driver/ClipBoardDriver';
import { FileDriver } from './driver/FileDriver';
import { ClipBoardGateway } from './gateway/ClipBoardGateway';
import { FileGateway } from './gateway/FileGateway';
import { ClipBoardUsecase } from './usecase/ClipBoardUsecase';
import { FileUsecase } from './usecase/FileUsecase';
import { ImageUsecase } from './usecase/ImageUsecase';

const clipBoardResource = new ClipBoardUsecase(
  new ClipBoardGateway(new ClipBoardDriver())
);
const imageResource = new ImageUsecase();
const fileResource = new FileUsecase(new FileGateway(new FileDriver()));

const main = () => {
  const clipBoard = clipBoardResource.getClipBoard();
  const image = imageResource.toImage(clipBoard);
  fileResource.saveImageFile(image);
};

main();
