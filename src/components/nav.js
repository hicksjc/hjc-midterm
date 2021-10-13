import React from 'react';
import 'semantic-ui-css/semantic.css';
import { Menu, Icon } from 'semantic-ui-react'

const Nav = () => {
    return (
        <React.Fragment>
            <Menu width='4'>
                <Menu.item name='home'>
                    <Icon name='home'></Icon>
                </Menu.item>
            </Menu>
        </React.Fragment>
    )
}
export default Nav;