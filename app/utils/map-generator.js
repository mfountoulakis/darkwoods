import buildImage from './build-image';

export default function mapGenerator(
  imgSource,
  context,
  rowCounter,
  camera,
  columnCounter,
  tileMap,
  tilex,
  tiley,
  tileNumber,
  tilePoint,
  source,
  tileWidth,
  tileHeight
) {
  for (rowCounter = 0; rowCounter < camera.rows + camera.rowBuffer; rowCounter++) {
    for (columnCounter = 0; columnCounter < camera.cols + camera.colBuffer; columnCounter++) {
      tileNumber = tileMap[rowCounter + tiley][columnCounter + tilex];

      tilePoint.x = columnCounter * tileWidth;
      tilePoint.y = rowCounter * tileHeight;

      // integer(current_frame_index % the_number_columns_in_the_tilesheet) * tile_width
      source.x = Math.floor(tileNumber % 20) * 79;
      source.y = Math.floor(tileNumber / 20) * 61;
      // console.log('logging arguments ', ...arguments);
      console.log(context);

      // context.drawImage(this.buildImage(theCanvas, context), this.sourceX, this.sourceY, 32, 32, this.Xposition, this.Yposition, 100, 100);

      context.drawImage(
        buildImage(imgSource),
        source.x,
        source.y,
        tileWidth,
        tileHeight,
        tilePoint.x,
        tilePoint.y,
        tileWidth,
        tileHeight
      );
    }
  }
  return true;
}
