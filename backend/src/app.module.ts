import { Module } from '@nestjs/common';
import { HotelsModule } from './hotels/hotels.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://127.0.0.1/traveloperatorDB`),
    HotelsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
