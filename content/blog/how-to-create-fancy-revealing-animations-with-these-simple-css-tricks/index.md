---
title: How to create fancy revealing animations with these simple CSS tricks
date: "2017-08-11T16:12:50.238Z"
description: A life changing approach to CSS transitions.
---

![[TypeScript AST Interactive Viewer](https://ast.carlosroso.com/)](https://miro.medium.com/max/1400/1*ynlLC2peJqckBIOb9qUjSg.gif)*[Animated page transition](https://ast.carlosroso.com/)*

<div class="divider"></div>

I hate clickbait articles as much as you do, this ain’t one of those though. So, let me save you a 10 minute read by just spitting out the tricks right here, right now.
> Define a handful of CSS animations with `@keyframes`, set the element’s initial state (opacity:0, scale(0), etc), set the element’s `animation` CSS property to be one of the animations you just defined, set the animation’s fill-mode to forwards , don’t always use the good old `ease` timing function but instead try some cool `cubic-bezier`. Orchestrate the whole thing via animation-delay . Keep it clean and classy by avoiding wide range movements. Only animate `transform` and `opacity`. Always strive for 60fps.

Easy, huh? This is obviously framework agnostic as the element’s `animation` will trigger once it’s inserted into the DOM or it’s `display` property goes from `none` to visible. This is the normal behavior of any framework’s router so you’ll be good to go regardless of your preferred frontend stack.

Thanks for reading.

<div class="divider"></div>

Wait, it seems you want some more detail, some more meat. That’s cool, I can do that as well. So, in the next couple paragraphs I’ll explain you in more detail how to **easily** achieve the animation shown above.

# Mastering the technique

## Reveal dat header

I’ll explain how the whole animation technique works by going step by step through the process of revealing the header of our sample site. We’ll start by first identifying the three *agents* we want to independently animate:

![](https://cdn-images-1.medium.com/max/3560/1*U62AXNWYlSsFFa9D8aRSdw.png)

We basically have 3 agents which we want to reveal at different times. I have colored in blue the time offset in which each agent should reveal itself. We want Agent 1 and Agent 3 to subtly fade in from the left. For Agent 2, it makes sense to have a cool enlarge animation from left to right just as if the line was flowing from Agent 1 to Agent 3. Let’s start by defining our core CSS animations:

```css{numberLines: true}
@keyframes fade-in-right {
  from {
    opacity: 0;
    transform: translateX(-15px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes grow-left {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}
```

For `fade-in-right` we just define our element’s initial state as *hidden* and moved a **bit** to the left, and our final state will render our element to full opacity and will locate it back to it’s natural position. Look how I go with just 15px of movement range. **Always avoid long range movements; the whole secret lies in small, subtle motion**. The code for `grow-left` is pretty much self explanatory so I really don’t have to go into details. The cool thing here is to see I’m only animating the following two CSS properties: `transform` and `opacity` . You might want to read more about [why you should avoid animating any other property](https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/) if you’re truly committed to high performant, 60fps animations.

Now that we defined our animations, let’s apply them to our agents. Three important things you need to keep in mind before looking at the code:

1. Set the initial state of the element in its default CSS properties

2. Use forwards as the fill mode of the animation so that it preserves its final state

3. Orchestrate revealings via animation-delay

```css{numberLines: true}
.agent-1, .agent-3 {
  opacity: 0;
  animation: fade-in-right ease 0.4s forwards;
}

.agent-2 {
  transform: scaleX(0);
  transform-origin: left;
  animation: grow-left cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.5s forwards;
  animation-delay: 0.4s;
}

.agent-3 {
  animation-delay: 0.8s;
}
```

Look how we defined the initial state for agents 1 and 3 as `opacity: 0` because we want them to be hidden until the fade in transition comes in. Then, we set the animation to be the previously defined `fade-in-right` with the good old `ease` function and `forwards` fill-mode. As we still want Agent 3 to make its entrance to the scene later on, we set an `animation-delay: 0.8s` which basically means that the animation won’t start up until 800 ms have passed since the element was placed on the DOM or was made visible via `display` property. Really easy isn’t it?

Now, for Agent 2 things are a bit different. The initial state is set to `transform: scaleX(0)` otherwise our element will be shown fully enlarged up until the animation kicks in. So, by setting an initial set we’re indicating how the element should render even before the animation is fired. Then we set its `transform-origin: left` property so that the line enlarges from left to right, otherwise its anchor would be the center by default. We then do something similar as with agents 1 and 3 by setting `animation: grow-left`, its fill mode to `forwards` and making sure it makes its great revealing only after 0.4 seconds of being rendered in the DOM. The interesting bit here is the fact that we’re not using the default `ease` function as our animation timing function but instead we define a custom `cubic-bezier` function. This allows us to create more interesting and visually appealing transitions than those that comes by default in the browser. Go ahead and try defining your own `cubic-bezier` with [this fun tool](http://cubic-bezier.com/#.17,.67,.83,.67).

Let’s see the final result:

![](https://cdn-images-1.medium.com/max/3868/1*gi3-Rva6X4KSXUpbOLC67A.gif)

Pretty cool, huh? Look how the `animation-delay` makes a lot of sense now and how agent 1 and 3 both have the same revealing motion. Coming up with the right animation durations and animation delays is a matter of tuning by trial and error so don’t stress to much about it and just have fun playing with it.

## Show me the body now

It really makes no sense to go through the process of animating the rest of the content as the same technique repeats over and over again:

1. Identify agents and revealing timings

2. Create appropriate animations

3. Set initial states to agents

4. Set animations to each agent and orchestrate via proper animation delays

5. Tune the animation by trial and error

6. Profit

## Cool, but, you know, #perfmatters

Yeah, perf matters, and that’s why we strive to run the whole show with just `transform` and `opacity`. These are the only properties that just trigger compositing in the browser rendering process, thus avoiding computing work and therefore resulting in a jank free experience.

Let’s run a perf profiling on our revealing animation:

![](https://cdn-images-1.medium.com/max/2072/1*NNKtB8-vXjV9OYc84kilNg.png)

You go ahead and look at **dat** green bar. This means that 99% of the time we hit 60fps in the whole animation. 60 frames per goddamn second (sorry, I’m just so proud of that). It can’t really be more performant. Please keep in mind that the more elements you animate (known as agents in this article), the more [jank](http://jankfree.org/)y your app will look like even when using the CSS golden props. This is because every animation will inevitably add a bit of GPU workload. So, try pushing to the limit the number of animated elements but always strive to hit the 60fps mark.

## Too much magic
> “I’m really not that creative to come up with fancy animations like these”

Building great animations is not a matter of being technically competent but instead it takes quite a good sense of design and an innate drive to craft good UI interactions. This can be very difficult and only the most talented designers are creative enough to accomplish such feats. However, we mortals are still able to learn by imitating and taking as much inspiration as we can from true pros. For this I recommend you to frequently visit sites like [Awwwards](https://www.awwwards.com/) or [Dribbble](https://dribbble.com/search?q=page+transition) and check ideas on cool page revealing animations.

<div class="divider"></div>

I really hope you got rid of any fear you had regarding revealing animations with this article. It’s not rocket science as you saw but, if done well, it can surely add that ***wow*** factor your app is missing today. So, go ahead a create some cool animations on your site and shoot a tweet at [@caroso1222](https://twitter.com/caroso1222) with whatever you come up with!

Show some love by hitting that heart if you got any inspiration from this article or leave a comment.
