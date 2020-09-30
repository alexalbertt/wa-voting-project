import React from "react"
import Layout from "../components/layout"
import "../styles/donate.scss";
import {MdStar} from 'react-icons/md';
import { IconContext } from "react-icons";
import xavierSig from "../../static/img/xavier-signature.png";
import alexSig from "../../static/img/alex-signature.png";
import Head from "../components/head";




export default function About() {
    return (
            <Layout>
                <Head title="Donate"/>
                <section class="donate-content">
                    <h2 class="donate-header underlined">Donate</h2>
                    <p class="donate-text">We’re constantly working to improve our services. However, as college students, our wallets are tight. In order to provide high-quality video and audio, maintain our website, and spread our message to as many people as possible, we depend on civic-minded people like you to support our services.<br/><br/>

                    Donating is easy: simply follow the instructions below to safely chip in any amount you’d like. Additionally, we’ll release a video each month thanking our sponsors.<br/><br/> 

    {/* Donating is easy: simply follow the instructions below to safely chip in any amount you’d like. Washington Voting Project is a [INSERT NONPROFIT IF SO], so your donation is tax-deductible. Additionally, we’ll release a video each month thanking our sponsors.<br/><br/>  */}


    Thank you for your support of our project. It means the world to us.</p>
                </section>
                <section class="signatures">
                    <div class="signature-card">
                        <img src={xavierSig} alt="Xavier Signature" class="signature-img"></img>
                        <p class="signature-name">Xavier Martinez, Co-Founder</p>
                    </div>
                    <div class="signature-card">
                        <img src={alexSig} alt="Xavier Signature" class="signature-img"></img>
                        <p class="signature-name">Alex Albert, Co-Founder</p>
                    </div>
                </section>
                <section class="donation-section">
                <script src="https://donorbox.org/widget.js" paypalExpress="false"></script>
                <iframe allowpaymentrequest="" frameborder="0" height="900px" name="donorbox" scrolling="no" seamless="seamless" src="https://donorbox.org/embed/wa-voting-project-donation?default_interval=o" style={{width: "400px", minWidth: "310px", maxHeight:"none!important"}}></iframe>
                </section>
                
            </Layout>
    );
}