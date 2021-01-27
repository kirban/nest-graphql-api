import { CityModel } from './../city/city.model';
import { CityService } from './../city/city.service';
import { StationService } from './station.service';
import {
  Resolver,
  Query,
  Args,
  ResolveField,
  Parent,
  Mutation,
} from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { StationModel } from './station.model';
import { CreateStationDTO } from './station.dto';

@Resolver((of) => StationModel)
export class StationResolver {
  constructor(
    @Inject(StationService) private stationService: StationService,
    @Inject(CityService) private cityService: CityService,
  ) {}

  @Query(returns => StationModel)
  async station(@Args('id') id: string): Promise<StationModel> {
    return await this.stationService.findOne(id);
  }

  @ResolveField(returns => CityModel)
  async city(@Parent() station) {
    const { city } = station;
    return this.cityService.findOne(city);
  }

  @Query(returns => [StationModel])
  async stations(): Promise<StationModel[]> {
    return await this.stationService.findAll();
  }

  @Mutation(returns => StationModel)
  async createStation(
    @Args('station') station: CreateStationDTO,
  ): Promise<StationModel> {
    return await this.stationService.create(station);
  }
}
