import * as mongoose from 'mongoose';

export const GuestSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    confirmed: { type: Boolean, default: false },
    confirmationToken: { type: String, required: true },
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    available: { type: Boolean, default: true }
}, { timestamps: true });

GuestSchema.index({ email: 1 }, { unique: true });