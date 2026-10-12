import games from './games.json'

export function getGameById(id) {
  // id comes in as a string (from URL), so we convert to number for comparison
  return games.find(game => game.id === Number(id))
}

export function getAllGames() {
  return games
}

export function getCategories() {
  // Build a unique list of categories from the games array
  const categories = games.map(game => game.category)
  return [...new Set(categories)]  // Set removes duplicates
}

export { games }