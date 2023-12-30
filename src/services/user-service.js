import { UserRepository } from "../repository/index.js";

class UserService {
    constructor(){
        this.userRepository = new UserRepository();
    }
    //Sign Up:
    async signup(data){
        const user = await this.userRepository.create(data);
        return user;
    }
}

export default UserService;