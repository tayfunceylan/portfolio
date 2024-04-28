<script lang="ts">
	import { hi } from "$lib/config";
</script>

<div
	class="flex min-h-screen flex-col justify-center gap-4 py-24 transition-all duration-1000 md:gap-6"
>
	<p
		class="max-w-max animate-typing overflow-hidden whitespace-nowrap border-r-2 font-mono text-lg text-mint-tulip-500 transition-all sm:text-xl md:text-2xl"
	>
		{hi.greeting}
	</p>
	<p
		class="animate-slide-in-1 text-4xl font-bold text-slate-300 transition-all duration-1000 sm:text-5xl md:text-7xl"
	>
		{hi.name}.
	</p>
	<p
		class="animate-slide-in-2 text-4xl font-bold text-slate-400 transition-all duration-1000 sm:text-5xl md:text-7xl"
	>
		{hi.what_do_i_do}
	</p>
	<p class="max-w-lg animate-slide-in-3">
		{hi.who_am_i}
	</p>
	<a
		target="_blank"
		href={hi.button.href}
		class="mt-7 animate-slide-in-4 rounded-md border-2 border-mint-tulip-500 p-4 text-center font-mono text-mint-tulip-500/80 transition-colors duration-500 hover:bg-mint-tulip-500/20 hover:text-mint-tulip-400"
	>
		{hi.button.text}
	</a>
</div>
