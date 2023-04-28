// import { PassportStrategy } from '@nestjs/passport';
// import { Injectable } from '@nestjs/common';
// import { ExtractJwt, Strategy } from 'passport-jwt';
// import { jwtConstants } from '../constants';
// import { AuthService } from '../auth.service';

// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {
//   constructor(private authService: AuthService) {
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // ExtractJwt.fromAuthHeaderWithScheme('Token')
//       igonoreExpiration: false,
//       secretOrKey: jwtConstants.secret,
//     });
//   }
//   async validate(payload: any) {
//     return this.authService.validateUserById(payload.sub);
//   }
// }
