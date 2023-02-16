import Head from 'next/head'
import Link from 'next/link'

export default function Home() {

  return (
    <>
      <div className='container flex justify-center mt-5'>
        <Head>
          <title>Better PokeAPI</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div className='bg-orange-100 rounded overflow-hidden shadow-md px-4'>
          <Link href="/">
            <h1 className="text-4xl font-bold underline">Better PokeAPI</h1></Link>
          <h2 className="text-2xl text-black-700 mb-3 text-center">All Endpoints</h2>
          <div className='my-4'>
            <Link href="/random" className='bg-red-200/100  hover:bg-red-200/50 text-center py-5'>Get a random Pokemon</Link>
            <Link href="/name" className='bg-red-200/100  hover:bg-red-200/50 text-center py-5'>Get a Pokemon by name</Link>
            <Link href="/types" className='bg-red-200/100  hover:bg-red-200/50 text-center py-5'>Get a Pokemon by type</Link>
            <Link href="/evolve" className='bg-red-200/100  hover:bg-red-200/50 text-center py-5'>Get a Pokemon's next evolution stage</Link>
            <Link href="/exp" className='bg-red-200/100  hover:bg-red-200/50 text-center py-5'>Get a Pokemon's Experience</Link>
            <Link href="/battle" className='bg-red-200/100  hover:bg-red-200/50 text-center py-5'>Battle two Pokemon</Link>
            <Link href="/catch" className='bg-red-200/100  hover:bg-red-200/50 text-center py-5'>Try to catch a Pokemon</Link>
          </div>
        </div>
      </div>
    </>
  )
}
