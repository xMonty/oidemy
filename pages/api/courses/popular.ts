import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  courses: Array<Object>
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ courses: [
    {
      name: 'Learn Python',
      author: 'John Doe',
      image: '',
    }
  ] })
}
