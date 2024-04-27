<script lang="ts">
	import Navbar from './Navbar.svelte';
	import S00_Hi from './S00_Hi.svelte';
	import S01_About from './S01_About.svelte';
	import S02_Jobs from './S02_Jobs.svelte';
	import S03_Projects from './S03_Projects.svelte';
	import S04_Contact from './S04_Contact.svelte';
	import Socials from './Socials.svelte';

	
	$effect(() => {
		const show = (element: Element) => {
			element.classList.remove('opacity-0');
			element.classList.add('animate-slide-in');
		};
		const hide = (element: Element) => {
			element.classList.add('opacity-0');
		};
		
		const observer: IntersectionObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						show(entry.target);
						observer.unobserve(entry.target);
					} else hide(entry.target);
				});
			},
			{
				rootMargin: '-0% 0% -25% 0%'
			}
		);
		const endOfPageObserver = new IntersectionObserver((entries) =>
			entries
				.filter((entry) => entry.isIntersecting)
				.forEach(() => {
					document.querySelectorAll('.observe').forEach((section) => show(section));
				})
		);

		document //
			.querySelectorAll('.observe')
			.forEach((section) => {
				observer.observe(section);
			});
		document //
			.querySelectorAll('.end')
			.forEach((section) => {
				endOfPageObserver.observe(section);
			});

		return () => {
			observer.disconnect();
			endOfPageObserver.disconnect();
		};
	});
</script>

<Navbar />
<S00_Hi />
<S01_About />
<S02_Jobs />
<S03_Projects />
<S04_Contact />
<Socials />
<div class="end h-1" />
