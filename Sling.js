class Sling {
	constructor(bodyA, pointB) {
		var options = {
			bodyA: bodyA,
			pointB: pointB,
			stifness: 0.003,
			length: 1.25,
		};
		this.pointB = pointB;
		this.Sling = constraint.create(options);
		World.add(world, this.Sling);
	}
	attach(body) {
		this.Sling.bodyA = body;
	}
	fly() {
		this.Sling.bodyA = null;
	}
	display() {
		if (this.Sling.BodyA) {
			var pointA = this.Body.position;
			var pointB = this.pointB;

			strokeWeight(2);
			line(pointA.x, pointA.y, pointB.x, pointB.y);
		}
	}
}
