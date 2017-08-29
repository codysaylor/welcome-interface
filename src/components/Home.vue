<template>
  <div>
    <div class="container">
      <img src="http://i.imgur.com/k6sGQd3.png" alt="Lehigh CustomFit" class="brand">
      <!-- {{ code }} -->
      <!-- <app-input :message="code" @messageChanged="code = $event"></app-input> -->
      <transition name="component-fade" mode="out-in">
        <component v-bind:is="comp"></component>
      </transition>
    </div>
  </div>
</template>

<script>
import Input from './Input';
import Rep from './Rep';
export default {
  name: 'home',
  computed: {
    comp() {
      return this.$store.state.comp;
    }
  },
  components: {
    'app-input': Input,
    'rep': Rep
  },
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>

<style scoped>
</style>
