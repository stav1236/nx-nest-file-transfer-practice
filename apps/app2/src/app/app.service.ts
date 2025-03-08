import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  logBase64(base64: string) {
    this.logger.log(`Received Base64 String: ${base64}`);
  }
}
