'use strict';

import { IsString } from 'class-validator';

export class CreateHotelDTO {
  @IsString()
  name: string;
  @IsString()
  country: string;
}
