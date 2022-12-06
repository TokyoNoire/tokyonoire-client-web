const Haversine = () => {

  const R = 6378137

function squared (x: number) { return x * x }
function toRad (x: number) { return x * Math.PI / 180.0 }
function hav (x: number) {
  return squared(Math.sin(x / 2))
}

interface LatitudeLongitude {
  latitude: number;
  longitude: number;
}

// hav(theta) = hav(bLat - aLat) + cos(aLat) * cos(bLat) * hav(bLon - aLon)
function haversineDistance (a: LatitudeLongitude, b: LatitudeLongitude) {

  const aLat = toRad(Array.isArray(a) ? a[1] : a.latitude)
  const bLat = toRad(Array.isArray(b) ? b[1] : b.latitude)
  const aLng = toRad(Array.isArray(a) ? a[0] : a.longitude)
  const bLng = toRad(Array.isArray(b) ? b[0] : b.longitude)

  const ht = hav(bLat - aLat) + Math.cos(aLat) * Math.cos(bLat) * hav(bLng - aLng)
  return 2 * R * Math.asin(Math.sqrt(ht))
}

  return { haversineDistance };
};

export default Haversine;
