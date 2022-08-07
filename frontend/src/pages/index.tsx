import type { NextPage } from 'next'
import Head from 'next/head'

import Counter from '../features/counter/Counter'

const IndexPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Archer Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <img src="/logo.svg" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      <p className='bg-sky-400 text-3xl font-mono'>
          Hey
        </p>
      </header>
    </div>
  )
}

export default IndexPage
