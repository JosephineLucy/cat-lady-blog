import { useState } from "react";
const Create = () => {
    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');
    const [ author, setAuthor ] = useState('Cat Lady')

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form>
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
                <button>Add blog</button>
            </form>
            <p>{ title }</p>
            <p>{ body }</p>
            <p>{ author }</p>
        </div>
     );
}
 
export default Create;