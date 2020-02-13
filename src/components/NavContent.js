import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListSubheader from '@material-ui/core/ListSubheader'
import ListItemText from '@material-ui/core/ListItemText'

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

export default function NavContent() {
  const router = useRouter()

  return (
    <>
      <Link href='/'>
        <ListItem component='a' button selected={router.asPath === '/'}>
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
              <ListItem component='a' button selected={router.asPath === href}>
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
              <ListItem component='a' button selected={router.asPath === href}>
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
              <ListItem component='a' button selected={router.asPath === href}>
                <ListItemText
                  primary={primaryText}
                  primaryTypographyProps={{ noWrap: true }}
                />
              </ListItem>
            </Link>
          </li>
        ))}
      </List>
    </>
  )
}

NavContent.propTypes = {}
NavContent.defaultProps = {}
