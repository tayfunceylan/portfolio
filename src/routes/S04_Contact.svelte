<script lang="ts">
	import { contact } from '$lib/config';
	import Section from './Section.svelte';
</script>

<Section title={contact.section_title} id={contact.section_id} sectionNumber="4">
	{#each contact.paragraphs as paragraph}
		<p>{@html paragraph}</p>
	{/each}
	<a
		target="_blank"
		href={contact.button.href}
		class="mx-auto mt-2 w-fit rounded-md border-2 border-mint-tulip-500 p-4 font-mono text-mint-tulip-500/80 transition-colors duration-500 hover:bg-mint-tulip-500/20 hover:text-mint-tulip-400"
	>
		{contact.button.text}
	</a>
	<slot></slot>
</Section>
