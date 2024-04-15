<script>
	import Navbar from './Navbar.svelte';
	import Section from './Section.svelte';

	const jobs = [
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
	];
</script>

<Navbar />

<div
	class="flex min-h-screen flex-col justify-center gap-4 py-24 transition-all duration-1000 md:gap-6"
>
	<p
		class="max-w-max animate-typing overflow-hidden whitespace-nowrap border-r-2 font-mono text-lg text-mint-tulip-500 transition-all sm:text-xl md:text-2xl"
	>
		Hi, my name is
	</p>
	<p class="text-4xl font-bold text-slate-300 transition-all duration-1000 sm:text-5xl md:text-7xl">
		Tayfun Ceylan.
	</p>
	<p class="text-4xl font-bold text-slate-400 transition-all duration-1000 sm:text-5xl md:text-7xl">
		I study IT-Security at Ruhr-Universität Bochum.
	</p>
	<p class="max-w-lg">
		I’m an IT student specializing in cryptography. In my free time I like tinker with programming
		projects .
	</p>
	<a
		href="https://github.com/tayfunceylan"
		class="mt-7 rounded-md border-2 border-mint-tulip-500 p-4 text-center font-mono text-mint-tulip-500/80 transition-colors duration-500 hover:bg-mint-tulip-500/20 hover:text-mint-tulip-400"
	>
		Check out my GitHub!
	</a>
</div>

<Section title="About Me" id="about">
	<div class="grid grid-cols-1 gap-7 md:grid-cols-2">
		<div class="space-y-6">
			<p>
				Helloo! My name is Tayfun and I enjoy creating things. My interest in programming started
				back in 2018 when I was in school. I decided that I want to get notified if there were
				changes on our substition schedules (Vertretungungsplan). So I began teaching myself Python
				and hooking that script on a Raspberry Pi. It didn't last long until my classmates wanted to
				take advantage of the program as well. It became very popular at school. In the end there
				were approximately 150 registered users. I was constantly adding new features to the program
				and had a lot of fun. — turns out web scraping our schedule at school taught me a lot about
				Python, managing a server and programming in general!
			</p>

			<p>
				Fast-forward to today, and I’ve had the privilege of studying IT-Security at
				Ruhr-Universität Bochum.
			</p>

			<p>Here are a few technologies I’ve been working with recently:</p>

			<ul class="my-5 grid grid-cols-2 gap-2">
				{#each ['Rust', 'Python (Django, DRF)', 'Svelte', 'JavaScript', 'SQL', 'Git', 'Linux', 'HTML & CSS'] as item}
					<li
						class="truncate text-nowrap before:pr-2 before:text-mint-tulip-500 before:content-['▹']"
					>
						{item}
					</li>
				{/each}
			</ul>
		</div>
		<div class="mx-10">
			<div class="group relative mx-auto mb-auto flex max-h-80 max-w-80 justify-center">
				<div
					class="absolute -z-10 size-full translate-x-6 translate-y-6 rounded border-4 border-mint-tulip-500
						transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4
					"
				/>
				<div
					class="transition-color absolute size-full rounded bg-mint-tulip-200 mix-blend-multiply duration-500 ease-out group-hover:bg-white"
				/>
				<enhanced:img src="$lib/images/me.jpg" class="rounded" alt="Portrait" />
			</div>
		</div>
	</div>
</Section>

<Section title="Where I’ve Worked" id="jobs">
	<div class="relative">
		<div class="scrollbar-none flex overflow-scroll">
			{#each jobs as { company, title, when, href, points }, i}
				<div
					class="h-9 shrink-0 basis-36 flex-nowrap truncate text-nowrap pt-2 text-center font-mono text-sm transition-colors has-[:checked]:bg-mint-tulip-500/20"
				>
					<input type="radio" name="company" id={company} class="peer hidden" checked={i === 0} />
					<label for={company} class="h-5 transition-colors peer-checked:text-mint-tulip-500">
						{company}
					</label>
					<div
						class="mt-1 h-1 w-full translate-y-3/4 bg-mint-tulip-500 transition-transform duration-1000 ease-in-out peer-checked:translate-y-0"
					/>
					<div
						class="absolute left-0 translate-y-1/4 space-y-3 text-wrap py-5 text-left font-sans
							opacity-0 transition-all duration-1000 ease-in-out peer-checked:translate-y-0 peer-checked:opacity-100
						"
					>
						<div>
							<div class="flex flex-wrap items-center space-x-1 text-lg">
								<div class="font-semibold">{title}</div>
								<a {href} class="text-mint-tulip-500">@{company}</a>
							</div>
							<div class="text-sm">{when}</div>
						</div>
						<div class="space-y-1">
							{#each points as point}
								<div class="flex gap-2">
									<div class=" my-auto text-mint-tulip-500">▹</div>
									<div>
										{point}
									</div>
								</div>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</Section>

<Section title="What I’ve Built" id="projects">
	<p class="text-center">
		Here are a few projects I’ve worked on recently. Want to see more? Email me. Lorem ipsum dolor
		sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
		dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
		rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
		ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
		labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
		dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
		sit amet.
	</p>
</Section>

<Section title="Get In Touch" id="contact">
	<p class="text-center">
		Feel free to get in touch. You can find me on these social media platforms.
	</p>
	<a
		href="https://www.xing.com/profile/Tayfun_Ceylan3"
		class="mx-auto mt-2 w-fit rounded-md border-2 border-mint-tulip-500 p-4 font-mono text-mint-tulip-500/80 transition-colors duration-500 hover:bg-mint-tulip-500/20 hover:text-mint-tulip-400"
	>
		Say Hello
	</a>
</Section>
