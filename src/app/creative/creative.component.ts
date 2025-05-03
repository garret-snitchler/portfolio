import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from "../project-card/project-card.component";

@Component({
  selector: 'app-creative',
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './creative.component.html',
  styleUrl: './creative.component.css'
})
export class CreativeComponent {
  documents = [
    { id: 'Adrift', description: `This is a stream of consciousness piece about a bitter, lonely old man in a hospital bed. Nothing of incident happens in the "story", but my thoughts drifted towards the idea one day after a medical scare in the family and I thought it might be compelling to write about.`},
    { id: 'Excerpt from History of the Kingdom of Iridell', description: `      This was inspired by George R.R. Martin's "Fire & Blood", which is a fictional historical text about his setting of Westeros. The idea was interesting to me and I wanted to try my own hand at writing fantasy exposition in a way that was interesting. I couldn't help myself and decided to throw in a bit of horror/mystery as well with the island of Chaos.`},
    { id: 'Long Day', description: `This is what I'd describe as the weirdest thing I've written. I wanted to challenge myself and write a short story that doesn't even attempt to look like a story. I feel like saying what's going on ruins the point of this one in particular, but since past review is usually met with 50% of people being confused, I'll just say that it's a time loop.` },
    { id: 'Operation Godspeed', description: `This was the first short story that I wrote. Despite being written when I had little experience, I'm still proud of the ideas that I had and think that things came together nicely enough to be worth sharing. The rough idea was that when you travel into space at a rate faster than the universe can expand, things will get strange. Those familiar with the <a href="https://scp-wiki.wikidot.com/">SCP Wiki</a> will likely notice the inspiration for this one.`},
    { id: 'POLICE REPORT 791', description: `While I'm familiar with epistolary writing (telling a story through letters, diaries, and other documents), I had not personally seen one that used text messaging. This story is the result. The character and motivations behind both Williams and Young are intentionally unclear. I think this is one of the more promising ones that I've written, in terms of having ideas that I could expand into something longer.`},
    { id: 'Rush Hour', description: `I actually did this one for a Software course, specifically as a way of trying to demonstrate the worst possible scenario that a set of software specifications for a train system could create. That being said, I think the vignette is evocative on its own and it does a good job of portraying the sort of nightmarish scenarios that can happen as a result of cutting costs.`},
    { id: 'The Royal Wedding', description: `I wrote this as an attempt to do political intrigue. Political intrigue doesn't work well with short fiction, so this was written with the intention that it would serve as an excerpt from a larger project that I could write at a later date. Because of that the work suffers from there being a little more exposition put into a chapter than there would normally be. Still, I had fun writing it and I think the scene itself is overall enjoyable for those who enjoy political intrigue as much as I do. The other challenging part of this piece is that it's difficult to not pull inspiration from my favorites too heavily while simultaneously not leaning so far away from them that I end up making something uninteresting.`}
  ];
}
