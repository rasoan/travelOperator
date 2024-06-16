'use strict';

import { Injectable } from '@nestjs/common';
import { CreateHotelDTO } from './dto/createHotel.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Hotel } from '../schemas/Hotel.schema';
import { Model } from 'mongoose';

@Injectable()
export class HotelsService {
  constructor(@InjectModel(Hotel.name) private hotelModel: Model<Hotel>) {}

  getHotelsList() {
    return this.hotelModel.find();
  }

  public async addHotel(addHotelDto: CreateHotelDTO) {
    const newHotel = new this.hotelModel(addHotelDto);
    const savedNewHotel = await newHotel.save();

    return `added hotel ${JSON.stringify(savedNewHotel)}!`;
  }
}
