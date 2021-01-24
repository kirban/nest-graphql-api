import { Injectable } from '@nestjs/common';
import { CityModel } from './city.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CityDTO } from './city.dto';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(CityModel)
    private cityRepository: Repository<CityModel>,
  ) {}

  create(details: CityDTO): Promise<CityModel> {
    return this.cityRepository.save(details);
  }

  findAll(): Promise<CityModel[]> {
    return this.cityRepository.find();
  }

  findOne(id: string): Promise<CityModel> {
    return this.cityRepository.findOne(id);
  }
}
