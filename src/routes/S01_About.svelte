<script lang="ts">
	import { about } from '$lib/config';
	import Section from './Section.svelte';
</script>

<Section title={about.section_title} id={about.section_id} sectionNumber="1">
	<div class="grid grid-cols-1 gap-7 md:grid-cols-2">
		<div class="space-y-6">
			{#each about.paragraphs as paragraph}
				<p>{@html paragraph}</p>
			{/each}

			<ul class="my-5 grid grid-cols-2 gap-2">
				{#each about.skills as item}
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
