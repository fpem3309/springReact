import './App.css';
//import axios, {Axios} from 'axios';
import React, {useEffect, useState} from "react";
import ListBoardComponent from "./component/ListBoardComponent";

const App = () => {

        const [data, setData] = useState([]);

        useEffect(() => {
            fetch("http://172.30.1.38:3000/mainBoard")
                .then((res) => res.json())
                .then((res) => {
                    console.log(1, res);
                    setData(res);
                });
        }, []);


        return (
            <div className="App">
                <header className="App-header">
                    {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                    {/*<p>*/}
                    {/*    Edit <code>src/App.js</code> and save to reload.*/}
                    {/*</p>*/}
                    {/*<a*/}
                    {/*    className="App-link"*/}
                    {/*    href="https://reactjs.org"*/}
                    {/*    target="_blank"*/}
                    {/*    rel="noopener noreferrer"*/}
                    {/*>*/}
                    {/*    Learn React*/}
                    {/*</a>*/}
                    <a>MainBoard</a>
                    {data.map(
                        board =>(
                            <ListBoardComponent key={board.mainProductId} board={board}/>
                        ))}
                </header>

            </div>
        );
}

export default App;


