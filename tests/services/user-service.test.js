import UserService from '../../src/services/user-service.js';
import UserRepository from "../../src/repository/user-repository.js";

jest.mock('../../src/repository/user-repository.js');

describe('user service signup test', () => {
    test('should successfully create a user ', async() => {
        const data = {
            email : 'sanket@gmail.com',
            password : '1234567'
        };
        //Mock whole class instead of object:
        (UserRepository.prototype.create).mockReturnValue({...data, createdAt : '2023-01-06' , updatedAt : '2023-01-06'});
        const service = new UserService();
        const response = await service.signup();
        expect(response.email).toBe(data.email);
    });
});