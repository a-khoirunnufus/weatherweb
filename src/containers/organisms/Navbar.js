import React from 'react';
import Brand from '../../components/atoms/Brand';
import GlassCard from '../../components/atoms/GlassCard';
import SearchBox from '../../components/molecules/SearchBox';

export default function Navbar() {
	return (
		<GlassCard>
			<div className="navbar">
				<div className="container-lg row">
					<Brand />
					<SearchBox />
				</div>
			</div>
		</GlassCard>
	);
}