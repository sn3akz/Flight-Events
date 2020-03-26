﻿import { AircraftStatus, Airport, FlightPlan } from '../Models';

export interface IMap {
    initialize(divId: string, view?: View)
    deinitialize();
    moveMarker(connectionId: string, aircraftStatus: AircraftStatus, isMe: boolean, isFollowing: boolean, isMoreInfo: boolean)
    drawAirports(airports: Airport[])
    drawFlightPlans(flightPlans: FlightPlan[])
    focusAircraft(aircraftStatus: AircraftStatus)
    cleanUp(connectionId: string, isMe: boolean)
    addRangeCircle()
    removeRangeCircle()
    setTileLayer(type: MapTileType)

    onViewChanged(handler: OnViewChangedFn);
}

export type OnViewChangedFn = (view: View) => void;

export interface View {
    latitude: number
    longitude: number
    zoom: number
}

export enum MapTileType {
    OpenStreetMap,
    OpenTopoMap,
    EsriWorldImagery,
    EsriTopo,
    Carto,
    UsVfrSectional,
}