import createEmotion from "@emotion/css/create-instance";

(function() {
	function _renderInContainer(container, color) {
		const Em = createEmotion({
			key: "ns",
			container
		});

		const styledEl = document.createElement("div");

		styledEl.style.width = "100px";
		styledEl.style.height = "100px";
		styledEl.style.outline = "1px solid blue";

		styledEl.classList.add(Em.css({background: color}));
		container.appendChild(styledEl);
	}

	let container;

	// Broken
	container = document.createElement("div");
	_renderInContainer(container, "red");
	document.body.appendChild(container);

	// Working
	container= document.createElement("div");
	document.body.appendChild(container);
	_renderInContainer(container, "green");
}());
