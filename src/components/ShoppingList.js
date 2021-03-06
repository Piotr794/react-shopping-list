import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Sidebar, Segment, Menu, Icon, Header } from 'semantic-ui-react';

class ShoppingList extends Component {
    state = { 
        visible: true, 
        activeItem: 'home'
      };

      toggleVisibility = () => this.setState({ visible: !this.state.visible });

    render() {
        const { visible } = this.state;

        return(
            <div className="App">
                <Menu pointing secondary>
                    <Menu.Menu className='logo' position='left'>
                    <li onClick={this.handleItemClick}><Link to='/'>Start</Link></li>
                    </Menu.Menu>
                    <Menu.Menu position='right'>
                    <li><Link to='/'>Wyloguj</Link></li>
                    </Menu.Menu>
                </Menu>
               
                <Sidebar.Pushable as={Segment}>
                    <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
                    <Menu.Item name='home'>
                        <Link to='/'>
                        <Icon name='home' />
                        Start
                        </Link>
                    </Menu.Item>
                    <Menu.Item name='shopping basket'>
                        <Link to='/basket'>
                        <Icon name='shopping basket' />
                        Zakupy
                        </Link>
                    </Menu.Item>
                    <Menu.Item name='calendar'>
                        <Link to='/contact'>
                        <Icon name='calendar' />
                        Okazje
                        </Link>
                    </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher>
                    <Segment basic>
                        <Header as='h3'>Your Shopping Basket</Header>
                        <h1>Your shopping List:</h1>

                        <ul>
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                        </ul>
                    </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }
}

export default ShoppingList;