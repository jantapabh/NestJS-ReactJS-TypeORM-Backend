//Pipe

import { PipeTransform, Injectable, BadRequestException} from '@nestjs/common';
import { ObjectID } from 'mongodb';

@Injectable()
export class PaseObjectIdPipe implements PipeTransform<any, ObjectID> {
  public transform(value: any): ObjectID {
    try {
      const transformObjectId: ObjectID = ObjectID.createFromHexString(value);
      return transformObjectId;
    } catch (error) {
     throw new BadRequestException('Validation failed');
    }
  }
}
