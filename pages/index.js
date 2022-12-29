import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Student Street</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Student Street is your own platform to customize your career & contribute for the benefit of others." />
      </main>
      <Footer />
    </div>
  )
}
