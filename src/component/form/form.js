import React from 'react';
import { useState ,useEffect} from 'react';
import { v4 as uuid } from 'uuid';
import { ThemeContext } from '../../context/Theme';

export default function Form (){

  const useForm = (callback, defaultValues={}) => {

    const [values, setValues] = useState({});
  
    const handleSubmit = (event) => {
      event.preventDefault();
      callback(values);
    };
  
    const handleChange = (event) => {
      event.persist();
  
      let { name, value } = event.target;
      if (parseInt(value)) {
        value = parseInt(value);
      }
  
      setValues(values => ({ ...values, [name]: value }));
    };
  
    useEffect( () => {
      setValues( defaultValues );
    }, [defaultValues]);
  
    return {
      handleChange,
      handleSubmit,
      values,
    };
  };
  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  
  const addItem=(item) =>{
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }
  
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

 const toggleComplete=(id) =>{

    const items = list.map( item => {
      if ( item.id === id ) {
        item.complete = ! item.complete;
      }
      return item;
    });

    setList(items);

  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);



  return (
  <>
   <ThemeContext.Consumer>
                    {(ThemeContext) => (
                        <>
                            <h2>my mode : {ThemeContext.mode}</h2>
                            <form onSubmit={handleSubmit}>

<h2>Add To Do Item</h2>
<div>
<label>
  <span>To Do Item</span>
  <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
</label>

<label>
  <span>Assigned To</span>
  <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
</label>

<label>
  <span>Difficulty</span>
  <input onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
</label>

<label>
  <button type="submit" className="btnS">Add Item</button>
</label>
</div>
</form>
<br></br>
{list.map(item => (
<div key={item.id} className="card">
  <p>{item.text}</p>
  <p><small>Assigned to: {item.assignee}</small></p>
  <p><small>Difficulty: {item.difficulty}</small></p>
  <div onClick={() => toggleComplete(item.id)}>Complete: <span className="comp">{item.complete.toString()}</span> </div>
  <hr />
</div>
))}
                        </>
                    )}
                </ThemeContext.Consumer>
  
</>
)}