import React from 'react'

const TodoForm = (props) => {
    const {handleSubmit, handleChange, taskName, assignee, warningMessage, errorMessage} = props
    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor='taskName'>
            Task Name:
            {
                !taskName && warningMessage && <span className='warning'>{warningMessage}</span>
            }
        </label>
        <input name='taskName' type='text' value={taskName} onChange={handleChange}/>
        <label htmlFor='assignee'>
            Assign To:
            {
                !assignee && warningMessage && <span className='warning'>{warningMessage}</span>
            }
        </label>
        <input name='assignee' type='text' value={assignee} onChange={handleChange}/>
        <button disabled={!taskName || !assignee} type='submit'>Submit</button>
        {
            errorMessage && <div className='error'>{errorMessage}</div>
        }
      </form>
    )
}

export default TodoForm

