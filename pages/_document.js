import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { BASE_URL } from "../utils/Urls";

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="google" content="notranslate" />

          <link
            rel="shortcut icon"
            type="image/png"
            href={`${BASE_URL}/static/favicon.png`}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
