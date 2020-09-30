import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import "../styles/candidate.scss";
import noInterviewPic from "../../static/img/no-interview-pic.png";
import Head from "../components/head";




export const query = graphql`
    query($slug: String!) {
        contentfulCandidate(slug : {eq: $slug}) {
            name
            position
            youtubeLink
            profilePicture { 
                fluid(maxWidth: 980) {
                    ...GatsbyContentfulFluid
                }
            }
            pastText {
                json
            }
            presentText {
                json
            }
            futureText {
                json
            }
            websiteLink
        }
    }
`
const candidate = (props) => {
    return(
        <Layout>
            <Head title={props.data.contentfulCandidate.name}/>
            <div class="candidate-content">
                <h2 class="candidate-header underlined">{props.data.contentfulCandidate.name}</h2>
                <p class="candidate-position">Candidate for {props.data.contentfulCandidate.position}</p>
                {props.data.contentfulCandidate.youtubeLink === null ? <img src={noInterviewPic} alt="No Interview Available" class="candidate-video"></img>
 : <iframe class="candidate-video" src={props.data.contentfulCandidate.youtubeLink} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    }
                <div class="bio-section">
                    <p class="bio-header">About {props.data.contentfulCandidate.name.split(" ")[0]}</p>

                        <div class="bio-text-section">
                            <h3 class="bio-text-header">Past</h3>
                            <div class="text-division"></div>
                            {documentToReactComponents(props.data.contentfulCandidate.pastText.json)}
                        </div>
                        <div class="bio-text-section">
                            <h3 class="bio-text-header bio-right">Present</h3>
                            <div class="text-division"></div>
                            {documentToReactComponents(props.data.contentfulCandidate.presentText.json)}
                        </div>
                        <div class="bio-text-section">
                            <h3 class="bio-text-header">Future</h3>
                            <div class="text-division"></div>
                            {documentToReactComponents(props.data.contentfulCandidate.futureText.json)}
                        </div>
                    <div class="candidate-links">
                        <h3 class="candidate-links-header">Learn more:</h3>
                        <a href="https://jacquelinmaycumber.houserepublicans.wa.gov/" target="_blank">Campaign site</a>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default candidate;