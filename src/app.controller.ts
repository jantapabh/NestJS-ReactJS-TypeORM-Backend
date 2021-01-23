import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth-guard';

// เป็นคลาสที่ให้บริการ resource ต่าง ๆ
@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private authService: AuthService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req){
    return this.authService.login(req.user)
  }
}

//Guards คือจะป้องกัน requset ที่เราไม่ต้องการไว้เช่นถ้าเราใส่ Guard ไว้เราต้องมี token ทุกครั้งเวลาเข้าถึง Guards 