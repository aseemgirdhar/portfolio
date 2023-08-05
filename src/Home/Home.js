import React, { useEffect, useRef, useState } from 'react';
import './Home.scss';
import owner from '../assets/images/smart-boy.png';
import arrow from '../assets/images/arrow.svg';
import learnMate from '../assets/images/learmmate-logo.svg';
import learnMateBanner from '../assets/images/learnmate-thumbnail.png';
import paytm from '../assets/images/paytm-logo.png';
import paytmBanner from '../assets/images/paytm-banner.png';
import droom from '../assets/images/droom-logo.png';
import droomBanner from '../assets/images/droom-thumbnail.png';
import youtube from '../assets/images/yt-logo.png';
import youtubeBanner from '../assets/images/yt-thumbnail.png';
import specsCart from '../assets/images/specskart-logo.png';
import specsCartBanner from '../assets/images/specskart-thumbnail.png';
import sisucare from '../assets/images/sisucare-logo.svg';
import sisucareBanner from '../assets/images/sisucare-thumbnail.png';
import videoIcon from '../assets/images/motion-graphic/video-icon.svg';


// Motion Graphics
import WFH from '../assets/images/motion-graphic/wfh-thumbnail.png';
import WFHAnimation from '../assets/images/motion-graphic/WFH.mp4';

import feedback from '../assets/images/motion-graphic/feedback-thumbnail.png';
import feedbackAnimation from '../assets/images/motion-graphic/Feedback.mp4';
import msDhoni from '../assets/images/motion-graphic/dhoni-thumbnail.png';
import msDhoniAnimation from '../assets/images/motion-graphic/dhoni.mp4';

import gift from '../assets/images/motion-graphic/gift-thumbnail.png';
import giftAnimation from '../assets/images/motion-graphic/Gift.mp4';

import diwali from '../assets/images/motion-graphic/diwali-thumbnail.png';
import diwaliAnimation from '../assets/images/motion-graphic/DIWALI.mp4';

import ipl from '../assets/images/motion-graphic/ipl-thumbnail.png';
import iplAnimation from '../assets/images/motion-graphic/ipl.mp4';

import qr from '../assets/images/motion-graphic/qr-thumbnail.png';
import qrAnimation from '../assets/images/motion-graphic/QR.mp4';

import Annergetic from '../assets/images/motion-graphic/Annergetic-thumbnail.png';
import AnnergeticAnimation from '../assets/images/motion-graphic/Annergetic.mp4';

import about from '../assets/images/smart-boy-about.png';

