import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Link from 'next/link'
import logoImage from '../assets/logo.png'
// import { ReactComponent as Logo } from '../assets/logo.svg'
// import Search from './Search'

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
      <Link href='/'>
        <a>
          <img src={logoImage} height='40' alt='logo' />
        </a>
      </Link>
      <div className={classes.grow} />
      {/* <Search /> */}
    </>
  )
}
