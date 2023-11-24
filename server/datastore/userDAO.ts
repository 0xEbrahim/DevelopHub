import { User } from "../types";
type userOrNot = User | undefined;

export interface UserDao {
     createUser(user : User) : void;
     getUserByEmail(email : string) : userOrNot;
     getUserByUsername(username : string) : userOrNot;
    
}