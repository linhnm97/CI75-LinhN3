// import styles from "./testmodule.css"

// const styleBox = {
//   width: "250px",
//   height: "100px",
//   padding: "15px 20px",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   textalign: "center",
// }

// const imgStyle = {
//   width: "100%",
//   height: "100%",
// }

export const Card = ({img,title}) => {
  return (
    <div className= {"linh"}>
      <img src={img}/>
      <h2>{title}</h2>
      <div>Simple text. Click to select the text box. Click again to double click to start editing the text</div>
      <a href="#">MORE</a>
    </div>
  )
}