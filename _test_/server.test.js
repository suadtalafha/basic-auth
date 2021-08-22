'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const request = supertest(server);

describe('express server', () => {

  it('shoud check the Working', async () => {
    //arange
    let param = '/';
    let status = 200;
    let text = 'Hello world';

    //act 
    const response = await request.get(param);

    // assert
    expect(response.status).toBe(status);
    expect(response.text).toBe(text);
  });

  it('should check 500 errors', async () => {
    //arange
    let param = '/bad';
    let status = 500;

    //act 
    const response = await request.get(param);

    // assert
    expect(response.status).toBe(status);
    expect(response.body.route).toBe(param);
  });

  it('should check 404 errors', async () => {
    //arange

    let param = '/notfound';
    let status = 404;

    //act
    const response = await request.get(param);

    // assert
    expect(response.status).toBe(status);
  });

  let user = {
    username: 'suad',
    password: '123456',
  };

  it('test for creating a user in post method signup', async () => {

    const response = await request.post('/signup').send(user);

    expect(response.status).toBe(201);

  });


  it('test for a user in post method signin in database', async () => {

    const response = await request.post('/signin').set('Authorization', `Basic aWJyYWhlbToxMjM0NQ==`);

    expect(response.status).toBe(200);
    expect(response.body.userName).toBe('suad');

  });

  it('signin no access', async () => {
    const response = await request.post('/signin').auth('suad', 'suad');
    expect(response.status).toBe(403);
  });


});