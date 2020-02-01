import React from "react";
import styled from "styled-components";

const Card = styled.div`
    margin: 0 auto;
    width: 300px;
    text-align: center;
`;

const CompleteCheckContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 200px;
    height: 30px;
    margin: 0 auto;
`;

const Checkbox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: ${props => (props.selected ? "#2196F3" : "#eee")};
    &:hover {
        background-color: #ccc;
        cursor: pointer;
    }
    &:after {
        content: "";
        position: absolute;
        display: ${props => (props.selected ? "block" : "none")};
        left: ${props => (props.selected ? "9px" : "0")};
        top: ${props => (props.selected ? "5px" : "0")};
        width: ${props => (props.selected ? "5px" : "auto")};
        height: ${props => (props.selected ? "10px" : "auto")};
        border: ${props => (props.selected ? "solid white" : "none")};
        border-width: ${props => (props.selected ? "0 3px 3px 0" : "none")};
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`;

export default ({ item, handleCompleteCheck }) => (
    <Card>
        <h2>{item.item}</h2>
        <CompleteCheckContainer>
            <Checkbox
                selected={item.completed}
                onClick={isStyledComponent => handleCompleteCheck(item)}
            />
            <p style={{ margin: 0 }}>Completed</p>
        </CompleteCheckContainer>
    </Card>
);
