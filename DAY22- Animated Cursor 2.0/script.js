const eyes = document.querySelectorAll('.eye-roll');

window.addEventListener('mousemove', (e) => {
	eyes.forEach(eye => {
		const x = eye.getBoundingClientRect().left + (eye.clientWidth / 3);
		const y = eye.getBoundingClientRect().top + (eye.clientHeight / 3);
		const radian = Math.atan2(e.pageX - x, e.pageY - y);
		const rot = (radian * (180 / Math.PI) * -1) + 90;
		eye.style.transform = `rotate(${rot}deg)`;
		
		console.log(rot);
	});
});
