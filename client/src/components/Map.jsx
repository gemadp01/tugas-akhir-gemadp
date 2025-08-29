import { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

const centerPosition = [-6.2, 106.816666]; // Jakarta

// komponen untuk update center saat props coords berubah
function ChangeView({ coords }) {
  const map = useMap();

  useEffect(() => {
    if (coords) {
      map.setView(coords, 15);
    }
  }, [coords, map]);

  return null;
}

// komponen untuk handle klik map
function LocationMarker({ onMapSelect }) {
  const [markerPos, setMarkerPos] = useState(null);

  useMapEvents({
    async click(e) {
      const latlng = e.latlng;
      setMarkerPos(latlng);

      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latlng.lat}&lon=${latlng.lng}&format=json`
        );
        const data = await res.json();
        const name = data.display_name || "Lokasi tidak ditemukan";

        if (onMapSelect) {
          onMapSelect(name, latlng); // kirim ke Register
        }
      } catch (err) {
        console.error("Gagal fetch lokasi:", err);
      }
    },
  });

  return markerPos ? (
    <Marker position={markerPos}>
      <Popup>Kamu pilih lokasi ini</Popup>
    </Marker>
  ) : null;
}

const Map = ({ coords, onMapSelect }) => {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    if (coords) {
      setPosition(coords);
    }
  }, [coords]);

  return (
    <MapContainer
      center={centerPosition}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {coords && <ChangeView coords={coords} />}
      <LocationMarker onMapSelect={onMapSelect} />

      {position && (
        <Marker position={position}>
          <Popup>Lokasi hasil input</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default Map;
