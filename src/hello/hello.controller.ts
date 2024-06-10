import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller({})
export class HelloController {

    @Get('/hello')
    index(@Req() request:Request, @Res() response: Response){
        console.log(request.url,'URL CONSOLA')
        response.status(200).json({
            mensaje:'hello word'
        })
    }


}
