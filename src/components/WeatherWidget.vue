<template>
  <q-card class="my-weather-widget q-mx-auto q-pa-md">
    <q-toolbar>
      <q-toolbar-title>CUACA</q-toolbar-title>
      <q-btn dense flat icon="place" @click="showCityDialog = true">Ubah Lokasi</q-btn>
    </q-toolbar>
    <q-card-section>
      <div class="text-h6">{{ city }}</div>
      <div v-if="weather">
        <q-icon :name="weatherIcon" size="36px" class="icon-cloud" /> 
        <p>{{ weather.description }}</p>
        <p>Suhu: {{ weather.temp }}°C</p>
        <p>Kelembaban: {{ weather.humidity }}%</p>
      </div>
      <div v-else-if="error">
        <p>{{ error }}</p>
      </div>
      <div v-else>
        <q-spinner color="primary" size="lg" />
      </div>
    </q-card-section>

    <q-dialog v-model="showCityDialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">Masukkan Nama Kota</div>
        </q-card-section>
        <q-card-section>
          <q-input v-model="newCity" label="Kota" filled />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="OK" @click="updateCity" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-card>
</template>

<script>
import axios from 'axios'

export default {
  name: 'WeatherWidget',
  data() {
    return {
      city: 'Jakarta',
      newCity: '',
      weather: null,
      error: '',
      showCityDialog: false
    }
  },
  async created() {
    this.fetchWeather()
  },
  computed: {
    weatherIcon() {
      if (!this.weather) return 'cloud' // Default icon jika data cuaca belum ada
      // Mapping ikon berdasarkan deskripsi cuaca
      const weatherDescription = this.weather.description.toLowerCase()
      if (weatherDescription.includes('rain')) return 'umbrella'
      if (weatherDescription.includes('cloud')) return 'cloud'
      if (weatherDescription.includes('clear')) return 'wb_sunny'
      return 'cloud' // Default jika deskripsi tidak cocok dengan kondisi di atas
    }
  },
  methods: {
    async fetchWeather() {
      const apiKey = '93e1a75b08941d072d8df040fb481808'
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${apiKey}`
      try {
        const response = await axios.get(url)
        this.weather = {
          temp: response.data.main.temp,
          humidity: response.data.main.humidity,
          description: response.data.weather[0].description
        }
        this.error = ''
      } catch (error) {
        console.error('Error fetching weather data', error)
        this.error = 'Gagal memuat data cuaca. Silakan coba lagi.'
      }
    },
    updateCity() {
      if (this.newCity.trim()) {
        this.city = this.newCity
        this.fetchWeather()
        this.showCityDialog = false
      }
    }
  }
}
</script>

<style scoped>
.my-weather-widget {
  max-width: 400px;
  margin: 0 auto;
  background: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
}
</style>
