const layout = {
  dp: 0,
  iw: 0,
  ih: 0,
  center: {
    x: 0,
    y: 0,
  },
  reset,
};

function reset() {
  layout.dp = (window.innerWidth / window.innerHeight) * 1080;
  layout.iw = window.innerWidth;
  layout.ih = window.innerHeight;
  layout.center.x = window.innerWidth / 2;
  layout.center.y = window.innerHeight / 2;
}
reset();

export default layout;
