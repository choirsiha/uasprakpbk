<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="drawer = !drawer" />
        <q-toolbar-title>
          My Weather App
        </q-toolbar-title>
        <q-space />
        <q-btn-dropdown
          flat
          round
          icon="more_vert"
          no-caps
          dense
        >
          <q-list>
            <q-item clickable v-ripple @click="navigateTo('/tugas1')">
              <q-item-section>Tugas 1</q-item-section>
            </q-item>
            <q-item clickable v-ripple @click="navigateTo('/tugas2')">
              <q-item-section>Tugas 2</q-item-section>
            </q-item>
            <q-item clickable v-ripple @click="navigateTo('/tugas3')">
              <q-item-section>Tugas 3</q-item-section>
            </q-item>
            <q-item clickable v-ripple @click="navigateTo('/tugas4')">
              <q-item-section>Tugas 4</q-item-section>
            </q-item>
            <q-item clickable v-ripple @click="navigateTo('/tugas5')">
              <q-item-section>Tugas 5</q-item-section>
            </q-item>
            <q-item clickable v-ripple @click="navigateTo('/tugas6')">
              <q-item-section>Tugas 6</q-item-section>
            </q-item>
            <q-item clickable v-ripple @click="navigateTo('/tugas7')">
              <q-item-section>Tugas 7</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" show-if-above>
      <q-list>
        <q-item to="/" clickable v-ripple>
          <q-item-section>Home</q-item-section>
        </q-item>
        <q-item to="/tugas1" clickable v-ripple>
          <q-item-section>Tugas 1</q-item-section>
        </q-item>
        <q-item to="/tugas2" clickable v-ripple>
          <q-item-section>Tugas 2</q-item-section>
        </q-item>
        <q-item to="/tugas3" clickable v-ripple>
          <q-item-section>Tugas 3</q-item-section>
        </q-item>
        <q-item to="/tugas4" clickable v-ripple>
          <q-item-section>Tugas 4</q-item-section>
        </q-item>
        <q-item to="/tugas5" clickable v-ripple>
          <q-item-section>Tugas 5</q-item-section>
        </q-item>
        <q-item to="/tugas6" clickable v-ripple>
          <q-item-section>Tugas 6</q-item-section>
        </q-item>
        <q-item to="/tugas7" clickable v-ripple>
          <q-item-section>Tugas 7</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    }
  },
  methods: {
    navigateTo(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style>
.q-toolbar {
  background: pink;
  color: white;
}
.q-drawer {
  background: #f5f5f5;
}
.q-page-container {
  padding: 16px;
}
</style>
