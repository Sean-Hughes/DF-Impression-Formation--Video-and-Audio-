# Evaluative learning via deepfakes

### Data processing

"A fourth score from the news task will be *truth discernment* - that is, the extent to which individuals distinguish between true and false content in their judgments (Pennycook & Rand, 2019b). Discernment is defined as the difference in accuracy judgments (or sharing intentions) between true and false headlines. For example, an individual who shared 9 out of 15 true headlines and 12 out of 15 false headlines would have a discernment level of −.2 (i.e., .6 – .8), whereas an individual who shared 9 out of 15 true headlines and 3 out of 15 false headlines would have a discernment level of .4 (i.e., .6 – .2). Thus, a higher discernment score indicates a higher sensitivity to truth relative to falsity."  

Would it be possible to add this in?

> Ian: Working on this - need to add to both processing and analyses maybe?



### Analyses

#### Check correspondence with preregistrations [sean]

I checked the output of your analyses against those I ran in JASP. All looks good part from the Main effect of Content Type (Deepfaked vs. Genuine) in Experiment 6. I got a main effect for self-reports and no effect for IAT scores, whereas you got an effect for IAT scores and not Self-Reports. Would be good to double check which is correct here. Apart from this, the output of the pre-reg analyses you prepared as consistent with the findings that I got from JASP. So good to know.  

As far as the correspondence  between the pre-reg documents and pre-reg analyses we are largely good, with the following exceptions:



- In Experiments 5-6 we said that "If the two *Political Identity* scores were found to correlate highly then we will average them to create a ‘General Political Identity’ score, with larger values indicating greater endorsement of the idea that one’s political attitudes and beliefs are important to one’s self-identity." We didn't do this.   

  >Ian: FYI for future studies, making data processing conditional on analyses like this is a bad call as it plays havoc with power calculations. Did you include cutoffs for 'highly' or have a value in mind? Possibly better to acknowledge the subjectivity of this if not. Im agnostic to including the new varilable or not, but you could add a correlation by study to the preregistered analyses since you said you would.
  >
  >**Sean**: It was just what the original authors did in their studies, and I though it a fair strategy: if they correlate highly then why not just collapse into a single variable? But I hear the comment you're making here and will remember it for future. For now, I would define "highly" as it usually is in the literature (*r* > 0.5).
  >
  >Ian: This is a "moderate" correlation by Cohen's rules? but it would also be very low if these questions did indeed measure the same construct. Whichever you choose, could you add this to the preregistered analyses file?
  >
  >**Sean**: Ok - let's go with r > .7 then. Added this to pre-reg analyses files where appropriate.
  >
  >Ian: I see you added this to the data analysis plan files - I would undo this, it looks like we're tweaking the prereg after the fact. Just say in the analysis file that this is what was done in the published lit, but no value was given for what they mean for highly, so we include the single and the compound metric for others to make their own choices on, and report the correlation. Maybe that means no cutoff is needed as we dont really do anything with it all. 

- In Experiments 5-6 we said that "If the two political ideology scores were found to correlate highly with one another then we will average them to create a ‘General *Political Ideology*’ score, with higher values indicative of more conservative beliefs and lower values of more liberal beliefs. " We did not do this. 

  > Ian: See previous
  >
  > **Sean**: See previous

We also said we would run the following analyses: 

- One sample t-tests that compare the self-reported evaluations from zero, one for the people exposed to positive content and another for the people exposed to negative content, for each experiment (i.e., NOT the rescored versions but the raw versions for each condition). I ran these in JASP and included them in the Supplementary Materials paper but they are not in the R file. Would  be good to include them. 

  > Ian: just checking my understanding: one sample t tests comparing each source_valence condition against zero, combining both genuine and df conditions? I don't see the utility of this analysis, but am happy to add it if it was preregistered.
  >
  > **Sean**: The idea here is  just see if the evaluative score produced by positive videos differs significantly from zero, and if the evaluative score produced by negative videos also differs from zero. If we run a one single t-test on the rescored values then we are saying that videos worked in general. However this does not tell us if the effect was being driven by positive and/or negative videos. 
  >
  > Ian: No, comparing the pos vs negative tells you if it worked in general with no additional assumptions. Comparing each to zero tells you if it worked in general on the assumpiton that zero is meaningful which is a strong an unnecessary assumption since you have the other valence condition. Given that we already do the former, the latter makes more assumpitons and is redundant. But again we should add if it was preregistered.
  >
  > **Sean**: comparing the positive and negative videos tells me there is a difference between the two. I then need follow-up tests to explore the nature of that difference, right? Sure I can inspect the Means and SDs, but where is the harm in checking if the positive videos differ from zero and the negative videos independently differ from zero? I only make a zero score comparison for the self-report scores where zero does mean something. I never do that for the IAT scores (where zero does not have a clear meaning). 
  >
  > Regardless, I did pre-reg it, and do see value in it, so if it's trivial to spit out then let's do so.   
  >
  > > "I then need follow-up tests to explore the nature of that difference, right?" No, the direction of the test statistic (or the marginal means) tells you its in the predicted direction. The harm is as i say above, it requires additional assumptions but provides no new information, you already know they're different. you can get into situations where one is different from zero and the other is not, which becomes harder to write up, but is only redered meaningful based on your interpretation of zero (which is as problematic for self reports as IAT scores). This is all a debate re what to do in future studies of course, i'll add it here since its preregistered, but i see literally no value in it (and potential costs) for future studies. 

- Once you add these to the analysis file I'll update the Supplementary Materials paper with the values from your analyses for Experiments 1-6.  

  > Ian: Working on this



#### raincloud plots [ian]



## Deviations from prereg file [sean]

D2 used throughout where prereg said D3 score in Experiment 1, D1 in Experiment 2,  D2 in Experiments 3,4, 5, 6.

We said we would include employment in the correlations but we do not because its categorical rather than continuous or binary, and so not suitable for a correlation. 
