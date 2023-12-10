import conf from "../conf/config";
import {Client, Account, ID } from 'appwrite';

export class AuthService {
    client = new Client();
    account; 

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
        
    }
    // CREATE USER 
    async createAccount({name, email, password}) {
        try {
           const userAccount = await this.account.create(ID.unique(), email, password, name)
           if(userAccount){
            // first create user and directly login to them 
            return this.login({email, password});
           }else{
            return userAccount;
           }
        } catch (error) {
            throw error
        }
    }

    // LOGIN USER 
    async login({email, password}){
        try {
           return await this.account.createEmailSession(email, password)
        } catch (error) {
            throw error;
        }
    }

    // CURRENT USER 
     async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser", error)
        }
        return null;
    }

    // LOG OUT USER 
    async logoutUser(){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite service :: logoutUser", error)
        }
    }

}

const authService = new AuthService();

export default authService; 