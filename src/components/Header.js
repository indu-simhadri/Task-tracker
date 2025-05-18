import Button from "./Button";

const Header = ({title = 'default title',onADDClick,showAddTask}) => {
  return (
    <header className = 'header'>
        <h1>{title}</h1>
        <Button  color = {showAddTask ? 'red':'green'} text = {showAddTask ? 'Close':'Add'} onClick={onADDClick} />
    </header>
  )
}

Header.defaultProps = {
 title : 'default title',  
}

export default Header