const Home = () => {
	useEffect(() => {
		var TxtType = function (el, toRotate, period) {
			this.toRotate = toRotate;
			this.el = el;
			this.loopNum = 0;
			this.period = parseInt(period, 10) || 2000;
			this.txt = '';
			this.tick();
			this.isDeleting = false;
		};

		TxtType.prototype.tick = function () {
			var i = this.loopNum % this.toRotate.length;
			var fullTxt = this.toRotate[i];

			if (this.isDeleting) {
				this.txt = fullTxt.substring(0, this.txt.length - 1);
			} else {
				this.txt = fullTxt.substring(0, this.txt.length + 1);
			}

			this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

			var that = this;
			var delta = 200 - Math.random() * 100;

			if (this.isDeleting) {
				delta /= 2;
			}

			if (!this.isDeleting && this.txt === fullTxt) {
				delta = this.period;
				this.isDeleting = true;
			} else if (this.isDeleting && this.txt === '') {
				this.isDeleting = false;
				this.loopNum++;
				delta = 500;
			}

			setTimeout(function () {
				that.tick();
			}, delta);
		};

		window.onload = function () {
			var elements = document.getElementsByClassName('typewrite');
			for (var i = 0; i < elements.length; i++) {
				var toRotate = elements[i].getAttribute('data-type');
				var period = elements[i].getAttribute('data-period');
				if (toRotate) {
					new TxtType(elements[i], JSON.parse(toRotate), period);
				}
			}
			// INJECT CSS
			var css = document.createElement('style');
			css.type = 'text/css';
			css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #fff}';
			document.body.appendChild(css);
		};
	}, []);

	const [playing, setplaying] = useState(null);
	const videoRef = useRef([]);

	const handlePlay = (type) => {
		// setPlaying(videoRef.current[type].play() ? !playing : playing);
		if (playing !== null) {
			videoRef.current[playing].pause(); // Pause the previously playing video
			setplaying(!playing);
		}
		setplaying(type);
		videoRef.current[type].play();
	};
	// const handlePause = (playing) => {
	// 	videoRef?.current[playing]?.pause(); // Pause the previously playing video
	// };
	return (
		<>
		<div className='container'>
			<div className='banner'>
				<div className='row'>
					<div className='col-8'>
						<div className='banner-text'>
							<h4>Hi,</h4>
							<h3>I am Kartik Aryan</h3>

							<h1>
								I do{' '}
								<span
									href='#'
									class='typewrite'
									data-period='2000'
									data-type='[ "Motion Graphics", "User Research", "User Interface Design", "User Experience Design" ]'>
									<span class='wrap'></span>
								</span>
							</h1>

							<img src={arrow} alt='arrow' />
							<button>Contact me</button>
						</div>
					</div>
					<div className='col-4 banner-image'>
						<img src={owner} alt='sanjay' />
					</div>
				</div>
			</div>

			<div className='generic-title'>Portfolio</div>
			<div className='generic-subtitle'>UI/UX</div>
			<div className='projects'>
				<div className='row'>
					<div className='col-4 p-0'>
						<div className='logo logo-bg'>
							<img src={learnMate} alt='learnmate' />
							Connect, Learn, Grow
						</div>
					</div>
					<div className='col-8 p-0'>
						<img src={learnMateBanner} alt='learnMate Banner' />
					</div>
				</div>
			</div>

			<div className='projects'>
				<div className='row'>
					<div className='col-4 p-0'>
						<div className='logo logo-bg-1'>
							<img src={paytm} alt='paytm' />
							Improving home screen of Paytm app
						</div>
					</div>
					<div className='col-8 p-0'>
						<img
							src={paytmBanner}
							className='banner-radius'
							alt='paytm Banner'
						/>
					</div>
				</div>
			</div>

			<div className='projects'>
				<div className='row'>
					<div className='col-4 p-0'>
						<div className='logo logo-bg-2'>
							<img src={droom} alt='paytm' />
							Droom vehicle history page re-design
						</div>
					</div>
					<div className='col-8 p-0'>
						<img
							src={droomBanner}
							className='banner-radius'
							alt='paytm Banner'
						/>
					</div>
				</div>
			</div>

			<div className='projects'>
				<div className='row'>
					<div className='col-4 p-0'>
						<div className='logo logo-bg-3'>
							<img src={youtube} alt='paytm' />
							Adding new feature to Youtube Shorts
						</div>
					</div>
					<div className='col-8 p-0'>
						<img
							src={youtubeBanner}
							className='banner-radius'
							alt='paytm Banner'
						/>
					</div>
				</div>
			</div>

			<div className='projects'>
				<div className='row'>
					<div className='col-4 p-0'>
						<div className='logo logo-bg-4'>
							<img src={specsCart} alt='paytm' />
							SpecsCart home page re-design
						</div>
					</div>
					<div className='col-8 p-0'>
						<img
							src={specsCartBanner}
							className='banner-radius'
							alt='paytm Banner'
						/>
					</div>
				</div>
			</div>

			<div className='projects'>
				<div className='row'>
					<div className='col-4 p-0'>
						<div className='logo logo-bg-5'>
							<img src={sisucare} alt='paytm' />
							SisuCare Student Dashboard Design
						</div>
					</div>
					<div className='col-8 p-0'>
						<img
							src={sisucareBanner}
							className='banner-radius'
							alt='paytm Banner'
						/>
					</div>
				</div>
			</div>

			<div className='generic-subtitle'>Motion Graphics</div>

			<div className='row'>
				<div className='col-3'>
					<div class='video-wrapper'>
						<img
							src={videoIcon}
							alt='videoIcon'
							className='videoIcon'
							onClick={() => handlePlay(0)}
						/>

						<video
							ref={(el) => (videoRef.current[0] = el)}
							width='100%'
							poster={WFH}>
							<source src={WFHAnimation} type='video/mp4' />
						</video>

						<div className='video-caption'>Work from home animation</div>
					</div>
				</div>

				<div className='col-3'>
					<div class='video-wrapper'>
						<img
							src={videoIcon}
							alt='videoIcon'
							className='videoIcon'
							onClick={() => handlePlay(1)}
						/>
						<video
							ref={(el) => (videoRef.current[1] = el)}
							width='100%'
							poster={feedback}>
							<source src={feedbackAnimation} type='video/mp4' />
						</video>

						<div className='video-caption'>Feedback Interaction</div>
					</div>
				</div>

				<div className='col-3'>
					<div class='video-wrapper'>
						<img
							src={videoIcon}
							alt='videoIcon'
							className='videoIcon'
							onClick={() => handlePlay(2)}
						/>
						<video
							ref={(el) => (videoRef.current[2] = el)}
							width='100%'
							poster={msDhoni}>
							<source src={msDhoniAnimation} type='video/mp4' />
						</video>
						<div className='video-caption'>A Tribute to M.S. Dhoni</div>
					</div>
				</div>

				<div className='col-3'>
					<div class='video-wrapper'>
						<img
							src={videoIcon}
							alt='videoIcon'
							className='videoIcon'
							onClick={() => handlePlay(3)}
						/>
						<video
							ref={(el) => (videoRef.current[3] = el)}
							width='100%'
							poster={gift}>
							<source src={giftAnimation} type='video/mp4' />
						</video>
						<div className='video-caption'>Gift Box Animation</div>
					</div>
				</div>

				<div className='col-3'>
					<div class='video-wrapper'>
						<img
							src={videoIcon}
							alt='videoIcon'
							className='videoIcon'
							onClick={() => handlePlay(4)}
						/>
						<video
							ref={(el) => (videoRef.current[4] = el)}
							width='100%'
							poster={diwali}>
							<source src={diwaliAnimation} type='video/mp4' />
						</video>
						<div className='video-caption'>Happy Diwali Animation</div>
					</div>
				</div>

				<div className='col-3'>
					<div class='video-wrapper'>
						<img
							src={videoIcon}
							alt='videoIcon'
							className='videoIcon'
							onClick={() => handlePlay(5)}
						/>
						<video
							ref={(el) => (videoRef.current[5] = el)}
							width='100%'
							poster={qr}>
							<source src={qrAnimation} type='video/mp4' />
						</video>
						<div className='video-caption'>QR Code Scan Animation</div>
					</div>
				</div>

				<div className='col-3'>
					<div class='video-wrapper'>
						<img
							src={videoIcon}
							alt='videoIcon'
							className='videoIcon'
							onClick={() => handlePlay(6)}
						/>
						<video
							ref={(el) => (videoRef.current[6] = el)}
							width='100%'
							poster={ipl}>
							<source src={iplAnimation} type='video/mp4' />
						</video>
						<div className='video-caption'>IPL Animation</div>
					</div>
				</div>

				<div className='col-3'>
					<div class='video-wrapper'>
						<img
							src={videoIcon}
							alt='videoIcon'
							className='videoIcon'
							onClick={() => handlePlay(7)}
						/>
						<video
							ref={(el) => (videoRef.current[7] = el)}
							width='100%'
							poster={Annergetic}>
							<source src={AnnergeticAnimation} type='video/mp4' />
						</video>
						<div className='video-caption'>Annergetic Animation</div>
					</div>
				</div>
			</div>

			<div className='aboutme-wrapper'>
				<div className='aboutme-text'>
					<h2>About me</h2>
					<p>
						<span>Hello</span> , I'm Sanjay Arora, a passionate UI/UX designer
						with a love for problem-solving and crafting intuitive interfaces.
						With 2 years of experience in UX design and 2 years of experience in
						Motion Graphics, I specialize in creating seamless digital
						experiences that engage and delight users. My expertise lies in user
						research, information architecture, interaction design, and visual
						aesthetics. Through my designs, I strive to simplify complex ideas
						and bring them to life in an aesthetically pleasing and
						user-friendly manner.
					</p>
				</div>
				<div className='aboutme-img'>
					<img alt='sanjay-portfolio' src={about} />
				</div>
			</div>
		</div>
		
		</>

	);
};

export default Home;
