
import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { editUser } from '../../../redux/actions/adminAction'


const EditUserModal = ({ id, setModalopen, oldData, visible }) => {
    const dispatch = useDispatch()
    const [name, setName] = useState(oldData.name)
    const [email, setEmail] = useState(oldData.email)
    const [role, setRole] = useState(oldData.role)
    const [avatar, setAvatar] = useState(oldData.avatar)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(editUser(id, { name, email, role, avatar }))

        setModalopen(false)
    }

    return (
        visible ?
            (
                <td>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text"
                            onChange={e => setName(e.target.value)}
                            value={name}
                        />

                        <label htmlFor="email">Email</label>
                        <input id="email" type="text"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />

                        <label htmlFor="role">Role</label>
                        <input id="role" type="text"
                            onChange={e => setRole(e.target.value)}
                            value={role}
                        />

                        <label htmlFor="avatar">Avatar</label>
                        <input id="avatar" type="text"
                            onChange={e => setAvatar(e.target.value)}
                            value={avatar}
                        />

                        <button type="submit">UPDATE</button>
                        <button type="button" onClick={() => setModalopen(false)}>CLOSE</button>
                    </form>
                </td>
            )
            :
            <td></td>
    )
}

export default EditUserModal
