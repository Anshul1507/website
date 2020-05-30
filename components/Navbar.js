import React, { useState } from "react";
// import { func, string } from "prop-types";
import styled from "styled-components";
import Link from "next/link";
import SideNav from "./SideNav";
// const Container = styled.nav`
// 	color: ${({ theme }) => theme.text} !important;
// 	background-color: ${({ theme }) => theme.body};
// 	margin-bottom: 1.45rem;
// `;

const Nav = styled.nav`
	font-family: Sen !important;
	justify-content: space-between !important;
`;
const StyledNavLinks = styled.div`
	display: flex;
	align-items: center;
`;

const StyledList = styled.ul`
	display: flex;
	justify-content: end;
	align-items: center;
	padding: 0;
	margin: 0;
	list-style: none;
	@media (max-width: 992px) {
		display: none;
	}
`;
const StyledListItem = styled.li`
	position: relative;
	& > a {
		color: rgba(0, 0, 0, 0.5);
	}
`;

const StyledMenu = styled(StyledListItem)`
	margin: 0 0;
	list-style: none;
	height: 32px;
	img {
		width: 32px;
		cursor: pointer;
	}
	display: none;
	@media (max-width: 992px) {
		display: block;
	}
`;

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<div className="container">
			<Nav className="navbar navbar-expand-lg navbar-light px-0">
				<Link href="/">
					<a
						to="/"
						style={{ fontWeight: "700", color: "#424242" }}
						className="nav-link navbar-brand px-0"
					>
						<img
							className="img-fluid mb-1"
							src="static/images/logo.png"
							alt="logo"
							width="45"
						/>{" "}
						DSC KIET
					</a>
				</Link>

				<StyledNavLinks>
					<StyledList
						className="navbar-nav mr-auto nav justify-content-end"
						style={{ width: "100%" }}
					>
						<StyledListItem
							className="nav-item m-1 "
							style={{ fontWeight: "600" }}
						>
							<Link href="/">
								<a
									to="/"
									style={{ fontWeight: "600" }}
									className="nav-link"
									exact="true"
									// activeClassName="active"
								>
									Home
								</a>
							</Link>
						</StyledListItem>

						<StyledListItem
							className="nav-item m-1"
							style={{ fontWeight: "600" }}
						>
							<Link href="/about">
								<a
									to="/about"
									style={{ fontWeight: "600" }}
									className="nav-link"
									// activeClassName="active"
								>
									About
								</a>
							</Link>
						</StyledListItem>

						<StyledListItem
							className="nav-item m-1"
							style={{ fontWeight: "600" }}
						>
							<Link href="/team">
								<a
									to="/team"
									style={{ fontWeight: "600" }}
									className="nav-link"
									// activeClassName="active"
								>
									Team
								</a>
							</Link>
						</StyledListItem>
						<StyledListItem
							className="nav-item m-1"
							style={{ fontWeight: "600" }}
						>
							<Link href="/contact">
								<a
									to="/contact"
									style={{ fontWeight: "600" }}
									className="nav-link"
									// activeClassName="active"
								>
									Contact
								</a>
							</Link>
						</StyledListItem>
					</StyledList>
				</StyledNavLinks>
				<StyledMenu>
					<img
						src={`/static/icons/menu.svg`}
						alt="menu"
						onClick={toggleMenu}
					/>
				</StyledMenu>
				<SideNav isOpen={isOpen} openMenu={toggleMenu} />
			</Nav>
		</div>
	);
};

// Navbar.propTypes = {
//   theme: string.isRequired,
//   toggleTheme: func.isRequired,
// };

export default Navbar;
