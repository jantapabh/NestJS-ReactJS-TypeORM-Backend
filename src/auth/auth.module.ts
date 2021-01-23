import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import {AuthController} from './auth.controller'
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './contants';
import { JwtStrategy } from './jwt.strategy';


@Module({
  imports: [UsersModule, PassportModule,JwtModule.register(
    {
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: '60m'
      },
    }
  )],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}


//provider คือการบอกว่าให้คลาสอื่นใช้ได้ เช่น LocalStrategy