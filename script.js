var tl = gsap.timeline();
tl.from("#nav img,#nav h4,#nav button", {
    y: -100,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    stagger: 0.2
})

tl.from("#main h1", {
    y: 100,
    opacity: 0,
    stagger: 0.2
})

tl.from("#main>img", {
    opacity: 0,
    scale: 0,
    duration: 0.7
})

tl.from("h5", {
    scale: 0,
    opacity: 0
})

tl.to("h5", {
    y: 40,
    repeat: -1,
    duration: 0.7,
    yoyo: true
})