import React from "react";
import MyPragraph from "./MyParagraph";

const DemoOutput = (props) => {
    console.log("DemoOutput RUNNING!");
    return <MyPragraph>{props.show ? "This is new!":""}</MyPragraph>;
};

export default React.memo(DemoOutput);