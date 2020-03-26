import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListSubheader from '@material-ui/core/ListSubheader'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import BuildIcon from '@material-ui/icons/Build'
import GitHubIcon from '@material-ui/icons/GitHub'
import { makeStyles } from '@material-ui/styles'

const tokenNav = [
  {
    primaryText: 'ERC20',
    href: '/token/erc20',
  },
  {
    primaryText: 'Non-standard ERC20',
    href: '/token/non-standard-erc20',
  },
  {
    primaryText: 'Safe ERC20 Library',
    href: '/token/safe-erc20-library',
  },
  {
    primaryText: 'Permit / Max unit allowance',
    href: '/token/permit',
  },
  {
    primaryText: 'Well-known ERC20 Addresses',
    href: '/token/erc20-addresses',
  },
]

const exchangeNav = [
  {
    primaryText: 'Uniswap',
    href: '/exchange/uniswap',
  },
  {
    primaryText: 'Kyber Network',
    href: '/exchange/Kyber-network',
  },
  {
    primaryText: 'Oasis',
    href: '/exchange/oasis',
  },
]

const lendingNav = [
  {
    primaryText: 'Compound',
    href: '/lending/Compound',
  },
  {
    primaryText: 'Fulcrum',
    href: '/lending/fulcrum',
  },
  {
    primaryText: 'AAVE',
    href: '/lending/aave',
  },
  {
    primaryText: 'DDEX',
    href: '/lending/ddex',
  },
]

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100%',
    paddingTop: '24px',
    paddingBottom: '24px',
    overflow: 'auto',
    backgroundColor: '#F0ECE1',
  },
  listItemSelected: {
    borderRadius: '18px',
  },
}))

export default function NavContent() {
  const router = useRouter()
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Link href='/'>
        <ListItem
          classes={{ selected: classes.listItemSelected }}
          component='a'
          button
          selected={router.asPath === '/'}
        >
          <ListItemText
            primary='Table of Content'
            primaryTypographyProps={{ noWrap: true }}
          />
        </ListItem>
      </Link>
      <List dense={true} subheader={<ListSubheader>Token</ListSubheader>}>
        {tokenNav.map(({ primaryText, href }, i) => (
          <li key={primaryText}>
            <Link href={href}>
              <ListItem
                classes={{ selected: classes.listItemSelected }}
                component='a'
                button
                selected={router.asPath === href}
              >
                <ListItemText
                  primary={primaryText}
                  primaryTypographyProps={{ noWrap: true }}
                />
              </ListItem>
            </Link>
          </li>
        ))}
      </List>
      <List dense={true} subheader={<ListSubheader>Exchange</ListSubheader>}>
        {exchangeNav.map(({ primaryText, href }, i) => (
          <li key={primaryText}>
            <Link href={href}>
              <ListItem
                classes={{ selected: classes.listItemSelected }}
                component='a'
                button
                selected={router.asPath === href}
              >
                <ListItemText
                  primary={primaryText}
                  primaryTypographyProps={{ noWrap: true }}
                />
              </ListItem>
            </Link>
          </li>
        ))}
      </List>
      <List dense={true} subheader={<ListSubheader>Lending</ListSubheader>}>
        {lendingNav.map(({ primaryText, href }, i) => (
          <li key={primaryText}>
            <Link href={href}>
              <ListItem
                classes={{ selected: classes.listItemSelected }}
                component='a'
                button
                selected={router.asPath === href}
              >
                <ListItemText
                  primary={primaryText}
                  primaryTypographyProps={{ noWrap: true }}
                />
              </ListItem>
            </Link>
          </li>
        ))}
      </List>
      <Divider />
      <Link href='/tools'>
        <ListItem button component='a'>
          <ListItemIcon>
            <BuildIcon />
          </ListItemIcon>
          <ListItemText>Tools</ListItemText>
        </ListItem>
      </Link>
      <Divider />
      <ListItem
        button
        component='a'
        href='https://github.com/pelith/defi-handbook'
        target='_blank'
      >
        <ListItemIcon>
          <GitHubIcon />
        </ListItemIcon>
        <ListItemText>GitHub</ListItemText>
      </ListItem>
    </div>
  )
}

NavContent.propTypes = {}
NavContent.defaultProps = {}
