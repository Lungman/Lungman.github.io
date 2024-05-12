function spinning (speedScale) {
  let time=Date.now()/speedScale;
  let x = Math.sin(time);
  let y = Math.cos(time);
  return [x, y];
}
