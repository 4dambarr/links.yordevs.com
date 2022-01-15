import React from "react"
import styled from "styled-components"

let Holder = styled.div`
    border: 1px black solid;
    box-shadow: 2px 4px #666666;
    padding: 5px;
    margin: 5px;
    background-color: white;
    &:hover {
        box-shadow: 1px 2px #666666;
        cursor: pointer;
    }
`;

let Text = styled.a`
    text-decoration: none;
    font-size: x-large;
    color: black;
`;



export default function Link(props) {
    return (
        <Holder>
            <Text href={props.href}>{props.children}</Text>
        </Holder>
    )
}