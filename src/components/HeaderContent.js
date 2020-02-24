import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Search from './Search'

const useStyles = makeStyles(() => ({
  header: {
    fontWeight: 900,
    minWidth: 0,
    fontSize: 18,
  },
  grow: {
    flexGrow: 1,
  },
}))

export default function HeaderContent(props) {
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
