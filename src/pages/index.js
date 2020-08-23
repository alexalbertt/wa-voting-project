import React from "react";
import Layout from "../components/layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from "react-bootstrap";
import "../styles/index.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faStar, faAngleDoubleDown
} from '@fortawesome/free-solid-svg-icons'
import SearchBar from "../components/SearchBar";


export default function Home() {
	return (
		<Layout>
			<section class="hero-section" >
				{/* <Container fluid class="d-flex flex-column justify-content-around h-75">
					<Row class="d-flex flex-row align-items-center">
						<h1 class="col-md-12 col-sm-12 center">REAL <span class="underlined">INTERVIEWS</span>. <br class="h1-brk"/>REAL <span class="underlined">CANIDATES</span>.</h1>
					</Row>
					<Row class="d-flex flex-row justify-content-center align-items-center">
						<div class="col-md-4 col-sm-8 star-container">
							<FontAwesomeIcon icon={faStar} size="3x" />
							<FontAwesomeIcon icon={faStar} size="3x" />
							<FontAwesomeIcon icon={faStar} size="3x" />
						</div>
					</Row>
					<Row class="d-flex flex-row justify-content-center align-items-center h-25" style={{backgroundColor:"blue"}}>
						<p>Learn who's on your ballot</p>
						<SearchBar/>
					</Row>
				</Container>
				<div class="scroll-icon">
					<FontAwesomeIcon icon={faAngleDoubleDown} size='3x' />
				</div> */}
			<div class="hero-content">
				<div class="d-flex flex-row align-items-center">
					<h1 class="col-md-12 col-sm-12 center">REAL <span class="underlined">INTERVIEWS</span>. <br class="h1-brk"/>REAL <span class="underlined">CANIDATES</span>.</h1>
				</div>
				<div class="d-flex flex-row justify-content-center align-items-center">
					<div class="col-md-4 col-sm-10 star-container">
						<FontAwesomeIcon icon={faStar} size="3x" />
						<FontAwesomeIcon icon={faStar} size="3x" />
						<FontAwesomeIcon icon={faStar} size="3x" />
					</div>
				</div>
				<div class="d-flex flex-column justify-content-around align-items-center h-25">
					<p class="search-text">Learn who's on your ballot</p>
					<SearchBar/>
				</div>
			</div>
			<div class="scroll-icon">
				<FontAwesomeIcon icon={faAngleDoubleDown} size='3x' />
			</div>
			</section>
			<section class="about-content">
				<h2 class="about-content-header-text">A Word About <br class="h1-brk"/>Our Project</h2>
				<p class="about-content-text">Washington Voting Project was founded in July 2020 with a vision to provde people in Central Washington with greater accessibility to local elections.</p>
				<iframe class="about-video" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
			</section>
			<section class="local-content">
				<h2 class="local-content-header-text">Why Does Local Matter?</h2>
				<div>
					<div>
						<img></img>
						<div>
							<p>Direct Effect On Your Life</p>
							<p>nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
						</div>
					</div>
					<div>
						<img></img>
						<div>
							<p>Local Leads When Federal Lacks</p>
						</div>
					</div>
					<div>
						<img></img>
						<div>
							<p>Your Vote Matters</p>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}
