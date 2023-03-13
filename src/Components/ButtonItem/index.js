import './index.css'

const ButtonItem = props => {
  const {details, updateList} = props
  const {displayText, optionId} = details

  const onClickButton = () => {
    updateList(optionId)
  }

  return (
    <li className="btn-list-items">
      <button onClick={onClickButton} className="btns" type="button">
        {displayText}
      </button>
    </li>
  )
}

export default ButtonItem
