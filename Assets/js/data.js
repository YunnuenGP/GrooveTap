var keyData = {
	q: {
		color: getRandomRedColor(),
		sound: getSound('bubbles')
	},
	w: {
		color: getRandomRedColor(),
		sound: getSound('clay')
	},
	e: {
		color: getRandomRedColor(),
		sound: getSound('confetti')
	},
	r: {
		color: getRandomRedColor(),
		sound: getSound('corona')
	},
	t: {
		color: getRandomRedColor(),
		sound: getSound('dotted-spiral')
	},
	y: {
		color: getRandomRedColor(),
		sound: getSound('flash-1')
	},
	u: {
		color: getRandomRedColor(),
		sound: getSound('flash-2')
	},
	i: {
		color: getRandomRedColor(),
		sound: getSound('flash-3')
	},
	o: {
		color: getRandomRedColor(),
		sound: getSound('glimmer')
	},
	p: {
		color: getRandomRedColor(),
		sound: getSound('moon')
	},
	a: {
		color: getRandomGreenColor(),
		sound: getSound('pinwheel')
	},
	s: {
		color: getRandomGreenColor(),
		sound: getSound('piston-1')
	},
	d: {
		color: getRandomGreenColor(),
		sound: getSound('piston-2')
	},
	f: {
		color: getRandomGreenColor(),
		sound: getSound('piston-3')
	},
	g: {
		color: getRandomGreenColor(),
		sound: getSound('prism-1')
	},
	h: {
		color: getRandomGreenColor(),
		sound: getSound('prism-2')
	},
	j: {
		color: getRandomGreenColor(),
		sound: getSound('prism-3')
	},
	k: {
		color: getRandomGreenColor(),
		sound: getSound('splits')
	},
	l: {
		color: getRandomGreenColor(),
		sound: getSound('squiggle')
	},
	z: {
		color: getRandomBlueColor(),
		sound: getSound('strike')
	},
	x: {
		color: getRandomBlueColor(),
		sound: getSound('suspension')
	},
	c: {
		color: getRandomBlueColor(),
		sound: getSound('timer')
	},
	v: {
		color: getRandomBlueColor(),
		sound: getSound('ufo')
	},
	b: {
		color: getRandomBlueColor(),
		sound: getSound('veil')
	},
	n: {
		color: getRandomBlueColor(),
		sound: getSound('wipe')
	},
	m: {
		color: getRandomBlueColor(),
		sound: getSound('zig-zag')
	}
};

function getSound(soundName) {
	return new Howl({
		urls: ['sounds/a/' + soundName + '.mp3']
	});
}

function getRandomRedColor() {
	return 'rgb(' + rgbRandomColor(200, 256) + ', ' + rgbRandomColor(0, 80) + ', ' + rgbRandomColor(0, 80) +')';
}

function getRandomGreenColor() {
	return 'rgb(' + rgbRandomColor(0, 80) + ', ' + rgbRandomColor(200, 256) + ', ' + rgbRandomColor(0, 80) +')';
}

function getRandomBlueColor() {
	return 'rgb(' + rgbRandomColor(0, 80) + ', ' + rgbRandomColor(0, 80) + ', ' + rgbRandomColor(200, 256) +')';
}

function rgbRandomColor(minColorIntensity, maxColorIntensity) {
	if (typeof maxColorIntensity !== 'number' || maxColorIntensity > 256 || maxColorIntensity < 1){
		maxColorIntensity = 256;
	}
	if (typeof minColorIntensity !== 'number' || minColorIntensity > maxColorIntensity){
		minColorIntensity = maxColorIntensity - 1;
	}
	return Math.floor(Math.random() * (maxColorIntensity - minColorIntensity + 1)) + minColorIntensity; 
}