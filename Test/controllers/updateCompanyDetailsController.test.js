const services=require("../../src/services/updateDetailsServices");
const controllers=require("../../src/controllers/updateCompanyDetailsController");
describe('Check controller for updating company details', () => {
    it('should update the company details for the given id', async () => {
      jest.spyOn(services, 'updateCompanyDetails').mockResolvedValue(
        {
            "updatedData": {
                "companyId": "8727cc61-8c4b-4285-8853-2db808392c04",
                "companyName": "Mckinsey & Company",
                "ceoName": "Promit Revar",
                "companyScore": "13.27365",
                "createdAt": "2023-02-03T09:19:27.197Z",
                "updatedAt": "2023-02-05T09:36:23.708Z"
            },
            "count": [
                1
            ]
          });
      const mockRes = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis()
      };
  
      await controllers.updateCompanyDetails({
        body: {
            companyName:"Mckinsey & Company",
            ceoName:"Promit Revar"   
        },
        params: {
            id: "8727cc61-8c4b-4285-8853-2db808392c04"
        }}, mockRes);
        expect(mockRes.status).toBeCalledWith(200);
      expect(mockRes.json).toBeCalledWith({
        "data": {
            "updatedData": {
                "companyId": "8727cc61-8c4b-4285-8853-2db808392c04",
                "companyName": "Mckinsey & Company",
                "ceoName": "Promit Revar"
            },
            "count": [
                1
            ]
        },
        "success": true
    });
    });
}
)