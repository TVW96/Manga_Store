import React from "react";
import { enableRipple } from "@syncfusion/ej2-base";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
enableRipple(true);

function Nav() {
	let Authors = [
		{
			text: "Tite Kubo",
		},
		{
			text: "Masashi Kishimoto",
		},
		{
			text: "Eiichiro Oda",
		},
		{
			text: "Junji Ito",
		},
	];
	let Series = [
		{
			text: "Jujutsu Kaisen",
		},
		{
			text: "Chainsaw Man",
		},
		{
			text: "Boruto",
		},
		{
			text: "Demon Slayer",
		},
	];
	return (
		<nav>
			<bar1>FREE SHIPPING FOR ORDERS OVER $50</bar1>
			<bar2>
				<div>Manga Store Logo</div>
				<input
					type="search"
					id="site-search"
					className="search"
					placeholder="Search..."
				></input>
				<ButtonComponent cssClass="e-info">Search</ButtonComponent>
				<div>
					<ButtonComponent cssClass="e-link">Login/SignUp</ButtonComponent>
					<ButtonComponent cssClass="e-link">Cart</ButtonComponent>
				</div>
			</bar2>
			<bar3>
				<ul>
					<ButtonComponent cssClass="e-link">Home</ButtonComponent>
					<ButtonComponent cssClass="e-link">Coming Soon</ButtonComponent>
					<ButtonComponent cssClass="e-link">New Arrivals</ButtonComponent>
					<ButtonComponent cssClass="e-link">Best Sellers</ButtonComponent>
					<li className="bySeries">
						<DropDownButtonComponent
							items={Series}
							iconCss="ddb-icons e-message"
						>
							Shop By Series
						</DropDownButtonComponent>
					</li>
					<li className="byAuthor">
						<DropDownButtonComponent
							items={Authors}
							iconCss="ddb-icons e-message"
						>
							Shop By Author
						</DropDownButtonComponent>
					</li>
					<ButtonComponent cssClass="e-link">About</ButtonComponent>
					<ButtonComponent cssClass="e-link">FAQ</ButtonComponent>
					<ButtonComponent cssClass="e-link">Contact</ButtonComponent>
					<ButtonComponent cssClass="e-link">Track Order</ButtonComponent>
				</ul>
			</bar3>
		</nav>
	);
}

export default Nav;
