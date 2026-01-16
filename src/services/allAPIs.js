import { serverURL } from "./serverURL";
import commonAPI from "./commonAPI";

// Function to call API endpoints
//1 Register User 
export const registerUserAPI = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/api/register`,reqBody,{})
}
// 2 Login
export const loginUserAPI=async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/api/login`,reqBody,{})
}

// 3 Google Login
export const googleloginUserAPI=async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/api/google-login`,reqBody,{})
}

// 4 Add book api
export const AddBookAPI=async(reqBody,reqHeader)=>{
    return await commonAPI('POST',`${serverURL}/api/addBook`,reqBody,reqHeader)
}

// 5 GET all book api
export const getAllBooksAPI=async(searchKey,reqHeader)=>{
    return await commonAPI('GET',`${serverURL}/api/getBooks?search=${searchKey}`,{},reqHeader)
}

// 6 GET home book api
export const getHomeBooksAPI=async()=>{
    return await commonAPI('GET',`${serverURL}/api/getHomeBooks`,{},{})
}

// 7 view book api
export const viewBookAPI=async(id,reqHeader)=>{
    return await commonAPI('GET',`${serverURL}/api/viewBook/${id}`,{},reqHeader)
}

// 8 Admin GET Users
export const getUsersAPI=async(reqHeader)=>{
    return await commonAPI('GET',`${serverURL}/api/getUsers`,{},reqHeader)
}

// 9 Admin UPDATE 
export const updateAdminAPI=async(reqBody,reqHeader)=>{
    return await commonAPI('PUT',`${serverURL}/api/update-admin`,reqBody,reqHeader)
}

// GET Admin
export const getAdminAPI=async(reqHeader)=>{
    return await commonAPI('GET',`${serverURL}/api/getAdmin`,{},reqHeader)
}

// payment
export const paymentAPI=async(reqBody,reqHeader)=>{
    return await commonAPI('PUT',`${serverURL}/api/makePayment`,reqBody,reqHeader)
}
