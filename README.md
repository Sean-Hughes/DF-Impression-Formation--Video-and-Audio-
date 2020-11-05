# Evaluative learning via deepfakes

## To do 

### Measures

scripts' json files are oddly named, is there any reason we can't simplify? [sean]

**Sean**: Honestly, I don't think so. I've changed them there now. Let me know if this throws any errors in the future. 

instructions on how to use scripts needed, what generated them, etc. ie if all I have is the github, how would i re-run the study? [sean]

**Sean**: Instruction files added to the root directory 

exp 1 "Five Things you Didn't Know About Me !" video has two versions. which one does the script rely on and wouldnt break the script if we remove? do they differ in their content? delete redundant one. [sean]

**Sean**: the naming of the videos has been updated to increase clarity in Experiments 1-6



### Data processing

there are hard coded variables used in the alternative analyses whose values need to be checked: n_items, min and max scores for each scale (to calculate POMPs). especially aot_min_item which might seem odd. These are in "2-processing.Rmd" starting in the chunk beginning line 652. [sean]

**Sean**: 

- In terms of n_items everything looks good. 

- in terms of min and max scores I have something I'd appreciate you input on. The AOT-E scale ([On the belief that beliefs should change according to **evidence**: Implications for conspiratorial, moral, paranormal, political, religious, and science beliefs](https://psyarxiv.com/a7k96/download/?format=pdf)) . In their paper they say that scores range from 0-100 (with 0 indicating complete disagreement with the statement and 100 indicating complete agreement). My issue is that they only have 8 items. I'm guessing they have transformed the scores into POMP scores. This will influence the max, mix scores for this scale.

  At the moment in the code the min for aoe is 2 and max is 6. I guess it should be on the same scale as the original paper so we can make comparisons with past work. 

- For the media evaluation (me) measure we can either score along a scale ranging from 1 to 3 (or 4 depending on the question) or 0 to 2 (or 3 depending on the question). But at the moment it seems that the min items for some questions is 1 and for others it is 0.  We need to be consistent here.

 Media Evaluation has n_items = 6. However there were 6 fake news and 6 real news items (n = 12). For each of these participants were asked three questions: accuracy, sharing, prior exposure. I see in the code that you compute these scores. But are they being computed on the complete data (i.e., all six items for real news and fake news)? Also one last thing. We said we would calculate a fourth score - discernment - : 

"A fourth score from the news task will be *truth discernment* - that is, the extent to which individuals distinguish between true and false content in their judgments (Pennycook & Rand, 2019b). Discernment is defined as the difference in accuracy judgments (or sharing intentions) between true and false headlines. For example, an individual who shared 9 out of 15 true headlines and 12 out of 15 false headlines would have a discernment level of −.2 (i.e., .6 – .8), whereas an individual who shared 9 out of 15 true headlines and 3 out of 15 false headlines would have a discernment level of .4 (i.e., .6 – .2). Thus, a higher discernment score indicates a higher sensitivity to truth relative to falsity."  

Would it be possible to add this in?



Data dictionary additions to be made (i.e., replace XXXXX with values). see "5_data_dictionary.csv" in data.processed. [sean]

**Sean**: Updated. Also saved it as an xlsx in case there were issues with the csv file.

### Analyses

check correspondence with preregistrations [sean]

**Sean**: I checked the output of your analyses against those I ran in JASP. All looks good part from the Main effect of Content Type (Deepfaked vs. Genuine) in Experiment 6. I got a main effect for self-reports and no effect for IAT scores, whereas you got an effect for IAT scores and not Self-Reports. Would be good to double check which is correct here. 

Apart from this, the output of the pre-reg analyses you prepared as consistent with the findings that I got from JASP. So good to know.  

As far as the correspondence  between the pre-reg documents and pre-reg analyses we are largely good, with the following exceptions:

- I said we would use the D3 score in Experiment 1, D1 in Experiment 2,  D2 in Experiments 3,4, 5, 6.

- We said we would include employment in the correlations but we do not. Not a big deal for me but it is a deviation. We can either include it or just note this in the deviations from pre-reg document.

- In Experiments 5-6 we said that "If the two *Political Identity* scores were found to correlate highly then we will average them to create a ‘General Political Identity’ score, with larger values indicating greater endorsement of the idea that one’s political attitudes and beliefs are important to one’s self-identity." We didn't do this.  

- In Experiments 5-6 we said that "If the two political ideology scores were found to correlate highly with one another then we will average them to create a ‘General *Political Ideology*’ score, with higher values indicative of more conservative beliefs and lower values of more liberal beliefs. " We did not do this. 

  

We also said we would run the following analyses: 

-  One sample t-tests that compare the self-reported evaluations from zero, one for the people exposed to positive content and another for the people exposed to negative content, for each experiment (i.e., NOT the rescored versions but the raw versions for each condition). I ran these in JASP and included them in the Supplementary Materials paper but they are not in the R file. Would  be good to include them. 
  - Once you add these to the analysis file I'll update the Supplementary Materials paper with the values from your analyses for Experiments 1-6.  

Apart from this were are consistent with the pre-reg documents 



**Sean**: Actually when I started updating the manuscript with the analyses files I realized there is an error in the section "Differences between genuine and deepfaked content (after rescoring for source_valence)

It is supposed to be looking at "recoded_DVs ~ experiment_condition" but in the code it is using the non-recoded variables. You can see this reflected in the scores that are produced. Basically no scores in the self-reports when there should be. I changed this in the analysis files.



Also could we add in the SDs for the Means that we compute? Thanks





raincloud plots [ian]

add attitude strengths [ian]


