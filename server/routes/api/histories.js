const express = require('express');
const router = express.Router();
const axios = require('axios');
const historyModule = require('../../modules/history/historyController');
const asyncErrorHandler = require("../../modules/history/historyMiddleware")

/**
 * @route POST api/history/following
 * @description Get following history items
 * @access Public
 */
router.post('/following', historyModule.GetFollowing);

/**
 * @route POST api/history/sales
 * @description Get sales history items
 * @access Public
 */
router.post('/sales', historyModule.GetSales);

/**
 * @route POST api/history/bidding
 * @description Get bidding history items
 * @access Public
 */
router.post('/bidding', historyModule.GetBidding);

module.exports=router;