import { Controller, Get, Post, Request } from '@nestjs/common';
import { AppService } from './app.service';

// เป็นคลาสที่ให้บริการ resource ต่าง ๆ
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('auth/login')
  async login(@Request() req){
    return req.user;
  }
}

//Guards คือจะป้องกัน requset ที่เราไม่ต้องการไว้เช่นถ้าเราใส่ Guard ไว้เราต้องมี token ทุกครั้งเวลาเข้าถึง Guards 