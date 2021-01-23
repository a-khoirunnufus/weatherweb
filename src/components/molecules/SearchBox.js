import React from 'react';
import SolidCard from '../atoms/SolidCard';

export default function SearchBox({ handleSearch }) {
  return (
  	<SolidCard>
  		<div className="search-box row">
	  		<span className="material-icons">
					search
				</span>
		 		<input 
		 			spellCheck="false" 
		 			placeholder="Find City"
		 			onKeyPress={ e => handleSearch(e) } 
		 		/>
		 	</div>
	 	</SolidCard>
  );
}