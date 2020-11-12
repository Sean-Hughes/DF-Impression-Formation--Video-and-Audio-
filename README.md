# Evaluative learning via deepfakes

## To do 

### Measures

exp 1 "Five Things you Didn't Know About Me !" video has two versions. which one does the script rely on and wouldnt break the script if we remove? do they differ in their content? delete redundant one. [sean]

**Sean**: the naming of the videos has been updated to increase clarity in Experiments 1-6

>  Ian: This seems to break the experiment. eg exp 1:
>
> ![screenshot_temp](/Users/Ian/git/evaluative learning via deepfaking/screenshot_temp.png)

**Sean**:  Fixed. At least on my end everything works fine now. 

### Data processing

there are hard coded variables used in the alternative analyses whose values need to be checked: n_items, min and max scores for each scale (to calculate POMPs). especially aot_min_item which might seem odd. These are in "2-processing.Rmd" starting in the chunk beginning line 652. [sean]

**Sean**: 

- In terms of n_items everything looks good. 

- in terms of min and max scores I have something I'd appreciate you input on. The AOT-E scale ([On the belief that beliefs should change according to **evidence**: Implications for conspiratorial, moral, paranormal, political, religious, and science beliefs](https://psyarxiv.com/a7k96/download/?format=pdf)) . In their paper they say that scores range from 0-100 (with 0 indicating complete disagreement with the statement and 100 indicating complete agreement). My issue is that they only have 8 items. I'm guessing they have transformed the scores into POMP scores. This will influence the max, mix scores for this scale.

  At the moment in the code the min for aoe is 2 and max is 6. I guess it should be on the same scale as the original paper so we can make comparisons with past work. 

  > Ian: Yeah, so these min/max/n scores are what are needed to convert the raw scores to POMPs. So we're aiming for the same outcome here. My question is 'is the currently coded logically possible min/max (ie not necessarily observed in particiapnts data) correct for these scales? The hard coded variables in the data are to be the logically possible min/max (i.e., not the actual range observed).
  >
  > **Sean**:  The AOE scale consists of 8 items and each was scores along a range from 1 (Strongly disagree) to 6 (Strongly agree). At the moment you have the max/min values set from 2 to 6 for AOE.   

- For the media evaluation (me) measure we can either score along a scale ranging from 1 to 3 (or 4 depending on the question) or 0 to 2 (or 3 depending on the question). But at the moment it seems that the min items for some questions is 1 and for others it is 0.  We need to be consistent here.

  > Ian: Cool. Is this the observed minimum or the logically possible minimum? The former requires us to update the data processing to get all on the same scale, the latter is just a feature of what our participants actually did in the study. 
  >
  > **Sean**: The media evaluation task consisted of three questions. One assessing familiarity with the news story (in the Lab.JS file it was coded as 1= Yes, 2 = No, 3 = Unsure); the second question was about accuracy of news story (in the Lab.JS file it was coded as 1 = Not at all accurate, 2= Not very accurate, 3 = Somewhat accurate, 4= Very accurate); the third question was about sharing (in the Lab.JS file it was coded as 1 = Yes, 2 = No , 3 = Unsure).  These were the logically possible max and min scores. But I see in the R markdown code that you have transformed these.
  
  

 Media Evaluation has n_items = 6. However there were 6 fake news and 6 real news items (n = 12). For each of these participants were asked three questions: accuracy, sharing, prior exposure. I see in the code that you compute these scores. But are they being computed on the complete data (i.e., all six items for real news and fake news)? Also one last thing. We said we would calculate a fourth score - discernment - : 

> Ian: I don't understand the question - could you take a peek at the data processing code and call me if you're not sure or if its currently wrong?
>
> **Sean**: It could simply be me missing something that your code is doing. But in the processing file the variable "master_me_n_items = 6". However there are 6 real news stories and 6 fake news stories (thus should n_items not be set to 12). Maybe I'm missing something here. But just thought I'd flag it during the code review.

"A fourth score from the news task will be *truth discernment* - that is, the extent to which individuals distinguish between true and false content in their judgments (Pennycook & Rand, 2019b). Discernment is defined as the difference in accuracy judgments (or sharing intentions) between true and false headlines. For example, an individual who shared 9 out of 15 true headlines and 12 out of 15 false headlines would have a discernment level of −.2 (i.e., .6 – .8), whereas an individual who shared 9 out of 15 true headlines and 3 out of 15 false headlines would have a discernment level of .4 (i.e., .6 – .2). Thus, a higher discernment score indicates a higher sensitivity to truth relative to falsity."  

