import React from "react";
import DemonSlayer from "../Assets/demonslayer-banner.jpg";
import Chainsaw from "../Assets/chainsawman-banner.jpg";
import Juju from "../Assets/jujutsu-kaisen-banner.jpg";

function Carousel() {
	return (
		<div className="carousel-container">
			<div className="carousel-inner">
				<div className="carousel-item">
					<img src={Juju} alt=""></img>
				</div>
				<div className="carousel-item">
					<img src={DemonSlayer} alt=""></img>
				</div>
				<div className="carousel-item">
					<img src={Chainsaw} alt=""></img>
				</div>
			</div>
		</div>
	);
}

export default Carousel;
