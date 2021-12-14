import PropTypes from 'prop-types'

const Button = ({ display, onClick }) => {
  return (
    <button 
      className='btn'
      onClick={onClick}
      > 
      {display} 
      </button>
    )
}

Button.propTypes = {
  onClick: PropTypes.func
}

export default Button