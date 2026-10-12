import Hero from "../components/Hero"
import ProductCard from "../components/ProductCard"
import games from "../data/games.json"

function Home() {
    return (
        <>
            <Hero 
                title = "Level Up Your Game Library"
                subtitle = "Discover, buy, and play the best titles — all in one place."
                buttonText = "Browse Games"
                buttonLink = "/products"
            />

            <div className="container mt-5">
                <h2 className="text-center mb-4">Featured Games</h2>
                <div className="row g-4">
                    {games.map(game => (
                        <div key={game.id} className="col-12 col-sm-6 col-lg-4">
                        <ProductCard game={game} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home