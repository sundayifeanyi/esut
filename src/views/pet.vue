<template>
  <div class="about">
    {{ animal.name }} {{$route.params.species}}
    <p> gender: {{ animal.gender }} </p>
     <p>age: {{ animal.age }} years old</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      animal: {}
    }
  },
  computed: {
    ...mapState([
      'cats',
      'dogs'
    ])
  },
  mounted () {
    const animal = this[this.$route.params.species][this.$route.params.id]
    this.animal = animal
  }
}
</script>
