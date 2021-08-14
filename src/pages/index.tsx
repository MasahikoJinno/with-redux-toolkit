import { FC, useEffect } from 'react'
import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux'

import styles from '../../styles/Home.module.css'
import { selectors, actions } from '../redux/modules/todos'

const Home: FC = () => {
  const dispatch = useDispatch()
  const fetchAll = () => dispatch(actions.fetchAllTodos())
  const todos = useSelector(selectors.getTodos)

  useEffect(() => {
    fetchAll()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1 className={styles.title}>Test Redux Toolkit createAsyncThunk</h1>
      </header>
      <main className={styles.main}>
        <ul>
          {todos &&
            todos.map(todo => (
              <li key={todo.title}>
                <span>title: {todo.title}</span>
                <span>done: {todo.done}</span>
              </li>
            ))}
        </ul>
      </main>
    </div>
  )
}

export default Home
