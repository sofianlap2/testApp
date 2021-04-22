import { set } from 'mongoose';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { Redirect } from 'react-router';
import { addExperience,addEducation, addProfile, deleteExperience,deleteEducation, getProfile } from '../../../redux/actions/userAction';


const Dashboard = () => {

    const dispatch = useDispatch()
    const role = useSelector((state) => state.authReducer.role)
    const isLoading = useSelector((state) => state.authReducer.isLoading)
    const name = useSelector(state => state.authReducer.name)
    const avatar = useSelector(state => state.authReducer.avatar)
    const email = useSelector(state => state.authReducer.email)
    /*profile*/
    const [status, setStatus] = useState()
    const [company, setCompany] = useState()
    const [website, setWebsite] = useState()

    const [location, setLocation] = useState()
    const [skills, setSkills] = useState()
    const [bio, setBio] = useState()

    const [youtube, setYoutube] = useState()
    const [twitter, setTwiteer] = useState()
    const [facebook, setFacebook] = useState()

    const [linkedin, setLinkedin] = useState()
    const [instagram, setInstagram] = useState()
    /*experiencees*/
    const [titleexp, setTitleexp] = useState()
    const [companyexp, setCompanyexp] = useState()
    const [locationexp, setLocationexp] = useState()
    const [fromexp, setFromexp] = useState()
    const [toexp, setToexp] = useState()
    const [currentexp, setCurrentexp] = useState()
    const [descriptionexp, setDescriptionexp] = useState()
    /*education*/
    const [schooledu, setSchooledu] = useState()
    const [degreeedu, setDegreeedu] = useState()
    const [fieldofstudyedu, setFieldofstudyedu] = useState()
    const [fromedu, setFromedu] = useState()
    const [toedu, setToedu] = useState()
    const [currentedu, setCurrentedu] = useState()
    const [descriptionedu, setDescriptionedu] = useState()

    const profile = useSelector((state) => state.userReducer.profile)
    const isProfile = useSelector((state) => state.userReducer.isProfile)


    const handleSubmit = async(e) => {
        e.preventDefault()
        await dispatch(addProfile({
            status,
            company,
            website,
            location,
            skills,
            bio,
            youtube,
            twitter,
            facebook,
            instagram,
            linkedin
        }))
        dispatch(getProfile())
        setStatus('')
        setCompany('')
        setWebsite('')
        setLocation('')
        setSkills('')
        setBio('')
        setYoutube('')
        setTwiteer('')
        setFacebook('')
        setInstagram('')
        setLinkedin('')
    }

    const handleExpSubmit = async(e) => {
        e.preventDefault()
        await dispatch(addExperience({
            title: titleexp,
            company: companyexp,
            location: locationexp,
            from: fromexp,
            to: toexp,
            current: currentexp,
            description: descriptionexp
        }))
        dispatch(getProfile())
        setTitleexp('')
        setCompanyexp('')
        setLocationexp('')
        setFromexp('')
        setToexp('')
        setCurrentexp('')
        setDescriptionexp('')
    }

    const handleEduSubmit = async(e) => {
        e.preventDefault()
        await dispatch(addEducation({
            school: schooledu,
            degree: degreeedu,
            fieldofstudy:fieldofstudyedu,
            from: fromedu,
            to: toedu,
            current: currentedu,
            description: descriptionedu
        }))
        dispatch(getProfile())
    }

    const deleteEduSubmit = async(id) => {
        await dispatch(deleteEducation(id))
        dispatch(getProfile())
    }

    const deleteExpereienceSubmit = async(id)=> {
        await dispatch(deleteExperience(id))
        dispatch(getProfile())
    }
    
    useEffect(() => {
        dispatch(getProfile())
    }, [dispatch ])

    if (isLoading) {
        return <h1>Please wait ...</h1>
    }
    else if (role === 1) {
        return <Redirect to="dashboard_admin" />
    }



    return (
        <div>
            <h1>Hello {name}</h1>
            <img src={avatar} alt="avvatar" />
            <h1>Email {email}</h1>
            <h1>Do you have a profile? add one</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="status">status</label>
                <input type="text" id="status" placeholder="enter your status"
                    onChange={e => setStatus(e.target.value)}
                    value={status}
                />

                <label htmlFor="company">company</label>
                <input type="text" id="company" placeholder="enter your company"
                    onChange={e => setCompany(e.target.value)}
                    value={company}
                />

                <label htmlFor="website">website</label>
                <input type="text" id="website" placeholder="enter your website"
                    onChange={e => setWebsite(e.target.value)}
                    value={website}
                />

                <label htmlFor="location">location</label>
                <input type="text" id="location" placeholder="enter your location"
                    onChange={e => setLocation(e.target.value)}
                    value={location}
                />

                <label htmlFor="skills">skills</label>
                <input type="text" id="skills" placeholder="enter your skills"
                    onChange={e => setSkills(e.target.value)}
                    value={skills}
                />

                <label htmlFor="bio">bio</label>
                <input type="text" id="bio" placeholder="enter your bio"
                    onChange={e => setBio(e.target.value)}
                    value={bio}
                />

                <label htmlFor="youtube">youtube</label>
                <input type="text" id="youtube" placeholder="enter your youtube"
                    onChange={e => setYoutube(e.target.value)}
                    value={youtube}
                />

                <label htmlFor="facebook">facebook</label>
                <input type="text" id="status" placeholder="enter your facebook"
                    onChange={e => setFacebook(e.target.value)}
                    value={facebook}
                />

                <label htmlFor="twitter">twitter</label>
                <input type="text" id="twitter" placeholder="enter your twitter"
                    onChange={e => setTwiteer(e.target.value)}
                    value={twitter}
                />

                <label htmlFor="linkedin">linkedin</label>
                <input type="text" id="linkedin" placeholder="enter your linkedin"
                    onChange={e => setLinkedin(e.target.value)}
                    value={linkedin}
                />

                <label htmlFor="instagram">instagram</label>
                <input type="text" id="instagram" placeholder="enter your instagram"
                    onChange={e => setInstagram(e.target.value)}
                    value={instagram}
                />

                <button type="submit">ADD</button>
            </form>
            <h1>Your profile</h1>
            {isProfile &&
                (<div>
                    <p>{profile.user.name}</p>
                    <img src={profile.user.avatar} alt="avat" />
                    <p>{profile.status}</p>
                    <p>{Object.entries(profile.social)}</p>
                    <p>{profile.skills}</p>
                    <p>{profile.education.length > 0 && profile.education.map(ed => (
                        <div key={ed._id}>
                            <p>education</p>
                            <p> school: {ed.school}</p>
                            <p>degree :{ed.degree}</p>
                            <p>fieldofstudy: {ed.fieldofstudy}</p>
                            <p>from :{ed.from}</p>
                            <p>to :{ed.to}</p>
                            <p>current: {ed.current}</p>
                            <p>description: {ed.description}</p>
                            <button onClick={() => deleteEduSubmit(ed._id) }>Delete education</button>

                        </div>
                    ))}</p>
                    <div>{profile.experience.length > 0 && profile.experience.map(exp => (
                        <div key={exp._id}>
                            <p>Experiences</p>
                            <p> title: {exp.title}</p>
                            <p>company :{exp.company}</p>
                            <p>location: {exp.location}</p>
                            <p>from :{exp.from}</p>
                            <p>to :{exp.to}</p>
                            <p>currentjob: {exp.current}</p>
                            <p>description: {exp.description}</p>
                            <button onClick={() => deleteExpereienceSubmit(exp._id) }>Delete expereince</button>
                        </div>
                    ))}</div>
                    <p>{profile.webiste}</p>
                </div>)
            }

            <form onSubmit={handleExpSubmit}>
                <label htmlFor="title"></label>
                <input type="text" placeholder="enter experience title" id="title"
                    onChange={(e) => setTitleexp(e.target.value)}
                    value={titleexp}
                />

                <label htmlFor="company"></label>
                <input type="text" placeholder="enter experience company" id="company"
                    onChange={(e) => setCompanyexp(e.target.value)}
                    value={companyexp}
                />

                <label htmlFor="location"></label>
                <input type="text" placeholder="enter experience location" id="location"
                    onChange={(e) => setLocationexp(e.target.value)}
                    value={locationexp}
                />

                <label htmlFor="from"></label>
                <input type="date" placeholder="from" id="from"
                    onChange={(e) => setFromexp(e.target.value)}
                    value={fromexp}
                />

                <label htmlFor="to"></label>
                <input type="date" placeholder="to" id="to"
                    onChange={(e) => setToexp(e.target.value)}
                    value={toexp}
                />

                <label htmlFor="current"></label>
                <input type="boolean" placeholder="do you have a job now" id="current"
                    onChange={(e) => setCurrentexp(e.target.value)}
                    value={currentexp}
                />

                <label htmlFor="description"></label>
                <input type="text" placeholder="enter experience description" id="description"
                    onChange={(e) => setDescriptionexp(e.target.value)}
                    value={descriptionexp}
                />

                <button type="submit">Add experience</button>
            </form>
            <h1>Add education</h1>
            <form onSubmit={handleEduSubmit}>
                <label htmlFor="school"></label>
                <input type="text" placeholder="enter education school" id="school"
                    onChange={(e) => setSchooledu(e.target.value)}
                    value={schooledu}
                />

                <label htmlFor="degree"></label>
                <input type="text" placeholder="enter education degree" id="degree" 
                onChange={(e)=> setDegreeedu(e.target.value)}
                value={degreeedu}
                />

                <label htmlFor="fieldofstudy"></label>
                <input type="text" placeholder="enter education fieldofstudy" id="fieldofstudy" 
                onChange={(e)=> setFieldofstudyedu(e.target.value)}
                value={fieldofstudyedu}
                />

                <label htmlFor="from"></label>
                <input type="date"  id="from" 
                onChange={(e)=> setFromedu(e.target.value)}
                value={fromedu}
                />

                <label htmlFor="to"></label>
                <input type="date"  id="to" 
                onChange={(e)=> setToedu(e.target.value)}
                value={toedu}
                />

                <label htmlFor="current"></label>
                <input type="text" placeholder="enter education current" id="current" 
                onChange={(e)=> setCurrentedu(e.target.value)}
                value={currentedu}
                />

                <label htmlFor="description"></label>
                <input type="text" placeholder="enter education description" id="description" 
                onChange={(e)=> setDescriptionedu(e.target.value)}
                value={descriptionedu}
                />

                <button type="submit">Add education</button>
            </form>
        </div>
    )
}

export default Dashboard
