'use strict';

import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateHotelDTO } from './dto/createHotel.dto';
import { HotelsService } from './hotels.service';

@Controller()
export class HotelsController {
  constructor(private readonly hotelsService: HotelsService) {}

  @Get('hotelsList')
  getHotelsList() {
    return this.hotelsService.getHotelsList();
  }

  @Post('addHotel')
  @UsePipes(new ValidationPipe())
  addHotel(@Body() addHotelDto: CreateHotelDTO) {
    return this.hotelsService.addHotel(addHotelDto);
  }
}
