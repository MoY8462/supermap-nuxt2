<template>
  <sm-web-map mapId="801571284" serverUrl="https://iportal.supermap.io/iportal">
    <sm-tdt-search
        position="top-left"
      :address-match="addressMatch"
      :rest-map="restMapSearch"
      :rest-data="restDataSearch"
      :online-local-search="onlineLocalSearch"
      :alwaysCenter="false"
      :data="searchData"
      collapsed
      />
     <sm-zoom :show-zoom-slider="true" position="top-left"></sm-zoom>

     <sm-mini-map position="bottom-left" :collapsed="false"></sm-mini-map>


     <sm-layer-list position="top-right"></sm-layer-list>
     <sm-draw :collapsed="true" position="top-right"></sm-draw>
     <sm-scale position="bottom-right"></sm-scale>
     <sm-tdt-map-switcher position="top-right" :data="mapSwitcherData" />
  </sm-web-map>
  <!-- <sm-compare>
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
      <sm-iframe src="https://iclient.supermap.io/"></sm-iframe>
      <sm-zoom :show-zoom-slider="false" position="top-right"></sm-zoom>
      <sm-layer-list position="top-right"></sm-layer-list>
      <sm-draw :collapsed="true" position="top-right"></sm-draw>
      <sm-scale position="bottom-right"></sm-scale>
      <sm-button
        class="!flex items-center"
        type="primary"
        icon="picture"
        size="small"
        position="top-right"
      ></sm-button>
    </sm-web-map>
  </sm-compare> -->
</template>
<script>
import AddressMatchParameter from '@supermap/vue-iclient-mapboxgl/lib/_types/AddressMatchParameter.js'; // 需要引用具体的路径
import RestMapParameter from '@supermap/vue-iclient-mapboxgl/lib/_types/RestMapParameter.js'; // 需要引用具体的路径
import RestDataParameter from '@supermap/vue-iclient-mapboxgl/lib/_types/RestDataParameter.js'; // 需要引用具体的路径

export default {
  data() {
    return {
      active: false,
      mapSwitcherData: {
        select: '',
        label: false,
        tk: '1d109683f4d84198e37a38c442d68311'
      },
      addressMatch: [
        new AddressMatchParameter({
          url: 'https://iserver.supermap.io/iserver/services/addressmatch-Address/restjsr/v1/address'
        })
      ],
      restMapSearch: [
        new RestMapParameter({
          url: 'https://iserver.supermap.io/iserver/services/map-world/rest/maps/World',
          layerName: 'Capitals@World.1'
        })
      ],
      restDataSearch: [
        new RestDataParameter({
          url: 'https://iserver.supermap.io/iserver/services/data-world/rest/data',
          dataName: ['World:Countries']
        })
      ],

      onlineLocalSearch: {
        enable: true,
        city: '北京市'
      },
      searchData: {
        searchUrl: 'https://api.tianditu.gov.cn/search',
        tk: '1d109683f4d84198e37a38c442d68311'
      }
    }
  },
}
</script>
