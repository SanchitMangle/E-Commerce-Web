import express from 'express'
import { placeOrder,placeOrderStripe,placeOrderRazorpay,allOrders,userOrders,updateStatus,  verifyRazorpay,verifyStripe } from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()

// Admin panel Order Routess
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)


// payment method for  Order routes
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)

// Verify Stripe
orderRouter.post('/verifystripe',authUser,verifyStripe)
// Verify Razorpay
orderRouter.post('/verifyrazorpay',authUser,verifyRazorpay)

// user routes for  order

orderRouter.post('/userorders',authUser,userOrders)

export default orderRouter