import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Student Street</title>
        <link rel="icon" href="https://synramtechnology.com/studentstreet/public/images/logo.png" />
      </Head>
        <img src="https://synramtechnology.com/studentstreet/public/images/logo.png" alt="Student Street Logo" className="logo" />
        <h2 className="title">
            Welcome to <a href="https://studentstreet.in">Student Street</a>
        </h2>
        <p className="description">
            Student Street is your own platform to customize your career & contribute for the benefit of others.
        </p>
        <h3 className="title2">
            Coming Soon!
        </h3>

        <style jsx>{`
            .container {
                min-height: 100vh;
                padding: 0 0.5rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            .logo {
                height: 100em;
            }
            .main {
                padding: 5rem 0;
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            .footer {
                width: 100%;
                height: 100px;
                border-top: 1px solid #eaeaea;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            a {
                color: inherit;
                text-decoration: none;
            }
            .title a {
                color: #0070f3;
                text-decoration: none;
            }
            .title a:hover,
            .title a:focus,
            .title a:active {
                text-decoration: underline;
            }
            .title {
                margin: 0;
                line-height: 1.15;
                font-size: 4rem;
            }

            .title,
            .description {
                text-align: center;
            }
            .description {
                line-height: 1.5;
                font-size: 1.5rem;
            }
            code {
                background: #fafafa;
                border-radius: 5px;
                padding: 0.75rem;
                font-size: 1.1rem;
                font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
            }
        `}</style>

        <style jsx global>{`

            html,
            body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
            }
            * {
                box-sizing: border-box;
            }
        `}</style>
      <Footer />
    </div>
  )
}
