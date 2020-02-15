import cats from '../../views/data/cats'
import dogs from '../../views/data/dogs'

export default {
  cats,
  dogs,
  pets: [...cats, ...dogs]
}
