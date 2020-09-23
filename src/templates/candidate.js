import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import Img from "gatsby-image";
import "../styles/candidate.scss";


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
            <div class="candidate-content">
                <h2 class="candidate-header underlined">{props.data.contentfulCandidate.name}</h2>
                <p class="candidate-position">Candidate for {props.data.contentfulCandidate.position}</p>
                {/* <div class="candidate-img"> */}
                {props.data.contentfulCandidate.youtubeLink === " " ? <Img 
                    fluid={props.data.contentfulCandidate.profilePicture.fluid} 
                    key={props.data.contentfulCandidate.profilePicture.fluid.src}
                    alt={props.data.contentfulCandidate.profilePicture.title}>
                </Img> : <iframe class="candidate-video" src={props.data.contentfulCandidate.youtubeLink} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    }
                {/* </div> */}
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