import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return {...initialProps}
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/*
          <meta charSet="utf-8" />
          */}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta
            name="description"
            content="Concavo - React and Tailwind CSS admin template"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Poppins&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/Mtalkz-Favicon-1-192x192.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/Mtalkz-Favicon-1-192x192.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/Mtalkz-Favicon-1-192x192.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/Mtalkz-Favicon-1-192x192.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/Mtalkz-Favicon-1-192x192.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/Mtalkz-Favicon-1-192x192.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/Mtalkz-Favicon-1-192x192.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/Mtalkz-Favicon-1-192x192.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/Mtalkz-Favicon-1-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/Mtalkz-Favicon-1-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/Mtalkz-Favicon-1-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/Mtalkz-Favicon-1-192x192.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-TileImage"
            content="/ms-icon-144x144.png"
          />
          <meta name="theme-color" content="#ffffff" />

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/css/flag-icon.min.css"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
            integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
            crossOrigin=""
          />
        </Head>
        <body className="disable-scrollbars">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
