import React from 'react';
import mapboxgl from 'mapbox-gl';
import { connect } from 'react-redux';
import { fetchRouteRequest, getRouteCoords } from '../../store/route';
import { drawRoute } from './drawRoute';

mapboxgl.accessToken =
  'pk.eyJ1Ijoib2xlZ2JlcnNoYWsiLCJhIjoiY2szMWo0eHpsMDd1MjNucXVsaTZnMXJnciJ9.UjddQiOheABKYQLU3SJnWA';
class MapApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 30.33661,
      lat: 59.94024,
      zoom: 9.5,
    };
    this.map = null;
    this.mapContainerRef = React.createRef();
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      const { routeCoords } = this.props;

      if (this.map.getLayer('route')) {
        this.map.flyTo({
          center: [this.state.lng, this.state.lat],
          zoom: this.state.zoom,
        });
        this.map.removeLayer('route');
        this.map.removeSource('route');
      }
      if (routeCoords.length) {
        drawRoute(this.map, routeCoords);
      }
    }
  }

  render() {
    const style = {
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      width: '100%',
      height: window.innerHeight - 72,
      zIndex: -1,
    };

    return (
      <div style={{ position: 'relative' }}>
        <div style={style} ref={this.mapContainerRef} className="mapContainer" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  routeCoords: getRouteCoords(state),
});

const mapDispatchToProps = { fetchRouteRequest };

export default connect(mapStateToProps, mapDispatchToProps)(MapApp);
