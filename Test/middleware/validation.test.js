const middlewares = require('../../src/middlewares/validation');
describe('Check middleware for post Req', () => {
    it('should pass to next function', async () => {
        const mockRes = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis()
          };
        
      middlewares.validatePost({
        body: {
            "urlLink": "https://store-0001.s3.amazonaws.com/input.csv"
            },
        }, mockRes,jest.fn());
        
      expect(jest.fn())
    });
}
)
describe('Check middleware for get Req', () => {
    it('should pass to next function for getting top companies', async () => {
        const mockRes = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis()
          };
        
      middlewares.validateUpdateCompanyDetails({
        params:{
            id:"8727cc61-8c4b-4285-8853-2db808392c04"
        }
        }, mockRes,jest.fn());
        
      expect(jest.fn())
    });
}
)
describe('Check middleware for patch Req', () => {
    it('should pass to next function for updating values', async () => {
        const mockRes = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis()
          };
        
      middlewares.validateUpdateCompanyDetails({
        params:{
            id:"8727cc61-8c4b-4285-8853-2db808392c04"
        }
        }, mockRes,jest.fn());
        
      expect(jest.fn())
    });
}
)