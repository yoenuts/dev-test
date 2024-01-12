import React, {useState} from "react";
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import osm from './Leaflet/osmprovider';
import "leaflet/dist/leaflet.css";
import '../App.css';

const SOCIAL_LINKS = [
	{	
		name: "Facebook",
		link: "https://www.facebook.com/TESOLintl",
		icon: "facebook-f",
	},
];

/*
				<div className="col OSM">
					<MapContainer
						center={center}
						zoom={ZOOM_LEVEL}
						scrollWheelZoom={false}
					>
						<TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution} />
						<Marker position={center}></Marker>
					</MapContainer>
				</div>
				<hr />

*/

function Footer() {
	const ZOOM_LEVEL = 13;
	const center = {
		lat: 14.9221,
		lng: 120.8448
	};
	
	return (
		<div className='Footer'>
			<div className="row">
				<div className="col d-flex justify-content-center mt-3">
					<div className="logo-collection">
						<h5>GET International Research Journal is indexed by:</h5>
						<img src="/img/issn-logo.png" alt="issn-logo" />
						<a href="https://www.openaire.eu/"><img src="/img/open-aire-logo.png" alt="open-aire-logo" /></a>
						<a href="https://zenodo.org/communities/getinternational?q=&l=list&p=1&s=10&sort=newest"><img src="/img/zenodo-logo.png" alt="zenodo-logo" /></a>
						<img src="/img/google-scholar-logo.png" alt="google-scholar-logo" />
						<a href="https://www.scipedia.com/profile/getinternational24"><img src="/img/scipedia-logo.png" alt="google-scholar-logo"/></a>
					</div> 
				</div>
				
				<div className="logo-collection-1">
					<h5>Plagiarism checked by:</h5>
					<img src="/img/quetext-logo.svg" alt="quetext-logo"></img>
				</div>
				<hr />
				<div className="footer-end">
					<h5><strong>Guild of Educators in TESOL International Institute – Graduate School for Teachers Inc.</strong></h5>
					<h6>9036 Tinejero <br></br> Brgy. Pulilan, Bulacan <br></br> Philippines</h6>
				</div>

			</div>

			<section className='copyright2024' >
				Guild of Educators in TESOL International © 2024
			</section>

		
		</div>
	);
	
}

export default Footer;
