import logo from './logo.svg';
import './App.css';
import {Card} from "./Card"

const Arr = [
  {
    img: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    title: "African Safari",
  },
  {
    img: "https://thumbs.dreamstime.com/b/new-life-vs-old-sign-140140950.jpg",
    title: "Planning"
  },
  {
    img: "https://thumbs.dreamstime.com/b/happy-autumn-woman-raising-hands-over-sunset-sky-enjoying-life-nature-beauty-female-field-looking-sun-silhouette-girl-158561957.jpg",
    title: "City Tours"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYlCu6_XrNWbH9VRW0Kcx3vY3wbndXrSop6Q&usqp=CAU",
    title: "Trekking"
  },
  {
    img: "https://romanticpicnics.net/wp-content/uploads/2015/02/romantic-moments-pictures.jpg",
    title: "Romantic Tours"
  },
  {
    img: "https://gamedva.com/wp-content/uploads/Fishing-and-Life.jpg",
    title: "Active Tours"
  },
]
function App() {
  return (
   <div className="total">
    {Arr.map((item, index) => <Card key={index} img={item.img} title={item.title}></Card>)}
   </div>
  );
}

export default App;
