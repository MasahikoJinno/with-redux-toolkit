// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import type { Todo } from 'app/todo'

const todos: Todo[] = [
  {
    id: 'id0001',
    title: '洗剤買う',
    done: false
  },
  {
    id: 'id0002',
    title: 'クレカ解約',
    done: true
  },
  {
    id: 'id0003',
    title: '引越し先検討',
    done: false
  },
  {
    id: 'id0004',
    title: '退去方法確認',
    done: false
  }
]

const handler = (req: NextApiRequest, res: NextApiResponse<Todo[]>) => {
  res.status(200).json(todos)
}

export default handler
