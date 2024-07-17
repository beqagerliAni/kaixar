import { Module } from '@nestjs/common';
import { UserConrtoller } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './repo/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './enetit/userentit';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/gurad/gurad';

@Module({
    controllers: [UserConrtoller],
    providers: [UserService,UserRepository,JwtService, 
      {
        provide: APP_GUARD,
        useClass: AuthGuard,
      },
    ],
    imports:[TypeOrmModule.forFeature([UserEntity]),
    JwtModule.register({
      global: true,
      secret: 'iuiuiuhhiuhiuhiuh',
      signOptions: { expiresIn: '6000s' },

    })
  ]
  })
  export class UserModule {}
