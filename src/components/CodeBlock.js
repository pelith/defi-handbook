import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import theme from '../libs/codeBlockTheme'

const useStyles = makeStyles(theme => ({
  wrapper: {
    width: '100%',
    overflowX: 'auto',
  },
}))

export default ({ children, className, live, render }) => {
  const language = className.replace(/language-/, '')
  const classes = useStyles()

  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={clsx(className, classes.wrapper)}
          style={{ ...style, padding: '20px' }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
