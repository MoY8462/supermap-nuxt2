<template>
  <div class="h-full m-auto flex flex-col justify-center items-center gap-10">
    <span class="font-semibold text-xl sm:text-4xl lg:text-8xl tect-[#0C6170]"
      >Bienvenido</span
    >
    <p class="font-semibold text-base sm:text-xl lg:text-4xl text-gray-500">
      Esté es un demo de StoryMap con Nuxt 2.
    </p>
    <section class="flex flex-row gap-8">
      <sm-button
        class="!flex items-center"
        type="primary"
        icon="picture"
        size="large"
        v-on:click="handleClick"
      >
        Vista 2D
      </sm-button>
      <sm-button
        class="!flex items-center"
        type="primary"
        icon="global"
        size="large"
        disabled
      >
        Vista 3D
      </sm-button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  methods: {
    handleClick: function () {
      window.location = window.location.hostname + '/view-2d'
    },
  },
}
</script>
