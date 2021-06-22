import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('message_printed')
  async handleMessagePrinted(data: Record<string, unknown>) {
    console.log(data.text);
  }

  @EventPattern('message_printed')
  async handleMessagePrinted1(data: Record<string, unknown>) {
    console.log("1:", data.text);
  }
}
