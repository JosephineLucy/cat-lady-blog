import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'I just love catsss', body: 'Very excited', author: 'Cat Lady', id: 1},
        {title: 'Five ways to quickly ruin any living space', body: 'Scratch, chew, impart bodily fluids', author: 'Rupert', id: 2},
        {title: 'Top tips for hiding', body: 'Find good hiding spot, hide in said hiding spot, do not come out until absolutely sure it is safe to do so', author: 'Harry', id: 3},
        {title: 'My stink train terror', body: 'It was nearly midnight. A foul stench filled the air. I knew something was lurking in the other room; that it would take all my courage to face it...', author: 'Catman', id: 4}
    ])

    return ( <div className="home">
     <BlogList blogs={blogs}/>
    </div> );
}
 
export default Home;