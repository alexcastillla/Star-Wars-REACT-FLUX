import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

export const Cardtype = props => {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src="holder.js/100px180" />
			<Card.Body>
				<Card.Title>{props.attribute1}</Card.Title>
				<Card.Text />
				<Button variant="primary">{props.attribute2}</Button>
			</Card.Body>
		</Card>
	);
};

Cardtype.propTypes = {
	attribute1: PropTypes.string,
	attribute2: PropTypes.string
};
