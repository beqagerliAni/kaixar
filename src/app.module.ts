import { Module } from '@nestjs/common';
import { MeetingModule } from './meeting/meeting.module';

@Module({
  imports: [MeetingModule],
  controllers: [],
  providers: [ ],
})
export class AppModule {}