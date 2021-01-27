import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialMigration1611742745988 implements MigrationInterface {
  name = 'InitialMigration1611742745988';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "station_model" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "cityId" uuid, CONSTRAINT "PK_6a0070052d40c4b4f4eb4ce7f36" PRIMARY KEY ("id"))`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "city_model" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "phone" character varying(15) NOT NULL, CONSTRAINT "PK_e1b6b832312fe74c437fda142ef" PRIMARY KEY ("id"))`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "station_model" ADD CONSTRAINT "FK_94159a6fa95bef7a1dc75efb29d" FOREIGN KEY ("cityId") REFERENCES "city_model"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "station_model" DROP CONSTRAINT "FK_94159a6fa95bef7a1dc75efb29d"`,
      undefined,
    );
    await queryRunner.query(`DROP TABLE "city_model"`, undefined);
    await queryRunner.query(`DROP TABLE "station_model"`, undefined);
  }
}
