import React, {
  useState,
  useRef,
  useEffect,
  type ReactElement,
  type MutableRefObject,
} from "react";
import Map from "ol/Map";
import View from "ol/View";
import Feature from "ol/Feature";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import OSM from "ol/source/OSM";
import { fromLonLat, transform } from "ol/proj";
import { type MapBrowserEvent } from "ol";
import { Point } from "ol/geom";
import Style from "ol/style/Style";
import Icon from "ol/style/Icon";
import "ol/ol.css";

import icon from "../../../../Assets/Icons/locationMarker.png";

interface props {
  coordinates: MutableRefObject<number[] | null>
}

const MapLocationPicker = (props: props): ReactElement => {
  const { coordinates } = props;
  console.log(coordinates.current)
  const didMount = useRef<boolean>(false);
  const [map, setMap] = useState<Map>();
  const mapElement = useRef<HTMLDivElement>(null);
  const mapRef = useRef<Map>();
  const [featuresLayer, setFeaturesLayer] =
    useState<VectorLayer<VectorSource>>();
  // rd: coord state stores the pin that the user drops
  // rd: that is the array (longitude, latitude) that we need to confirm and save.
  const [selectedCoord, setSelectedCoord] = useState<number[] | null>(coordinates.current);
  mapRef.current = map;

  useEffect(() => {
    if (!didMount.current) {
      const initialFeaturesLayer = new VectorLayer({
        source: new VectorSource(),
      });

      const initialMap = new Map({
        // used setTarget instead to avoid TS & invalid length errors.
        // target: mapElement.current!,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          initialFeaturesLayer,
        ],
        view: new View({
          center: fromLonLat([139.8, 35.7]),
          zoom: 11,
        }),
      });
      if (mapElement.current !== null) initialMap.setTarget(mapElement.current);
      setMap(initialMap);
      setFeaturesLayer(initialFeaturesLayer);
      initialMap.on("click", handleMapClick);
    }

    didMount.current = true;
  }, [didMount]);

  useEffect(() => {
    if (featuresLayer && selectedCoord) {
      featuresLayer.setSource(
        new VectorSource({
          features: [
            new Feature({
              geometry: new Point(fromLonLat(selectedCoord)),
            }),
          ],
        })
      );
      featuresLayer.setStyle(
        new Style({
          image: new Icon({
            src: icon.src,
            anchor: [0.5, 1],
            scale: 0.8,
          }),
        })
      );
    }
  }, [selectedCoord, featuresLayer]);

  const handleMapClick = (event: MapBrowserEvent<UIEvent>) => {
    if (mapRef.current) {
      const clickedCoord = mapRef.current.getCoordinateFromPixel(event.pixel);
      const transformedCoord = transform(
        clickedCoord,
        "EPSG:3857",
        "EPSG:4326"
      );
      coordinates.current = transformedCoord
      setSelectedCoord(transformedCoord);
    }
  };

  return (
    <>
      <div ref={mapElement} className="map" />

      <p className="relative mb-6 text-center ml-2 text-sm p-2">
        {selectedCoord
          ? (`lat. ${selectedCoord[1]} & lon. ${selectedCoord[0]}`)
          : "no location selected"}
      </p>
    </>
  );
};

export default MapLocationPicker;
