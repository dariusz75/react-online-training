import React from 'react';
import ReactDOM from 'react-dom';

const names = [
				{
				id: 1, 
				name: 'Henryk'
				},
				{
				id: 2, 
				name: 'Zdzisław'
				},
				{
				id: 3, 
				name: 'Janusz'
				} 
			   ];

const element = (
  <div>
    {names.map((arrayElement) => {
      return <p key={arrayElement.id}>{arrayElement.name}</p>;
    })}
  </div>
);

ReactDOM.render(element, document.getElementById('root'));


