// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const slugify = require('node-el-slugify');

type Res = {
  slug: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Res>
) {
  const q = req.query.q ?? 'n/a';
  const slug = slugify.slugify(q);
  res.status(200).json({ slug })
}
