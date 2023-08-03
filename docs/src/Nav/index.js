import { observable } from 'mobx';
import { observer } from 'mobx-react-lite';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../App.css';


export const NavBar = observer((props) => {
    const getClass = (level) => props.level === level ? 'Nav-highlight' : 'Nav-normal';
    return (
        <Container>
            <Row>
                <Col className={getClass('k12')}><a className='Nav-link' href='/k12'><b>K-12</b></a></Col>
                <Col className={getClass('undergraduate')}><a className='Nav-link' href='/undergraduate'><b>Undergraduate</b></a></Col>
                <Col className={getClass('graduate')}><a className='Nav-link' href='/graduate'><b>Graduate</b></a></Col>
            </Row>
        </Container>
    )
});

export const Tabs = observer((props) => {
    if (props.level === undefined || props.level === '') {
        return <Container></Container>
    }
    return (
        <Container>
            <Row>
                <Col>
                    <a href={`/${props.level}/about`} className='Tab-link'>
                        {props.category === 'about' ? <b>About</b> : <div>About</div>}
                    </a>
                </Col>
                <Col>
                    <a href={`/${props.level}/modules`} className='Tab-link'>
                        {props.category === 'modules' ? <b>Modules</b> : <div>Modules</div>}
                    </a>
                </Col>
                <Col>
                    <a href={`/${props.level}/question_forum`} className='Tab-link'>
                        {props.category === 'question_forum' ? <b>Question Forum</b> : <div>Question Forum</div>}
                    </a>
                </Col>
            </Row>
        </Container>
    )
});

export const getBavStore = () => observable({
    level: '',
    category: '',
});
