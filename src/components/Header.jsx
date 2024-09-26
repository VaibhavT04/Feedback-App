import PropTypes from 'prop-types'

function Header({text, bgColor, colour}) {

  const headerStyle = {
    backgroundColor: bgColor, color: colour
  }

  return (
    <header style={headerStyle}>
      <div className="container">
        <h1>{text}</h1>
      </div>
    </header>
  )
}

Header.defaultProps = {
    text : 'Feedback UI APP',
    bgColor: 'rgba(0,0,0,0.4)',
    colour: 'white'
}

Header.propTypes = {
  text : PropTypes.string,
  bgColor : PropTypes.string,
  colour : PropTypes.string,
}

export default Header