import { Schema, models, model } from 'mongoose';

interface User {
  name: string;
  email: string;
  avatar?: string;
}

const schema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String
});

export default models.User || model('User', schema)
