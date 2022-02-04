import React from "react";
import {Link} from "react-scroll";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAsterisk} from "@fortawesome/free-solid-svg-icons";
import styles from "./splash.module.css";
import hand from "../../img/pointing-hand.png";

const DURATION = 500;

const Asterisk = () => <FontAwesomeIcon className={styles.asterisk} icon={faAsterisk}/>

function MenuItem({children, to}) {
    return (
        <Link className={styles.link} to={to} smooth duration={DURATION}>
            <h3>{children}</h3>
        </Link>
    );
}

function Splash() {
    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <h1>Hey, three fuzzy images and a yelp review!</h1><br/>
                <h1>Someone quick, hand me my credit card.</h1><br/>
                <h1>Said no one, ever.</h1>
            </div>
            <div className={styles.body}>
                <p>If it was that easy to gain followers and influence people, everyone would be Kylie J.</p><br/>
                <p>But it’s not, and you’re not</p><br/>
                <p>So who are you? And what do you want?</p><br/>
                <p><Asterisk/>You want attention</p><br/>
                <p><Asterisk/>You want prestige, innovation, impact</p><br/>
                <p><Asterisk/>But most of all, you want leads that convert.</p>
            </div>
            <div className={styles.pitch}>
                <h4>I’m here to help.</h4><br/>
                <p>Your one-stop shop for content marketing and brand strategy.</p><br/>
                <p>I’ve worked with many brands over the years,</p><br/>
                <p>here’s just a few who’ve trusted me</p><br/>
                <p>to energize their online presence.</p>
            </div>
            <div className={styles.menu}>
                <h1>caffeinatedcopy.ca</h1>
                <div>
                    <img className={styles.hand} src={hand} alt="There's more over there" />
                    <MenuItem to="my-work">My Work</MenuItem>
                    <MenuItem to="my-process">My Process</MenuItem>
                    <MenuItem to="about-me">About Me</MenuItem>
                </div>
            </div>
        </section>
    );
}

export default Splash;
