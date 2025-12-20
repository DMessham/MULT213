import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { googleAPIkey } from "../key";
const API_KEY = globalThis.GOOGLE_MAPS_API_KEY ?? googleAPIkey;


export default function GoogleMapsDisplay(props){
    //do some checks for if the coords were specified, if not use the follofing defaults:
        // lat: 52.09844, lng: -106.550787, zoom: 15,
        let maplat=52.0984,maplong=-106.5507,mapzoom=14
        if (props.lat!=null&&props.long!=null){
            let maplat= props.lat;
            let maplong =props.long;
        }
        if (props.zoom!=null){
            mapzoom = props.zoom;
        }

    return(
        <>
        <APIProvider
            solutionChannel='GMP_devsite_samples_v3_rgmbasicmap'
            apiKey={API_KEY}>
            <Map
                defaultZoom={mapzoom}
                defaultCenter={{ lat: maplat, lng: maplong }}
                gestureHandling={'greedy'}
                disableDefaultUI={false}
                style={{height:'300px'}}
            />
        </APIProvider>
    </>
    )
}


