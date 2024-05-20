import Point2D from "../doNotTouch/point2D";
import TreeNode from "./treeNode";
import RectHV from "../doNotTouch/rectHV";

export default function getNodesRange(node: TreeNode | null, rect: RectHV): Point2D[] {
  if (!node) {
    return [];
  }

  let nodeRect : RectHV

  if (node.isHorizontalSplit) {
    nodeRect = new RectHV(node.point2D.x, rect.ymin, node.point2D.x, rect.ymax)
  } else {
    nodeRect = new RectHV(rect.xmin, node.point2D.y, rect.xmax, node.point2D.y)
  }

  let pointsArray: Point2D[] = [];

  if (rect.intersects(nodeRect)) {
    pointsArray.push(...getNodesRange(node.leftChild, rect));
    pointsArray.push(...getNodesRange(node.rightChild, rect));

    if (rect.contains(node.point2D)) {
      pointsArray.push(node.point2D);
    }
  } else {
    if (node.isHorizontalSplit) {
      if (node.point2D.x < rect.xmin) {
        pointsArray.push(...getNodesRange(node.rightChild, rect));
      } else if (node.point2D.x > rect.xmax) {
        pointsArray.push(...getNodesRange(node.leftChild, rect));
      }
    } else {
      if (node.point2D.y < rect.ymin) {
        pointsArray.push(...getNodesRange(node.rightChild, rect));
      } else if (node.point2D.y > rect.ymax) {
        pointsArray.push(...getNodesRange(node.leftChild, rect));
      }
    }
  }

  return pointsArray;
}