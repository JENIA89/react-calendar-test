import { Button, Layout, Modal, Row } from 'antd'
import React, { FC, useState } from 'react'
import EventCalendar from '../components/EventCalendar'
import EventForm from '../components/EventForm';

const Event:FC = ()=> {
	const [isModalVisible, setIsModalVisible] = useState(false);
    return (
        <Layout>
            <EventCalendar events={[]}/>
            <Row justify='center'>
                <Button
				onClick={()=>setIsModalVisible(true)}
				>
					Добавить событие</Button>
            </Row>
			<Modal
				title='Добавить событие'
				visible={isModalVisible}
				footer={null}
				onCancel={()=>setIsModalVisible(false)}
			>
				<EventForm/>
			</Modal>
        </Layout>
    )
}

export default Event
