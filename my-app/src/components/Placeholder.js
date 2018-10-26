import React from 'react'
import { Col, CardPanel } from 'react-materialize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'src/index.css'

const Placeholder = props => (
    <Col s={12} m={4} l={3}>
        <CardPanel onClick={() => props.clickHandler(props.icon.iconName)}  className={"hoverable blue lighten-4 black-text center"}>
        <FontAwesomeIcon icon={props.icon} />
        </CardPanel>
    </Col>
);

export default Placeholder;