<script lang="ts">
	import { getSectionCounter } from './counter';
	export let title: string;
    export let id: string;
</script>

<div class="flex min-h-screen flex-col gap-4 py-24" {id}>
	<div class="flex items-center gap-3 text-nowrap font-mono">
		<div class="h-0.5 w-full bg-slate-500"></div>
		<span class="text-lg text-mint-tulip-500">{getSectionCounter()}</span>
		<span class="text-xl font-semibold text-slate-300">{title}</span>
		<div class="h-0.5 w-full bg-slate-500"></div>
	</div>
	<slot />
</div>
