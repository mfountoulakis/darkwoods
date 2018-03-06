export default function buildImage(imageSource) {
  var image = new Image();
  image.src = imageSource;

  console.log(image);
  return image;
  // return true;
}
