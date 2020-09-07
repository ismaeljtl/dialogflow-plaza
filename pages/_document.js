import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />

          <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
            <df-messenger
            intent="WELCOME"
            chat-title="AgentePrueba"
            agent-id="e5c39818-9287-4915-9c89-89bc0eb7e6ab"
            language-code="es"
            ></df-messenger>
        </body>
      </Html>
    )
  }
}

export default MyDocument