import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');
    const [ author, setAuthor ] = useState('Cat Lady')
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { title, body, author }
        setIsLoading(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type" : "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            setIsLoading(false);
            history.push('/')
        })
    }



    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={(e)=> handleSubmit(e)}>
                <label>Blog title:</label>
                <input 
                type="text"
                required 
                value={ title }
                onChange={ (e)=>setTitle(e.target.value) }
                />
                <label>Blog body:</label>
                <textarea
                value={ body }
                onChange={ (e)=>setBody(e.target.value) }
                required
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={ author }
                    onChange={ (e)=>setAuthor(e.target.value) }
                >
                    <option value="Cat Lady">Cat Lady</option>
                    <option value="Rupert">Rupert</option>
                    <option value="Harry">Harry</option>
                    <option value="Catman">Catman</option>
                </select>
                {isLoading ? <button disabled>adding blog</button> : <button>Add blog</button>}
            </form>
        </div>
     );
}
 
export default Create;