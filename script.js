function animate() {
    gsap.from("#footer h1", {
        delay: 0.5,
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        onStart: function() {
            $('#footer h1').textillate({ 
                in: { 
                    effect: 'fadeIn',
                    delay: 0.1
                } 
            });
        }
    });
}
function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
        multiplier: 1,
        class: 'is-revealed'
    });

    // Sync ScrollTrigger with Locomotive Scroll
    locoScroll.on("scroll", ScrollTrigger.update);

    // Tell ScrollTrigger to use these proxy methods
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // Refresh ScrollTrigger when window updates
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // Initial refresh
    ScrollTrigger.refresh();
}
function loadingAnimation() {
    const t1 = gsap.timeline();
    
    // Animate loader text
    t1.from(".line h1", {
        y: 150,
        stagger: 0.25,
        duration: 0.6,
        delay: 0.5,
        ease: "power2.out"
    });
    
    t1.from("#line1-part1, .line h2", {
        opacity: 0,
        onStart: function() {
            const h5timer = document.querySelector("#line1-part1 h5");
            let grow = 0;
            const counter = setInterval(function() {
                if (grow < 100) {
                    h5timer.innerHTML = grow++;
                } else {
                    h5timer.innerHTML = grow;
                    clearInterval(counter);
                }
            }, 33);
        },
    });
    
    t1.to('.line h2', {
        animationName: "loaderanime",
        opacity: 1
    });
    
    t1.to("#loader", {
        opacity: 0,
        duration: 0.4,
        delay: 4
    });
    
    t1.from("#page1", {
        delay: 0.2,
        y: 1600,
        opacity: 0.6,
        duration: 0.5,
        ease: "power4.out"
    });
    
    t1.to("#loader", {
        display: "none",
    });
    
    t1.from("#nav", {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    });
    
    t1.from(".hero h1", {
        y: 140,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out"
    });
    
    t1.from("#hero1, #page2", {
        opacity: 0,
        duration: 0.6
    }, "-=0.4");
}

function crsrAnimation() {
    // Initialize mouse follower
    Shery.mouseFollower({
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });
    
    // Make navigation magnetic
    Shery.makeMagnet("#nav-part2", {});
    
    const videoContainer = document.querySelector("#video-container");
    const video = document.querySelector("#video-container video");
    const videoCursor = document.querySelector("#video-cursor");
    let isPlaying = false;

    // Video hover effects
    videoContainer.addEventListener("mouseenter", function() {
        videoContainer.addEventListener("mousemove", function(dets) {
            gsap.to(".mousefollower", {
                opacity: 0,
                duration: 0.3
            });
            gsap.to("#video-cursor", {
                left: dets.x - 570,
                y: dets.y - 300,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
    
    videoContainer.addEventListener("mouseleave", function() {
        gsap.to(".mousefollower", {
            opacity: 1,
            duration: 0.3
        });
        gsap.to("#video-cursor", {
            left: "70%",
            top: "-15%",
            duration: 0.3,
            ease: "power2.out"
        });
    });

    // Video play/pause functionality
    videoContainer.addEventListener("click", function() {
        if (!isPlaying) {
            video.play();
            video.style.opacity = 1;
            videoCursor.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
            gsap.to("#video-cursor", {
                scale: 0.5,
                duration: 0.3,
                ease: "power2.out"
            });
            isPlaying = true;
        } else {
            video.pause();
            video.style.opacity = 0;
            videoCursor.innerHTML = `<i class="ri-play-mini-fill"></i>`;
            gsap.to("#video-cursor", {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
            isPlaying = false;
        }
    });
}
function sheryAnimation() {
    Shery.imageEffect(".image-div", {
        style: 5,
        config: {
            "a": {"value": 2, "range": [0, 30]},
            "b": {"value": 0.75, "range": [-1, 1]},
            "zindex": {"value": -9996999, "range": [-9999999, 9999999]},
            "aspect": {"value": 0.7272863482243849},
            "ignoreShapeAspect": {"value": true},
            "shapePosition": {"value": {"x": 0, "y": 0}},
            "shapeScale": {"value": {"x": 0.5, "y": 0.5}},
            "shapeEdgeSoftness": {"value": 0, "range": [0, 0.5]},
            "shapeRadius": {"value": 0, "range": [0, 2]},
            "currentScroll": {"value": 0},
            "scrollLerp": {"value": 0.07},
            "gooey": {"value": true},
            "infiniteGooey": {"value": false},
            "growSize": {"value": 4, "range": [1, 15]},
            "durationOut": {"value": 1, "range": [0.1, 5]},
            "durationIn": {"value": 1.5, "range": [0.1, 5]},
            "displaceAmount": {"value": 0.5},
            "masker": {"value": false},
            "maskVal": {"value": 1.18, "range": [1, 5]},
            "scrollType": {"value": 0},
            "geoVertex": {"range": [1, 64], "value": 1},
            "noEffectGooey": {"value": true},
            "onMouse": {"value": 0},
            "noise_speed": {"value": 0.53, "range": [0, 10]},
            "metaball": {"value": 0.37, "range": [0, 2]},
            "discard_threshold": {"value": 0.5, "range": [0, 1]},
            "antialias_threshold": {"value": 0, "range": [0, 0.1]},
            "noise_height": {"value": 0.37, "range": [0, 2]},
            "noise_scale": {"value": 10, "range": [0, 100]}
        },
        gooey: true,
    });
}
function flagAnimation() {
    const flag = document.querySelector("#flag");
    const hero3 = document.querySelector("#hero3");
    
    // Throttle mousemove for better performance
    let ticking = false;
    
    function updateFlagPosition(dets) {
        if (!ticking) {
            requestAnimationFrame(() => {
                gsap.to(flag, {
                    x: dets.x,
                    y: dets.y,
                    duration: 0.3,
                    ease: "power2.out"
                });
                ticking = false;
            });
            ticking = true;
        }
    }
    
    document.addEventListener("mousemove", updateFlagPosition);
    
    hero3.addEventListener("mouseenter", function() {
        gsap.to(flag, {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out"
        });
    });
    
    hero3.addEventListener("mouseleave", function() {
        gsap.to(flag, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.out"
        });
    });
}
// Initialize all animations after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations in order of priority
    loadingAnimation();
    locomotive();
    crsrAnimation();
    sheryAnimation();
    flagAnimation();
    animate();
});

// Add performance optimizations
window.addEventListener('load', function() {
    // Preload critical images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (img.src) {
            const preloadImg = new Image();
            preloadImg.src = img.src;
        }
    });
});
