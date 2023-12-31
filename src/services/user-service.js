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

    async getUserByEmail(email){
        try {
            const user = await this.userRepository.findBy({email});
            return user;
        } catch (error) {
            throw error;
        }
    }

    async signin(data){
        try {
            const user = await this.getUserByEmail(data.email);
            //Valide:
            if(!user){
                throw {
                    message: 'no user has been found',
                }
            }
            if(!user.comparePassword(data.password)){
                throw {
                    message: 'incorrect password',
                }
            }
            const token = user.genJWT();
            return token;
        } catch (error) {
            throw error;
        }
    }
}

export default UserService;