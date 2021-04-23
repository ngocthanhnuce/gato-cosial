const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    bio: { type: String, required: true },
    work: { type: String, required: false },
    relationship: { type: String, required: false },
    address: { type: String, required: false },
    education: { type: String, required: false },
    birthday: { type: String, required: false },
    social: {
      facebook: { type: String },
      twitter: { type: String },
      youtube: { type: String },
      instagram: { type: String },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", ProfileSchema);
