function fullPage() {
  try {
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'relative';
    document.body.style.width = '100%';
    document.body.style.height = '100%';
    document.body.style.margin = '0px';
    document.body.style.padding = '0px';
  } catch (err) {
    console.warn(err);
  }
}
export default fullPage;
