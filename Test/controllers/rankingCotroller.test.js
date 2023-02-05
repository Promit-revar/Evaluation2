const services=require("../../src/services/rankingServices");
const controllers=require("../../src/controllers/rankingController");
const utils=require('../../src/utils/csvParser');
describe('Check ranking controller', () => {
    it('should should fetch the data for top companies in given sector', async () => {
      jest.spyOn(services, 'getTopCompanies').mockResolvedValue(
        
    [{
        "companyId": "46e1d061-e39d-4d5c-8e0e-3fa5d45d9efc",
        "sector": "Software",
        "createdAt": "2023-02-03T10:26:08.058Z",
        "updatedAt": "2023-02-03T10:26:08.058Z",
        "Companies": [
            {
                "companyId": "46e1d061-e39d-4d5c-8e0e-3fa5d45d9efc",
                "companyName": "Apple",
                "ceoName": "Jackie Rowe",
                "companyScore": "29.987724999999998",
                "createdAt": "2023-02-03T09:19:27.197Z",
                "updatedAt": "2023-02-03T09:19:27.197Z"
            }
        ]
    },
    {
        "companyId": "b6472c52-732a-4fd2-a463-ae604c0a2c79",
        "sector": "Software",
        "createdAt": "2023-02-03T10:26:08.058Z",
        "updatedAt": "2023-02-03T10:26:08.058Z",
        "Companies": [
            {
                "companyId": "b6472c52-732a-4fd2-a463-ae604c0a2c79",
                "companyName": "Microsoft",
                "ceoName": "Rolando Kilback",
                "companyScore": "21.3221",
                "createdAt": "2023-02-03T09:19:27.197Z",
                "updatedAt": "2023-02-03T09:19:27.197Z"
            }
        ]
    },
    {
        "companyId": "8727cc61-8c4b-4285-8853-2db808392c04",
        "sector": "Software",
        "createdAt": "2023-02-03T10:26:08.058Z",
        "updatedAt": "2023-02-03T10:26:08.058Z",
        "Companies": [
            {
                "companyId": "8727cc61-8c4b-4285-8853-2db808392c04",
                "companyName": "Google",
                "ceoName": "Mr. Blanche Weissnat",
                "companyScore": "13.27365",
                "createdAt": "2023-02-03T09:19:27.197Z",
                "updatedAt": "2023-02-03T09:19:27.197Z"
            }
        ]
    },
    {
        "companyId": "e90a7bc7-47fa-49af-bfa1-391fe7768b56",
        "sector": "Software",
        "createdAt": "2023-02-03T10:26:08.058Z",
        "updatedAt": "2023-02-03T10:26:08.058Z",
        "Companies": [
            {
                "companyId": "e90a7bc7-47fa-49af-bfa1-391fe7768b56",
                "companyName": "Meta",
                "ceoName": "Lawrence Nienow",
                "companyScore": "13.102174999999999",
                "createdAt": "2023-02-03T09:19:27.197Z",
                "updatedAt": "2023-02-03T09:19:27.197Z"
            }
        ]
    }
]);
    
      const mockRes = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis()
      };
  
      await controllers.getTopCompanies({
        query: {
            sector: "software",
        }}, mockRes);
        expect(mockRes.status).toBeCalledWith(200);
      expect(mockRes.json).toBeCalledWith({data:[
        {
            "id": "46e1d061-e39d-4d5c-8e0e-3fa5d45d9efc",
            "name": "Apple",
            "ceo": "Jackie Rowe",
            "ranking": 1
        },
        {
            "id": "b6472c52-732a-4fd2-a463-ae604c0a2c79",
            "name": "Microsoft",
            "ceo": "Rolando Kilback",
            "ranking": 2
        },
        {
            "id": "8727cc61-8c4b-4285-8853-2db808392c04",
            "name": "Google",
            "ceo": "Mr. Blanche Weissnat",
            "ranking": 3
        },
        {
            "id": "e90a7bc7-47fa-49af-bfa1-391fe7768b56",
            "name": "Meta",
            "ceo": "Lawrence Nienow",
            "ranking": 4
        }
    ]});
    });
}
)