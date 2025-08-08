import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js'

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRETE)
}

// Route for User login
const loginUser = async (req, res) => {

    try {
        const { email, password } = req.body
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.json({ success: false, message: "User does not exists" })
        }

        const IsMatch = await bcrypt.compare(password, user.password)

        if (IsMatch) {
            const token = createToken(user._id)
            res.json({ success: true, token })
        }
        else {
            res.json({ success: false, message: "Invalid Credentials" })
        }

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}


// Route for register user
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body

        // Checking user is already exist or not 
        const exists = await userModel.findOne({ email })
        if (exists) {
            return res.json({ success: false, message: "User already exists" })
        }

        // Walidating Email and strong Password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter valid email" })
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter strong password" })
        }

        // Hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            name, email,
            password: hashPassword
        })

        const user = await newUser.save()

        const token = createToken(user._id)

        res.json({ success: true, token })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })

    }
}

// Route for admin login
const adminLogin = async (req, res) => {

    try {
        const { email, password } = req.body
        if (email === process.env.ADMIN_EMAIL && process.env.ADMIN_PASSWORD) {
            const token = await jwt.sign(email + password, process.env.JWT_SECRETE)
            res.json({ success: true, token })
        }
        else {
            res.json({ success: false, message: "Invalid Credentials" })
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })

    }
}

export { loginUser, registerUser, adminLogin }