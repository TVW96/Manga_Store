import React from "react";
import CarouselSlideShow from "../Components/Products/CarouselSlideShow";
import HolidaySale from "../Components/Products/HolidaySale";

function Home() {
	return (
		<div className="page-site">
			<CarouselSlideShow />
			<div className="products-section-container">
				<HolidaySale />
			</div>
		</div>
	);
}

export default Home;
