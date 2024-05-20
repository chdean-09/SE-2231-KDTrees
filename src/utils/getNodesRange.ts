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

  if (!rect.intersects(nodeRect)) {
    return [];
  }

  let pointsArray: Point2D[] = [];
  pointsArray.push(...getNodesRange(node.leftChild, rect));
  pointsArray.push(...getNodesRange(node.rightChild, rect));

  return pointsArray;
}