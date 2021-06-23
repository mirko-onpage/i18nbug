<template>
  <img alt="Vue logo" src="./assets/logo.png" />
<h1>
    TEXT: {{text}}
</h1>
<!-- UNCOMMENT NEXT LINE THIS TO SEE PLUGIN IS WORKING -->
<!-- <h1> HI: {{$t('hi')}} </h1> -->

</template>

<script>
export default {
  data() {
    return {
      text: 'Edit me and save',
    }
  },
}
</script>