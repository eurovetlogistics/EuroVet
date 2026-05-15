import mongoose, { Schema, models, model } from "mongoose";

const BlogPostSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    coverImage: { type: String, required: true },
    category: { type: String, required: true, index: true },
    tags: { type: [String], default: [] },
    author: { type: String, default: "Echipa Eurovet" },
    published: { type: Boolean, default: true, index: true },
    publishedAt: { type: Date, default: Date.now, index: true },
  },
  { timestamps: true }
);

const ServiceSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    icon: { type: String, required: true },
    short: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    benefits: { type: [String], default: [] },
    process: {
      type: [{ title: String, description: String }],
      default: [],
    },
    faqs: {
      type: [{ q: String, a: String }],
      default: [],
    },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const ContactSubmissionSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,
    company: String,
    subject: String,
    message: { type: String, required: true },
    consent: { type: Boolean, required: true },
    ip: String,
    userAgent: String,
    status: {
      type: String,
      enum: ["new", "read", "archived"],
      default: "new",
      index: true,
    },
  },
  { timestamps: true }
);

const AdminUserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true },
    passwordHash: { type: String, required: true },
    name: { type: String, default: "Administrator" },
  },
  { timestamps: true }
);

export type BlogPostDoc = mongoose.InferSchemaType<typeof BlogPostSchema> & {
  _id: mongoose.Types.ObjectId;
};
export type ServiceDoc = mongoose.InferSchemaType<typeof ServiceSchema> & {
  _id: mongoose.Types.ObjectId;
};
export type ContactSubmissionDoc =
  mongoose.InferSchemaType<typeof ContactSubmissionSchema> & {
    _id: mongoose.Types.ObjectId;
  };
export type AdminUserDoc = mongoose.InferSchemaType<typeof AdminUserSchema> & {
  _id: mongoose.Types.ObjectId;
};

export const BlogPost =
  models.BlogPost || model("BlogPost", BlogPostSchema);
export const Service = models.Service || model("Service", ServiceSchema);
export const ContactSubmission =
  models.ContactSubmission ||
  model("ContactSubmission", ContactSubmissionSchema);
export const AdminUser =
  models.AdminUser || model("AdminUser", AdminUserSchema);
