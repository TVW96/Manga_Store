import React, { useState } from "react";

const SearchBar = () => {
	const [searchInput, setSearchInput] = useState("");

	const mangas = [
		{ name: "Chainsaw Man", volume: "Vol.1", author: "Tatsuki Fujimoto" },
		{ name: "Chainsaw Man", volume: "Vol.2", author: "Tatsuki Fujimoto" },
		{ name: "Chainsaw Man", volume: "Vol.3", author: "Tatsuki Fujimoto" },
		{ name: "Chainsaw Man", volume: "Vol.4", author: "Tatsuki Fujimoto" },
		{ name: "Chainsaw Man", volume: "Vol.5", author: "Tatsuki Fujimoto" },
		{ name: "Chainsaw Man", volume: "Vol.6", author: "Tatsuki Fujimoto" },
		{ name: "Hunter X Hunter", volume: "Vol.1", author: "Yoshihiro Togashi" },
		{ name: "Hunter X Hunter", volume: "Vol.2", author: "Yoshihiro Togashi" },
		{ name: "Hunter X Hunter", volume: "Vol.3", author: "Yoshihiro Togashi" },
		{ name: "Hunter X Hunter", volume: "Vol.4", author: "Yoshihiro Togashi" },
		{ name: "Hunter X Hunter", volume: "Vol.5", author: "Yoshihiro Togashi" },
		{ name: "Hunter X Hunter", volume: "Vol.6", author: "Yoshihiro Togashi" },
		{ name: "My Hero Academia", volume: "Vol.1", author: "Kohei Horikoshi" },
		{ name: "My Hero Academia", volume: "Vol.2", author: "Kohei Horikoshi" },
		{ name: "My Hero Academia", volume: "Vol.3", author: "Kohei Horikoshi" },
		{ name: "My Hero Academia", volume: "Vol.4", author: "Kohei Horikoshi" },
		{ name: "My Hero Academia", volume: "Vol.5", author: "Kohei Horikoshi" },
		{ name: "My Hero Academia", volume: "Vol.6", author: "Kohei Horikoshi" },
		{ name: "Spy X Family", volume: "Vol.1", author: "Tatsuya Endo" },
		{ name: "Spy X Family", volume: "Vol.2", author: "Tatsuya Endo" },
		{ name: "Spy X Family", volume: "Vol.3", author: "Tatsuya Endo" },
		{ name: "Spy X Family", volume: "Vol.4", author: "Tatsuya Endo" },
		{ name: "Spy X Family", volume: "Vol.5", author: "Tatsuya Endo" },
		{ name: "Spy X Family", volume: "Vol.6", author: "Tatsuya Endo" },
	];

	const handleChange = (e) => {
		e.preventDefault();
		setSearchInput(e.target.value);
	};

	if (searchInput.length > 0) {
		mangas.filter((manga) => {
			return manga.name.match(searchInput);
		});
	}

	return (
		<div>
			<input
				type="search"
				placeholder="Search..."
				onChange={handleChange}
				value={searchInput}
			/>

			<table>
				<tr>
					<th>Manga</th>
					<th>Volume</th>
					<th>Author</th>
				</tr>

				{mangas.map((manga) => {
					<div>
						<tr>
							<td>{manga.name}</td>
							<td>{manga.volume}</td>
							<td>{manga.author}</td>
						</tr>
					</div>;
				})}
			</table>
		</div>
	);
};

export default SearchBar;
