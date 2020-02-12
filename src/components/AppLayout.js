import React, { useState, useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Header from './Header'
import Navigation from './Navigation'

const drawerWidth = 300

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    padding: theme.spacing(3),
    '&::before': {
      content: '""',
      display: 'block',
      width: '100%',
      ...theme.mixins.toolbar,
    },
    [theme.breakpoints.up('sm')]: {
      paddingLeft: drawerWidth + theme.spacing(3),
    },
  },
  toolbar: theme.mixins.toolbar,
}))

export default function AppLayout(props) {
  const { children } = props
  const classes = useStyles()

  const [isOpen, setIsOpen] = useState(false)

  const handleDrawerToggle = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  return (
    <div className={classes.root}>
      <Header handleDrawerToggle={handleDrawerToggle} />
      <Navigation
        isDrawerOpen={isOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <main className={classes.content}>{children}</main>
    </div>
  )
}
