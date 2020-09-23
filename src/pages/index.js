import React from "react";
import Layout from "../components/layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from "react-bootstrap";
import "../styles/index.scss";
import {MdStar} from 'react-icons/md';
import { IconContext } from "react-icons";
import SearchBar from "../components/SearchBar";
import { Link } from "gatsby";
import Head from "../components/head";
import voteIcon from "../../static/img/vote-icon.png"
import directIcon from "../../static/img/direct-icon.png"
import federalIcon from "../../static/img/federal-icon.png"



export default function Home() {
	return (
		<Layout>
			<Head title="Home"/>
			<section class="hero-section" >
			<div class="hero-content">
				<div class="d-flex flex-row align-items-center">
					<h1 class="col-md-12 col-sm-12 center">Real <span class="underlined">interviews</span>. <br class="h1-brk"/>Real <span class="underlined">candidates</span>.</h1>

					{/* <h1 class="col-md-12 col-sm-12 center">REAL <span class="underlined">INTERVIEWS</span>. <br class="h1-brk"/>REAL <span class="underlined">CANDIDATES</span>.</h1> */}
				</div>
				<div class="d-flex flex-row justify-content-center align-items-center">
					{/* <div class="col-md-4 col-sm-10 star-container"> */}
					<IconContext.Provider value={{className:"star-icon", size: '40px'}}>
						<div class="col-md-4 col-sm-10 star-container">
							<MdStar />
							<MdStar />
							<MdStar />
						</div>
					</IconContext.Provider>
					{/* </div> */}
				</div>
				<div class="d-flex flex-column justify-content-center align-items-center h-25">
					<p class="search-text">Learn who's on your ballot</p>
					<SearchBar/>
				</div>
			</div>
			</section>
			<section class="about-content">
				<div class="about-content-text">
					<h2 class="about-content-header-text">A word about our project</h2>
					<p class="about-content-description">Washington Voting Project was founded in July 2020 with a vision to provde people in Central Washington with greater accessibility to local elections.</p>
					<Link to="/about" class="about-learn-more-btn">LEARN MORE</Link>
				</div>
				<iframe class="about-video" src="https://www.youtube.com/embed/P1MK_d20sO0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</section>
			<section class="local-content">
				<h2 class="local-content-header-text">Why does <span class="underlined">local</span> matter?</h2>
				<div class="local-content-list">
					<div class="local-content-card">
						<img src={directIcon} alt="Direct-Icon" class="local-content-img"></img>
						<div class="local-content-card-text">
							<p class="local-content-card-header">Direct Effect On Your Life</p>
							<p class="local-content-card-paragraph">It’s plain to see the effects of local governance in everyday life. County Commissioners oversee local regulations, and allocate and approve County spending. City governments are responsible for appointing police chiefs, managing housing and zoning policies, and even ensuring that your garbage is picked up each week. Washington State Congressmembers pass state laws and advocate for small districts in the State. </p>
						</div>
					</div>
					<div class="local-content-card row-reverse">
						<img src={federalIcon} alt="Federal-Icon" class="local-content-img"></img>
						<div class="local-content-card-text">
							<p class="local-content-card-header">Local Leads When Federal Lacks</p>
							<p class="local-content-card-paragraph">While most news about legislation is focused on the federal level, meaningful changes often occur on the local level. While federal lawmaking in the US often encounters roadblocks in the forms of gridlock, filibustering, and lobbying. Recently, local governments around the country have passed controversial legislation including reparations for slavery, police budget cuts, and gun control.</p>
						</div>
					</div>
					<div class="local-content-card">
						<img src={voteIcon} alt="Vote-Icon" class="local-content-img"></img>
						<div class="local-content-card-text">
							<p class="local-content-card-header">Your Vote Matters</p>
							<p class="local-content-card-paragraph">With fewer people voting in county and city elections, your vote is one of a smaller pool of voters. These elections are often decided by small margins — your vote could be the one that turns the tables! When it comes to local elections, you also have the chance to advocate for issues that matter to you by writing opinion pieces in newspapers, speaking to candidates at public events, and engaging with other regional stakeholders. </p>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}
