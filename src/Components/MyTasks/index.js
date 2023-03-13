import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import ButtonItem from '../ButtonItem'
import TaskItem from '../TaskItem'

import './index.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class MyTasks extends Component {
  state = {
    task: '',
    tag: '',
    tasksList: [],
    filteredList: [],
    isFiltered: false,
  }

  onChangeTask = event => {
    this.setState({task: event.target.value})
  }

  onChangeTag = event => {
    this.setState({tag: event.target.value})
  }

  updateList = id => {
    const {tasksList} = this.state
    const filteredData = tasksList.filter(each => each.tag.toUpperCase() === id)
    this.setState({filteredList: filteredData, isFiltered: false})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {task, tag} = this.state
    const newTask = {
      task,
      tag,
      id: uuidv4(),
    }
    this.setState(prevState => ({
      tasksList: [...prevState.tasksList, newTask],
      isFiltered: true,
      task: '',
      tag: '',
    }))
  }

  render() {
    const {tasksList, task, tag, isFiltered, filteredList} = this.state

    return (
      <div className="bg-container">
        <div className="left-card">
          <h1 className="heading">Create a Task!</h1>
          <form onSubmit={this.onSubmitForm}>
            <label className="labels" htmlFor="task">
              Task
            </label>
            <br />
            <input
              value={task}
              onChange={this.onChangeTask}
              placeholder="enter the task here"
              className="input"
              id="task"
              type="text"
            />
            <br />
            <label className="labels" htmlFor="tags">
              Tags
            </label>
            <br />
            <select
              value={tag}
              onChange={this.onChangeTag}
              className="input"
              id="tags"
            >
              {tagsList.map(each => (
                <option>{each.displayText}</option>
              ))}
            </select>
            <br />
            <button type="submit" className="button">
              Add Task
            </button>
          </form>
        </div>
        <div className="right-card">
          <h1 className="tags-heading">Tags</h1>
          <ul className="btn-ul-list">
            {tagsList.map(each => (
              <ButtonItem
                updateList={this.updateList}
                details={each}
                key={each.optionId}
              />
            ))}
          </ul>
          {tasksList.length === 0 ? (
            <div>
              <p className="tags-heading2">No Tasks Added Yet</p>
            </div>
          ) : (
            <>
              {isFiltered ? (
                <ul className="task-ul-list">
                  {tasksList.map(each => (
                    <TaskItem details={each} key={each.id} />
                  ))}
                </ul>
              ) : (
                <ul className="task-ul-list">
                  {filteredList.map(each => (
                    <TaskItem details={each} key={each.id} />
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
      </div>
    )
  }
}

export default MyTasks
