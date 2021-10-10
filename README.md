<html>
<h1 align="center">
A website simulating the relations between predator and prey
</h1>

<p align="center">
<a align="center" href="https://predatorandprey.vercel.app/">Visit Website</a>
 </p>
<p align="center">
<img src="https://user-images.githubusercontent.com/70843626/132389170-fb2514bd-04ca-4bfc-a80f-c0ec745c4c81.png" width=500/>
 </p>

<p align="center"> 
Within the topic ecology in my biology class our teacher had prepared a game for one of the lessons. We were given a sheet of rules and about 200 matches. The game was supposed to
					simulate the relations between the population of prey and the population of predators. But really? Using matches? It would take hours to even get a feeling whether the algorithm
					our teacher gave us was any good (Spoiler, the algorithm is flawed). So i decided to write a program and visualize the graph on a website.</p>
			<div class="page-body">
				<p id="64de29a1-115b-4cf2-9c37-6e102eed9005" class=""></p>
				<h2 id="5c01db26-b258-4d47-97bc-a0f9f6b8834a" class="">The algorithm</h2>
				<p id="85f511a6-3a9c-4927-a97a-2a67e06877af" class="">
					Two pairs are picked. If the pair contains two prey, there is a 50% chance they will breed. If the pair consists of 2 predators, they both die. If the pair consists of a prey and a
					predator, there is a 50% chance the predator kills they prey and gets a child, if the prey escapes they both survive.
				</p>
				<p id="66bbb80a-70b4-484d-8833-c101b6982e80" class=""></p>
				<h2 id="aedfabf3-1c15-4c5e-a210-95a1470c43fb" class="">The features</h2>
				<ul id="3c3f7689-5211-4e52-b801-86464ab9ba59" class="bulleted-list">
					<li style="list-style-type: disc">Simulating the population of predator and prey in relation with one another</li>
				</ul>
				<ul id="86e36005-fb41-4a3b-bb39-3242c6640638" class="bulleted-list">
					<li style="list-style-type: disc">Visualizing the values in a graph</li>
				</ul>
				<h2 id="dcbe8f21-c5e5-4a34-aef2-6b30b93add11" class="">The challenges</h2>
				<ul id="3ed3c727-752b-4117-853f-3815d7ccfcd5" class="bulleted-list">
					<li style="list-style-type: disc">
						At first i randomly chose predator and prey with a 50% chance, therfore there often was an uneven amount of predators and prey. I fixed this by creating two arrays of length
						500, one for predators and one for prey and then randomly picking and removing an item from the array.
					</li>
				</ul>
				<ul id="6f70ca02-f33b-42af-95d7-629d6bfdf008" class="bulleted-list">
					<li style="list-style-type: disc">
						Finding a the right starting population. The amount our teacher gave us was 20, but since the algorithm is flawed both populations were 0 after about 10-20 rounds.
					</li>
				</ul>
				<p id="2551d9e0-afa2-4c7b-87a3-3725e303e761" class=""></p>
				<h2 id="a15d8bbf-0619-45ee-9e2f-9c0ba8eac998" class="">The critics</h2>
				<ul id="47e546cb-9a05-4ca4-b900-457455dc4899" class="bulleted-list">
					<li style="list-style-type: disc">
						The algorithm is flawed. The population should vary periodically which means that the average population should stay the same over time. In this case however the average
						population varies extremly. I.e it goes from an average of 350 prey to an average of 50 and then escalates to a 1000 average. Something the algorithm is able to do fairly well,
						is showing that the change in population is delayed in relation to the population of prey.
					</li>
				</ul>
				<p id="6d72c8ef-1277-47a3-80d6-fb33a10596fc" class=""></p>
				<p id="e2f36bf5-d438-4b90-947e-b2e72882b024" class=""></p>
			</div>
		</article>
	</body>
</html>
