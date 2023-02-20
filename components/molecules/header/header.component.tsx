import { UserAvatar } from '@/components/atoms/avatar'
import { LoginButton } from '@/components/atoms/loginButton'
import { PAGES } from '@/constants/pages'
import { Navbar, Link, Text } from '@nextui-org/react'
export const Header = () => {
  return (
    <Navbar isBordered variant="floating">
      <Navbar.Brand>
        <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
        <Text b color="inherit" hideIn="xs">
          IChoose
        </Text>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        hideIn="xs"
        variant="highlight-solid"
        activeColor="primary">
        <Navbar.Link href="/question-answer">Q & A</Navbar.Link>
        <Navbar.Link href="/">My Preferences</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Item>
          <LoginButton />
        </Navbar.Item>
        <Navbar.Item>
          <UserAvatar />
        </Navbar.Item>
      </Navbar.Content>
      <Navbar.Collapse>
        {PAGES.map(({ id, name, url }) => (
          <Navbar.CollapseItem key={id}>
            <Link
              color="inherit"
              css={{
                minWidth: '100%'
              }}
              href={url}>
              {name}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  )
}
