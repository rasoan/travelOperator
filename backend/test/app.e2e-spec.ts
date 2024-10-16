import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});





import { z } from "zod";

interface Test {
    url: string;
    name: string;
    age: number;
}

const User = z.object<Test>({
    url: z.string().email().min(8),
    name: z.string(),
    age: z.number().min(2).max(3).optional()
})

const Skill = z.object({
    title: z.string().min(1),
})
const SkilledUser = User.merge(Skill)

const Data = SkilledUser.parse({
    url: "nancy@gmail.com",
    name: "Nancy",
    age: "21",
    title: 123,
})

console.log(Data.age) // parses successfully

const person = z.object({
    name: z.string(),
});

const test: any = {
    name: "bob dylan",
    extraKey: 61,
};

person.parse(test);

console.log(test)
