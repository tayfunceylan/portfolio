<script lang="ts">
	import Logo from '$lib/svg/Logo.svelte';

	let open = true;
	const toggle = () => (open = !open);
	const sections = ['About', 'Jobs', 'Projects', 'Contact'];
</script>

<nav class="h-16">
	<div class="mx-auto flex justify-between">
		<a href="/" class="text-2xl font-semibold text-mint-tulip-500">T</a>
		<label class="peer relative size-10 text-mint-tulip-500 md:hidden">
			<div class="absolute left-1/2 top-1/2">
				<input type="checkbox" class="peer hidden" bind:checked={open} />
				<span
					class="absolute z-20 h-1 w-7 -translate-x-[calc(50%+7px)] -translate-y-[calc(50%+10px)] scale-x-150 bg-current transition duration-500 ease-in
						peer-checked:-translate-x-1/2 peer-checked:-translate-y-1/2
						peer-checked:rotate-[405deg]
						peer-checked:scale-100
					"
				></span>
				<span
					class="absolute z-20 h-1 w-7 -translate-x-1/2 -translate-y-1/2 bg-current transition duration-500 ease-in
						peer-checked:opacity-0
					"
				></span>
				<span
					class="absolute z-20 h-1 w-7 -translate-x-[calc(50%-7px)] -translate-y-[calc(50%-10px)] scale-x-50 bg-current transition duration-500 ease-in
						peer-checked:-translate-x-1/2 peer-checked:-translate-y-1/2
						peer-checked:rotate-[315deg]
						peer-checked:scale-100
					"
				></span>
			</div>
		</label>
		<div
			class="fixed left-0 top-0 h-screen w-screen peer-has-[:checked]:backdrop-blur-sm
		"
		></div>
		<div
			class="pointer-events-none fixed right-0 top-0 flex h-full w-9/12 max-w-96 translate-x-96 flex-col items-center justify-center bg-blue-zodiac-700 pt-16 backdrop-blur-sm transition duration-500
				ease-out peer-has-[:checked]:translate-x-0 peer-has-[:checked]:bg-blue-zodiac-700/50 md:!translate-x-96
			"
		>
			{#each sections as section, i}
				<a
					href="#{section.toLowerCase()}"
					class="group pointer-events-auto space-y-0.5 py-4"
					onclick={toggle}
				>
					<div class="text-center font-mono text-lg text-mint-tulip-500">
						{(i + 1).toString().padStart(2, '0')}.
					</div>
					<div
						class="text-center font-mono text-lg text-slate-400 transition duration-300 group-hover:text-mint-tulip-500"
					>
						{section}
					</div>
				</a>
			{/each}
		</div>
		<div class="hidden w-full md:flex md:w-auto">
			{#each sections as section, i}
				<a
					href="#{section.toLowerCase()}"
					class="group pointer-events-auto flex items-center space-x-1 px-3"
					onclick={toggle}
				>
					<div class="text-center font-mono text-sm text-mint-tulip-500">
						{(i + 1).toString().padStart(2, '0')}.
					</div>
					<div
						class="text-center font-mono text-sm text-slate-300 transition duration-300 group-hover:text-mint-tulip-500"
					>
						{section}
					</div>
				</a>
			{/each}
		</div>
	</div>
</nav>
