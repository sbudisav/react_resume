import PropTypes from 'prop-types'
import Button from "./Button"

const Header = ({ title }) => {

  const headerButtonClick = () => {
    console.log('Click');
  }

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button display='Press' onClick={ headerButtonClick } />
    </header>
  )
}

Header.defaultProps = {
  title: 'React Page',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header