import Point2D from "../doNotTouch/point2D";

export default class TreeNode {
  point2D: Point2D;
  parent: TreeNode | null;
  leftChild: TreeNode | null;
  rightChild: TreeNode | null;
  isHorizontalSplit: boolean;

  constructor(point2D: Point2D, isHorizontalSplit: boolean) {
    this.point2D = point2D;
    this.parent = null;
    this.leftChild = null;
    this.rightChild = null;
    this.isHorizontalSplit = isHorizontalSplit;
  }
}