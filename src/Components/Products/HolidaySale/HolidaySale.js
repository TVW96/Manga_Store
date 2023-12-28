import React from "react";
import "./HolidaySale.scss";
import Hunter5 from "../../../Assets/Hunter_X_Hunter/hunterxhuntervol5.jpg";

function HolidaySale() {
	return (
		<div className="products-section">
			<h2>HOLIDAY SALE</h2>
			<div className="holiday-container">
				{/* This is where I would map my data */}
				<div className="holiday-item">
					<div className="sale-tag"></div>
					<img
						src={Hunter5}
						alt=""
						style={{ width: 150 }}
						className="d-flex justify-content-center"
					/>
					<p>YOSHIHIRO TOGASHI</p>
					<h3>HUNTER X HUNTER, VOL. 5</h3>
					<div className="sale">
						<h3 className="sale-price">$6.99</h3>
						<h3 className="price">$9.99</h3>
					</div>
				</div>
				{/* map data above */}
			</div>
		</div>
	);
}

export default HolidaySale;
