<script>
	import { socials } from '$lib/config';
	import Github from '$lib/svg/Github.svelte';
	import Xing from '$lib/svg/Xing.svelte';
</script>

<div class="observe mx-auto mb-14 w-fit">
	<div class="mb-2 flex h-6 justify-evenly md:pointer-events-none md:opacity-0">
		<Github href={socials.github} />
		<Xing href={socials.xing} />
	</div>
	<a
		href={`https://github.com/tayfunceylan`}
		class="text-center font-mono text-xs transition duration-500 hover:text-mint-tulip-500"
		target="_blank"
	>
		Built by Tayfun Ceylan
	</a>
</div>

<div class="hidden md:block">
	<div
		class="fixed bottom-0 left-6 flex w-6 animate-slide-left flex-col items-center justify-evenly gap-5 xl:left-14"
	>
		<Github href={socials.github} class="transition hover:-translate-y-1" />
		<Xing href={socials.xing} class="transition hover:-translate-y-1" />
		<div class="mx-auto h-24 w-1 rounded bg-slate-500"></div>
	</div>
	<div
		class="fixed bottom-0 right-6 flex animate-slide-right flex-col items-center justify-evenly gap-5 xl:right-14"
	>
		<div class="inline-block font-mono [writing-mode:vertical-lr]">{socials.text_on_right}</div>
		<div class="mx-auto h-24 w-1 rounded bg-slate-500"></div>
	</div>
</div>
