
import { useState} from "react"
import {useDispatch} from "react-redux"
import {setUser} from "./redux/userSlice"
import UserDataComp from "./userData"
const UserComp = ()=>{
    const dispatch = useDispatch()
    const [userdetails,setUserDetails] = useState({username:"" , age:null});
    const addUser=()=>{
        if(userdetails.username!=null && userdetails.age!=null)
        {
            dispatch(setUser({...userdetails}))
        }
        
    }
    return(
        <div>
            <input type="text" placeholder="type username..." onChange={(e)=>setUserDetails({...userdetails,username:e.target.value})}/>
            <input type="text" placeholder="type age..." onChange={(e)=>setUserDetails({...userdetails,age:e.target.value})}/>
            <button onClick={addUser}>Add User</button>
            <div>
                <UserDataComp/>
            </div>
        </div>
    )
}

export default UserComp;