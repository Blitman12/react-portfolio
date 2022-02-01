import React from 'react';
import { makeStyles } from '@mui/styles';
import { Avatar } from '@mui/material';
import avatar from '../../assets/avatar.jpg'
import ichabod from '../../assets/ichabod.jpg'
import yui from '../../assets/yui.jpg'

const useStyles = makeStyles({
    imageContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '50px'
    },
    imageAndTextContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    catContainer: {
        display: 'flex',
        marginTop: '15px'
    },
    bio: {
        textAlign: 'center',
        width: '40%',
        margin: 'auto',
        marginBottom: '25px'
    },
    titles: {
        color: 'aliceblue',
        textAlign: 'center',
        fontSize: '50px'
    },
    subTitle: {
        textAlign: 'center'
    }
})

export default function About() {
    const classes = useStyles();
    return (
        <div>
            <h1 className={classes.titles}>About Me</h1>

            {/* Images */}
            <div className={classes.imageAndTextContainer}>
                <div className={classes.imageContainer}>
                    <div>
                        <Avatar
                            alt="Brad Litman"
                            src={avatar}
                            sx={{ width: 250, height: 250 }}
                        />
                    </div>
                    <div className={classes.catContainer}>
                        <Avatar
                            alt="ichabod cat"
                            src={ichabod}
                            sx={{ width: 120, height: 120 }}
                            style={{ marginRight: '20px' }}
                        />
                        <Avatar
                            alt="yui cat"
                            src={yui}
                            sx={{ width: 120, height: 120 }}
                        />
                    </div>
                </div>
                <div>
                    <h2 className={classes.subTitle}>Skills</h2>
                    <ul>
                        <li>JS, CSS, HTML</li>
                        <li>Node, Express</li>
                        <li>React, Handlebars</li>
                        <li>SQL, Sequelize, MongoDB, Mongoose</li>
                        <li>Bootstrap, UI Kit, Material UI</li>
                    </ul>
                </div>
            </div>

            {/* Bio */}
                <h2 className={classes.subTitle}>Bio</h2>
                <p className={classes.bio}> I am a Full Stack Web Developer leveraging a Nursing background to be adaptable and a team player with a skill to learn and implement new knowledge efficiently. A Full Stack Development bootcamp from the University of Arizona has provided me with newly learned skills in MySQL, jQuery, and Bootstrap. Further building upon self-taught skills such as React, NoSQL/Mongo, Express, Node, JavaScript, and CSS. Known as a hard worker and team collaborator, my aim is to always be learning, communicating, optimizing and to bring others with me. I worked on a team of three to develop a full stack SQL application that allows parents to ask questions and receive answers from other experienced parents. On my own I have developed an application for a local healthcare focused accounting business with Gatsby and deployed with Netlify. I am eager to apply my skills and experience as a fast-paced learner and collaborative focused attitude to a new team in the development world. </p>

        </div>
    )
}
