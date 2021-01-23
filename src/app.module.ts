import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CityResolver } from './city/city.resolver';
import { StationResolver } from './station/station.resolver';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CityResolver, StationResolver],
})
export class AppModule {}
