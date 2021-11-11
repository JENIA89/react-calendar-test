import { Button, Layout, Row } from 'antd'
import React, { FC } from 'react'
import EventCalendar from '../components/EventCalendar'

const Event:FC = ()=> {
    return (
        <Layout>
            <EventCalendar events={[]}/>
            <Row justify='center'>
                <Button>Добавить событие</Button>
            </Row>
        </Layout>
    )
}

export default Event
