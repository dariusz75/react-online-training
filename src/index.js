import React from 'react';
import ReactDOM from 'react-dom';

import events from './data/events.json';

const element = (
  <div>
    					<table className="table">
							  <thead>
							    <tr>
							      <th>#</th>
							      <th>Name</th>
							      <th>Place</th>
							      <th>Date</th>
							      <th>Time</th>
							    </tr>
							  </thead>
							  <tbody>
				{events.map((arrayElement) => {

					const eventDate = new Date(arrayElement.date);
					const todaysDate = Date.now();

					if (eventDate >= todaysDate) {
      			return (<tr>
							      <td key={arrayElement.id}>{arrayElement.id}</td>
							      <td>{arrayElement.name}</td>
							      <td>{arrayElement.place}</td>
							      <td>{arrayElement.date}</td>
							      <td>{arrayElement.time}</td>
							    </tr>);
					}
					return null;
						})}
						
							  </tbody>
							</table>
    
  </div>
);


ReactDOM.render(element, document.getElementById('root'));

