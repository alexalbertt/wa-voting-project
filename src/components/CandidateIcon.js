import React from "react";
import {Link, graphql} from "gatsby";
import Img from "gatsby-image";
import "./candidateicon.scss";


const CandidateIcon = (props) => {
    const slug = props.candidate.name.replace(/\s+/g, '-').toLowerCase();
    const backgroundColor = `${props.candidate.party}color`;

    function renderImage(element) {
        if (element.node.name === props.candidate.name) {
            return <Img
                fluid={element.node.profilePicture.fluid} 
                key={element.node.profilePicture.fluid.src}
                alt={element.node.profilePicture.title}>
            </Img>;
        }
        return null;
    }

    return (
        <Link to={`/candidates/${slug}`} className={`candidateIcon-link ${backgroundColor}`}>
            <div className="candidateIcon-content">
                <div className="candidateIcon-img">
                {props.allContentfulCandidate.edges.map((element) => (
                    renderImage(element)
                ))}
                </div>
                <p className="candidateIcon-name">{props.candidate.name}</p>
            </div>
        </Link>
    );
}

export default CandidateIcon;