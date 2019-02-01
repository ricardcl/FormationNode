//const assert = require('assert');

const chai = require('chai');
const assert = chai.assert; // fonctionne dans le navigateur contrairement au assert de base
const expect = chai.expect;
const should = chai.should;

const hello = require('../utils/hello');


describe('#hello', () => {
  it('should return Bonjour je m\'appelle Romain !', () => {
    assert.strictEqual(hello("Romain"),`BOnjour je m'appelle Romain !` )
    expect(hello('Romain')).to.equals('Bonjour je m\'appelle Romain !');
    hello("Romain").should.equals('Bonjour je m\'appelle Romain !');
  })
});
