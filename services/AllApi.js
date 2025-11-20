import { BaseUrl } from "./BaseUrl";
import commonApi from "./CommonApi";

export const registerUser = async (reqBody)=>{
    return await commonApi('post',BaseUrl+'/registerUser',reqBody)
}

export const loginUser = async (reqBody)=>{
    return await commonApi('post',BaseUrl+'/loginUser',reqBody)
}

export const googleAuth = async(reqBody)=>{
    return await commonApi('post',BaseUrl+'/googleAuth',reqBody)
}