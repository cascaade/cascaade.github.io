<meta_info>
    <meta_name>Flappy Bird</meta_name>
    <meta_date>7/12/25</meta_date>
</meta_info>

A few nights ago, as I settled into bed, I couldn't squeeze such a glorious melody out of my head. It was such a vibe I just had to turn to my side, and play it once again. All poems aside, I was consumed by the endless options of suggestions from the well-known streaming service, eventually causing me to find inspiration in one software-related video for my next project.

The video linked below showcased a few projects from a project-a-week challenge the creator participated in. The challenge itself seemed like a daunting task, and I found myself, along with a few folks from the comment section, amazed that one could create such high-quality work in the short time frame provided. However, their experiments with AI caught my specific attention. Their fun usage for education gave me the push I needed to learn the basics of AI and create my own projects, starting with this very one.

## Building the Environment

Well, now that the backstory is out of the way, here's how I did it: I first wanted to create the environment that the neural networks would be playing in. Me being a JavaScript guy, my first pick was HTML canvas, but considering my goal was to add a neural network, I opted to go with pygame for its simplicity and, very important, the fact that tools such as PyTorch were redily available. In the future, I saw many birds and many pipes on the screen at once, so I thought it would be best to create classes for each.

I got the game loop running, the physics in order, and all classes set relatively quickly. However, when I ran the program, there was significant lag and the frame-rate was dipping down below 20 (from 60FPS). A very short \*wink wink\* debug session later, I realized it was due to the 4k screen of my laptop. My solution was to switch to my PC setup instead with 1080p monitors, where the program worked without issues.

## Nerual Network

Now, it was time to gut the user spacebar input and replace it with neural networks competing to reach the top of the leaderboard. This, in theory, was the hard part. I started by creating a `BirdBrain` class. In the constructor, I initialized random weights that each node in the neural network would use to determine **how much a given input effects the output of a layer**. I also created bias tensors that will allow the model to change its linear equation (y=mx+b) to explore different values within the space it is given (i.e. it wouldn't be able to see a whole lot of values if it was constrained to going through the origin). On the forward pass, the weights and inputs would be combined through a weighted sum passed through a `tanh` function.

There are at least two reasons why activation functions (like `tanh`) are fairly common in neural networks. Firstly, they provide a finite range of outputs rather than simply <span>(-&infin;, &infin;)</span>. In the flappy bird case, there are two outputs possible; the network can decide to jump or continue to fall. The output layer uses a `sigmoid` function to shrink the outputs from &reals; down to (0, 1), where I can then set that any value above half (e.g. 0.5) would be considered as jump, and any other value would not take any action.

At the beginning of this journey, I was told that the other reason was so that the model could "think deeper", but that only lead me to more questions. How did we get from a mathematical function to being able to conceptualize the input data? In short, the function is converting the data into a non-linear form. This might be obvious based on the shapes of these expressions, but, again, WHY? Well, based on my short study sessions, if you were to leave the data linear, each input would have a drastic and similar effect on the output because the neurons are simply weighted sums with bias. However, if you introduce non-linearity, each input can, based on its adjusted weights, change and choose how much it affects the output beyond the weights. Additionally, without activation functions, the model would be simply a linear equation, which has proven to not be enough to represent the complex non-linear data that we feed it.

## Project Details

In its current state, the network can get a max score of about 70 points with 100 generations. I don't have much to compare that to due to the amount of variables I may have changed when creating my own Flappy Bird environment, but I am hoping that I can improve that in future updates, as my knowledge about deep learning grows.

As for the time it took..... I probably shouldn't have wasted an entire day over the very short weekend for this, but here we are. For reference, I woke up around noon today, and I'm writing this around 9pm, so it took me a good 7 or 8 hours to get this working smoothly.

<br>

![Flappy Bird gameplay image](/assets/flappy-bird.png)

<br>

## Links
* [The video that inspired me](https://www.youtube.com/watch?v=nr8biZfSZ3Y)
* [View the code for this project on GitHub](https://github.com/cascaade/FlappyBird/tree/main)