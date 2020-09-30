import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Accordion from "../components/Accordion";
import "../styles/results.scss";
import Head from "../components/head";


export const query = graphql`
    query($slug: String!) {
        contentfulCountyResults(slug : {eq: $slug}) {
            candidateList {
                county
                positions { 
                    title 
                    candidates {
                        name
                        party
                    }
                }
            }
        }
        allContentfulCandidate {
            edges {
                node {
                    name
                    profilePicture { 
                        fluid(maxWidth: 980) {
                            ...GatsbyContentfulFluid
                        }
                    }
                }
            }
        }
    }
`

const results = (props) => {
    return (
        <Layout>
            <Head title={props.data.contentfulCountyResults.candidateList.county}/>
            <section className="results-content">
                <h2 class="results-header">On the ballot in <span class="underlined">{props.data.contentfulCountyResults.candidateList.county}</span></h2>
                <div className="accordion">
                    {props.data.contentfulCountyResults.candidateList.positions.map((position) => (
                        <Accordion title={`${position.title}`} content={position.candidates} allContentfulCandidate={props.data.allContentfulCandidate}/>
                    ))}
                </div>
            </section>
        </Layout>
    );
}

export default results;