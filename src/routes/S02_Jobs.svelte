<script lang="ts">
	import Section from './Section.svelte';

	const jobs = [
		{
			company: 'ZPP INGENIEURE',
			title: 'Werkstudent IT-Security',
			when: 'April 2022 - today',
			href: 'https://zpp.de/',
			points: [
				'looking for security issues, bugs and unwanted behaviour',
				'implementing security measures',
				'invo-lved in web development',
				'working with Java, Python and Docker',
				'occasionally some cool smaller projects'
			]
		},
		{
			company: 'Opel',
			title: 'Kommissionierer',
			when: 'October - December 2020, September - October 2021',
			href: 'https://opel.de/',
			points: [
				'I was working full time for a month and the rest in part time',
				'I was involved in a lot of different tasks for both Teileeingang and Teileausgang',
				'driving an EZS 350 (Schlepper) - collecting items in cages attached to the vehicle',
				'Nachschübe intern - changing location of items internally',
				'Nachschübe extern - changing location of items to an external area',
				'Greifen - picking items for costumer delivery',
				'Konsolidierung - preparing cages for shipment',
				'Umlagern - manually changing location of items',
				'Einlagern - store items on a transport trolley coming in from a truck'
			]
		},
		{
			company: 'Burger King',
			title: 'Fahrer',
			when: 'January 2019 - April 2020',
			href: 'https://burgerking.de/',
			points: [
				'most of the time I was delivering burgers to costumers homes in a Toyota Aygo',
				'I enjoyed listing to podcasts while driving to the customer',
				'as well as working in the kitchen',
				'making all kinds of burgers'
			]
		},
		{
			company: 'M.S.D.',
			title: 'Zusteller',
			when: '2013 - 2017',
			points: [
				'when I turned 13 I decided to earn some extra money for myself',
				'at first I was working for zusteller-online.de delivering magazines like TV-Movie or Bravo on my bike',
				'later on I saw that I had better opportunities at M.S.D. to develop myself, so i applied to M.S.D.',
				'being outside, enjoying fresh air and hearing music was refreshing'
			]
		}
	];
</script>

<Section title="Where I’ve Worked" id="jobs" sectionNumber="2">
	<div class="relative h-80">
		<div class="scrollbar-none flex overflow-scroll md:flex-col">
			{#each jobs as { company, title, when, href, points }, i}
				<label
					for={company}
					class="h-10 min-w-36 border-b-[1px] border-mint-tulip-500 transition-all duration-700 first:rounded-l
						last:rounded-r odd:bg-mint-tulip-700/5 even:bg-mint-tulip-300/5 has-[:checked]:border-b-4 has-[:checked]:bg-mint-tulip-500/25 md:w-44
						md:first:rounded-l-none md:last:rounded-r-none
					"
				>
					<input type="radio" name="company" id={company} class="peer hidden" checked={i === 0} />
					<div
						class="text-nowrap p-2 text-center font-mono text-sm transition peer-checked:text-mint-tulip-500"
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
										{point}
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
