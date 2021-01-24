import path from 'path';

import { FilePath } from '@/domain/FilePath';
import { ImageFile } from '@/domain/ImageFile';

export class PathUsecase {
  getTargetPath(image: ImageFile, filePath: FilePath) {
    const fileName = `${filePath.fileNameWithoutExtention()}.${image.getExtention()}`;
    const targetPath = path.join(filePath.dir(), fileName);
    return new FilePath(targetPath);
  }
}
