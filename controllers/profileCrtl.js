const Profile = require('../models/Profile')
const User = require('../models/User')
const normalize = require("normalize-url")



const profileCrtl = {
    addProfile : async(req,res)=> {
        const {status,company,website,location,skills,bio,youtube,twitter,facebook,
            linkedin,instagram,
            ...rest} = req.body
            if(!status || !skills) return res.status(400).json({msg: "Skills and status are required"})

        const profileFiels = {
            status,
            website: 
            website && website !== ""?
            normalize(website,{forceHttps: true} )
            :
            "",
            skills: Array.isArray(skills)?
            skills:
            skills.split(",").map((skill)=> ' '+ skill.trim())
            ,
            ...rest
        }
        const socialFields = {youtube,twitter,facebook,linkedin,instagram}
        for( const [key,value] of Object.entries(socialFields)){
            if(value && value.length > 0 ){
                socialFields[key]= normalize(value,{forceHttps: true} )
            }
        }
        profileFiels.social = socialFields
        try {
            
            const newProfile = await Profile.findOneAndUpdate(
                {user : req.user.id},
                {$set: profileFiels},
                {new: true, upsert:true, setDefaultsOnInsert: true}

            )
            return res.json(newProfile)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getProfile : async(req,res)=> {
        try {
            const profile = await Profile.findOne(
                {user: req.user.id}
            ).populate('user', ['name',"avatar"])
            if(!profile) return res.status(400).json({err: false})
            res.json({profile: profile, err:true})
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getAllProfiles : async(req, res) => {
        try {
          const profiles = await Profile.find().populate('user', ['name', 'avatar']);
          res.json(profiles);
        } catch (err) {
          console.error(err.message);
          return res.status(500).json({ msg: err.message })
        }
    },
    deleteProfileUser: async(req,res)=> {
        try {
            await Promise.all([
                Profile.findOneAndRemove({user: req.user.id}),
                User.findOneAndRemove({_id: req.user.id})
            ])
            res.json({msg : "User deleted"})
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    deleteProfileAndUser: async(req,res)=> {
        id= req.params.userId
        try {
            await Promise.all([
                Profile.findOneAndRemove({user: id}),
                User.findByIdAndRemove(id)
            ])
            res.json({msg : "User and profile deleted"})
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    addExperience: async(req,res)=> {
        try {
            const {title, company,location,from,to,current,description } = req.body
            if(!title) return res.status(400).json({msg : "title is required"})
            if(!from) return res.status(400).json({msg : "from is required"})
            if(!company) return res.status(400).json({msg : "company is required"})
            const profile = await Profile.findOne({user: req.user.id})
            profile.experience.unshift(req.body)
            await profile.save()
            res.json(profile)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    deleteExperience: async(req,res)=> {
        try {
            const findProfile = await Profile.findOne({user: req.user.id})

            findProfile.experience = findProfile.experience.filter(
                (exp)=> exp._id.toString() !== req.params.expId
            )
            await findProfile.save()
            return res.status(200).json(findProfile)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    addEducation: async(req,res)=> {
        const {school,degree,fieldofstudy,from,to,current,description}=req.body
        if(!school) return res.status(400).json({msg : "school is required"})
        if(!degree) return res.status(400).json({msg : "degree is required"})
        if(!fieldofstudy) return res.status(400).json({msg : "fieldofstudy is required"})
        if(!from) return res.status(400).json({msg : "from is required"})
        try {
            const profile = await Profile.findOne({user : req.user.id})
            profile.education.unshift(req.body)
            await profile.save()
            res.status(200).json(profile)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    deleteEducation: async(req,res)=> {
        try {
            const findProfile = await Profile.findOne({user: req.user.id})

            findProfile.education = findProfile.education.filter(
                (exp)=> exp._id.toString() !== req.params.expId
            )
            await findProfile.save()
            return res.status(200).json(findProfile)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    }
}

module.exports = profileCrtl