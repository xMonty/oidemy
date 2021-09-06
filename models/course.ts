import { Schema, models, model } from 'mongoose';

export interface ICourse {
  name: string;
  author: string;
  ratings: string;
  price: string;
}

const schema = new Schema<ICourse>({
  name: { type: String, required: true },
  author: { type: String, required: true },
  ratings: { type: String, required: true },
  price: { type: String, required: true }
});

export default models.Course || model('Course', schema)
