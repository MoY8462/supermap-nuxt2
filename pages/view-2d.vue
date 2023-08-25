<template>
  <!-- <sm-web-map :map-options="mapOptions">
     <sm-zoom :show-zoom-slider="true"></sm-zoom>
     <sm-layer-list position="top-right"></sm-layer-list>
     <sm-draw :collapsed="true" position="top-right"></sm-draw>
     <sm-scale position="bottom-right"></sm-scale>
  </sm-web-map> -->
  <sm-compare>
    <sm-web-map
      slot="beforeMap"
      target="beforeMap"
      server-url="https://iportal.supermap.io/iportal"
      :map-id="801571284"
    >
    </sm-web-map>
    <sm-web-map
      slot="afterMap"
      target="afterMap"
      server-url="https://iportal.supermap.io/iportal"
      :map-id="491609698"
    >
      <sm-zoom :show-zoom-slider="false" position="top-right"></sm-zoom>
      <sm-layer-list position="top-right"></sm-layer-list>
      <sm-draw :collapsed="true" position="top-right"></sm-draw>
      <sm-scale position="bottom-right"></sm-scale>
    </sm-web-map>
  </sm-compare>
</template>
<script>
export default {
  data() {
    return {
      mapOptions: {
        container: 'map', // container id
        style: {
          version: 8,
          sources: {
            'raster-tiles': {
              type: 'raster',
              tiles: [
                'https://iserver.supermap.io/iserver/services/map-china400/rest/maps/China/zxyTileImage.png?z={z}&x={x}&y={y}',
              ],
              tileSize: 256,
            },
          },
          layers: [
            {
              id: 'simple-tiles',
              type: 'raster',
              source: 'raster-tiles',
              minzoom: 0,
              maxzoom: 22,
            },
          ],
        },
        center: [120.143, 30.236], // starting position
        zoom: 3, // starting zoom
      },
    }
  },
}
</script>
