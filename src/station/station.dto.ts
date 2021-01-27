import { Field, InputType } from '@nestjs/graphql';

export interface StationDTO {
  name: string;
}

@InputType()
export class CreateStationDTO {
  @Field()
  name: string;
  @Field()
  city: string;
}
