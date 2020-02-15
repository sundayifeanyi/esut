export default {
  petCount: (state) => {
    return state.cats.length + state.dogs.length
  },
  getCats: (state) => {
    return state.pets.filter((pet) => {
      return pet.species === 'cats'
    })
  }
}
