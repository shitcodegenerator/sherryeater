import mongoose from 'mongoose'

const ArticleSchema = new mongoose.Schema({
    id: {
      type: String,
      default: '', // Generate a UUID when a new article is created
      unique: true, // Ensure uniqueness of the UUID
    },
    author: { type: String, required: true, unique: true },
    avatar: { type: String, required: true },
    summary: { type: String, required: true, default: '' },
    title: { type: String, required: true },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'category' }, // Reference to Category model
    type: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
    created_at: { type: Date, required: false, default: new Date() },
    modified_at: { type: Date, required: false },
  });

  // 6592ebad8e5060f55fc6d828
  export default mongoose.model("article", ArticleSchema);