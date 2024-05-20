import Point2D from "./doNotTouch/point2D";
import RectHV from "./doNotTouch/rectHV";
import TreeNode from "./utils/treeNode";
import treeSize from "./utils/treeSize";
import getNodesRange from "./utils/getNodesRange";

class KDTree {
  root: TreeNode | null;

  public constructor() {
    this.root = null;
  }

  public isEmpty(): boolean {
    return this.root === null;
  }

  public size(): number {
    return treeSize(this.root);
  }

  public insert(p: Point2D): void {
    if (this.root === null) {
      this.root = new TreeNode(p, true);
      return;
    }

    let referenceNode: TreeNode | null = this.root;

    while (true) {
      if (referenceNode.compare(p)) {
        if (referenceNode.rightChild) {
          referenceNode = referenceNode.rightChild;
        } else {
          referenceNode.rightChild = new TreeNode(
            p,
            !referenceNode.isHorizontalSplit
          );
          return;
        }
      } else {
        if (referenceNode.leftChild) {
          referenceNode = referenceNode.leftChild;
        } else {
          referenceNode.leftChild = new TreeNode(
            p,
            !referenceNode.isHorizontalSplit
          );
          return;
        }
      }
    }
  }

  public contains(p: Point2D): boolean {
    let referenceNode: TreeNode | null = this.root;

    if (referenceNode === null) {
      return false;
    }

    while (referenceNode.point2D !== p) {
      if (referenceNode.compare(p)) {
        if (referenceNode.rightChild) {
          referenceNode = referenceNode.rightChild;
        } else {
          return false;
        }
      } else {
        if (referenceNode.leftChild) {
          referenceNode = referenceNode.leftChild;
        } else {
          return false;
        }
      }
    }

    return true;
  }

  public range(rect: RectHV): Point2D[] {
    return getNodesRange(this.root, rect);
  }
}

export default KDTree;
