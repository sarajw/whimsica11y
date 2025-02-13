---
title: Disability
layout: whimsica11yLayout.html
---

# Disability
There are so many types and severities of disability. Lots of us have some level of disability, and we all have access to our wonderful web!

Having some idea of these disabilities and the assistive tech or browser features that we use, will help you in making your site more accessible to all of us.

<video id="the-greatest" width="100%" preload="metadata" src="https://www.apple.com/105/media/us/home/2022/327f74a7-aa03-49c4-9876-e3c658b20fd8/films/accessibility-the-greatest/home-accessibility-the-greatest-tpl-us-2022_16x9.m3u8" poster="/assets/images/the-greatest-poster.jpg" controls></video>
<script type="module" defer>
	const video = document.getElementById("the-greatest");
	if (!video.canPlayType("application/vnd.apple.mpegurl")) {
		await import("/assets/scripts/hls.light.min.js");
		const hls = new Hls({ autoStartLoad: false });
		// Default to English Audio Description audio with English captions
		hls.setAudioOption({ name: "English Audio Descriptions" });
		hls.setSubtitleOption({ name: "English" });
		hls.loadSource(video.src);
		hls.attachMedia(video);
	} else {
		video.addEventListener("canplay", () => {
			// Default to English Audio Description audio with English captions
			video.audioTracks[0].enabled = false;
			video.audioTracks[1].enabled = true;
			video.textTracks[0].enabled = true;
		}, { once: true });
	}
</script>

<a href="https://www.w3.org/TR/WCAG22/">The Web Content Accessibility Guidelines (WCAG) 2.2</a> say:
> <q>Following these guidelines will make content more accessible to a wider range of people with disabilities, including accommodations for **blindness** and **low vision**, **deafness** and **hearing loss**, **limited movement**, **speech disabilities**, **photosensitivity**, and combinations of these, and some accommodation for **learning disabilities** and **cognitive limitations**; but will not address every user need for people with these disabilities.</q>

Yes, it's imperfect (aren't we all), but achievable! In order to understand better how we can include people with disabilities, it may help to know the different ways in which we use the web.

## Adaptive strategies

By changing built-in settings and features of a device's operating system or browser, a user can make the web more readable and usable.

These strategies include the use of:
- **Zooming** - in order to see more detail in an image or more easily tap or click on a small target on the page.
- **Text size** - increasing only the text size for readability.
- **Light or dark modes** - depending on visual impairment or migraine triggers, one of these is often better.
- **Contrast** - using a specific contrast mode or forced colors to aid vision.
- **Autocomplete, autofill, predictive text** - not every user has a full keyboard, or can use it easily.
- **Keyboard navigation** - using a keyboard only, to move around the screen or website and jump between controls.

## Assistive technologies

This term is usually used to mean hardware and software created specifically to aid interaction with a computer or other device.

Examples of these include:
- **Screen readers** - software that reads out the contents and interactive elements that are on the screen or virtual screen.
- **Voice recognition** - for typing and commands.
- **Eye tracker** - for pointing and clicking, or drawing.
- **Switches** - often used with an interface that cycles through options or keyboard key groups - made more powerful with autocomplete and predictive text. Switches can be triggered by large buttons, sip/puff inputs, or many other kinds of sensor.


## Further reading
- <a href="https://www.w3.org/WAI/people/">Accessibility: It’s About People</a>
- [Assistive Technology in Action](https://youtube.com/playlist?list=PLMe9zDtTPTVe62Gb6b9Dkk_IPBUTGQHoD) (a YouTube playlist)
