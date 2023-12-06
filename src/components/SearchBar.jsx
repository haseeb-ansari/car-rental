import { IoIosSearch } from "react-icons/io";


const SearchBar = () => {
	return (
		<>
			<div className="blog-search-bar">
				<h3>Search</h3>
				<div className="blog-search-form">
					<input type="text" placeholder="Search Here..." />
                    <div className="search-icon">
                        <IoIosSearch/>
                    </div>
				</div>
			</div>
		</>
	);
};

export default SearchBar;
