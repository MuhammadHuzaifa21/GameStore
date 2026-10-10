import Hero from "../components/Hero"

function Home() {
    return (
        <>
            <Hero 
                title = "Level Up Your Game Library"
                subtitle = "Discover, buy, and play the best titles — all in one place."
                buttonText = "Browse Games"
                buttonLink = "/products"
            />

            <div className="container mt-5 text-center">
                <h2>Featured Games</h2>
                <p className="text-muted">Coming soon...</p>
            </div>
        </>
    )
}

export default Home