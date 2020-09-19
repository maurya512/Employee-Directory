// import modules
import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
    return (
        // jsx variables 
        <div>
            <Hero backgroundImage = "../bg1.png">
                <h1>Employee Directory</h1>
            </Hero>
            <Container style={{ marginTop : 30}}>
                <Row>
                    <Col size="mid-12">
                        <h1>They're the backbone of your company</h1>
                    </Col>
                </Row>
                <Row>
                    <p>
                        In this day and age it is almost impossible to keep track of your employees and it seems rude to not know each employee by their personal traits and qualities. Employee Directory is your solution to this trivial problem. At a glance discover all of the employees' names, email and birth date. This gets you started in the right direction of making that necessary connection with your employee. For further assistance we also provide you with the feature to search an employee by their name.
                    </p>
                </Row>
            </Container>
        </div>
    );
}

// export the About function
export default About;