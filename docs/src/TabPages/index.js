import K12 from './K12';
import Undergraduate from './Undergraduate';
import Graduate from './Graduate';

const TabPages = (props) => {
    switch (props.level) {
        case 'k12': return <K12 level={props.level} category={props.category} />;
        case 'undergraduate': return <Undergraduate level={props.level} category={props.category} />;
        case 'graduate': return <Graduate level={props.level} category={props.category} />;
        default:
            <div>
                <h2>Course Title: Security for AI</h2>
                <br />
                <div>
                    A brief intro about this course. A brief intro about this course. A brief intro about this course.
                    A brief intro about this course. A brief intro about this course. A brief intro about this course.
                    A brief intro about this course. A brief intro about this course.
                </div>
            </div>
    }
}

export default TabPages
