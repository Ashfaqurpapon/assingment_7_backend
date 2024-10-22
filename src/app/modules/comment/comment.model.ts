import { Schema, Types } from 'mongoose';
import { model } from 'mongoose';
import { IComment } from './comment.interface';

const commentSchema = new Schema<IComment>(
  {
    postId: {
      type: Types.ObjectId,
      ref: 'Post',
      required: [true],
    },
    description: {
      type: String,
      required: [true, 'Comment description is required'],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  },
);

export const Comment = model<IComment>('Comment', commentSchema);
