import express from 'express';
import Message from '../models/Message.js';

const router = express.Router();

// @desc    Send a message
// @route   POST /api/messages
// @access  Public
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Explicitly check for fields
    if (!name || !email || !message) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    const newMessage = new Message({
      name,
      email,
      message,
    });

    const savedMessage = await newMessage.save();
    console.log('Message saved successfully to DB:', savedMessage._id);
    res.status(201).json(savedMessage);
  } catch (error) {
    console.error('Error saving message:', error.message);
    res.status(400).json({ message: error.message });
  }
});

// @desc    Get all messages (Optional - for testing)
// @route   GET /api/messages
// @access  Public (should be private in real apps, but for simplicity we can keep it public or ignore it)
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
