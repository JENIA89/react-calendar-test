import React, { FC } from 'react'
import { Layout, Menu, Row } from 'antd'
import { useHistory } from 'react-router'
import { RouteNames } from '../routes'
import { useTypedSelector } from '../hooks/useTypedSelector'

const NavBar:FC = () => {
    const router = useHistory()
    console.log(router);
    const { isAuth } = useTypedSelector(state => state.auth)
    return (
        <Layout.Header>
            <Row justify='end'>
                {
                    isAuth
                    ?
                    <>
                    <div style={{color: 'white'}}>Evgene</div>
                    <Menu theme="dark" mode="horizontal" selectable={false}>
                        <Menu.Item 
                            onClick={()=>console.log('выйти')}
                            key='1'
                            >Выйти</Menu.Item>
                    </Menu>
                    </>
                    :
                    <Menu theme="dark" mode="horizontal" selectable={false}>
                        <Menu.Item 
                            onClick={()=>router.push(RouteNames.LOGIN)}
                            key='1'
                        >Login</Menu.Item>
                    </Menu>
                }
            
            </Row>
        </Layout.Header>
    )
}

export default NavBar
