<template>
  <div class="cat">
    <h1> cats for adoption</h1>
    <b-table striped hover :items="cats">
      <template v-slot:cell(name)="data">
        <router-link :to="`/pet/cats/${data.index}`">
          {{ data.value }}
        </router-link>
      </template>
    </b-table>
    <template>
  <div>
      <div class="h2 mb-0">
    <b-icon-arrow-up></b-icon-arrow-up>
    <b-icon-alert-triangle-fill></b-icon-alert-triangle-fill>
  </div>
  </div>
</template>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'cats'
    ])
  }
}
</script>
