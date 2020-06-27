import React, { useContext } from 'react';
import Hero2 from '../components/Hero2';
import Content2 from '../components/Content2';
import Contentheading from '../components/Contentheading';
import Progress from '../components/Progress';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';


function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}
function About(props) {
    const { height, width } = useWindowDimensions();
    return (
        <div style={{ backgroundColor: "#343a40", position: "absolute"}}>
            <Hero2 title={props.title} />
            <Contentheading>
                Job Objective:
            </Contentheading>
            <Content2>
                Total 2.5+ years of experience in IT industry Has experience
                    working in deployment, monitoring, operational BI reports
                    & dashboards on different BI tools in supply chain, retail
                    & manufacturing. Expertise in SQL programming, Microsoft Power
                    BI, Oracle DVCS, Navcube & Lexalytics Sentiment Analysis Experienced
                    and passionate developer implementing new emerging Microsoftrelated technologies.
           
            </Content2>

            <Contentheading>
                Technical skills
            </Contentheading>
            <Content2>
                <Progress tech={"Microsoft Power BI"} width={width / 10} percent={60} />
                <Progress tech={" MS SQL Server"} width={width / 10} percent={62} />
                <Progress tech={"Navcube BI"} width={width / 10} percent={60} />
                <Progress tech={"Oracle DVCS"} width={width / 10} percent={63.5} />
                <Progress tech={"Wordpress"} width={width / 10} percent={63} />
            </Content2>

            <Contentheading>
                Previous Experience
            </Contentheading>
            <Content2>
                <Accordion >
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0" className={"acctog"}>
                            <FontAwesomeIcon icon={faChevronDown} className={"iconclass"} size="1x" />
                            <Card.Title>Senior BI Executive </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">SNOWMAN LOGISTICS LIMITED  (Banglore)</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">March 2018 - Present</Card.Subtitle>

                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0" className={"acctog"}>
                            <Card.Body>
                                
                                <Card.Title>Roles & Responsibilities</Card.Title>
                                <Card.Body>
                                  Created Power BI visualization of Dashboards & Scorecards (KPI) for all the Departments.
                                Assisted Supply chain analysts with automating reporting functionality using Power BI
                                tools .
                                </Card.Body>
                                
  
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1" className={"acctog"}>
                            <FontAwesomeIcon icon={faChevronDown} className={"iconclass"} size="1x" />
                            <Card.Title>BI Technical Consultant </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Prudence Technology PVT LTD.</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">FEB 2017 To MARCH 2018</Card.Subtitle>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1" className={"acctog"}>
                            <Card.Body>
                                <Card.Text>
                                    <Card.Title> Project 1</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Client: MyGov, Delhi</Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">Duration: March 2017 to June 2017</Card.Subtitle>

                                    <Card.Body>
                                        Analysis of review done across social media handles. Created performance reports,
                                       scorecards, exceptions reports to all other campaigns & investment policies Documentation
                                    done for shared with internal team
                                    </Card.Body>

                                    <Card.Title> Project 2</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Client: Fab India, Noida</Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">Duration:July 2017 to Oct 2017</Card.Subtitle>

                                    <Card.Body>
                                         Gathered requirements from end-users in excel. Connected to multiple datasets
                                     to bring all of the relevant data together in one place and create e-reports that provide a consolidated
                                     view of the different sources.Scheduling of Power BI reports in online version and Create relevant use cases of Q&A
                                     feature.
                                     </Card.Body>


                                    <Card.Title> Project 3</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Client:  Napino Auto & Electronics Limited, IMT Manesar, Gurugram</Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">Duration:Nov 2017 to Jan 2018</Card.Subtitle>

                                    <Card.Body>
                                       Experience in creating Power BI reports that represent different findings and insights from the data using
                                     interactive charts and maps. Administered permissions and privileges for Dashboard visibility and
                                    modifications to users based on their groups or responsibilities. Used Filters and provided Customized prompts appropriately to avoid
                                    excessive data showing up reports.
                                        </Card.Body>
                                    </Card.Text>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                </Accordion>
            </Content2>
           <Footer/>
        </div>
    );
}
export default About;
