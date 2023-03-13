import './index.css'

const TaskItem = props => {
  const {details} = props
  const {tag, task} = details
  return (
    <li className="tasks-list-item">
      <p className="task-text">{task}</p>
      <p className="tag-text">{tag}</p>
    </li>
  )
}

export default TaskItem
