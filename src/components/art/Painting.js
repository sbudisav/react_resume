const Painting = ({ painting }) => {
  return (
    <div>
      <img src={ painting.image_url } className="painting" alt="Logo" />
      <h3>{ painting.title }</h3>
      <h5>{ painting.description }</h5>
    </div>
  )
}

export default Painting;