import { Schema, models, model, ObjectId } from 'mongoose';

interface IUser {
  _id: ObjectId;
  name: string;
  email: string;
  avatar?: string;
}

const schema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String
});

export default models.User || model('User', schema)
