<script>
	import Navbar from './Navbar.svelte';
	import Section from './Section.svelte';
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
		class="mt-7 text-center rounded-md border-2 border-mint-tulip-500 p-4 font-mono text-mint-tulip-500/80 transition-colors duration-500 hover:bg-mint-tulip-500/20 hover:text-mint-tulip-400"
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
	<p class="text-center">
		Currently I'm working as a student assistant... Lorem ipsum dolor sit amet, consetetur
		sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
		erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
		kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
		amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
		magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
		Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
	</p>
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
