import TreeNode from "./treeNode";

export default function treeSize(node: TreeNode | null): number {
  if (node === null) {
    return 0;
  }
  
  return 1 + treeSize(node.leftChild) + treeSize(node.rightChild);
}