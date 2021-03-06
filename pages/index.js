import Head from 'next/head'
import Image from 'next/image'


export default function Home() {

  return (
    <div className="bg-gray-500">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <h1 className="text-red-500">Main</h1>
    </div>
  );
}
