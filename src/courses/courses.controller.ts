import { Controller, Get } from '@nestjs/common';
import { CoursesService } from './courses.service';
import Course from './course.entity'


// เป็นคลาสที่ให้บริการ resource ต่าง ๆ
@Controller('courses')
export class CoursesController {
    constructor(private coursesService: CoursesService) {}

    @Get()
     async findAll() : Promise<Course[]> {
         return this.coursesService.findAll();
     }
 
}
