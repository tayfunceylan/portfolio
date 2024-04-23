<script lang="ts">
	import Navbar from './Navbar.svelte';
	import S00_Hi from './S00_Hi.svelte';
	import S01_About from './S01_About.svelte';
	import S02_Jobs from './S02_Jobs.svelte';
	import S03_Projects from './S03_Projects.svelte';
	import S04_Contact from './S04_Contact.svelte';
	import Socials from './Socials.svelte';

	$effect(() => {
		const sections = document.querySelectorAll('.observe');
		const observers: IntersectionObserver[] = [];
		sections.forEach((section) => {
			const observer = new IntersectionObserver(
				(observerEntries) => {
					observerEntries.forEach((entry) => {
						if (entry.isIntersecting) {
							section.classList.remove('opacity-0');
							section.classList.add('animate-slide-in');
							observer.disconnect();
						} else {
							section.classList.add('opacity-0');
						}
					});
				},
				{
					threshold: 0.25
				}
			);
			observer.observe(section);
			observers.push(observer);
		});

		return () => {
			observers.forEach((observer) => observer.disconnect());
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
