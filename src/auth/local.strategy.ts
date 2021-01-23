// เอาไว้สำหรับ implement ValidateUSer และ User Password

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    
    //สำหรับบอกว่ามีการเรียกใช้ authService
    constructor(private authService: AuthService) {
      super();
      //extend มาจาก class อื่นต้องทำการเรียก super
  }

  async validate(username: string, password: string): Promise<any> {

      const user = await this.authService.validateUser(username, password);

      if(!user){
          throw new UnauthorizedException();
      }
      return user;
  }
}
