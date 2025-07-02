// libraries
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// styles
import "leaflet/dist/leaflet.css";

// places
const places = [
  {
    id: 1,
    name: "Imperial Fashion Lyon",
    lat: 45.76813152196894,
    long: 4.83387924662758,
    address: "21 Rue du Président Édouard Herriot, 69001 Lyon, France",
  },
  {
    id: 2,
    name: "Le Block By Solis",
    lat: 45.76386999112499,
    long: 4.838152522723203,
    address: "7 Quai Jules Courmont, 69002 Lyon, France",
  },
  {
    id: 3,
    name: "HF Outlet",
    lat: 45.770846538484435,
    long: 4.835569495851722,
    address: "7 Rue Puits Gaillot, 69001 Lyon, France",
  },
  {
    id: 4,
    name: "Jules Lyon-République",
    lat: 45.76569752716209,
    long: 4.835741157213324,
    address: "33 Rue de la République, 69002 Lyon, France",
  },
  {
    id: 5,
    name: "Sandro",
    lat: 45.76521852520087,
    long: 4.832994575427691,
    address: "70 Rue du Président Édouard Herriot, 69002 Lyon, France",
  },
];

export default function Map() {
  return (
    <div
      id="map"
      className="flex h-[500px] w-full flex-row items-center justify-center"
    >
      <MapContainer center={[45.7665, 4.835]} zoom={15} className="h-100 w-100">
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {places.map((i) => (
          <Marker key={i.id} position={[i.lat, i.long]}>
            <Popup className="font-sans">
              {i.name}
              <br />
              {i.address}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
