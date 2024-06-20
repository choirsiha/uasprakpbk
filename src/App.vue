<template>
  <q-layout view="hHh lpR fFf">
    <!-- Header -->
    <q-header elevated>
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="drawer = !drawer" />
        <q-toolbar-title>
          RAMALAN CUACA
        </q-toolbar-title>
        <q-space />
        <!-- Dropdown untuk tugas-tugas -->
        <q-btn-dropdown
          flat
          round
          icon="more_vert"
          no-caps
          dense
        >
          <q-list>
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
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <!-- Drawer (Sidebar) -->
    <q-drawer v-model="drawer" show-if-above>
      <q-list>
        <q-item to="/" clickable v-ripple>
          <q-item-section>Home</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- Kontainer Halaman -->
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
  }
}
</script>

<style>
.q-toolbar {
  background: #0d47a1; /* Warna biru tua */
  color: white;
}
.q-drawer {
  background: #f5f5f5;
}
.q-page-container {
  padding: 16px;
}
</style>