Would it be possible to add this in?

> Ian: Working on this



### Analyses

#### Check correspondence with preregistrations [sean]

I checked the output of your analyses against those I ran in JASP. All looks good part from the Main effect of Content Type (Deepfaked vs. Genuine) in Experiment 6. I got a main effect for self-reports and no effect for IAT scores, whereas you got an effect for IAT scores and not Self-Reports. Would be good to double check which is correct here. Apart from this, the output of the pre-reg analyses you prepared as consistent with the findings that I got from JASP. So good to know.  

As far as the correspondence  between the pre-reg documents and pre-reg analyses we are largely good, with the following exceptions:

- I said we would use the D3 score in Experiment 1, D1 in Experiment 2,  D2 in Experiments 3,4, 5, 6.

  > Ian: How do you want to handle this? What motivated the change? It's currently implemented as D2 for all on the basis that that's Nosek's lab's most commonly used one. Notionally I could customize by study. Or, we acknowledge this as a deviation in the deviations doc. Hypothetically I could add a robustness test where i compute all three and keep them in the data, and we show results are consistent across all of them. However, i would prefer to avoid this as the analyses start to sprawl, plus readers are very unlikely to care as the differenes in these are minute. 
  >
  > **Sean**: We can just be consistent and use the D2 throughout. I'll flag it in the deviation from pre-reg file.  

- We said we would include employment in the correlations but we do not. Not a big deal for me but it is a deviation. We can either include it or just note this in the deviations from pre-reg document.

  > Ian: I didn't add this as employment is (currently) categorical rather than continuous or binary, and so not suitable for a correlation. Unless I'm missing sth? I would acknowledge this as a mistake in the prereg in the deviations document. 
  >
  > **Sean**: Cool. Will do.

- In Experiments 5-6 we said that "If the two *Political Identity* scores were found to correlate highly then we will average them to create a ‘General Political Identity’ score, with larger values indicating greater endorsement of the idea that one’s political attitudes and beliefs are important to one’s self-identity." We didn't do this.   

  >Ian: FYI for future studies, making data processing conditional on analyses like this is a bad call as it plays havoc with power calculations. Did you include cutoffs for 'highly' or have a value in mind? Possibly better to acknowledge the subjectivity of this if not. Im agnostic to including the new varilable or not, but you could add a correlation by study to the preregistered analyses since you said you would.
  >
  >**Sean**: It was just what the original authors did in their studies, and I though it a fair strategy: if they correlate highly then why not just collapse into a single variable? But I hear the comment you're making here and will remember it for future. For now, I would define "highly" as it usually is in the literature (*r* > 0.5).

- In Experiments 5-6 we said that "If the two political ideology scores were found to correlate highly with one another then we will average them to create a ‘General *Political Ideology*’ score, with higher values indicative of more conservative beliefs and lower values of more liberal beliefs. " We did not do this. 

  > Ian: See previous
  >
  > **Sean**: See previous

We also said we would run the following analyses: 

- One sample t-tests that compare the self-reported evaluations from zero, one for the people exposed to positive content and another for the people exposed to negative content, for each experiment (i.e., NOT the rescored versions but the raw versions for each condition). I ran these in JASP and included them in the Supplementary Materials paper but they are not in the R file. Would  be good to include them. 

  > Ian: just checking my understanding: one sample t tests comparing each source_valence condition against zero, combining both genuine and df conditions? I don't see the utility of this analysis, but am happy to add it if it was preregistered.
  >
  > **Sean**: The idea here is  just see if the evaluative score produced by positive videos differs significantly from zero, and if the evaluative score produced by negative videos also differs from zero. If we run a one single t-test on the rescored values then we are saying that videos worked in general. However this does not tell us if the effect was being driven by positive and/or negative videos. 

- Once you add these to the analysis file I'll update the Supplementary Materials paper with the values from your analyses for Experiments 1-6.  

  > Ian: Working on this

Also could we add in the SDs for the Means that we compute? Thanks

> Ian: This is actually a giant pain to do because the IV factor levels change between analyses, and getting SDs to neatly print in the results requires parsing by level. The current results contain all the standard outputs: estimated means by level and the inference tests to decide if these means differ, as well as standardized effect sizes of the differences in means by SD. I know of a handfull of reviewers who like to also see SDs for some reason, but they are very rare, and if they're that eager they can easily look at our data. The SDs by themselves dont have any bearing on the tests or inferences we want to make.
>
> **Sean**: No worries. If it's a giant pain then don't bother.



#### raincloud plots [ian]