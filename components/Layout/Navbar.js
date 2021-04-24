import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, Container, Icon } from "semantic-ui-react";

function Navbar() {
  const router = useRouter();
  const isActive = (route) => router.pathname === route;

  return (
    <Menu fluid borderless>
      <Container text>
        <Link href="/">
          <Menu.Item>
            <Icon size="large" name="home" />
            Gato Social
          </Menu.Item>
        </Link>
        <Link href="/login">
          <Menu.Item header active={isActive("/login")}>
            <Icon size="large" name="sign in" />
            Đăng nhập
          </Menu.Item>
        </Link>

        <Link href="/signup">
          <Menu.Item header active={isActive("/signup")}>
            <Icon size="large" name="signup" />
            Đăng ký
          </Menu.Item>
        </Link>
      </Container>
    </Menu>
  );
}

export default Navbar;
