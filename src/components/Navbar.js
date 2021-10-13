import React from 'react';
import 'semantic-ui-css/semantic.css';
import { Link } from 'gatsby';
import { Menu, Icon } from 'semantic-ui-css'

const Navbar = ({active}) => {
    return (
        <React.Fragment>
            <Menu width='4'>
                <Menu.item active={active === 'home'}>
                    <Link icon='home' to="/"/>
                </Menu.item>
                <Menu.item active={active === 'games'}>
                    <Link icon='gamepad' to="/games"/>
                </Menu.item>
                <Menu.item active={active === 'contact'}>
                    <Link icon='group' to="/contact">Contact</Link>
                </Menu.item>
            </Menu>
        </React.Fragment>
    )
}
export default Navbar;