import React from 'react';
import SolidCard from '../atoms/SolidCard';

export default function SearchBox() {
  return (
  	<SolidCard>
  		<div className="search-box row">
	  		<span class="material-icons">
					search
				</span>
		 		<input spellcheck="false" />
		 	</div>
	 	</SolidCard>
  );
}