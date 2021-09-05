import { Schema, models, model } from 'mongoose';

export interface Course {
  name: string;
  author: string;
  ratings: string;
  price: string;
}

const schema = new Schema<Course>({
  name: { type: String, required: true },
  author: { type: String, required: true },
  ratings: { type: String, required: true },
  price: { type: String, required: true }
});

export default models.Course || model('Course', schema)
