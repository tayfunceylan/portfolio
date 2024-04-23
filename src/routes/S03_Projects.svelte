<script lang="ts">
	import Github from '$lib/svg/Github.svelte';
	import Section from './Section.svelte';

	const projects = [
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
				'A telegram bot for showing departure monitors for public transport. \
				View departure times for your stops including delays. \
				Create line filter to only show the lines you need. \
				You can also choose a direction. Refresh the message at any time.'
			],
			tools: ['Python', 'Insomnia', 'Docker', 'Telegram-Bot-API'],
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
					<div class="size-7">
						<Github {href} />
					</div>
				</div>
			</div>
		{/each}
	</div>
</Section>
