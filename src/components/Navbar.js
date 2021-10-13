import React from 'react';
import 'semantic-ui-css/semantic.css';
import { Link } from 'gatsby';
import { Menu } from 'semantic-ui-react'

const Navbar = ({active}) => {
    return (
        <React.Fragment>
            <Menu width='4'>
                <Menu.Item active={active === 'home'}>
                    <Link icon='home' to="/">Home</Link>
                </Menu.Item>
                <Menu.Item active={active === 'games'}>
                    <Link icon='gamepad' to="/games">Games</Link>
                </Menu.Item>
                <Menu.Item active={active === 'contact'}>
                    <Link icon='group' to="/contact">Contact</Link>
                </Menu.Item>
            </Menu>
        </React.Fragment>
    )
}
export default Navbar;