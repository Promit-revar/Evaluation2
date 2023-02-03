const services=require("../../src/services/csvStorageServices");
const controllers=require("../../src/controllers/csvDataStorageController");
const utils=require('../../src/utils/csvParser');
describe('Check controller', () => {
    it('should calculate and display score and insert data into DB for each company...', async () => {
      jest.spyOn(services, 'parseCsvData').mockResolvedValue(
        [{
            companySector: 'Banking',
            companyId: 'e245b12c-5b3b-4a83-a4ad-391974b34a37'
          }]);
    jest.spyOn(services, 'getCompanyById').mockResolvedValue(
        [{
            id: 'e245b12c-5b3b-4a83-a4ad-391974b34a37',
            name: 'IDFC',
            description: 'Officiis voluptate dolor officiis similique. Illum ipsum enim culpa nostrum a. Animi facere vel dolorum hic enim repellat iste. Facilis dolore vero maiores voluptates unde enim pariatur quas maxime. Esse aut ex repellat magni quis recusandae aperiam.',
            ceo: 'Ms. Owen Monahan',
            tags: [
              'innovative',
              'user-centric',
              'strategic',
              '24/7',
              'e-business',
              'sticky',
              'innovative',
              'revolutionary'
            ]
          }]);
          jest.spyOn(services, 'getCompanyBySector').mockResolvedValue(
            [{
                "companyId": "e245b12c-5b3b-4a83-a4ad-391974b34a37",
                "performanceIndex": [
                    {
                        "key": "cpi",
                        "value": 0.98
                    },
                    {
                        "key": "cf",
                        "value": 621865
                    },
                    {
                        "key": "mau",
                        "value": 0.55
                    },
                    {
                        "key": "roic",
                        "value": 13.54
                    }
                ]
            }]);
            jest.spyOn(services, 'calculateScore').mockReturnValue(
                [{
                    "companyId": "e245b12c-5b3b-4a83-a4ad-391974b34a37",
                    "companyName": "IDFC",
                    "score": 22.756625,
                    "ceoName": "Mr. Ron Toy",
                    "tags": [
                        "granular",
                        "enterprise",
                        "rich",
                        "plug-and-play",
                        "out-of-the-box",
                        "holistic",
                        "impactful"
                    ]
                }]);
                jest.spyOn(services, 'getInsertIntoDB').mockResolvedValue(
                    [{
                        "id": "e245b12c-5b3b-4a83-a4ad-391974b34a37",
                        "name": "IDFC",
                        "score": 22.756625
                    }]);
      const mockRes = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis()
      };
  
      await controllers.getCsvData({
        body: {
            urlLink: "https://store-0001.s3.amazonaws.com/input.csv",
        }}, mockRes);
        expect(mockRes.status).toBeCalledWith(201);
      expect(mockRes.json).toBeCalledWith({data: [{
        "id": "e245b12c-5b3b-4a83-a4ad-391974b34a37",
        "name": "IDFC",
        "score": 22.756625
    }],success:true});
    });
}
)