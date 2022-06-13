var ScrollbarOptions = {
	damping: 0.05,
	thumbMinSize: 5,
	renderByPixel: true,
	alwaysShowTracks: true,
	continuousScrolling: true,
	plugins: {
		overscroll: {
			effect: 'bounce',
			damping: 0.15,
			maxOverscroll: '10vh'
		},
		mobile: {
			speed: 0.7,
			alwaysShowTracks: false
		}
	},
};
Scrollbar.init(document.querySelector('.first-tab'), ScrollbarOptions);