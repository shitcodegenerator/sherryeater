import { unique } from 'element-plus/es/utils/arrays.mjs';
import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    id: {
      type: String,
      default: '', // Generate a UUID when a new article is created
      unique: true, // Ensure uniqueness of the UUID
    },
    google_id: { type: String, unique: true, default: '' },
    facebook_id: { type: String, unique: true, default: '' },
    line_id: { type: String, unique: true, default: '' },
    password: { type: String, default: '' },
    username: { type: String, default: '' },
    avatar: { type: String, default: '' },
    gender: { type: String, default: '' },
    age: { type: NUmber, default: 0 },
    type: { type: String, default: '' },
    city: { type: String, default: '' },
    city: { type: String, default: '' },
    mobile: { type: String, default: '' },
    level: { type: String, default: 0 },
    created_at: { type: Date, required: false, default: new Date() },
    modified_at: { type: Date, required: false },
  });

  // 6592ebad8e5060f55fc6d828
  export default mongoose.model("user", UserSchema);