import { FilePath } from './domain/FilePath';
import { ClipBoardDriver } from './driver/ClipBoardDriver';
import { FileDriver } from './driver/FileDriver';
import { ClipBoardGateway } from './gateway/ClipBoardGateway';
import { FileGateway } from './gateway/FileGateway';
import { ClipBoardUsecase } from './usecase/ClipBoardUsecase';
import { FileUsecase } from './usecase/FileUsecase';
import { ImageUsecase } from './usecase/ImageUsecase';
import { PathUsecase } from './usecase/PathUsecase';

const clipBoardResource = new ClipBoardUsecase(
  new ClipBoardGateway(new ClipBoardDriver())
);
const imageResource = new ImageUsecase();
const pathResource = new PathUsecase();
const fileResource = new FileUsecase(new FileGateway(new FileDriver()));

const main = () => {
  const input = process.argv[2];
  if (input === undefined) {
    throw new Error("TargetFile must have provided.");
  }
  const filePath = new FilePath(input);

  fileResource
    .getBase64File(filePath.value)
    .then((image) => {
      const targetPath = pathResource.getTargetPath(image, filePath);
      fileResource.saveImageFile(image, targetPath);
    })
    .catch((e) => console.error(e));
};

main();
