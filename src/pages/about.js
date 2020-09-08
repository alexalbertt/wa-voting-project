import React from "react"
import Layout from "../components/layout"
import "../styles/about.scss";
import {MdStar} from 'react-icons/md';
import { IconContext } from "react-icons";
import xavierprofilepic from "../../static/img/xavier-profile-pic.png";
import alexprofilepic from "../../static/img/alex-profile-pic.png";


export default function About() {
    return (
            <Layout>
                <section class="about-hero">
                    <h2 class="about-header">About <span class="underlined">us</span></h2> 
                    <p class="about-text">Washington Voting Project began in July 2020 as a personal educational project. As college students returning to the area, we noticed yard signs popping up around Central Washington. There was one problem: we didn’t know a thing about these candidates. We didn’t know what they looked like. Didn’t know what their voices sounded like. And that was a problem.<br/><br/>


        Washington Voting Project is the answer. With a vision to provide people in Central Washington with greater accessibility to local elections, we intend to interview each general election candidate for races in Chelan, Douglas, Okanogan, Grant, and Kittitas Counties. We firmly believe that one of the best ways to learn about a candidate and get beyond the yard sign is simply to listen to them speak.<br/><br/>


        If you have any questions about our organization or would like to contact Washington Voting Project, email team@wavoting.org.</p>
        <IconContext.Provider value={{className:"star-icon", size: '40px'}}>
						<div class="col-md-4 col-sm-10 star-container ">
							<MdStar />
							<MdStar />
							<MdStar />
						</div>
					</IconContext.Provider>
                </section>
                <section class="about-team-section">
                    <h2 class="about-header">Meet the <span class="underlined">team</span></h2>
                    <div class="about-team-content">
                        <div class="name-card row-reverse">
                            <img src={xavierprofilepic} alt="Xavier-Profile" class="profile-pic"></img>
                            <div class="name-card-text">
                                <h3 class="name-card-text-name">Xavier Martinez</h3>
                                <div class="name-card-text-division"></div>
                                <h3 class="name-card-text-title">co-founder and interviewer</h3>
                            </div> 
                        </div>
                        <p class="name-card-paragraph">After graduating from Wenatchee High School in 2019, Xavier packed his bags and headed to Palo Alto, California. Now a sophomore at Stanford University, he studies economics and public policy. After his unexpected return to Central Washington last spring, he rekindled his love for the region and its values. Xavier is passionate about the issues affecting the Central Washington region, including land management, the role of the federal government, and immigration. When he’s not interviewing political candidates, you can find Xavier mountain biking, playing cards, or playing with his dog, Lucy. </p>
                        <div class="name-card">
                            <img src={alexprofilepic} alt="Alex-Profile" class="profile-pic"></img>
                            <div class="name-card-text col-reverse">
                                <h3 class="name-card-text-name">Alex Albert</h3>
                                <div class="name-card-text-division"></div>
                                <h3 class="name-card-text-title">co-founder and director of tech</h3>
                            </div>
                        </div>
                        <p class="name-card-paragraph">Following his graduation from Wenatchee High School in 2019, Alex headed up and over the mountains to the University of  Washington in Seattle where he is currently a sophomore. At the UW, Alex is pursuing a double major in Computer Science and Economics. Last spring, after witnessing the poor federal response to the COVID-19 pandemic, Alex realized the importance of local governance and became inspired to learn more about the issues affecting Central Washington. In his free time when Alex is not developing websites, you can catch him wakeboarding, lifting weights, playing spikeball, or reading a good book.</p>
                    </div>
                </section>
            </Layout>
    );
}