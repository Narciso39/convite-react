import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapComponent: React.FC = () => {
    useEffect(() => {
        // Configuração do Mapbox
        mapboxgl.accessToken = 'SUA_CHAVE_API'; // Substitua pela sua chave de API do Mapbox
        const map = new mapboxgl.Map({
          container: 'map', // ID do div onde o mapa será exibido
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [-46.633308, -23.550520], // Longitude e Latitude de São Paulo
          zoom: 12,
        });
    
        // Adicionando um marcador
        new mapboxgl.Marker()
          .setLngLat([-46.633308, -23.550520])
          .addTo(map);
      }, []);
    
      return (
        <div>
          <h2>Mapa Interativo com Mapbox</h2>
          <div id="map" style={{ height: '400px', width: '100%' }}></div>
        </div>
      );
};

export default MapComponent;
