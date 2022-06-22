var ScrollbarOptions = {
	damping: 0.05,
	thumbMinSize: 5,
	renderByPixel: true,
	alwaysShowTracks: true,
	continuousScrolling: true,
	plugins: {
		overscroll: {
			effect: 'bounce',
			damping: 3,
			maxOverscroll: '1vh'
		},
		mobile: {
			speed: 0.7,
			alwaysShowTracks: false
		}
	},
};

if (!document.querySelector('.first-tab').classList.contains('first-tab--main')) {
	Scrollbar.init(document.querySelector('.first-tab'), ScrollbarOptions);
}
if (document.querySelector('.first-tab--main')) {
	Scrollbar.init(document.querySelector('.first-tab--main'), {
		damping: .8,
	});
}
Scrollbar.init(document.querySelector('.menu__container'), {
	damping: .8,
});
const secondTab = Scrollbar.init(document.querySelector('.second-tab__wrapper'), ScrollbarOptions);