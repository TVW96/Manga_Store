import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import "./Nav.scss";
import siteIcon from "../Assets/Bubbles2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

function Nav() {
	const [show, setShow] = useState(false);
	const showDropdown = (e) => {
		setShow(!show);
	};
	const hideDropdown = (e) => {
		setShow(false);
	};
	const [show2, setShow2] = useState(false);
	const showDropdown2 = (e) => {
		setShow2(!show2);
	};
	const hideDropdown2 = (e) => {
		setShow2(false);
	};

	return (
		<nav>
			<bar1>FREE SHIPPING FOR ORDERS OVER $50</bar1>
			<bar2>
				<div className="MonkeyManga">
					<h3>Monkey Manga</h3>
					<img src={siteIcon} alt="" className="icon" />
				</div>

				<input
					type="search"
					placeholder="Search..."
					className="searchbar"
					id="searchbar"
				></input>
				<button className="btn btn-primary" type="button" id="btn-search">
					<FontAwesomeIcon
						icon={icon({ name: "search", style: "solid", size: "2xl" })}
						id="search-icon"
					/>
				</button>

				<ul className="section-3">
					<li>
						<Link className="nav-link" id="nav-login">
							Login/SignUp
						</Link>
					</li>
					<li>
						<Link className="nav-link" id="nav-cart">
							Cart
						</Link>
					</li>
				</ul>
			</bar2>
			<bar3>
				<ul>
					<Link className="nav-link">Home</Link>
					<Link className="nav-link">Coming Soon</Link>
					<Link className="nav-link">New Arrivals</Link>
					<Link className="nav-link">Best Sellers</Link>

					<Dropdown
						title="Dropdown"
						id="-nav-dropdown"
						show={show}
						onMouseEnter={showDropdown}
						onMouseLeave={hideDropdown}
						renderMenuOnMount={true}
					>
						<Dropdown.Toggle variant="secondary" className="dropdown-dark">
							Shop By Series
						</Dropdown.Toggle>
						<Dropdown.Menu>
							<Dropdown.Item href="#/action-1" id="item1">
								One Piece
							</Dropdown.Item>
							<Dropdown.Item href="#/action-1" id="item2">
								Chainsaw Man
							</Dropdown.Item>
							<Dropdown.Item href="#/action-1" id="item3">
								Demon Slayer
							</Dropdown.Item>
							<Dropdown.Item href="#/action-1" id="item4">
								Jujutsu Kaisen
							</Dropdown.Item>
							<Dropdown.Item href="#/action-1" id="item5">
								Hunter X Hunter
							</Dropdown.Item>
							<Dropdown.Item href="#/action-1" id="item6">
								My Hero Academia
							</Dropdown.Item>
							<Dropdown.Item href="#/action-1" id="item7">
								Spy X Family
							</Dropdown.Item>
							<Dropdown.Item href="#/action-1" id="item8">
								Boruto
							</Dropdown.Item>
							<Dropdown.Item href="#/action-1" id="item9">
								Boruto
							</Dropdown.Item>
							<Dropdown.Item href="#/action-1" id="item10">
								Boruto
							</Dropdown.Item>
							<Dropdown.Item href="#/action-1" id="item11">
								Boruto
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>

					<Dropdown
						title="Dropdown2"
						id="collapsible-nav-dropdown2"
						show={show2}
						onMouseEnter={showDropdown2}
						onMouseLeave={hideDropdown2}
						renderMenuOnMount={true}
					>
						<Dropdown.Toggle variant="secondary" className="dropdown-dark">
							Shop By Author
						</Dropdown.Toggle>
						<Dropdown.Menu>
							<Dropdown.Item href="#/action-1">Eiichiro Oda</Dropdown.Item>
							<Dropdown.Item href="#/action-1">Tite Kubo</Dropdown.Item>
							<Dropdown.Item href="#/action-1">Masashi Kishimoto</Dropdown.Item>
							<Dropdown.Item href="#/action-1">Junji Ito</Dropdown.Item>
							<Dropdown.Item href="#/action-1">Junji Ito</Dropdown.Item>
							<Dropdown.Item href="#/action-1">Junji Ito</Dropdown.Item>
							<Dropdown.Item href="#/action-1">Junji Ito</Dropdown.Item>
							<Dropdown.Item href="#/action-1">Junji Ito</Dropdown.Item>
							<Dropdown.Item href="#/action-1">Junji Ito</Dropdown.Item>
							<Dropdown.Item href="#/action-1">Junji Ito</Dropdown.Item>
							<Dropdown.Item href="#/action-1">Junji Ito</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>

					{/* <li className="bySeries">
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
					</li> */}

					<Link className="nav-link">About</Link>
					<Link className="nav-link">FAQ</Link>
					<Link className="nav-link">Contact</Link>
					<Link className="nav-link">Track Order</Link>
				</ul>
			</bar3>
		</nav>
	);
}

export default Nav;
