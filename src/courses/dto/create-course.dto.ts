import { IsNotEmpty } from "class-validator";

//คลาสสำหรับส่งข้อมูลไปยัง courseService
export class CreateCourseDto {

    number: string;

    @IsNotEmpty()
    title: string;
    
}