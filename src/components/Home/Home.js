import React from 'react';
import './Home.css'
import AddTackBtn from '../AddTackBtn/AddTackBtn';
import CalendarCS from '../CalendarCS/CalendarCS';
import { Container, Row, Col } from 'react-bootstrap';
import TodoList from '../TodoList/TodoList';




const Home = () => {

    return (
        <main >
            <Container id='home'>
                <Row>
                    <Col xs={12} md={6} lg={5} id='home-calender-container'>
                        <CalendarCS id='home-calender' />
                    </Col>
                    <Col xs={12} md={6} lg={7} >
                        <div id="home-todoList-container">
                            <TodoList />
                        </div>
                    </Col>
                </Row>
                <AddTackBtn />
            </Container>
        </main>
    );
};

export default Home;
