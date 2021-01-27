import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { StationModel } from '../station/station.model';

@ObjectType()
@Entity()
export class CityModel {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ length: 50, nullable: false })
  name: string;

  @Field()
  @Column('varchar', { length: 15 })
  phone: string;

  @Field((type) => [StationModel], { nullable: true })
  @OneToMany((type) => StationModel, (station) => station.city)
  stations: StationModel[];
}
