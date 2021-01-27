import { CityService } from './../city/city.service';
import { StationModel } from './station.model';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStationDTO } from './station.dto';

@Injectable()
export class StationService {
  constructor(
    @InjectRepository(StationModel)
    private stationRepository: Repository<StationModel>,
    private cityService: CityService,
  ) {}

  async create(station: CreateStationDTO): Promise<StationModel> {
    const city = await this.cityService.findOne(station.city);
    return this.stationRepository.save({
      ...station,
      city,
    });
  }

  findAll(): Promise<StationModel[]> {
    return this.stationRepository.find();
  }

  findByCity(id: string): Promise<StationModel[]> {
    return this.stationRepository
      .createQueryBuilder('station')
      .where('station.city = :id', { id })
      .getMany();
  }

  findOne(id: string): Promise<StationModel> {
    return this.stationRepository.findOne(id);
  }
}
