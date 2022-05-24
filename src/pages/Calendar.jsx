import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import {
	Inject,
	Day,
	ScheduleComponent,
	ViewDirective,
	ViewsDirective,
	Week,
	WorkWeek,
	Month,
	Agenda,
	Resize,
	DragAndDrop,
} from '@syncfusion/ej2-react-schedule';
import React from 'react';

import { scheduleData } from '../data/dummy';
import { Header } from '../components';
// eslint-disable-next-line react/destructuring-assignment
const PropertyPane = (props) => <div className='mt-5'>{props.Children}</div>;
const Scheduler = () => {
	return (
		<div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
			<Header category='Page' title='Calendar' />
			<ScheduleComponent
				height='650px'
				eventSettings={{ dataSource: scheduleData }}
				selectedDate={new Date(2021, 0, 10)}>
				<ViewsDirective>
					{['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'].map((item) => (
						<ViewDirective key={item} option={item} />
					))}
				</ViewsDirective>
				<Inject
					services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
				/>
			</ScheduleComponent>
			<PropertyPane>
				<table style={{ width: '100%', background: 'white' }}>
					<tbody>
						<tr style={{ height: '50px' }}>
							<td style={{ width: '100%' }}>
								<DatePickerComponent
									value={new Date(2021, 0, 10)}
									showClearButton={false}
									placeholder='Current Date'
									floatingLabelType='Always'
								/>
							</td>
						</tr>
					</tbody>
				</table>
			</PropertyPane>
		</div>
	);
};

export default Scheduler;
