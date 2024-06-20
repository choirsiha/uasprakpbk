<template>
  <q-page class="q-pa-md">
    <q-card>
      <q-card-section>
        <div class="text-h6">Home</div>
        <WeatherWidget />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import WeatherWidget from '../components/WeatherWidget.vue'

export default {
  name: 'Home',
  components: {
    WeatherWidget
  }
}
</script>