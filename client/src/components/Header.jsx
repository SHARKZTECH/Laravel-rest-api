'use client';
import { Dropdown, Navbar,Avatar, DarkThemeToggle } from 'flowbite-react';

export default function Header() {
  return (
    <Navbar
      fluid
      rounded
    >
      <Navbar.Brand href="/">
             <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Laravel React
        </span>
      </Navbar.Brand>
       <DarkThemeToggle/>
      <div className="flex md:order-2">
        <Dropdown
          inline
          label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded/>}
        >
          <Dropdown.Header>
            <span className="block text-sm">
              Bonnie Green
            </span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>
            Dashboard
          </Dropdown.Item>
          <Dropdown.Item>
            Settings
          </Dropdown.Item>
          <Dropdown.Item>
            Earnings
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            Sign out
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>

        <Navbar.Link
          active
          href="/"
        >
          <h4>
            Home
          </h4>
        </Navbar.Link>
        <Navbar.Link href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">
          Services
        </Navbar.Link>
        <Navbar.Link href="#">
          Login
        </Navbar.Link>
        <Navbar.Link href="/register">
          Register
        </Navbar.Link>

      </Navbar.Collapse>
    </Navbar>
  )
}


