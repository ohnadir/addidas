const { mongoose } = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    // phone: { type: String, required: true, trim: true, unique: true },
    email: { type: String, required: true, trim: true, unique: true },
    hash_password: { type: String, trim: true },
    updatedBy: Date,
    avatar: String,
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    }
  },
  { timestamps: true }
);


//If the User collection does not exist create a new one.
export default mongoose.model('User', userSchema);