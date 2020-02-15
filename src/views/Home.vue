<template>
  <div class="home">
    <h1>adopt a new bet friend</h1>
    <h6>cats: {{ getCats.length }} / {{ petCount }} total pets</h6>

    <button @click="togglePetform()" class="btn btn-primary">add new pet</button>
    <b-form v-if="showPetForm">
      <b-form-group id="input-group-1" label="pet's Name:" label-for="input-2">
        <b-form-input type="text" id="input-1" v-model="formData.name" required placeholder="Enter name"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Species:" label-for="input-3">
        <b-form-select id="input-2" v-model="formData.species" :options="['cats', 'dogs']" required></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-3" label="pet's Age:" label-for="input-2">
        <b-form-input id="input-3" v-model="formData.age" required placeholder="Enter Pet.s Age" type="number"></b-form-input>
      </b-form-group>

      <b-button @click="submit()" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      showPetForm: false,
      formData: {
        name: '',
        age: 0,
        Species: null
      }
    }
  },
  computed: {
    ...mapGetters([
      'petCount',
      'getCats'
    ])
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    togglePetform () {
      this.showPetForm = !this.showPetForm
    },
    submit () {
      // window.alert('pet added')
      const { species, age, name } = this.formData
      const payload = {
        species,
        pet: {
          name,
          age
        }
      }
      // reset
      this.formData = {
        name: '',
        age: 0,
        Species: null
      }
      this.addPet(payload)
    }
  }
}
</script>
