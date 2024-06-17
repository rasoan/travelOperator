import { Module } from '@nestjs/common';
import { HotelsModule } from './hotels/hotels.module';
import { MongooseModule } from '@nestjs/mongoose';

const dbUri = process.env['DB_URI'] ?? 'mongodb://127.0.0.1/traveloperatorDB';

@Module({
  imports: [
    MongooseModule.forRoot(dbUri),
    HotelsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
