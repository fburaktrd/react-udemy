const MyPragraph = (props) =>{
  
  console.log("MyParagraph is also re-evaluating...");
  return <p>{props.children}</p>;
};


export default MyPragraph;