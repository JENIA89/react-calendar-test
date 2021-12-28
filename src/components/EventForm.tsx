import React, { FC } from 'react'
import { Button, DatePicker, Form, Input, Row } from 'antd'
import { rules } from '../utils/rules';


const EventForm: FC = () => {
    return (
        <Form>
			<Form.Item
                label="Описание события"
                name="вdescription"
                rules={[rules.required()]}
            >
                <Input />
            </Form.Item>
			<Form.Item
				label="Дата события"
				name="date"
				rules={[rules.required()]}
			>
				<DatePicker  />
			</Form.Item>
			<Row justify='end'>
			<Form.Item>
                <Button type="primary" htmlType="submit" >
                    Создать
                </Button>
            </Form.Item>
			</Row>
		</Form>
    )
}

export default EventForm;