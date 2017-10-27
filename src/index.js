import React from 'react';
import ReactDOM from 'react-dom';

import events from './data/events.json';

const element = (
  <div>
    					<table className="table">
							  <thead>
							    <tr>
							      <th scope="col">#</th>
							      <th scope="col">Name</th>
							      <th scope="col">Place</th>
							      <th scope="col">Date</th>
							      <th scope="col">Time</th>
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



ReactDOM.render(element, document.getElementById('root'));

