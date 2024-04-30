import request from 'request';

const options = {
    url: '',
    headers: {
        'authorization': 'Basic YWRtaW46YWRtaW4='
    }
};
describe('Status and content', function() {
    describe ('Main page', function() {
        test('status', function(done){
            request('http://localhost:3000/', function(error, response, body) {
                expect(response.statusCode).toEqual(401);
                done();
            });
        });

        test('content', function(done) {
            options.url = 'http://localhost:3000/';
            request(options , function(error, response, body) {
                expect(body).toEqual('{\"message\":\"Hello World!\"}');
                done();
            });
        });
    });

    describe ('Health', function() {
        test('status', function(done){
            options.url = 'http://localhost:3000/health';
            request(options, function(error, response, body) {
                expect(response.statusCode).toEqual(200);
                done();
            });
        });

    });
});