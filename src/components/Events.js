import React from 'react';

import events from '../data/events.json';


const Events = (
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
      			return <tr>
							      <td key={arrayElement.id}>{arrayElement.id}</td>
							      <td>{arrayElement.name}</td>
							      <td>{arrayElement.place}</td>
							      <td>{arrayElement.date}</td>
							      <td>{arrayElement.time}</td>
							    </tr>
						})}
							  </tbody>
							</table>
    
  </div>
);


export default Events;
