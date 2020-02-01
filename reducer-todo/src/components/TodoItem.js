import React from "react";
import styled from "styled-components";

// post-it styling from https://jsfiddle.net/dkaufmanjs/nq63nr6L/
const Card = styled.div`
    line-height: 1;
    text-align: center;
    width: 275px;
    margin: 25px 0;
    min-height: 200px;
    max-height: 200px;
    position: relative;
    border: 1px solid #e8e8e8;
    border-top: 60px solid #fdfd86;
    font-family: "Reenie Beanie";
    font-size: 3rem;
    border-bottom-right-radius: 60px 5px;
    display: inline-block;
    background: #ffff88;
    background: -moz-linear-gradient(
        -45deg,
        #ffff88 81%,
        #ffff88 82%,
        #ffff88 82%,
        #ffffc6 100%
    );
    background: -webkit-gradient(
        linear,
        left top,
        right bottom,
        color-stop(81%, #ffff88),
        color-stop(82%, #ffff88),
        color-stop(82%, #ffff88),
        color-stop(100%, #ffffc6)
    );
    background: -webkit-linear-gradient(
        -45deg,
        #ffff88 81%,
        #ffff88 82%,
        #ffff88 82%,
        #ffffc6 100%
    );
    background: -o-linear-gradient(
        -45deg,
        #ffff88 81%,
        #ffff88 82%,
        #ffff88 82%,
        #ffffc6 100%
    );
    background: -ms-linear-gradient(
        -45deg,
        #ffff88 81%,
        #ffff88 82%,
        #ffff88 82%,
        #ffffc6 100%
    );
    background: linear-gradient(
        135deg,
        #ffff88 81%,
        #ffff88 82%,
        #ffff88 82%,
        #ffffc6 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffff88', endColorstr='#ffffc6',GradientType=1 );

    &:after {
        content: "";
        position: absolute;
        z-index: -1;
        right: -0px;
        bottom: 20px;
        width: 200px;
        height: 25px;
        background: rgba(0, 0, 0, 0.2);
        box-shadow: 2px 15px 5px rgba(0, 0, 0, 0.4);
        -moz-transform: matrix(-1, -0.1, 0, 1, 0, 0);
        -webkit-transform: matrix(-1, -0.1, 0, 1, 0, 0);
        -o-transform: matrix(-1, -0.1, 0, 1, 0, 0);
        -ms-transform: matrix(-1, -0.1, 0, 1, 0, 0);
        transform: matrix(-1, -0.1, 0, 1, 0, 0);
    }
`;

const CompleteCheckContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 150px;
    height: 30px;
    margin: 0 auto;
`;

const Checkbox = styled.div`
    position: relative;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    border-radius: 5px;
    background-color: ${props => (props.selected ? "#2196F3" : "#9a9898")};
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
        <h2 style={{ marginTop: 0, fontSize: "3rem" }}>{item.item}</h2>
        <CompleteCheckContainer>
            <Checkbox
                selected={item.completed}
                onClick={() => handleCompleteCheck(item)}
            />
            <p style={{ margin: 0, fontSize: "2rem" }}>Completed</p>
        </CompleteCheckContainer>
    </Card>
);
