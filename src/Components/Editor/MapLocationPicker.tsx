import React, { useState, useRef, useEffect, type FC, type ReactElement } from "react";
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import Feature from "ol/Feature";
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import XYZ from 'ol/source/XYZ';
import Layer from "ol/layer/Layer";
import OSM from 'ol/source/OSM';
import 'ol/ol.css';
import { fromLonLat, transform } from "ol/proj";
import { MapBrowserEvent } from "ol";
import { Geometry, Point } from "ol/geom";
import Style from "ol/style/Style";

const MapLocationPicker: FC = (): ReactElement => {

    const didMount = useRef<boolean>(false);
    const [map, setMap] = useState<Map>();
    const mapElement = useRef<HTMLDivElement>(null);
    const mapRef = useRef<Map>();
    const [featuresLayer, setFeaturesLayer] = useState<VectorLayer<VectorSource>>();
    const [selectedCoord, setSelectedCoord] = useState<number[]>()
    mapRef.current = map;

    useEffect(() => {
        if (!didMount.current) {

            const initialFeaturesLayer = new VectorLayer({
                source: new VectorSource()
            })

            const initialMap = new Map({
                // I had to go to Map.d.ts line 206 and add null as a type possibility
                target: mapElement.current,
                layers: [
                    new TileLayer({
                        source: new OSM(),
                    }),
                    initialFeaturesLayer
                ],
                view: new View({
                    center: fromLonLat([139.8, 35.7]),
                    zoom: 11,
                }),
            })
            setMap(initialMap)
            setFeaturesLayer(initialFeaturesLayer)
            initialMap.on('click', handleMapClick)
        };

        didMount.current = true;
    }, [didMount]);

    useEffect(() => {
        if (featuresLayer) {
            console.log(featuresLayer)
            featuresLayer.setSource(
                new VectorSource({
                    features: [
                        new Feature({
                            geometry: new Point(fromLonLat(selectedCoord!))
                        })
                    ],
                    // Figure out how to style to a marker
                    style: new Style()
                })
                )
        }
        // fit map to feature extent (with 100px of padding)
        // if (map && featuresLayer) {
        //     map.getView().fit(featuresLayer.getSource().getExtent(), {
        //         padding: [100, 100, 100, 100]
        //     })
        // }

        // }

    }, [selectedCoord])


    const handleMapClick = (event: MapBrowserEvent<UIEvent>) => {
        // console.log(event)
        // get clicked coordinate using mapRef to access current React state inside OpenLayers callback
        //  https://stackoverflow.com/a/60643670
        // console.log(mapRef.current)
        if (mapRef.current) {
            const clickedCoord = mapRef.current.getCoordinateFromPixel(event.pixel);
            const transformedCoord = transform(clickedCoord, 'EPSG:3857', 'EPSG:4326')
            setSelectedCoord(transformedCoord)
            console.log(transformedCoord)
        }
    }

    return (
        <>
            <div
                ref={mapElement}
                className="map"
            />
            <div>{selectedCoord ? `${selectedCoord[0]}, ${selectedCoord[1]}` : 0}</div>
        </>
    );
}


export default MapLocationPicker;
