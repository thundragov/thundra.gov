import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import "leaflet-draw";

export default function DrawingMap() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) return;

    const map = L.map("drawing-map", {
      crs: L.CRS.Simple,
      minZoom: 0,
      maxZoom: 3,
      zoomSnap: 1,
      zoomControl: true,
      maxBoundsViscosity: 1.0,
    });

    // Your custom pixel bounds
    const southWest = map.unproject([0, 625], 0);
    const northEast = map.unproject([875, 0], 0);
    const bounds = new L.LatLngBounds(southWest, northEast);
    map.setMaxBounds(bounds);
    map.setView(map.unproject([437, 312], 0), 0);

    // Add your map tiles
    L.tileLayer("/tiles/{z}/{x}/{y}.png", {
      tileSize: 128,
      minZoom: 0,
      maxZoom: 3,
      zoomOffset: 0,
      bounds,
      noWrap: true,
    }).addTo(map);

    // Add Leaflet Draw control
    const drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    const drawControl = new L.Control.Draw({
      draw: {
        polyline: false,
        rectangle: false,
        circle: false,
        circlemarker: false,
        marker: false,
        polygon: {
          shapeOptions: {
            color: "#ff6600",
            weight: 1,
            fillOpacity: 0.3,
          },
        },
      },
      edit: {
        featureGroup: drawnItems,
      },
    });

    map.addControl(drawControl);

    map.on("draw:created", (event: any) => {
      const layer = event.layer;
      drawnItems.addLayer(layer);

      // Convert LatLngs to pixel coordinates
      const latlngs = layer.getLatLngs()[0]; // First ring only
      const pixels = latlngs.map((latlng: any) =>
        map.project(latlng, 0) // zoom level 0
      );

      console.log("Polygon (Pixel Coordinates):", JSON.stringify(pixels));
      alert("Polygon logged in console. Copy for use.");
    });

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div
      id="drawing-map"
      style={{
        height: "627px",
        maxWidth: "877px",
        width: "100%",
        border: "2px solid #888",
        margin: "0 auto",
        borderRadius: "8px",
      }}
    ></div>
  );
}
