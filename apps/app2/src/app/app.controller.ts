import { Body, Controller } from '@nestjs/common';

import { AppService } from './app.service';
import { Post } from '@nestjs/common';
import { ApiBody, ApiOperation } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  @ApiOperation({ summary: 'Receive and log a Base64 string' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        base64: { type: 'string' },
      },
    },
  })
  receiveBase64(@Body('base64') base64: string) {
    if (!base64) {
      throw new Error('No Base64 string received');
    }

    this.appService.logBase64(base64);
    return { message: 'Base64 string received successfully' };
  }
}
