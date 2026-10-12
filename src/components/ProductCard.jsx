
function ProductCard({ game }) {
  return (
    <>
      <div className="card h-100">
        <img src={game.image} className="card-img-top" alt={game.title} />
        <div className="card-body d-flex flex-column">
            <h5 className="card-title">{game.title}</h5>
            <p className="card-text text-muted small">{game.category}</p>
            <p className="card-text">{game.description}</p>
            <button className="btn btn-primary mt-auto">
                Add to Cart — ${game.price.toFixed(2)}
            </button>
        </div>
    </div>
    </>
  )
}

export default ProductCard
