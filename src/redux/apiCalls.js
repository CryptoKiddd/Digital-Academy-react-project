import { publicRequest } from "../requestMethods"
import { loginFailure, loginStart, loginSuccess } from "./userRedux"






export const login = async(distpatch, user)=>{


    distpatch(loginStart())
    try {
        const res = await publicRequest.post('/auth/login', user);
        const token = res.accseccToken
        distpatch(loginSuccess({...res.data,token }))
        console.log(res.data,'login')
       

        
    } catch (err){
        distpatch(loginFailure())
        console.log(err)
        
    }
    

}