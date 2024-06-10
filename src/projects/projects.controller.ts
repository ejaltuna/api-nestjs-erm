import { Controller, Get } from '@nestjs/common';

@Controller({})
export class ProjectsController {

    @Get('/projects')
    getAllProjects(){
        return 'Obtener todas la pryectos.'
    }
}
