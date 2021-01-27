import { CityModule } from './../city/city.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, forwardRef } from '@nestjs/common';
import { StationService } from './station.service';
import { StationResolver } from './station.resolver';
import { StationModel } from './station.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([StationModel]),
    forwardRef(() => CityModule),
  ],
  providers: [StationService, StationResolver],
  exports: [StationService],
})
export class StationModule {}
