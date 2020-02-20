import React from 'react'
import Head from 'next/head'
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { MDXProvider } from '@mdx-js/react'
import AppLayout from '../components/AppLayout'
import CodeBlock from '../components/CodeBlock'

const muiTheme = createMuiTheme()
const theme = responsiveFontSizes(muiTheme)

const inlineCode = props => (
  <Box
    component='span'
    px={0.5}
    py={0.2}
    borderRadius={4}
    bgcolor='grey.300'
    color='text.secondary'
    {...props}
  />
)

const blockquote = props => (
  <Box
    mx={5}
    my={2}
    p={2}
    borderLeft={4}
    borderColor='info.main'
    bgcolor='grey.200'
    {...props}
  />
)

const components = {
  h1: props => (
    <Typography variant='h3' component='h1' gutterBottom {...props} />
  ),
  h2: props => (
    <Typography variant='h4' component='h2' gutterBottom {...props} />
  ),
  h3: props => (
    <Typography variant='h5' component='h3' gutterBottom {...props} />
  ),
  h4: props => (
    <Typography variant='h6' component='h4' gutterBottom {...props} />
  ),
  h5: props => (
    <Typography variant='subtitle1' component='h5' gutterBottom {...props} />
  ),
  h6: props => (
    <Typography variant='body1' component='h6' gutterBottom {...props} />
  ),
  p: props => <Typography variant='body2' component='p' {...props} />,
  pre: props => <div {...props} />,
  code: CodeBlock,
  inlineCode,
  blockquote,
}

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>DeFi Handbook</title>
        <meta property='name' content='DeFi Handbook' />
        <meta
          property='description'
          content='DeFi Handbook make easier for you to dive into DeFi protocols'
        />
        <meta property='image' content='/images/og_image.png' />
        <meta property='og:title' content='DeFi Handbook' />
        <meta
          property='og:description'
          content='DeFi Handbook make easier for you to dive into DeFi protocols'
        />
        <meta property='og:url' content='https://easydai.app/' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='/images/og_image.png' />
        <meta property='og:image:width' content='764' />
        <meta property='og:image:height' content='400' />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MDXProvider components={components}>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </MDXProvider>
      </ThemeProvider>
    </>
  )
}
