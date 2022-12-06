const Haversine = () => {

  const R = 6378137

function squared (x: number) { return x * x }
function toRad (x: number) { return x * Math.PI / 180.0 }
function hav (x: number) {
  return squared(Math.sin(x / 2))
}

function haversineDistance (origin: number[], target: number[]) {

  const aLat = toRad(origin[1]!)
  const bLat = toRad(target[1]!)
  const aLng = toRad(origin[0]!)
  const bLng = toRad(target[0]!)

  const ht = hav(bLat - aLat) + Math.cos(aLat) * Math.cos(bLat) * hav(bLng - aLng)
  return 2 * R * Math.asin(Math.sqrt(ht))
}

  return { haversineDistance };
};

export default Haversine;
