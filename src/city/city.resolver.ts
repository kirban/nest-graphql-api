import { StationModel } from '../station/station.model';
import { StationService } from '../station/station.service';
import { CityModel } from './city.model';
import { CityService } from './city.service';
import {
  Resolver,
  Mutation,
  Args,
  Query,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Inject } from '@nestjs/common';

@Resolver((of) => CityModel)
export class CityResolver {
  constructor(
    @Inject(CityService) private cityService: CityService,
    @Inject(StationService) private stationService: StationService,
  ) {}

  @Query((returns) => CityModel)
  async customer(@Args('id') id: string): Promise<CityModel> {
    return await this.cityService.findOne(id);
  }

  @ResolveField((returns) => [StationModel])
  async stations(@Parent() city) {
    const { id } = city;
    console.log(city);
    return this.stationService.findByCity(id);
  }

  @Query((returns) => [CityModel])
  async cities(): Promise<CityModel[]> {
    return this.cityService.findAll();
  }

  @Mutation((returns) => CityModel)
  async createCity(
    @Args('name') name: string,
    @Args('phone', { nullable: true }) phone: string,
  ): Promise<CityModel> {
    return this.cityService.create({ name, phone });
  }
}
