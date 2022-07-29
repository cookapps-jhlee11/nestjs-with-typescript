import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        //console.log(req);
        return this.appService.getHello();
    }


    @Get('hello/:term')
    sampleRoute(@Param('term') term: string): string {
        return `your term: ${term}`;
    }
}
