import {
  Controller,
  Get,
  Inject,
  OnApplicationBootstrap,
  Post,
  Render,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController implements OnApplicationBootstrap {
  constructor(@Inject('TEST') private readonly client: ClientProxy) {}

  async onApplicationBootstrap() {
    await this.client.connect();
  }

  @Get()
  @Render('index')
  @Get()
  @Render('index')
  root() {
    this.client.emit<any>('message_printed', { text: 'Hello Worsdsdld' });
    return { message: 'Hello world!' };
  }

  @Post('feed')
  postMessage() {
    this.client.emit<any>('message_printed', { text: 'Hello World' });
    return 'Hello World printed';
  }
}
