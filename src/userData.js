
import { useSelector } from "react-redux";

const UserDataComp = () => {
    const user = useSelector((state) => state.ben.user)
    user !== undefined ? console.log(user) : <></>;
    if (!user) {
        return (<h1>no data</h1>)
    } else {
        return (
            <div>

                <h1>User infirmation</h1>
                <h4>{user.username}</h4>
                <h4>{user.age}</h4>
            </div>
        )
    }

}

export default UserDataComp