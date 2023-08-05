import React, { useState, useEffect } from 'react';
import banner from '../assets/images/paytm-banner.png';
import './Project.scss';
import Figma from '../assets/images/figma-icon.svg';
import afterEffect from '../assets/images/ae-icon.png';
import ai from '../assets/images/ai-icon.png';
import research from '../assets/images/paytm-sec-research.png';
import survey from '../assets/images/paytm-survey.png';
import paytmPersona from '../assets/images/paytm-persona.svg';
import highlights from '../assets/images/paytm-crazy8.svg';
import keyPoints from '../assets/images/paytm-keypoints.svg';
import wireframes from '../assets/images/paytm-lowfi.png';
import styles from '../assets/images/paytm-styles.png';
import hifi from '../assets/images/paytm-hifi.png';

const ProjectDetails = () => {
	const [activeDivs, setActiveDivs] = useState([]);
	const [sidebarSticky, setSidebarSticky] = useState(false);

	useEffect(() => {
		const stickySidebar = () => {
			const divElement = document.getElementById('targetDiv'); // Replace with your div's id
			if (divElement) {
				const rect = divElement.getBoundingClientRect();
				const isTop = rect.top <= 0;
				setSidebarSticky(isTop);
			}
		};

		window.addEventListener('scroll', stickySidebar);

		return () => {
			window.removeEventListener('scroll', stickySidebar);
		};
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const divElements = Array.from(
				document.getElementsByClassName('scroll-div'),
			);

			const activeDivIds = divElements
				.filter((element) => {
					const rect = element.getBoundingClientRect();
					return rect.top <= 50;
				})
				.map((element) => element.id);

			setActiveDivs(activeDivIds);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className='project-details-wrapper'>
			<div className='project-banner'>
				<img src={banner} />
			</div>
			<div className='banner-strip'>
				<div className='container'>
					<div className='projects-cont-wrapper'>
						<div className='projects-cont'>
							<strong>Project Timeline: </strong>3 weeks
						</div>
						<div className='projects-cont'>
							<strong>My Role: </strong>
							Research, Ideation, Design, Prototype, Testing
						</div>
						<div className='projects-cont'>
							<strong>Tools Used: </strong>
							<img src={Figma} />
							<img src={afterEffect} />
							<img src={ai} />
						</div>
					</div>
				</div>
			</div>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-3 sidebar'>
						<div
							className={`wrap ${sidebarSticky ? 'stickyyy' : ''}`}
							id='targetDiv'>
							<div className='x-timeline ' data-scroll='true'>
								<div className='x-timeline-item '>
									<div className='x-timeline-item_content '>
										<div className='x-timeline-item_content-inner '>
											<a href='#dynamicDiv1'>Project Details</a>
										</div>
									</div>
									<div className='x-timeline-item_marker '>
										<div
											className={`x-timeline-item_marker-inner ${
												activeDivs.includes('dynamicDiv1')
													? 'x-timeline-item_marker-inner-active'
													: ''
											}`}
										/>
									</div>
									<div className='x-timeline-item_meta' />
								</div>

								<div className='x-timeline-item'>
									<div className='x-timeline-item_content'>
										<div className='x-timeline-item_content-inner'>
										<a href='#dynamicDiv2'>Secondary Research </a>
										</div>
									</div>
									<div className='x-timeline-item_marker'>
										<div
											className={`x-timeline-item_marker-inner ${
												activeDivs.includes('dynamicDiv2')
													? 'x-timeline-item_marker-inner-active'
													: ''
											}`}
										/>
									</div>
									<div className='x-timeline-item_meta' />
								</div>
								<div className='x-timeline-item'>
									<div className='x-timeline-item_content'>
										<div className='x-timeline-item_content-inner'>
										<a href='#dynamicDiv3'>Primary Research</a>
										</div>
									</div>
									<div className='x-timeline-item_marker'>
										<div
											className={`x-timeline-item_marker-inner ${
												activeDivs.includes('dynamicDiv3')
													? 'x-timeline-item_marker-inner-active'
													: ''
											}`}
										/>
									</div>
									<div className='x-timeline-item_meta' />
								</div>
								<div className='x-timeline-item'>
									<div className='x-timeline-item_content'>
										<div className='x-timeline-item_content-inner'>
										<a href='#dynamicDiv4'> User Survey </a>
										</div>
									</div>
									<div className='x-timeline-item_marker'>
										<div
											className={`x-timeline-item_marker-inner ${
												activeDivs.includes('dynamicDiv4')
													? 'x-timeline-item_marker-inner-active'
													: ''
											}`}
										/>
									</div>
									<div className='x-timeline-item_meta' />
								</div>
								<div className='x-timeline-item'>
									<div className='x-timeline-item_content'>
										<div className='x-timeline-item_content-inner'>
										<a href='#dynamicDiv5'>User Persona</a>	
										</div>
									</div>
									<div className='x-timeline-item_marker'>
										<div
											className={`x-timeline-item_marker-inner ${
												activeDivs.includes('dynamicDiv5')
													? 'x-timeline-item_marker-inner-active'
													: ''
											}`}
										/>
									</div>
									<div className='x-timeline-item_meta' />
								</div>
								<div className='x-timeline-item'>
									<div className='x-timeline-item_content'>
										<div className='x-timeline-item_content-inner'>
										<a href='#dynamicDiv6'> Problem Statement </a>
										</div>
									</div>
									<div className='x-timeline-item_marker'>
										<div
											className={`x-timeline-item_marker-inner ${
												activeDivs.includes('dynamicDiv6')
													? 'x-timeline-item_marker-inner-active'
													: ''
											}`}
										/>
									</div>
									<div className='x-timeline-item_meta' />
								</div>

								<div className='x-timeline-item'>
									<div className='x-timeline-item_content'>
										<div className='x-timeline-item_content-inner'>
										<a href='#dynamicDiv7'> Key Highlights </a>
										</div>
									</div>
									<div className='x-timeline-item_marker'>
										<div
											className={`x-timeline-item_marker-inner ${
												activeDivs.includes('dynamicDiv7')
													? 'x-timeline-item_marker-inner-active'
													: ''
											}`}
										/>
									</div>
									<div className='x-timeline-item_meta' />
								</div>

								<div className='x-timeline-item'>
									<div className='x-timeline-item_content'>
										<div className='x-timeline-item_content-inner'>
										<a href='#dynamicDiv8'>Ideate | Crazy 8</a>	
										</div>
									</div>
									<div className='x-timeline-item_marker'>
										<div
											className={`x-timeline-item_marker-inner ${
												activeDivs.includes('dynamicDiv8')
													? 'x-timeline-item_marker-inner-active'
													: ''
											}`}
										/>
									</div>
									<div className='x-timeline-item_meta' />
								</div>

								<div className='x-timeline-item'>
									<div className='x-timeline-item_content'>
										<div className='x-timeline-item_content-inner'>
										<a href='#dynamicDiv9'> Low-Fidelity </a>
										</div>
									</div>
									<div className='x-timeline-item_marker'>
										<div
											className={`x-timeline-item_marker-inner ${
												activeDivs.includes('dynamicDiv9')
													? 'x-timeline-item_marker-inner-active'
													: ''
											}`}
										/>
									</div>
									<div className='x-timeline-item_meta' />
								</div>

								<div className='x-timeline-item'>
									<div className='x-timeline-item_content'>
										<div className='x-timeline-item_content-inner'>
										<a href='#dynamicDiv10'>Styles </a> </div>
									</div>
									<div className='x-timeline-item_marker'>
										<div
											className={`x-timeline-item_marker-inner ${
												activeDivs.includes('dynamicDiv10')
													? 'x-timeline-item_marker-inner-active'
													: ''
											}`}
										/>
									</div>
									<div className='x-timeline-item_meta' />
								</div>

								<div className='x-timeline-item'>
									<div className='x-timeline-item_content'>
										<div className='x-timeline-item_content-inner'>
										<a href='#dynamicDiv11'>High-Fidelity</a>	
										</div>
									</div>
									<div className='x-timeline-item_marker'>
										<div
											className={`x-timeline-item_marker-inner ${
												activeDivs.includes('dynamicDiv11')
													? 'x-timeline-item_marker-inner-active'
													: ''
											}`}
										/>
									</div>
									<div className='x-timeline-item_meta' />
								</div>

								<div className='x-timeline-item'>
									<div className='x-timeline-item_content'>
										<div className='x-timeline-item_content-inner'>
										<a href='#dynamicDiv12'>	Usability Testing</a>
										</div>
									</div>
									<div className='x-timeline-item_marker'>
										<div
											className={`x-timeline-item_marker-inner ${
												activeDivs.includes('dynamicDiv12')
													? 'x-timeline-item_marker-inner-active'
													: ''
											}`}
										/>
									</div>
									<div className='x-timeline-item_meta' />
								</div>
							</div>
						</div>
					</div>

					<div className='col-9'>
						<div className='content-details'>
							<h2
								className={`scroll-div ${
									activeDivs.includes('dynamicDiv1') ? 'sticky' : ''
								}`}
								id='dynamicDiv1'>
								How did this project start?
							</h2>
							<p>
								One day, I & One of my friend Saurav were having snacks at a
								restaurant and he tried to pay the bill with Google Pay, but the
								app wasn't responding due to server issues. I suggested he use
								Paytm instead, but he mentioned that he doesn't use Paytm
								because he finds it difficult to use. He explained that the user
								interface of Paytm is cluttered and it takes him a long time to
								find the service he wants to use because the home screen is too
								busy. As a UI/UX designer, I realized that this issue was likely
								not unique to Saurav and that the Paytm home screen could be
								improved. I decided to tackle this problem by redesigning the
								Paytm home screen to make it more user-friendly.
							</p>

							<h2
								className={`scroll-div ${
									activeDivs.includes('dynamicDiv2') ? 'sticky' : ''
								}`}
								id='dynamicDiv2'>
								Secondary Research
							</h2>
							<p>
								Before I decided to redesign the Paytm app, I wanted to ensure
								that the issue my friend experienced with the app was not unique
								to him. I conducted some research by looking at YouTube videos
								and reading reviews on the Play Store. I found that there were
								500+ videos on YouTube teaching users how to use Paytm, which
								had a total of 7 million+ views, indicating that the app may be
								more complicated than it needs to be. Additionally, the reviews
								on the Play Store indicated that users were not satisfied with
								the Paytm app's user interface. To further understand the issue,
								I also included some screenshots related to it."
							</p>

							<img src={research} />

							<h2
								className={`scroll-div ${
									activeDivs.includes('dynamicDiv3') ? 'sticky' : ''
								}`}
								id='dynamicDiv3'>
								Primary Research
							</h2>
							<p>
								After completing my secondary research, I wanted to gather more
								data to confirm my findings. I decided to conduct a primary
								research study using a Google survey and analyzed the data I
								collected.
							</p>

							<h2
								className={`scroll-div ${
									activeDivs.includes('dynamicDiv4') ? 'sticky' : ''
								}`}
								id='dynamicDiv4'>
								User Survey
							</h2>
							<p>
								I prepared a survey with Google Forms and distributed it among
								multiple groups of my knowns. The purpose of doing survey was to
								understand the basic 'pain-points' of users and gather as much
								data as possible. Learning about the problems of potential users
								is a great way to be inspired and motivated. Working with real
								world data is a good starting point to help avoid guesswork and
								preconceptions. Using this information provided a better chance
								to discover the root of the problem and how to solve it. These
								are the questions which have been asked in survey.
							</p>
							<ul>
								<li>What is your name? </li>
								<li>What is your email address? </li>
								<li>What is your age?</li>
								<li>What is your employment status?</li>
								<li>
									Do you use online payment apps like Paytm, Phonepe, Gpay etc.?
								</li>
								<li>
									Which app do you use most for online payments and recharge and
									bill payments?
								</li>
								<li>
									Choose services you use most on Paytm. (you can choose
									multiple)?
								</li>
								<li>Apart from paytm which app do you use simultaneously?</li>
								<li>
									Approximately how long does it take you to complete a task on
									paytm. i.e. money transfer, recharge, bill pay etc.?{' '}
								</li>
								<li>
									How much ratings will you give to paytm for the services you
									are using?
								</li>
							</ul>

							<div className='insight'>
								I got total of 22 responses Here are the insights of the data i
								collected.
							</div>
							<img src={survey} />

							<h2
								className={`scroll-div ${
									activeDivs.includes('dynamicDiv5') ? 'sticky' : ''
								}`}
								id='dynamicDiv5'>
								User Persona
							</h2>
							<p>
								The results of my survey suggested that there were several types
								of users with diverse needs. The accumulation of the different
								insights and common patterns that came from the users' answers
								helped me create a persona which is the manifestation of that
								data in a character.
							</p>

							<img src={paytmPersona} />

							<h2
								className={`scroll-div ${
									activeDivs.includes('dynamicDiv6') ? 'sticky' : ''
								}`}
								id='dynamicDiv6'>
								Problem Statement
							</h2>
							<p>
								Every person has their own unique personality and preferences,
								and as a UX designer, I noticed that people use Paytm for a
								variety of tasks, such as booking tickets, making payments,
								paying bills, and shopping. Paytm has a large number of features
								and a large customer base, so it can be challenging to meet the
								needs of all users. UX research has shown that users find the
								Paytm home page confusing and difficult to navigate. In this
								case study, I attempted to address this problem by redesigning
								the Paytm home screen.
							</p>

							<h2
								className={`scroll-div ${
									activeDivs.includes('dynamicDiv7') ? 'sticky' : ''
								}`}
								id='dynamicDiv7'>
								Key Highlights
							</h2>
							<p>
								Based on my insights that i gathered from user research, I
								decided to focus two main problems
							</p>
							<img src={highlights} />

							<h2
								className={`scroll-div ${
									activeDivs.includes('dynamicDiv8') ? 'sticky' : ''
								}`}
								id='dynamicDiv8'>
								CRAZY 8
							</h2>
							<p>
								Coming to the ideation phase, i decided to choose CRAZY 8 method
								to brainstorm. Since i was the only person involved in this, i
								put a timer of 8 minute and started writing ideas come to my
								mind. here are the results of crazy 8 ideas.
							</p>
							<img src={keyPoints} />
							<p>
								Since i already have Paytm's app map and i am not making any
								major changes in flows and architecture so i skipped to include
								user flows and information architecture in this case study.
							</p>

							<h2
								className={`scroll-div ${
									activeDivs.includes('dynamicDiv9') ? 'sticky' : ''
								}`}
								id='dynamicDiv9'>
								Low-fidelity Wireframes
							</h2>
							<p>
								It was time to start exploring design ideas using paper and
								pencil. After sketching out several wireframes, I selected the
								ones that were easiest to use and enhanced the user's
								experience. The following wireframes were the ones I finalized:
							</p>
							<img src={wireframes} />

							<h2
								className={`scroll-div ${
									activeDivs.includes('dynamicDiv10') ? 'sticky' : ''
								}`}
								id='dynamicDiv10'>
								Styles
							</h2>
							<p>
								After completing the wireframes, I moved on to Figma to create
								Paytm's style and elements. I searched online to see if Paytm
								had an open design system available, but was unable to find one.
								As a result, I decided to create my own style guide and elements
							</p>
							<img src={styles} />

							<h2
								className={`scroll-div ${
									activeDivs.includes('dynamicDiv11') ? 'sticky' : ''
								}`}
								id='dynamicDiv11'>
								High-fidelity Design
							</h2>
							<p>
								Finally. Wait is over. I focused on refining the design and
								adding more detail to the wireframes. I used Figma to create
								interactive screens that closely resembled the final product.
								This allowed me to test the design with users and gather
								feedback on the usability and overall experience.
							</p>
							<img src={hifi} />

							<h2
								className={`scroll-div ${
									activeDivs.includes('dynamicDiv12') ? 'sticky' : ''
								}`}
								id='dynamicDiv12'>
								Usability Testing
							</h2>
							<p>
								After the visual design was complete I tested the prototype with
								FIVE representative users to see how user friendly the
								application is. The test was conducted over Google meet video
								calls and person to person where the participants were asked to
								use the prototype. I observed how they navigated through the
								application.
							</p>
							<ul>
								<li>
									The participants were able to navigate through the app fairly
									easily.
								</li>

								<li>
									The navigation and app flow is simple and easy to memorize for
									the user.
								</li>

								<li>They liked very much customize My Paytm feature.</li>

								<li>
									They appreciated the interface and gave the following inputs:
								</li>
							</ul>

							<h2>Suggestions to make the experience better</h2>
							<ul>
								<li>Two people were not comfortable with expendable icons.</li>

								<li>One of them suggested to keep search bar on top right.</li>

								<li>
									Overall they were happy with the new interface as compare to
									the original one.
								</li>
							</ul>

							<h2>My Learnings</h2>
							<p>
								During the project, I managed to evaluate the market research,
								do a quick user survey, create a set of lo-fi wireframes, build
								them into hi-fi Ul designs, connect them into a prototype, and
								perform a mini usability study. I learned a lot throughout the
								whole process and there is a lot of room for improvement and
								many things to learn. The next steps I would like to take with
								this project is to continue testing and to explore more ways in
								which i can give users a wonderful experience.
							</p>
							<h2 className='text-center'>Thank you for your time 😊</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetails;
