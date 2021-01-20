import { Body, Controller, Get, Post } from '@nestjs/common';
import { CoursesService } from './courses.service';
import Course from './course.entity'
import { CreateCourseDto } from './dto/create-course.dto';


// เป็นคลาสที่ให้บริการ resource ต่าง ๆ
@Controller('courses')
export class CoursesController {
    constructor(private coursesService: CoursesService) {}

    @Get()
     async findAll() : Promise<Course[]> {
         return this.coursesService.findAll();
     }

     @Post()
     async create(@Body() createCourseDto : CreateCourseDto){
         const course = this.coursesService.create(createCourseDto);
     } 
 
}


