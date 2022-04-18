import logo from './logo.svg';
import './App.css';
import axios, {Axios} from 'axios';
import react, {useEffect, useState} from "react";
import ListBoardComponent from "./component/ListBoardComponent";

const App = () => {

        const [data, setData] = useState([]);

        useEffect(() => {
            fetch("/mainBoard")
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
                    {data.map(
                        board =>(
                            <ListBoardComponent key={board.id} board={board}/>
                        ))}
                </header>

            </div>
        );
}

export default App;


