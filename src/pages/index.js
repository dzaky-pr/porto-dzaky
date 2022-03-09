import Head from 'next/head';
import Image from 'next/image';
import { Switch } from '@nextui-org/react';
import { Sun, Moon, Logo } from '../components';
import { styled } from '@stitches/react';

const Nav = styled('nav', {
  top: 0,
  display: 'flex',
  alignItems: 'center',
  height: '76px',
  position: 'sticky',
  background: '#F4F4F4',
  zIndex: '99999',
});

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dzaky Purnomo Rifai</title>
        <meta name="description" content="Student from SMAN 68 Jakarta whose interested in technology, especially web3, blockchain, machine learning, IoT, AI, and UI/UX Design. Beside that, I like organization and a music lover." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav>
        <Logo />
        <Switch checked={true} size="lg" iconOn={<Sun filled />} iconOff={<Moon filled />} />
      </Nav>
      <main>
        <h1>Hello everyone! I’m Dzaky Rifa’i.</h1>

        <p>
          Get started by editing <code>pages/index.js</code>
        </p>

        <div>
          <a href="https://nextjs.org/docs">
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn">
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href="https://github.com/vercel/next.js/tree/canary/examples">
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <h2>Deploy &rarr;</h2>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div>
      </main>

      <footer>
        <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}