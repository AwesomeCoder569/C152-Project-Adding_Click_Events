AFRAME.registerComponent("car", {
    schema: {
        rotation: { type: "vec3", default: { x: 180, y: 0, z: 0 } },
        scale: { type: "vec3", default: { x: 0.5, y: 0.5, z: 0.5 } },
        clickCounter: { type: "number", default: 0 }
    },

    init: function() {
        this.el.setAttribute("rotation", this.data.rotation);
        this.el.setAttribute("scale", this.data.scale);
    },

    update: function() {
        window.addEventListener("click", (e) => {
            this.data.clickCounter = this.data.clickCounter + 1;

            if (this.data.clickCounter === 1) {
                const position = { x: 1, y: 0.5, z: -13 };
                this.el.setAttribute("position", position);
            } else if (this.data.clickCounter === 2) {
                const position = { x: 2, y: 0.5, z: -13 };
                this.el.setAttribute("position", position);
            }  else if (this.data.clickCounter === 3) {
                const position = { x: -1, y: 0.5, z: -13 };
                this.el.setAttribute("position", position);
            }  else if (this.data.clickCounter === 4) {
                const position = { x: -2, y: 0.5, z: -13 };
                this.el.setAttribute("position", position);
            }  else if (this.data.clickCounter === 5) {
                const position = { x: 0, y: 0.5, z: -13 };
                this.el.setAttribute("position", position);
                this.data.clickCounter = 0
            }
        });
    }
});