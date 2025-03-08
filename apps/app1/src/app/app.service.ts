import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) { }

  async main(file: Express.Multer.File): Promise<{ message: string, base64: string }> {
    if (!file) {
      throw new Error('No file uploaded');
    }

    const base64String = file.buffer.toString('base64') as string;

    // Send Base64 string to Base64 Service
    const base64ServiceUrl = 'http://localhost:3001/api'; // Base64 service URL
    await this.httpService.post(base64ServiceUrl, { base64: base64String }).toPromise();

    return { message: 'File uploaded and converted to base64', base64: base64String };
  }
}
