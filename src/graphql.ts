
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CityInput {
    id?: string;
    name?: string;
    phone?: number;
    stations?: Station[];
}

export class StationInput {
    name: string;
    city: City;
}

export class City {
    id: string;
    name: string;
    phone: number;
    stations?: Station[];
}

export class Station {
    id: string;
    name: string;
    city: City;
}

export abstract class IQuery {
    abstract getAllCities(): City[] | Promise<City[]>;

    abstract getCity(id: string): City | Promise<City>;

    abstract getAllStations(): Station[] | Promise<Station[]>;

    abstract getStation(id: string): Station | Promise<Station>;
}

export abstract class IMutation {
    abstract addCity(name: string, phone: number): City | Promise<City>;

    abstract editCity(id: string, name?: string, phone?: number): City | Promise<City>;

    abstract deleteCity(id: string): boolean | Promise<boolean>;

    abstract addStation(name: string, city: City): Station | Promise<Station>;

    abstract editStation(id: string, name: string, city: City): Station | Promise<Station>;

    abstract deleteStation(id: string): boolean | Promise<boolean>;
}
