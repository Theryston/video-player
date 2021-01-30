var style = document.createElement('link')
style.rel = 'stylesheet'
style.href = 'index.css'
document.body.appendChild(style)
var BootstrapIcons = document.createElement('link')
BootstrapIcons.rel = 'stylesheet'
BootstrapIcons.href = 'bootstrap-icons/font/bootstrap-icons.css'
document.body.appendChild(BootstrapIcons)

const VideoPlayer = (data) => {
	var ContainerVideoPlayer = document.querySelector(data.selector)
	var video = document.createElement('video')
	video.src = data.src
	video.classList.add('video-player')
	var ButtonPlay = document.createElement('i')
	var Controls = document.createElement('div')
	Controls.classList.add('controls-video_player')
	ButtonPlay.classList.add('bi')
	ButtonPlay.classList.add('bi-play-fill')
	ButtonPlay.classList.add('button-play-video_player')
	ButtonPlay.style.color = data.colors.primary
	var LestClicked = []

	ContainerVideoPlayer.classList.add('container-video-player')
	ContainerVideoPlayer.appendChild(video)


	ButtonPlay.addEventListener('click', () => {
		//ButtonPlay.style.color = data.colors.secondary
		ButtonPlay.style.textShadow = '0px 0px 5px black'

		setTimeout(() => {
			ButtonPlay.style.color = data.colors.primary
			ButtonPlay.style.textShadow = '0px 0px 10px black'
		}, 400)

		if (video.paused) {
			video.play()
			ButtonPlay.classList.replace('bi-play-fill', 'bi-pause-fill')
		} else {
			video.pause()
			ButtonPlay.classList.replace('bi-pause-fill', 'bi-play-fill')
		}
	})

	ContainerVideoPlayer.addEventListener('click',
		() => {
			var DateTime = new Date()
			var SecundNow = DateTime.getSeconds()

			Controls.style.opacity = '100%'
			setInterval(() => {
				if (LestClicked[LestClicked.length-1] != SecundNow) {
					Controls.style.opacity = '0%'
				}
			},
				5000);
			LestClicked.push(SecundNow)
			console.log(LestClicked)
		})

	setInterval(() => {
		if (video.currentTime == video.duration) {
			ButtonPlay.classList.replace('bi-pause-fill', 'bi-play-fill')
		}
	})

	Controls.appendChild(ButtonPlay)
	ContainerVideoPlayer.appendChild(Controls)
}