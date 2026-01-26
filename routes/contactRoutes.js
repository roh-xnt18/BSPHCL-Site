const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// @route   POST /api/contact
// @desc    Submit a contact form/inquiry
// @access  Public
router.post('/', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Simple validation
        if (!name || !email || !message) {
            return res.status(400).json({ success: false, message: 'Please provide name, email, and message.' });
        }

        const newContact = new Contact({
            name,
            email,
            subject: subject || 'General Inquiry',
            message
        });

        await newContact.save();

        res.status(201).json({ success: true, message: 'Message sent successfully!' });
    } catch (err) {
        console.error('Contact Error:', err);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

module.exports = router;
