<script lang="ts">
	import { projects } from '$lib/config';
	import Github from '$lib/svg/Github.svelte';
	import Section from './Section.svelte';
</script>

<Section title={projects.section_title} id={projects.section_id} sectionNumber="3">
	<div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
		{#each projects.list as { title, points, tools, href }}
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
