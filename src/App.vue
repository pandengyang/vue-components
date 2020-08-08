<template>
  <div id="app" class="fullwindow">
    <div class="fullwindow">
      <Layout class="fullwindow">
        <Content class="fullwindow">
          <router-view />
        </Content>

        <Footer class="footer">
          <docker />
        </Footer>
      </Layout>
    </div>
  </div>
</template>

<script>
import Docker from './components/docker'

export default {
  name: 'App',
  components: {
    Docker
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fullwindow {
  width: 100%;
  height: 100%;
}

.footer {
  background-color: transparent;
  padding: 0;
}
</style>
