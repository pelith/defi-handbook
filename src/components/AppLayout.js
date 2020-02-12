import React from 'react'
import {
  Root,
  Header,
  SidebarTrigger,
  SidebarTriggerIcon,
  InsetSidebar,
  Content,
  ConfigGenerator,
} from '@mui-treasury/layout'
import Container from '@material-ui/core/Container'
import Toolbar from '@material-ui/core/Toolbar'
import HeaderContent from './HeaderContent'
import NavContent from './NavContent'

const config = ConfigGenerator({ addOnsIncluded: true })
config.setPrimarySidebarToInset()

export default function AppLayout(props) {
  const { children } = props

  return (
    <Root config={config.get()}>
      {({ headerStyles, containerStyles }) => (
        <>
          <Header>
            <Container>
              <Toolbar disableGutters>
                <SidebarTrigger className={headerStyles.leftTrigger}>
                  <SidebarTriggerIcon />
                </SidebarTrigger>
                <HeaderContent />
              </Toolbar>
            </Container>
          </Header>
          <Container className={containerStyles.root}>
            <InsetSidebar>
              <NavContent />
            </InsetSidebar>
            <Content>{children}</Content>
          </Container>
        </>
      )}
    </Root>
  )
}
