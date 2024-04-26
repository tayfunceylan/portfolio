<script lang="ts">
	import Navbar from './Navbar.svelte';
	import S00_Hi from './S00_Hi.svelte';
	import S01_About from './S01_About.svelte';
	import S02_Jobs from './S02_Jobs.svelte';
	import S03_Projects from './S03_Projects.svelte';
	import S04_Contact from './S04_Contact.svelte';
	import Socials from './Socials.svelte';

	$effect(() => {
		const callback = (
			observerEntries: IntersectionObserverEntry[],
			observer: IntersectionObserver
		) => {
			observerEntries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.remove('opacity-0');
					entry.target.classList.add('animate-slide-in');
					observer.unobserve(entry.target);
				} else {
					entry.target.classList.add('opacity-0');
				}
			});
		};

		const observer: IntersectionObserver = new IntersectionObserver(
			(entries) => callback(entries, observer),
			{
				rootMargin: '-0% 0% -25% 0%'
			}
		);
		const observer_100: IntersectionObserver = new IntersectionObserver(
			(entries) => callback(entries, observer_100),
			{
				rootMargin: '-0% 0% -100px 0%'
			}
		);

		document.querySelectorAll('.observe').forEach((section) => {
			observer.observe(section);
		});
		document.querySelectorAll('.observe-100').forEach((section) => {
			observer_100.observe(section);
		});

		return () => {
			observer.disconnect();
			observer_100.disconnect();
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
