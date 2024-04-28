<script lang="ts">
	import { jobs } from '$lib/config';
	import Section from './Section.svelte';

	let isDown = false;
	let container: Element;
	const onmousedown = () => (isDown = true);
	const onmouseup = () => (isDown = false);
	const onmouseleave = () => (isDown = false);
	const onmousemove = (e: MouseEvent) => {
		if (!isDown) return;
		container.scrollLeft -= e.movementX;
	};
</script>

<Section title={jobs.section_title} id={jobs.section_id} sectionNumber="2">
	<div class="relative min-h-[32rem] sm:min-h-96 lg:min-h-80">
		<div
			class="scrollbar-none flex overflow-scroll md:flex-col"
			ontouchmove={(e) => e.stopPropagation()}
			aria-hidden
			bind:this={container}
			{onmousedown}
			{onmousemove}
			{onmouseup}
			{onmouseleave}
		>
			{#each jobs.list as { company, title, when, href, points }, i}
				<label
					for={company}
					class="h-10 min-w-36 border-b-[1px] border-mint-tulip-500 transition-all duration-700 first:rounded-l
						last:rounded-r odd:bg-mint-tulip-700/5 even:bg-mint-tulip-300/5 has-[:checked]:border-b-4 has-[:checked]:bg-mint-tulip-500/25 md:w-44
						md:border-b-0 md:!bg-inherit md:first:rounded-l-none md:has-[:checked]:border-b-0 md:has-[:checked]:border-l-8 md:has-[:checked]:!bg-mint-tulip-500/25
					"
				>
					<input type="radio" name="company" id={company} class="peer hidden" checked={i === 0} />
					<div
						class="mt-[1px] text-nowrap p-2 text-center font-mono text-sm transition peer-checked:text-mint-tulip-500 md:text-left"
					>
						{company}
					</div>
					<div
						class="pointer-events-none absolute left-0 translate-y-1/4 space-y-2 text-wrap py-5 text-left font-sans opacity-0 transition-all duration-1000
							ease-in-out peer-checked:translate-y-0 peer-checked:opacity-100 md:left-52 md:top-0 md:py-0
						"
					>
						<div>
							<div class="flex flex-wrap items-center space-x-1 text-lg">
								<div class="font-semibold leading-tight">
									<span class="text-slate-300">{title}</span>
									<a
										{href}
										class="pointer-events-auto text-nowrap text-mint-tulip-500"
										target="_blank">@{company}</a
									>
								</div>
							</div>
							<div class="py-1 text-sm">{when}</div>
						</div>
						<div class="space-y-1">
							{#each points as point}
								<div class="flex gap-2">
									<div class=" my-auto text-mint-tulip-500">▹</div>
									<div>
										{@html point}
									</div>
								</div>
							{/each}
						</div>
					</div>
				</label>
			{/each}
		</div>
	</div>
</Section>
