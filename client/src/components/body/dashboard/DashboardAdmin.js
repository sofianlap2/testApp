import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers,deleteUser, getAllProfiles,delProfileandUser } from '../../../redux/actions/adminAction'
import { getProfile } from '../../../redux/actions/userAction'
import EditUserModal from '../../utils/modal/EditUserModal'

const DashboardAdmin = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        
        dispatch(getAllUsers())
        dispatch(getAllProfiles())
        
    }, [dispatch])

    const deleteUserBtn = (id) => {
        dispatch(deleteUser(id))
    }

    const deleteProfileandUserBtn = (id) => {
         dispatch(delProfileandUser(id))
    }

    const [modalopen, setModalopen] = useState(false)
    const name = useSelector(state => state.authReducer.name)
    const avatar = useSelector(state => state.authReducer.avatar)
    const email = useSelector(state => state.authReducer.email)
    const users = useSelector((state) => state.adminReducer.users)
    const profiles = useSelector((state) => state.adminReducer.profiles)
    

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
                {users && users.length > 0 && users.map((user,index) =>
                <tbody key={user._id}>
                    <tr >
                        <td>Name : {user.name}</td>
                        <td>Email : {user.email}</td>
                        <td>Role : {user.role}</td>
                        <td>Avatar :<img src={user.avatar} alt="avatar" /></td>
                        <td onClick={()=> deleteUserBtn(user._id)}>Delete user</td>
                        <td onClick={()=> setModalopen(true)}>EDIT</td>
                        <td onClick={()=> deleteProfileandUserBtn(user._id)}>Delete user and profile</td>
                    </tr>
                    <tr>
                    <EditUserModal visible={modalopen} oldData={user} id={user._id} setModalopen={setModalopen}/>
                    </tr>
                </tbody>
            )}
            </table>
            <h1>List of profiles</h1>
            {
                profiles && profiles.length>0 && profiles.map((profile,id)=> 
                (
                    <div key={id}>
                    
                <p>{profile.status}</p>    
                <p>{Object.entries(profile.social)}</p>   
                <p>{profile.skills}</p> 
                <p>{profile.education.length > 0 && profile.education.map(ed=> ed.school)}</p>
                <p>{profile.experience.length > 0 && profile.experience.map(exp=> exp.company)}</p>
                <p>{profile.webiste}</p> 
                
                </div>
                )
                )
            }
        </div>
    )
}

export default DashboardAdmin
