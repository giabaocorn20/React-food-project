import react from "react";
import { Fragment } from 'react'
import mealImage from '../../assets/meals.jpeg'
import HeaderCartButton from "./HeaderCartButton";
import  styles from './Header.module.css'
const Header = props => { 
    return ( 
        <Fragment>
            <header className={styles.header}>
                <h1> React Meals</h1>
                <HeaderCartButton onClick = {props.onShowCart}/>
            </header>
            <div className={styles['main-image']}>
                <img src={mealImage}></img>
            </div>
        </Fragment>
        
    )
}

export default Header;