import mongoose, { Schema } from 'mongoose';

const userSchema: Schema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  birthDate: {
    type: Date,
    required: true
  }
}, { timestamps: true });

export default mongoose.model('User', userSchema);
