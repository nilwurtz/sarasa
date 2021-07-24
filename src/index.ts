import { FilePath } from "./domain/FilePath";
import { FileDriver } from "./driver/FileDriver";
import { FileGateway } from "./gateway/FileGateway";
import { FileUsecase } from "./usecase/FileUsecase";
import { PathUsecase } from "./usecase/PathUsecase";

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
