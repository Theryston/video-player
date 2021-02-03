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
	var Controls = document.createElement('div')
	Controls.classList.add('controls-video_player')
	var ButtonPlay = document.createElement('i')
	var Shadow = document.createElement('div')
	console.log(ContainerVideoPlayer.style.height)
	Shadow.classList.add('shadow_video_player')
	Controls.appendChild(Shadow)
	ContainerVideoPlayer.classList.add('container-video-player')
	ContainerVideoPlayer.appendChild(video)
	var VideoHeight = video.offsetHeight
	ContainerVideoPlayer.style.height = VideoHeight
	ButtonPlay.classList.add('bi')
	ButtonPlay.classList.add('bi-play')
	ButtonPlay.classList.add('button-play-video_player')
	ButtonPlay.style.color = data.colors.primary

	if (data.styles.width) {
		ContainerVideoPlayer.style.width = data.styles.width
	}
	
	if (data.styles.align) {
		if (data.styles.align == 'left') {
			ContainerVideoPlayer.style.marginRight = 'auto'
		} else if (data.styles.align == 'right') {
			ContainerVideoPlayer.style.marginLeft = 'auto'
		} else if (data.styles.align == 'center') {
			ContainerVideoPlayer.style.marginLeft = 'auto'
			ContainerVideoPlayer.style.marginRight = 'auto'
		}
	}

	var ContainerVideoPlayer_width = Number(ContainerVideoPlayer.offsetWidth)/2.8
	
	ContainerVideoPlayer_width = ContainerVideoPlayer_width.toString()

	var ButtonPlay_fontSize = ContainerVideoPlayer_width+'px'

	ButtonPlay.style.fontSize = ButtonPlay_fontSize


	ButtonPlay.addEventListener('click', () => {
		ButtonPlay.style.textShadow = '0px 0px 35px black'

		setTimeout(() => {
			ButtonPlay.style.color = data.colors.primary
			ButtonPlay.style.textShadow = '0px 0px 30px black'
		}, 400)

		if (video.paused) {
			video.play()
			ButtonPlay.classList.replace('bi-play', 'bi-pause')
		} else {
			video.pause()
			ButtonPlay.classList.replace('bi-pause', 'bi-play')
		}
	})

	var LestClicked = []
	let opacity0 = false
	setTimeout(() => {
		opacity0 = true
	},
		4000)
	ContainerVideoPlayer.addEventListener('click',
		() => {
			var DateTime = new Date()
			var SecundNow = DateTime.getSeconds()

			Controls.style.opacity = '100%'
			setInterval(() => {
				if (opacity0) {
					opacity0 = false
					Controls.style.opacity = '0%'
					LestClicked.push(SecundNow)
					setTimeout(() => {
						if (Controls.style.opacity != '0%') {
							opacity0 = true
						}
					},
						4000);
				}
			});
		})

	setInterval(() => {
		if (video.currentTime == video.duration) {
			ButtonPlay.classList.replace('bi-pause-fill', 'bi-play-fill')
		}
	})

	Controls.appendChild(ButtonPlay)
	ContainerVideoPlayer.appendChild(Controls)
}