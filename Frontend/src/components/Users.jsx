import { useState } from "react"

import Button from "./Button";

const Users = () => {
    // Replace with backend call
    const [users, setUsers] = useState([{
        firstName: "Harkirat",
        lastName: "Singh",
        _id: 1
    },{
        firstName: "Harkirat",
        lastName: "Singh",
        _id: 2
    }]);

    return <>
    <div className="p-5">
        <div className="font-bold mt-6 text-lg">
            Users
        </div>
        <div className="my-2">
            <input type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
        </div>
        <div>
            {users.map(user => <User user={user} />)}
        </div>
    </div>
    </>
}

function User({user}) {
    return <div className="flex justify-between shadow-md ">
        <div className="flex ">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mb-1  mr-2">
                <div className="flex py-1 flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center  h-ful">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center ">
            <Button buttonlabel={"Send Money"} />
        </div>

    </div>
}

export default Users