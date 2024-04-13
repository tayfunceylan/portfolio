<script>
	import Navbar from './Navbar.svelte';
	import Section from './Section.svelte';
</script>

<Navbar />

<div
	class="flex min-h-screen flex-col justify-center gap-4 py-24 transition-all duration-1000 md:gap-6"
>
	<p class="font-mono text-lg text-mint-tulip-500">Hi, my name is</p>
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
	<button
		class="mt-7 rounded-md border-2 border-mint-tulip-500 p-4 font-mono text-mint-tulip-500/80 transition-colors duration-500 hover:bg-mint-tulip-500/20 hover:text-mint-tulip-400"
	>
		Check out my GitHub!
	</button>
</div>

<Section title="About Me" id="about">
	<p class="text-center">
		Helloo! My name is Tayfun and I enjoy creating things. My interest in programming started back
		in 2018 when I was in school. I decided that I want to get notified if there were changes on our
		substition schedules (Vertretungungsplan). So I began teaching myself Python and hooking that
		script on a Raspberry Pi. It didn't last long until my classmates wanted to take advantage of
		the program as well. It became very popular at school. In the end there were approximately 150
		registered users. I was constantly adding new features to the program and had a lot of fun. —
		turns out web scraping our schedule at school taught me a lot about Python, managing a server
		and programming in general! Fast-forward to today, and I’ve had the privilege of studying
		IT-Security at Ruhr-Universität Bochum. Here are a few technologies I’ve been working with
		recently:
	</p>
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
