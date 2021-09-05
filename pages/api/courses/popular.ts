import { Course } from 'models/course'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  courses: Array<Course>
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ courses: [
    {
      name: 'Learn Python',
      author: 'John Doe',
      ratings: '4.5',
      price: '$19.99'
    }
  ] })
}
