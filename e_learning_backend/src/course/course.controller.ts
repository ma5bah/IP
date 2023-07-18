import {Body, Controller, Get, Post} from '@nestjs/common';
import {CourseService} from "./course.service";
import {CreateCourseDto} from "./dto/create_course.dto";
import {GetCourseDto} from "./dto/get_course.dto";

@Controller('course')
export class CourseController {
    constructor(private readonly courseService: CourseService) {
    }
    @Post("create_course")
    async createCourse(@Body() createCourseDto: CreateCourseDto) {
        return this.courseService.createCourse(createCourseDto);
    }
    @Get("get_all_courses")
    async get_all_courses() {
        return this.courseService.get_all_courses();
    }
    @Get("get_course")
    async get_course(@Body() getCourseDto: GetCourseDto) {
        return this.courseService.get_course(getCourseDto);
    }
}
