const expect = require('expect');
const rewire = require('rewire');

var app = require('./app');

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    }

    it('Should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Gabi', 22);
        expect(spy).toHaveBeenCalledWith('Gabi', 22);
    });

    it('Should call save user with user object', () => {
        
    });

});