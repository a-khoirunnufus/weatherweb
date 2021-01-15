import React from 'react';
import SolidCard from '../atoms/SolidCard';

export default function SearchBox() {
  return (
  	<SolidCard>
  		<div className="search-box row">
	  		<span className="material-icons">
					search
				</span>
		 		<input spellCheck="false" />
		 	</div>
	 	</SolidCard>
  );
}