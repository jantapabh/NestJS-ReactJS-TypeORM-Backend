import { Inject, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from "./contants";



@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){

    //แกะ token จาก request ของ client

    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret,
          });
    }

    async validate(payload: any){
        return {
            userId: payload.sub,
            username: payload.username
        };
    }
}