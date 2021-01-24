import { StationModule } from './../station/station.module';
import { CityModel } from './city.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, forwardRef } from '@nestjs/common';
import { CityService } from './city.service';
import { CityResolver } from './city.resolver';

@Module({
  imports: [
    forwardRef(() => StationModule),
    TypeOrmModule.forFeature([CityModel]),
  ],
  providers: [CityService, CityResolver],
  exports: [CityService],
})
export class CityModule {}
