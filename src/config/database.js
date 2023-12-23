const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Підключено до MongoDB');
  } catch (error) {
    console.error('Помилка підключення до MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
