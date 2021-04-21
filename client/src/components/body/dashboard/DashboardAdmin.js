import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers,deleteUser } from '../../../redux/actions/adminAction'
import EditUserModal from '../../utils/modal/EditUserModal'

const DashboardAdmin = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllUsers())
    }, [])


    const [modalopen, setModalopen] = useState(false)
    const name = useSelector(state => state.userReducer.name)
    const avatar = useSelector(state => state.userReducer.avatar)
    const email = useSelector(state => state.userReducer.email)
    const users = useSelector((state) => state.adminReducer.users)

    return (
        <div>
            <h1>Hello {name}</h1>
            <img src={avatar} alt="avvatar" />
            <h1>Email {email}</h1>
            <table>
                <thead>
                    <tr>
                        <th colSpan="2">Users list</th>
                    </tr>
                </thead>
                {users.map((user,index) =>
                <tbody key={user._id}>
                    <tr >
                        <td>Name : {user.name}</td>
                        <td>Email : {user.email}</td>
                        <td>Role : {user.role}</td>
                        <td>Avatar :<img src={user.avatar} alt="avatar" /></td>
                        <td onClick={()=>dispatch(deleteUser(user._id))}>Delete</td>
                        <td onClick={()=> setModalopen(true)}>EDIT</td>
                    </tr>
                    <tr>
                    <EditUserModal visible={modalopen} oldData={user} id={user._id} setModalopen={setModalopen}/>
                    </tr>
                </tbody>
            )}
            </table>
        </div>
    )
}

export default DashboardAdmin
