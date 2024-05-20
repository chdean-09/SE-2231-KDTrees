import Point2D from "./doNotTouch/point2D";
import RectHV from "./doNotTouch/rectHV";
import TreeNode from "./utils/treeNode";
import treeSize from "./utils/treeSize";

class KDTree {
  root: TreeNode | null;

  public constructor() {
    this.root = null;
  }

  public isEmpty(): boolean {
    return this.root === null;
  }

  public size(): number {
    return treeSize(this.root)
  }

  public insert(p: Point2D): void {}

  public contains(p: Point2D): boolean {}

  public range(rect: RectHV): Point2D[] {}
}

export default KDTree;
