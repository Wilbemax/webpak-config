import { useState } from "react";
import classes from './App.module.scss'
import { Link, Outlet } from "react-router-dom";

export function App() {
    const [count, setCount] = useState<number>(0)
    const incriment = () => setCount(prev => prev + 1)

    return(
        <div data-testid={'apptestid'}>
            <Link to={'/shop'} >Shop</Link>
            <br />
            <Link to={'/About'} >About</Link>
            <h1 className={classes.value}>{count}</h1>
            <button className={classes.button} onClick={incriment}><span>incrdsffsdement</span></button>
            <Outlet /> 
        </div>
    )
};
