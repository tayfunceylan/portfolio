export const navbar = {
	logo_text: 'Tayfun 🌪️'
};

// if you dont want it, just set it to an empty string
export const socials = {
	text_on_right: 'Tayfun Ceylan',
	github: `https://github.com/tayfunceylan`,
	xing: `https://xing.com/profile/Tayfun_Ceylan3`
};

export const hi = {
	section_id: `Hi`,
	greeting: `Hi, my name is`,
	name: `Tayfun Ceylan`,
	what_do_i_do: `I study IT-Security at Ruhr-Universität Bochum.`,
	who_am_i: `I’m an IT student specializing in cryptography. In my free time I like tinker with programming projects.`,
	button: {
		text: `Check out my GitHub!`,
		href: socials.github
	}
};

export const about = {
	section_title: 'About Me',
	section_id: 'About',
	paragraphs: [
		`Helloo! My name is Tayfun and I enjoy creating things. My interest in programming started
		back in 2018 when I was in school. I decided that I want to get notified if there were
		changes on our substition schedules (Vertretungungsplan). So I began teaching myself Python
		and hooking that script on a Raspberry Pi. It didn't last long until my classmates wanted to
		take advantage of the program as well. It became very popular at school. In the end there
		were approximately 150 registered users. I was constantly adding new features to the program
		and had a lot of fun. — turns out web scraping our schedule at school taught me a lot about
		Python, managing a server and programming in general!`,
		`Fast forward to today and I’ve had the privilege of studying IT-Security at Ruhr-Universität
		Bochum.`,
		`Here are a few technologies I’ve been working with recently:`
	],
	skills: [
		'Rust',
		'Python (Django, DRF)',
		'Svelte',
		'JavaScript',
		'SQL',
		'Git',
		'Linux',
		'HTML & CSS'
	]
};

export const jobs = {
	section_title: 'Where I’ve Worked',
	section_id: 'Jobs',
	list: [
		{
			company: 'ZPP INGENIEURE',
			title: 'Werkstudent IT-Security',
			when: 'April 2022 - today',
			href: 'https://zpp.de/',
			points: [
				'looking for security issues, bugs and unwanted behaviour',
				'implementing security measures',
				'involved in web development',
				'working with Java, Python and Docker',
				'occasionally some cool smaller projects'
			]
		},
		{
			company: 'Opel',
			title: 'Kommissionierer',
			when: 'October - December 2020, September - October 2021',
			href: 'https://opel.de/',
			points: [
				'I was working full time for a month and the rest in part time',
				'I was involved in a lot of different tasks for both Teileeingang and Teileausgang',
				'driving an EZS 350 (Schlepper) - collecting items in cages attached to the vehicle',
				'Nachschübe intern - changing location of items internally',
				'Nachschübe extern - changing location of items to an external area',
				'Greifen - picking items for costumer delivery',
				'Konsolidierung - preparing cages for shipment',
				'Umlagern - manually changing location of items',
				'Einlagern - store items on a transport trolley coming in from a truck'
			]
		},
		{
			company: 'Burger King',
			title: 'Fahrer',
			when: 'January 2019 - April 2020',
			href: 'https://burgerking.de/',
			points: [
				'most of the time I was delivering burgers to costumers homes in a Toyota Aygo',
				'I enjoyed listing to podcasts while driving to the customer',
				'as well as working in the kitchen',
				'making all kinds of burgers'
			]
		},
		{
			company: 'M.S.D.',
			title: 'Zusteller',
			when: '2013 - 2017',
			points: [
				'when I turned 13 I decided to earn some extra money for myself',
				'at first I was working for zusteller-online.de delivering magazines like TV-Movie or Bravo on my bike',
				'later on I saw that I had better opportunities at M.S.D. to develop myself, so i applied to M.S.D.',
				'being outside, enjoying fresh air and hearing music was refreshing'
			]
		}
	]
};

export const projects = {
	section_title: 'What I’ve Built',
	section_id: 'Projects',
	list: [
		{
			title: 'Vertretungsplan',
			points: [
				'Personalisierte Vertretungsplanberichte.',
				'Ein Service für den Vertretungsplan der GES Bochum.'
			],
			tools: ['Python', 'Cron', 'Telegram-Bot-API'],
			href: 'https://github.com/tayfunceylan/vertretungsplan'
		},
		{
			title: 'Pet Feeder',
			points: ['Eine App um das Füttern von Haustieren zu tracken und vieles mehr.'],
			tools: ['Nuxt', 'Vue', 'Python', 'Django Rest Framework'],
			href: 'https://github.com/tayfunceylan/pet-feeder'
		},
		{
			title: 'E-Paper Info Screen',
			points: [
				'E-Paper Display hooked up with an ESP-32 to display various information such as weather, news, train departure, appointments and to do lists.'
			],
			tools: ['C#', 'Microcontroller', 'ESP-32', 'E-Paper', 'Arduino'],
			href: 'https://github.com/tayfunceylan/epaper'
		},
		{
			title: 'ÖPNV FahrplanBot',
			points: [
				`A telegram bot for showing departure monitors for public transport. 
				View departure times for your stops including delays. 
				Create line filter to only show the lines you need. 
				You can also choose a direction. Refresh the message at any time.`
			],
			tools: ['Python', 'Insomnia', 'Docker', 'Telegram-Bot-API'],
			href: 'https://github.com/tayfunceylan/FahrplanBot'
		}
	]
};

export const contact = {
	section_title: 'Get in Touch',
	section_id: 'Contact',
	paragraphs: [
		`Although I’m not currently looking for any new opportunities, my inbox is always open.
		Whether you have a question or just want to say hi, I’ll try my best to get back to you!`
	],
	button: {
		text: `Say Hello`,
		href: socials.xing
	}
};
