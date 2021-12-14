import Painting from './Painting'

// Will have to import comments, onEdit, onDelete, etc
const Paintings = ({ paintings }) => {
  return (
    <>
      {paintings.map((painting, id) => (
        <Painting key={id} painting={painting} />
      ))}
    </>
  )
}

export default Paintings;