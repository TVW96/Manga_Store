import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import "./CarouselSlideShow.scss";

import DemonSlayer from "../../Assets/Demon-slayer-Manga-banner.jpg";
import OnePiece from "../../Assets/one-piece-banner.jpg";
import ChainsawMan from "../../Assets/Man-Bat-Chainsaw-Man.jpg";

function CarouselSlideShow() {
	return (
		<Container
			fluid
			style={{ padding: 0, margin: 0, width: "w-100" }}
			className="mb-5"
		>
			<Carousel>
				<Carousel.Item
					interval={2500}
					style={{ height: 520 }}
					id="carousel-Image"
				>
					<img src={ChainsawMan} alt="" id="carousel-Item" />
					<Carousel.Caption className="d-flex flex-column h-100 align-items-center justify-content-center">
						<h1>Chainsaw Man</h1>
						<Button className="button">Shop Now</Button>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item
					interval={2500}
					style={{ height: 520 }}
					id="carousel-Image"
				>
					<img src={OnePiece} alt="" id="carousel-Item" />
					<Carousel.Caption className="d-flex flex-column h-100 align-items-center justify-content-center">
						<h1>One Piece</h1>
						<Button className="button">Shop Now</Button>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item
					interval={2500}
					style={{ height: 520 }}
					id="carousel-Image"
				>
					<img src={DemonSlayer} alt="" id="carousel-Item" />
					<Carousel.Caption className="d-flex flex-column h-100 align-items-center justify-content-center">
						<h1>Demon Slayer</h1>
						<Button className="button">Shop Now</Button>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</Container>
	);
}

export default CarouselSlideShow;
