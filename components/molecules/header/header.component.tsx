import { UserAvatar } from '@/components/atoms/avatar'
import { LoginButton } from '@/components/atoms/loginButton'
import { Navbar, Button, Link, Text } from '@nextui-org/react'

const collapseItems = [
  'Features',
  'Customers',
  'Pricing',
  'Company',
  'Legal',
  'Team',
  'Help & Feedback',
  'Login',
  'Sign Up'
]

export const Header = () => {
  return (
    <Navbar isBordered variant="floating">
      <Navbar.Brand>
        <Navbar.Toggle aria-label="toggle navigation" />
        <Text b color="inherit" hideIn="xs">
          IChoose
        </Text>
      </Navbar.Brand>
      <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
        <Navbar.Link href="#"></Navbar.Link>
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
        {collapseItems.map((item) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: '100%'
              }}
              href="#">
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  )
}
