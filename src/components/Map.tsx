import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [apiKey, setApiKey] = useState('');
  const [mapInitialized, setMapInitialized] = useState(false);

  const initializeMap = () => {
    if (!mapContainer.current || !apiKey.trim()) return;

    // Initialize map
    mapboxgl.accessToken = apiKey;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      zoom: 12,
      center: [55.2708, 25.2048], // Dubai coordinates
    });

    // Add a marker for the office location
    new mapboxgl.Marker({ color: '#6366f1' })
      .setLngLat([55.2708, 25.2048])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML('<div class="p-2"><strong>Zairo Software</strong><br/>Office 102, building no 6, business bay, dubai, uae</div>')
      )
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    setMapInitialized(true);
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (!mapInitialized) {
    return (
      <div className="w-full h-48 bg-muted/50 rounded-lg flex flex-col items-center justify-center p-6">
        <div className="text-center mb-4">
          <h4 className="text-lg font-semibold text-foreground mb-2">Interactive Map</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Enter your Mapbox public token to view our location
          </p>
          <p className="text-xs text-muted-foreground mb-4">
            Get your token from{' '}
            <a 
              href="https://mapbox.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              mapbox.com
            </a>
          </p>
        </div>
        <div className="flex gap-2 w-full max-w-sm">
          <Input
            type="password"
            placeholder="Enter Mapbox public token"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="flex-1"
          />
          <Button onClick={initializeMap} disabled={!apiKey.trim()}>
            Load Map
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-48">
      <div ref={mapContainer} className="absolute inset-0 rounded-lg shadow-lg" />
    </div>
  );
};

export default Map;