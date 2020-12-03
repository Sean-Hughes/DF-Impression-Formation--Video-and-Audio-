# Evaluative learning via Deepfaked online content

A series of studies examining whether evaluative learning (assessed via self-reports, an implicit measure [the IAT], and behavioural intentions) can be established via Deepfaked online audio and video content, and whether Deepfakes are as effective as genuine online content.

## License

Code: MIT license

Data and documents: CC-BY



## Citation

[ADD AUTHORSHIP AND LINK TO OSF]



## Instructions for replicating or reproducing

### How to run the studies

The experimental scripts were programmed in [lab.js](https://lab.js.org/) and can be found in the corresponding experiment file within the “method” folder in the root directory for the project (e.g., method/experiment 1/). There are two ways to run the experimental script. 

1.  Click on the index.html file which will run the experiment in an internet browser 

2. Navigate to the lab.js builder environment (i.e., [labjs.felixhenninger.com](https://labjs.felixhenninger.com/)) and then from the dropdown menu click on the “Open” option. From here navigate to the .json file for the experiment that you would like to run (e.g., Study 1 Genuine videos.json). 
   1. This option also allows you to explore the experimental scripts and all the procedural parameters we implemented in the various studies. This is also a good way to get an in-depth insight into each experiment. 
   2. Note that if you want to adapt or change the study procedures that the lab.js scripts currently point to a YouTube video URL where we uploaded the deepfaked videos/audio. I.e., the videos are hosted on youtube rather than served by the labjs server. 

### Data processing

Data processing was conducted in RStudio and can be found in the “data” folder in the root directory. Reproducible reports can be inspected by clicking on the html files. RMarkdown processing scripts were run in RStudio in named ascending named numerical order. 

### Analyses

Analyses were conducted in RStudio and can be found in the “analyses” folder in the root directory. Results can be inspected by clicking on the reproducible reports. The Rmd files that created them can also be inspected or rerun.

1. analyses_preregistered_exp_1-6.html. This file covers the analyses that were pre-registered before running studies 1-6. 

2. analyses_alternative_exp_1-6.html. This file covers the exploratory (and non-pre-registered) analyses for studies 1-6.

3. analyses_preregistered_exp_7.html. This file covers the analyses that were pre-registered before running experiment 7. 



## To do

### Data processing (prereg 1-6)

- "A fourth score from the news task will be *truth discernment* - that is, the extent to which individuals distinguish between true and false content in their judgments (Pennycook & Rand, 2019b). Discernment is defined as the difference in accuracy judgments (or sharing intentions) between true and false headlines. For example, an individual who shared 9 out of 15 true headlines and 12 out of 15 false headlines would have a discernment level of −.2 (i.e., .6 – .8), whereas an individual who shared 9 out of 15 true headlines and 3 out of 15 false headlines would have a discernment level of .4 (i.e., .6 – .2). Thus, a higher discernment score indicates a higher sensitivity to truth relative to falsity."  

  ​	- Would it be possible to add this in?



### Analyses

#### Prereg 1-6

- One sample t-tests that compare the self-reported evaluations from zero, one for the people exposed to positive content and another for the people exposed to negative content, for each experiment (i.e., NOT the rescored versions but the raw versions for each condition).

  > to be added to preregistered analyses
  
- Once you add these to the analysis file I'll update the Supplementary Materials paper with the values from your analyses for Experiments 1-6.  

  > Ian: Working on this

- when *truth discernment* is added to data processing, should it be added somewhere to the preregistered analyses? eg to the correlations? [sean]

- elaborate d and DF for one sample analyses 
- add more IV variables to correlations: demographics etc
- add deepfake detection to correlations
- Note somewhere that POMPs are included for fidelity to prereg but are unnecessary given we're studying correlations
- Note somewhere that all correlations are underpowered, alpha correction needed, or something. Really needs its own dedicated individual difference work with large samples and feature importance selection.



#### Study 7 and exploratory 1-6

- raincloud plots [ian]



### Deviations from prereg file [sean]

D2 used throughout where prereg said D3 score in Experiment 1, D1 in Experiment 2,  D2 in Experiments 3,4, 5, 6.

We said we would include employment in the correlations but we do not because its categorical rather than continuous or binary, and so not suitable for a correlation. 



### Prereg

- look at the processed data for exp 7 
- why is *H2c* failed? is it implemented correctly?
- Add descriptives on N per exclusions and subsets and note that the fact that a small percent of people meet these criteria is itself interesting – pull this code from simulation?

  

