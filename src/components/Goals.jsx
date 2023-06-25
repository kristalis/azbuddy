import React, { useState,useEffect } from 'react';
import Button from './PressableButton';
import { FaTrash } from 'react-icons/fa';
import { v4 as uuid } from 'uuid';
import '../App.css';



function Goals({datasource, btnTitle, placeholder, inputType = "text",datasource1, title }) {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem(datasource)) || []);
    const [newTodo, setNewTodo] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [expandedDay, setExpandedDay] = useState(new Date().toLocaleDateString());
    const [groupedTodos, setGroupedTodos] = useState({});
    const [selectedOption, setSelectedOption] = useState('');


    useEffect(() => {
        setGroupedTodos(groupByDay(todos));
      }, [todos]);

    const addForm = () => {
      setShowForm(true);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (!newTodo.trim()) return;
      const newDate = new Date().toLocaleDateString();
      const newTodoItem = { id: uuid(), text: newTodo.trim(), day: newDate, completed: false };
      const updatedTodos = [...todos, newTodoItem];
      setTodos(updatedTodos);
      setNewTodo("");
      setSelectedOption("");
      localStorage.setItem(datasource, JSON.stringify(updatedTodos));
    };
  
    const deleteTodo = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
        localStorage.setItem(datasource, JSON.stringify(updatedTodos));
      };
    
      const toggleTodoCompletion = (id) => {
        const updatedTodos = [...todos];
        const todoIndex = updatedTodos.findIndex(todo => todo.id === id);
        updatedTodos[todoIndex].completed = !updatedTodos[todoIndex].completed;
        setTodos(updatedTodos);
        localStorage.setItem(datasource, JSON.stringify(updatedTodos));
      };
      
   
    const groupByDay = (todos) => {
        const groups = {};
        todos.forEach((todo) => {
          const day = todo.day;
          if (groups[day]) {
            groups[day].push(todo);
          } else {
            groups[day] = [todo];
          }
        });
        return Object.keys(groups).reverse().reduce((acc, day) => {
          acc[day] = groups[day];
          return acc;
        }, {});
      };

      const toggleExpandedDay = (day) => {
        setExpandedDay(expandedDay === day ? null : day);
      };
      
      const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
        setNewTodo(event.target.value);
      };

  return (
    <>
    {!showForm && (
        <Button className="bg-slate-500  uppercase text-white mb-2" clickMe={addForm}>
          {btnTitle}
        </Button>
      )}
      {showForm && (
        <form onSubmit={handleSubmit}>
          
          {inputType === 'text' ? (
          
          <input
            type="text"
            required
            className="
                form-control
                text-center
                block
                w-full
                px-3
                py-1.5
                mb-2
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid  border-secondary
                rounded-[0.9rem]
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
            placeholder={placeholder}
            value={newTodo} 
            onChange={(e) => setNewTodo(e.target.value)} 
          />
             ) : (
            <select
              required
              className="form-control text-center block w-full px-3 py-1.5 mb-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-secondary rounded-[0.9rem] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option>Select Contact</option>
               {datasource1.map((data,index) => (
                    <option key={index} value={data.name + ' - ' + (data.number)}>
                    {data.name} 
                    </option>
                ))}
            </select>
          )}
          
          <Button className="bg-black uppercase text-white mb-2" type="submit">
            Save
          </Button>
        
        </form>
    )}

        {Object.keys(groupedTodos).map((day) => (
         <div key={day} className='mb-2'>
          <Button
            className="bg-secondary text-yellow-50 text-center"
            type="null"
            clickMe={() => toggleExpandedDay(day)}
          >
           {title} {day}
          </Button>
          {expandedDay === day && (
            <div className="block rounded-lg shadow-lg bg-gray-100 text-center p-3">
               {groupedTodos[day].map((todo) => (
                <div
                  className="block rounded-lg shadow-lg bg-gray-100 text-center py-3"
                  key={todo.id}
                >
            <div className="flex justify-between items-center mb-4">
              <div className="text-left">
                <div className="font-gillsansnovaabook hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-xl font-bold ">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodoCompletion(todo.id)}
                  className="mr-2"
                /><span className={todo.completed ? 'completed' : ''}>
                  {todo.text}
                  </span>
                </div>
              </div>
              <div>
                <FaTrash size={25} className="inline-block mb-1 text-red-400" onClick={() => deleteTodo(todo.id)}/>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
))}
 
    </>
  );
}

export default Goals;