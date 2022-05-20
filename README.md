# Deepfaked Online Content is Highly Effective in Manipulating Attitudes & Intentions

A series of studies examining whether explicit attitudes, implicit attitudes, and intentions (assessed via self-reports, an implicit measure [the IAT], and behavioral intentions questions) can be established via Deepfaked (online audio and video) content.

## License

Code: MIT license

Data and documents: CC-BY
## Citation

Hughes, S., Fried, O., Ferguson, M., Yao, D., Hughes, C., & Hughes, R, & Hussey, I. Deepfaked Online Content is Highly Effective in Manipulating Attitudes & Intentions    

### IMPORTANT UPDATE (April 2022)

-	During the review process at JEP: General the Editor requested that we drop our first two exploratory studies (which centered solely on authentic videos) and just consider those studies which contained Deepfaked content.

-	In line with this request we dropped Experiments 1-2 from our manuscript and re-analyzed the data for four (instead of six) exploratory studies. We have retained the original naming of the files in this github project. Below you can find the correspondance between what is contained in this GitHub repo and what is reported in the manuscript:

Study Type	 Original Study Naming	  Naming Adopted in Manuscript and Analyses
Exploratory	  Experiment 1	          Omitted from JEP:General Manuscript
Exploratory	  Experiment 2	          Omitted from JEP:General Manuscript
Exploratory	  Experiment 3	          Now Called: Experiment 1 (video)
Exploratory	  Experiment 5	          Now Called: Experiment 2 (video)
Exploratory	  Experiment 4	          Now Called: Experiment 3 (audio)
Exploratory	  Experiment 6	          Now Called: Experiment 4 (audio)
Confirmatory	Experiment 7	          Now Called: Experiment 5 (video)

If anything is unclear with respect to the files and naming conventions please notify sean.hughes@ugent.be

## Instructions for replicating or reproducing

### How to run the studies

The experimental scripts were programmed in [lab.js](https://lab.js.org/) and can be found in the corresponding experiment file within the “method” folder in the root directory for the project (e.g., method/experiment 1/). There are two ways to run the experimental script.

1.  Click on the index.html file which will run the experiment in an internet browser

2. Navigate to the lab.js builder environment (i.e., [labjs.felixhenninger.com](https://labjs.felixhenninger.com/)) and then from the dropdown menu click on the “Open” option. From here navigate to the .json file for the experiment that you would like to run (e.g., Study 1 Genuine videos.json).
   1. This option also allows you to explore the experimental scripts and all the procedural parameters we implemented in the various studies. This is also a good way to get an in-depth insight into each experiment.
   2. Note that if you want to adapt or change the study procedures that the lab.js scripts currently point to a YouTube video URL where we uploaded the deepfaked videos/audio. I.e., the videos are hosted on youtube rather than served by the labjs server.

### Data processing

Data processing was conducted in RStudio and can be found in the “data” folder in the root directory. Reproducible reports can be inspected by clicking on the html files. RMarkdown processing scripts were run in RStudio in named ascending named numerical order.

### Analyses (Reported in the Manuscript)

Analyses were conducted in RStudio and can be found in the “analyses” folder in the root directory. Results can be inspected by clicking on the reproducible reports. The Rmd files that created them can also be inspected or rerun.

1. 1. Exploratory_Exp_1-4_Preregistered_Analyses.html. This file covers the exploratory analyses reported in the manuscript (see Experiments 1-4).

2. 2. Confirmatory_Exp_5_Preregistered_Analyses.html. This file covers the confirmatory analyses reported in the manuscript (see Experiment 5).

### Extra Analyses (For Interested Readers)

1. analyses_exp_1-6_exploratory.rmd. This file covers exploratory (Bayesian) analyses of the results for all the exploratory studies we rand (experiments 1-6) and formed the basis of our power analysis via simulation (which was used to determine the sample size for our confirmatory study).

2. power_analysis_via_simulation.rmd. This file covers the method via which we determined the necessary sample size for our confirmatory study.
