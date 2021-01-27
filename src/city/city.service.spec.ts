import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CityModel } from './city.model';
import { CityService } from './city.service';
import * as faker from 'faker';

class CityRepositoryFake {
  public create(): void {}
}

describe('CityService', () => {
  let service: CityService;
  let repository: Repository<CityModel>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CityService,
        {
          provide: getRepositoryToken(CityModel),
          useClass: CityRepositoryFake,
        },
      ],
    }).compile();

    service = module.get<CityService>(CityService);
    repository = module.get(getRepositoryToken(CityModel));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a city', async () => {
      const randomId = faker.random.uuid();
      const createdCity: CityModel = {
        id: randomId,
        name: 'NN',
        phone: '88005553535',
        stations: [],
      };

      jest.spyOn(service, 'create').mockResolvedValue(createdCity);
      expect(
        await service.create({
          name: 'NN',
          phone: '88005553535',
        }),
      ).toBe(createdCity);
    });
  });

  //   describe('get', () => {});

  //   describe('update', () => {});

  //   describe('delete', () => {});

  //   it('should return all cities', () => {});
});
