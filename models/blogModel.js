const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    numViews: {
      type: Number,
      default: 0,
    },
    isLiked: {
      type: Boolean,
      default: false,
    },
    isDisliked: {
      type: Boolean,
      default: false,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    dislikes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    author: {
      type: String,
      default: "Admin",
    },
    images: {
      type: String,
      default:
        "https://media.istockphoto.com/id/922745190/vi/anh/vi%E1%BA%BFt-blog-%C3%BD-t%C6%B0%E1%BB%9Fng-kh%C3%A1i-ni%E1%BB%87m-blog-v%E1%BB%9Bi-b%C3%A0n-l%C3%A0m-vi%E1%BB%87c.jpg?s=2048x2048&w=is&k=20&c=T-oD3jRSLV6NdGZDGNpbcM4g4Bom-ikdhEXfXdC1nD4=",
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Blog", blogSchema);
