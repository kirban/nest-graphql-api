import { CityModel } from '../city/city.model';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class StationModel {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ length: 50, nullable: false })
  name: string;

  @Field((type) => CityModel)
  @ManyToOne((type) => CityModel, (city) => city.stations)
  city: CityModel;
}
