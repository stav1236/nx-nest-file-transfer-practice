import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';

import { libsMylib } from '@my-workspace/libs/mylib'
import { AppService } from './app.service';
import { ApiBody, ApiConsumes, ApiOperation } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  @ApiOperation({ summary: 'Upload a file and convert it to Base64' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  main(@UploadedFile() file: Express.Multer.File): Promise<{ message: string; base64: string; }> {
    return this.appService.main(file);
  }

  @Get()
  libTest() {
    return libsMylib();
  }
}
