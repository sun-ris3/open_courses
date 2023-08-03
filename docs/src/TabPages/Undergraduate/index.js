import React from 'react';


const Undergraduate = (props) => {
    const page = (props) => {
        switch (props.category) {
            case 'about': return <About />;
            case 'modules': return <Modules />;
            case 'question_forum': return <QuestionForum />;
            default: return <About />;
        }
    }

    return (<div style={{ "text-align": "left" }}>{page(props)}</div>)
}

const About = () => {
    return (
        <div>
            A brief intro about this course. A brief intro about this course. A brief intro about this course. A brief intro about this course. A brief intro about this course. A brief intro about this course. A brief intro about this course. A brief intro about this course.
        </div>
    )
}

const Modules = () => {
    return (
        <div>
            <b>
                There are 7 modules in this course
            </b>
            <br />
            Module 1. 2 hours
            <br />
            Follow the format in the following link
        </div>
    )
}

const QuestionForum = () => {
    return (
        <div>
            Email: <br />
            Title: <br />
            Details: <br />
        </div>
    )
}


export default Undergraduate;
