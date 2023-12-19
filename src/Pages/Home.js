import React from "react";
import Carousel, { CarouselItem } from "../Components/Carousel";
import Jujutsu from "../Assets/jujutsu-kaisen-banner.jpg";
import Chainsaw from "../Assets/chainsawman-banner.jpg";
import DemonSLayer from "../Assets/DemonSlayer-banner.jpg";
import "../Components/Carousel.sass";

function Home() {
	return (
		<div>
			<Carousel>
				<CarouselItem>
					<img src={Jujutsu} alt="" id="styles" />
				</CarouselItem>
				<CarouselItem>
					<img src={Chainsaw} alt="" id="styles" />
				</CarouselItem>
				<CarouselItem>
					<img src={DemonSLayer} alt="" id="styles" />
				</CarouselItem>
			</Carousel>
		</div>
	);
}

export default Home;
