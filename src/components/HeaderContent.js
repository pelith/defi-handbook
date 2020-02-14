import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Search from './Search'

const useStyles = makeStyles(theme => ({
  header: {
    fontWeight: 900,
    minWidth: 0,
    fontSize: 18,
  },
  grow: {
    flexGrow: 1,
  },
}))

export default function HeaderContent() {
  const classes = useStyles()

  return (
    <>
      <Typography noWrap color={'textSecondary'} className={classes.header}>
        DeFi Handbook
      </Typography>
      <div className={classes.grow} />
      <Search />
    </>
  )
}
