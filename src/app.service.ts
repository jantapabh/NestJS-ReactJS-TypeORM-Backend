import { Injectable } from '@nestjs/common';

//เป็นบริการที่ให้
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
