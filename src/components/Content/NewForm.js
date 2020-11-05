import React, {useState} from 'react';

function NewForm(props) {
    
    const [fObj, setFval] = useState({fname: '', email: ''});
    
    const handleChange = (event) => {
        let name = event.target.name;
        let vl = event.target.value;
        setFval( (preState) => ({
            ...preState,
            [name]: vl
        }));
    }

    const handlemSubmit = (event) => {
        alert("A new Name "+fObj.fname+" submitted!");
        event.preventDefault();
    }

    console.log(fObj);

    return (  
        <div className="">
            <form onSubmit={handlemSubmit.bind(this)} >
                <label>
                    Name:
                    <input type="text" name="fname" value={fObj.fname} onChange={handleChange.bind(this)} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={fObj.email} onChange={handleChange.bind(this)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
    
} 

export default NewForm;
