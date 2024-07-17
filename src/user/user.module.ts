import { Module } from '@nestjs/common';
import { UserConrtoller } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './repo/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './enetit/userentit';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';

@Module({
    controllers: [UserConrtoller],
    providers: [UserService,UserRepository,JwtService],
    imports:[TypeOrmModule.forFeature([UserEntity]),
    JwtModule.register({
      global: true,
      secret: 'iuiuiuhhiuhiuhiuh',
      signOptions: { expiresIn: '6000s' },

    })
  ]
  })
  export class UserModule {}
