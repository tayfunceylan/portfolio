<script lang="ts">
	import Section from './Section.svelte';
</script>

<Section title="About Me" id="about" sectionNumber="1">
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
				Fast forward to today and I’ve had the privilege of studying IT-Security at Ruhr-Universität
				Bochum.
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
