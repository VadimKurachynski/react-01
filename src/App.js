// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";




function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />


      <div className="content">
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOILfvBu6_5wt4RB_1Mz5l4Uenm8yXvW0qiA&usqp=CAU" />
        </div>
        <div>
          ava+description
        </div>
        <div>
          My post
          <div>New post</div>
        </div>
        <div>post1</div>
        <div>post2</div>


      </div>


    </div>
  );
}

export default App;
