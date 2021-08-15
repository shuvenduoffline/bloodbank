import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        display : 'flex',
        margin: 'auto',
        padding: 20
    },
    txt : {
        color: 'white',
        fontSize: '1.2rem',
        fontWeight: 400,
        textAlign : 'left'
    }
  }));

const About = () => {
    const classes = useStyles();

    return (
        <div
        className={classes.root}
        >
            <p className={classes.txt}>
            There are many factors that lead to blood scarcity due to the gap between demand and
            supply. There are many issues such as reluctances to donate blood, lack of awareness of
            people, paid donation is banned etc. According to the article published by Lancet Journal
            their data suggests that the gap between need and supply is large in many low-income and
            middle-income countries, also the WHO target of 10–20 donations per 1000 population for
            many countries is an underestimate. In order to make blood available there is a need for
            more infrastructural support, in terms of financially, to ensure supply, quality, and safety in
            low-income and middle-income countries. Also due to mishandling donated blood is wasted
            –like reactivity for infections, expiry, bacterial contamination, not meeting quality standards
            etc. According to a report more than 1 million units of collected blood has been discarded in
            each of the years 2014-15, 2015-16 and 2016-17 due to wastage and improper handling. <br /> <br />
            In this model we propose a novel way of recording the information related to the donated
            blood to a central database repository using the concept of Blockchain .The method
            proposed records the agencies details who are organizing Blood Donation camps and at the
            same time also gives authority the information about total blood bottles available. Demand
            and supply gap can be mitigated. As the data recorded in Blockchain is immutable this will
            not only help to have the consistent information but can also prevent black marketing of
            donated blood. Also it removes third party monitoring as the system itself will take care of
            maintaining the consistency of the information stored from the origin. <br /> <br />
            A Blockchain platform-on Ethereum using Smart Contract is proposed here which is an open
            source platform. It uses smart contracts written in Solidity.<br /> <br />
            A digital account will be created for each interactor /agency/hospital./medical care centre .At
            present any health care system requiring the Blood Bottles need to contact the agencies
            organizing the Blood donation camps or can approach directly to the blood Bank to deliver
            bottles.
            </p>
        </div>
    );
}

export default About;
