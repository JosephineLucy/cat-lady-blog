import { Link } from 'react-router-dom';

const NotFound = () => {
    return ( <div>
        <h2>Sorry!</h2>
        <p>We can't find that page</p>
        <Link to={'/'}>click here to return to homepage</Link>
    </div> );
}
 
export default NotFound;