<script lang="ts">
	import Logo from '$lib/svg/Logo.svelte';

	let open = false;
	const toggle = () => (open = !open);
	const sections = ['About', 'Jobs', 'Projects', 'Contact'];
</script>

<nav
	class="fixed left-1/2 top-0 z-10 flex w-full max-w-screen-lg -translate-x-1/2 items-center justify-between bg-blue-zodiac-800/85 px-7 py-4  shadow-xl shadow-blue-zodiac-800 backdrop-blur-md transition-all duration-1000 md:px-9"
>
	<a href="/" class="text-4xl font-semibold text-mint-tulip-500">T</a>
	<label class="peer relative size-10 text-mint-tulip-500 md:hidden">
		<div class="absolute left-3/4 top-1/2">
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
						peer-checked:translate-y-4
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
			<div
				class="group pointer-events-none fixed left-0 top-0 flex h-screen translate-x-[0vw] flex-nowrap transition duration-1000 peer-checked:-translate-x-[100vw]"
			>
				<button
					class="pointer-events-auto h-full w-[125vw] scale-0 opacity-0 backdrop-blur-sm transition-opacity duration-1000
						peer-checked:group-[]:scale-100
						peer-checked:group-[]:opacity-100
					"
					onclick={toggle}
				/>
				<div
					class="pointer-events-none flex h-full w-[75vw] flex-col items-center justify-center bg-blue-zodiac-700 ease-out"
				>
					{#each sections as section, i}
						<a
							href="#{section.toLowerCase()}"
							class="group/section pointer-events-auto space-y-0.5 py-4"
							onclick={toggle}
						>
							<div class="text-center font-mono text-lg text-mint-tulip-500">
								{(i + 1).toString().padStart(2, '0')}.
							</div>
							<div
								class="text-center font-mono text-lg text-slate-400 transition duration-300 group-hover/section:text-mint-tulip-500"
							>
								{section}
							</div>
						</a>
					{/each}
				</div>
			</div>
		</div>
	</label>
	<div class="hidden md:flex">
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
</nav>
