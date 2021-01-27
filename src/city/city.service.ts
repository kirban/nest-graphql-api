import { Injectable } from '@nestjs/common';
import { CityModel } from './city.model';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
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

  findOneAndUpdate(id: string, city: CityDTO): Promise<UpdateResult> {
    return this.cityRepository.update(id, { ...city });
  }

  findOneAndRemove(id: string): Promise<DeleteResult> {
    return this.cityRepository.delete(id);
  }
}
