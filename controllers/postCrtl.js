const Post = require("../models/Post")
const User = require("../models/User")

const postCrtl = {
    addPost: async (req, res) => {
        const { text } = req.body
        try {
            if (!text) return res.status(400).json({ msg: "text is required" })
            const user = await User.findById(req.user.id).select('-passwordHash')
            const newPost = await Post.create({
                user: req.user.id,
                text,
                name: user.name,
                avatar: user.avatar
            })
            const savedPost = await newPost.save()
            res.json(savedPost)

        } catch (err) {
            res.status(500).json({ msg: err.message })
        }

    },
    getPosts: async (req, res) => {
        try {
            const posts = await Post.find().sort({ date: -1 })
            res.json(posts)
        } catch (err) {
            res.status(500).json({ msg: err.message })
        }
    },
    getPostbyId: async (req, res) => {

        try {
            const post = await Post.findById(req.params.id)
            if (!post) return res.status(404).json({ msg: 'Post not found' });
            res.json(post)
        } catch (err) {
            res.status(500).json({ msg: err.message })
        }
    },
    deletePost: async (req, res) => {

        try {
            const post = await Post.findById(req.params.id)
            if (!post) {
                return res.status(404).json({ msg: 'Post not found' });
            }

            // Check user
            if (post.user.toString() !== req.user.id) {
                return res.status(401).json({ msg: 'User not authorized' });
            }
            await post.remove();

            res.json({ msg: 'Post removed' });
        } catch (err) {
            res.status(500).json({ msg: err.message })
        }
    },
    addLike: async (req, res) => {

        try {
            const post = await Post.findById(req.params.id)

            if (post.likes.some(like => like.user.toString() === req.user.id)) {
                return res.status(400).json({ msg: 'Post already liked' });
            }
            post.likes.unshift({ user: req.user.id });

            await post.save();

            return res.json(post.likes);
        } catch (err) {
            res.status(500).json({ msg: err.message })
        }
    },
    removeLike: async(req,res)=> {
        try {
            const post = await Post.findById(req.params.id);
        
            // Check if the post has not yet been liked
            if (!post.likes.some((like) => like.user.toString() === req.user.id)) {
              return res.status(400).json({ msg: 'Post has not yet been liked' });
            }
        
            // remove the like
            post.likes = post.likes.filter(
              ({ user }) => user.toString() !== req.user.id
            );
        
            await post.save();
        
            return res.json(post.likes);
          } catch (err) {
            res.status(500).json({ msg: err.message })
          }
    }
}

module.exports = postCrtl