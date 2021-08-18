const { Activity, Country, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Country model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Country.sync({ alter:true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Country.create({ name: 'Argentina' });
      });
    });
  });
});

describe('Activity model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Activity.sync({ alter: true }));
    describe('name', () => {
      it('should work when its a valid name', () => {
        Activity.create({ name: 'Running' });
      });
    });
    describe('name', () => {
      it('should work when its a valid name', () => {
        Activity.findOne({ name: 1 });
      });
    });
    describe('all props', () => {
      it('should work when its a valid name, level, length and season', () => {
        Activity.create({ name: 'Running', level: 1, duration: 1, season: ["Winter"] });
      });
    });
    describe('all props and countries', () => {
      it('should work when its a valid name, level, length, season and countries', () => {
        Activity.create({ name: 'Running', level: 1, duration: 1, season: ["Winter"], countries: ["Argentina", "Brasil", "Uruguay"] });
      });
    });
  });
});
