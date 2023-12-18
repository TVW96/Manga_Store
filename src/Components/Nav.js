import React from "react";

function Nav() {
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
				<button>Search</button>
				<div>
					<div>Login/SignUp</div>
					<div>Cart</div>
				</div>
			</bar2>
			<bar3>
				<ul>
					<li>Home</li>
					<li>Coming Soon</li>
					<li>New Arrivals</li>
					<li>Best Sellers</li>
					<li className="bySeries">
						Shop By Series ^
						<ul id="dropdown">
							<li>1</li>
							<li>2</li>
							<li>3</li>
							<li>4</li>
							<li>5</li>
							<li>6</li>
						</ul>
					</li>
					<li className="byAuthor">
						Shop By Author ^
						<ul id="dropdown">
							<li>1</li>
							<li>2</li>
							<li>3</li>
							<li>4</li>
							<li>5</li>
							<li>6</li>
						</ul>
					</li>
					<li>About</li>
					<li>FAQ</li>
					<li>Contact</li>
					<li>Track Order</li>
				</ul>
			</bar3>
		</nav>
	);
}

export default Nav;
