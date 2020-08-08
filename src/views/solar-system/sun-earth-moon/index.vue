<template>
  <canvas class="canvas" id="sunEarthMoon"></canvas>
</template>

<script>
import * as BABYLON from 'babylonjs'

export default {
  name: 'SunEarthMoon',
  data() {
    return {}
  },

  mounted() {
    var createScene = function() {
      var scene = new BABYLON.Scene(engine)
      scene.clearColor = new BABYLON.Color3(0, 1, 0)

      var camera = new BABYLON.FreeCamera(
        'camera1',
        new BABYLON.Vector3(0, 5, -10),
        scene
      )
      camera.setTarget(BABYLON.Vector3.Zero())
      camera.attachControl(canvas, false)

      var light = new BABYLON.HemisphericLight(
        'light1',
        new BABYLON.Vector3(0, 1, 0),
        scene
      )
      light.intensity = 0.5

      var sun = BABYLON.Mesh.CreateSphere('sun', 16, 2, scene)
      sun.position.y = 1

      // var ground = BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene)

      return scene
    }
    var canvas = document.getElementById('sunEarthMoon')
    var engine = new BABYLON.Engine(canvas, true)
    var scene = createScene()

    engine.runRenderLoop(function() {
      scene.render()
    })

    window.addEventListener('resize', function autoResize() {
      engine.resize()
    })
  }
}
</script>

<style scoped>
@import '~@/assets/css/main.css';
</style>
