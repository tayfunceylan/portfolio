<script lang="ts">
	import Section from './Section.svelte';

	const projects = [
		{
			title: 'Vertretungsplan',
			points: [
				'Personalisierte Vertretungsplanberichte.',
				'Ein Service für den Vertretungsplan der GES Bochum.'
			],
			tools: ['VS-Code', 'Python', 'Cron', 'Telegram-Bot-API'],
			href: 'https://github.com/tayfunceylan/vertretungsplan'
		},
		{
			title: 'Pet Feeder',
			points: ['Eine App um das Füttern von Haustieren zu tracken und vieles mehr.'],
			tools: ['VS-Code', 'Nuxt', 'Vue', 'Python', 'Django Rest Framework'],
			href: 'https://github.com/tayfunceylan/pet-feeder'
		},
		{
			title: 'ÖPNV FahrplanBot',
			points: [
				'A telegram bot for showing departure monitors for public transport. \
				View departure times for your stops including delays. \
				Create line filter to only show the lines you need. \
				You can also choose a direction. Refresh the message at any time.'
			],
			tools: ['VS-Code', 'Python', 'Insomnia', 'Docker', 'Telegram-Bot-API'],
			href: 'https://github.com/tayfunceylan/FahrplanBot'
		}
	];
</script>

<Section title="What I’ve Built" id="projects" sectionNumber="3">
	<div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
		{#each projects as { title, points, tools, href }}
			<div class="relative flex rounded bg-white/5 before:block before:pt-[100%]">
				<div class="flex flex-col justify-between gap-6 p-[7%]">
					<div
						class="text-2xl font-bold text-slate-300 transition-all duration-500 hover:text-mint-tulip-400"
					>
						{title}
					</div>
					{#each points as point}
						<p class="truncate text-wrap">{point}</p>
					{/each}
					<div class="flex flex-wrap gap-2 text-sm leading-none">
						{#each tools as tool}
							<div class="transition-all duration-500 hover:text-mint-tulip-400">{tool}</div>
						{/each}
					</div>
					<a {href} target="_blank" class="size-7" aria-label="GitHub"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="transition duration-500 hover:stroke-mint-tulip-500"
						>
							<title>GitHub</title>
							<path
								d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
							></path>
						</svg>
					</a>
				</div>
			</div>
		{/each}
	</div>
</Section>
