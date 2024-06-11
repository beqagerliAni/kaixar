import { Module } from "@nestjs/common";
import { MeetingConrtroller } from "./meeting.controller";
import { MeetingService } from "./meeting.service";

@Module({
    
    providers:[MeetingService],
    controllers: [MeetingConrtroller]
})
export class MeetingModule{}