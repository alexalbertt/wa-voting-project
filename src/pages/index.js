import React from "react"
import Layout from "../components/layout";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
	let name = "A";
	return (
		<Layout>
			This is {name}
		</Layout>
	);
}
