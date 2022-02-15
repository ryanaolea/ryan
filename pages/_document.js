import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
        <link href="https://fonts.googleapis.com/css2?family=Aclonica&family=Cookie&family=Josefin+Sans:ital,wght@0,100;0,400;1,100&family=Paytone+One&family=Righteous&family=Sulphur+Point:wght@300;400;700&family=Yeseva+One&display=swap" rel="stylesheet">
        </link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
/*
font-family: 'Aclonica', sans-serif;
font-family: 'Cookie', cursive;
font-family: 'Josefin Sans', sans-serif;
font-family: 'Paytone One', sans-serif;
font-family: 'Righteous', cursive;
font-family: 'Sulphur Point', sans-serif;
font-family: 'Yeseva One', cursive;
*/