/**
 * Object containing all of the questions.
 */

const questions = [
    {
        question: "The semester is winding to a close and you’re talking with your advisor to prepare for one of the most dreaded times of the year for college students: course selection.",
        responses: {
            heart: "It’s alright- I’m ready for this.", 
            brain: "I’ll just take what my advisor tells me to.",
            lungs: "I have no idea what I’m gonna do.",
            stomach: "Course selection is happening when?"
        }
    },
    {
        question: "You’re in the second round of registration for your class year, meaning there’s a solid chance the classes you want to take will fill up by the time you can sign up for them.",
        responses: {
            heart: "Oh no.", 
            brain: "Oh shit.",
            lungs: "Oh well.",
            stomach: "Oh, yeah!",
        }
    },
    {
        question: "Sure enough, when you load up the course registration page to see what’s still available before your assigned time slot one of your top choices is completely full.",
        responses: {
            heart: "This is horrible! What do I do now?", 
            brain: "I’ve arranged a list of possible alternatives for this situation.",
            lungs: "Well, I guess I just won’t graduate now.",
            stomach: "I’ll put myself on the waitlist and see what happens.",
        }
    },
    {
        question: " Luckily, there are still seats in other classes you want to take, but you notice right then that a class you really want to take with your favorite professor is at the same time as one of your major’s requirements.",
        responses: {
            heart: "It’s really tearing me up inside, but I’ll do what I have to and begrudgingly take the required course.", 
            brain: "Of course I’m taking the required class, I’ll get other chances to take another class with that professor.",
            lungs: "I have to choose the required class- I can get through one un-fun semester for the sake of checking a box on my graduation list.",
            stomach: "I’ll flip a coin aaaaaand- I guess I’m taking the required one.",
        }
    },
    {
        question: "You snatch up the rest of the courses you want and realize you just missed dinner.",
        responses: {
            heart: "I can make a quick run to a nearby McDonalds. It’s been a week since I last had to do that.", 
            brain: "I’ll get a group of friends together to split the costs of a nice delivery meal. ",
            lungs: "I didn’t need dinner anyways- a quick snack should get me to breakfast.",
            stomach: "I flex my cooking skills: instant ramen lovingly prepared in the microwave.",
        }
    },
    {
        question: "While you’re munching on your food, you glance over your course registration page one last time. Wait a moment. You’ve accidentally signed yourself up for a course overload!",
        responses: {
            heart: "I scramble to unregister from whichever course I need the least! I feel bad for anyone who’s seat in the course I’ve taken accidentally. ", 
            brain: "I stop to consider this- maybe I can take extra credits next semester and get ahead on requirements.",
            lungs: "I absolutely cannot handle a course overload next semester. If I overextend myself I’ll fail everything!",
            stomach: "I glance back at the course list and decide that surely it’ll be fine. I work well under pressure anyway.",
        }
    },
    {
        question: "Course registration is done and your food situation has been resolved! It’s time to get back to homework. You should probably move somewhere to work productively.",
        responses: {
            heart: "I’ll go to the library and find a quiet room to study.", 
            brain: "I’m going to find a work room with a white board and a desk to spread out.",
            lungs: "I’ll hang out in my dorm and hope my roommate isn’t around to distract me.",
            stomach: "I’ll go hang out at a table in the campus center, maybe I’ll run into some classmates to co-work with.",
        }
    },
    {
        question: "While you're grinding away, someone sits down next to you with a tearful huff. It’s your friend, and they explain that a class they wanted is being offered for the last time ever because the professor is retiring, but it conflicts with a course that would look good for their major.",
        responses: {
            heart: "Would they regret not taking this course? Yes? Then take it over the major requirement.", 
            brain: "Required courses will always exist, they can take that one later.",
            lungs: "If they are going to be a lot happier taking the course they want they should go for it.",
            stomach: "That course will never be offered again- that’s a sign to take it now.",
        }
    },
    {
        question: "Your friend thanks you for the advice and goes on their way, leaving you staring at the work in front of you. You reopen the registration portal. Did you ignore your own advice choosing a course you wanted to take instead of a required one you could take at a different time?",
        responses: {
            heart: "Maybe I should reconsider what courses I’m taking. Will I really be happy and productive with my current course load?", 
            brain: "Clearly the circumstances are different- the class I wanted to take will be offered again for me to take. Right?",
            lungs: "What’s done is done- even if I regret it later I should just take the classes I’ve signed up for.",
            stomach: "I could change my classes, or maybe I won’t. I should decide after a good night’s rest.",
        }
    },
    {
        question: "After your encounter with your friend, you’re too tuckered to continue working for the night, and you decide to quickly review how much you really got done before completely checking out.",
        responses: {
            heart: "I didn’t complete as much as I expected to get done- looks like I’ll have to wake up early.", 
            brain: "I completed a solid amount of my work and am in a great place for the rest of the week!",
            lungs: "I finished more than I expected to- that should give me time this week to work on some of my upcoming projects early.",
            stomach: "I  got a bit distracted and am at pretty much the same point as before. I’ll have a more focused night later in the week.",
        }
    },
    {
        question: "You change into comfy clothes then reconsider going directly to bed. Maybe you do have some energy to do a little something before sleeping.",
        responses: {
            heart: "I’ll stop by some lounges and see who’s around to hang out for a little while.", 
            brain: "Today was a bit draining- I want to get a lot of sleep before my classes tomorrow. I’ll go to bed early after all.",
            lungs: "I might as well push through a bit of tired-ness and get some work done on my personal projects.",
            stomach: "Another task checked off the list- I want to relax a bit with some video games!",
        }
    },
    {
        question: "As you lay in bed- thoughts about the future cloud your mind and you suddenly remember finals are going to be next week!",
        responses: {
            heart: "I’m really worried about finals - I’ll probably find a study group in all my classes to prepare for finals with.", 
            brain: "I need to start making a schedule for when all my finals-related work is getting done.",
            lungs: "I’ve started finals-related work already and am in a good place to be fully ready before the actual finals week.",
            stomach: "Finals are a week away - I have other, more pressing commitments right now.",
        }
    },
];

export default questions;
