import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const envVar = process.env.SAMPLE_VAR;
    console.log('Environment Variable test:', envVar);

    return 'Hello World!';
  }
}
