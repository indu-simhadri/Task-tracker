import Button from "./Button";
import {useLocation} from 'react-router-dom';

const Header = ({title = 'default title',onADDClick,showAddTask}) => {
  const location  = useLocation();
  return (
    <header className = 'header'>
        <h1>{title}</h1>
        {
        location.pathname === '/'
         &&
        <Button  color = {showAddTask ? 'red':'green'} text = {showAddTask ? 'Close':'Add'} onClick={onADDClick} />
        }
    </header>
  )
}

Header.defaultProps = {
 title : 'default title',  
}

export default Header
