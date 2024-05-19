import Point2D from "./doNotTouch/point2D";
import RectHV from "./doNotTouch/rectHV";

class PointSET {
    points: Point2D[]

    public constructor() {
        this.points = []
    }

    public isEmpty(): boolean {
        if (this.points.length === 0) {
            return true
        }
        return false
    }

    public size(): number {
        return this.points.length
    }
    public insert(p: Point2D): void {
        if (!this.contains(p)) {
            this.points = [...this.points, p]
        }
    
    } // add the point to the set (if it is not already in the set)

    public contains(p: Point2D): boolean {
        this.points.forEach(point => {
            if (point.equals(p)) {
                return true
            }
        })
        return false
    }

    public draw(p): void {
        p.stroke(0);
        p.strokeWeight(.01);
        console.log(this.points)

        for (const point of this.points) {
            p.point(point.x, point.y);
        }
    }

    public range(rect: RectHV): Point2D[] {
        return this.points.filter(point =>
            rect.contains(point)
        );
    }
}

export default PointSET;