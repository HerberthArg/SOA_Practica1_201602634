const chai = require('chai');
const chaiHttp = require('chai-http');

const url = 'http://localhost:3000';
chai.use(chaiHttp);
chai.should();

describe('prueba', () => {
    it('Codigo 200 correcto', (done) => {
        chai.request(url)
            .get('/login')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });
});