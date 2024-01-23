import React from "react";
import CarouselSlideShow from "../Components/Products/CarouselSlideShow/CarouselSlideShow";
import HolidaySale from "../Components/Products/HolidaySale/HolidaySale";
import ShopBySeries from "../Components/Products/ShopBySeries/ShopBySeries";
import ShopNowPanel from "../Components/Products/ShopNowPanels/ShopNowPanel";

function Home() {
	return (
		<div className="page-site">
			<CarouselSlideShow />
			<div className="products-section-container">
				<HolidaySale />
				<ShopNowPanel />
				<ShopBySeries />
			</div>
		</div>
	);
}

export default Home;
