import ProductCard from '../components/ProductCard'
import { games } from '../data/gamesApi'

function Products() {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">All Games</h1>
      <div className="row g-4">
        {games.map(game => (
          <div key={game.id} className="col-12 col-sm-6 col-lg-4">
            <ProductCard game={game} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products