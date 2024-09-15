import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '../redux/todoSlice';

const TodoItem = ({ id, title, completed }) => {
    const vekilFonksiyon = useDispatch()

    function checkboxTikla() {
        vekilFonksiyon( toggleComplete( {id: id, completed: !completed} )  )
    }

    function silTikla() {
        vekilFonksiyon( deleteTodo( {id: id} )  )
    }

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<label className='d-flex align-items-center gap-2'>
					<input type='checkbox' onChange={checkboxTikla} className='mr-3' checked={completed}></input>
					{title}
				</label>
				<button onClick={silTikla} className='btn btn-danger'>Sil</button>
			</div>
		</li>
	);
};

export default TodoItem;