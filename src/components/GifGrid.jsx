
import PropTypes from 'prop-types';
import { useFetch } from '../hooks/useFetch';
import { GifItem } from './GifItem';

export const GifGrid = ({category}) => {

  const { images, loading } = useFetch(category)

  return (
    <>
    
      <h3>{category}</h3>

      {
        loading && <h3>Cargando...</h3>
      }

      <div className='card-grid'>
        {
          images.map((image) => (<GifItem key={image.id} {...image} />))
        }
      </div>

    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}