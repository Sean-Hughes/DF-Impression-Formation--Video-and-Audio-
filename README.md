# Evaluative learning via Deepfaked online content

A series of studies examining whether evaluative learning (assessed via self-reports, an implicit measure [the IAT], and behavioral intentions) can be established via Deepfaked (online audio and video) content, and whether Deepfakes are as effective as genuine online content.

## License

Code: MIT license

Data and documents: CC-BY
## Citation

Hughes, S., Fried, O., Ferguson, M., Yao, D., Hughes, C., & Hughes, R, & Hussey, I. Using Deepfakes to Hack the Human Mind    

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
