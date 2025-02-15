const express = require('express');
const { registerOrg, getOrganizations } = require('../controllers/orgController');
const router = express.Router();

const cors = require('cors');
router.use(cors());

// POST route for registering a new organization
router.post('/', registerOrg);

// GET route for fetching the list of all organizations
router.get('/', getOrganizations);

module.exports = router;
