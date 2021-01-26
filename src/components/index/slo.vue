<template>
  <div>
    <slot :item="pl">
      <ul>
        <li v-for="i in pl">{{i}}</li>
      </ul>
    </slot>
  </div>
</template>

<script>
export default {
  name: "slo",
  data() {
    return {
      pl: ['C', "Python", 'Java', 'Go']
    }
  }
}
</script>

<style scoped>

</style>
