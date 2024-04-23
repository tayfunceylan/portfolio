<script lang="ts">
	import Section from './Section.svelte';
	let xing = 'https://www.xing.com/profile/Tayfun_Ceylan3';
</script>

<Section title="Get In Touch" id="contact" sectionNumber="4">
	<p class="text-center">
		Although I’m not currently looking for any new opportunities, my inbox is always open. Whether
		you have a question or just want to say hi, I’ll try my best to get back to you!
	</p>
	<a
		target="_blank"
		href={xing}
		class="mx-auto mt-2 w-fit rounded-md border-2 border-mint-tulip-500 p-4 font-mono text-mint-tulip-500/80 transition-colors duration-500 hover:bg-mint-tulip-500/20 hover:text-mint-tulip-400"
	>
		Say Hello
	</a>
	<slot></slot>
</Section>
