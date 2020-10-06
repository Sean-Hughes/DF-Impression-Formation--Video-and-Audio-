// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Transmit",
      "url": "backend.php",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "S5_DF_Genuine_Videos_Replication",
    "description": "Study 5 aims to replicate S3 findings and examine if individual difference factors moderate the impact of genuine videos on evaluations",
    "repository": "",
    "contributors": "Sean Hughes (sean.hughes@ugent.be)"
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Screen",
      "files": {},
      "responses": {
        "keypress(Space)": "space"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Browser_note",
      "content": "\u003Cheader\u003E\r\n  \u003Ch3\u003EWarning on browser type\u003C\u002Fh3\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain style = \"text-align: left font-family:Helvetica; font-size: 18pt; margin:1%\"\u003E\r\n  \r\n\u003Cp\u003EThis study contains videos. In the past, we have noticed that people using the \u003Cspan style = \"font-weight: bold; color: red\"\u003E\"Brave\" browser\u003C\u002Fspan\u003E sometimes experience issues with videos (i.e., they cannot be displayed). If you are currently using Brave browser, we kindly ask you to \u003Cb\u003Eswitch\u003C\u002Fb\u003E browsers before proceeding with this study, or (if you prefer not to use another browser) \u003Cb\u003Ereturn\u003C\u002Fb\u003E the study on Prolific.\u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EIf you are using a different browser or have switched browsers already, you can press space in order to continue.\u003C\u002Fp\u003E\r\n\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter\u003E\r\n  Press \u003Ckbd\u003ESPACE\u003C\u002Fkbd\u003E to continue.\r\n\u003C\u002Ffooter\u003E"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cheader\u003E\n    \u003Ch1\u003EInformed Consent\u003C\u002Fh1\u003E\n\u003C\u002Fheader\u003E\n\n\u003Cmain style=\"text-align:left; font-family:Helvetica; font-size: 18pt; margin:1%\"\u003E\n\n\u003Cform id =\"InformedConsent\"\u003E\n        \u003Cp style=\"font-size: 18pt\"\u003E\u003Cb\u003E\u003Cbr\u003E Project Title: YOUTUBE VIDEO STUDY \u003C\u002Fb\u003E\u003C\u002Fp\u003E\n\n    \u003Cp style=\"font-size: 16pt\"\u003E\u003Cb\u003EOverview and Procedures:\u003C\u002Fb\u003E\n        The purpose of this study is to examine how people remember and react to what they see online. During the study you will watch a video taken from a YouTube channel. You will be asked to watch this video and remember what the person said. Afterwards you will be asked to answer some questions and take part in a reaction time task. \u003C\u002Fp\u003E\n        \n    \u003Cp style=\"font-size: 16pt\"\u003E\u003Cb\u003ERisk and Benefits.\u003C\u002Fb\u003E\n\t\tThis study involves no more risk to your physical or psychological health beyond those encountered in the normal course of everyday life.\n\t\tYou may benefit by gaining a better understanding of psychological research. No other risks or benefits are anticipated.\u003C\u002Fp\u003E\n\n    \u003Cp style=\"font-size: 16pt\"\u003E\u003Cb\u003EConfidentiality.\u003C\u002Fb\u003E\n\t\tAny information obtained in this study will be kept strictly confidential and used solely for research purposes. We do not ask any identifying information and responses will be kept completely anonymous. Your anonymised data may be posted to a public repository for other researchers to make use of.\u003C\u002Fp\u003E\n\n    \u003Cp style=\"font-size: 16pt\"\u003E\u003Cb\u003ECompensation.\u003C\u002Fb\u003E\n        You will receive a sum of money for participating.\u003C\u002Fp\u003E\n\n\t\u003Cp style=\"font-size: 16pt\"\u003E\u003Cb\u003EYour Rights.\u003C\u002Fb\u003E\n        Your decision to participate in this research is voluntary. You can withdraw from the study at any time without penalty.\n\t\tYou do not have to answer any questions you do not want to.\u003C\u002Fp\u003E\n\n\t\u003Cp style=\"font-size: 16pt\"\u003E\u003Cb\u003EContact Information. \u003C\u002Fb\u003E\n        If you have any questions or issues with this study please contact the principle investigator (Sean Hughes) at sean.hughes@ugent.be who can review the matter and provide further information.\n\n\u003Cp\u003EYou must be at least 18 years old in order to participate in this study.\u003C\u002Fp\u003E\n\n\u003Cp\u003EPlease indicate below whether you consent to participate in this research study. I declare that:\u003C\u002Fp\u003E\n\n\u003Cul\u003E\n\u003Cli\u003EI have received information about the tasks and questions I will be asked during this research.\u003C\u002Fli\u003E\n\u003Cli\u003Emy participation in this scientific research is completely voluntarily.\u003C\u002Fli\u003E\n\u003Cli\u003EI grant permission to the researcher to store, analyse, and report my results in an anonymous way.\u003C\u002Fli\u003E\n\u003Cli\u003EI know that I can end my participation at each moment without having to give a justification.\u003C\u002Fli\u003E\n\u003Cli\u003EI know that not participating or ending my participation has no negative consequences for me.\u003C\u002Fli\u003E\n\u003Cli\u003EI know that I can receive a summary of the results of the research on demand.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\n\u003Cform id = \"InformedConsent\"\u003E\n  \u003Cinput name = \"agree\" id = \"agree\" type = \"checkbox\" required\u003E\n  \u003Clabel for = \"agree\"\u003EI agree to participate in this study.\u003C\u002Flabel\u003E\n\u003C\u002Fform\u003E\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n\u003Cbutton type= \"submit\" form = \"InformedConsent\"\u003EContinue\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
      "files": {},
      "parameters": {},
      "responses": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
window.onbeforeunload = function(e) {
  var dialogText = 'Are you certain you wish to quit the study?';
  e.returnValue = dialogText;
  return dialogText;
};
}
      },
      "title": "InformedConsent"
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {
        "keypress(Space)": "continue"
      },
      "messageHandlers": {},
      "title": "Welcome + Structure of experiment ",
      "content": "\u003Cheader\u003E\r\n\u003Ch1 style=\"color:blue\"\u003E Welcome to this study!\u003C\u002Fh1\u003E\u003Cbr\u003E\r\n  \u003C\u002Fheader\u003E\r\n\r\n\u003Cmain class=\"fullscreen\" style=\"padding-bottom:2pt\"\u003E\r\n\u003Cp style=\"text-align:left; font-family: Helvetica; font-size: 20pt;margin-left:40pt;margin-right:50pt\"\u003EBefore we begin please do the following:\r\n\r\n\u003Cul style= \"text-align:left; font-family: Helvetica; font-size: 20pt; line-height: 150%\"\u003E\r\n\u003Cli\u003E \u003Cstrong\u003E Please maximize your browser window now \u003C\u002Fstrong\u003E so that it fills your entire screen \u003C\u002Fli\u003E\r\n\u003Cli\u003E Switch off your phone\u002Fe-mail\u002Fmusic & anything else distracting \u003C\u002Fli\u003E\r\n\u003Cli\u003E Please have your Prolific ID ready (It can be found in your account info)\u003C\u002Fli\u003E  \r\n\u003C\u002Ful\u003E\r\n\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Ch4\u003E\u003Cb\u003E Press the \u003Ckbd\u003E spacebar \u003C\u002Fkbd\u003E to continue \u003C\u002Fb\u003E\u003C\u002Fh4\u003E \r\n\u003C\u002Ffooter\u003E "
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {
        "keypress(Space)": "continue"
      },
      "messageHandlers": {},
      "title": "Guidelines",
      "content": "\u003Cheader\u003E\r\n\u003Ch1 style=\"color:blue\"\u003ESome Guidelines\u003C\u002Fh1\u003E\u003Cbr\u003E\r\n  \u003C\u002Fheader\u003E\r\n\r\n\u003Cmain\u003E\r\n\u003Cp style=\"text-align:left; font-family: Helvetica; font-size: 20pt;margin-left:40pt;margin-right:50pt;line-height: 150%\"\u003E Make sure you do this experiment on a laptop or regular desktop computer and \u003Cstrong\u003E NOT \u003C\u002Fstrong\u003E on a smartphone or tablet. You will need a keyboard for this experiment. \r\n\u003Cbr\u003E\r\n\r\n\u003Cbr\u003EDo not close this tab and do not switch to other tabs during the experiment. It is important that you \u003Cb\u003Eremain attentive \u003C\u002Fb\u003E. In this way you help us to make this research valuable.\r\n\r\n\u003Cbr\u003E\u003Cbr\u003ESometimes you will have to scroll down to see the end of the page. For example, on this page, you must scroll down to see that you need to press the space bar to continue. \u003C\u002Fp\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Ch4\u003E\u003Cb\u003E Press the \u003Ckbd\u003E spacebar \u003C\u002Fkbd\u003E to continue.\u003C\u002Fh4\u003E\u003C\u002Fb\u003E \r\n\u003C\u002Ffooter\u003E "
    },
    {
      "type": "lab.html.Form",
      "content": "  \u003Cheader\u003E\u003Ch2 style=\"color:blue\"\u003E Prolific ID \u003C\u002Fh2\u003E\u003C\u002Fheader\u003E\n\n   \u003Cmain class=\"fullscreen\" style=\"padding-bottom:2pt\"\u003E\n  \u003C!-- ask 1 question: ID --\u003E\n      \n      \u003Cform id =\"Prolific ID\" required\u003E\n        \u003Ctable\u003E\n          \u003Ctr\u003E\n            \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Clabel for=\"prolific ID\"\u003E 1. Please enter your Prolific ID number below. If you do not have it please retrieve it now. Otherwise you cannot be paid. \u003C\u002Flabel\u003E\n                \u003Cinput name=\"prolific ID\" id=\"prolific ID\" required type=\"text\" cols=\"10\" style=\"width:500pt; height:50pt;\"\u003E\n          \u003C\u002Fth\u003E\n           \u003C\u002Ftr\u003E\n        \u003C\u002Ftable\u003E\n      \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Press this \u003Cbutton type=\"submit\" form=\"Prolific ID\"\u003E button \u003C\u002Fbutton\u003E in order to continue.\n\u003C\u002Ffooter\u003E",
      "scrollTop": true,
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "Prolific ID"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cheader style = \"top:110pt;left:110pt\"\u003E\n  \u003Cimg src=\"static\u002FIntroduction.jpg\" height = \"80%\" width=\"80%\" class=\"center\"\u003E\n\u003C\u002Fheader\u003E\n\n   \u003Cmain class=\"fullscreen\" style=\"padding-bottom:2pt\"\u003E\n  \u003C!-- ask 1 question: ID --\u003E\n      \n      \u003Cform id =\"Part 1\"\u003E\n      \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Press this \u003Cbutton type=\"submit\" form=\"Part 1\"\u003E button \u003C\u002Fbutton\u003E in order to continue.\n\u003C\u002Ffooter\u003E",
      "scrollTop": true,
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "Introduction"
    },
    {
      "type": "lab.html.Form",
      "content": "\n\u003Cheader\u003E\n  \u003Cimg src=\"static\u002FPart_1.jpg\" height = \"45%\" width=\"45%\" class=\"center\"\u003E\n\u003C\u002Fheader\u003E\n\n\n   \u003Cmain class=\"fullscreen\" style=\"padding-bottom:2pt\"\u003E\n  \u003C!-- ask 1 question: ID --\u003E\n      \n      \u003Cform id =\"Part 1\"\u003E\n      \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Press this \u003Cbutton type=\"submit\" form=\"Part 1\"\u003E button \u003C\u002Fbutton\u003E in order to continue.\n\u003C\u002Ffooter\u003E",
      "scrollTop": true,
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "Part 1"
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "Demographics",
      "content": [
        {
          "type": "lab.html.Form",
          "content": "  \u003Cheader\u003E\u003Ch2 style=\"color:blue\"\u003E Demographic information (Part 1) \u003C\u002Fh2\u003E\u003C\u002Fheader\u003E\n\n  \u003Cstyle\u003E \n    td:not(:first-child) {\n    padding-top:25pt;\n    padding-bottom:25pt;\n    }\n  \u003C\u002Fstyle\u003E \n\n \u003Cmain class=\"fullscreen\"\u003E\n   \u003C!-- ask 3 questions: age, gender, education --\u003E\n      \n    \u003Cform id =\"Demographics_1\" required\u003E\n      \u003Ctable\u003E\n        \u003Ctr\u003E\n          \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;\"\u003E\n              \u003Clabel for=\"age\"\u003EQ1. What is your age?\u003C\u002Flabel\u003E\n          \u003C\u002Fth\u003E\n          \u003Ctd style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n            \u003Cinput name=\"age\" type=\"number\" id=\"age\" required min=\"18\" max = \"70\"\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n        \u003Ctr\u003E\n          \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;\"\u003E\n             \u003Clabel for=\"gender\"\u003EQ2. What is your gender? \u003C\u002Flabel\u003E\n          \u003C\u002Fth\u003E\n          \u003Ctd style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%; padding-bottom: 5pt\"\u003E\n              \u003Cselect name=\"gender\" id=\"gender\" required\u003E\n                \u003Coption value=\"\"\u003E ----- \u003C\u002Foption\u003E\n                \u003Coption value=\"male\"\u003E Man \u003C\u002Foption\u003E\n                \u003Coption value=\"female\"\u003E Woman \u003C\u002Foption\u003E\n                \u003Coption value=\"Non-binary\"\u003E Non-binary \u003C\u002Foption\u003E\n                \u003Coption value=\"Prefer not to disclose\"\u003E Prefer not to disclose \u003C\u002Foption\u003E\n                \u003Coption value=\"Prefer to self-discribe\"\u003E Prefer to self-describe (use textbox to do so) \u003C\u002Foption\u003E\n                \u003C\u002Fselect\u003E \n                \u003Cinput name=\"Gender (self-describe)\" id=\"Gender (self-describe)\"cols=\"5\" style=\"width:400pt; height:25pt\"\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n        \u003Ctr\u003E\n          \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;\"\u003E\n             \u003Clabel for=\"ethnicity\"\u003EQ3. What is your ethnicity? \u003C\u002Flabel\u003E\n          \u003C\u002Fth\u003E\n          \u003Ctd style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%; padding-bottom: 5pt\"\u003E\n              \u003Cselect name=\"ethnicity\" id=\"ethnicity\" required\u003E\n                \u003Coption value=\"\"\u003E ----- \u003C\u002Foption\u003E\n                \u003Coption value=\"Asian\"\u003E Asian \u003C\u002Foption\u003E\n                \u003Coption value=\"Black\"\u003E Black\u002FAfrican \u003C\u002Foption\u003E\n                \u003Coption value=\"White\"\u003E Caucasian (White) \u003C\u002Foption\u003E\n                \u003Coption value=\"Hispanic\"\u003E Hispanic\u002FLatinx \u003C\u002Foption\u003E\n                \u003Coption value=\"Native American\"\u003E Native American \u003C\u002Foption\u003E\n                \u003Coption value=\"Pacific Islander\"\u003E Pacific Islander \u003C\u002Foption\u003E\n                \u003Coption value=\"Prefer not to respond\"\u003E Prefer not to answer \u003C\u002Foption\u003E\n                \u003Coption value=\"ethnicity (self-describe)\"\u003E Prefer to self-describe (use the textbox to do so) \u003C\u002Foption\u003E\n                \u003C\u002Fselect\u003E \n                \u003Cinput name=\"Ethnicity (self-describe)\"; id=\"Ethnicity (self-describe)\"; cols=\"5\"; style=\"width:400pt; height:25pt\"\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n\n       \u003Ctr\u003E\n          \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;\"\u003E\n            \u003Clabel for=\"education\"\u003EQ4. What is the highest degree or level of schooling you have completed? \u003C\u002Flabel\u003E\n          \u003C\u002Fth\u003E\n      \n          \u003Ctd style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Cselect name=\"education\" id=\"education\" required\u003E\n                \u003Coption value=\"\"\u003E ----- \u003C\u002Foption\u003E\n                \u003Coption value=\"Less than high school\"\u003E Less than a high school degree \u003C\u002Foption\u003E\n                \u003Coption value=\"High school\"\u003E High school graduate (high school diploma or equivalent including GED) \u003C\u002Foption\u003E\n                \u003Coption value=\"Some college\"\u003E Some college\u002Funiversity experience but no degree \u003C\u002Foption\u003E\n                \u003Coption value=\"Associate degree\"\u003E Associate degree in college\u002Funiversity (2-year degree) \u003C\u002Foption\u003E\n                \u003Coption value=\"Bachelor\"\u003E Bachelor’s degree in college\u002Funiversity \u003C\u002Foption\u003E\n                \u003Coption value=\"Masters\"\u003E Master’s degree \u003C\u002Foption\u003E\n                \u003Coption value=\"Doctoral degree\"\u003E Doctoral degree \u003C\u002Foption\u003E\n                \u003Coption value=\"Professional degree\"\u003E Professional degree (JD, MD) \u003C\u002Foption\u003E\n                \u003C\u002Fselect\u003E \n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n\n        \u003Ctr\u003E\n          \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;\"\u003E\n              \u003Clabel for=\"education\"\u003E 5. Are you currently…? \u003C\u002Flabel\u003E\n          \u003C\u002Fth\u003E\n            \u003Ctd style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Cselect name=\"employment\" id=\"employment\" required\u003E\n                \u003Coption value=\"\"\u003E ----- \u003C\u002Foption\u003E\n                \u003Coption value=\"Employed (part-time)\"\u003E Employed for wages (part-time) \u003C\u002Foption\u003E\n                \u003Coption value=\"Employed (full time)\"\u003E Employed for wages (full time) \u003C\u002Foption\u003E\n                \u003Coption value=\"Self-employed\"\u003E Self-employed \u003C\u002Foption\u003E\n                \u003Coption value=\"Unemployed (looking)\"\u003E Out of work and looking for work \u003C\u002Foption\u003E\n                \u003Coption value=\"Unemployed (not looking)\"\u003E Out of work and not looking for work \u003C\u002Foption\u003E\n                \u003Coption value=\"Homemaker\"\u003E A homemaker \u003C\u002Foption\u003E\n                \u003Coption value=\"Student\"\u003E A student \u003C\u002Foption\u003E\n                \u003Coption value=\"Military\"\u003E Military \u003C\u002Foption\u003E\n                \u003Coption value=\"Retired\"\u003E Retired \u003C\u002Foption\u003E\n                \u003Coption value=\"Unable to work\"\u003E Unable to work \u003C\u002Foption\u003E\n                \u003Coption value=\"Not responding\"\u003E I prefer not to answer this question \u003C\u002Foption\u003E\n                \u003C\u002Fselect\u003E \n            \u003C\u002Ftd\u003E\n          \u003C\u002Ftr\u003E\n        \u003C\u002Ftable\u003E\n      \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Press this \u003Cbutton type=\"submit\" form=\"Demographics_1\"\u003E button \u003C\u002Fbutton\u003E in order to continue.\n\u003C\u002Ffooter\u003E",
          "scrollTop": true,
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "Demographics_1"
        },
        {
          "type": "lab.html.Form",
          "content": "  \u003Cheader\u003E\u003Ch2 style=\"color:blue\"\u003E Demographic information (Part 2) \u003C\u002Fh2\u003E\u003C\u002Fheader\u003E\n\n  \u003Cstyle\u003E \n    td:not(:first-child) {\n    padding-top:25pt;\n    padding-bottom:25pt;\n    }\n  \u003C\u002Fstyle\u003E \n\n \u003Cmain class=\"fullscreen\"\u003E\n   \u003C!-- ask 3 questions: age, gender, education --\u003E\n      \n    \u003Cform id =\"Demographics_2\" required\u003E\n      \u003Ctable\u003E\n        \u003Ctr\u003E\n          \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;\"\u003E\n             \u003Clabel for=\"ethnicity\"\u003EQ6. Where do you normally reside? \u003C\u002Flabel\u003E\n          \u003C\u002Fth\u003E\n          \u003Ctd style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%; padding-bottom: 5pt\"\u003E\n            \u003Cselect name=\"location\" id=\"location\" required\u003E\n              \u003Coption value=\"\"\u003E ----- \u003C\u002Foption\u003E\n              \u003Coption value=\"Afganistan\"\u003EAfghanistan\u003C\u002Foption\u003E\n              \u003Coption value=\"Albania\"\u003EAlbania\u003C\u002Foption\u003E\n              \u003Coption value=\"Algeria\"\u003EAlgeria\u003C\u002Foption\u003E\n              \u003Coption value=\"American Samoa\"\u003EAmerican Samoa\u003C\u002Foption\u003E\n              \u003Coption value=\"Andorra\"\u003EAndorra\u003C\u002Foption\u003E\n              \u003Coption value=\"Angola\"\u003EAngola\u003C\u002Foption\u003E\n              \u003Coption value=\"Anguilla\"\u003EAnguilla\u003C\u002Foption\u003E\n              \u003Coption value=\"Antigua & Barbuda\"\u003EAntigua & Barbuda\u003C\u002Foption\u003E\n              \u003Coption value=\"Argentina\"\u003EArgentina\u003C\u002Foption\u003E\n              \u003Coption value=\"Armenia\"\u003EArmenia\u003C\u002Foption\u003E\n              \u003Coption value=\"Aruba\"\u003EAruba\u003C\u002Foption\u003E\n              \u003Coption value=\"Australia\"\u003EAustralia\u003C\u002Foption\u003E\n              \u003Coption value=\"Austria\"\u003EAustria\u003C\u002Foption\u003E\n              \u003Coption value=\"Azerbaijan\"\u003EAzerbaijan\u003C\u002Foption\u003E\n              \u003Coption value=\"Bahamas\"\u003EBahamas\u003C\u002Foption\u003E\n              \u003Coption value=\"Bahrain\"\u003EBahrain\u003C\u002Foption\u003E\n              \u003Coption value=\"Bangladesh\"\u003EBangladesh\u003C\u002Foption\u003E\n              \u003Coption value=\"Barbados\"\u003EBarbados\u003C\u002Foption\u003E\n              \u003Coption value=\"Belarus\"\u003EBelarus\u003C\u002Foption\u003E\n              \u003Coption value=\"Belgium\"\u003EBelgium\u003C\u002Foption\u003E\n              \u003Coption value=\"Belize\"\u003EBelize\u003C\u002Foption\u003E\n              \u003Coption value=\"Benin\"\u003EBenin\u003C\u002Foption\u003E\n              \u003Coption value=\"Bermuda\"\u003EBermuda\u003C\u002Foption\u003E\n              \u003Coption value=\"Bhutan\"\u003EBhutan\u003C\u002Foption\u003E\n              \u003Coption value=\"Bolivia\"\u003EBolivia\u003C\u002Foption\u003E\n              \u003Coption value=\"Bonaire\"\u003EBonaire\u003C\u002Foption\u003E\n              \u003Coption value=\"Bosnia & Herzegovina\"\u003EBosnia & Herzegovina\u003C\u002Foption\u003E\n              \u003Coption value=\"Botswana\"\u003EBotswana\u003C\u002Foption\u003E\n              \u003Coption value=\"Brazil\"\u003EBrazil\u003C\u002Foption\u003E\n              \u003Coption value=\"British Indian Ocean Ter\"\u003EBritish Indian Ocean Ter\u003C\u002Foption\u003E\n              \u003Coption value=\"Brunei\"\u003EBrunei\u003C\u002Foption\u003E\n              \u003Coption value=\"Bulgaria\"\u003EBulgaria\u003C\u002Foption\u003E\n              \u003Coption value=\"Burkina Faso\"\u003EBurkina Faso\u003C\u002Foption\u003E\n              \u003Coption value=\"Burundi\"\u003EBurundi\u003C\u002Foption\u003E\n              \u003Coption value=\"Cambodia\"\u003ECambodia\u003C\u002Foption\u003E\n              \u003Coption value=\"Cameroon\"\u003ECameroon\u003C\u002Foption\u003E\n              \u003Coption value=\"Canada\"\u003ECanada\u003C\u002Foption\u003E\n              \u003Coption value=\"Canary Islands\"\u003ECanary Islands\u003C\u002Foption\u003E\n              \u003Coption value=\"Cape Verde\"\u003ECape Verde\u003C\u002Foption\u003E\n              \u003Coption value=\"Cayman Islands\"\u003ECayman Islands\u003C\u002Foption\u003E\n              \u003Coption value=\"Central African Republic\"\u003ECentral African Republic\u003C\u002Foption\u003E\n              \u003Coption value=\"Chad\"\u003EChad\u003C\u002Foption\u003E\n              \u003Coption value=\"Channel Islands\"\u003EChannel Islands\u003C\u002Foption\u003E\n              \u003Coption value=\"Chile\"\u003EChile\u003C\u002Foption\u003E\n              \u003Coption value=\"China\"\u003EChina\u003C\u002Foption\u003E\n              \u003Coption value=\"Christmas Island\"\u003EChristmas Island\u003C\u002Foption\u003E\n              \u003Coption value=\"Cocos Island\"\u003ECocos Island\u003C\u002Foption\u003E\n              \u003Coption value=\"Colombia\"\u003EColombia\u003C\u002Foption\u003E\n              \u003Coption value=\"Comoros\"\u003EComoros\u003C\u002Foption\u003E\n              \u003Coption value=\"Congo\"\u003ECongo\u003C\u002Foption\u003E\n              \u003Coption value=\"Cook Islands\"\u003ECook Islands\u003C\u002Foption\u003E\n              \u003Coption value=\"Costa Rica\"\u003ECosta Rica\u003C\u002Foption\u003E\n              \u003Coption value=\"Cote DIvoire\"\u003ECote DIvoire\u003C\u002Foption\u003E\n              \u003Coption value=\"Croatia\"\u003ECroatia\u003C\u002Foption\u003E\n              \u003Coption value=\"Cuba\"\u003ECuba\u003C\u002Foption\u003E\n              \u003Coption value=\"Curaco\"\u003ECuracao\u003C\u002Foption\u003E\n              \u003Coption value=\"Cyprus\"\u003ECyprus\u003C\u002Foption\u003E\n              \u003Coption value=\"Czech Republic\"\u003ECzech Republic\u003C\u002Foption\u003E\n              \u003Coption value=\"Denmark\"\u003EDenmark\u003C\u002Foption\u003E\n              \u003Coption value=\"Djibouti\"\u003EDjibouti\u003C\u002Foption\u003E\n              \u003Coption value=\"Dominica\"\u003EDominica\u003C\u002Foption\u003E\n              \u003Coption value=\"Dominican Republic\"\u003EDominican Republic\u003C\u002Foption\u003E\n              \u003Coption value=\"East Timor\"\u003EEast Timor\u003C\u002Foption\u003E\n              \u003Coption value=\"Ecuador\"\u003EEcuador\u003C\u002Foption\u003E\n              \u003Coption value=\"Egypt\"\u003EEgypt\u003C\u002Foption\u003E\n              \u003Coption value=\"El Salvador\"\u003EEl Salvador\u003C\u002Foption\u003E\n              \u003Coption value=\"Equatorial Guinea\"\u003EEquatorial Guinea\u003C\u002Foption\u003E\n              \u003Coption value=\"Eritrea\"\u003EEritrea\u003C\u002Foption\u003E\n              \u003Coption value=\"Estonia\"\u003EEstonia\u003C\u002Foption\u003E\n              \u003Coption value=\"Ethiopia\"\u003EEthiopia\u003C\u002Foption\u003E\n              \u003Coption value=\"Falkland Islands\"\u003EFalkland Islands\u003C\u002Foption\u003E\n              \u003Coption value=\"Faroe Islands\"\u003EFaroe Islands\u003C\u002Foption\u003E\n              \u003Coption value=\"Fiji\"\u003EFiji\u003C\u002Foption\u003E\n              \u003Coption value=\"Finland\"\u003EFinland\u003C\u002Foption\u003E\n              \u003Coption value=\"France\"\u003EFrance\u003C\u002Foption\u003E\n              \u003Coption value=\"French Guiana\"\u003EFrench Guiana\u003C\u002Foption\u003E\n              \u003Coption value=\"French Polynesia\"\u003EFrench Polynesia\u003C\u002Foption\u003E\n              \u003Coption value=\"French Southern Ter\"\u003EFrench Southern Ter\u003C\u002Foption\u003E\n              \u003Coption value=\"Gabon\"\u003EGabon\u003C\u002Foption\u003E\n              \u003Coption value=\"Gambia\"\u003EGambia\u003C\u002Foption\u003E\n              \u003Coption value=\"Georgia\"\u003EGeorgia\u003C\u002Foption\u003E\n              \u003Coption value=\"Germany\"\u003EGermany\u003C\u002Foption\u003E\n              \u003Coption value=\"Ghana\"\u003EGhana\u003C\u002Foption\u003E\n              \u003Coption value=\"Gibraltar\"\u003EGibraltar\u003C\u002Foption\u003E\n              \u003Coption value=\"Great Britain\"\u003EGreat Britain\u003C\u002Foption\u003E\n              \u003Coption value=\"Greece\"\u003EGreece\u003C\u002Foption\u003E\n              \u003Coption value=\"Greenland\"\u003EGreenland\u003C\u002Foption\u003E\n              \u003Coption value=\"Grenada\"\u003EGrenada\u003C\u002Foption\u003E\n              \u003Coption value=\"Guadeloupe\"\u003EGuadeloupe\u003C\u002Foption\u003E\n              \u003Coption value=\"Guam\"\u003EGuam\u003C\u002Foption\u003E\n              \u003Coption value=\"Guatemala\"\u003EGuatemala\u003C\u002Foption\u003E\n              \u003Coption value=\"Guinea\"\u003EGuinea\u003C\u002Foption\u003E\n              \u003Coption value=\"Guyana\"\u003EGuyana\u003C\u002Foption\u003E\n              \u003Coption value=\"Haiti\"\u003EHaiti\u003C\u002Foption\u003E\n              \u003Coption value=\"Hawaii\"\u003EHawaii\u003C\u002Foption\u003E\n              \u003Coption value=\"Honduras\"\u003EHonduras\u003C\u002Foption\u003E\n              \u003Coption value=\"Hong Kong\"\u003EHong Kong\u003C\u002Foption\u003E\n              \u003Coption value=\"Hungary\"\u003EHungary\u003C\u002Foption\u003E\n              \u003Coption value=\"Iceland\"\u003EIceland\u003C\u002Foption\u003E\n              \u003Coption value=\"Indonesia\"\u003EIndonesia\u003C\u002Foption\u003E\n              \u003Coption value=\"India\"\u003EIndia\u003C\u002Foption\u003E\n              \u003Coption value=\"Iran\"\u003EIran\u003C\u002Foption\u003E\n              \u003Coption value=\"Iraq\"\u003EIraq\u003C\u002Foption\u003E\n              \u003Coption value=\"Ireland\"\u003EIreland\u003C\u002Foption\u003E\n              \u003Coption value=\"Isle of Man\"\u003EIsle of Man\u003C\u002Foption\u003E\n              \u003Coption value=\"Israel\"\u003EIsrael\u003C\u002Foption\u003E\n              \u003Coption value=\"Italy\"\u003EItaly\u003C\u002Foption\u003E\n              \u003Coption value=\"Jamaica\"\u003EJamaica\u003C\u002Foption\u003E\n              \u003Coption value=\"Japan\"\u003EJapan\u003C\u002Foption\u003E\n              \u003Coption value=\"Jordan\"\u003EJordan\u003C\u002Foption\u003E\n              \u003Coption value=\"Kazakhstan\"\u003EKazakhstan\u003C\u002Foption\u003E\n              \u003Coption value=\"Kenya\"\u003EKenya\u003C\u002Foption\u003E\n              \u003Coption value=\"Kiribati\"\u003EKiribati\u003C\u002Foption\u003E\n              \u003Coption value=\"Korea North\"\u003EKorea North\u003C\u002Foption\u003E\n              \u003Coption value=\"Korea Sout\"\u003EKorea South\u003C\u002Foption\u003E\n              \u003Coption value=\"Kuwait\"\u003EKuwait\u003C\u002Foption\u003E\n              \u003Coption value=\"Kyrgyzstan\"\u003EKyrgyzstan\u003C\u002Foption\u003E\n              \u003Coption value=\"Laos\"\u003ELaos\u003C\u002Foption\u003E\n              \u003Coption value=\"Latvia\"\u003ELatvia\u003C\u002Foption\u003E\n              \u003Coption value=\"Lebanon\"\u003ELebanon\u003C\u002Foption\u003E\n              \u003Coption value=\"Lesotho\"\u003ELesotho\u003C\u002Foption\u003E\n              \u003Coption value=\"Liberia\"\u003ELiberia\u003C\u002Foption\u003E\n              \u003Coption value=\"Libya\"\u003ELibya\u003C\u002Foption\u003E\n              \u003Coption value=\"Liechtenstein\"\u003ELiechtenstein\u003C\u002Foption\u003E\n              \u003Coption value=\"Lithuania\"\u003ELithuania\u003C\u002Foption\u003E\n              \u003Coption value=\"Luxembourg\"\u003ELuxembourg\u003C\u002Foption\u003E\n              \u003Coption value=\"Macau\"\u003EMacau\u003C\u002Foption\u003E\n              \u003Coption value=\"Macedonia\"\u003EMacedonia\u003C\u002Foption\u003E\n              \u003Coption value=\"Madagascar\"\u003EMadagascar\u003C\u002Foption\u003E\n              \u003Coption value=\"Malaysia\"\u003EMalaysia\u003C\u002Foption\u003E\n              \u003Coption value=\"Malawi\"\u003EMalawi\u003C\u002Foption\u003E\n              \u003Coption value=\"Maldives\"\u003EMaldives\u003C\u002Foption\u003E\n              \u003Coption value=\"Mali\"\u003EMali\u003C\u002Foption\u003E\n              \u003Coption value=\"Malta\"\u003EMalta\u003C\u002Foption\u003E\n              \u003Coption value=\"Marshall Islands\"\u003EMarshall Islands\u003C\u002Foption\u003E\n              \u003Coption value=\"Martinique\"\u003EMartinique\u003C\u002Foption\u003E\n              \u003Coption value=\"Mauritania\"\u003EMauritania\u003C\u002Foption\u003E\n              \u003Coption value=\"Mauritius\"\u003EMauritius\u003C\u002Foption\u003E\n              \u003Coption value=\"Mayotte\"\u003EMayotte\u003C\u002Foption\u003E\n              \u003Coption value=\"Mexico\"\u003EMexico\u003C\u002Foption\u003E\n              \u003Coption value=\"Midway Islands\"\u003EMidway Islands\u003C\u002Foption\u003E\n              \u003Coption value=\"Moldova\"\u003EMoldova\u003C\u002Foption\u003E\n              \u003Coption value=\"Monaco\"\u003EMonaco\u003C\u002Foption\u003E\n              \u003Coption value=\"Mongolia\"\u003EMongolia\u003C\u002Foption\u003E\n              \u003Coption value=\"Montserrat\"\u003EMontserrat\u003C\u002Foption\u003E\n              \u003Coption value=\"Morocco\"\u003EMorocco\u003C\u002Foption\u003E\n              \u003Coption value=\"Mozambique\"\u003EMozambique\u003C\u002Foption\u003E\n              \u003Coption value=\"Myanmar\"\u003EMyanmar\u003C\u002Foption\u003E\n              \u003Coption value=\"Nambia\"\u003ENambia\u003C\u002Foption\u003E\n              \u003Coption value=\"Nauru\"\u003ENauru\u003C\u002Foption\u003E\n              \u003Coption value=\"Nepal\"\u003ENepal\u003C\u002Foption\u003E\n              \u003Coption value=\"Netherland Antilles\"\u003ENetherland Antilles\u003C\u002Foption\u003E\n              \u003Coption value=\"Netherlands\"\u003ENetherlands (Holland, Europe)\u003C\u002Foption\u003E\n              \u003Coption value=\"Nevis\"\u003ENevis\u003C\u002Foption\u003E\n              \u003Coption value=\"New Caledonia\"\u003ENew Caledonia\u003C\u002Foption\u003E\n              \u003Coption value=\"New Zealand\"\u003ENew Zealand\u003C\u002Foption\u003E\n              \u003Coption value=\"Nicaragua\"\u003ENicaragua\u003C\u002Foption\u003E\n              \u003Coption value=\"Niger\"\u003ENiger\u003C\u002Foption\u003E\n              \u003Coption value=\"Nigeria\"\u003ENigeria\u003C\u002Foption\u003E\n              \u003Coption value=\"Niue\"\u003ENiue\u003C\u002Foption\u003E\n              \u003Coption value=\"Norfolk Island\"\u003ENorfolk Island\u003C\u002Foption\u003E\n              \u003Coption value=\"Norway\"\u003ENorway\u003C\u002Foption\u003E\n              \u003Coption value=\"Oman\"\u003EOman\u003C\u002Foption\u003E\n              \u003Coption value=\"Pakistan\"\u003EPakistan\u003C\u002Foption\u003E\n              \u003Coption value=\"Palau Island\"\u003EPalau Island\u003C\u002Foption\u003E\n              \u003Coption value=\"Palestine\"\u003EPalestine\u003C\u002Foption\u003E\n              \u003Coption value=\"Panama\"\u003EPanama\u003C\u002Foption\u003E\n              \u003Coption value=\"Papua New Guinea\"\u003EPapua New Guinea\u003C\u002Foption\u003E\n              \u003Coption value=\"Paraguay\"\u003EParaguay\u003C\u002Foption\u003E\n              \u003Coption value=\"Peru\"\u003EPeru\u003C\u002Foption\u003E\n              \u003Coption value=\"Phillipines\"\u003EPhilippines\u003C\u002Foption\u003E\n              \u003Coption value=\"Pitcairn Island\"\u003EPitcairn Island\u003C\u002Foption\u003E\n              \u003Coption value=\"Poland\"\u003EPoland\u003C\u002Foption\u003E\n              \u003Coption value=\"Portugal\"\u003EPortugal\u003C\u002Foption\u003E\n              \u003Coption value=\"Puerto Rico\"\u003EPuerto Rico\u003C\u002Foption\u003E\n              \u003Coption value=\"Qatar\"\u003EQatar\u003C\u002Foption\u003E\n              \u003Coption value=\"Republic of Montenegro\"\u003ERepublic of Montenegro\u003C\u002Foption\u003E\n              \u003Coption value=\"Republic of Serbia\"\u003ERepublic of Serbia\u003C\u002Foption\u003E\n              \u003Coption value=\"Reunion\"\u003EReunion\u003C\u002Foption\u003E\n              \u003Coption value=\"Romania\"\u003ERomania\u003C\u002Foption\u003E\n              \u003Coption value=\"Russia\"\u003ERussia\u003C\u002Foption\u003E\n              \u003Coption value=\"Rwanda\"\u003ERwanda\u003C\u002Foption\u003E\n              \u003Coption value=\"St Barthelemy\"\u003ESt Barthelemy\u003C\u002Foption\u003E\n              \u003Coption value=\"St Eustatius\"\u003ESt Eustatius\u003C\u002Foption\u003E\n              \u003Coption value=\"St Helena\"\u003ESt Helena\u003C\u002Foption\u003E\n              \u003Coption value=\"St Kitts-Nevis\"\u003ESt Kitts-Nevis\u003C\u002Foption\u003E\n              \u003Coption value=\"St Lucia\"\u003ESt Lucia\u003C\u002Foption\u003E\n              \u003Coption value=\"St Maarten\"\u003ESt Maarten\u003C\u002Foption\u003E\n              \u003Coption value=\"St Pierre & Miquelon\"\u003ESt Pierre & Miquelon\u003C\u002Foption\u003E\n              \u003Coption value=\"St Vincent & Grenadines\"\u003ESt Vincent & Grenadines\u003C\u002Foption\u003E\n              \u003Coption value=\"Saipan\"\u003ESaipan\u003C\u002Foption\u003E\n              \u003Coption value=\"Samoa\"\u003ESamoa\u003C\u002Foption\u003E\n              \u003Coption value=\"Samoa American\"\u003ESamoa American\u003C\u002Foption\u003E\n              \u003Coption value=\"San Marino\"\u003ESan Marino\u003C\u002Foption\u003E\n              \u003Coption value=\"Sao Tome & Principe\"\u003ESao Tome & Principe\u003C\u002Foption\u003E\n              \u003Coption value=\"Saudi Arabia\"\u003ESaudi Arabia\u003C\u002Foption\u003E\n              \u003Coption value=\"Senegal\"\u003ESenegal\u003C\u002Foption\u003E\n              \u003Coption value=\"Seychelles\"\u003ESeychelles\u003C\u002Foption\u003E\n              \u003Coption value=\"Sierra Leone\"\u003ESierra Leone\u003C\u002Foption\u003E\n              \u003Coption value=\"Singapore\"\u003ESingapore\u003C\u002Foption\u003E\n              \u003Coption value=\"Slovakia\"\u003ESlovakia\u003C\u002Foption\u003E\n              \u003Coption value=\"Slovenia\"\u003ESlovenia\u003C\u002Foption\u003E\n              \u003Coption value=\"Solomon Islands\"\u003ESolomon Islands\u003C\u002Foption\u003E\n              \u003Coption value=\"Somalia\"\u003ESomalia\u003C\u002Foption\u003E\n              \u003Coption value=\"South Africa\"\u003ESouth Africa\u003C\u002Foption\u003E\n              \u003Coption value=\"Spain\"\u003ESpain\u003C\u002Foption\u003E\n              \u003Coption value=\"Sri Lanka\"\u003ESri Lanka\u003C\u002Foption\u003E\n              \u003Coption value=\"Sudan\"\u003ESudan\u003C\u002Foption\u003E\n              \u003Coption value=\"Suriname\"\u003ESuriname\u003C\u002Foption\u003E\n              \u003Coption value=\"Swaziland\"\u003ESwaziland\u003C\u002Foption\u003E\n              \u003Coption value=\"Sweden\"\u003ESweden\u003C\u002Foption\u003E\n              \u003Coption value=\"Switzerland\"\u003ESwitzerland\u003C\u002Foption\u003E\n              \u003Coption value=\"Syria\"\u003ESyria\u003C\u002Foption\u003E\n              \u003Coption value=\"Tahiti\"\u003ETahiti\u003C\u002Foption\u003E\n              \u003Coption value=\"Taiwan\"\u003ETaiwan\u003C\u002Foption\u003E\n              \u003Coption value=\"Tajikistan\"\u003ETajikistan\u003C\u002Foption\u003E\n              \u003Coption value=\"Tanzania\"\u003ETanzania\u003C\u002Foption\u003E\n              \u003Coption value=\"Thailand\"\u003EThailand\u003C\u002Foption\u003E\n              \u003Coption value=\"Togo\"\u003ETogo\u003C\u002Foption\u003E\n              \u003Coption value=\"Tokelau\"\u003ETokelau\u003C\u002Foption\u003E\n              \u003Coption value=\"Tonga\"\u003ETonga\u003C\u002Foption\u003E\n              \u003Coption value=\"Trinidad & Tobago\"\u003ETrinidad & Tobago\u003C\u002Foption\u003E\n              \u003Coption value=\"Tunisia\"\u003ETunisia\u003C\u002Foption\u003E\n              \u003Coption value=\"Turkey\"\u003ETurkey\u003C\u002Foption\u003E\n              \u003Coption value=\"Turkmenistan\"\u003ETurkmenistan\u003C\u002Foption\u003E\n              \u003Coption value=\"Turks & Caicos Is\"\u003ETurks & Caicos Is\u003C\u002Foption\u003E\n              \u003Coption value=\"Tuvalu\"\u003ETuvalu\u003C\u002Foption\u003E\n              \u003Coption value=\"Uganda\"\u003EUganda\u003C\u002Foption\u003E\n              \u003Coption value=\"United Kingdom\"\u003EUnited Kingdom\u003C\u002Foption\u003E\n              \u003Coption value=\"Ukraine\"\u003EUkraine\u003C\u002Foption\u003E\n              \u003Coption value=\"United Arab Erimates\"\u003EUnited Arab Emirates\u003C\u002Foption\u003E\n              \u003Coption value=\"United States of America\"\u003EUnited States of America\u003C\u002Foption\u003E\n              \u003Coption value=\"Uraguay\"\u003EUruguay\u003C\u002Foption\u003E\n              \u003Coption value=\"Uzbekistan\"\u003EUzbekistan\u003C\u002Foption\u003E\n              \u003Coption value=\"Vanuatu\"\u003EVanuatu\u003C\u002Foption\u003E\n              \u003Coption value=\"Vatican City State\"\u003EVatican City State\u003C\u002Foption\u003E\n              \u003Coption value=\"Venezuela\"\u003EVenezuela\u003C\u002Foption\u003E\n              \u003Coption value=\"Vietnam\"\u003EVietnam\u003C\u002Foption\u003E\n              \u003Coption value=\"Virgin Islands (Brit)\"\u003EVirgin Islands (Brit)\u003C\u002Foption\u003E\n              \u003Coption value=\"Virgin Islands (USA)\"\u003EVirgin Islands (USA)\u003C\u002Foption\u003E\n              \u003Coption value=\"Wake Island\"\u003EWake Island\u003C\u002Foption\u003E\n              \u003Coption value=\"Wallis & Futana Is\"\u003EWallis & Futana Is\u003C\u002Foption\u003E\n              \u003Coption value=\"Yemen\"\u003EYemen\u003C\u002Foption\u003E\n              \u003Coption value=\"Zaire\"\u003EZaire\u003C\u002Foption\u003E\n              \u003Coption value=\"Zambia\"\u003EZambia\u003C\u002Foption\u003E\n              \u003Coption value=\"Zimbabwe\"\u003EZimbabwe\u003C\u002Foption\u003E\n            \u003C\u002Fselect\u003E \n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n\n        \u003Ctr\u003E\n          \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;\"\u003E\n             \u003Clabel for=\"income\"\u003EQ7. What was the total income in your household during the past 12 months? (Please be honest here) \u003C\u002Flabel\u003E\n          \u003C\u002Fth\u003E\n          \u003Ctd style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%; padding-bottom: 5pt\"\u003E\n              \u003Cselect name=\"income\" id=\"income\" required\u003E\n                \u003Coption value=\"\"\u003E ----- \u003C\u002Foption\u003E\n                \u003Coption value=\"Less than $25,000\"\u003E Less than $25,000 \u003C\u002Foption\u003E\n                \u003Coption value=\"$25,000 to $34,999\"\u003E $25,000 to $34,999 \u003C\u002Foption\u003E\n                \u003Coption value=\"$35,000 to $49,999\"\u003E $35,000 to $49,999 \u003C\u002Foption\u003E\n                \u003Coption value=\"$50,000 to $74,999\"\u003E $50,000 to $74,999 \u003C\u002Foption\u003E\n                \u003Coption value=\"$75,000 to $99,999\"\u003E $75,000 to $99,999 \u003C\u002Foption\u003E\n                \u003Coption value=\"$100,000 to $149,999\"\u003E $100,000 to $149,999 \u003C\u002Foption\u003E\n                \u003Coption value=\"$150,000 to $199,999\"\u003E $150,000 to $199,999 \u003C\u002Foption\u003E\n                \u003Coption value=\"$200,000 or more\"\u003E $200,000 or more \u003C\u002Foption\u003E\n                \u003Coption value= \"I don't know\"\u003E I don't know \u003C\u002Foption\u003E\n                \u003Coption value= \"Prefer not to say\"\u003E I prefer not to answer this question \u003C\u002Foption\u003E\n                \u003C\u002Fselect\u003E \n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n\n        \u003Ctr\u003E\n          \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;\"\u003E\n            \u003Clabel for=\"Political_Ideology_identity_1\"\u003EQ8. My political attitudes and beliefs are an important reflection of who I am... \u003C\u002Flabel\u003E\n          \u003C\u002Fth\u003E\n      \n          \u003Ctd style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Cselect name=\"Political_Ideology_identity_1\" id=\"Political_Ideology_identity_1\" required\u003E\n                \u003Coption value=\"\"\u003E ----- \u003C\u002Foption\u003E\n                \u003Coption value=\"Strongly Agree\"\u003E Strongly Agree \u003C\u002Foption\u003E\n                \u003Coption value=\"Moderately Agree\"\u003E Moderately Agree \u003C\u002Foption\u003E\n                \u003Coption value=\"Somewhat Agree\"\u003E Somewhat Agree \u003C\u002Foption\u003E\n                \u003Coption value=\"Neither agree nor disagree\"\u003E Neither agree nor disagree \u003C\u002Foption\u003E\n                \u003Coption value=\"Somewhat disagree\"\u003E Somewhat disagree \u003C\u002Foption\u003E\n                \u003Coption value=\"Moderately disagree\"\u003E Moderately disagree \u003C\u002Foption\u003E\n                \u003Coption value=\"Strongly disagree\"\u003E Strongly disagree \u003C\u002Foption\u003E\n               \u003C\u002Fselect\u003E \n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n\n\n        \u003Ctr\u003E\n          \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;\"\u003E\n            \u003Clabel for=\"Political_Ideology_social_issues\"\u003EQ9. On social issues I am... \u003C\u002Flabel\u003E\n          \u003C\u002Fth\u003E\n      \n          \u003Ctd style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Cselect name=\"Political_Ideology_social_issues\" id=\"Political_Ideology_social_issues\" required\u003E\n                \u003Coption value=\"\"\u003E ----- \u003C\u002Foption\u003E\n                \u003Coption value=\"Strongly Liberal\"\u003E Strongly Liberal \u003C\u002Foption\u003E\n                \u003Coption value=\"Somewhat Liberal\"\u003E Somewhat Liberal \u003C\u002Foption\u003E\n                \u003Coption value=\"Moderate\"\u003E Moderate \u003C\u002Foption\u003E\n                \u003Coption value=\"Somewhat Conservative\"\u003E Somewhat Conservative \u003C\u002Foption\u003E\n                \u003Coption value=\"Strongly Conservative\"\u003E Strongly Conservative \u003C\u002Foption\u003E\n               \u003C\u002Fselect\u003E \n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n\n       \u003Ctr\u003E\n          \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;\"\u003E\n            \u003Clabel for=\"Political_Ideology_economic_issues\"\u003EQ10. On economic issues I am... \u003C\u002Flabel\u003E\n          \u003C\u002Fth\u003E\n      \n          \u003Ctd style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Cselect name=\"Political_Ideology_economic_issues\" id=\"Political_Ideology_economic_issues\" required\u003E\n                \u003Coption value=\"\"\u003E ----- \u003C\u002Foption\u003E\n                \u003Coption value=\"Strongly Liberal\"\u003E Strongly Liberal \u003C\u002Foption\u003E\n                \u003Coption value=\"Somewhat Liberal\"\u003E Somewhat Liberal \u003C\u002Foption\u003E\n                \u003Coption value=\"Moderate\"\u003E Moderate \u003C\u002Foption\u003E\n                \u003Coption value=\"Somewhat Conservative\"\u003E Somewhat Conservative \u003C\u002Foption\u003E\n                \u003Coption value=\"Strongly Conservative\"\u003E Strongly Conservative \u003C\u002Foption\u003E\n               \u003C\u002Fselect\u003E \n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n\n       \u003Ctr\u003E\n          \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;\"\u003E\n            \u003Clabel for=\"Religious_Affiliation_General\"\u003EQ11. With which of the following do you identify? \u003C\u002Flabel\u003E\n          \u003C\u002Fth\u003E\n      \n          \u003Ctd style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Cselect name=\"Religious_Affiliation_General\" id=\"Religious_Affiliation_General\" required\u003E\n                \u003Coption value=\"\"\u003E ----- \u003C\u002Foption\u003E\n                \u003Coption value=\"Agnostic\"\u003E Agnostic \u003C\u002Foption\u003E\n                \u003Coption value=\"Atheist\"\u003E Atheist \u003C\u002Foption\u003E\n                \u003Coption value=\"Baha'i\"\u003E Baha'i \u003C\u002Foption\u003E\n                \u003Coption value=\"Buddhist\"\u003E Buddhist \u003C\u002Foption\u003E\n                \u003Coption value=\"Chinese Traditional\"\u003E Chinese Traditional \u003C\u002Foption\u003E\n                \u003Coption value=\"Christian\"\u003E Christian \u003C\u002Foption\u003E\n                \u003Coption value=\"Hindu\"\u003E Hindu \u003C\u002Foption\u003E\n                \u003Coption value=\"Humanist\"\u003E Humanist \u003C\u002Foption\u003E\n                \u003Coption value=\"Jewish\"\u003E Jewish \u003C\u002Foption\u003E\n                \u003Coption value=\"Muslim\"\u003E Muslim \u003C\u002Foption\u003E\n                \u003Coption value=\"No religion\"\u003E No religion \u003C\u002Foption\u003E\n                \u003Coption value=\"Other not listed\"\u003E Other not listed \u003C\u002Foption\u003E\n                \u003Coption value=\"Sikh\"\u003E Sikh \u003C\u002Foption\u003E\n                \u003Coption value=\"Taoist\"\u003E Taoist \u003C\u002Foption\u003E\n               \u003C\u002Fselect\u003E \n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n\n      \u003C\u002Ftable\u003E\n      \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Press this \u003Cbutton type=\"submit\" form=\"Demographics_2\"\u003E button \u003C\u002Fbutton\u003E in order to continue.\n\u003C\u002Ffooter\u003E",
          "scrollTop": true,
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "Demographics_2"
        },
        {
          "type": "lab.html.Form",
          "content": "  \u003Cheader\u003E\u003Ch2 style=\"color:blue\"\u003E Please answer the following questions honestly \u003C\u002Fh2\u003E\u003C\u002Fheader\u003E\n\n  \u003Cstyle\u003E \n    td:not(:first-child) {\n    padding-top:25pt;\n    padding-bottom:25pt;\n    }\n  \u003C\u002Fstyle\u003E \n\n \u003Cmain class=\"fullscreen\"\u003E\n   \u003C!-- ask 3 questions: age, gender, education --\u003E\n      \n    \u003Cform id =\"Religious_Affiliation_Scale\" required\u003E\n      \u003Ctable\u003E\n\n        \u003Ctr\u003E\n          \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;\"\u003E\n             \u003Clabel for=\"RAS_Q1\"\u003EQ1. There is a life after death\u003C\u002Flabel\u003E\n          \u003C\u002Fth\u003E\n          \u003Ctd style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%; padding-bottom: 5pt\"\u003E\n              \u003Cselect name=\"RAS_Q1\" id=\"RAS_Q1\" required\u003E\n                \u003Coption value=\"\"\u003E ----- \u003C\u002Foption\u003E\n                \u003Coption value=\"I strongly disagree\"\u003E I strongly disagree \u003C\u002Foption\u003E\n                \u003Coption value=\"I disagree\"\u003E I disagree \u003C\u002Foption\u003E\n                \u003Coption value=\"I don't know\"\u003E I don't know \u003C\u002Foption\u003E\n                \u003Coption value=\"I agree\"\u003E I agree \u003C\u002Foption\u003E\n                \u003Coption value=\"I strongly agree\"\u003E I strongly agree \u003C\u002Foption\u003E\n                \u003C\u002Fselect\u003E \n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n\n        \u003Ctr\u003E\n          \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;\"\u003E\n             \u003Clabel for=\"RAS_Q2\"\u003EQ2. There is a heaven where people who have led good lives are eternally rewarded\u003C\u002Flabel\u003E\n          \u003C\u002Fth\u003E\n          \u003Ctd style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%; padding-bottom: 5pt\"\u003E\n              \u003Cselect name=\"RAS_Q2\" id=\"RAS_Q2\" required\u003E\n                \u003Coption value=\"\"\u003E ----- \u003C\u002Foption\u003E\n                \u003Coption value=\"I strongly disagree\"\u003E I strongly disagree \u003C\u002Foption\u003E\n                \u003Coption value=\"I disagree\"\u003E I disagree \u003C\u002Foption\u003E\n                \u003Coption value=\"I don't know\"\u003E I don't know \u003C\u002Foption\u003E\n                \u003Coption value=\"I agree\"\u003E I agree \u003C\u002Foption\u003E\n                \u003Coption value=\"I strongly agree\"\u003E I strongly agree \u003C\u002Foption\u003E\n                \u003C\u002Fselect\u003E \n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n\n        \u003Ctr\u003E\n          \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;\"\u003E\n             \u003Clabel for=\"RAS_Q3\"\u003EQ3. There is a hell where people who have led bad lives and die without being sorry are eternally punished\u003C\u002Flabel\u003E\n          \u003C\u002Fth\u003E\n          \u003Ctd style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%; padding-bottom: 5pt\"\u003E\n              \u003Cselect name=\"RAS_Q3\" id=\"RAS_Q3\" required\u003E\n                \u003Coption value=\"\"\u003E ----- \u003C\u002Foption\u003E\n                \u003Coption value=\"I strongly disagree\"\u003E I strongly disagree \u003C\u002Foption\u003E\n                \u003Coption value=\"I disagree\"\u003E I disagree \u003C\u002Foption\u003E\n                \u003Coption value=\"I don't know\"\u003E I don't know \u003C\u002Foption\u003E\n                \u003Coption value=\"I agree\"\u003E I agree \u003C\u002Foption\u003E\n                \u003Coption value=\"I strongly agree\"\u003E I strongly agree \u003C\u002Foption\u003E\n                \u003C\u002Fselect\u003E \n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n\n        \u003Ctr\u003E\n          \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;\"\u003E\n             \u003Clabel for=\"RAS_Q4\"\u003EQ4. Religious miracles occur\u003C\u002Flabel\u003E\n          \u003C\u002Fth\u003E\n          \u003Ctd style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%; padding-bottom: 5pt\"\u003E\n              \u003Cselect name=\"RAS_Q4\" id=\"RAS_Q4\" required\u003E\n                \u003Coption value=\"\"\u003E ----- \u003C\u002Foption\u003E\n                \u003Coption value=\"I strongly disagree\"\u003E I strongly disagree \u003C\u002Foption\u003E\n                \u003Coption value=\"I disagree\"\u003E I disagree \u003C\u002Foption\u003E\n                \u003Coption value=\"I don't know\"\u003E I don't know \u003C\u002Foption\u003E\n                \u003Coption value=\"I agree\"\u003E I agree \u003C\u002Foption\u003E\n                \u003Coption value=\"I strongly agree\"\u003E I strongly agree \u003C\u002Foption\u003E\n                \u003C\u002Fselect\u003E \n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n\n        \u003Ctr\u003E\n          \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;\"\u003E\n             \u003Clabel for=\"RAS_Q5\"\u003EQ5. Angels are active in the world\u003C\u002Flabel\u003E\n          \u003C\u002Fth\u003E\n          \u003Ctd style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%; padding-bottom: 5pt\"\u003E\n              \u003Cselect name=\"RAS_Q5\" id=\"RAS_Q5\" required\u003E\n                \u003Coption value=\"\"\u003E ----- \u003C\u002Foption\u003E\n                \u003Coption value=\"I strongly disagree\"\u003E I strongly disagree \u003C\u002Foption\u003E\n                \u003Coption value=\"I disagree\"\u003E I disagree \u003C\u002Foption\u003E\n                \u003Coption value=\"I don't know\"\u003E I don't know \u003C\u002Foption\u003E\n                \u003Coption value=\"I agree\"\u003E I agree \u003C\u002Foption\u003E\n                \u003Coption value=\"I strongly agree\"\u003E I strongly agree \u003C\u002Foption\u003E\n                \u003C\u002Fselect\u003E \n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n\n        \u003Ctr\u003E\n          \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;\"\u003E\n             \u003Clabel for=\"RAS_Q6\"\u003EQ6. Demons are active in the world\u003C\u002Flabel\u003E\n          \u003C\u002Fth\u003E\n          \u003Ctd style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%; padding-bottom: 5pt\"\u003E\n              \u003Cselect name=\"RAS_Q6\" id=\"RAS_Q6\" required\u003E\n                \u003Coption value=\"\"\u003E ----- \u003C\u002Foption\u003E\n                \u003Coption value=\"I strongly disagree\"\u003E I strongly disagree \u003C\u002Foption\u003E\n                \u003Coption value=\"I disagree\"\u003E I disagree \u003C\u002Foption\u003E\n                \u003Coption value=\"I don't know\"\u003E I don't know \u003C\u002Foption\u003E\n                \u003Coption value=\"I agree\"\u003E I agree \u003C\u002Foption\u003E\n                \u003Coption value=\"I strongly agree\"\u003E I strongly agree \u003C\u002Foption\u003E\n                \u003C\u002Fselect\u003E \n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n\n        \u003Ctr\u003E\n          \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;\"\u003E\n             \u003Clabel for=\"RAS_Q7\"\u003EQ7. People have an immaterial soul, a part of themselves that is beyond their merely physiological and physical properties\u003C\u002Flabel\u003E\n          \u003C\u002Fth\u003E\n          \u003Ctd style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%; padding-bottom: 5pt\"\u003E\n              \u003Cselect name=\"RAS_Q7\" id=\"RAS_Q7\" required\u003E\n                \u003Coption value=\"\"\u003E ----- \u003C\u002Foption\u003E\n                \u003Coption value=\"I strongly disagree\"\u003E I strongly disagree \u003C\u002Foption\u003E\n                \u003Coption value=\"I disagree\"\u003E I disagree \u003C\u002Foption\u003E\n                \u003Coption value=\"I don't know\"\u003E I don't know \u003C\u002Foption\u003E\n                \u003Coption value=\"I agree\"\u003E I agree \u003C\u002Foption\u003E\n                \u003Coption value=\"I strongly agree\"\u003E I strongly agree \u003C\u002Foption\u003E\n                \u003C\u002Fselect\u003E \n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n\n        \u003Ctr\u003E\n          \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;\"\u003E\n             \u003Clabel for=\"RAS_Q8\"\u003EQ8. There is a devil\u002FSatan \u003C\u002Flabel\u003E\n          \u003C\u002Fth\u003E\n          \u003Ctd style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%; padding-bottom: 5pt\"\u003E\n              \u003Cselect name=\"RAS_Q8\" id=\"RAS_Q8\" required\u003E\n                \u003Coption value=\"\"\u003E ----- \u003C\u002Foption\u003E\n                \u003Coption value=\"I strongly disagree\"\u003E I strongly disagree \u003C\u002Foption\u003E\n                \u003Coption value=\"I disagree\"\u003E I disagree \u003C\u002Foption\u003E\n                \u003Coption value=\"I don't know\"\u003E I don't know \u003C\u002Foption\u003E\n                \u003Coption value=\"I agree\"\u003E I agree \u003C\u002Foption\u003E\n                \u003Coption value=\"I strongly agree\"\u003E I strongly agree \u003C\u002Foption\u003E\n                \u003C\u002Fselect\u003E \n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n\n        \u003C\u002Ftable\u003E\n      \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Press this \u003Cbutton type=\"submit\" form=\"Religious_Affiliation_Scale\"\u003E button \u003C\u002Fbutton\u003E in order to continue.\n\u003C\u002Ffooter\u003E",
          "scrollTop": true,
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "Religious_Affiliation_Scale"
        }
      ]
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cheader\u003E\n  \u003Cimg src=\"static\u002FPart_2.jpg\" height = \"45%\" width=\"45%\"\u003E\n\u003C\u002Fheader\u003E\n\n   \u003Cmain class=\"fullscreen\" style=\"padding-bottom:2pt\"\u003E\n  \u003C!-- ask 1 question: ID --\u003E\n      \n      \u003Cform id =\"Part 1\"\u003E\n      \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Press this \u003Cbutton type=\"submit\" form=\"Part 1\"\u003E button \u003C\u002Fbutton\u003E in order to continue.\n\u003C\u002Ffooter\u003E",
      "scrollTop": true,
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "Part 2"
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {
        "keypress(Space)": "continue"
      },
      "messageHandlers": {},
      "title": "Instructions",
      "content": "\u003Cheader\u003E\r\n\u003Ch1 style=\"color:blue\"\u003EInstructions: Please read carefully\u003C\u002Fh1\u003E\u003Cbr\u003E\r\n  \u003C\u002Fheader\u003E\r\n\r\n\u003Cmain\u003E\r\n\u003Cp style=\"text-align:left; font-family: Helvetica; font-size: 20pt;margin-left:40pt;margin-right:50pt;line-height: 150%\"\u003E In this study we are interested in \u003Cstrong\u003E how people remember and react to what they see online. \u003C\u002Fstrong\u003E You are going to watch a video taken from a YouTube channel. The person who makes these videos is called \u003Cstrong\u003E Chris. \u003C\u002Fstrong\u003E \u003C\u002Fp\u003E\r\n\r\n\u003Cp style=\"text-align:left; font-family: Helvetica; font-size: 20pt;margin-left:40pt;margin-right:50pt;line-height: 150%\"\u003EPlease watch Chris' video and pay close attention to what he says. We will ask you questions about this later on. \u003C\u002Fp\u003E \r\n\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter style =\" font-family: Helvetica; font-size: 18pt; content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Ch4\u003E\u003Cb\u003E Press the \u003Ckbd\u003E spacebar \u003C\u002Fkbd\u003E to continue.\u003C\u002Fh4\u003E\u003C\u002Fb\u003E \r\n\u003C\u002Ffooter\u003E "
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "parameters": {},
      "responses": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.state.condition = this.random.choice(['C1. Positive_Video_IAT_First (Con B First)', 'C2. Positive_Video_SR_First (Con B First)','C3. Negative_Video_IAT_First (Con B First)', 'C4. Negative_Video_SR_First (Con B First)'])

}
      },
      "title": "Counterbalancing_Videos",
      "content": [
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "parameters": {},
          "responses": {},
          "messageHandlers": {},
          "title": "C1. Positive_Video_IAT_First (Con B First)",
          "tardy": true,
          "skip": "${ this.state.condition !== 'C1. Positive_Video_IAT_First (Con B First)' }",
          "content": [
            {
              "type": "lab.html.Screen",
              "files": {},
              "parameters": {},
              "responses": {
                "keypress(Enter)": "Continue"
              },
              "messageHandlers": {},
              "title": "Video_Positive_Genuine",
              "content": "\u003Cheader\u003E\r\n  \u003Ch3\u003E\u003Cp\u003E Please watch the video from start to finish and pay attention to what Chris says.\u003C\u002Fp\u003E \u003Cp\u003EMake sure your volume is turned up and the subtitles are switched on. \u003C\u002Fp\u003E \u003C\u002Fh3\u003E \u003C\u002Fheader\u003E\r\n\r\n\u003Cmain style=\"margin:0%; content-horizontal-center content-vertical-center\"\u003E\r\n\r\n\u003Ciframe width=\"1000pt\" height=\"700pt\"\r\nsrc=\"https:\u002F\u002Fwww.youtube-nocookie.com\u002Fembed\u002FBkDv-qQycoY?cc_load_policy=1&autoplay=0\" allow=\"autoplay\"\u003E\r\n\u003C\u002Fiframe\u003E\r\n\r\n\u003C\u002Fmain\u003E​\r\n\r\n\u003Cfooter style=\"padding:5pt; font-size:18pt;text-align:center;\"\u003E\r\n    Please only press the \u003Ckbd\u003E Enter key \u003C\u002Fkbd\u003E once you have watched the entire video from start to finish. \r\n    \u003C\u002Ffooter\u003E\r\n    \r\n"
            },
            {
              "type": "lab.html.Form",
              "content": "\u003Chead\u003E\n\u003Cstyle\u003E\ntable, td, th {border: 0pt solid black;}\n\ntable {border-collapse: collapse;width: 90%;}\n\nth {height: 90%;}\n\u003C\u002Fstyle\u003E\n\u003C\u002Fhead\u003E\n\n\u003Cheader\u003E\u003Ch3 style=\"color:green; font-size:22pt\"\u003E Final Questions (Part 1)\u003C\u002Fh3\u003E \n\u003C!-- instructions --\u003E\n\n\u003Cmain\u003E\n  \u003C!-- ask 4 questions:  --\u003E\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:16pt;\"\u003E\n    \u003Cform id =\"Memory_And_Diagnosticity_Questions\" required\u003E\n      \u003Ctable id=\"Memory_of_Video_Content\"\u003E\n                 \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Clabel for=\"Memory_of_Video_Content\"\u003E  \u003Cp\u003E 1. You just watched a YouTube video from a person called Chris. What were the main things that Chris said in his video? Please try to remember as much from the video as possible. \u003C\u002Fp\u003E \u003C\u002Flabel\u003E\n  \n\u003Cp\u003E\n\u003Ctextarea name = \"Memory_of_Video_Content\" id=\"Memory_of_Video_Content\" size = \"35\" style = \"width: 1000px; height: 250px;\" autocomplete = \"off\" required\u003E\u003C\u002Ftextarea\u003E\n\u003C\u002Fp\u003E\n      \u003Ctable id=\"Diagnosticity_Question\"\u003E\n                 \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Clabel for=\"Diagnosticity_Question\"\u003E  2. During the video Chris provided information about himself. Do you think that this information revealed something about the type of person Chris really is (i.e., his true character)? \u003C\u002Flabel\u003E\n            \u003C\u002Fth\u003E\n               \u003Ctr\u003E\n            \u003Ctd style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Cselect name=\"Diagnosticity_Question\" id=\"Diagnosticity_Question\" required\u003E\n                \u003Coption value=\"\"\u003E ----- \u003C\u002Foption\u003E\n                \u003Coption value=\"Strongly_Diagnostic\"\u003E The info completely revealed Chris' true character \u003C\u002Foption\u003E\n                \u003Coption value=\"Moderately_Diagnostic\"\u003E The info was moderately revealing of Chris' true character   \u003C\u002Foption\u003E\n                \u003Coption value=\"Slightly_Diagnostic\"\u003E The info only slightly revealed Chris' true character \u003C\u002Foption\u003E\n                \u003Coption value=\"Not_Diagnostic\"\u003E The info revealed nothing about Chris' true character \u003C\u002Foption\u003E\n                \u003C\u002Fselect\u003E \n            \u003C\u002Ftd\u003E\n          \u003C\u002Ftr\u003E\n      \u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Please click on this \u003Cbutton type=\"submit\" form=\"Memory_And_Diagnosticity_Questions\"\u003E Submit \u003C\u002Fbutton\u003E button to continue.\n\u003C\u002Ffooter\u003E",
              "files": {},
              "parameters": {},
              "responses": {},
              "messageHandlers": {},
              "title": "Memory Questions"
            },
            {
              "type": "lab.flow.Sequence",
              "files": {},
              "parameters": {},
              "responses": {},
              "messageHandlers": {},
              "title": "IAT (Learning Consistent Block First)",
              "content": [
                {
                  "type": "lab.html.Screen",
                  "files": {},
                  "parameters": {},
                  "responses": {
                    "keypress(Space)": "continue"
                  },
                  "messageHandlers": {},
                  "title": "IAT_Generalinstructions: part 1 ",
                  "content": "\u003Cmain class = \"fullscreen\"\u003E\r\n  \u003C!-- present general instructions--\u003E\r\n  \u003Cdiv style=\"text-align:left; font-size:18pt; line-height: 150%\"\u003E\r\n    \u003Cp\u003E\r\n    You will first perform a task where you have to categorize words and images as quickly as possible.\u003C\u002Fp\u003E\r\n      \r\n      \u003Cp\u003E During this task: \u003C\u002Fp\u003E\r\n      \r\n      \u003Col\u003E\r\n\u003Cli\u003E Please keep this screen in full-screen mode at all times\u003C\u002Fli\u003E\r\n\u003Cli\u003E Do not close this screen or switch tabs and stay focused until the end of the task\u003C\u002Fli\u003E\r\n\u003Cli\u003E Make sure Caps Lock is switched off\u003C\u002Fli\u003E\r\n        \u003C\u002Fol\u003E\r\n        \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003C!-- space bar to continue--\u003E\r\n\u003Cfooter\u003E\r\n  Please press the \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E bar to start this task.\r\n\u003C\u002Ffooter\u003E "
                },
                {
                  "type": "lab.html.Screen",
                  "files": {},
                  "parameters": {},
                  "responses": {
                    "keypress(Space)": "Continue"
                  },
                  "messageHandlers": {},
                  "title": "IAT_GeneralInstructions: part 2 ",
                  "content": "\u003C!-- instruct about categories--\u003E\r\n\u003Cmain class=\"fullscreen\" style=\"padding-bottom:2pt; line-height: 150%\"\u003E\r\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:18pt; text-align:center\"\u003E\r\n    \u003Cdiv style=\"color:black;position:absolute;top:50pt; left:50%; margin-left:-300pt\"\u003E\r\n      Below you can see two categories and the images that belong to those categories:\u003C\u002Fdiv\u003E\r\n    \u003Cdiv style=\"position:absolute;top:100pt;left:50pt\"\u003E\r\n    Chris: \u003C\u002Fdiv\u003E\r\n    \u003Cdiv style=\"position:absolute;top:280pt;left:50pt\"\u003E\r\n    Bob: \u003C\u002Fdiv\u003E\r\n   \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003C!-- present stimuli--\u003E\r\n\u003Cdiv style=\"position:absolute;top:130pt;left:120pt\"\u003E \r\n  \u003Cimg src=\"static\u002FChris1.jpg\" width=\"100pt\" alt = \"Image not found\"\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003Cdiv style=\"position:absolute;top:130pt;left:240pt\"\u003E \r\n  \u003Cimg src=\"static\u002FChris2.jpg\" width=\"100pt\" alt = \"Image not found\"\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003Cdiv style=\"position:absolute;top:130pt;left:360pt\"\u003E \r\n  \u003Cimg src=\"static\u002FChris3.jpg\" width=\"100pt\" alt = \"Image not found\"\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003Cdiv style=\"position:absolute;top:130pt;left:480pt\"\u003E \r\n  \u003Cimg src=\"static\u002FChris4.jpg\" width=\"100pt\" alt = \"Image not found\"\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n\u003Cdiv style=\"position:absolute;top:310pt;left:120pt\"\u003E \r\n  \u003Cimg src=\"static\u002FBob1.jpg\" width=\"100pt\" alt = \"Image not found\"\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003Cdiv style=\"position:absolute;top:310pt;left:240pt\"\u003E \r\n  \u003Cimg src=\"static\u002FBob2.jpg\" width=\"100pt\" alt = \"Image not found\"\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003Cdiv style=\"position:absolute;top:310pt;left:360pt\"\u003E \r\n  \u003Cimg src=\"static\u002FBob3.jpg\" width=\"100pt\" alt = \"Image not found\"\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003Cdiv style=\"position:absolute;top:310pt;left:480pt\"\u003E \r\n  \u003Cimg src=\"static\u002FBob4.jpg\" width=\"100pt\" alt = \"Image not found\"\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Ch4\u003E\u003Cb\u003E Press the \u003Ckbd\u003E space bar \u003C\u002Fkbd\u003E to continue.\u003C\u002Fb\u003E \u003C\u002Fh4\u003E\r\n\u003C\u002Ffooter\u003E\r\n"
                },
                {
                  "type": "lab.html.Screen",
                  "files": {},
                  "parameters": {},
                  "responses": {
                    "keypress(Space)": "continue"
                  },
                  "messageHandlers": {},
                  "title": "IAT_block1_instructions ",
                  "content": "\u003Cmain class=\"fullscreen\" style=\"padding-bottom:2pt\"\u003E\r\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:18pt; text-align:center; line-height: 150%\"\u003E\r\n    \u003Cbr\u003E\u003Cbr\u003E During the next part of the study you will see an image or word in the middle of the screen. \r\n    \u003Cbr\u003E Your job is to assign that item to one of two categories. \r\n    \u003Cbr\u003E\u003Cbr\u003E Please respond AS QUICKLY AS POSSIBLE, while at the same time, try not to make too many mistakes and be as accurate as possible \u003Cbr\u003E(some mistakes are OK).\r\n    \u003Cbr\u003E\u003Cbr\u003E The two categories in the first part of the task are:\r\n    \u003Cbr\u003E\u003Cb\u003E \u003Cstrong\u003E Bob \u003C\u002Fstrong\u003E \u003C\u002Fb\u003E and \u003Cb\u003E \u003Cstrong\u003E Chris \u003C\u002Fstrong\u003E \u003C\u002Fb\u003E.\r\n    \u003Cbr\u003E\u003Cbr\u003EIf the item in the middle of the screen belongs to the \"Bob\" category, press the F key (left on the keyboard).\r\n    \u003Cbr\u003EIf the item in the middle of the screen belongs to the \"Chris\" category, press the J key (right on the keyboard).\r\n    \u003Cbr\u003E\u003Cbr\u003E Keep your fingers on the F and J keys at all times, in order to respond faster. \r\n    \u003Cbr\u003E\u003Cbr\u003EAvoid all distractions and pay attention. Try to answer as quickly as possible!\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Ch4\u003E\u003Cb\u003E Press the \u003Ckbd\u003E space bar \u003C\u002Fkbd\u003E when you have your fingers on the F and J keys and are ready to start the task.\u003C\u002Fb\u003E \u003C\u002Fh4\u003E\r\n\u003C\u002Ffooter\u003E\r\n"
                },
                {
                  "type": "lab.flow.Loop",
                  "files": {},
                  "parameters": {},
                  "templateParameters": [
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    }
                  ],
                  "sample": {
                    "mode": "draw-shuffle",
                    "n": "16"
                  },
                  "responses": {},
                  "messageHandlers": {},
                  "title": "IAT_trialsB1",
                  "shuffleGroups": [],
                  "template": {
                    "type": "lab.html.Frame",
                    "context": "\u003Cmain style=\"background-color:White;\"\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  left:110pt\"\u003E\n    Bob\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  right:110pt\"\u003E\n    Chris\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cmain data-labjs-section=\"frame\" style=\"background-color:white;\"\u003E\n  \u003C!-- Content gets inserted here --\u003E\n\u003C\u002Fmain\u003E",
                    "contextSelector": "[data-labjs-section=\"frame\"]",
                    "files": {},
                    "parameters": {},
                    "responses": {},
                    "messageHandlers": {},
                    "title": "Frame B1",
                    "content": {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "parameters": {},
                      "responses": {},
                      "messageHandlers": {},
                      "title": "TrialSequenceB1",
                      "tardy": true,
                      "skip": "${this.state.response==='escape'}",
                      "content": [
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI pre",
                          "timeout": "200"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {
                            "keypress(f)": "left",
                            "keypress(j)": "right",
                            "keydown(Insert)": "escape"
                          },
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
this.options.media.images.push('static/' + this.parameters.name)
}
                          },
                          "title": "Stimulus",
                          "content": " \u003C!-- present stimulus --\u003E \r\n    \u003Cdiv\u003E\r\n    ${parameters.stim}\r\n    \u003C\u002Fdiv\u003E\r\n",
                          "tardy": true,
                          "correctResponse": "${parameters.corr}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "Error",
                          "content": "  \u003Cdiv style=\"font-size: 3.5rem; color:red;\"\u003E\r\n    X\r\n  \u003C\u002Fdiv\u003E",
                          "timeout": "200",
                          "tardy": true,
                          "skip": "${state.correct}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI post",
                          "timeout": "200"
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "lab.html.Screen",
                  "files": {},
                  "parameters": {},
                  "responses": {
                    "keypress(Space)": "continue"
                  },
                  "messageHandlers": {},
                  "title": "IAT_block2_instructions ",
                  "content": "\u003C!-- present instructions IAT B2 --\u003E\r\n\u003Cmain class=\"fullscreen\" style=\"padding-bottom:2px\"\u003E\r\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:18px; text-align:center\"\u003E\r\n    \u003Cbr\u003E\u003Cbr\u003EYou will now see a different set of words. Your job is to indicate whether you like or dislike those words. \r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003EIf the item belongs to the category of \u003Cstrong\u003E things I dislike about someone \u003C\u002Fstrong\u003E, press the F key (left on the keyboard).\r\n    \u003Cbr\u003E\u003Cbr\u003EIf the item belongs to the category of \u003Cstrong\u003E things I like about someone \u003C\u002Fstrong\u003E press the J key (right on the keyboard).\r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003ETry to respond AS QUICKLY AS POSSIBLE without making too many mistakes!\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003C!-- space bar to continue --\u003E\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Ch4\u003E\u003Cb\u003E Press the \u003Ckbd\u003E space bar \u003C\u002Fkbd\u003E to start.\u003C\u002Fh4\u003E\u003C\u002Fb\u003E \r\n\u003C\u002Ffooter\u003E\r\n"
                },
                {
                  "type": "lab.flow.Loop",
                  "files": {},
                  "parameters": {},
                  "templateParameters": [
                    {
                      "stim": "Confident",
                      "corr": "right",
                      "name": "pos1",
                      "type": "word"
                    },
                    {
                      "stim": "Friendly",
                      "corr": "right",
                      "name": "pos2",
                      "type": "word"
                    },
                    {
                      "stim": "Cheerful",
                      "corr": "right",
                      "name": "pos3",
                      "type": "word"
                    },
                    {
                      "stim": "Loyal",
                      "corr": "right",
                      "name": "pos4",
                      "type": "word"
                    },
                    {
                      "stim": "Generous",
                      "corr": "right",
                      "name": "pos5",
                      "type": "word"
                    },
                    {
                      "stim": "Loving",
                      "corr": "right",
                      "name": "pos6",
                      "type": "word"
                    },
                    {
                      "stim": "Liar",
                      "corr": "left",
                      "name": "neg1",
                      "type": "word"
                    },
                    {
                      "stim": "Cruel",
                      "corr": "left",
                      "name": "neg2",
                      "type": "word"
                    },
                    {
                      "stim": "Evil",
                      "corr": "left",
                      "name": "neg3",
                      "type": "word"
                    },
                    {
                      "stim": "Ignorant",
                      "corr": "left",
                      "name": "neg4",
                      "type": "word"
                    },
                    {
                      "stim": "Manipulative",
                      "corr": "left",
                      "name": "neg5",
                      "type": "word"
                    },
                    {
                      "stim": "Rude",
                      "corr": "left",
                      "name": "neg6",
                      "type": "word"
                    },
                    {
                      "stim": "Warm",
                      "corr": "right",
                      "name": "pos7",
                      "type": "word"
                    },
                    {
                      "stim": "Funny",
                      "corr": "right",
                      "name": "pos8",
                      "type": "word"
                    },
                    {
                      "stim": "Selfish",
                      "corr": "left",
                      "name": "neg7",
                      "type": "word"
                    },
                    {
                      "stim": "Disloyal",
                      "corr": "left",
                      "name": "neg8",
                      "type": "word"
                    }
                  ],
                  "sample": {
                    "mode": "draw-shuffle",
                    "n": "16"
                  },
                  "responses": {},
                  "messageHandlers": {},
                  "title": "IAT_trialsB2",
                  "shuffleGroups": [],
                  "template": {
                    "type": "lab.html.Frame",
                    "context": "\u003Cmain style=\"background-color:white\"\u003E\n  \u003Cdiv style=\"font-size:30pt; position:absolute; top:60pt; left:90pt\"\u003E\n    I dislike\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style=\"font-size:30pt; position:absolute; top:60pt; right:110pt\"\u003E\n    I like\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cmain data-labjs-section=\"frame\" style=\"background-color:white;\"\u003E\n  \u003C!-- Content gets inserted here --\u003E\n\u003C\u002Fmain\u003E",
                    "contextSelector": "[data-labjs-section=\"frame\"]",
                    "files": {},
                    "parameters": {},
                    "responses": {},
                    "messageHandlers": {},
                    "title": "Frame B2",
                    "content": {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "parameters": {},
                      "responses": {},
                      "messageHandlers": {},
                      "title": "TrialSequenceB2",
                      "tardy": true,
                      "skip": "${this.state.response==='escape'}",
                      "content": [
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI pre",
                          "timeout": "200"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {
                            "keypress(f)": "left",
                            "keypress(j)": "right",
                            "keydown(Insert)": "escape"
                          },
                          "messageHandlers": {},
                          "title": "Stimulus",
                          "content": " \u003C!-- present stimulus --\u003E \r\n    \u003Cdiv style=\"color:black;font-size:40pt;\"\u003E\r\n    ${parameters.stim}\r\n    \u003C\u002Fdiv\u003E\r\n",
                          "tardy": true,
                          "correctResponse": "${parameters.corr}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "Error",
                          "content": "  \u003Cdiv style=\"font-size: 3.5rem; color:red;\"\u003E\r\n    X\r\n  \u003C\u002Fdiv\u003E",
                          "timeout": "200",
                          "tardy": true,
                          "skip": "${state.correct || parameters.type==='word'}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI post",
                          "timeout": "200"
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "lab.html.Screen",
                  "files": {},
                  "parameters": {},
                  "responses": {
                    "keypress(Space)": "continue"
                  },
                  "messageHandlers": {},
                  "title": "IAT_block3_instructions ",
                  "content": "\u003C!-- present instructions IAT B3 --\u003E\r\n\u003Cmain class=\"fullscreen\" style=\"padding-bottom:2px\"\u003E\r\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:18px; text-align:center\"\u003E\r\n    \u003Cbr\u003E\u003Cbr\u003EThe four categories of items you saw separately will now appear together. \r\n    \u003Cbr\u003E\u003Cbr\u003EItems that belong to the \"Bob\" and \"Chris\" categories,\r\n    \u003Cbr\u003E\u003Cbr\u003EAND\r\n    \u003Cbr\u003E\u003Cbr\u003Eitems that belong to the \"things I dislike about someone\" and \"things I like about someone\" categories. \r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003EWhen the item belongs to the \u003Cstrong\u003E Bob or I DISLIKE \u003C\u002Fstrong\u003E category press the F key.\r\n    \u003Cbr\u003E\u003Cbr\u003EWhen the item belongs to the \u003Cstrong\u003E Chris or I LIKE category \u003C\u002Fstrong\u003E , press the J key. \r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003EPlease remember to answer as quickly as possible (without making too many mistakes)!\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Ch4\u003E\u003Cb\u003E Press the \u003Ckbd\u003E space bar \u003C\u002Fkbd\u003E to start.\u003C\u002Fb\u003E\u003C\u002Fh4\u003E \r\n\u003C\u002Ffooter\u003E\r\n\r\n"
                },
                {
                  "type": "lab.flow.Loop",
                  "files": {},
                  "parameters": {},
                  "templateParameters": [
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "Confident",
                      "corr": "right",
                      "name": "pos1",
                      "type": "word"
                    },
                    {
                      "stim": "Friendly",
                      "corr": "right",
                      "name": "pos2",
                      "type": "word"
                    },
                    {
                      "stim": "Cheerful",
                      "corr": "right",
                      "name": "pos3",
                      "type": "word"
                    },
                    {
                      "stim": "Loyal",
                      "corr": "right",
                      "name": "pos4",
                      "type": "word"
                    },
                    {
                      "stim": "Generous",
                      "corr": "right",
                      "name": "pos5",
                      "type": "word"
                    },
                    {
                      "stim": "Loving",
                      "corr": "right",
                      "name": "pos6",
                      "type": "word"
                    },
                    {
                      "stim": "Liar",
                      "corr": "left",
                      "name": "neg1",
                      "type": "word"
                    },
                    {
                      "stim": "Cruel",
                      "corr": "left",
                      "name": "neg2",
                      "type": "word"
                    },
                    {
                      "stim": "Evil",
                      "corr": "left",
                      "name": "neg3",
                      "type": "word"
                    },
                    {
                      "stim": "Ignorant",
                      "corr": "left",
                      "name": "neg4",
                      "type": "word"
                    },
                    {
                      "stim": "Manipulative",
                      "corr": "left",
                      "name": "neg5",
                      "type": "word"
                    },
                    {
                      "stim": "Rude",
                      "corr": "left",
                      "name": "neg6",
                      "type": "word"
                    },
                    {
                      "stim": "Funny",
                      "corr": "right",
                      "name": "pos7",
                      "type": "word"
                    },
                    {
                      "stim": "Warm",
                      "corr": "right",
                      "name": "pos8",
                      "type": "word"
                    },
                    {
                      "stim": "Selfish",
                      "corr": "right",
                      "name": "neg7",
                      "type": "word"
                    },
                    {
                      "stim": "Disloyal",
                      "corr": "right",
                      "name": "neg8",
                      "type": "word"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    }
                  ],
                  "sample": {
                    "mode": "draw-shuffle",
                    "n": "32"
                  },
                  "responses": {},
                  "messageHandlers": {},
                  "title": "IAT_trialsB3",
                  "shuffleGroups": [],
                  "template": {
                    "type": "lab.html.Frame",
                    "context": "\u003Cmain style=\"background-color:white;\"\u003E\n  \u003Cdiv style=\"font-size:30pt; position:absolute; top:60pt; left:90pt\"\u003E\n    I dislike\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  left:110pt\"\u003E\n    Bob\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style=\"font-size:30pt; position:absolute; top:60pt; right:110pt\"\u003E\n    I like\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  right:110pt\"\u003E\n    Chris\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cmain data-labjs-section=\"frame\" style=\"background-color:white;\"\u003E\n  \u003C!-- Content gets inserted here --\u003E\n\u003C\u002Fmain\u003E",
                    "contextSelector": "[data-labjs-section=\"frame\"]",
                    "files": {},
                    "parameters": {},
                    "responses": {},
                    "messageHandlers": {},
                    "title": "Frame B3",
                    "content": {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "parameters": {},
                      "responses": {},
                      "messageHandlers": {},
                      "title": "TrialSequenceB3",
                      "tardy": true,
                      "skip": "${this.state.response==='escape'}",
                      "content": [
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI pre",
                          "timeout": "200"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {
                            "keypress(f)": "left",
                            "keypress(j)": "right",
                            "keydown(Insert)": "escape"
                          },
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
if (this.parameters.type==='pic'){
this.options.media.images.push('static/' + this.parameters.name);}
}
                          },
                          "title": "Stimulus",
                          "content": " \u003C!-- present stimulus --\u003E \r\n    \u003Cdiv style=\"color:black;font-size:40pt;\"\u003E\r\n    ${parameters.stim}\r\n    \u003C\u002Fdiv\u003E\r\n",
                          "tardy": true,
                          "correctResponse": "${parameters.corr}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "Error",
                          "content": "  \u003Cdiv style=\"font-size: 3.5rem; color:red;\"\u003E\r\n    X\r\n  \u003C\u002Fdiv\u003E",
                          "timeout": "200",
                          "tardy": true,
                          "skip": "${state.correct || parameters.type==='word'}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI post",
                          "timeout": "200"
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "lab.html.Screen",
                  "files": {},
                  "parameters": {},
                  "responses": {
                    "keypress(Space)": "continue"
                  },
                  "messageHandlers": {},
                  "title": "IAT_block4_instructions ",
                  "content": "\u003C!-- present instructions IAT B4 --\u003E\r\n\u003Cmain class=\"fullscreen\" style=\"padding-bottom:2pt\"\u003E\r\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:18pt; text-align:center\"\u003E\r\n    \u003Cbr\u003E\u003Cbr\u003E You will now sort items in the same categories again. \r\n    \u003Cbr\u003E\u003Cbr\u003ERemember to respond AS QUICKLY AS POSSIBLE without making too many mistakes. \r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003C!-- space bar to continue --\u003E\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Ch4\u003E\u003Cb\u003E Press the \u003Ckbd\u003E space bar \u003C\u002Fkbd\u003E to start.\u003C\u002Fb\u003E \u003C\u002Fh4\u003E\r\n\u003C\u002Ffooter\u003E\r\n"
                },
                {
                  "type": "lab.flow.Loop",
                  "files": {},
                  "parameters": {},
                  "templateParameters": [
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "Confident",
                      "corr": "right",
                      "name": "pos1",
                      "type": "word"
                    },
                    {
                      "stim": "Friendly",
                      "corr": "right",
                      "name": "pos2",
                      "type": "word"
                    },
                    {
                      "stim": "Cheerful",
                      "corr": "right",
                      "name": "pos3",
                      "type": "word"
                    },
                    {
                      "stim": "Loyal",
                      "corr": "right",
                      "name": "pos4",
                      "type": "word"
                    },
                    {
                      "stim": "Generous",
                      "corr": "right",
                      "name": "pos5",
                      "type": "word"
                    },
                    {
                      "stim": "Loving",
                      "corr": "right",
                      "name": "pos6",
                      "type": "word"
                    },
                    {
                      "stim": "Liar",
                      "corr": "left",
                      "name": "neg1",
                      "type": "word"
                    },
                    {
                      "stim": "Cruel",
                      "corr": "left",
                      "name": "neg2",
                      "type": "word"
                    },
                    {
                      "stim": "Evil",
                      "corr": "left",
                      "name": "neg3",
                      "type": "word"
                    },
                    {
                      "stim": "Ignorant",
                      "corr": "left",
                      "name": "neg4",
                      "type": "word"
                    },
                    {
                      "stim": "Manipulative",
                      "corr": "left",
                      "name": "neg5",
                      "type": "word"
                    },
                    {
                      "stim": "Rude",
                      "corr": "left",
                      "name": "neg6",
                      "type": "word"
                    },
                    {
                      "stim": "Funny",
                      "corr": "right",
                      "name": "pos7",
                      "type": "word"
                    },
                    {
                      "stim": "Warm",
                      "corr": "right",
                      "name": "pos8",
                      "type": "word"
                    },
                    {
                      "stim": "Selfish",
                      "corr": "left",
                      "name": "neg7",
                      "type": "word"
                    },
                    {
                      "stim": "Disloyal",
                      "corr": "left",
                      "name": "neg8",
                      "type": "word"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    }
                  ],
                  "sample": {
                    "mode": "draw-shuffle",
                    "n": "32"
                  },
                  "responses": {},
                  "messageHandlers": {},
                  "title": "IAT_trialsB4",
                  "shuffleGroups": [],
                  "template": {
                    "type": "lab.html.Frame",
                    "context": "\u003Cmain style=\"background-color:white;\"\u003E\n  \u003Cdiv style=\"font-size:30pt; position:absolute; top:60pt; left:90pt\"\u003E\n    I dislike\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  left:110pt\"\u003E\n    Bob\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style=\"font-size:30pt; position:absolute; top:60pt; right:110pt\"\u003E\n    I like\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  right:110pt\"\u003E\n    Chris\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cmain data-labjs-section=\"frame\" style=\"background-color:white;\"\u003E\n  \u003C!-- Content gets inserted here --\u003E\n\u003C\u002Fmain\u003E",
                    "contextSelector": "[data-labjs-section=\"frame\"]",
                    "files": {},
                    "parameters": {},
                    "responses": {},
                    "messageHandlers": {},
                    "title": "Frame B4",
                    "content": {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "parameters": {},
                      "responses": {},
                      "messageHandlers": {},
                      "title": "TrialSequenceB4",
                      "tardy": true,
                      "skip": "${this.state.response==='escape'}",
                      "content": [
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI pre",
                          "timeout": "200"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {
                            "keypress(f)": "left",
                            "keypress(j)": "right",
                            "keydown(Insert)": "escape"
                          },
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
if (this.parameters.type==='pic'){
this.options.media.images.push('static/' + this.parameters.name);}
}
                          },
                          "title": "Stimulus",
                          "content": " \u003C!-- present stimulus --\u003E \r\n    \u003Cdiv style=\"color:black;font-size:40pt;\"\u003E\r\n    ${parameters.stim}\r\n    \u003C\u002Fdiv\u003E\r\n",
                          "tardy": true,
                          "correctResponse": "${parameters.corr}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "Error",
                          "content": "  \u003Cdiv style=\"font-size: 3.5rem; color:red;\"\u003E\r\n    X\r\n  \u003C\u002Fdiv\u003E",
                          "timeout": "200",
                          "tardy": true,
                          "skip": "${state.correct || parameters.type==='word'}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI post",
                          "timeout": "200"
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "lab.html.Screen",
                  "files": {},
                  "parameters": {},
                  "responses": {
                    "keypress(Space)": "continue"
                  },
                  "messageHandlers": {},
                  "title": "IAT_block5_instructions ",
                  "content": "\u003C!-- present instructions IAT B5 --\u003E\r\n\u003Cmain class=\"fullscreen\" style=\"padding-bottom:2pt\"\u003E\r\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:18pt; text-align:center\"\u003E\r\n   \u003Cbr\u003E\u003Cbr\u003EIn the next part only two of the categories of items will be presented.\r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003EHowever: This time you will need to assign the items to the categories using the opposite key as before.\r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003EWhen the item belongs to the \u003Cstrong\u003E \"Chris\" \u003C\u002Fstrong\u003E category, press the F key. \r\n    \u003Cbr\u003E\u003Cbr\u003EWhen the item belongs to the \u003Cstrong\u003E \"Bob\" \u003C\u002Fstrong\u003E category, press the J key. \r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003EPlease answer as quickly as possible!\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003C!-- space bar to continue --\u003E\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Ch4\u003E\u003Cb\u003E Press the \u003Ckbd\u003E space bar \u003C\u002Fkbd\u003E to start.\u003C\u002Fb\u003E\u003C\u002Fh4\u003E \r\n\u003C\u002Ffooter\u003E \r\n"
                },
                {
                  "type": "lab.flow.Loop",
                  "files": {},
                  "parameters": {},
                  "templateParameters": [
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    }
                  ],
                  "sample": {
                    "mode": "draw-shuffle",
                    "n": "32"
                  },
                  "responses": {},
                  "messageHandlers": {},
                  "title": "IAT_trialsB5",
                  "shuffleGroups": [],
                  "template": {
                    "type": "lab.html.Frame",
                    "context": "\u003Cmain style=\"background-color:white;\"\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  left:110pt\"\u003E\n    Chris\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  right:110pt\"\u003E\n    Bob\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cmain data-labjs-section=\"frame\" style=\"background-color:white;\"\u003E\n  \u003C!-- Content gets inserted here --\u003E\n\u003C\u002Fmain\u003E",
                    "contextSelector": "[data-labjs-section=\"frame\"]",
                    "files": {},
                    "parameters": {},
                    "responses": {},
                    "messageHandlers": {},
                    "title": "Frame B5",
                    "content": {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "parameters": {},
                      "responses": {},
                      "messageHandlers": {},
                      "title": "TrialSequenceB5",
                      "tardy": true,
                      "skip": "${this.state.response==='escape'}",
                      "content": [
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI pre",
                          "timeout": "200"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {
                            "keypress(f)": "left",
                            "keypress(j)": "right",
                            "keydown(Insert)": "escape"
                          },
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
this.options.media.images.push('static/' + this.parameters.name)
}
                          },
                          "title": "Stimulus",
                          "content": " \u003C!-- present stimulus --\u003E \r\n    \u003Cdiv\u003E\r\n    ${parameters.stim}\r\n    \u003C\u002Fdiv\u003E\r\n",
                          "tardy": true,
                          "correctResponse": "${parameters.corr}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "Error",
                          "content": "  \u003Cdiv style=\"font-size: 3.5rem; color:red;\"\u003E\r\n    X\r\n  \u003C\u002Fdiv\u003E",
                          "timeout": "200",
                          "tardy": true,
                          "skip": "${state.correct}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI post",
                          "timeout": "200"
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "lab.html.Screen",
                  "files": {},
                  "parameters": {},
                  "responses": {
                    "keypress(Space)": "continue"
                  },
                  "messageHandlers": {},
                  "title": "IAT_block6_instructions",
                  "content": "\u003C!-- present instructions IAT B6 --\u003E\r\n\u003Cmain class=\"fullscreen\" style=\"padding-bottom:2pt\"\u003E\r\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:18pt; text-align:center\"\u003E\r\n    \u003Cp\u003E\u003Cbr\u003E\u003Cbr\u003EYou will now see the four categories once again. \r\n    \u003Cbr\u003E\u003Cbr\u003EItems that belong to the Chris and Bob categories, \r\n    \u003Cbr\u003E\u003Cbr\u003EAND \r\n    \u003Cbr\u003E\u003Cbr\u003Eitems that belong to the \"things I DISLIKE about someone\" and \"things I LIKE about someone\" categories.\r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003EWhen the item belongs to the \u003Cstrong\u003E Chris or I DISLIKE \u003C\u002Fstrong\u003E category, press the F key. \r\n    \u003Cbr\u003E\u003Cbr\u003EWhen the item belongs to the \u003Cstrong\u003E Bob or I LIKE \u003C\u002Fstrong\u003E category, press the J key. \r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003ETry to respond as quickly as possible without making too many mistakes! \r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003C!-- space bar to continue --\u003E\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Ch4\u003E\u003Cb\u003E Press the \u003Ckbd\u003E space bar \u003C\u002Fkbd\u003E to start.\u003C\u002Fb\u003E\u003C\u002Fh4\u003E\r\n\u003C\u002Ffooter\u003E \r\n"
                },
                {
                  "type": "lab.flow.Loop",
                  "files": {},
                  "parameters": {},
                  "templateParameters": [
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "Confident",
                      "corr": "right",
                      "name": "pos1",
                      "type": "word"
                    },
                    {
                      "stim": "Friendly",
                      "corr": "right",
                      "name": "pos2",
                      "type": "word"
                    },
                    {
                      "stim": "Cheerful",
                      "corr": "right",
                      "name": "pos3",
                      "type": "word"
                    },
                    {
                      "stim": "Loyal",
                      "corr": "right",
                      "name": "pos4",
                      "type": "word"
                    },
                    {
                      "stim": "Generous",
                      "corr": "right",
                      "name": "pos5",
                      "type": "word"
                    },
                    {
                      "stim": "Loving",
                      "corr": "right",
                      "name": "pos6",
                      "type": "word"
                    },
                    {
                      "stim": "Liar",
                      "corr": "left",
                      "name": "neg1",
                      "type": "word"
                    },
                    {
                      "stim": "Cruel",
                      "corr": "left",
                      "name": "neg2",
                      "type": "word"
                    },
                    {
                      "stim": "Evil",
                      "corr": "left",
                      "name": "neg3",
                      "type": "word"
                    },
                    {
                      "stim": "Ignorant",
                      "corr": "left",
                      "name": "neg4",
                      "type": "word"
                    },
                    {
                      "stim": "Manipulative",
                      "corr": "left",
                      "name": "neg5",
                      "type": "word"
                    },
                    {
                      "stim": "Rude",
                      "corr": "left",
                      "name": "neg6",
                      "type": "word"
                    },
                    {
                      "stim": "Funny",
                      "corr": "right",
                      "name": "pos7",
                      "type": "word"
                    },
                    {
                      "stim": "Warm",
                      "corr": "right",
                      "name": "pos8",
                      "type": "word"
                    },
                    {
                      "stim": "Selfish",
                      "corr": "left",
                      "name": "neg7",
                      "type": "word"
                    },
                    {
                      "stim": "Disloyal",
                      "corr": "left",
                      "name": "neg8",
                      "type": "word"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    }
                  ],
                  "sample": {
                    "mode": "draw-shuffle",
                    "n": "32"
                  },
                  "responses": {},
                  "messageHandlers": {},
                  "title": "IAT_trialsB6",
                  "shuffleGroups": [],
                  "template": {
                    "type": "lab.html.Frame",
                    "context": "\u003Cmain style=\"background-color:white;\"\u003E\n  \u003Cdiv style=\"font-size:30pt; position:absolute; top:60pt; left:90pt\"\u003E\n    I dislike\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  left:110pt\"\u003E\n    Chris\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style=\"font-size:30pt; position:absolute; top:60pt; right:110pt\"\u003E\n    I like\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  right:110pt\"\u003E\n    Bob\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cmain data-labjs-section=\"frame\" style=\"background-color:white;\"\u003E\n  \u003C!-- Content gets inserted here --\u003E\n\u003C\u002Fmain\u003E",
                    "contextSelector": "[data-labjs-section=\"frame\"]",
                    "files": {},
                    "parameters": {},
                    "responses": {},
                    "messageHandlers": {},
                    "title": "Frame B6",
                    "content": {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "parameters": {},
                      "responses": {},
                      "messageHandlers": {},
                      "title": "TrialSequenceB6",
                      "tardy": true,
                      "skip": "${this.state.response==='escape'}",
                      "content": [
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI pre",
                          "timeout": "200"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {
                            "keypress(f)": "left",
                            "keypress(j)": "right",
                            "keydown(Insert)": "escape"
                          },
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
if (this.parameters.type==='pic'){
this.options.media.images.push('static/' + this.parameters.name);}
}
                          },
                          "title": "Stimulus",
                          "content": " \u003C!-- present stimulus --\u003E \r\n    \u003Cdiv style=\"color:black;font-size:40pt;\"\u003E\r\n    ${parameters.stim}\r\n    \u003C\u002Fdiv\u003E\r\n",
                          "tardy": true,
                          "correctResponse": "${parameters.corr}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "Error",
                          "content": "  \u003Cdiv style=\"font-size: 3.5rem; color:red;\"\u003E\r\n    X\r\n  \u003C\u002Fdiv\u003E",
                          "timeout": "200",
                          "tardy": true,
                          "skip": "${state.correct || parameters.type==='word'}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI post",
                          "timeout": "200"
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "lab.html.Screen",
                  "files": {},
                  "parameters": {},
                  "responses": {
                    "keypress(Space)": "continue"
                  },
                  "messageHandlers": {},
                  "title": "IAT_block7_instructions ",
                  "content": "\u003C!-- present instructions IAT B7 --\u003E\r\n\u003Cmain class=\"fullscreen\" style=\"padding-bottom:2px\"\u003E\r\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:18px; text-align:center\"\u003E\r\n    \u003Cbr\u003E\u003Cbr\u003EYou will now sort the items in the same categories again. \r\n    \u003Cbr\u003E\u003Cbr\u003ERemember to answer as quickly as possible, while trying not to make too many mistakes. \r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003C!-- space bar to continue --\u003E\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Ch4\u003E\u003Cb\u003E Press the \u003Ckbd\u003E space bar \u003C\u002Fkbd\u003E to start.\u003C\u002Fb\u003E \u003C\u002Fh4\u003E\r\n\u003C\u002Ffooter\u003E \r\n"
                },
                {
                  "type": "lab.flow.Loop",
                  "files": {},
                  "parameters": {},
                  "templateParameters": [
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "Confident",
                      "corr": "right",
                      "name": "pos1",
                      "type": "word"
                    },
                    {
                      "stim": "Friendly",
                      "corr": "right",
                      "name": "pos2",
                      "type": "word"
                    },
                    {
                      "stim": "Cheerful",
                      "corr": "right",
                      "name": "pos3",
                      "type": "word"
                    },
                    {
                      "stim": "Loyal",
                      "corr": "right",
                      "name": "pos4",
                      "type": "word"
                    },
                    {
                      "stim": "Generous",
                      "corr": "right",
                      "name": "pos5",
                      "type": "word"
                    },
                    {
                      "stim": "Loving",
                      "corr": "right",
                      "name": "pos6",
                      "type": "word"
                    },
                    {
                      "stim": "Liar",
                      "corr": "left",
                      "name": "neg1",
                      "type": "word"
                    },
                    {
                      "stim": "Cruel",
                      "corr": "left",
                      "name": "neg2",
                      "type": "word"
                    },
                    {
                      "stim": "Evil",
                      "corr": "left",
                      "name": "neg3",
                      "type": "word"
                    },
                    {
                      "stim": "Ignorant",
                      "corr": "left",
                      "name": "neg4",
                      "type": "word"
                    },
                    {
                      "stim": "Manipulative",
                      "corr": "left",
                      "name": "neg5",
                      "type": "word"
                    },
                    {
                      "stim": "Rude",
                      "corr": "left",
                      "name": "neg6",
                      "type": "word"
                    },
                    {
                      "stim": "Funny",
                      "corr": "right",
                      "name": "pos7",
                      "type": "word"
                    },
                    {
                      "stim": "Warm",
                      "corr": "right",
                      "name": "pos8",
                      "type": "word"
                    },
                    {
                      "stim": "Selfish",
                      "corr": "left",
                      "name": "neg7",
                      "type": "word"
                    },
                    {
                      "stim": "Disloyal",
                      "corr": "left",
                      "name": "neg8",
                      "type": "word"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    }
                  ],
                  "sample": {
                    "mode": "draw-shuffle",
                    "n": "32"
                  },
                  "responses": {},
                  "messageHandlers": {},
                  "title": "IAT_trialsB7",
                  "shuffleGroups": [],
                  "template": {
                    "type": "lab.html.Frame",
                    "context": "\u003Cmain style=\"background-color:white;\"\u003E\n  \u003Cdiv style=\"font-size:30pt; position:absolute; top:60pt; left:90pt\"\u003E\n    I dislike\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  left:110pt\"\u003E\n    Chris\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style=\"font-size:30pt; position:absolute; top:60pt; right:110pt\"\u003E\n    I like\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  right:110pt\"\u003E\n    Bob\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cmain data-labjs-section=\"frame\" style=\"background-color:white;\"\u003E\n  \u003C!-- Content gets inserted here --\u003E\n\u003C\u002Fmain\u003E",
                    "contextSelector": "[data-labjs-section=\"frame\"]",
                    "files": {},
                    "parameters": {},
                    "responses": {},
                    "messageHandlers": {},
                    "title": "Frame B7",
                    "content": {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "parameters": {},
                      "responses": {},
                      "messageHandlers": {},
                      "title": "TrialSequenceB7",
                      "tardy": true,
                      "skip": "${this.state.response==='escape'}",
                      "content": [
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI pre",
                          "timeout": "200"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {
                            "keypress(f)": "left",
                            "keypress(j)": "right",
                            "keydown(Insert)": "escape"
                          },
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
if (this.parameters.type==='pic'){
this.options.media.images.push('static/' + this.parameters.name);}
}
                          },
                          "title": "Stimulus",
                          "content": " \u003C!-- present stimulus --\u003E \r\n    \u003Cdiv style=\"color:black;font-size:40pt;\"\u003E\r\n    ${parameters.stim}\r\n    \u003C\u002Fdiv\u003E\r\n",
                          "tardy": true,
                          "correctResponse": "${parameters.corr}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "Error",
                          "content": "  \u003Cdiv style=\"font-size: 3.5rem; color:red;\"\u003E\r\n    X\r\n  \u003C\u002Fdiv\u003E",
                          "timeout": "200",
                          "tardy": true,
                          "skip": "${state.correct || parameters.type==='word'}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI post",
                          "timeout": "200"
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "lab.html.Screen",
                  "files": {},
                  "parameters": {},
                  "responses": {
                    "keypress(Space)": "continue"
                  },
                  "messageHandlers": {},
                  "title": "Thank You",
                  "content": "\u003Cmain class = \"fullscreen\"\u003E\r\n  \u003C!-- present general instructions--\u003E\r\n  \u003Cdiv style=\"text-align:left; font-size:18pt; line-height: 150%\"\u003E\r\n    \u003Cp\u003E\r\n    Thank you. You will now continue to the next part of the study\u003C\u002Fp\u003E\r\n    \u003C\u002Fmain\u003E\r\n\r\n\u003C!-- space bar to continue--\u003E\r\n\u003Cfooter\u003E\r\n  Please press the \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E bar to continue.\r\n\u003C\u002Ffooter\u003E "
                }
              ]
            },
            {
              "type": "lab.flow.Sequence",
              "files": {},
              "parameters": {},
              "responses": {},
              "messageHandlers": {},
              "title": "Self_Reported_Ratings",
              "content": [
                {
                  "type": "lab.html.Form",
                  "content": "\u003Chead\u003E\n  \u003Cstyle type=\"text\u002Fcss\"\u003E\n    #likert { text-align:center; }\n    #likert td { width: 15%; }\n   \u003C\u002Fstyle\u003E\n\u003C\u002Fhead\u003E\n \n\u003Cheader style = \"top:110pt;left:110pt\"\u003E\n\u003Cimg src=\"static\u002FChris.jpg\" width=\"280pt\"\u003E\n  \u003C\u002Fheader \u003E\n\n\u003Cmain\u003E\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:20pt;\"\u003E\n   \u003Cstrong style=\"font-size:20pt;\"\u003EPlease indicate how you feel about Chris\u003C\u002Fstrong\u003E\n    \u003Cform id =\"Ratings_Negative_Positive\" required\u003E\n      \n      \u003Cp\u003E(-3 = Negative \u002F 0 = Neutral \u002F +3 = Positive)\u003C\u002Fp\u003E\n  \n      \u003Ctable style=\"width:50%; margin-left:auto; margin-right:auto\"\u003E\n    \u003Ctr\u003E\n    \u003Cth\u003E-3\u003C\u002Fth\u003E\n    \u003Cth\u003E-2\u003C\u002Fth\u003E \n    \u003Cth\u003E-1\u003C\u002Fth\u003E\n    \u003Cth\u003E0\u003C\u002Fth\u003E\n    \u003Cth\u003E1\u003C\u002Fth\u003E\n    \u003Cth\u003E2\u003C\u002Fth\u003E\n    \u003Cth\u003E3\u003C\u002Fth\u003E    \n  \u003C\u002Ftr\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"-3\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"-2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"-1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"0\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"3\" required\u003E\u003C\u002Ftd\u003E\n         \u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Please click on this \u003Cbutton type=\"submit\" form=\"Ratings_Negative_Positive\"\u003E Submit \u003C\u002Fbutton\u003E button to continue.\n\u003C\u002Ffooter\u003E",
                  "files": {},
                  "parameters": {},
                  "responses": {},
                  "messageHandlers": {},
                  "title": "Ratings_Negative_Positive"
                },
                {
                  "type": "lab.html.Form",
                  "content": "\u003Chead\u003E\n  \u003Cstyle type=\"text\u002Fcss\"\u003E\n    #likert { text-align:center; }\n    #likert td { width: 15%; }\n   \u003C\u002Fstyle\u003E\n\u003C\u002Fhead\u003E\n \n\u003Cheader style = \"top:110pt;left:110pt\"\u003E\n\u003Cimg src=\"static\u002FChris.jpg\" width=\"280pt\"\u003E\n  \u003C\u002Fheader \u003E\n\n\u003Cmain\u003E\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:20pt;\"\u003E\n    \u003Cstrong style=\"font-size:20pt;\"\u003EPlease indicate how you feel about Chris\u003C\u002Fstrong\u003E\n    \u003Cform id =\"Ratings_Good_Bad\" required\u003E\n      \n      \u003Cp\u003E(-3 = Bad \u002F 0 = Neutral \u002F +3 = Good)\u003C\u002Fp\u003E\n  \n      \u003Ctable style=\"width:50%; margin-left:auto; margin-right:auto\"\u003E\n    \u003Ctr\u003E\n    \u003Cth\u003E-3\u003C\u002Fth\u003E\n    \u003Cth\u003E-2\u003C\u002Fth\u003E \n    \u003Cth\u003E-1\u003C\u002Fth\u003E\n    \u003Cth\u003E0\u003C\u002Fth\u003E\n    \u003Cth\u003E1\u003C\u002Fth\u003E\n    \u003Cth\u003E2\u003C\u002Fth\u003E\n    \u003Cth\u003E3\u003C\u002Fth\u003E    \n  \u003C\u002Ftr\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"-3\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"-2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"-1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"0\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"3\" required\u003E\u003C\u002Ftd\u003E\n        \u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Please click on this \u003Cbutton type=\"submit\" form=\"Ratings_Good_Bad\"\u003E Submit \u003C\u002Fbutton\u003E button to continue.\n\u003C\u002Ffooter\u003E",
                  "files": {},
                  "parameters": {},
                  "responses": {},
                  "messageHandlers": {},
                  "title": "Ratings_Good_Bad"
                },
                {
                  "type": "lab.html.Form",
                  "content": "\u003Chead\u003E\n  \u003Cstyle type=\"text\u002Fcss\"\u003E\n    #likert { text-align:center; }\n    #likert td { width: 13%; }\n   \u003C\u002Fstyle\u003E\n\u003C\u002Fhead\u003E\n \u003Cheader style = \"top:110pt;left:110pt\"\u003E\n\u003Cimg src=\"static\u002FChris.jpg\" width=\"280pt\"\u003E\n  \u003C\u002Fheader \u003E\n\n\u003Cmain\u003E\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:20pt;\"\u003E\n    \u003Cstrong style=\"font-size:20pt;\"\u003EPlease indicate how you feel about Chris\u003C\u002Fstrong\u003E\n    \u003Cform id =\"Ratings_Like_Dislike\" required\u003E\n      \n           \u003Cp\u003E(-3 = I Dislike Him \u002F 0 = Neutral \u002F +3 = I Like Him)\u003C\u002Fp\u003E\n  \n      \u003Ctable style=\"width:50%; margin-left:auto; margin-right:auto\"\u003E\n    \u003Ctr\u003E\n    \u003Cth\u003E-3\u003C\u002Fth\u003E\n    \u003Cth\u003E-2\u003C\u002Fth\u003E \n    \u003Cth\u003E-1\u003C\u002Fth\u003E\n    \u003Cth\u003E0\u003C\u002Fth\u003E\n    \u003Cth\u003E1\u003C\u002Fth\u003E\n    \u003Cth\u003E2\u003C\u002Fth\u003E\n    \u003Cth\u003E3\u003C\u002Fth\u003E    \n  \u003C\u002Ftr\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"-3\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"-2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"-1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"0\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"3\" required\u003E\u003C\u002Ftd\u003E\n         \u003C\u002Ftr\u003E\n      \u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Please click on this \u003Cbutton type=\"submit\" form=\"Ratings_Like_Dislike\"\u003E Submit \u003C\u002Fbutton\u003E button to continue.\n\u003C\u002Ffooter\u003E",
                  "files": {},
                  "parameters": {},
                  "responses": {},
                  "messageHandlers": {},
                  "title": "Ratings_Like_Dislike"
                }
              ]
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "parameters": {},
          "responses": {},
          "messageHandlers": {},
          "title": "C2. Positive_Video_SR_First (Con B First)",
          "tardy": true,
          "skip": "${ this.state.condition !== 'C2. Positive_Video_SR_First (Con B First)' }",
          "content": [
            {
              "type": "lab.html.Screen",
              "files": {},
              "parameters": {},
              "responses": {
                "keypress(Enter)": "Continue"
              },
              "messageHandlers": {},
              "title": "Video_Positive_Genuine",
              "content": "\u003Cheader\u003E\r\n  \u003Ch3\u003E\u003Cp\u003E Please watch the video from start to finish and pay attention to what Chris says.\u003C\u002Fp\u003E \u003Cp\u003EMake sure your volume is turned up and the subtitles are switched on. \u003C\u002Fp\u003E \u003C\u002Fh3\u003E \u003C\u002Fheader\u003E\r\n\r\n\u003Cmain style=\"margin:0%; content-horizontal-center content-vertical-center\"\u003E\r\n\r\n\u003Ciframe width=\"1000pt\" height=\"700pt\"\r\nsrc=\"https:\u002F\u002Fwww.youtube-nocookie.com\u002Fembed\u002FBkDv-qQycoY?cc_load_policy=1&autoplay=0\" allow=\"autoplay\"\u003E\r\n\u003C\u002Fiframe\u003E\r\n\r\n\u003C\u002Fmain\u003E​\r\n\r\n\u003Cfooter style=\"padding:5pt; font-size:18pt;text-align:center;\"\u003E\r\n    Please only press the \u003Ckbd\u003E Enter key \u003C\u002Fkbd\u003E once you have watched the entire video from start to finish. \r\n    \u003C\u002Ffooter\u003E\r\n    \r\n"
            },
            {
              "type": "lab.html.Form",
              "content": "\u003Chead\u003E\n\u003Cstyle\u003E\ntable, td, th {border: 0pt solid black;}\n\ntable {border-collapse: collapse;width: 90%;}\n\nth {height: 90%;}\n\u003C\u002Fstyle\u003E\n\u003C\u002Fhead\u003E\n\n\u003Cheader\u003E\u003Ch3 style=\"color:green; font-size:22pt\"\u003E Final Questions (Part 1)\u003C\u002Fh3\u003E \n\u003C!-- instructions --\u003E\n\n\u003Cmain\u003E\n  \u003C!-- ask 4 questions:  --\u003E\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:16pt;\"\u003E\n    \u003Cform id =\"Memory_And_Diagnosticity_Questions\" required\u003E\n      \u003Ctable id=\"Memory_of_Video_Content\"\u003E\n                 \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Clabel for=\"Memory_of_Video_Content\"\u003E  \u003Cp\u003E 1. You just watched a Youtube video from a person called Chris. What were the main things that Chris said in his video? Please try to remember as much from the video as possible. \u003C\u002Fp\u003E \u003C\u002Flabel\u003E\n  \n\u003Cp\u003E\n\u003Ctextarea name = \"Memory_of_Video_Content\" id=\"Memory_of_Video_Content\" size = \"35\" style = \"width: 1000px; height: 250px;\" autocomplete = \"off\" required\u003E\u003C\u002Ftextarea\u003E\n\u003C\u002Fp\u003E\n      \u003Ctable id=\"Diagnosticity_Question\"\u003E\n                 \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Clabel for=\"Diagnosticity_Question\"\u003E  2. During the video Chris provided information about himself. Do you think that this information revealed something about the type of person Chris really is (i.e., his true character)? \u003C\u002Flabel\u003E\n            \u003C\u002Fth\u003E\n               \u003Ctr\u003E\n            \u003Ctd style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Cselect name=\"Diagnosticity_Question\" id=\"Diagnosticity_Question\" required\u003E\n                \u003Coption value=\"\"\u003E ----- \u003C\u002Foption\u003E\n                \u003Coption value=\"Strongly_Diagnostic\"\u003E The info completely revealed Chris' true character \u003C\u002Foption\u003E\n                \u003Coption value=\"Moderately_Diagnostic\"\u003E The info was moderately revealing of Chris' true character   \u003C\u002Foption\u003E\n                \u003Coption value=\"Slightly_Diagnostic\"\u003E The info only slightly revealed Chris' true character \u003C\u002Foption\u003E\n                \u003Coption value=\"Not_Diagnostic\"\u003E The info revealed nothing about Chris' true character \u003C\u002Foption\u003E\n                \u003C\u002Fselect\u003E \n            \u003C\u002Ftd\u003E\n          \u003C\u002Ftr\u003E\n      \u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Please click on this \u003Cbutton type=\"submit\" form=\"Memory_And_Diagnosticity_Questions\"\u003E Submit \u003C\u002Fbutton\u003E button to continue.\n\u003C\u002Ffooter\u003E",
              "files": {},
              "parameters": {},
              "responses": {},
              "messageHandlers": {},
              "title": "Memory Questions"
            },
            {
              "type": "lab.flow.Sequence",
              "files": {},
              "parameters": {},
              "responses": {},
              "messageHandlers": {},
              "title": "Self_Reported_Ratings",
              "content": [
                {
                  "type": "lab.html.Form",
                  "content": "\u003Chead\u003E\n  \u003Cstyle type=\"text\u002Fcss\"\u003E\n    #likert { text-align:center; }\n    #likert td { width: 15%; }\n   \u003C\u002Fstyle\u003E\n\u003C\u002Fhead\u003E\n \n\u003Cheader style = \"top:110pt;left:110pt\"\u003E\n\u003Cimg src=\"static\u002FChris.jpg\" width=\"280pt\"\u003E\n  \u003C\u002Fheader \u003E\n\n\u003Cmain\u003E\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:20pt;\"\u003E\n   \u003Cstrong style=\"font-size:20pt;\"\u003EPlease indicate how you feel about Chris\u003C\u002Fstrong\u003E\n    \u003Cform id =\"Ratings_Negative_Positive\" required\u003E\n      \n      \u003Cp\u003E(-3 = Negative \u002F 0 = Neutral \u002F +3 = Positive)\u003C\u002Fp\u003E\n  \n      \u003Ctable style=\"width:50%; margin-left:auto; margin-right:auto\"\u003E\n    \u003Ctr\u003E\n    \u003Cth\u003E-3\u003C\u002Fth\u003E\n    \u003Cth\u003E-2\u003C\u002Fth\u003E \n    \u003Cth\u003E-1\u003C\u002Fth\u003E\n    \u003Cth\u003E0\u003C\u002Fth\u003E\n    \u003Cth\u003E1\u003C\u002Fth\u003E\n    \u003Cth\u003E2\u003C\u002Fth\u003E\n    \u003Cth\u003E3\u003C\u002Fth\u003E    \n  \u003C\u002Ftr\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"-3\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"-2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"-1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"0\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"3\" required\u003E\u003C\u002Ftd\u003E\n         \u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Please click on this \u003Cbutton type=\"submit\" form=\"Ratings_Negative_Positive\"\u003E Submit \u003C\u002Fbutton\u003E button to continue.\n\u003C\u002Ffooter\u003E",
                  "files": {},
                  "parameters": {},
                  "responses": {},
                  "messageHandlers": {},
                  "title": "Ratings_Negative_Positive"
                },
                {
                  "type": "lab.html.Form",
                  "content": "\u003Chead\u003E\n  \u003Cstyle type=\"text\u002Fcss\"\u003E\n    #likert { text-align:center; }\n    #likert td { width: 15%; }\n   \u003C\u002Fstyle\u003E\n\u003C\u002Fhead\u003E\n \n\u003Cheader style = \"top:110pt;left:110pt\"\u003E\n\u003Cimg src=\"static\u002FChris.jpg\" width=\"280pt\"\u003E\n  \u003C\u002Fheader \u003E\n\n\u003Cmain\u003E\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:20pt;\"\u003E\n    \u003Cstrong style=\"font-size:20pt;\"\u003EPlease indicate how you feel about Chris\u003C\u002Fstrong\u003E\n    \u003Cform id =\"Ratings_Good_Bad\" required\u003E\n      \n      \u003Cp\u003E(-3 = Bad \u002F 0 = Neutral \u002F +3 = Good)\u003C\u002Fp\u003E\n  \n      \u003Ctable style=\"width:50%; margin-left:auto; margin-right:auto\"\u003E\n    \u003Ctr\u003E\n    \u003Cth\u003E-3\u003C\u002Fth\u003E\n    \u003Cth\u003E-2\u003C\u002Fth\u003E \n    \u003Cth\u003E-1\u003C\u002Fth\u003E\n    \u003Cth\u003E0\u003C\u002Fth\u003E\n    \u003Cth\u003E1\u003C\u002Fth\u003E\n    \u003Cth\u003E2\u003C\u002Fth\u003E\n    \u003Cth\u003E3\u003C\u002Fth\u003E    \n  \u003C\u002Ftr\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"-3\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"-2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"-1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"0\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"3\" required\u003E\u003C\u002Ftd\u003E\n        \u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Please click on this \u003Cbutton type=\"submit\" form=\"Ratings_Good_Bad\"\u003E Submit \u003C\u002Fbutton\u003E button to continue.\n\u003C\u002Ffooter\u003E",
                  "files": {},
                  "parameters": {},
                  "responses": {},
                  "messageHandlers": {},
                  "title": "Ratings_Good_Bad"
                },
                {
                  "type": "lab.html.Form",
                  "content": "\u003Chead\u003E\n  \u003Cstyle type=\"text\u002Fcss\"\u003E\n    #likert { text-align:center; }\n    #likert td { width: 13%; }\n   \u003C\u002Fstyle\u003E\n\u003C\u002Fhead\u003E\n \u003Cheader style = \"top:110pt;left:110pt\"\u003E\n\u003Cimg src=\"static\u002FChris.jpg\" width=\"280pt\"\u003E\n  \u003C\u002Fheader \u003E\n\n\u003Cmain\u003E\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:20pt;\"\u003E\n    \u003Cstrong style=\"font-size:20pt;\"\u003EPlease indicate how you feel about Chris\u003C\u002Fstrong\u003E\n    \u003Cform id =\"Ratings_Like_Dislike\" required\u003E\n      \n           \u003Cp\u003E(-3 = I Dislike Him \u002F 0 = Neutral \u002F +3 = I Like Him)\u003C\u002Fp\u003E\n  \n      \u003Ctable style=\"width:50%; margin-left:auto; margin-right:auto\"\u003E\n    \u003Ctr\u003E\n    \u003Cth\u003E-3\u003C\u002Fth\u003E\n    \u003Cth\u003E-2\u003C\u002Fth\u003E \n    \u003Cth\u003E-1\u003C\u002Fth\u003E\n    \u003Cth\u003E0\u003C\u002Fth\u003E\n    \u003Cth\u003E1\u003C\u002Fth\u003E\n    \u003Cth\u003E2\u003C\u002Fth\u003E\n    \u003Cth\u003E3\u003C\u002Fth\u003E    \n  \u003C\u002Ftr\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"-3\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"-2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"-1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"0\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"3\" required\u003E\u003C\u002Ftd\u003E\n         \u003C\u002Ftr\u003E\n      \u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Please click on this \u003Cbutton type=\"submit\" form=\"Ratings_Like_Dislike\"\u003E Submit \u003C\u002Fbutton\u003E button to continue.\n\u003C\u002Ffooter\u003E",
                  "files": {},
                  "parameters": {},
                  "responses": {},
                  "messageHandlers": {},
                  "title": "Ratings_Like_Dislike"
                }
              ]
            },
            {
              "type": "lab.flow.Sequence",
              "files": {},
              "parameters": {},
              "responses": {},
              "messageHandlers": {},
              "title": "IAT (Learning Consistent Block First)",
              "content": [
                {
                  "type": "lab.html.Screen",
                  "files": {},
                  "parameters": {},
                  "responses": {
                    "keypress(Space)": "continue"
                  },
                  "messageHandlers": {},
                  "title": "IAT_Generalinstructions: part 1 ",
                  "content": "\u003Cmain class = \"fullscreen\"\u003E\r\n  \u003C!-- present general instructions--\u003E\r\n  \u003Cdiv style=\"text-align:left; font-size:18pt; line-height: 150%\"\u003E\r\n    \u003Cp\u003E\r\n    You will first perform a task where you have to categorize words and images as quickly as possible.\u003C\u002Fp\u003E\r\n      \r\n      \u003Cp\u003E During this task: \u003C\u002Fp\u003E\r\n      \r\n      \u003Col\u003E\r\n\u003Cli\u003E Please keep this screen in full-screen mode at all times\u003C\u002Fli\u003E\r\n\u003Cli\u003E Do not close this screen or switch tabs and stay focused until the end of the task\u003C\u002Fli\u003E\r\n\u003Cli\u003E Make sure Caps Lock is switched off\u003C\u002Fli\u003E\r\n        \u003C\u002Fol\u003E\r\n        \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003C!-- space bar to continue--\u003E\r\n\u003Cfooter\u003E\r\n  Please press the \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E bar to start this task.\r\n\u003C\u002Ffooter\u003E "
                },
                {
                  "type": "lab.html.Screen",
                  "files": {},
                  "parameters": {},
                  "responses": {
                    "keypress(Space)": "Continue"
                  },
                  "messageHandlers": {},
                  "title": "IAT_GeneralInstructions: part 2 ",
                  "content": "\u003C!-- instruct about categories--\u003E\r\n\u003Cmain class=\"fullscreen\" style=\"padding-bottom:2pt; line-height: 150%\"\u003E\r\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:18pt; text-align:center\"\u003E\r\n    \u003Cdiv style=\"color:black;position:absolute;top:50pt; left:50%; margin-left:-300pt\"\u003E\r\n      Below you can see two categories and the images that belong to those categories:\u003C\u002Fdiv\u003E\r\n    \u003Cdiv style=\"position:absolute;top:100pt;left:50pt\"\u003E\r\n    Chris: \u003C\u002Fdiv\u003E\r\n    \u003Cdiv style=\"position:absolute;top:280pt;left:50pt\"\u003E\r\n    Bob: \u003C\u002Fdiv\u003E\r\n   \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003C!-- present stimuli--\u003E\r\n\u003Cdiv style=\"position:absolute;top:130pt;left:120pt\"\u003E \r\n  \u003Cimg src=\"static\u002FChris1.jpg\" width=\"100pt\" alt = \"Image not found\"\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003Cdiv style=\"position:absolute;top:130pt;left:240pt\"\u003E \r\n  \u003Cimg src=\"static\u002FChris2.jpg\" width=\"100pt\" alt = \"Image not found\"\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003Cdiv style=\"position:absolute;top:130pt;left:360pt\"\u003E \r\n  \u003Cimg src=\"static\u002FChris3.jpg\" width=\"100pt\" alt = \"Image not found\"\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003Cdiv style=\"position:absolute;top:130pt;left:480pt\"\u003E \r\n  \u003Cimg src=\"static\u002FChris4.jpg\" width=\"100pt\" alt = \"Image not found\"\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n\u003Cdiv style=\"position:absolute;top:310pt;left:120pt\"\u003E \r\n  \u003Cimg src=\"static\u002FBob1.jpg\" width=\"100pt\" alt = \"Image not found\"\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003Cdiv style=\"position:absolute;top:310pt;left:240pt\"\u003E \r\n  \u003Cimg src=\"static\u002FBob2.jpg\" width=\"100pt\" alt = \"Image not found\"\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003Cdiv style=\"position:absolute;top:310pt;left:360pt\"\u003E \r\n  \u003Cimg src=\"static\u002FBob3.jpg\" width=\"100pt\" alt = \"Image not found\"\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003Cdiv style=\"position:absolute;top:310pt;left:480pt\"\u003E \r\n  \u003Cimg src=\"static\u002FBob4.jpg\" width=\"100pt\" alt = \"Image not found\"\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Ch4\u003E\u003Cb\u003E Press the \u003Ckbd\u003E space bar \u003C\u002Fkbd\u003E to continue.\u003C\u002Fb\u003E \u003C\u002Fh4\u003E\r\n\u003C\u002Ffooter\u003E\r\n"
                },
                {
                  "type": "lab.html.Screen",
                  "files": {},
                  "parameters": {},
                  "responses": {
                    "keypress(Space)": "continue"
                  },
                  "messageHandlers": {},
                  "title": "IAT_block1_instructions ",
                  "content": "\u003Cmain class=\"fullscreen\" style=\"padding-bottom:2pt\"\u003E\r\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:18pt; text-align:center; line-height: 150%\"\u003E\r\n    \u003Cbr\u003E\u003Cbr\u003E During the next part of the study you will see an image or word in the middle of the screen. \r\n    \u003Cbr\u003E Your job is to assign that item to one of two categories. \r\n    \u003Cbr\u003E\u003Cbr\u003E Please respond AS QUICKLY AS POSSIBLE, while at the same time, try not to make too many mistakes and be as accurate as possible \u003Cbr\u003E(some mistakes are OK).\r\n    \u003Cbr\u003E\u003Cbr\u003E The two categories in the first part of the task are:\r\n    \u003Cbr\u003E\u003Cb\u003E \u003Cstrong\u003E Bob \u003C\u002Fstrong\u003E \u003C\u002Fb\u003E and \u003Cb\u003E \u003Cstrong\u003E Chris \u003C\u002Fstrong\u003E \u003C\u002Fb\u003E.\r\n    \u003Cbr\u003E\u003Cbr\u003EIf the item in the middle of the screen belongs to the \"Bob\" category, press the F key (left on the keyboard).\r\n    \u003Cbr\u003EIf the item in the middle of the screen belongs to the \"Chris\" category, press the J key (right on the keyboard).\r\n    \u003Cbr\u003E\u003Cbr\u003E Keep your fingers on the F and J keys at all times, in order to respond faster. \r\n    \u003Cbr\u003E\u003Cbr\u003EAvoid all distractions and pay attention. Try to answer as quickly as possible!\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Ch4\u003E\u003Cb\u003E Press the \u003Ckbd\u003E space bar \u003C\u002Fkbd\u003E when you have your fingers on the F and J keys and are ready to start the task.\u003C\u002Fb\u003E \u003C\u002Fh4\u003E\r\n\u003C\u002Ffooter\u003E\r\n"
                },
                {
                  "type": "lab.flow.Loop",
                  "files": {},
                  "parameters": {},
                  "templateParameters": [
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    }
                  ],
                  "sample": {
                    "mode": "draw-shuffle",
                    "n": "16"
                  },
                  "responses": {},
                  "messageHandlers": {},
                  "title": "IAT_trialsB1",
                  "shuffleGroups": [],
                  "template": {
                    "type": "lab.html.Frame",
                    "context": "\u003Cmain style=\"background-color:White;\"\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  left:110pt\"\u003E\n    Bob\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  right:110pt\"\u003E\n    Chris\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cmain data-labjs-section=\"frame\" style=\"background-color:white;\"\u003E\n  \u003C!-- Content gets inserted here --\u003E\n\u003C\u002Fmain\u003E",
                    "contextSelector": "[data-labjs-section=\"frame\"]",
                    "files": {},
                    "parameters": {},
                    "responses": {},
                    "messageHandlers": {},
                    "title": "Frame B1",
                    "content": {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "parameters": {},
                      "responses": {},
                      "messageHandlers": {},
                      "title": "TrialSequenceB1",
                      "tardy": true,
                      "skip": "${this.state.response==='escape'}",
                      "content": [
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI pre",
                          "timeout": "200"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {
                            "keypress(f)": "left",
                            "keypress(j)": "right",
                            "keydown(Insert)": "escape"
                          },
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
this.options.media.images.push('static/' + this.parameters.name)
}
                          },
                          "title": "Stimulus",
                          "content": " \u003C!-- present stimulus --\u003E \r\n    \u003Cdiv\u003E\r\n    ${parameters.stim}\r\n    \u003C\u002Fdiv\u003E\r\n",
                          "tardy": true,
                          "correctResponse": "${parameters.corr}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "Error",
                          "content": "  \u003Cdiv style=\"font-size: 3.5rem; color:red;\"\u003E\r\n    X\r\n  \u003C\u002Fdiv\u003E",
                          "timeout": "200",
                          "tardy": true,
                          "skip": "${state.correct}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI post",
                          "timeout": "200"
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "lab.html.Screen",
                  "files": {},
                  "parameters": {},
                  "responses": {
                    "keypress(Space)": "continue"
                  },
                  "messageHandlers": {},
                  "title": "IAT_block2_instructions ",
                  "content": "\u003C!-- present instructions IAT B2 --\u003E\r\n\u003Cmain class=\"fullscreen\" style=\"padding-bottom:2px\"\u003E\r\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:18px; text-align:center\"\u003E\r\n    \u003Cbr\u003E\u003Cbr\u003EYou will now see a different set of words. Your job is to indicate whether you like or dislike those words. \r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003EIf the item belongs to the category of \u003Cstrong\u003E things I dislike about someone \u003C\u002Fstrong\u003E, press the F key (left on the keyboard).\r\n    \u003Cbr\u003E\u003Cbr\u003EIf the item belongs to the category of \u003Cstrong\u003E things I like about someone \u003C\u002Fstrong\u003E press the J key (right on the keyboard).\r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003ETry to respond AS QUICKLY AS POSSIBLE without making too many mistakes!\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003C!-- space bar to continue --\u003E\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Ch4\u003E\u003Cb\u003E Press the \u003Ckbd\u003E space bar \u003C\u002Fkbd\u003E to start.\u003C\u002Fh4\u003E\u003C\u002Fb\u003E \r\n\u003C\u002Ffooter\u003E\r\n"
                },
                {
                  "type": "lab.flow.Loop",
                  "files": {},
                  "parameters": {},
                  "templateParameters": [
                    {
                      "stim": "Confident",
                      "corr": "right",
                      "name": "pos1",
                      "type": "word"
                    },
                    {
                      "stim": "Friendly",
                      "corr": "right",
                      "name": "pos2",
                      "type": "word"
                    },
                    {
                      "stim": "Cheerful",
                      "corr": "right",
                      "name": "pos3",
                      "type": "word"
                    },
                    {
                      "stim": "Loyal",
                      "corr": "right",
                      "name": "pos4",
                      "type": "word"
                    },
                    {
                      "stim": "Generous",
                      "corr": "right",
                      "name": "pos5",
                      "type": "word"
                    },
                    {
                      "stim": "Loving",
                      "corr": "right",
                      "name": "pos6",
                      "type": "word"
                    },
                    {
                      "stim": "Liar",
                      "corr": "left",
                      "name": "neg1",
                      "type": "word"
                    },
                    {
                      "stim": "Cruel",
                      "corr": "left",
                      "name": "neg2",
                      "type": "word"
                    },
                    {
                      "stim": "Evil",
                      "corr": "left",
                      "name": "neg3",
                      "type": "word"
                    },
                    {
                      "stim": "Ignorant",
                      "corr": "left",
                      "name": "neg4",
                      "type": "word"
                    },
                    {
                      "stim": "Manipulative",
                      "corr": "left",
                      "name": "neg5",
                      "type": "word"
                    },
                    {
                      "stim": "Rude",
                      "corr": "left",
                      "name": "neg6",
                      "type": "word"
                    },
                    {
                      "stim": "Warm",
                      "corr": "right",
                      "name": "pos7",
                      "type": "word"
                    },
                    {
                      "stim": "Funny",
                      "corr": "right",
                      "name": "pos8",
                      "type": "word"
                    },
                    {
                      "stim": "Selfish",
                      "corr": "left",
                      "name": "neg7",
                      "type": "word"
                    },
                    {
                      "stim": "Disloyal",
                      "corr": "left",
                      "name": "neg8",
                      "type": "word"
                    }
                  ],
                  "sample": {
                    "mode": "draw-shuffle",
                    "n": "16"
                  },
                  "responses": {},
                  "messageHandlers": {},
                  "title": "IAT_trialsB2",
                  "shuffleGroups": [],
                  "template": {
                    "type": "lab.html.Frame",
                    "context": "\u003Cmain style=\"background-color:white\"\u003E\n  \u003Cdiv style=\"font-size:30pt; position:absolute; top:60pt; left:90pt\"\u003E\n    I dislike\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style=\"font-size:30pt; position:absolute; top:60pt; right:110pt\"\u003E\n    I like\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cmain data-labjs-section=\"frame\" style=\"background-color:white;\"\u003E\n  \u003C!-- Content gets inserted here --\u003E\n\u003C\u002Fmain\u003E",
                    "contextSelector": "[data-labjs-section=\"frame\"]",
                    "files": {},
                    "parameters": {},
                    "responses": {},
                    "messageHandlers": {},
                    "title": "Frame B2",
                    "content": {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "parameters": {},
                      "responses": {},
                      "messageHandlers": {},
                      "title": "TrialSequenceB2",
                      "tardy": true,
                      "skip": "${this.state.response==='escape'}",
                      "content": [
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI pre",
                          "timeout": "200"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {
                            "keypress(f)": "left",
                            "keypress(j)": "right",
                            "keydown(Insert)": "escape"
                          },
                          "messageHandlers": {},
                          "title": "Stimulus",
                          "content": " \u003C!-- present stimulus --\u003E \r\n    \u003Cdiv style=\"color:black;font-size:40pt;\"\u003E\r\n    ${parameters.stim}\r\n    \u003C\u002Fdiv\u003E\r\n",
                          "tardy": true,
                          "correctResponse": "${parameters.corr}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "Error",
                          "content": "  \u003Cdiv style=\"font-size: 3.5rem; color:red;\"\u003E\r\n    X\r\n  \u003C\u002Fdiv\u003E",
                          "timeout": "200",
                          "tardy": true,
                          "skip": "${state.correct || parameters.type==='word'}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI post",
                          "timeout": "200"
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "lab.html.Screen",
                  "files": {},
                  "parameters": {},
                  "responses": {
                    "keypress(Space)": "continue"
                  },
                  "messageHandlers": {},
                  "title": "IAT_block3_instructions ",
                  "content": "\u003C!-- present instructions IAT B3 --\u003E\r\n\u003Cmain class=\"fullscreen\" style=\"padding-bottom:2px\"\u003E\r\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:18px; text-align:center\"\u003E\r\n    \u003Cbr\u003E\u003Cbr\u003EThe four categories of items you saw separately will now appear together. \r\n    \u003Cbr\u003E\u003Cbr\u003EItems that belong to the \"Bob\" and \"Chris\" categories,\r\n    \u003Cbr\u003E\u003Cbr\u003EAND\r\n    \u003Cbr\u003E\u003Cbr\u003Eitems that belong to the \"things I dislike about someone\" and \"things I like about someone\" categories. \r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003EWhen the item belongs to the \u003Cstrong\u003E Bob or I DISLIKE \u003C\u002Fstrong\u003E category press the F key.\r\n    \u003Cbr\u003E\u003Cbr\u003EWhen the item belongs to the \u003Cstrong\u003E Chris or I LIKE category \u003C\u002Fstrong\u003E , press the J key. \r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003EPlease remember to answer as quickly as possible (without making too many mistakes)!\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Ch4\u003E\u003Cb\u003E Press the \u003Ckbd\u003E space bar \u003C\u002Fkbd\u003E to start.\u003C\u002Fb\u003E\u003C\u002Fh4\u003E \r\n\u003C\u002Ffooter\u003E\r\n\r\n"
                },
                {
                  "type": "lab.flow.Loop",
                  "files": {},
                  "parameters": {},
                  "templateParameters": [
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "Confident",
                      "corr": "right",
                      "name": "pos1",
                      "type": "word"
                    },
                    {
                      "stim": "Friendly",
                      "corr": "right",
                      "name": "pos2",
                      "type": "word"
                    },
                    {
                      "stim": "Cheerful",
                      "corr": "right",
                      "name": "pos3",
                      "type": "word"
                    },
                    {
                      "stim": "Loyal",
                      "corr": "right",
                      "name": "pos4",
                      "type": "word"
                    },
                    {
                      "stim": "Generous",
                      "corr": "right",
                      "name": "pos5",
                      "type": "word"
                    },
                    {
                      "stim": "Loving",
                      "corr": "right",
                      "name": "pos6",
                      "type": "word"
                    },
                    {
                      "stim": "Liar",
                      "corr": "left",
                      "name": "neg1",
                      "type": "word"
                    },
                    {
                      "stim": "Cruel",
                      "corr": "left",
                      "name": "neg2",
                      "type": "word"
                    },
                    {
                      "stim": "Evil",
                      "corr": "left",
                      "name": "neg3",
                      "type": "word"
                    },
                    {
                      "stim": "Ignorant",
                      "corr": "left",
                      "name": "neg4",
                      "type": "word"
                    },
                    {
                      "stim": "Manipulative",
                      "corr": "left",
                      "name": "neg5",
                      "type": "word"
                    },
                    {
                      "stim": "Rude",
                      "corr": "left",
                      "name": "neg6",
                      "type": "word"
                    },
                    {
                      "stim": "Funny",
                      "corr": "right",
                      "name": "pos7",
                      "type": "word"
                    },
                    {
                      "stim": "Warm",
                      "corr": "right",
                      "name": "pos8",
                      "type": "word"
                    },
                    {
                      "stim": "Selfish",
                      "corr": "right",
                      "name": "neg7",
                      "type": "word"
                    },
                    {
                      "stim": "Disloyal",
                      "corr": "right",
                      "name": "neg8",
                      "type": "word"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    }
                  ],
                  "sample": {
                    "mode": "draw-shuffle",
                    "n": "32"
                  },
                  "responses": {},
                  "messageHandlers": {},
                  "title": "IAT_trialsB3",
                  "shuffleGroups": [],
                  "template": {
                    "type": "lab.html.Frame",
                    "context": "\u003Cmain style=\"background-color:white;\"\u003E\n  \u003Cdiv style=\"font-size:30pt; position:absolute; top:60pt; left:90pt\"\u003E\n    I dislike\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  left:110pt\"\u003E\n    Bob\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style=\"font-size:30pt; position:absolute; top:60pt; right:110pt\"\u003E\n    I like\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  right:110pt\"\u003E\n    Chris\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cmain data-labjs-section=\"frame\" style=\"background-color:white;\"\u003E\n  \u003C!-- Content gets inserted here --\u003E\n\u003C\u002Fmain\u003E",
                    "contextSelector": "[data-labjs-section=\"frame\"]",
                    "files": {},
                    "parameters": {},
                    "responses": {},
                    "messageHandlers": {},
                    "title": "Frame B3",
                    "content": {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "parameters": {},
                      "responses": {},
                      "messageHandlers": {},
                      "title": "TrialSequenceB3",
                      "tardy": true,
                      "skip": "${this.state.response==='escape'}",
                      "content": [
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI pre",
                          "timeout": "200"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {
                            "keypress(f)": "left",
                            "keypress(j)": "right",
                            "keydown(Insert)": "escape"
                          },
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
if (this.parameters.type==='pic'){
this.options.media.images.push('static/' + this.parameters.name);}
}
                          },
                          "title": "Stimulus",
                          "content": " \u003C!-- present stimulus --\u003E \r\n    \u003Cdiv style=\"color:black;font-size:40pt;\"\u003E\r\n    ${parameters.stim}\r\n    \u003C\u002Fdiv\u003E\r\n",
                          "tardy": true,
                          "correctResponse": "${parameters.corr}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "Error",
                          "content": "  \u003Cdiv style=\"font-size: 3.5rem; color:red;\"\u003E\r\n    X\r\n  \u003C\u002Fdiv\u003E",
                          "timeout": "200",
                          "tardy": true,
                          "skip": "${state.correct || parameters.type==='word'}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI post",
                          "timeout": "200"
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "lab.html.Screen",
                  "files": {},
                  "parameters": {},
                  "responses": {
                    "keypress(Space)": "continue"
                  },
                  "messageHandlers": {},
                  "title": "IAT_block4_instructions ",
                  "content": "\u003C!-- present instructions IAT B4 --\u003E\r\n\u003Cmain class=\"fullscreen\" style=\"padding-bottom:2pt\"\u003E\r\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:18pt; text-align:center\"\u003E\r\n    \u003Cbr\u003E\u003Cbr\u003E You will now sort items in the same categories again. \r\n    \u003Cbr\u003E\u003Cbr\u003ERemember to respond AS QUICKLY AS POSSIBLE without making too many mistakes. \r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003C!-- space bar to continue --\u003E\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Ch4\u003E\u003Cb\u003E Press the \u003Ckbd\u003E space bar \u003C\u002Fkbd\u003E to start.\u003C\u002Fb\u003E \u003C\u002Fh4\u003E\r\n\u003C\u002Ffooter\u003E\r\n"
                },
                {
                  "type": "lab.flow.Loop",
                  "files": {},
                  "parameters": {},
                  "templateParameters": [
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "Confident",
                      "corr": "right",
                      "name": "pos1",
                      "type": "word"
                    },
                    {
                      "stim": "Friendly",
                      "corr": "right",
                      "name": "pos2",
                      "type": "word"
                    },
                    {
                      "stim": "Cheerful",
                      "corr": "right",
                      "name": "pos3",
                      "type": "word"
                    },
                    {
                      "stim": "Loyal",
                      "corr": "right",
                      "name": "pos4",
                      "type": "word"
                    },
                    {
                      "stim": "Generous",
                      "corr": "right",
                      "name": "pos5",
                      "type": "word"
                    },
                    {
                      "stim": "Loving",
                      "corr": "right",
                      "name": "pos6",
                      "type": "word"
                    },
                    {
                      "stim": "Liar",
                      "corr": "left",
                      "name": "neg1",
                      "type": "word"
                    },
                    {
                      "stim": "Cruel",
                      "corr": "left",
                      "name": "neg2",
                      "type": "word"
                    },
                    {
                      "stim": "Evil",
                      "corr": "left",
                      "name": "neg3",
                      "type": "word"
                    },
                    {
                      "stim": "Ignorant",
                      "corr": "left",
                      "name": "neg4",
                      "type": "word"
                    },
                    {
                      "stim": "Manipulative",
                      "corr": "left",
                      "name": "neg5",
                      "type": "word"
                    },
                    {
                      "stim": "Rude",
                      "corr": "left",
                      "name": "neg6",
                      "type": "word"
                    },
                    {
                      "stim": "Funny",
                      "corr": "right",
                      "name": "pos7",
                      "type": "word"
                    },
                    {
                      "stim": "Warm",
                      "corr": "right",
                      "name": "pos8",
                      "type": "word"
                    },
                    {
                      "stim": "Selfish",
                      "corr": "left",
                      "name": "neg7",
                      "type": "word"
                    },
                    {
                      "stim": "Disloyal",
                      "corr": "left",
                      "name": "neg8",
                      "type": "word"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    }
                  ],
                  "sample": {
                    "mode": "draw-shuffle",
                    "n": "32"
                  },
                  "responses": {},
                  "messageHandlers": {},
                  "title": "IAT_trialsB4",
                  "shuffleGroups": [],
                  "template": {
                    "type": "lab.html.Frame",
                    "context": "\u003Cmain style=\"background-color:white;\"\u003E\n  \u003Cdiv style=\"font-size:30pt; position:absolute; top:60pt; left:90pt\"\u003E\n    I dislike\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  left:110pt\"\u003E\n    Bob\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style=\"font-size:30pt; position:absolute; top:60pt; right:110pt\"\u003E\n    I like\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  right:110pt\"\u003E\n    Chris\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cmain data-labjs-section=\"frame\" style=\"background-color:white;\"\u003E\n  \u003C!-- Content gets inserted here --\u003E\n\u003C\u002Fmain\u003E",
                    "contextSelector": "[data-labjs-section=\"frame\"]",
                    "files": {},
                    "parameters": {},
                    "responses": {},
                    "messageHandlers": {},
                    "title": "Frame B4",
                    "content": {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "parameters": {},
                      "responses": {},
                      "messageHandlers": {},
                      "title": "TrialSequenceB4",
                      "tardy": true,
                      "skip": "${this.state.response==='escape'}",
                      "content": [
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI pre",
                          "timeout": "200"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {
                            "keypress(f)": "left",
                            "keypress(j)": "right",
                            "keydown(Insert)": "escape"
                          },
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
if (this.parameters.type==='pic'){
this.options.media.images.push('static/' + this.parameters.name);}
}
                          },
                          "title": "Stimulus",
                          "content": " \u003C!-- present stimulus --\u003E \r\n    \u003Cdiv style=\"color:black;font-size:40pt;\"\u003E\r\n    ${parameters.stim}\r\n    \u003C\u002Fdiv\u003E\r\n",
                          "tardy": true,
                          "correctResponse": "${parameters.corr}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "Error",
                          "content": "  \u003Cdiv style=\"font-size: 3.5rem; color:red;\"\u003E\r\n    X\r\n  \u003C\u002Fdiv\u003E",
                          "timeout": "200",
                          "tardy": true,
                          "skip": "${state.correct || parameters.type==='word'}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI post",
                          "timeout": "200"
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "lab.html.Screen",
                  "files": {},
                  "parameters": {},
                  "responses": {
                    "keypress(Space)": "continue"
                  },
                  "messageHandlers": {},
                  "title": "IAT_block5_instructions ",
                  "content": "\u003C!-- present instructions IAT B5 --\u003E\r\n\u003Cmain class=\"fullscreen\" style=\"padding-bottom:2pt\"\u003E\r\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:18pt; text-align:center\"\u003E\r\n   \u003Cbr\u003E\u003Cbr\u003EIn the next part only two of the categories of items will be presented.\r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003EHowever: This time you will need to assign the items to the categories using the opposite key as before.\r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003EWhen the item belongs to the \u003Cstrong\u003E \"Chris\" \u003C\u002Fstrong\u003E category, press the F key. \r\n    \u003Cbr\u003E\u003Cbr\u003EWhen the item belongs to the \u003Cstrong\u003E \"Bob\" \u003C\u002Fstrong\u003E category, press the J key. \r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003EPlease answer as quickly as possible!\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003C!-- space bar to continue --\u003E\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Ch4\u003E\u003Cb\u003E Press the \u003Ckbd\u003E space bar \u003C\u002Fkbd\u003E to start.\u003C\u002Fb\u003E\u003C\u002Fh4\u003E \r\n\u003C\u002Ffooter\u003E \r\n"
                },
                {
                  "type": "lab.flow.Loop",
                  "files": {},
                  "parameters": {},
                  "templateParameters": [
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    }
                  ],
                  "sample": {
                    "mode": "draw-shuffle",
                    "n": "32"
                  },
                  "responses": {},
                  "messageHandlers": {},
                  "title": "IAT_trialsB5",
                  "shuffleGroups": [],
                  "template": {
                    "type": "lab.html.Frame",
                    "context": "\u003Cmain style=\"background-color:white;\"\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  left:110pt\"\u003E\n    Chris\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  right:110pt\"\u003E\n    Bob\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cmain data-labjs-section=\"frame\" style=\"background-color:white;\"\u003E\n  \u003C!-- Content gets inserted here --\u003E\n\u003C\u002Fmain\u003E",
                    "contextSelector": "[data-labjs-section=\"frame\"]",
                    "files": {},
                    "parameters": {},
                    "responses": {},
                    "messageHandlers": {},
                    "title": "Frame B5",
                    "content": {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "parameters": {},
                      "responses": {},
                      "messageHandlers": {},
                      "title": "TrialSequenceB5",
                      "tardy": true,
                      "skip": "${this.state.response==='escape'}",
                      "content": [
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI pre",
                          "timeout": "200"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {
                            "keypress(f)": "left",
                            "keypress(j)": "right",
                            "keydown(Insert)": "escape"
                          },
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
this.options.media.images.push('static/' + this.parameters.name)
}
                          },
                          "title": "Stimulus",
                          "content": " \u003C!-- present stimulus --\u003E \r\n    \u003Cdiv\u003E\r\n    ${parameters.stim}\r\n    \u003C\u002Fdiv\u003E\r\n",
                          "tardy": true,
                          "correctResponse": "${parameters.corr}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "Error",
                          "content": "  \u003Cdiv style=\"font-size: 3.5rem; color:red;\"\u003E\r\n    X\r\n  \u003C\u002Fdiv\u003E",
                          "timeout": "200",
                          "tardy": true,
                          "skip": "${state.correct}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI post",
                          "timeout": "200"
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "lab.html.Screen",
                  "files": {},
                  "parameters": {},
                  "responses": {
                    "keypress(Space)": "continue"
                  },
                  "messageHandlers": {},
                  "title": "IAT_block6_instructions",
                  "content": "\u003C!-- present instructions IAT B6 --\u003E\r\n\u003Cmain class=\"fullscreen\" style=\"padding-bottom:2pt\"\u003E\r\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:18pt; text-align:center\"\u003E\r\n    \u003Cp\u003E\u003Cbr\u003E\u003Cbr\u003EYou will now see the four categories once again. \r\n    \u003Cbr\u003E\u003Cbr\u003EItems that belong to the Chris and Bob categories, \r\n    \u003Cbr\u003E\u003Cbr\u003EAND \r\n    \u003Cbr\u003E\u003Cbr\u003Eitems that belong to the \"things I DISLIKE about someone\" and \"things I LIKE about someone\" categories.\r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003EWhen the item belongs to the \u003Cstrong\u003E Chris or I DISLIKE \u003C\u002Fstrong\u003E category, press the F key. \r\n    \u003Cbr\u003E\u003Cbr\u003EWhen the item belongs to the \u003Cstrong\u003E Bob or I LIKE \u003C\u002Fstrong\u003E category, press the J key. \r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003ETry to respond as quickly as possible without making too many mistakes! \r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003C!-- space bar to continue --\u003E\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Ch4\u003E\u003Cb\u003E Press the \u003Ckbd\u003E space bar \u003C\u002Fkbd\u003E to start.\u003C\u002Fb\u003E\u003C\u002Fh4\u003E\r\n\u003C\u002Ffooter\u003E \r\n"
                },
                {
                  "type": "lab.flow.Loop",
                  "files": {},
                  "parameters": {},
                  "templateParameters": [
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "Confident",
                      "corr": "right",
                      "name": "pos1",
                      "type": "word"
                    },
                    {
                      "stim": "Friendly",
                      "corr": "right",
                      "name": "pos2",
                      "type": "word"
                    },
                    {
                      "stim": "Cheerful",
                      "corr": "right",
                      "name": "pos3",
                      "type": "word"
                    },
                    {
                      "stim": "Loyal",
                      "corr": "right",
                      "name": "pos4",
                      "type": "word"
                    },
                    {
                      "stim": "Generous",
                      "corr": "right",
                      "name": "pos5",
                      "type": "word"
                    },
                    {
                      "stim": "Loving",
                      "corr": "right",
                      "name": "pos6",
                      "type": "word"
                    },
                    {
                      "stim": "Liar",
                      "corr": "left",
                      "name": "neg1",
                      "type": "word"
                    },
                    {
                      "stim": "Cruel",
                      "corr": "left",
                      "name": "neg2",
                      "type": "word"
                    },
                    {
                      "stim": "Evil",
                      "corr": "left",
                      "name": "neg3",
                      "type": "word"
                    },
                    {
                      "stim": "Ignorant",
                      "corr": "left",
                      "name": "neg4",
                      "type": "word"
                    },
                    {
                      "stim": "Manipulative",
                      "corr": "left",
                      "name": "neg5",
                      "type": "word"
                    },
                    {
                      "stim": "Rude",
                      "corr": "left",
                      "name": "neg6",
                      "type": "word"
                    },
                    {
                      "stim": "Funny",
                      "corr": "right",
                      "name": "pos7",
                      "type": "word"
                    },
                    {
                      "stim": "Warm",
                      "corr": "right",
                      "name": "pos8",
                      "type": "word"
                    },
                    {
                      "stim": "Selfish",
                      "corr": "left",
                      "name": "neg7",
                      "type": "word"
                    },
                    {
                      "stim": "Disloyal",
                      "corr": "left",
                      "name": "neg8",
                      "type": "word"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    }
                  ],
                  "sample": {
                    "mode": "draw-shuffle",
                    "n": "32"
                  },
                  "responses": {},
                  "messageHandlers": {},
                  "title": "IAT_trialsB6",
                  "shuffleGroups": [],
                  "template": {
                    "type": "lab.html.Frame",
                    "context": "\u003Cmain style=\"background-color:white;\"\u003E\n  \u003Cdiv style=\"font-size:30pt; position:absolute; top:60pt; left:90pt\"\u003E\n    I dislike\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  left:110pt\"\u003E\n    Chris\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style=\"font-size:30pt; position:absolute; top:60pt; right:110pt\"\u003E\n    I like\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  right:110pt\"\u003E\n    Bob\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cmain data-labjs-section=\"frame\" style=\"background-color:white;\"\u003E\n  \u003C!-- Content gets inserted here --\u003E\n\u003C\u002Fmain\u003E",
                    "contextSelector": "[data-labjs-section=\"frame\"]",
                    "files": {},
                    "parameters": {},
                    "responses": {},
                    "messageHandlers": {},
                    "title": "Frame B6",
                    "content": {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "parameters": {},
                      "responses": {},
                      "messageHandlers": {},
                      "title": "TrialSequenceB6",
                      "tardy": true,
                      "skip": "${this.state.response==='escape'}",
                      "content": [
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI pre",
                          "timeout": "200"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {
                            "keypress(f)": "left",
                            "keypress(j)": "right",
                            "keydown(Insert)": "escape"
                          },
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
if (this.parameters.type==='pic'){
this.options.media.images.push('static/' + this.parameters.name);}
}
                          },
                          "title": "Stimulus",
                          "content": " \u003C!-- present stimulus --\u003E \r\n    \u003Cdiv style=\"color:black;font-size:40pt;\"\u003E\r\n    ${parameters.stim}\r\n    \u003C\u002Fdiv\u003E\r\n",
                          "tardy": true,
                          "correctResponse": "${parameters.corr}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "Error",
                          "content": "  \u003Cdiv style=\"font-size: 3.5rem; color:red;\"\u003E\r\n    X\r\n  \u003C\u002Fdiv\u003E",
                          "timeout": "200",
                          "tardy": true,
                          "skip": "${state.correct || parameters.type==='word'}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI post",
                          "timeout": "200"
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "lab.html.Screen",
                  "files": {},
                  "parameters": {},
                  "responses": {
                    "keypress(Space)": "continue"
                  },
                  "messageHandlers": {},
                  "title": "IAT_block7_instructions ",
                  "content": "\u003C!-- present instructions IAT B7 --\u003E\r\n\u003Cmain class=\"fullscreen\" style=\"padding-bottom:2px\"\u003E\r\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:18px; text-align:center\"\u003E\r\n    \u003Cbr\u003E\u003Cbr\u003EYou will now sort the items in the same categories again. \r\n    \u003Cbr\u003E\u003Cbr\u003ERemember to answer as quickly as possible, while trying not to make too many mistakes. \r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003C!-- space bar to continue --\u003E\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Ch4\u003E\u003Cb\u003E Press the \u003Ckbd\u003E space bar \u003C\u002Fkbd\u003E to start.\u003C\u002Fb\u003E \u003C\u002Fh4\u003E\r\n\u003C\u002Ffooter\u003E \r\n"
                },
                {
                  "type": "lab.flow.Loop",
                  "files": {},
                  "parameters": {},
                  "templateParameters": [
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "Confident",
                      "corr": "right",
                      "name": "pos1",
                      "type": "word"
                    },
                    {
                      "stim": "Friendly",
                      "corr": "right",
                      "name": "pos2",
                      "type": "word"
                    },
                    {
                      "stim": "Cheerful",
                      "corr": "right",
                      "name": "pos3",
                      "type": "word"
                    },
                    {
                      "stim": "Loyal",
                      "corr": "right",
                      "name": "pos4",
                      "type": "word"
                    },
                    {
                      "stim": "Generous",
                      "corr": "right",
                      "name": "pos5",
                      "type": "word"
                    },
                    {
                      "stim": "Loving",
                      "corr": "right",
                      "name": "pos6",
                      "type": "word"
                    },
                    {
                      "stim": "Liar",
                      "corr": "left",
                      "name": "neg1",
                      "type": "word"
                    },
                    {
                      "stim": "Cruel",
                      "corr": "left",
                      "name": "neg2",
                      "type": "word"
                    },
                    {
                      "stim": "Evil",
                      "corr": "left",
                      "name": "neg3",
                      "type": "word"
                    },
                    {
                      "stim": "Ignorant",
                      "corr": "left",
                      "name": "neg4",
                      "type": "word"
                    },
                    {
                      "stim": "Manipulative",
                      "corr": "left",
                      "name": "neg5",
                      "type": "word"
                    },
                    {
                      "stim": "Rude",
                      "corr": "left",
                      "name": "neg6",
                      "type": "word"
                    },
                    {
                      "stim": "Funny",
                      "corr": "right",
                      "name": "pos7",
                      "type": "word"
                    },
                    {
                      "stim": "Warm",
                      "corr": "right",
                      "name": "pos8",
                      "type": "word"
                    },
                    {
                      "stim": "Selfish",
                      "corr": "left",
                      "name": "neg7",
                      "type": "word"
                    },
                    {
                      "stim": "Disloyal",
                      "corr": "left",
                      "name": "neg8",
                      "type": "word"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    }
                  ],
                  "sample": {
                    "mode": "draw-shuffle",
                    "n": "32"
                  },
                  "responses": {},
                  "messageHandlers": {},
                  "title": "IAT_trialsB7",
                  "shuffleGroups": [],
                  "template": {
                    "type": "lab.html.Frame",
                    "context": "\u003Cmain style=\"background-color:white;\"\u003E\n  \u003Cdiv style=\"font-size:30pt; position:absolute; top:60pt; left:90pt\"\u003E\n    I dislike\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  left:110pt\"\u003E\n    Chris\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style=\"font-size:30pt; position:absolute; top:60pt; right:110pt\"\u003E\n    I like\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  right:110pt\"\u003E\n    Bob\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cmain data-labjs-section=\"frame\" style=\"background-color:white;\"\u003E\n  \u003C!-- Content gets inserted here --\u003E\n\u003C\u002Fmain\u003E",
                    "contextSelector": "[data-labjs-section=\"frame\"]",
                    "files": {},
                    "parameters": {},
                    "responses": {},
                    "messageHandlers": {},
                    "title": "Frame B7",
                    "content": {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "parameters": {},
                      "responses": {},
                      "messageHandlers": {},
                      "title": "TrialSequenceB7",
                      "tardy": true,
                      "skip": "${this.state.response==='escape'}",
                      "content": [
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI pre",
                          "timeout": "200"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {
                            "keypress(f)": "left",
                            "keypress(j)": "right",
                            "keydown(Insert)": "escape"
                          },
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
if (this.parameters.type==='pic'){
this.options.media.images.push('static/' + this.parameters.name);}
}
                          },
                          "title": "Stimulus",
                          "content": " \u003C!-- present stimulus --\u003E \r\n    \u003Cdiv style=\"color:black;font-size:40pt;\"\u003E\r\n    ${parameters.stim}\r\n    \u003C\u002Fdiv\u003E\r\n",
                          "tardy": true,
                          "correctResponse": "${parameters.corr}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "Error",
                          "content": "  \u003Cdiv style=\"font-size: 3.5rem; color:red;\"\u003E\r\n    X\r\n  \u003C\u002Fdiv\u003E",
                          "timeout": "200",
                          "tardy": true,
                          "skip": "${state.correct || parameters.type==='word'}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI post",
                          "timeout": "200"
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "lab.html.Screen",
                  "files": {},
                  "parameters": {},
                  "responses": {
                    "keypress(Space)": "continue"
                  },
                  "messageHandlers": {},
                  "title": "Thank You",
                  "content": "\u003Cmain class = \"fullscreen\"\u003E\r\n  \u003C!-- present general instructions--\u003E\r\n  \u003Cdiv style=\"text-align:left; font-size:18pt; line-height: 150%\"\u003E\r\n    \u003Cp\u003E\r\n    Thank you. You will now continue to the next part of the study\u003C\u002Fp\u003E\r\n    \u003C\u002Fmain\u003E\r\n\r\n\u003C!-- space bar to continue--\u003E\r\n\u003Cfooter\u003E\r\n  Please press the \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E bar to continue.\r\n\u003C\u002Ffooter\u003E "
                }
              ]
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "parameters": {},
          "responses": {},
          "messageHandlers": {},
          "title": "C3. Negative_Video_IAT_First (Con B First)",
          "tardy": true,
          "skip": "${ this.state.condition !== 'C3. Negative_Video_IAT_First (Con B First)' }",
          "content": [
            {
              "type": "lab.html.Screen",
              "files": {},
              "parameters": {},
              "responses": {
                "keypress(Enter)": "Continue"
              },
              "messageHandlers": {},
              "title": "Video_Negative_Genuine",
              "content": "\u003Cheader\u003E\r\n  \u003Ch3\u003E\u003Cp\u003E Please watch the video from start to finish and pay attention to what Chris says.\u003C\u002Fp\u003E \u003Cp\u003EMake sure your volume is turned up and the subtitles are switched on. \u003C\u002Fp\u003E \u003C\u002Fh3\u003E \u003C\u002Fheader\u003E\r\n\r\n\u003Cmain style=\"margin:0%; content-horizontal-center content-vertical-center\"\u003E\r\n\r\n\u003Ciframe width=\"1000pt\" height=\"700pt\"\r\nsrc=\"https:\u002F\u002Fwww.youtube-nocookie.com\u002Fembed\u002Fg60vZzwkYNE?cc_load_policy=1&autoplay=0\" allow=\"autoplay\"\u003E\r\n\u003C\u002Fiframe\u003E\r\n\r\n\u003C\u002Fmain\u003E​\r\n\r\n\u003Cfooter style=\"padding:5pt; font-size:18pt;text-align:center;\"\u003E\r\n    Please only press the \u003Ckbd\u003E Enter key \u003C\u002Fkbd\u003E once you have watched the entire video from start to finish. \r\n    \u003C\u002Ffooter\u003E\r\n    \r\n"
            },
            {
              "type": "lab.html.Form",
              "content": "\u003Chead\u003E\n\u003Cstyle\u003E\ntable, td, th {border: 0pt solid black;}\n\ntable {border-collapse: collapse;width: 90%;}\n\nth {height: 90%;}\n\u003C\u002Fstyle\u003E\n\u003C\u002Fhead\u003E\n\n\u003Cheader\u003E\u003Ch3 style=\"color:green; font-size:22pt\"\u003E Final Questions (Part 1)\u003C\u002Fh3\u003E \n\u003C!-- instructions --\u003E\n\n\u003Cmain\u003E\n  \u003C!-- ask 4 questions:  --\u003E\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:16pt;\"\u003E\n    \u003Cform id =\"Memory_And_Diagnosticity_Questions\" required\u003E\n      \u003Ctable id=\"Memory_of_Video_Content\"\u003E\n                 \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Clabel for=\"Memory_of_Video_Content\"\u003E  \u003Cp\u003E 1. You just watched a Youtube video from a person called Chris. What were the main things that Chris said in his video? Please try to remember as much from the video as possible. \u003C\u002Fp\u003E \u003C\u002Flabel\u003E\n  \n\u003Cp\u003E\n\u003Ctextarea name = \"Memory_of_Video_Content\" id=\"Memory_of_Video_Content\" size = \"35\" style = \"width: 1000px; height: 250px;\" autocomplete = \"off\" required\u003E\u003C\u002Ftextarea\u003E\n\u003C\u002Fp\u003E\n      \u003Ctable id=\"Diagnosticity_Question\"\u003E\n                 \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Clabel for=\"Diagnosticity_Question\"\u003E  2. During the video Chris provided information about himself. Do you think that this information revealed something about the type of person Chris really is (i.e., his true character)? \u003C\u002Flabel\u003E\n            \u003C\u002Fth\u003E\n               \u003Ctr\u003E\n            \u003Ctd style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Cselect name=\"Diagnosticity_Question\" id=\"Diagnosticity_Question\" required\u003E\n                \u003Coption value=\"\"\u003E ----- \u003C\u002Foption\u003E\n                \u003Coption value=\"Strongly_Diagnostic\"\u003E The info completely revealed Chris' true character \u003C\u002Foption\u003E\n                \u003Coption value=\"Moderately_Diagnostic\"\u003E The info was moderately revealing of Chris' true character   \u003C\u002Foption\u003E\n                \u003Coption value=\"Slightly_Diagnostic\"\u003E The info only slightly revealed Chris' true character \u003C\u002Foption\u003E\n                \u003Coption value=\"Not_Diagnostic\"\u003E The info revealed nothing about Chris' true character \u003C\u002Foption\u003E\n                \u003C\u002Fselect\u003E \n            \u003C\u002Ftd\u003E\n          \u003C\u002Ftr\u003E\n      \u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Please click on this \u003Cbutton type=\"submit\" form=\"Memory_And_Diagnosticity_Questions\"\u003E Submit \u003C\u002Fbutton\u003E button to continue.\n\u003C\u002Ffooter\u003E",
              "files": {},
              "parameters": {},
              "responses": {},
              "messageHandlers": {},
              "title": "Memory Questions"
            },
            {
              "type": "lab.flow.Sequence",
              "files": {},
              "parameters": {},
              "responses": {},
              "messageHandlers": {},
              "title": "IAT (Learning Consistent Block First)",
              "content": [
                {
                  "type": "lab.html.Screen",
                  "files": {},
                  "parameters": {},
                  "responses": {
                    "keypress(Space)": "continue"
                  },
                  "messageHandlers": {},
                  "title": "IAT_Generalinstructions: part 1 ",
                  "content": "\u003Cmain class = \"fullscreen\"\u003E\r\n  \u003C!-- present general instructions--\u003E\r\n  \u003Cdiv style=\"text-align:left; font-size:18pt; line-height: 150%\"\u003E\r\n    \u003Cp\u003E\r\n    In the next part of the study you are going to complete a task where you have to categorize words and images as quickly as possible.\u003C\u002Fp\u003E\r\n      \r\n      \u003Cp\u003E During this task: \u003C\u002Fp\u003E\r\n      \r\n      \u003Col\u003E\r\n\u003Cli\u003E Please keep this screen in full-screen mode at all times\u003C\u002Fli\u003E\r\n\u003Cli\u003E Do not close this screen or switch tabs and stay focused until the end of the task\u003C\u002Fli\u003E\r\n\u003Cli\u003E Make sure Caps Lock is switched off\u003C\u002Fli\u003E\r\n        \u003C\u002Fol\u003E\r\n        \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003C!-- space bar to continue--\u003E\r\n\u003Cfooter\u003E\r\n  Please press the \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E bar to start this task.\r\n\u003C\u002Ffooter\u003E "
                },
                {
                  "type": "lab.html.Screen",
                  "files": {},
                  "parameters": {},
                  "responses": {
                    "keypress(Space)": "Continue"
                  },
                  "messageHandlers": {},
                  "title": "IAT_GeneralInstructions: part 2 ",
                  "content": "\u003C!-- instruct about categories--\u003E\r\n\u003Cmain class=\"fullscreen\" style=\"padding-bottom:2pt; line-height: 150%\"\u003E\r\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:18pt; text-align:center\"\u003E\r\n    \u003Cdiv style=\"color:black;position:absolute;top:50pt; left:50%; margin-left:-300pt\"\u003E\r\n      Below you can see two categories and the images that belong to those categories:\u003C\u002Fdiv\u003E\r\n    \u003Cdiv style=\"position:absolute;top:100pt;left:50pt\"\u003E\r\n    Chris: \u003C\u002Fdiv\u003E\r\n    \u003Cdiv style=\"position:absolute;top:280pt;left:50pt\"\u003E\r\n    Bob: \u003C\u002Fdiv\u003E\r\n   \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003C!-- present stimuli--\u003E\r\n\u003Cdiv style=\"position:absolute;top:130pt;left:120pt\"\u003E \r\n  \u003Cimg src=\"static\u002FChris1.jpg\" width=\"100pt\" alt = \"Image not found\"\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003Cdiv style=\"position:absolute;top:130pt;left:240pt\"\u003E \r\n  \u003Cimg src=\"static\u002FChris2.jpg\" width=\"100pt\" alt = \"Image not found\"\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003Cdiv style=\"position:absolute;top:130pt;left:360pt\"\u003E \r\n  \u003Cimg src=\"static\u002FChris3.jpg\" width=\"100pt\" alt = \"Image not found\"\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003Cdiv style=\"position:absolute;top:130pt;left:480pt\"\u003E \r\n  \u003Cimg src=\"static\u002FChris4.jpg\" width=\"100pt\" alt = \"Image not found\"\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n\u003Cdiv style=\"position:absolute;top:310pt;left:120pt\"\u003E \r\n  \u003Cimg src=\"static\u002FBob1.jpg\" width=\"100pt\" alt = \"Image not found\"\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003Cdiv style=\"position:absolute;top:310pt;left:240pt\"\u003E \r\n  \u003Cimg src=\"static\u002FBob2.jpg\" width=\"100pt\" alt = \"Image not found\"\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003Cdiv style=\"position:absolute;top:310pt;left:360pt\"\u003E \r\n  \u003Cimg src=\"static\u002FBob3.jpg\" width=\"100pt\" alt = \"Image not found\"\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003Cdiv style=\"position:absolute;top:310pt;left:480pt\"\u003E \r\n  \u003Cimg src=\"static\u002FBob4.jpg\" width=\"100pt\" alt = \"Image not found\"\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Ch4\u003E\u003Cb\u003E Press the \u003Ckbd\u003E space bar \u003C\u002Fkbd\u003E to continue.\u003C\u002Fb\u003E \u003C\u002Fh4\u003E\r\n\u003C\u002Ffooter\u003E\r\n"
                },
                {
                  "type": "lab.html.Screen",
                  "files": {},
                  "parameters": {},
                  "responses": {
                    "keypress(Space)": "continue"
                  },
                  "messageHandlers": {},
                  "title": "IAT_block5_instructions ",
                  "content": "\u003C!-- present instructions IAT B5 --\u003E\r\n\u003Cmain class=\"fullscreen\" style=\"padding-bottom:2pt\"\u003E\r\n    \u003Cdiv style=\"color:rgb(20,20,100);font-size:18pt; text-align:center; line-height: 150%\"\u003E\r\n    \u003Cbr\u003E\u003Cbr\u003E During the next part of the study you will see an image or word in the middle of the screen. \r\n    \u003Cbr\u003E Your job is to assign that item to one of two categories. \r\n    \u003Cbr\u003E\u003Cbr\u003E Please respond AS QUICKLY AS POSSIBLE, while at the same time, try not to make too many mistakes and be as accurate as possible \u003Cbr\u003E(some mistakes are OK).\r\n    \u003Cbr\u003E\u003Cbr\u003E The two categories in the first part of the task are:\r\n    \u003Cbr\u003E\u003Cb\u003E Bob \u003C\u002Fb\u003E and \u003Cb\u003E Chris \u003C\u002Fb\u003E.\r\n    \u003Cbr\u003E\u003Cbr\u003EIf the item in the middle of the screen belongs to the \"Bob\" category, press the J key (right on the keyboard).\r\n    \u003Cbr\u003EIf the item in the middle of the screen belongs to the \"Chris\" category, press the F key (left on the keyboard). \r\n        \u003Cbr\u003E\u003Cbr\u003E \u003Cstrong\u003E Keep your fingers on the F and J keys at all times, in order to respond faster. \u003C\u002Fstrong\u003E \r\n    \u003Cbr\u003E\u003Cbr\u003EAvoid all distractions and pay attention. Try to answer as quickly as possible!\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003C!-- space bar to continue --\u003E\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Ch4\u003E\u003Cb\u003E Press the \u003Ckbd\u003E space bar \u003C\u002Fkbd\u003E to start.\u003C\u002Fb\u003E\u003C\u002Fh4\u003E \r\n\u003C\u002Ffooter\u003E \r\n"
                },
                {
                  "type": "lab.flow.Loop",
                  "files": {},
                  "parameters": {},
                  "templateParameters": [
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    }
                  ],
                  "sample": {
                    "mode": "draw-shuffle",
                    "n": "32"
                  },
                  "responses": {},
                  "messageHandlers": {},
                  "title": "IAT_trialsB5",
                  "shuffleGroups": [],
                  "template": {
                    "type": "lab.html.Frame",
                    "context": "\u003Cmain style=\"background-color:white;\"\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  left:110pt\"\u003E\n    Chris\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  right:110pt\"\u003E\n    Bob\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cmain data-labjs-section=\"frame\" style=\"background-color:white;\"\u003E\n  \u003C!-- Content gets inserted here --\u003E\n\u003C\u002Fmain\u003E",
                    "contextSelector": "[data-labjs-section=\"frame\"]",
                    "files": {},
                    "parameters": {},
                    "responses": {},
                    "messageHandlers": {},
                    "title": "Frame B5",
                    "content": {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "parameters": {},
                      "responses": {},
                      "messageHandlers": {},
                      "title": "TrialSequenceB5",
                      "tardy": true,
                      "skip": "${this.state.response==='escape'}",
                      "content": [
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI pre",
                          "timeout": "200"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {
                            "keypress(f)": "left",
                            "keypress(j)": "right",
                            "keydown(Insert)": "escape"
                          },
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
this.options.media.images.push('static/' + this.parameters.name)
}
                          },
                          "title": "Stimulus",
                          "content": " \u003C!-- present stimulus --\u003E \r\n    \u003Cdiv\u003E\r\n    ${parameters.stim}\r\n    \u003C\u002Fdiv\u003E\r\n",
                          "tardy": true,
                          "correctResponse": "${parameters.corr}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "Error",
                          "content": "  \u003Cdiv style=\"font-size: 3.5rem; color:red;\"\u003E\r\n    X\r\n  \u003C\u002Fdiv\u003E",
                          "timeout": "200",
                          "tardy": true,
                          "skip": "${state.correct}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI post",
                          "timeout": "200"
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "lab.html.Screen",
                  "files": {},
                  "parameters": {},
                  "responses": {
                    "keypress(Space)": "continue"
                  },
                  "messageHandlers": {},
                  "title": "IAT_block2_instructions ",
                  "content": "\u003C!-- present instructions IAT B2 --\u003E\r\n\u003Cmain class=\"fullscreen\" style=\"padding-bottom:2px\"\u003E\r\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:18px; text-align:center\"\u003E\r\n    \u003Cbr\u003E\u003Cbr\u003EYou will now see a different set of words. Your job is to indicate whether you like or dislike those words. \r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003EIf the item belongs to the category of things you \u003Cstrong\u003E dislike about people \u003C\u002Fstrong\u003E, press the F key (left on the keyboard).\r\n    \u003Cbr\u003E\u003Cbr\u003EIf the item belongs to the category of things you \u003Cstrong\u003E like about people \u003C\u002Fstrong\u003E, press the J key (right on the keyboard).\r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003ETry to respond AS QUICKLY AS POSSIBLE without making too many mistakes!\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003C!-- space bar to continue --\u003E\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Ch4\u003E\u003Cb\u003E Press the \u003Ckbd\u003E space bar \u003C\u002Fkbd\u003E to start.\u003C\u002Fh4\u003E\u003C\u002Fb\u003E \r\n\u003C\u002Ffooter\u003E\r\n"
                },
                {
                  "type": "lab.flow.Loop",
                  "files": {},
                  "parameters": {},
                  "templateParameters": [
                    {
                      "stim": "Confident",
                      "corr": "right",
                      "name": "pos1",
                      "type": "word"
                    },
                    {
                      "stim": "Friendly",
                      "corr": "right",
                      "name": "pos2",
                      "type": "word"
                    },
                    {
                      "stim": "Cheerful",
                      "corr": "right",
                      "name": "pos3",
                      "type": "word"
                    },
                    {
                      "stim": "Loyal",
                      "corr": "right",
                      "name": "pos4",
                      "type": "word"
                    },
                    {
                      "stim": "Generous",
                      "corr": "right",
                      "name": "pos5",
                      "type": "word"
                    },
                    {
                      "stim": "Loving",
                      "corr": "right",
                      "name": "pos6",
                      "type": "word"
                    },
                    {
                      "stim": "Liar",
                      "corr": "left",
                      "name": "neg1",
                      "type": "word"
                    },
                    {
                      "stim": "Cruel",
                      "corr": "left",
                      "name": "neg2",
                      "type": "word"
                    },
                    {
                      "stim": "Evil",
                      "corr": "left",
                      "name": "neg3",
                      "type": "word"
                    },
                    {
                      "stim": "Ignorant",
                      "corr": "left",
                      "name": "neg4",
                      "type": "word"
                    },
                    {
                      "stim": "Manipulative",
                      "corr": "left",
                      "name": "neg5",
                      "type": "word"
                    },
                    {
                      "stim": "Rude",
                      "corr": "left",
                      "name": "neg6",
                      "type": "word"
                    },
                    {
                      "stim": "Funny",
                      "corr": "right",
                      "name": "pos7",
                      "type": "word"
                    },
                    {
                      "stim": "Warm",
                      "corr": "right",
                      "name": "pos8",
                      "type": "word"
                    },
                    {
                      "stim": "Selfish",
                      "corr": "left",
                      "name": "neg7",
                      "type": "word"
                    },
                    {
                      "stim": "Disloyal",
                      "corr": "left",
                      "name": "neg8",
                      "type": "word"
                    }
                  ],
                  "sample": {
                    "mode": "draw-shuffle",
                    "n": "16"
                  },
                  "responses": {},
                  "messageHandlers": {},
                  "title": "IAT_trialsB2",
                  "shuffleGroups": [],
                  "template": {
                    "type": "lab.html.Frame",
                    "context": "\u003Cmain style=\"background-color:white\"\u003E\n  \u003Cdiv style=\"font-size:30pt; position:absolute; top:60pt; left:90pt\"\u003E\n    I dislike\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style=\"font-size:30pt; position:absolute; top:60pt; right:110pt\"\u003E\n    I like\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cmain data-labjs-section=\"frame\" style=\"background-color:white;\"\u003E\n  \u003C!-- Content gets inserted here --\u003E\n\u003C\u002Fmain\u003E",
                    "contextSelector": "[data-labjs-section=\"frame\"]",
                    "files": {},
                    "parameters": {},
                    "responses": {},
                    "messageHandlers": {},
                    "title": "Frame B2",
                    "content": {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "parameters": {},
                      "responses": {},
                      "messageHandlers": {},
                      "title": "TrialSequenceB2",
                      "tardy": true,
                      "skip": "${this.state.response==='escape'}",
                      "content": [
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI pre",
                          "timeout": "200"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {
                            "keypress(f)": "left",
                            "keypress(j)": "right",
                            "keydown(Insert)": "escape"
                          },
                          "messageHandlers": {},
                          "title": "Stimulus",
                          "content": " \u003C!-- present stimulus --\u003E \r\n    \u003Cdiv style=\"color:black;font-size:40pt;\"\u003E\r\n    ${parameters.stim}\r\n    \u003C\u002Fdiv\u003E\r\n",
                          "tardy": true,
                          "correctResponse": "${parameters.corr}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "Error",
                          "content": "  \u003Cdiv style=\"font-size: 3.5rem; color:red;\"\u003E\r\n    X\r\n  \u003C\u002Fdiv\u003E",
                          "timeout": "200",
                          "tardy": true,
                          "skip": "${state.correct || parameters.type==='word'}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI post",
                          "timeout": "200"
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "lab.html.Screen",
                  "files": {},
                  "parameters": {},
                  "responses": {
                    "keypress(Space)": "continue"
                  },
                  "messageHandlers": {},
                  "title": "IAT_block6_instructions",
                  "content": "\u003C!-- present instructions IAT B6 --\u003E\r\n\u003Cmain class=\"fullscreen\" style=\"padding-bottom:2pt\"\u003E\r\n    \u003Cdiv style=\"color:rgb(20,20,100);font-size:18px; text-align:center\"\u003E\r\n    \u003Cbr\u003E\u003Cbr\u003EThe four categories of items you saw separately will now appear together. \r\n    \u003Cbr\u003E\u003Cbr\u003EItems that belong to the \u003Cstrong\u003E \"Bob\" \u003C\u002Fstrong\u003E and \u003Cstrong\u003E \"Chris\" \u003C\u002Fstrong\u003E categories,\r\n    \u003Cbr\u003E\u003Cbr\u003EAND\r\n    \u003Cbr\u003E\u003Cbr\u003Eitems that belong to the \u003Cstrong\u003E \"things I dislike about someone\" \u003C\u002Fstrong\u003E and \u003Cstrong\u003E \"things I like about someone\" \u003C\u002Fstrong\u003E categories. \r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003EWhen the item belongs to the Chris or I DISLIKE category press the F key.\r\n    \u003Cbr\u003E\u003Cbr\u003EWhen the item belongs to the Bob or I LIKE category, press the J key. \r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003EPlease remember to answer as quickly as possible (without making too many mistakes)!\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003C!-- space bar to continue --\u003E\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Ch4\u003E\u003Cb\u003E Press the \u003Ckbd\u003E space bar \u003C\u002Fkbd\u003E to start.\u003C\u002Fb\u003E\u003C\u002Fh4\u003E\r\n\u003C\u002Ffooter\u003E \r\n"
                },
                {
                  "type": "lab.flow.Loop",
                  "files": {},
                  "parameters": {},
                  "templateParameters": [
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "Confident",
                      "corr": "right",
                      "name": "pos1",
                      "type": "word"
                    },
                    {
                      "stim": "Friendly",
                      "corr": "right",
                      "name": "pos2",
                      "type": "word"
                    },
                    {
                      "stim": "Cheerful",
                      "corr": "right",
                      "name": "pos3",
                      "type": "word"
                    },
                    {
                      "stim": "Loyal",
                      "corr": "right",
                      "name": "pos4",
                      "type": "word"
                    },
                    {
                      "stim": "Generous",
                      "corr": "right",
                      "name": "pos5",
                      "type": "word"
                    },
                    {
                      "stim": "Loving",
                      "corr": "right",
                      "name": "pos6",
                      "type": "word"
                    },
                    {
                      "stim": "Liar",
                      "corr": "left",
                      "name": "neg1",
                      "type": "word"
                    },
                    {
                      "stim": "Cruel",
                      "corr": "left",
                      "name": "neg2",
                      "type": "word"
                    },
                    {
                      "stim": "Evil",
                      "corr": "left",
                      "name": "neg3",
                      "type": "word"
                    },
                    {
                      "stim": "Ignorant",
                      "corr": "left",
                      "name": "neg4",
                      "type": "word"
                    },
                    {
                      "stim": "Manipulative",
                      "corr": "left",
                      "name": "neg5",
                      "type": "word"
                    },
                    {
                      "stim": "Rude",
                      "corr": "left",
                      "name": "neg6",
                      "type": "word"
                    },
                    {
                      "stim": "Funny",
                      "corr": "right",
                      "name": "pos7",
                      "type": "word"
                    },
                    {
                      "stim": "Warm",
                      "corr": "right",
                      "name": "pos8",
                      "type": "word"
                    },
                    {
                      "stim": "Selfish",
                      "corr": "left",
                      "name": "neg7",
                      "type": "word"
                    },
                    {
                      "stim": "Disloyal",
                      "corr": "left",
                      "name": "neg8",
                      "type": "word"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    }
                  ],
                  "sample": {
                    "mode": "draw-shuffle",
                    "n": "32"
                  },
                  "responses": {},
                  "messageHandlers": {},
                  "title": "IAT_trialsB6",
                  "shuffleGroups": [],
                  "template": {
                    "type": "lab.html.Frame",
                    "context": "\u003Cmain style=\"background-color:white;\"\u003E\n  \u003Cdiv style=\"font-size:30pt; position:absolute; top:60pt; left:90pt\"\u003E\n    I dislike\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  left:110pt\"\u003E\n    Chris\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style=\"font-size:30pt; position:absolute; top:60pt; right:110pt\"\u003E\n    I like \n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  right:110pt\"\u003E\n    Bob\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cmain data-labjs-section=\"frame\" style=\"background-color:white;\"\u003E\n  \u003C!-- Content gets inserted here --\u003E\n\u003C\u002Fmain\u003E",
                    "contextSelector": "[data-labjs-section=\"frame\"]",
                    "files": {},
                    "parameters": {},
                    "responses": {},
                    "messageHandlers": {},
                    "title": "Frame B6",
                    "content": {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "parameters": {},
                      "responses": {},
                      "messageHandlers": {},
                      "title": "TrialSequenceB6",
                      "tardy": true,
                      "skip": "${this.state.response==='escape'}",
                      "content": [
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI pre",
                          "timeout": "200"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {
                            "keypress(f)": "left",
                            "keypress(j)": "right",
                            "keydown(Insert)": "escape"
                          },
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
if (this.parameters.type==='pic'){
this.options.media.images.push('static/' + this.parameters.name);}
}
                          },
                          "title": "Stimulus",
                          "content": " \u003C!-- present stimulus --\u003E \r\n    \u003Cdiv style=\"color:black;font-size:40pt;\"\u003E\r\n    ${parameters.stim}\r\n    \u003C\u002Fdiv\u003E\r\n",
                          "tardy": true,
                          "correctResponse": "${parameters.corr}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "Error",
                          "content": "  \u003Cdiv style=\"font-size: 3.5rem; color:red;\"\u003E\r\n    X\r\n  \u003C\u002Fdiv\u003E",
                          "timeout": "200",
                          "tardy": true,
                          "skip": "${state.correct || parameters.type==='word'}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI post",
                          "timeout": "200"
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "lab.html.Screen",
                  "files": {},
                  "parameters": {},
                  "responses": {
                    "keypress(Space)": "continue"
                  },
                  "messageHandlers": {},
                  "title": "IAT_block7_instructions ",
                  "content": "\u003C!-- present instructions IAT B7 --\u003E\r\n\u003Cmain class=\"fullscreen\" style=\"padding-bottom:2px\"\u003E\r\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:18px; text-align:center\"\u003E\r\n    \u003Cbr\u003E\u003Cbr\u003EYou will now sort the items in the same categories again. \r\n    \u003Cbr\u003E\u003Cbr\u003ERemember to answer as quickly as possible, while trying not to make too many mistakes. \r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003C!-- space bar to continue --\u003E\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Ch4\u003E\u003Cb\u003E Press the \u003Ckbd\u003E space bar \u003C\u002Fkbd\u003E to start.\u003C\u002Fb\u003E \u003C\u002Fh4\u003E\r\n\u003C\u002Ffooter\u003E \r\n"
                },
                {
                  "type": "lab.flow.Loop",
                  "files": {},
                  "parameters": {},
                  "templateParameters": [
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "Confident",
                      "corr": "right",
                      "name": "pos1",
                      "type": "word"
                    },
                    {
                      "stim": "Friendly",
                      "corr": "right",
                      "name": "pos2",
                      "type": "word"
                    },
                    {
                      "stim": "Cheerful",
                      "corr": "right",
                      "name": "pos3",
                      "type": "word"
                    },
                    {
                      "stim": "Loyal",
                      "corr": "right",
                      "name": "pos4",
                      "type": "word"
                    },
                    {
                      "stim": "Generous",
                      "corr": "right",
                      "name": "pos5",
                      "type": "word"
                    },
                    {
                      "stim": "Loving",
                      "corr": "right",
                      "name": "pos6",
                      "type": "word"
                    },
                    {
                      "stim": "Selfish",
                      "corr": "left",
                      "name": "neg1",
                      "type": "word"
                    },
                    {
                      "stim": "Disloyal",
                      "corr": "left",
                      "name": "neg2",
                      "type": "word"
                    },
                    {
                      "stim": "Liar",
                      "corr": "left",
                      "name": "neg3",
                      "type": "word"
                    },
                    {
                      "stim": "Cruel",
                      "corr": "left",
                      "name": "neg4",
                      "type": "word"
                    },
                    {
                      "stim": "Evil",
                      "corr": "left",
                      "name": "neg5",
                      "type": "word"
                    },
                    {
                      "stim": "Ignorant",
                      "corr": "left",
                      "name": "neg6",
                      "type": "word"
                    },
                    {
                      "stim": "Funny",
                      "corr": "right",
                      "name": "pos7",
                      "type": "word"
                    },
                    {
                      "stim": "Warm",
                      "corr": "right",
                      "name": "pos8",
                      "type": "word"
                    },
                    {
                      "stim": "Manipulative",
                      "corr": "left",
                      "name": "neg7",
                      "type": "word"
                    },
                    {
                      "stim": "Rude",
                      "corr": "left",
                      "name": "neg8",
                      "type": "word"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    }
                  ],
                  "sample": {
                    "mode": "draw-shuffle",
                    "n": "32"
                  },
                  "responses": {},
                  "messageHandlers": {},
                  "title": "IAT_trialsB7",
                  "shuffleGroups": [],
                  "template": {
                    "type": "lab.html.Frame",
                    "context": "\u003Cmain style=\"background-color:white;\"\u003E\n  \u003Cdiv style=\"font-size:30pt; position:absolute; top:60pt; left:90pt\"\u003E\n    I dislike\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  left:110pt\"\u003E\n    Chris\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style=\"font-size:30pt; position:absolute; top:60pt; right:110pt\"\u003E\n    I like\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  right:110pt\"\u003E\n    Bob\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cmain data-labjs-section=\"frame\" style=\"background-color:white;\"\u003E\n  \u003C!-- Content gets inserted here --\u003E\n\u003C\u002Fmain\u003E",
                    "contextSelector": "[data-labjs-section=\"frame\"]",
                    "files": {},
                    "parameters": {},
                    "responses": {},
                    "messageHandlers": {},
                    "title": "Frame B7",
                    "content": {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "parameters": {},
                      "responses": {},
                      "messageHandlers": {},
                      "title": "TrialSequenceB7",
                      "tardy": true,
                      "skip": "${this.state.response==='escape'}",
                      "content": [
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI pre",
                          "timeout": "200"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {
                            "keypress(f)": "left",
                            "keypress(j)": "right",
                            "keydown(Insert)": "escape"
                          },
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
if (this.parameters.type==='pic'){
this.options.media.images.push('static/' + this.parameters.name);}
}
                          },
                          "title": "Stimulus",
                          "content": " \u003C!-- present stimulus --\u003E \r\n    \u003Cdiv style=\"color:black;font-size:40pt;\"\u003E\r\n    ${parameters.stim}\r\n    \u003C\u002Fdiv\u003E\r\n",
                          "tardy": true,
                          "correctResponse": "${parameters.corr}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "Error",
                          "content": "  \u003Cdiv style=\"font-size: 3.5rem; color:red;\"\u003E\r\n    X\r\n  \u003C\u002Fdiv\u003E",
                          "timeout": "200",
                          "tardy": true,
                          "skip": "${state.correct || parameters.type==='word'}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI post",
                          "timeout": "200"
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "lab.html.Screen",
                  "files": {},
                  "parameters": {},
                  "responses": {
                    "keypress(Space)": "continue"
                  },
                  "messageHandlers": {},
                  "title": "IAT_block1_instructions ",
                  "content": "\u003Cmain class=\"fullscreen\" style=\"padding-bottom:2pt\"\u003E\r\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:18pt; text-align:center\"\u003E\r\n   \u003Cbr\u003E\u003Cbr\u003EIn the next part only two of the categories of items will be presented.\r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003EHowever: This time you will need to assign the items to the categories using the opposite key as before.\r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003EWhen the item belongs to the \u003Cstrong\u003E \"Bob\" \u003C\u002Fstrong\u003E category, press the F key. \r\n    \u003Cbr\u003E\u003Cbr\u003EWhen the item belongs to the \u003Cstrong\u003E \"Chris\" \u003C\u002Fstrong\u003E category, press the J key. \r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003EPlease answer as quickly as possible!\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Ch4\u003E\u003Cb\u003E Press the \u003Ckbd\u003E space bar \u003C\u002Fkbd\u003E when you have your fingers on the F and J keys and are ready to start the task.\u003C\u002Fb\u003E \u003C\u002Fh4\u003E\r\n\u003C\u002Ffooter\u003E\r\n"
                },
                {
                  "type": "lab.flow.Loop",
                  "files": {},
                  "parameters": {},
                  "templateParameters": [
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    }
                  ],
                  "sample": {
                    "mode": "draw-shuffle",
                    "n": "16"
                  },
                  "responses": {},
                  "messageHandlers": {},
                  "title": "IAT_trialsB1",
                  "shuffleGroups": [],
                  "template": {
                    "type": "lab.html.Frame",
                    "context": "\u003Cmain style=\"background-color:White;\"\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  left:110pt\"\u003E\n    Bob\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  right:110pt\"\u003E\n    Chris\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cmain data-labjs-section=\"frame\" style=\"background-color:white;\"\u003E\n  \u003C!-- Content gets inserted here --\u003E\n\u003C\u002Fmain\u003E",
                    "contextSelector": "[data-labjs-section=\"frame\"]",
                    "files": {},
                    "parameters": {},
                    "responses": {},
                    "messageHandlers": {},
                    "title": "Frame B1",
                    "content": {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "parameters": {},
                      "responses": {},
                      "messageHandlers": {},
                      "title": "TrialSequenceB1",
                      "tardy": true,
                      "skip": "${this.state.response==='escape'}",
                      "content": [
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI pre",
                          "timeout": "200"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {
                            "keypress(f)": "left",
                            "keypress(j)": "right",
                            "keydown(Insert)": "escape"
                          },
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
this.options.media.images.push('static/' + this.parameters.name)
}
                          },
                          "title": "Stimulus",
                          "content": " \u003C!-- present stimulus --\u003E \r\n    \u003Cdiv\u003E\r\n    ${parameters.stim}\r\n    \u003C\u002Fdiv\u003E\r\n",
                          "tardy": true,
                          "correctResponse": "${parameters.corr}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "Error",
                          "content": "  \u003Cdiv style=\"font-size: 3.5rem; color:red;\"\u003E\r\n    X\r\n  \u003C\u002Fdiv\u003E",
                          "timeout": "200",
                          "tardy": true,
                          "skip": "${state.correct}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI post",
                          "timeout": "200"
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "lab.html.Screen",
                  "files": {},
                  "parameters": {},
                  "responses": {
                    "keypress(Space)": "continue"
                  },
                  "messageHandlers": {},
                  "title": "IAT_block3_instructions ",
                  "content": "\u003C!-- present instructions IAT B3 --\u003E\r\n\u003Cmain class=\"fullscreen\" style=\"padding-bottom:2px\"\u003E\r\n    \u003Cdiv style=\"color:rgb(20,20,100);font-size:18pt; text-align:center\"\u003E\r\n    \u003Cp\u003E\u003Cbr\u003E\u003Cbr\u003EYou will now see the four categories once again. \r\n    \u003Cbr\u003E\u003Cbr\u003EItems that belong to the Chris and Bob categories, \r\n    \u003Cbr\u003E\u003Cbr\u003EAND \r\n    \u003Cbr\u003E\u003Cbr\u003Eitems that belong to the \"things I DISLIKE about someone\" and \"the things I LIKE about someone\" categories.\r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003EWhen the item belongs to the \u003Cstrong\u003E Bob or I DISLIKE category \u003C\u002Fstrong\u003E, press the F key. \r\n    \u003Cbr\u003E\u003Cbr\u003EWhen the item belongs to the \u003Cstrong\u003E Chris or I LIKE category \u003C\u002Fstrong\u003E, press the J key. \r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003ETry to respond as quickly as possible without making too many mistakes! \r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Ch4\u003E\u003Cb\u003E Press the \u003Ckbd\u003E space bar \u003C\u002Fkbd\u003E to start.\u003C\u002Fb\u003E\u003C\u002Fh4\u003E \r\n\u003C\u002Ffooter\u003E\r\n\r\n"
                },
                {
                  "type": "lab.flow.Loop",
                  "files": {},
                  "parameters": {},
                  "templateParameters": [
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "Confident",
                      "corr": "right",
                      "name": "pos1",
                      "type": "word"
                    },
                    {
                      "stim": "Friendly",
                      "corr": "right",
                      "name": "pos2",
                      "type": "word"
                    },
                    {
                      "stim": "Cheerful",
                      "corr": "right",
                      "name": "pos3",
                      "type": "word"
                    },
                    {
                      "stim": "Loyal",
                      "corr": "right",
                      "name": "pos4",
                      "type": "word"
                    },
                    {
                      "stim": "Generous",
                      "corr": "right",
                      "name": "pos5",
                      "type": "word"
                    },
                    {
                      "stim": "Loving",
                      "corr": "right",
                      "name": "pos6",
                      "type": "word"
                    },
                    {
                      "stim": "Liar",
                      "corr": "left",
                      "name": "neg1",
                      "type": "word"
                    },
                    {
                      "stim": "Cruel",
                      "corr": "left",
                      "name": "neg2",
                      "type": "word"
                    },
                    {
                      "stim": "Evil",
                      "corr": "left",
                      "name": "neg3",
                      "type": "word"
                    },
                    {
                      "stim": "Ignorant",
                      "corr": "left",
                      "name": "neg4",
                      "type": "word"
                    },
                    {
                      "stim": "Manipulative",
                      "corr": "left",
                      "name": "neg5",
                      "type": "word"
                    },
                    {
                      "stim": "Rude",
                      "corr": "left",
                      "name": "neg6",
                      "type": "word"
                    },
                    {
                      "stim": "Funny",
                      "corr": "right",
                      "name": "pos7",
                      "type": "word"
                    },
                    {
                      "stim": "Warm",
                      "corr": "right",
                      "name": "pos8",
                      "type": "word"
                    },
                    {
                      "stim": "Selfish",
                      "corr": "right",
                      "name": "neg7",
                      "type": "word"
                    },
                    {
                      "stim": "Disloyal",
                      "corr": "right",
                      "name": "neg8",
                      "type": "word"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    }
                  ],
                  "sample": {
                    "mode": "draw-shuffle",
                    "n": "32"
                  },
                  "responses": {},
                  "messageHandlers": {},
                  "title": "IAT_trialsB3",
                  "shuffleGroups": [],
                  "template": {
                    "type": "lab.html.Frame",
                    "context": "\u003Cmain style=\"background-color:white;\"\u003E\n  \u003Cdiv style=\"font-size:30pt; position:absolute; top:60pt; left:90pt\"\u003E\n    I dislike\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  left:110pt\"\u003E\n    Bob\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style=\"font-size:30pt; position:absolute; top:60pt; right:110pt\"\u003E\n    I like\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  right:110pt\"\u003E\n    Chris\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cmain data-labjs-section=\"frame\" style=\"background-color:white;\"\u003E\n  \u003C!-- Content gets inserted here --\u003E\n\u003C\u002Fmain\u003E",
                    "contextSelector": "[data-labjs-section=\"frame\"]",
                    "files": {},
                    "parameters": {},
                    "responses": {},
                    "messageHandlers": {},
                    "title": "Frame B3",
                    "content": {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "parameters": {},
                      "responses": {},
                      "messageHandlers": {},
                      "title": "TrialSequenceB3",
                      "tardy": true,
                      "skip": "${this.state.response==='escape'}",
                      "content": [
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI pre",
                          "timeout": "200"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {
                            "keypress(f)": "left",
                            "keypress(j)": "right",
                            "keydown(Insert)": "escape"
                          },
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
if (this.parameters.type==='pic'){
this.options.media.images.push('static/' + this.parameters.name);}
}
                          },
                          "title": "Stimulus",
                          "content": " \u003C!-- present stimulus --\u003E \r\n    \u003Cdiv style=\"color:black;font-size:40pt;\"\u003E\r\n    ${parameters.stim}\r\n    \u003C\u002Fdiv\u003E\r\n",
                          "tardy": true,
                          "correctResponse": "${parameters.corr}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "Error",
                          "content": "  \u003Cdiv style=\"font-size: 3.5rem; color:red;\"\u003E\r\n    X\r\n  \u003C\u002Fdiv\u003E",
                          "timeout": "200",
                          "tardy": true,
                          "skip": "${state.correct || parameters.type==='word'}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI post",
                          "timeout": "200"
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "lab.html.Screen",
                  "files": {},
                  "parameters": {},
                  "responses": {
                    "keypress(Space)": "continue"
                  },
                  "messageHandlers": {},
                  "title": "IAT_block4_instructions ",
                  "content": "\u003C!-- present instructions IAT B4 --\u003E\r\n\u003Cmain class=\"fullscreen\" style=\"padding-bottom:2pt\"\u003E\r\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:18pt; text-align:center\"\u003E\r\n    \u003Cbr\u003E\u003Cbr\u003E You will now sort items in the same categories again. \r\n    \u003Cbr\u003E\u003Cbr\u003ERemember to respond AS QUICKLY AS POSSIBLE without making too many mistakes. \r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003C!-- space bar to continue --\u003E\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Ch4\u003E\u003Cb\u003E Press the \u003Ckbd\u003E space bar \u003C\u002Fkbd\u003E to start.\u003C\u002Fb\u003E \u003C\u002Fh4\u003E\r\n\u003C\u002Ffooter\u003E\r\n"
                },
                {
                  "type": "lab.flow.Loop",
                  "files": {},
                  "parameters": {},
                  "templateParameters": [
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "Confident",
                      "corr": "right",
                      "name": "pos1",
                      "type": "word"
                    },
                    {
                      "stim": "Friendly",
                      "corr": "right",
                      "name": "pos2",
                      "type": "word"
                    },
                    {
                      "stim": "Cheerful",
                      "corr": "right",
                      "name": "pos3",
                      "type": "word"
                    },
                    {
                      "stim": "Loyal",
                      "corr": "right",
                      "name": "pos4",
                      "type": "word"
                    },
                    {
                      "stim": "Generous",
                      "corr": "right",
                      "name": "pos5",
                      "type": "word"
                    },
                    {
                      "stim": "Loving",
                      "corr": "right",
                      "name": "pos6",
                      "type": "word"
                    },
                    {
                      "stim": "Liar",
                      "corr": "left",
                      "name": "neg1",
                      "type": "word"
                    },
                    {
                      "stim": "Cruel",
                      "corr": "left",
                      "name": "neg2",
                      "type": "word"
                    },
                    {
                      "stim": "Evil",
                      "corr": "left",
                      "name": "neg3",
                      "type": "word"
                    },
                    {
                      "stim": "Ignorant",
                      "corr": "left",
                      "name": "neg4",
                      "type": "word"
                    },
                    {
                      "stim": "Manipulative",
                      "corr": "left",
                      "name": "neg5",
                      "type": "word"
                    },
                    {
                      "stim": "Rude",
                      "corr": "left",
                      "name": "neg6",
                      "type": "word"
                    },
                    {
                      "stim": "Funny",
                      "corr": "right",
                      "name": "pos7",
                      "type": "word"
                    },
                    {
                      "stim": "Warm",
                      "corr": "right",
                      "name": "pos8",
                      "type": "word"
                    },
                    {
                      "stim": "Selfish",
                      "corr": "left",
                      "name": "neg7",
                      "type": "word"
                    },
                    {
                      "stim": "Disloyal",
                      "corr": "left",
                      "name": "neg8",
                      "type": "word"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    }
                  ],
                  "sample": {
                    "mode": "draw-shuffle",
                    "n": "32"
                  },
                  "responses": {},
                  "messageHandlers": {},
                  "title": "IAT_trialsB4",
                  "shuffleGroups": [],
                  "template": {
                    "type": "lab.html.Frame",
                    "context": "\u003Cmain style=\"background-color:white;\"\u003E\n  \u003Cdiv style=\"font-size:30pt; position:absolute; top:60pt; left:90pt\"\u003E\n    I dislike\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  left:110pt\"\u003E\n    Bob\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style=\"font-size:30pt; position:absolute; top:60pt; right:110pt\"\u003E\n    I like\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  right:110pt\"\u003E\n    Chris\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cmain data-labjs-section=\"frame\" style=\"background-color:white;\"\u003E\n  \u003C!-- Content gets inserted here --\u003E\n\u003C\u002Fmain\u003E",
                    "contextSelector": "[data-labjs-section=\"frame\"]",
                    "files": {},
                    "parameters": {},
                    "responses": {},
                    "messageHandlers": {},
                    "title": "Frame B4",
                    "content": {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "parameters": {},
                      "responses": {},
                      "messageHandlers": {},
                      "title": "TrialSequenceB4",
                      "tardy": true,
                      "skip": "${this.state.response==='escape'}",
                      "content": [
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI pre",
                          "timeout": "200"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {
                            "keypress(f)": "left",
                            "keypress(j)": "right",
                            "keydown(Insert)": "escape"
                          },
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
if (this.parameters.type==='pic'){
this.options.media.images.push('static/' + this.parameters.name);}
}
                          },
                          "title": "Stimulus",
                          "content": " \u003C!-- present stimulus --\u003E \r\n    \u003Cdiv style=\"color:black;font-size:40pt;\"\u003E\r\n    ${parameters.stim}\r\n    \u003C\u002Fdiv\u003E\r\n",
                          "tardy": true,
                          "correctResponse": "${parameters.corr}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "Error",
                          "content": "  \u003Cdiv style=\"font-size: 3.5rem; color:red;\"\u003E\r\n    X\r\n  \u003C\u002Fdiv\u003E",
                          "timeout": "200",
                          "tardy": true,
                          "skip": "${state.correct || parameters.type==='word'}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI post",
                          "timeout": "200"
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "lab.html.Screen",
                  "files": {},
                  "parameters": {},
                  "responses": {
                    "keypress(Space)": "continue"
                  },
                  "messageHandlers": {},
                  "title": "Thank You",
                  "content": "\u003Cmain class = \"fullscreen\"\u003E\r\n  \u003C!-- present general instructions--\u003E\r\n  \u003Cdiv style=\"text-align:left; font-size:18pt; line-height: 150%\"\u003E\r\n    \u003Cp\u003E\r\n    Thank you. You will now continue to the next part of the study\u003C\u002Fp\u003E\r\n    \u003C\u002Fmain\u003E\r\n\r\n\u003C!-- space bar to continue--\u003E\r\n\u003Cfooter\u003E\r\n  Please press the \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E bar to continue.\r\n\u003C\u002Ffooter\u003E "
                }
              ]
            },
            {
              "type": "lab.flow.Sequence",
              "files": {},
              "parameters": {},
              "responses": {},
              "messageHandlers": {},
              "title": "Self_Reported_Ratings",
              "content": [
                {
                  "type": "lab.html.Form",
                  "content": "\u003Chead\u003E\n  \u003Cstyle type=\"text\u002Fcss\"\u003E\n    #likert { text-align:center; }\n    #likert td { width: 15%; }\n   \u003C\u002Fstyle\u003E\n\u003C\u002Fhead\u003E\n \n\u003Cheader style = \"top:110pt;left:110pt\"\u003E\n\u003Cimg src=\"static\u002FChris.jpg\" width=\"280pt\"\u003E\n  \u003C\u002Fheader \u003E\n\n\u003Cmain\u003E\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:20pt;\"\u003E\n   \u003Cstrong style=\"font-size:20pt;\"\u003EPlease indicate how you feel about Chris\u003C\u002Fstrong\u003E\n    \u003Cform id =\"Ratings_Negative_Positive\" required\u003E\n      \n      \u003Cp\u003E(-3 = Negative \u002F 0 = Neutral \u002F +3 = Positive)\u003C\u002Fp\u003E\n  \n      \u003Ctable style=\"width:50%; margin-left:auto; margin-right:auto\"\u003E\n    \u003Ctr\u003E\n    \u003Cth\u003E-3\u003C\u002Fth\u003E\n    \u003Cth\u003E-2\u003C\u002Fth\u003E \n    \u003Cth\u003E-1\u003C\u002Fth\u003E\n    \u003Cth\u003E0\u003C\u002Fth\u003E\n    \u003Cth\u003E1\u003C\u002Fth\u003E\n    \u003Cth\u003E2\u003C\u002Fth\u003E\n    \u003Cth\u003E3\u003C\u002Fth\u003E    \n  \u003C\u002Ftr\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"-3\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"-2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"-1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"0\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"3\" required\u003E\u003C\u002Ftd\u003E\n         \u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Please click on this \u003Cbutton type=\"submit\" form=\"Ratings_Negative_Positive\"\u003E Submit \u003C\u002Fbutton\u003E button to continue.\n\u003C\u002Ffooter\u003E",
                  "files": {},
                  "parameters": {},
                  "responses": {},
                  "messageHandlers": {},
                  "title": "Ratings_Negative_Positive"
                },
                {
                  "type": "lab.html.Form",
                  "content": "\u003Chead\u003E\n  \u003Cstyle type=\"text\u002Fcss\"\u003E\n    #likert { text-align:center; }\n    #likert td { width: 15%; }\n   \u003C\u002Fstyle\u003E\n\u003C\u002Fhead\u003E\n \n\u003Cheader style = \"top:110pt;left:110pt\"\u003E\n\u003Cimg src=\"static\u002FChris.jpg\" width=\"280pt\"\u003E\n  \u003C\u002Fheader \u003E\n\n\u003Cmain\u003E\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:20pt;\"\u003E\n    \u003Cstrong style=\"font-size:20pt;\"\u003EPlease indicate how you feel about Chris\u003C\u002Fstrong\u003E\n    \u003Cform id =\"Ratings_Good_Bad\" required\u003E\n      \n      \u003Cp\u003E(-3 = Bad \u002F 0 = Neutral \u002F +3 = Good)\u003C\u002Fp\u003E\n  \n      \u003Ctable style=\"width:50%; margin-left:auto; margin-right:auto\"\u003E\n    \u003Ctr\u003E\n    \u003Cth\u003E-3\u003C\u002Fth\u003E\n    \u003Cth\u003E-2\u003C\u002Fth\u003E \n    \u003Cth\u003E-1\u003C\u002Fth\u003E\n    \u003Cth\u003E0\u003C\u002Fth\u003E\n    \u003Cth\u003E1\u003C\u002Fth\u003E\n    \u003Cth\u003E2\u003C\u002Fth\u003E\n    \u003Cth\u003E3\u003C\u002Fth\u003E    \n  \u003C\u002Ftr\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"-3\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"-2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"-1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"0\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"3\" required\u003E\u003C\u002Ftd\u003E\n        \u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Please click on this \u003Cbutton type=\"submit\" form=\"Ratings_Good_Bad\"\u003E Submit \u003C\u002Fbutton\u003E button to continue.\n\u003C\u002Ffooter\u003E",
                  "files": {},
                  "parameters": {},
                  "responses": {},
                  "messageHandlers": {},
                  "title": "Ratings_Good_Bad"
                },
                {
                  "type": "lab.html.Form",
                  "content": "\u003Chead\u003E\n  \u003Cstyle type=\"text\u002Fcss\"\u003E\n    #likert { text-align:center; }\n    #likert td { width: 13%; }\n   \u003C\u002Fstyle\u003E\n\u003C\u002Fhead\u003E\n \u003Cheader style = \"top:110pt;left:110pt\"\u003E\n\u003Cimg src=\"static\u002FChris.jpg\" width=\"280pt\"\u003E\n  \u003C\u002Fheader \u003E\n\n\u003Cmain\u003E\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:20pt;\"\u003E\n    \u003Cstrong style=\"font-size:20pt;\"\u003EPlease indicate how you feel about Chris\u003C\u002Fstrong\u003E\n    \u003Cform id =\"Ratings_Like_Dislike\" required\u003E\n      \n           \u003Cp\u003E(-3 = I Dislike Him \u002F 0 = Neutral \u002F +3 = I Like Him)\u003C\u002Fp\u003E\n  \n      \u003Ctable style=\"width:50%; margin-left:auto; margin-right:auto\"\u003E\n    \u003Ctr\u003E\n    \u003Cth\u003E-3\u003C\u002Fth\u003E\n    \u003Cth\u003E-2\u003C\u002Fth\u003E \n    \u003Cth\u003E-1\u003C\u002Fth\u003E\n    \u003Cth\u003E0\u003C\u002Fth\u003E\n    \u003Cth\u003E1\u003C\u002Fth\u003E\n    \u003Cth\u003E2\u003C\u002Fth\u003E\n    \u003Cth\u003E3\u003C\u002Fth\u003E    \n  \u003C\u002Ftr\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"-3\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"-2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"-1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"0\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"3\" required\u003E\u003C\u002Ftd\u003E\n         \u003C\u002Ftr\u003E\n      \u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Please click on this \u003Cbutton type=\"submit\" form=\"Ratings_Like_Dislike\"\u003E Submit \u003C\u002Fbutton\u003E button to continue.\n\u003C\u002Ffooter\u003E",
                  "files": {},
                  "parameters": {},
                  "responses": {},
                  "messageHandlers": {},
                  "title": "Ratings_Like_Dislike"
                }
              ]
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "parameters": {},
          "responses": {},
          "messageHandlers": {},
          "title": "C4. Negative_Video_SR_First (Con B First)",
          "tardy": true,
          "skip": "${ this.state.condition !== 'C4. Negative_Video_SR_First (Con B First)' }",
          "content": [
            {
              "type": "lab.html.Screen",
              "files": {},
              "parameters": {},
              "responses": {
                "keypress(Enter)": "Continue"
              },
              "messageHandlers": {},
              "title": "Video_Negative_Genuine",
              "content": "\u003Cheader\u003E\r\n  \u003Ch3\u003E\u003Cp\u003E Please watch the video from start to finish and pay attention to what Chris says.\u003C\u002Fp\u003E \u003Cp\u003EMake sure your volume is turned up and the subtitles are switched on. \u003C\u002Fp\u003E \u003C\u002Fh3\u003E \u003C\u002Fheader\u003E\r\n\r\n\u003Cmain style=\"margin:0%; content-horizontal-center content-vertical-center\"\u003E\r\n\r\n\u003Ciframe width=\"1000pt\" height=\"700pt\"\r\nsrc=\"https:\u002F\u002Fwww.youtube-nocookie.com\u002Fembed\u002Fg60vZzwkYNE?cc_load_policy=1&autoplay=0\" allow=\"autoplay\"\u003E\r\n\u003C\u002Fiframe\u003E\r\n\r\n\u003C\u002Fmain\u003E​\r\n\r\n\u003Cfooter style=\"padding:5pt; font-size:18pt;text-align:center;\"\u003E\r\n    Please only press the \u003Ckbd\u003E Enter key \u003C\u002Fkbd\u003E once you have watched the entire video from start to finish. \r\n    \u003C\u002Ffooter\u003E\r\n    \r\n"
            },
            {
              "type": "lab.html.Form",
              "content": "\u003Chead\u003E\n\u003Cstyle\u003E\ntable, td, th {border: 0pt solid black;}\n\ntable {border-collapse: collapse;width: 90%;}\n\nth {height: 90%;}\n\u003C\u002Fstyle\u003E\n\u003C\u002Fhead\u003E\n\n\u003Cheader\u003E\u003Ch3 style=\"color:green; font-size:22pt\"\u003E Final Questions (Part 1)\u003C\u002Fh3\u003E \n\u003C!-- instructions --\u003E\n\n\u003Cmain\u003E\n  \u003C!-- ask 4 questions:  --\u003E\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:16pt;\"\u003E\n    \u003Cform id =\"Memory_And_Diagnosticity_Questions\" required\u003E\n      \u003Ctable id=\"Memory_of_Video_Content\"\u003E\n                 \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Clabel for=\"Memory_of_Video_Content\"\u003E  \u003Cp\u003E 1. You just watched a Youtube video from a person called Chris. What were the main things that Chris said in his video? Please try to remember as much from the video as possible. \u003C\u002Fp\u003E \u003C\u002Flabel\u003E\n  \n\u003Cp\u003E\n\u003Ctextarea name = \"Memory_of_Video_Content\" id=\"Memory_of_Video_Content\" size = \"35\" style = \"width: 1000px; height: 250px;\" autocomplete = \"off\" required\u003E\u003C\u002Ftextarea\u003E\n\u003C\u002Fp\u003E\n      \u003Ctable id=\"Diagnosticity_Question\"\u003E\n                 \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Clabel for=\"Diagnosticity_Question\"\u003E  2. During the video Chris provided information about himself. Do you think that this information revealed something about the type of person Chris really is (i.e., his true character)? \u003C\u002Flabel\u003E\n            \u003C\u002Fth\u003E\n               \u003Ctr\u003E\n            \u003Ctd style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Cselect name=\"Diagnosticity_Question\" id=\"Diagnosticity_Question\" required\u003E\n                \u003Coption value=\"\"\u003E ----- \u003C\u002Foption\u003E\n                \u003Coption value=\"Strongly_Diagnostic\"\u003E The info completely revealed Chris' true character \u003C\u002Foption\u003E\n                \u003Coption value=\"Moderately_Diagnostic\"\u003E The info was moderately revealing of Chris' true character   \u003C\u002Foption\u003E\n                \u003Coption value=\"Slightly_Diagnostic\"\u003E The info only slightly revealed Chris' true character \u003C\u002Foption\u003E\n                \u003Coption value=\"Not_Diagnostic\"\u003E The info revealed nothing about Chris' true character \u003C\u002Foption\u003E\n                \u003C\u002Fselect\u003E \n            \u003C\u002Ftd\u003E\n          \u003C\u002Ftr\u003E\n      \u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Please click on this \u003Cbutton type=\"submit\" form=\"Memory_And_Diagnosticity_Questions\"\u003E Submit \u003C\u002Fbutton\u003E button to continue.\n\u003C\u002Ffooter\u003E",
              "files": {},
              "parameters": {},
              "responses": {},
              "messageHandlers": {},
              "title": "Memory Questions"
            },
            {
              "type": "lab.flow.Sequence",
              "files": {},
              "parameters": {},
              "responses": {},
              "messageHandlers": {},
              "title": "Self_Reported_Ratings",
              "content": [
                {
                  "type": "lab.html.Form",
                  "content": "\u003Chead\u003E\n  \u003Cstyle type=\"text\u002Fcss\"\u003E\n    #likert { text-align:center; }\n    #likert td { width: 15%; }\n   \u003C\u002Fstyle\u003E\n\u003C\u002Fhead\u003E\n \n\u003Cheader style = \"top:110pt;left:110pt\"\u003E\n\u003Cimg src=\"static\u002FChris.jpg\" width=\"280pt\"\u003E\n  \u003C\u002Fheader \u003E\n\n\u003Cmain\u003E\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:20pt;\"\u003E\n   \u003Cstrong style=\"font-size:20pt;\"\u003EPlease indicate how you feel about Chris\u003C\u002Fstrong\u003E\n    \u003Cform id =\"Ratings_Negative_Positive\" required\u003E\n      \n      \u003Cp\u003E(-3 = Negative \u002F 0 = Neutral \u002F +3 = Positive)\u003C\u002Fp\u003E\n  \n      \u003Ctable style=\"width:50%; margin-left:auto; margin-right:auto\"\u003E\n    \u003Ctr\u003E\n    \u003Cth\u003E-3\u003C\u002Fth\u003E\n    \u003Cth\u003E-2\u003C\u002Fth\u003E \n    \u003Cth\u003E-1\u003C\u002Fth\u003E\n    \u003Cth\u003E0\u003C\u002Fth\u003E\n    \u003Cth\u003E1\u003C\u002Fth\u003E\n    \u003Cth\u003E2\u003C\u002Fth\u003E\n    \u003Cth\u003E3\u003C\u002Fth\u003E    \n  \u003C\u002Ftr\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"-3\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"-2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"-1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"0\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"3\" required\u003E\u003C\u002Ftd\u003E\n         \u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Please click on this \u003Cbutton type=\"submit\" form=\"Ratings_Negative_Positive\"\u003E Submit \u003C\u002Fbutton\u003E button to continue.\n\u003C\u002Ffooter\u003E",
                  "files": {},
                  "parameters": {},
                  "responses": {},
                  "messageHandlers": {},
                  "title": "Ratings_Negative_Positive"
                },
                {
                  "type": "lab.html.Form",
                  "content": "\u003Chead\u003E\n  \u003Cstyle type=\"text\u002Fcss\"\u003E\n    #likert { text-align:center; }\n    #likert td { width: 15%; }\n   \u003C\u002Fstyle\u003E\n\u003C\u002Fhead\u003E\n \n\u003Cheader style = \"top:110pt;left:110pt\"\u003E\n\u003Cimg src=\"static\u002FChris.jpg\" width=\"280pt\"\u003E\n  \u003C\u002Fheader \u003E\n\n\u003Cmain\u003E\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:20pt;\"\u003E\n    \u003Cstrong style=\"font-size:20pt;\"\u003EPlease indicate how you feel about Chris\u003C\u002Fstrong\u003E\n    \u003Cform id =\"Ratings_Good_Bad\" required\u003E\n      \n      \u003Cp\u003E(-3 = Bad \u002F 0 = Neutral \u002F +3 = Good)\u003C\u002Fp\u003E\n  \n      \u003Ctable style=\"width:50%; margin-left:auto; margin-right:auto\"\u003E\n    \u003Ctr\u003E\n    \u003Cth\u003E-3\u003C\u002Fth\u003E\n    \u003Cth\u003E-2\u003C\u002Fth\u003E \n    \u003Cth\u003E-1\u003C\u002Fth\u003E\n    \u003Cth\u003E0\u003C\u002Fth\u003E\n    \u003Cth\u003E1\u003C\u002Fth\u003E\n    \u003Cth\u003E2\u003C\u002Fth\u003E\n    \u003Cth\u003E3\u003C\u002Fth\u003E    \n  \u003C\u002Ftr\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"-3\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"-2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"-1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"0\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"3\" required\u003E\u003C\u002Ftd\u003E\n        \u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Please click on this \u003Cbutton type=\"submit\" form=\"Ratings_Good_Bad\"\u003E Submit \u003C\u002Fbutton\u003E button to continue.\n\u003C\u002Ffooter\u003E",
                  "files": {},
                  "parameters": {},
                  "responses": {},
                  "messageHandlers": {},
                  "title": "Ratings_Good_Bad"
                },
                {
                  "type": "lab.html.Form",
                  "content": "\u003Chead\u003E\n  \u003Cstyle type=\"text\u002Fcss\"\u003E\n    #likert { text-align:center; }\n    #likert td { width: 13%; }\n   \u003C\u002Fstyle\u003E\n\u003C\u002Fhead\u003E\n \u003Cheader style = \"top:110pt;left:110pt\"\u003E\n\u003Cimg src=\"static\u002FChris.jpg\" width=\"280pt\"\u003E\n  \u003C\u002Fheader \u003E\n\n\u003Cmain\u003E\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:20pt;\"\u003E\n    \u003Cstrong style=\"font-size:20pt;\"\u003EPlease indicate how you feel about Chris\u003C\u002Fstrong\u003E\n    \u003Cform id =\"Ratings_Like_Dislike\" required\u003E\n      \n           \u003Cp\u003E(-3 = I Dislike Him \u002F 0 = Neutral \u002F +3 = I Like Him)\u003C\u002Fp\u003E\n  \n      \u003Ctable style=\"width:50%; margin-left:auto; margin-right:auto\"\u003E\n    \u003Ctr\u003E\n    \u003Cth\u003E-3\u003C\u002Fth\u003E\n    \u003Cth\u003E-2\u003C\u002Fth\u003E \n    \u003Cth\u003E-1\u003C\u002Fth\u003E\n    \u003Cth\u003E0\u003C\u002Fth\u003E\n    \u003Cth\u003E1\u003C\u002Fth\u003E\n    \u003Cth\u003E2\u003C\u002Fth\u003E\n    \u003Cth\u003E3\u003C\u002Fth\u003E    \n  \u003C\u002Ftr\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"-3\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"-2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"-1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"0\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"3\" required\u003E\u003C\u002Ftd\u003E\n         \u003C\u002Ftr\u003E\n      \u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Please click on this \u003Cbutton type=\"submit\" form=\"Ratings_Like_Dislike\"\u003E Submit \u003C\u002Fbutton\u003E button to continue.\n\u003C\u002Ffooter\u003E",
                  "files": {},
                  "parameters": {},
                  "responses": {},
                  "messageHandlers": {},
                  "title": "Ratings_Like_Dislike"
                }
              ]
            },
            {
              "type": "lab.flow.Sequence",
              "files": {},
              "parameters": {},
              "responses": {},
              "messageHandlers": {},
              "title": "IAT (Learning Consistent Block First)",
              "content": [
                {
                  "type": "lab.html.Screen",
                  "files": {},
                  "parameters": {},
                  "responses": {
                    "keypress(Space)": "continue"
                  },
                  "messageHandlers": {},
                  "title": "IAT_Generalinstructions: part 1 ",
                  "content": "\u003Cmain class = \"fullscreen\"\u003E\r\n  \u003C!-- present general instructions--\u003E\r\n  \u003Cdiv style=\"text-align:left; font-size:18pt; line-height: 150%\"\u003E\r\n    \u003Cp\u003E\r\n    In the next part of the study you are going to complete a task where you have to categorize words and images as quickly as possible.\u003C\u002Fp\u003E\r\n      \r\n      \u003Cp\u003E During this task: \u003C\u002Fp\u003E\r\n      \r\n      \u003Col\u003E\r\n\u003Cli\u003E Please keep this screen in full-screen mode at all times\u003C\u002Fli\u003E\r\n\u003Cli\u003E Do not close this screen or switch tabs and stay focused until the end of the task\u003C\u002Fli\u003E\r\n\u003Cli\u003E Make sure Caps Lock is switched off\u003C\u002Fli\u003E\r\n        \u003C\u002Fol\u003E\r\n        \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003C!-- space bar to continue--\u003E\r\n\u003Cfooter\u003E\r\n  Please press the \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E bar to start this task.\r\n\u003C\u002Ffooter\u003E "
                },
                {
                  "type": "lab.html.Screen",
                  "files": {},
                  "parameters": {},
                  "responses": {
                    "keypress(Space)": "Continue"
                  },
                  "messageHandlers": {},
                  "title": "IAT_GeneralInstructions: part 2 ",
                  "content": "\u003C!-- instruct about categories--\u003E\r\n\u003Cmain class=\"fullscreen\" style=\"padding-bottom:2pt; line-height: 150%\"\u003E\r\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:18pt; text-align:center\"\u003E\r\n    \u003Cdiv style=\"color:black;position:absolute;top:50pt; left:50%; margin-left:-300pt\"\u003E\r\n      Below you can see two categories and the images that belong to those categories:\u003C\u002Fdiv\u003E\r\n    \u003Cdiv style=\"position:absolute;top:100pt;left:50pt\"\u003E\r\n    Chris: \u003C\u002Fdiv\u003E\r\n    \u003Cdiv style=\"position:absolute;top:280pt;left:50pt\"\u003E\r\n    Bob: \u003C\u002Fdiv\u003E\r\n   \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003C!-- present stimuli--\u003E\r\n\u003Cdiv style=\"position:absolute;top:130pt;left:120pt\"\u003E \r\n  \u003Cimg src=\"static\u002FChris1.jpg\" width=\"100pt\" alt = \"Image not found\"\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003Cdiv style=\"position:absolute;top:130pt;left:240pt\"\u003E \r\n  \u003Cimg src=\"static\u002FChris2.jpg\" width=\"100pt\" alt = \"Image not found\"\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003Cdiv style=\"position:absolute;top:130pt;left:360pt\"\u003E \r\n  \u003Cimg src=\"static\u002FChris3.jpg\" width=\"100pt\" alt = \"Image not found\"\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003Cdiv style=\"position:absolute;top:130pt;left:480pt\"\u003E \r\n  \u003Cimg src=\"static\u002FChris4.jpg\" width=\"100pt\" alt = \"Image not found\"\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n\u003Cdiv style=\"position:absolute;top:310pt;left:120pt\"\u003E \r\n  \u003Cimg src=\"static\u002FBob1.jpg\" width=\"100pt\" alt = \"Image not found\"\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003Cdiv style=\"position:absolute;top:310pt;left:240pt\"\u003E \r\n  \u003Cimg src=\"static\u002FBob2.jpg\" width=\"100pt\" alt = \"Image not found\"\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003Cdiv style=\"position:absolute;top:310pt;left:360pt\"\u003E \r\n  \u003Cimg src=\"static\u002FBob3.jpg\" width=\"100pt\" alt = \"Image not found\"\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003Cdiv style=\"position:absolute;top:310pt;left:480pt\"\u003E \r\n  \u003Cimg src=\"static\u002FBob4.jpg\" width=\"100pt\" alt = \"Image not found\"\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Ch4\u003E\u003Cb\u003E Press the \u003Ckbd\u003E space bar \u003C\u002Fkbd\u003E to continue.\u003C\u002Fb\u003E \u003C\u002Fh4\u003E\r\n\u003C\u002Ffooter\u003E\r\n"
                },
                {
                  "type": "lab.html.Screen",
                  "files": {},
                  "parameters": {},
                  "responses": {
                    "keypress(Space)": "continue"
                  },
                  "messageHandlers": {},
                  "title": "IAT_block5_instructions ",
                  "content": "\u003C!-- present instructions IAT B5 --\u003E\r\n\u003Cmain class=\"fullscreen\" style=\"padding-bottom:2pt\"\u003E\r\n    \u003Cdiv style=\"color:rgb(20,20,100);font-size:18pt; text-align:center; line-height: 150%\"\u003E\r\n    \u003Cbr\u003E\u003Cbr\u003E During the next part of the study you will see an image or word in the middle of the screen. \r\n    \u003Cbr\u003E Your job is to assign that item to one of two categories. \r\n    \u003Cbr\u003E\u003Cbr\u003E Please respond AS QUICKLY AS POSSIBLE, while at the same time, try not to make too many mistakes and be as accurate as possible \u003Cbr\u003E(some mistakes are OK).\r\n    \u003Cbr\u003E\u003Cbr\u003E The two categories in the first part of the task are:\r\n    \u003Cbr\u003E\u003Cb\u003E Bob \u003C\u002Fb\u003E and \u003Cb\u003E Chris \u003C\u002Fb\u003E.\r\n    \u003Cbr\u003E\u003Cbr\u003EIf the item in the middle of the screen belongs to the \"Bob\" category, press the J key (right on the keyboard).\r\n    \u003Cbr\u003EIf the item in the middle of the screen belongs to the \"Chris\" category, press the F key (left on the keyboard). \r\n        \u003Cbr\u003E\u003Cbr\u003E \u003Cstrong\u003E Keep your fingers on the F and J keys at all times, in order to respond faster. \u003C\u002Fstrong\u003E \r\n    \u003Cbr\u003E\u003Cbr\u003EAvoid all distractions and pay attention. Try to answer as quickly as possible!\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003C!-- space bar to continue --\u003E\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Ch4\u003E\u003Cb\u003E Press the \u003Ckbd\u003E space bar \u003C\u002Fkbd\u003E to start.\u003C\u002Fb\u003E\u003C\u002Fh4\u003E \r\n\u003C\u002Ffooter\u003E \r\n"
                },
                {
                  "type": "lab.flow.Loop",
                  "files": {},
                  "parameters": {},
                  "templateParameters": [
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    }
                  ],
                  "sample": {
                    "mode": "draw-shuffle",
                    "n": "32"
                  },
                  "responses": {},
                  "messageHandlers": {},
                  "title": "IAT_trialsB5",
                  "shuffleGroups": [],
                  "template": {
                    "type": "lab.html.Frame",
                    "context": "\u003Cmain style=\"background-color:white;\"\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  left:110pt\"\u003E\n    Chris\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  right:110pt\"\u003E\n    Bob\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cmain data-labjs-section=\"frame\" style=\"background-color:white;\"\u003E\n  \u003C!-- Content gets inserted here --\u003E\n\u003C\u002Fmain\u003E",
                    "contextSelector": "[data-labjs-section=\"frame\"]",
                    "files": {},
                    "parameters": {},
                    "responses": {},
                    "messageHandlers": {},
                    "title": "Frame B5",
                    "content": {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "parameters": {},
                      "responses": {},
                      "messageHandlers": {},
                      "title": "TrialSequenceB5",
                      "tardy": true,
                      "skip": "${this.state.response==='escape'}",
                      "content": [
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI pre",
                          "timeout": "200"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {
                            "keypress(f)": "left",
                            "keypress(j)": "right",
                            "keydown(Insert)": "escape"
                          },
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
this.options.media.images.push('static/' + this.parameters.name)
}
                          },
                          "title": "Stimulus",
                          "content": " \u003C!-- present stimulus --\u003E \r\n    \u003Cdiv\u003E\r\n    ${parameters.stim}\r\n    \u003C\u002Fdiv\u003E\r\n",
                          "tardy": true,
                          "correctResponse": "${parameters.corr}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "Error",
                          "content": "  \u003Cdiv style=\"font-size: 3.5rem; color:red;\"\u003E\r\n    X\r\n  \u003C\u002Fdiv\u003E",
                          "timeout": "200",
                          "tardy": true,
                          "skip": "${state.correct}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI post",
                          "timeout": "200"
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "lab.html.Screen",
                  "files": {},
                  "parameters": {},
                  "responses": {
                    "keypress(Space)": "continue"
                  },
                  "messageHandlers": {},
                  "title": "IAT_block2_instructions ",
                  "content": "\u003C!-- present instructions IAT B2 --\u003E\r\n\u003Cmain class=\"fullscreen\" style=\"padding-bottom:2px\"\u003E\r\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:18px; text-align:center\"\u003E\r\n    \u003Cbr\u003E\u003Cbr\u003EYou will now see a different set of words. Your job is to indicate whether you like or dislike those words. \r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003EIf the item belongs to the category of things you \u003Cstrong\u003E dislike about people \u003C\u002Fstrong\u003E, press the F key (left on the keyboard).\r\n    \u003Cbr\u003E\u003Cbr\u003EIf the item belongs to the category of things you \u003Cstrong\u003E like about people \u003C\u002Fstrong\u003E, press the J key (right on the keyboard).\r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003ETry to respond AS QUICKLY AS POSSIBLE without making too many mistakes!\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003C!-- space bar to continue --\u003E\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Ch4\u003E\u003Cb\u003E Press the \u003Ckbd\u003E space bar \u003C\u002Fkbd\u003E to start.\u003C\u002Fh4\u003E\u003C\u002Fb\u003E \r\n\u003C\u002Ffooter\u003E\r\n"
                },
                {
                  "type": "lab.flow.Loop",
                  "files": {},
                  "parameters": {},
                  "templateParameters": [
                    {
                      "stim": "Confident",
                      "corr": "right",
                      "name": "pos1",
                      "type": "word"
                    },
                    {
                      "stim": "Friendly",
                      "corr": "right",
                      "name": "pos2",
                      "type": "word"
                    },
                    {
                      "stim": "Cheerful",
                      "corr": "right",
                      "name": "pos3",
                      "type": "word"
                    },
                    {
                      "stim": "Loyal",
                      "corr": "right",
                      "name": "pos4",
                      "type": "word"
                    },
                    {
                      "stim": "Generous",
                      "corr": "right",
                      "name": "pos5",
                      "type": "word"
                    },
                    {
                      "stim": "Loving",
                      "corr": "right",
                      "name": "pos6",
                      "type": "word"
                    },
                    {
                      "stim": "Liar",
                      "corr": "left",
                      "name": "neg1",
                      "type": "word"
                    },
                    {
                      "stim": "Cruel",
                      "corr": "left",
                      "name": "neg2",
                      "type": "word"
                    },
                    {
                      "stim": "Evil",
                      "corr": "left",
                      "name": "neg3",
                      "type": "word"
                    },
                    {
                      "stim": "Ignorant",
                      "corr": "left",
                      "name": "neg4",
                      "type": "word"
                    },
                    {
                      "stim": "Manipulative",
                      "corr": "left",
                      "name": "neg5",
                      "type": "word"
                    },
                    {
                      "stim": "Rude",
                      "corr": "left",
                      "name": "neg6",
                      "type": "word"
                    },
                    {
                      "stim": "Funny",
                      "corr": "right",
                      "name": "pos7",
                      "type": "word"
                    },
                    {
                      "stim": "Warm",
                      "corr": "right",
                      "name": "pos8",
                      "type": "word"
                    },
                    {
                      "stim": "Selfish",
                      "corr": "left",
                      "name": "neg7",
                      "type": "word"
                    },
                    {
                      "stim": "Disloyal",
                      "corr": "left",
                      "name": "neg8",
                      "type": "word"
                    }
                  ],
                  "sample": {
                    "mode": "draw-shuffle",
                    "n": "16"
                  },
                  "responses": {},
                  "messageHandlers": {},
                  "title": "IAT_trialsB2",
                  "shuffleGroups": [],
                  "template": {
                    "type": "lab.html.Frame",
                    "context": "\u003Cmain style=\"background-color:white\"\u003E\n  \u003Cdiv style=\"font-size:30pt; position:absolute; top:60pt; left:90pt\"\u003E\n    I dislike\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style=\"font-size:30pt; position:absolute; top:60pt; right:110pt\"\u003E\n    I like\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cmain data-labjs-section=\"frame\" style=\"background-color:white;\"\u003E\n  \u003C!-- Content gets inserted here --\u003E\n\u003C\u002Fmain\u003E",
                    "contextSelector": "[data-labjs-section=\"frame\"]",
                    "files": {},
                    "parameters": {},
                    "responses": {},
                    "messageHandlers": {},
                    "title": "Frame B2",
                    "content": {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "parameters": {},
                      "responses": {},
                      "messageHandlers": {},
                      "title": "TrialSequenceB2",
                      "tardy": true,
                      "skip": "${this.state.response==='escape'}",
                      "content": [
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI pre",
                          "timeout": "200"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {
                            "keypress(f)": "left",
                            "keypress(j)": "right",
                            "keydown(Insert)": "escape"
                          },
                          "messageHandlers": {},
                          "title": "Stimulus",
                          "content": " \u003C!-- present stimulus --\u003E \r\n    \u003Cdiv style=\"color:black;font-size:40pt;\"\u003E\r\n    ${parameters.stim}\r\n    \u003C\u002Fdiv\u003E\r\n",
                          "tardy": true,
                          "correctResponse": "${parameters.corr}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "Error",
                          "content": "  \u003Cdiv style=\"font-size: 3.5rem; color:red;\"\u003E\r\n    X\r\n  \u003C\u002Fdiv\u003E",
                          "timeout": "200",
                          "tardy": true,
                          "skip": "${state.correct || parameters.type==='word'}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI post",
                          "timeout": "200"
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "lab.html.Screen",
                  "files": {},
                  "parameters": {},
                  "responses": {
                    "keypress(Space)": "continue"
                  },
                  "messageHandlers": {},
                  "title": "IAT_block6_instructions",
                  "content": "\u003C!-- present instructions IAT B6 --\u003E\r\n\u003Cmain class=\"fullscreen\" style=\"padding-bottom:2pt\"\u003E\r\n    \u003Cdiv style=\"color:rgb(20,20,100);font-size:18px; text-align:center\"\u003E\r\n    \u003Cbr\u003E\u003Cbr\u003EThe four categories of items you saw separately will now appear together. \r\n    \u003Cbr\u003E\u003Cbr\u003EItems that belong to the \u003Cstrong\u003E \"Bob\" \u003C\u002Fstrong\u003E and \u003Cstrong\u003E \"Chris\" \u003C\u002Fstrong\u003E categories,\r\n    \u003Cbr\u003E\u003Cbr\u003EAND\r\n    \u003Cbr\u003E\u003Cbr\u003Eitems that belong to the \u003Cstrong\u003E \"things I dislike about someone\" \u003C\u002Fstrong\u003E and \u003Cstrong\u003E \"things I like about someone\" \u003C\u002Fstrong\u003E categories. \r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003EWhen the item belongs to the Chris or I DISLIKE category press the F key.\r\n    \u003Cbr\u003E\u003Cbr\u003EWhen the item belongs to the Bob or I LIKE category, press the J key. \r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003EPlease remember to answer as quickly as possible (without making too many mistakes)!\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003C!-- space bar to continue --\u003E\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Ch4\u003E\u003Cb\u003E Press the \u003Ckbd\u003E space bar \u003C\u002Fkbd\u003E to start.\u003C\u002Fb\u003E\u003C\u002Fh4\u003E\r\n\u003C\u002Ffooter\u003E \r\n"
                },
                {
                  "type": "lab.flow.Loop",
                  "files": {},
                  "parameters": {},
                  "templateParameters": [
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "Confident",
                      "corr": "right",
                      "name": "pos1",
                      "type": "word"
                    },
                    {
                      "stim": "Friendly",
                      "corr": "right",
                      "name": "pos2",
                      "type": "word"
                    },
                    {
                      "stim": "Cheerful",
                      "corr": "right",
                      "name": "pos3",
                      "type": "word"
                    },
                    {
                      "stim": "Loyal",
                      "corr": "right",
                      "name": "pos4",
                      "type": "word"
                    },
                    {
                      "stim": "Generous",
                      "corr": "right",
                      "name": "pos5",
                      "type": "word"
                    },
                    {
                      "stim": "Loving",
                      "corr": "right",
                      "name": "pos6",
                      "type": "word"
                    },
                    {
                      "stim": "Liar",
                      "corr": "left",
                      "name": "neg1",
                      "type": "word"
                    },
                    {
                      "stim": "Cruel",
                      "corr": "left",
                      "name": "neg2",
                      "type": "word"
                    },
                    {
                      "stim": "Evil",
                      "corr": "left",
                      "name": "neg3",
                      "type": "word"
                    },
                    {
                      "stim": "Ignorant",
                      "corr": "left",
                      "name": "neg4",
                      "type": "word"
                    },
                    {
                      "stim": "Manipulative",
                      "corr": "left",
                      "name": "neg5",
                      "type": "word"
                    },
                    {
                      "stim": "Rude",
                      "corr": "left",
                      "name": "neg6",
                      "type": "word"
                    },
                    {
                      "stim": "Funny",
                      "corr": "right",
                      "name": "pos7",
                      "type": "word"
                    },
                    {
                      "stim": "Warm",
                      "corr": "right",
                      "name": "pos8",
                      "type": "word"
                    },
                    {
                      "stim": "Selfish",
                      "corr": "left",
                      "name": "neg7",
                      "type": "word"
                    },
                    {
                      "stim": "Disloyal",
                      "corr": "left",
                      "name": "neg8",
                      "type": "word"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    }
                  ],
                  "sample": {
                    "mode": "draw-shuffle",
                    "n": "32"
                  },
                  "responses": {},
                  "messageHandlers": {},
                  "title": "IAT_trialsB6",
                  "shuffleGroups": [],
                  "template": {
                    "type": "lab.html.Frame",
                    "context": "\u003Cmain style=\"background-color:white;\"\u003E\n  \u003Cdiv style=\"font-size:30pt; position:absolute; top:60pt; left:90pt\"\u003E\n    I dislike\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  left:110pt\"\u003E\n    Chris\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style=\"font-size:30pt; position:absolute; top:60pt; right:110pt\"\u003E\n    I like \n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  right:110pt\"\u003E\n    Bob\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cmain data-labjs-section=\"frame\" style=\"background-color:white;\"\u003E\n  \u003C!-- Content gets inserted here --\u003E\n\u003C\u002Fmain\u003E",
                    "contextSelector": "[data-labjs-section=\"frame\"]",
                    "files": {},
                    "parameters": {},
                    "responses": {},
                    "messageHandlers": {},
                    "title": "Frame B6",
                    "content": {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "parameters": {},
                      "responses": {},
                      "messageHandlers": {},
                      "title": "TrialSequenceB6",
                      "tardy": true,
                      "skip": "${this.state.response==='escape'}",
                      "content": [
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI pre",
                          "timeout": "200"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {
                            "keypress(f)": "left",
                            "keypress(j)": "right",
                            "keydown(Insert)": "escape"
                          },
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
if (this.parameters.type==='pic'){
this.options.media.images.push('static/' + this.parameters.name);}
}
                          },
                          "title": "Stimulus",
                          "content": " \u003C!-- present stimulus --\u003E \r\n    \u003Cdiv style=\"color:black;font-size:40pt;\"\u003E\r\n    ${parameters.stim}\r\n    \u003C\u002Fdiv\u003E\r\n",
                          "tardy": true,
                          "correctResponse": "${parameters.corr}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "Error",
                          "content": "  \u003Cdiv style=\"font-size: 3.5rem; color:red;\"\u003E\r\n    X\r\n  \u003C\u002Fdiv\u003E",
                          "timeout": "200",
                          "tardy": true,
                          "skip": "${state.correct || parameters.type==='word'}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI post",
                          "timeout": "200"
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "lab.html.Screen",
                  "files": {},
                  "parameters": {},
                  "responses": {
                    "keypress(Space)": "continue"
                  },
                  "messageHandlers": {},
                  "title": "IAT_block7_instructions ",
                  "content": "\u003C!-- present instructions IAT B7 --\u003E\r\n\u003Cmain class=\"fullscreen\" style=\"padding-bottom:2px\"\u003E\r\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:18px; text-align:center\"\u003E\r\n    \u003Cbr\u003E\u003Cbr\u003EYou will now sort the items in the same categories again. \r\n    \u003Cbr\u003E\u003Cbr\u003ERemember to answer as quickly as possible, while trying not to make too many mistakes. \r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003C!-- space bar to continue --\u003E\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Ch4\u003E\u003Cb\u003E Press the \u003Ckbd\u003E space bar \u003C\u002Fkbd\u003E to start.\u003C\u002Fb\u003E \u003C\u002Fh4\u003E\r\n\u003C\u002Ffooter\u003E \r\n"
                },
                {
                  "type": "lab.flow.Loop",
                  "files": {},
                  "parameters": {},
                  "templateParameters": [
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "Confident",
                      "corr": "right",
                      "name": "pos1",
                      "type": "word"
                    },
                    {
                      "stim": "Friendly",
                      "corr": "right",
                      "name": "pos2",
                      "type": "word"
                    },
                    {
                      "stim": "Cheerful",
                      "corr": "right",
                      "name": "pos3",
                      "type": "word"
                    },
                    {
                      "stim": "Loyal",
                      "corr": "right",
                      "name": "pos4",
                      "type": "word"
                    },
                    {
                      "stim": "Generous",
                      "corr": "right",
                      "name": "pos5",
                      "type": "word"
                    },
                    {
                      "stim": "Loving",
                      "corr": "right",
                      "name": "pos6",
                      "type": "word"
                    },
                    {
                      "stim": "Selfish",
                      "corr": "left",
                      "name": "neg1",
                      "type": "word"
                    },
                    {
                      "stim": "Disloyal",
                      "corr": "left",
                      "name": "neg2",
                      "type": "word"
                    },
                    {
                      "stim": "Liar",
                      "corr": "left",
                      "name": "neg3",
                      "type": "word"
                    },
                    {
                      "stim": "Cruel",
                      "corr": "left",
                      "name": "neg4",
                      "type": "word"
                    },
                    {
                      "stim": "Evil",
                      "corr": "left",
                      "name": "neg5",
                      "type": "word"
                    },
                    {
                      "stim": "Ignorant",
                      "corr": "left",
                      "name": "neg6",
                      "type": "word"
                    },
                    {
                      "stim": "Funny",
                      "corr": "right",
                      "name": "pos7",
                      "type": "word"
                    },
                    {
                      "stim": "Warm",
                      "corr": "right",
                      "name": "pos8",
                      "type": "word"
                    },
                    {
                      "stim": "Manipulative",
                      "corr": "left",
                      "name": "neg7",
                      "type": "word"
                    },
                    {
                      "stim": "Rude",
                      "corr": "left",
                      "name": "neg8",
                      "type": "word"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    }
                  ],
                  "sample": {
                    "mode": "draw-shuffle",
                    "n": "32"
                  },
                  "responses": {},
                  "messageHandlers": {},
                  "title": "IAT_trialsB7",
                  "shuffleGroups": [],
                  "template": {
                    "type": "lab.html.Frame",
                    "context": "\u003Cmain style=\"background-color:white;\"\u003E\n  \u003Cdiv style=\"font-size:30pt; position:absolute; top:60pt; left:90pt\"\u003E\n    I dislike\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  left:110pt\"\u003E\n    Chris\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style=\"font-size:30pt; position:absolute; top:60pt; right:110pt\"\u003E\n    I like\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  right:110pt\"\u003E\n    Bob\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cmain data-labjs-section=\"frame\" style=\"background-color:white;\"\u003E\n  \u003C!-- Content gets inserted here --\u003E\n\u003C\u002Fmain\u003E",
                    "contextSelector": "[data-labjs-section=\"frame\"]",
                    "files": {},
                    "parameters": {},
                    "responses": {},
                    "messageHandlers": {},
                    "title": "Frame B7",
                    "content": {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "parameters": {},
                      "responses": {},
                      "messageHandlers": {},
                      "title": "TrialSequenceB7",
                      "tardy": true,
                      "skip": "${this.state.response==='escape'}",
                      "content": [
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI pre",
                          "timeout": "200"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {
                            "keypress(f)": "left",
                            "keypress(j)": "right",
                            "keydown(Insert)": "escape"
                          },
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
if (this.parameters.type==='pic'){
this.options.media.images.push('static/' + this.parameters.name);}
}
                          },
                          "title": "Stimulus",
                          "content": " \u003C!-- present stimulus --\u003E \r\n    \u003Cdiv style=\"color:black;font-size:40pt;\"\u003E\r\n    ${parameters.stim}\r\n    \u003C\u002Fdiv\u003E\r\n",
                          "tardy": true,
                          "correctResponse": "${parameters.corr}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "Error",
                          "content": "  \u003Cdiv style=\"font-size: 3.5rem; color:red;\"\u003E\r\n    X\r\n  \u003C\u002Fdiv\u003E",
                          "timeout": "200",
                          "tardy": true,
                          "skip": "${state.correct || parameters.type==='word'}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI post",
                          "timeout": "200"
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "lab.html.Screen",
                  "files": {},
                  "parameters": {},
                  "responses": {
                    "keypress(Space)": "continue"
                  },
                  "messageHandlers": {},
                  "title": "IAT_block1_instructions ",
                  "content": "\u003Cmain class=\"fullscreen\" style=\"padding-bottom:2pt\"\u003E\r\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:18pt; text-align:center\"\u003E\r\n   \u003Cbr\u003E\u003Cbr\u003EIn the next part only two of the categories of items will be presented.\r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003EHowever: This time you will need to assign the items to the categories using the opposite key as before.\r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003EWhen the item belongs to the \u003Cstrong\u003E \"Bob\" \u003C\u002Fstrong\u003E category, press the F key. \r\n    \u003Cbr\u003E\u003Cbr\u003EWhen the item belongs to the \u003Cstrong\u003E \"Chris\" \u003C\u002Fstrong\u003E category, press the J key. \r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003EPlease answer as quickly as possible!\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Ch4\u003E\u003Cb\u003E Press the \u003Ckbd\u003E space bar \u003C\u002Fkbd\u003E when you have your fingers on the F and J keys and are ready to start the task.\u003C\u002Fb\u003E \u003C\u002Fh4\u003E\r\n\u003C\u002Ffooter\u003E\r\n"
                },
                {
                  "type": "lab.flow.Loop",
                  "files": {},
                  "parameters": {},
                  "templateParameters": [
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    }
                  ],
                  "sample": {
                    "mode": "draw-shuffle",
                    "n": "16"
                  },
                  "responses": {},
                  "messageHandlers": {},
                  "title": "IAT_trialsB1",
                  "shuffleGroups": [],
                  "template": {
                    "type": "lab.html.Frame",
                    "context": "\u003Cmain style=\"background-color:White;\"\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  left:110pt\"\u003E\n    Bob\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  right:110pt\"\u003E\n    Chris\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cmain data-labjs-section=\"frame\" style=\"background-color:white;\"\u003E\n  \u003C!-- Content gets inserted here --\u003E\n\u003C\u002Fmain\u003E",
                    "contextSelector": "[data-labjs-section=\"frame\"]",
                    "files": {},
                    "parameters": {},
                    "responses": {},
                    "messageHandlers": {},
                    "title": "Frame B1",
                    "content": {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "parameters": {},
                      "responses": {},
                      "messageHandlers": {},
                      "title": "TrialSequenceB1",
                      "tardy": true,
                      "skip": "${this.state.response==='escape'}",
                      "content": [
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI pre",
                          "timeout": "200"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {
                            "keypress(f)": "left",
                            "keypress(j)": "right",
                            "keydown(Insert)": "escape"
                          },
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
this.options.media.images.push('static/' + this.parameters.name)
}
                          },
                          "title": "Stimulus",
                          "content": " \u003C!-- present stimulus --\u003E \r\n    \u003Cdiv\u003E\r\n    ${parameters.stim}\r\n    \u003C\u002Fdiv\u003E\r\n",
                          "tardy": true,
                          "correctResponse": "${parameters.corr}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "Error",
                          "content": "  \u003Cdiv style=\"font-size: 3.5rem; color:red;\"\u003E\r\n    X\r\n  \u003C\u002Fdiv\u003E",
                          "timeout": "200",
                          "tardy": true,
                          "skip": "${state.correct}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI post",
                          "timeout": "200"
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "lab.html.Screen",
                  "files": {},
                  "parameters": {},
                  "responses": {
                    "keypress(Space)": "continue"
                  },
                  "messageHandlers": {},
                  "title": "IAT_block3_instructions ",
                  "content": "\u003C!-- present instructions IAT B3 --\u003E\r\n\u003Cmain class=\"fullscreen\" style=\"padding-bottom:2px\"\u003E\r\n    \u003Cdiv style=\"color:rgb(20,20,100);font-size:18pt; text-align:center\"\u003E\r\n    \u003Cp\u003E\u003Cbr\u003E\u003Cbr\u003EYou will now see the four categories once again. \r\n    \u003Cbr\u003E\u003Cbr\u003EItems that belong to the Chris and Bob categories, \r\n    \u003Cbr\u003E\u003Cbr\u003EAND \r\n    \u003Cbr\u003E\u003Cbr\u003Eitems that belong to the \"things I DISLIKE about someone\" and \"the things I LIKE about someone\" categories.\r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003EWhen the item belongs to the \u003Cstrong\u003E Bob or I DISLIKE category \u003C\u002Fstrong\u003E, press the F key. \r\n    \u003Cbr\u003E\u003Cbr\u003EWhen the item belongs to the \u003Cstrong\u003E Chris or I LIKE category \u003C\u002Fstrong\u003E, press the J key. \r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003ETry to respond as quickly as possible without making too many mistakes! \r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Ch4\u003E\u003Cb\u003E Press the \u003Ckbd\u003E space bar \u003C\u002Fkbd\u003E to start.\u003C\u002Fb\u003E\u003C\u002Fh4\u003E \r\n\u003C\u002Ffooter\u003E\r\n\r\n"
                },
                {
                  "type": "lab.flow.Loop",
                  "files": {},
                  "parameters": {},
                  "templateParameters": [
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "Confident",
                      "corr": "right",
                      "name": "pos1",
                      "type": "word"
                    },
                    {
                      "stim": "Friendly",
                      "corr": "right",
                      "name": "pos2",
                      "type": "word"
                    },
                    {
                      "stim": "Cheerful",
                      "corr": "right",
                      "name": "pos3",
                      "type": "word"
                    },
                    {
                      "stim": "Loyal",
                      "corr": "right",
                      "name": "pos4",
                      "type": "word"
                    },
                    {
                      "stim": "Generous",
                      "corr": "right",
                      "name": "pos5",
                      "type": "word"
                    },
                    {
                      "stim": "Loving",
                      "corr": "right",
                      "name": "pos6",
                      "type": "word"
                    },
                    {
                      "stim": "Liar",
                      "corr": "left",
                      "name": "neg1",
                      "type": "word"
                    },
                    {
                      "stim": "Cruel",
                      "corr": "left",
                      "name": "neg2",
                      "type": "word"
                    },
                    {
                      "stim": "Evil",
                      "corr": "left",
                      "name": "neg3",
                      "type": "word"
                    },
                    {
                      "stim": "Ignorant",
                      "corr": "left",
                      "name": "neg4",
                      "type": "word"
                    },
                    {
                      "stim": "Manipulative",
                      "corr": "left",
                      "name": "neg5",
                      "type": "word"
                    },
                    {
                      "stim": "Rude",
                      "corr": "left",
                      "name": "neg6",
                      "type": "word"
                    },
                    {
                      "stim": "Funny",
                      "corr": "right",
                      "name": "pos7",
                      "type": "word"
                    },
                    {
                      "stim": "Warm",
                      "corr": "right",
                      "name": "pos8",
                      "type": "word"
                    },
                    {
                      "stim": "Selfish",
                      "corr": "right",
                      "name": "neg7",
                      "type": "word"
                    },
                    {
                      "stim": "Disloyal",
                      "corr": "right",
                      "name": "neg8",
                      "type": "word"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    }
                  ],
                  "sample": {
                    "mode": "draw-shuffle",
                    "n": "32"
                  },
                  "responses": {},
                  "messageHandlers": {},
                  "title": "IAT_trialsB3",
                  "shuffleGroups": [],
                  "template": {
                    "type": "lab.html.Frame",
                    "context": "\u003Cmain style=\"background-color:white;\"\u003E\n  \u003Cdiv style=\"font-size:30pt; position:absolute; top:60pt; left:90pt\"\u003E\n    I dislike\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  left:110pt\"\u003E\n    Bob\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style=\"font-size:30pt; position:absolute; top:60pt; right:110pt\"\u003E\n    I like\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  right:110pt\"\u003E\n    Chris\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cmain data-labjs-section=\"frame\" style=\"background-color:white;\"\u003E\n  \u003C!-- Content gets inserted here --\u003E\n\u003C\u002Fmain\u003E",
                    "contextSelector": "[data-labjs-section=\"frame\"]",
                    "files": {},
                    "parameters": {},
                    "responses": {},
                    "messageHandlers": {},
                    "title": "Frame B3",
                    "content": {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "parameters": {},
                      "responses": {},
                      "messageHandlers": {},
                      "title": "TrialSequenceB3",
                      "tardy": true,
                      "skip": "${this.state.response==='escape'}",
                      "content": [
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI pre",
                          "timeout": "200"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {
                            "keypress(f)": "left",
                            "keypress(j)": "right",
                            "keydown(Insert)": "escape"
                          },
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
if (this.parameters.type==='pic'){
this.options.media.images.push('static/' + this.parameters.name);}
}
                          },
                          "title": "Stimulus",
                          "content": " \u003C!-- present stimulus --\u003E \r\n    \u003Cdiv style=\"color:black;font-size:40pt;\"\u003E\r\n    ${parameters.stim}\r\n    \u003C\u002Fdiv\u003E\r\n",
                          "tardy": true,
                          "correctResponse": "${parameters.corr}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "Error",
                          "content": "  \u003Cdiv style=\"font-size: 3.5rem; color:red;\"\u003E\r\n    X\r\n  \u003C\u002Fdiv\u003E",
                          "timeout": "200",
                          "tardy": true,
                          "skip": "${state.correct || parameters.type==='word'}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI post",
                          "timeout": "200"
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "lab.html.Screen",
                  "files": {},
                  "parameters": {},
                  "responses": {
                    "keypress(Space)": "continue"
                  },
                  "messageHandlers": {},
                  "title": "IAT_block4_instructions ",
                  "content": "\u003C!-- present instructions IAT B4 --\u003E\r\n\u003Cmain class=\"fullscreen\" style=\"padding-bottom:2pt\"\u003E\r\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:18pt; text-align:center\"\u003E\r\n    \u003Cbr\u003E\u003Cbr\u003E You will now sort items in the same categories again. \r\n    \u003Cbr\u003E\u003Cbr\u003ERemember to respond AS QUICKLY AS POSSIBLE without making too many mistakes. \r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003C!-- space bar to continue --\u003E\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Ch4\u003E\u003Cb\u003E Press the \u003Ckbd\u003E space bar \u003C\u002Fkbd\u003E to start.\u003C\u002Fb\u003E \u003C\u002Fh4\u003E\r\n\u003C\u002Ffooter\u003E\r\n"
                },
                {
                  "type": "lab.flow.Loop",
                  "files": {},
                  "parameters": {},
                  "templateParameters": [
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris1.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris1.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris2.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris2.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "Confident",
                      "corr": "right",
                      "name": "pos1",
                      "type": "word"
                    },
                    {
                      "stim": "Friendly",
                      "corr": "right",
                      "name": "pos2",
                      "type": "word"
                    },
                    {
                      "stim": "Cheerful",
                      "corr": "right",
                      "name": "pos3",
                      "type": "word"
                    },
                    {
                      "stim": "Loyal",
                      "corr": "right",
                      "name": "pos4",
                      "type": "word"
                    },
                    {
                      "stim": "Generous",
                      "corr": "right",
                      "name": "pos5",
                      "type": "word"
                    },
                    {
                      "stim": "Loving",
                      "corr": "right",
                      "name": "pos6",
                      "type": "word"
                    },
                    {
                      "stim": "Liar",
                      "corr": "left",
                      "name": "neg1",
                      "type": "word"
                    },
                    {
                      "stim": "Cruel",
                      "corr": "left",
                      "name": "neg2",
                      "type": "word"
                    },
                    {
                      "stim": "Evil",
                      "corr": "left",
                      "name": "neg3",
                      "type": "word"
                    },
                    {
                      "stim": "Ignorant",
                      "corr": "left",
                      "name": "neg4",
                      "type": "word"
                    },
                    {
                      "stim": "Manipulative",
                      "corr": "left",
                      "name": "neg5",
                      "type": "word"
                    },
                    {
                      "stim": "Rude",
                      "corr": "left",
                      "name": "neg6",
                      "type": "word"
                    },
                    {
                      "stim": "Funny",
                      "corr": "right",
                      "name": "pos7",
                      "type": "word"
                    },
                    {
                      "stim": "Warm",
                      "corr": "right",
                      "name": "pos8",
                      "type": "word"
                    },
                    {
                      "stim": "Selfish",
                      "corr": "left",
                      "name": "neg7",
                      "type": "word"
                    },
                    {
                      "stim": "Disloyal",
                      "corr": "left",
                      "name": "neg8",
                      "type": "word"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FBob4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "left",
                      "name": "Bob4.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris3.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris3.jpg",
                      "type": "pic"
                    },
                    {
                      "stim": "\u003Cimg src=\"static\u002FChris4.jpg\" width=\"280px\" alt = \"Image not found\"\u003E",
                      "corr": "right",
                      "name": "Chris4.jpg",
                      "type": "pic"
                    }
                  ],
                  "sample": {
                    "mode": "draw-shuffle",
                    "n": "32"
                  },
                  "responses": {},
                  "messageHandlers": {},
                  "title": "IAT_trialsB4",
                  "shuffleGroups": [],
                  "template": {
                    "type": "lab.html.Frame",
                    "context": "\u003Cmain style=\"background-color:white;\"\u003E\n  \u003Cdiv style=\"font-size:30pt; position:absolute; top:60pt; left:90pt\"\u003E\n    I dislike\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  left:110pt\"\u003E\n    Bob\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style=\"font-size:30pt; position:absolute; top:60pt; right:110pt\"\u003E\n    I like\n  \u003C\u002Fdiv\u003E\n  \u003Cdiv style =\"font-size:30pt; position:absolute; top:110pt;\n  right:110pt\"\u003E\n    Chris\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cmain data-labjs-section=\"frame\" style=\"background-color:white;\"\u003E\n  \u003C!-- Content gets inserted here --\u003E\n\u003C\u002Fmain\u003E",
                    "contextSelector": "[data-labjs-section=\"frame\"]",
                    "files": {},
                    "parameters": {},
                    "responses": {},
                    "messageHandlers": {},
                    "title": "Frame B4",
                    "content": {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "parameters": {},
                      "responses": {},
                      "messageHandlers": {},
                      "title": "TrialSequenceB4",
                      "tardy": true,
                      "skip": "${this.state.response==='escape'}",
                      "content": [
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI pre",
                          "timeout": "200"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {
                            "keypress(f)": "left",
                            "keypress(j)": "right",
                            "keydown(Insert)": "escape"
                          },
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
if (this.parameters.type==='pic'){
this.options.media.images.push('static/' + this.parameters.name);}
}
                          },
                          "title": "Stimulus",
                          "content": " \u003C!-- present stimulus --\u003E \r\n    \u003Cdiv style=\"color:black;font-size:40pt;\"\u003E\r\n    ${parameters.stim}\r\n    \u003C\u002Fdiv\u003E\r\n",
                          "tardy": true,
                          "correctResponse": "${parameters.corr}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "Error",
                          "content": "  \u003Cdiv style=\"font-size: 3.5rem; color:red;\"\u003E\r\n    X\r\n  \u003C\u002Fdiv\u003E",
                          "timeout": "200",
                          "tardy": true,
                          "skip": "${state.correct || parameters.type==='word'}"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {},
                          "responses": {},
                          "messageHandlers": {},
                          "title": "ITI post",
                          "timeout": "200"
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "lab.html.Screen",
                  "files": {},
                  "parameters": {},
                  "responses": {
                    "keypress(Space)": "continue"
                  },
                  "messageHandlers": {},
                  "title": "Thank You",
                  "content": "\u003Cmain class = \"fullscreen\"\u003E\r\n  \u003C!-- present general instructions--\u003E\r\n  \u003Cdiv style=\"text-align:left; font-size:18pt; line-height: 150%\"\u003E\r\n    \u003Cp\u003E\r\n    Thank you. You will now continue to the next part of the study\u003C\u002Fp\u003E\r\n    \u003C\u002Fmain\u003E\r\n\r\n\u003C!-- space bar to continue--\u003E\r\n\u003Cfooter\u003E\r\n  Please press the \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E bar to continue.\r\n\u003C\u002Ffooter\u003E "
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Chead\u003E\n\u003Cstyle\u003E\ntable, td, th {border: 0pt solid black;}\n\ntable {border-collapse: collapse;width: 90%;}\n\nth {height: 90%;}\n\u003C\u002Fstyle\u003E\n\u003Cscript\u003E\nfunction goBack() {\n  window.history.back()\n}\n\u003C\u002Fscript\u003E\n\n\u003C\u002Fhead\u003E\n\n\u003Cheader\u003E\u003Ch3 style=\"color:green; font-size:22pt\"\u003E Final Questions (Part 2)\u003C\u002Fh3\u003E \n\u003C!-- instructions --\u003E\n\n\u003Cmain\u003E\n  \u003C!-- ask 4 questions:  --\u003E\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:16pt;\"\u003E\n    \u003Cform id =\"Exploratory_Questions\" required\u003E   \n      \u003Ctable id=\"Demand\"\u003E\n                 \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Clabel for=\"Demand\"\u003E  1. Earlier, we asked you to indicate how you felt about Chris (e.g., whether he was good or bad). Did you tell us the truth about how you felt? Or did you just fake your response (i.e., tell us what you thought we wanted to hear)? Please be honest here (it will not affect payment in any way) \u003C\u002Flabel\u003E\n            \u003C\u002Fth\u003E\n               \u003Ctr\u003E\n            \u003Ctd style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Cselect name=\"Demand\" id=\"Demand\" required\u003E\n               \u003Coption value=\"\"\u003E ----- \u003C\u002Foption\u003E\n                \u003Coption value=\"Demand\"\u003E Yes - I faked my response based on what I thought the researchers wanted to find \u003C\u002Foption\u003E\n                \u003Coption value=\"No Demand\"\u003E No - my responses were based on how I genuinely felt \u003C\u002Foption\u003E\n                \u003Coption value=\"I don't know\"\u003E I don't know \u003C\u002Foption\u003E\n                \u003C\u002Fselect\u003E \n            \u003C\u002Ftd\u003E\n          \u003C\u002Ftr\u003E\n\n      \u003Ctable id=\"Reactance\"\u003E\n                 \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Clabel for=\"Reactance\"\u003E  2. Earlier, we asked you to indicate how you felt about Chris (e.g., whether he was good or bad). When answering that question did you consciously \u003Cstrong\u003E resist \u003C\u002Fstrong\u003E what (you thought) the researchers wanted you to feel towards Chris?\u003C\u002Flabel\u003E\n            \u003C\u002Fth\u003E\n               \u003Ctr\u003E\n            \u003Ctd style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Cselect name=\"Reactance\" id=\"Reactance\" required\u003E\n                \u003Coption value=\"\"\u003E ----- \u003C\u002Foption\u003E\n                \u003Coption value=\"Reactance\"\u003E Yes- I resisted what I thought the researchers wanted me to say \u003C\u002Foption\u003E\n                \u003Coption value=\"No Reactance\"\u003E No - my responses were based on how I genuinely felt \u003C\u002Foption\u003E\n                \u003Coption value=\"I don't know\"\u003E I don't know \u003C\u002Foption\u003E\n                \u003C\u002Fselect\u003E \n            \u003C\u002Ftd\u003E\n          \u003C\u002Ftr\u003E\n\n      \u003Ctable id=\"hypothesis_awareness\"\u003E\n                 \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Clabel for=\"hypothesis_awareness\"\u003E  \u003Cp\u003E 3. What do you think the researchers were trying to achieve in this study? \u003C\u002Fp\u003E \u003C\u002Flabel\u003E\n  \n\u003Cp\u003E\n\u003Ctextarea name = \"hypothesis_awareness\" id=\"hypothesis_awareness\" size = \"35\" style = \"width: 1000px; height: 250px;\" autocomplete = \"off\" required\u003E\u003C\u002Ftextarea\u003E\n\u003C\u002Fp\u003E\n\n\n      \u003Ctable id=\"influence_awareness\"\u003E\n                 \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Clabel for=\"influence_awareness\"\u003E  \u003Cp\u003E 4. Think back to the YouTube video we showed you. Do you think this video influenced how much you subsequently liked or disliked Chris? Please be honest here. \u003C\u002Fp\u003E \u003C\u002Flabel\u003E\n  \n\u003Cp\u003E\n\u003Ctextarea name = \"influence_awareness\" id=\"influence_awareness\" size = \"35\" style = \"width: 1000px; height: 250px;\" autocomplete = \"off\" required\u003E\u003C\u002Ftextarea\u003E\n\u003C\u002Fp\u003E\n      \u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Please click on this \u003Cbutton type=\"submit\" form=\"Exploratory_Questions\"\u003E Submit \u003C\u002Fbutton\u003E button to continue\n\u003C\u002Ffooter\u003E",
      "files": {},
      "parameters": {},
      "responses": {},
      "messageHandlers": {},
      "title": "Exploratory Questions"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cheader style = \"top:110pt;left:110pt\"\u003E\n  \u003Cimg src=\"static\u002FPart_3.jpg\" height = \"45%\"; width=\"45%\"\u003E\n\u003C\u002Fheader\u003E\n\n   \u003Cmain class=\"fullscreen\" style=\"padding-bottom:2pt\"\u003E\n  \u003C!-- ask 1 question: ID --\u003E\n      \n      \u003Cform id =\"Part 1\"\u003E\n      \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Press this \u003Cbutton type=\"submit\" form=\"Part 1\"\u003E button \u003C\u002Fbutton\u003E in order to continue.\n\u003C\u002Ffooter\u003E",
      "scrollTop": true,
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "Part 3"
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "Questionnaires",
      "shuffle": true,
      "content": [
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "REI (Cognitive Preference)",
          "content": [
            {
              "type": "lab.html.Form",
              "content": "\u003Cform id =\"REI_1\" required\u003E\n\n\u003Cdiv class=\"wrap\"\u003E\n  \n  \u003Ch2 class=\"likert-header\"\u003E Please indicate your agreement or disagreement with the following statements using the 7-point scale. Take into account that there are no right or wrong answers. Please try to answer spontaneously and don’t think about it too long.\n  \u003C\u002Fh2\u003E\n\n  \u003Ch2 class=\"likert-header\"\u003E\n  \u003C\u002Fh2\u003E\n\n  \u003Cform action=\"\"\u003E\n\n\u003C!-- Question 1 --\u003E\n\n    \u003Clabel class=\"statement\"\u003E I try to avoid situations that require thinking in depth about something. \u003C\u002Flabel\u003E\n   \n    \u003Cul class= \"likert\" required\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q1_REI\" value=\"1\" required\u003E\n        \u003Clabel\u003E1. Strongly disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\u003Cinput type=\"radio\" name=\"Q1_REI\" value=\"2\"\u003E\n        \u003Clabel\u003E2. Disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\u003Cinput type=\"radio\" name=\"Q1_REI\" value=\"3\"\u003E\n        \u003Clabel\u003E3. Somewhat disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\u003Cinput type=\"radio\" name=\"Q1_REI\" value=\"4\"\u003E\n        \u003Clabel\u003E4. Neutral\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\u003Cinput type=\"radio\" name=\"Q1_REI\" value=\"5\"\u003E\n        \u003Clabel\u003E5. Somewhat agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\u003Cinput type=\"radio\" name=\"Q1_REI\" value=\"6\"\u003E\n        \u003Clabel\u003E6. Agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\u003Cinput type=\"radio\" name=\"Q1_REI\" value=\"7\"\u003E\n        \u003Clabel\u003E7. Strongly agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n    \u003C\u002Ful\u003E\n\n\u003C!-- Question 2 --\u003E\n\n    \u003Clabel class=\"statement\"\u003E I enjoy intellectual challenges \u003C\u002Flabel\u003E\n    \u003Cul class= \"likert\"\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q2_REI\" value=\"1\" required\u003E\n        \u003Clabel\u003E1. Strongly disagree \u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q2_REI\" value=\"2\"\u003E\n        \u003Clabel\u003E2. Disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q2_REI\" value=\"3\"\u003E\n        \u003Clabel\u003E3. Somewhat disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q2_REI\" value=\"4\"\u003E\n        \u003Clabel\u003E4. Neutral\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q2_REI\" value=\"5\"\u003E\n        \u003Clabel\u003E5. Somewhat agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q2_REI\" value=\"6\"\u003E\n        \u003Clabel\u003E6. Agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q2_REI\" value=\"7\"\u003E\n        \u003Clabel\u003E7. Strongly agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n    \u003C\u002Ful\u003E\n\n\n\n\u003C!-- Question 3 --\u003E\n    \u003Clabel class=\"statement\"\u003EI believe in trusting my hunches\u003C\u002Flabel\u003E\n   \u003Cul class= \"likert\"\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q3_REI\" value=\"1\" required\u003E\n        \u003Clabel\u003E1. Strongly disagree \u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q3_REI\" value=\"2\"\u003E\n        \u003Clabel\u003E2. Disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q3_REI\" value=\"3\"\u003E\n        \u003Clabel\u003E3. Somewhat disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q3_REI\" value=\"4\"\u003E\n        \u003Clabel\u003E4. Neutral\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q3_REI\" value=\"5\"\u003E\n        \u003Clabel\u003E5. Somewhat agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q3_REI\" value=\"6\"\u003E\n        \u003Clabel\u003E6. Agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q3_REI\" value=\"7\"\u003E\n        \u003Clabel\u003E7. Strongly agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n    \u003C\u002Ful\u003E\n\n\n   \u003C!-- Question 4 --\u003E\n    \u003Clabel class=\"statement\"\u003EI DON'T like situations in which I have to rely on intuition.\u003C\u002Flabel\u003E\n   \u003Cul class= \"likert\"\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q4_REI\" value=\"1\" required\u003E\n        \u003Clabel\u003E1. Strongly disagree \u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q4_REI\" value=\"2\"\u003E\n        \u003Clabel\u003E2. Disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q4_REI\" value=\"3\"\u003E\n        \u003Clabel\u003E3. Somewhat disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q4_REI\" value=\"4\"\u003E\n        \u003Clabel\u003E4. Neutral\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q4_REI\" value=\"5\"\u003E\n        \u003Clabel\u003E5 Somewhat agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q4_REI\" value=\"6\"\u003E\n        \u003Clabel\u003E6. Agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q4_REI\" value=\"7\"\u003E\n        \u003Clabel\u003E7. Strongly agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n    \u003C\u002Ful\u003E\n\n\n    \u003C!-- Question 5 --\u003E\n    \u003Clabel class=\"statement\"\u003EIntuition can be a very useful way to solve problems.\u003C\u002Flabel\u003E\n   \u003Cul class= \"likert\"\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q5_REI\" value=\"1\" required\u003E\n        \u003Clabel\u003E1. Strongly disagree \u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q5_REI\" value=\"2\"\u003E\n        \u003Clabel\u003E2. Disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q5_REI\" value=\"3\"\u003E\n        \u003Clabel\u003E3. Somewhat disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q5_REI\" value=\"4\"\u003E\n        \u003Clabel\u003E4. Neutral\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q5_REI\" value=\"5\"\u003E\n        \u003Clabel\u003E5. Somewhat agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q5_REI\" value=\"6\"\u003E\n        \u003Clabel\u003E6. Agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q5_REI\" value=\"7\"\u003E\n        \u003Clabel\u003E7. Strongly agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n    \u003C\u002Ful\u003E\n\n\n\u003C!-- Question 6 --\u003E\n    \u003Clabel class=\"statement\"\u003EI am NOT very good in solving problems that require careful logical analysis.\u003C\u002Flabel\u003E\n   \u003Cul class= \"likert\"\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q6_REI\" value=\"1\" required\u003E\n        \u003Clabel\u003E1. Strongly disagree \u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q6_REI\" value=\"2\"\u003E\n        \u003Clabel\u003E2. Disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q6_REI\" value=\"3\"\u003E\n        \u003Clabel\u003E3. Somewhat disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q6_REI\" value=\"4\"\u003E\n        \u003Clabel\u003E4. Neutral\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q6_REI\" value=\"5\"\u003E\n        \u003Clabel\u003E5. Somewhat agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q6_REI\" value=\"6\"\u003E\n        \u003Clabel\u003E6. Agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q6_REI\" value=\"7\"\u003E\n        \u003Clabel\u003E7. Strongly agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n    \u003C\u002Ful\u003E\n\n\n\u003C!-- Question 7 --\u003E\n    \u003Clabel class=\"statement\"\u003EI DON'T like to have to do a lot of thinking.\u003C\u002Flabel\u003E\n   \u003Cul class= \"likert\"\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q7_REI\" value=\"1\" required\u003E\n        \u003Clabel\u003E1. Strongly disagree \u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q7_REI\" value=\"2\"\u003E\n        \u003Clabel\u003E2. Disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q7_REI\" value=\"3\"\u003E\n        \u003Clabel\u003E3. Somewhat disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q7_REI\" value=\"4\"\u003E\n        \u003Clabel\u003E4. Neutral\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q7_REI\" value=\"5\"\u003E\n        \u003Clabel\u003E5. Somewhat agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q7_REI\" value=\"6\"\u003E\n        \u003Clabel\u003E6. Agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q7_REI\" value=\"7\"\u003E\n        \u003Clabel\u003E7. Strongly agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n    \u003C\u002Ful\u003E\n\n\n\u003C!-- Question 8 --\u003E\n    \u003Clabel class=\"statement\"\u003EI think there are times when one should rely on one's intuition.\u003C\u002Flabel\u003E\n   \u003Cul class= \"likert\"\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q8_REI\" value=\"1\" required\u003E\n        \u003Clabel\u003E1. Strongly disagree \u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q8_REI\" value=\"2\"\u003E\n        \u003Clabel\u003E2. Disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q8_REI\" value=\"3\"\u003E\n        \u003Clabel\u003E3. Somewhat disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q8_REI\" value=\"4\"\u003E\n        \u003Clabel\u003E4. Neutral\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q8_REI\" value=\"5\"\u003E\n        \u003Clabel\u003E5. Somewhat agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q8_REI\" value=\"6\"\u003E\n        \u003Clabel\u003E6. Agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q8_REI\" value=\"7\"\u003E\n        \u003Clabel\u003E7. Strongly agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n    \u003C\u002Ful\u003E\n\n\n\u003C!-- Question 9 --\u003E\n    \u003Clabel class=\"statement\"\u003EI often go by my instincts when deciding on a course of action.\u003C\u002Flabel\u003E\n   \u003Cul class= \"likert\"\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q9_REI\" value=\"1\" required\u003E\n        \u003Clabel\u003E1. Strongly disagree \u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q9_REI\" value=\"2\"\u003E\n        \u003Clabel\u003E2. Disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q9_REI\" value=\"3\"\u003E\n        \u003Clabel\u003E3. Somewhat disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q9_REI\" value=\"4\"\u003E\n        \u003Clabel\u003E4. Neutral\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q9_REI\" value=\"5\"\u003E\n        \u003Clabel\u003E5. Somewhat agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q9_REI\" value=\"6\"\u003E\n        \u003Clabel\u003E6. Agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q9_REI\" value=\"7\"\u003E\n        \u003Clabel\u003E7. Strongly agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n    \u003C\u002Ful\u003E\n\n\n\u003C!-- Question 10 --\u003E\n    \u003Clabel class=\"statement\"\u003EI DON'T reason well under pressure.\u003C\u002Flabel\u003E\n   \u003Cul class= \"likert\"\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q10_REI\" value=\"1\" required\u003E\n        \u003Clabel\u003E1. Strongly disagree \u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q10_REI\" value=\"2\"\u003E\n        \u003Clabel\u003E2. Disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q10_REI\" value=\"3\"\u003E\n        \u003Clabel\u003E3. Somewhat disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q10_REI\" value=\"4\"\u003E\n        \u003Clabel\u003E4. Neutral\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q10_REI\" value=\"5\"\u003E\n        \u003Clabel\u003E5. Somewhat agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q10_REI\" value=\"6\"\u003E\n        \u003Clabel\u003E6. Agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q10_REI\" value=\"7\"\u003E\n        \u003Clabel\u003E7. Strongly agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n    \u003C\u002Ful\u003E\n\n\u003C\u002Fform\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Press this \u003Cbutton type=\"submit\" form=\"REI_1\"\u003E button \u003C\u002Fbutton\u003E in order to continue.\n\u003C\u002Ffooter\u003E",
              "files": {},
              "parameters": {},
              "responses": {},
              "messageHandlers": {},
              "title": "Part 1"
            },
            {
              "type": "lab.html.Form",
              "content": "\u003Cform id =\"REI_2\" required\u003E\n\n\u003Cdiv class=\"wrap\"\u003E\n  \n  \u003Ch2 class=\"likert-header\"\u003E Please indicate your agreement or disagreement with the following statements using the 7-point scale. Take into account that there are no right or wrong answers. Please try to answer spontaneously and don’t think about it too long.\n  \u003C\u002Fh2\u003E\n\n  \u003Ch2 class=\"likert-header\"\u003E\n  \u003C\u002Fh2\u003E\n\n  \u003Cform action=\"\"\u003E\n\n\u003C!-- Question 11 --\u003E\n\n    \u003Clabel class=\"statement\"\u003EI enjoy solving problems that require hard thinking.\u003C\u002Flabel\u003E\n   \n    \u003Cul class= \"likert\" required\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q11_REI\" value=\"1\" required\u003E\n        \u003Clabel\u003E1. Strongly Disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\u003Cinput type=\"radio\" name=\"Q11_REI\" value=\"2\"\u003E\n        \u003Clabel\u003E2. Disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\u003Cinput type=\"radio\" name=\"Q11_REI\" value=\"3\"\u003E\n        \u003Clabel\u003E3. Somewhat disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\u003Cinput type=\"radio\" name=\"Q11_REI\" value=\"4\"\u003E\n        \u003Clabel\u003E4. Neutral\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\u003Cinput type=\"radio\" name=\"Q11_REI\" value=\"5\"\u003E\n        \u003Clabel\u003E5. Somewhat agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\u003Cinput type=\"radio\" name=\"Q11_REI\" value=\"6\"\u003E\n        \u003Clabel\u003E6. Agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\u003Cinput type=\"radio\" name=\"Q11_REI\" value=\"7\"\u003E\n        \u003Clabel\u003E7. Strongly Agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n    \u003C\u002Ful\u003E\n\n\u003C!-- Question 12 --\u003E\n\n    \u003Clabel class=\"statement\"\u003EI trust my initial feelings about people.\u003C\u002Flabel\u003E\n    \u003Cul class= \"likert\"\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q12_REI\" value=\"1\" required\u003E\n        \u003Clabel\u003E1. Strongly Disagree \u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q12_REI\" value=\"2\"\u003E\n        \u003Clabel\u003E2. Disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q12_REI\" value=\"3\"\u003E\n        \u003Clabel\u003E3. Somewhat disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q12_REI\" value=\"4\"\u003E\n        \u003Clabel\u003E4. Neutral\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q12_REI\" value=\"5\"\u003E\n        \u003Clabel\u003E5. Somewhat agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q12_REI\" value=\"6\"\u003E\n        \u003Clabel\u003E6. Agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q12_REI\" value=\"7\"\u003E\n        \u003Clabel\u003E7. Strongly Agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n    \u003C\u002Ful\u003E\n\n\n\n\u003C!-- Question 13 --\u003E\n    \u003Clabel class=\"statement\"\u003EReasoning things out carefully is NOT one of my strong points.\u003C\u002Flabel\u003E\n   \u003Cul class= \"likert\"\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q13_REI\" value=\"1\" required\u003E\n        \u003Clabel\u003E1. Strongly Disagree \u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q13_REI\" value=\"2\"\u003E\n        \u003Clabel\u003E2. Disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q13_REI\" value=\"3\"\u003E\n        \u003Clabel\u003E3. Somewhat disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q13_REI\" value=\"4\"\u003E\n        \u003Clabel\u003E4. Neutral\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q13_REI\" value=\"5\"\u003E\n        \u003Clabel\u003E5. Somewhat agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q13_REI\" value=\"6\"\u003E\n        \u003Clabel\u003E6. Agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q13_REI\" value=\"7\"\u003E\n        \u003Clabel\u003E7. Strongly Agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n    \u003C\u002Ful\u003E\n\n\n   \u003C!-- Question 14 --\u003E\n    \u003Clabel class=\"statement\"\u003EI like to rely on my intuitive impressions.\u003C\u002Flabel\u003E\n   \u003Cul class= \"likert\"\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q14_REI\" value=\"1\" required\u003E\n        \u003Clabel\u003E1. Strongly Disagree \u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q14_REI\" value=\"2\"\u003E\n        \u003Clabel\u003E2. Disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q14_REI\" value=\"3\"\u003E\n        \u003Clabel\u003E3. Somewhat disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q14_REI\" value=\"4\"\u003E\n        \u003Clabel\u003E4. Neutral\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q14_REI\" value=\"5\"\u003E\n        \u003Clabel\u003E5. Somewhat agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q14_REI\" value=\"6\"\u003E\n        \u003Clabel\u003E6. Agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q14_REI\" value=\"7\"\u003E\n        \u003Clabel\u003E7. Strongly Agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n    \u003C\u002Ful\u003E\n\n\n    \u003C!-- Question 15 --\u003E\n    \u003Clabel class=\"statement\"\u003EI am NOT a very analytical thinker.\u003C\u002Flabel\u003E\n   \u003Cul class= \"likert\"\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q15_REI\" value=\"1\" required\u003E\n        \u003Clabel\u003E1. Strongly Disagree \u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q15_REI\" value=\"2\"\u003E\n        \u003Clabel\u003E2. Disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q15_REI\" value=\"3\"\u003E\n        \u003Clabel\u003E3. Somewhat disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q15_REI\" value=\"4\"\u003E\n        \u003Clabel\u003E4. Neutral\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q15_REI\" value=\"5\"\u003E\n        \u003Clabel\u003E5. Somewhat agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q15_REI\" value=\"6\"\u003E\n        \u003Clabel\u003E6. Agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q15_REI\" value=\"7\"\u003E\n        \u003Clabel\u003E7. Strongly Agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n    \u003C\u002Ful\u003E\n\n\n\u003C!-- Question 16 --\u003E\n    \u003Clabel class=\"statement\"\u003EUsing my \"gut-feelings\" usually works well for me in figuring out problems in my life.\u003C\u002Flabel\u003E\n   \u003Cul class= \"likert\"\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q16_REI\" value=\"1\" required\u003E\n        \u003Clabel\u003E1. Strongly Disagree \u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q16_REI\" value=\"2\"\u003E\n        \u003Clabel\u003E2. Disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q16_REI\" value=\"3\"\u003E\n        \u003Clabel\u003E3. Somewhat disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q16_REI\" value=\"4\"\u003E\n        \u003Clabel\u003E4. Neutral\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q16_REI\" value=\"5\"\u003E\n        \u003Clabel\u003E5. Somewhat agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q16_REI\" value=\"6\"\u003E\n        \u003Clabel\u003E6. Agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q16_REI\" value=\"7\"\u003E\n        \u003Clabel\u003E7. Strongly Agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n    \u003C\u002Ful\u003E\n\n\n\u003C!-- Question 17 --\u003E\n    \u003Clabel class=\"statement\"\u003EWhen it comes to trusting people, I can usually rely on my gut feelings.\u003C\u002Flabel\u003E\n   \u003Cul class= \"likert\"\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q17_REI\" value=\"1\" required\u003E\n        \u003Clabel\u003E1. Strongly Disagree \u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q17_REI\" value=\"2\"\u003E\n        \u003Clabel\u003E2. Disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q17_REI\" value=\"3\"\u003E\n        \u003Clabel\u003E3. Somewhat disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q17_REI\" value=\"4\"\u003E\n        \u003Clabel\u003E4. Neutral\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q17_REI\" value=\"5\"\u003E\n        \u003Clabel\u003E5. Somewhat agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q17_REI\" value=\"6\"\u003E\n        \u003Clabel\u003E6. Agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q17_REI\" value=\"7\"\u003E\n        \u003Clabel\u003E7. Strongly Agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n    \u003C\u002Ful\u003E\n\n\n\u003C!-- Question 18 --\u003E\n    \u003Clabel class=\"statement\"\u003EI DON'T have a very good sense of intuition.\u003C\u002Flabel\u003E\n   \u003Cul class= \"likert\"\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q18_REI\" value=\"1\" required\u003E\n        \u003Clabel\u003E1. Strongly Disagree \u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q18_REI\" value=\"2\"\u003E\n        \u003Clabel\u003E2. Disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q18_REI\" value=\"3\"\u003E\n        \u003Clabel\u003E3. Somewhat disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q18_REI\" value=\"4\"\u003E\n        \u003Clabel\u003E4. Neutral\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q18_REI\" value=\"5\"\u003E\n        \u003Clabel\u003E5. Somewhat agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q18_REI\" value=\"6\"\u003E\n        \u003Clabel\u003E6. Agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q18_REI\" value=\"7\"\u003E\n        \u003Clabel\u003E7. Strongly Agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n    \u003C\u002Ful\u003E\n\n\n\u003C!-- Question 19 --\u003E\n    \u003Clabel class=\"statement\"\u003EThinking is NOT my idea of an enjoyable activity.\u003C\u002Flabel\u003E\n   \u003Cul class= \"likert\"\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q19_REI\" value=\"1\" required\u003E\n        \u003Clabel\u003E1. Strongly Disagree \u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q19_REI\" value=\"2\"\u003E\n        \u003Clabel\u003E2. Disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q19_REI\" value=\"3\"\u003E\n        \u003Clabel\u003E3. Somewhat disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q19_REI\" value=\"4\"\u003E\n        \u003Clabel\u003E4. Neutral\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q19_REI\" value=\"5\"\u003E\n        \u003Clabel\u003E5. Somewhat agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q19_REI\" value=\"6\"\u003E\n        \u003Clabel\u003E6. Agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q19_REI\" value=\"7\"\u003E\n        \u003Clabel\u003E7. Strongly Agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n    \u003C\u002Ful\u003E\n\n\n\u003C!-- Question 20 --\u003E\n    \u003Clabel class=\"statement\"\u003EI'm NOT that good at figuring out complicated problems.\u003C\u002Flabel\u003E\n   \u003Cul class= \"likert\"\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q20_REI\" value=\"1\" required\u003E\n        \u003Clabel\u003E1. Strongly Disagree \u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q20_REI\" value=\"2\"\u003E\n        \u003Clabel\u003E2. Disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q20_REI\" value=\"3\"\u003E\n        \u003Clabel\u003E3. Somewhat disagree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q20_REI\" value=\"4\"\u003E\n        \u003Clabel\u003E4. Neutral\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q20_REI\" value=\"5\"\u003E\n        \u003Clabel\u003E5. Somewhat agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q20_REI\" value=\"6\"\u003E\n        \u003Clabel\u003E6. Agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q20_REI\" value=\"7\"\u003E\n        \u003Clabel\u003E7. Strongly Agree\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n    \u003C\u002Ful\u003E\n\n\u003C\u002Fform\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Press this \u003Cbutton type=\"submit\" form=\"REI_2\"\u003E button \u003C\u002Fbutton\u003E in order to continue.\n\u003C\u002Ffooter\u003E",
              "files": {},
              "parameters": {},
              "responses": {},
              "messageHandlers": {},
              "title": "Part 2"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "OCQ (Overclaiming)",
          "content": [
            {
              "type": "lab.html.Form",
              "content": "\u003Cform id =\"OCQ_1\" required\u003E\n\n\u003Cdiv class=\"wrap\"\u003E\n  \n  \u003Ch2 class=\"likert-header\" style=\"text-align:center; padding-left: 15px; padding-right: 15px\"\u003E Please rate your familiarity with each item on this questionnaire.  Use the scale below as a guide \u003C\u002Fh2\u003E\n\n\u003Ch2 style=\"text-align:center; padding-left: 15px; padding-right: 15px\"\u003E\n      0 (Never Heard of It)     1        2        3        4        5        6 (Very Familiar)\n\u003C\u002Fh2\u003E\n\n\u003Cp style=\"text-align:center; font-size:18px; margin-right: 7%; margin-left: 7%\" \u003E For example, if the item said \"Bill Clinton\" or \"Mexico\", or \"the Bible\", you would probably write a '6' beside it because it is very familiar. \n  \n  However, if the item said \"Fred Gruneberg\" (my next door neighbor) you would write a '0' to indicate you never heard of him. \u003C\u002Fp\u003E \n\n\n\u003Cp style=\"text-align:center; font-size:18px; padding-left: 35px; padding-right: 35px\"\u003E e.g.,          6    (Bill Clinton) \u003C\u002Fp\u003E\n\u003Cp style=\"text-align:center; font-size:18px; padding-left: 35px; padding-right: 35px\"\u003E                   0    (Fred Gruneberg) \u003C\u002Fp\u003E\n\n\u003Cp style=\"text-align:center; font-size:18px; padding-left: 35px; padding-right: 35px\"\u003E In other words, the difficulty of the items ranges from easy to impossible. We want to determine if individuals who are knowledgeable about one area are also knowledgeable about other areas.\u003C\u002Fp\u003E\n\n\u003Ch3 style=\"text-align:right; padding-right: 2%\"\u003E\n      0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n      1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    \n      2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     \n      3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   \n      4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    \n      5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    \n      6 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n\n\u003C\u002Fh3\u003E\n\n\u003Cp style=\"text-align:right; font-size:18px; padding-right: 6%\"\u003E Never Heard of It &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  Very Familiar\n\u003C\u002Fp\u003E\n\n  \u003Cform action=\"\"\u003E\n\n\u003C!-- Question Label --\u003E\n\n\u003Cdiv \u003E\n  \u003Ctable\u003E\n    \u003Ctbody\u003E\n\n\u003C!-- Question 1 --\u003E\n    \u003Ctr\u003E\n      \u003Ctd style=\"padding-left: 10%;\"\u003E\u003Cstrong\u003ENapoleon\u003C\u002Fstrong\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_1\" value=\"0\" style = \"margin:0\" required\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_1\" value=\"1\" style = \"margin:0\"\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_1\" value=\"2\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_1\" value=\"3\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_1\" value=\"4\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_1\" value=\"5\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_1\" value=\"6\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n    \u003C\u002Ftr\u003E\n\n\u003C!-- Question 2 --\u003E\n    \u003Ctr\u003E\n      \u003Ctd style=\"padding-left: 10%;\"\u003E\u003Cstrong\u003ERobespierre\u003C\u002Fstrong\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_2\" value=\"0\" style = \"margin:0\" required\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_2\" value=\"1\" style = \"margin:0\"\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_2\" value=\"2\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_2\" value=\"3\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_2\" value=\"4\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_2\" value=\"5\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_2\" value=\"6\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n    \u003C\u002Ftr\u003E\n\n\u003C!-- Question 3 --\u003E\n    \u003Ctr\u003E\n      \u003Ctd style=\"padding-left: 10%;\"\u003E\u003Cstrong\u003EEl Puente\u003C\u002Fstrong\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_3\" value=\"0\" style = \"margin:0\" required\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_3\" value=\"1\" style = \"margin:0\"\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_3\" value=\"2\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_3\" value=\"3\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_3\" value=\"4\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_3\" value=\"5\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_3\" value=\"6\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n    \u003C\u002Ftr\u003E\n\n\u003C!-- Question 4 --\u003E\n    \u003Ctr\u003E\n      \u003Ctd style=\"padding-left: 10%;\"\u003E\u003Cstrong\u003EMy Lai\u003C\u002Fstrong\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_4\" value=\"0\" style = \"margin:0\" required\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_4\" value=\"1\" style = \"margin:0\"\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_4\" value=\"2\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_4\" value=\"3\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_4\" value=\"4\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_4\" value=\"5\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_4\" value=\"6\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n    \u003C\u002Ftr\u003E\n\n    \u003C!-- Question 5 --\u003E\n    \u003Ctr\u003E\n      \u003Ctd style=\"padding-left: 10%;\"\u003E\u003Cstrong\u003EThe Lusitania\u003C\u002Fstrong\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_5\" value=\"0\" style = \"margin:0\" required\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_5\" value=\"1\" style = \"margin:0\"\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_5\" value=\"2\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_5\" value=\"3\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_5\" value=\"4\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_5\" value=\"5\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_5\" value=\"6\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n    \u003C\u002Ftr\u003E\n\n    \u003C!-- Question 6 --\u003E\n    \u003Ctr\u003E\n      \u003Ctd style=\"padding-left: 10%;\"\u003E\u003Cstrong\u003ERonald Reagan\u003C\u002Fstrong\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_6\" value=\"0\" style = \"margin:0\" required\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_6\" value=\"1\" style = \"margin:0\"\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_6\" value=\"2\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_6\" value=\"3\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_6\" value=\"4\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_6\" value=\"5\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_6\" value=\"6\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n    \u003C\u002Ftr\u003E\n\n    \u003C!-- Question 7 --\u003E\n    \u003Ctr\u003E\n      \u003Ctd style=\"padding-left: 10%;\"\u003E\u003Cstrong\u003EPrince Lorenzo\u003C\u002Fstrong\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_7\" value=\"0\" style = \"margin:0\" required\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_7\" value=\"1\" style = \"margin:0\"\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_7\" value=\"2\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_7\" value=\"3\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_7\" value=\"4\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_7\" value=\"5\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_7\" value=\"6\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n    \u003C\u002Ftr\u003E\n\n    \u003C!-- Question 8 --\u003E\n    \u003Ctr\u003E\n      \u003Ctd style=\"padding-left: 10%;\"\u003E\u003Cstrong\u003EThe Luddites\u003C\u002Fstrong\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_8\" value=\"0\" style = \"margin:0\" required\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_8\" value=\"1\" style = \"margin:0\"\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_8\" value=\"2\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_8\" value=\"3\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_8\" value=\"4\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_8\" value=\"5\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_8\" value=\"6\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n    \u003C\u002Ftr\u003E\n\n    \u003C!-- Question 9 --\u003E\n    \u003Ctr\u003E\n      \u003Ctd style=\"padding-left: 10%;\"\u003E\u003Cstrong\u003ENeville Chamberlain\u003C\u002Fstrong\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_9\" value=\"0\" style = \"margin:0\" required\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_9\" value=\"1\" style = \"margin:0\"\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_9\" value=\"2\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_9\" value=\"3\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_9\" value=\"4\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_9\" value=\"5\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_9\" value=\"6\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n    \u003C\u002Ftr\u003E\n\n    \u003C!-- Question 10 --\u003E\n    \u003Ctr\u003E\n      \u003Ctd style=\"padding-left: 10%;\"\u003E\u003Cstrong\u003EVichy Government\u003C\u002Fstrong\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_10\" value=\"0\" style = \"margin:0\" required\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_10\" value=\"1\" style = \"margin:0\"\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_10\" value=\"2\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_10\" value=\"3\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_10\" value=\"4\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_10\" value=\"5\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_10\" value=\"6\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n    \u003C\u002Ftr\u003E\n\n    \u003C!-- Question 11 --\u003E\n    \u003Ctr\u003E\n      \u003Ctd style=\"padding-left: 10%;\"\u003E\u003Cstrong\u003EQueen Alberta\u003C\u002Fstrong\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_11\" value=\"0\" style = \"margin:0\" required\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_11\" value=\"1\" style = \"margin:0\"\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_11\" value=\"2\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_11\" value=\"3\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_11\" value=\"4\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_11\" value=\"5\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_11\" value=\"6\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n    \u003C\u002Ftr\u003E\n\n    \u003C!-- Question 12 --\u003E\n    \u003Ctr\u003E\n      \u003Ctd style=\"padding-left: 10%;\"\u003E\u003Cstrong\u003EBay of Pigs\u003C\u002Fstrong\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_12\" value=\"0\" style = \"margin:0\" required\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_12\" value=\"1\" style = \"margin:0\"\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_12\" value=\"2\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_12\" value=\"3\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_12\" value=\"4\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_12\" value=\"5\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_12\" value=\"6\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n    \u003C\u002Ftr\u003E\n\n    \u003C!-- Question 13 --\u003E\n    \u003Ctr\u003E\n      \u003Ctd style=\"padding-left: 10%;\"\u003E\u003Cstrong\u003ETorquemada\u003C\u002Fstrong\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_13\" value=\"0\" style = \"margin:0\" required\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_13\" value=\"1\" style = \"margin:0\"\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_13\" value=\"2\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_13\" value=\"3\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_13\" value=\"4\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_13\" value=\"5\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_13\" value=\"6\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n    \u003C\u002Ftr\u003E\n\n    \u003C!-- Question 14 --\u003E\n    \u003Ctr\u003E\n      \u003Ctd style=\"padding-left: 10%;\"\u003E\u003Cstrong\u003EWounded Knee\u003C\u002Fstrong\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_14\" value=\"0\" style = \"margin:0\" required\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_14\" value=\"1\" style = \"margin:0\"\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_14\" value=\"2\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_14\" value=\"3\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_14\" value=\"4\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_14\" value=\"5\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_14\" value=\"6\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n    \u003C\u002Ftr\u003E\n\n    \u003C!-- Question 15 --\u003E\n    \u003Ctr\u003E\n      \u003Ctd style=\"padding-left: 10%;\"\u003E\u003Cstrong\u003EClara Barton\u003C\u002Fstrong\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_15\" value=\"0\" style = \"margin:0\" required\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_15\" value=\"1\" style = \"margin:0\"\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_15\" value=\"2\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_15\" value=\"3\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_15\" value=\"4\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_15\" value=\"5\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_15\" value=\"6\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n    \u003C\u002Ftr\u003E\n\n\n\u003C\u002Ftbody\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\n\u003C\u002Fform\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Press this \u003Cbutton type=\"submit\" form=\"OCQ_1\"\u003E button \u003C\u002Fbutton\u003E in order to continue.\n\u003C\u002Ffooter\u003E",
              "files": {},
              "parameters": {},
              "responses": {},
              "messageHandlers": {},
              "title": "Part 1 (Historical Events)"
            },
            {
              "type": "lab.html.Form",
              "content": "\u003Cform id =\"OCQ_2\" required\u003E\n\n\u003Cdiv class=\"wrap\"\u003E\n\n\u003Ch3 style=\"text-align:right; padding-right: 2%\"\u003E\n      0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n      1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    \n      2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     \n      3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   \n      4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    \n      5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    \n      6 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n\n\u003C\u002Fh3\u003E\n\n\u003Cp style=\"text-align:right; font-size:18px; padding-right: 6%\"\u003E Never Heard of It &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  Very Familiar\n\u003C\u002Fp\u003E\n\n\n  \u003Cform action=\"\"\u003E\n\n\u003C!-- Question Label --\u003E\n\n\u003Cdiv \u003E\n  \u003Ctable\u003E\n    \u003Ctbody\u003E\n\n\u003C!-- Question 1 --\u003E\n    \u003Ctr\u003E\n      \u003Ctd style=\"padding-left: 10%;\"\u003E\u003Cstrong\u003EManhattan Project\u003C\u002Fstrong\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_16\" value=\"0\" style = \"margin:0\" required\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_16\" value=\"1\" style = \"margin:0\"\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_16\" value=\"2\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_16\" value=\"3\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_16\" value=\"4\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_16\" value=\"5\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_16\" value=\"6\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n    \u003C\u002Ftr\u003E\n\n\u003C!-- Question 2 --\u003E\n    \u003Ctr\u003E\n      \u003Ctd style=\"padding-left: 10%;\"\u003E\u003Cstrong\u003Easteroid\u003C\u002Fstrong\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_17\" value=\"0\" style = \"margin:0\" required\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_17\" value=\"1\" style = \"margin:0\"\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_17\" value=\"2\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_17\" value=\"3\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_17\" value=\"4\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_17\" value=\"5\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_17\" value=\"6\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n    \u003C\u002Ftr\u003E\n\n\u003C!-- Question 3 --\u003E\n    \u003Ctr\u003E\n      \u003Ctd style=\"padding-left: 10%;\"\u003E\u003Cstrong\u003Enuclear fusion\u003C\u002Fstrong\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_18\" value=\"0\" style = \"margin:0\" required\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_18\" value=\"1\" style = \"margin:0\"\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_18\" value=\"2\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_18\" value=\"3\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_18\" value=\"4\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_18\" value=\"5\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_18\" value=\"6\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n    \u003C\u002Ftr\u003E\n\n\u003C!-- Question 4 --\u003E\n    \u003Ctr\u003E\n      \u003Ctd style=\"padding-left: 10%;\"\u003E\u003Cstrong\u003Echolarine\u003C\u002Fstrong\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_19\" value=\"0\" style = \"margin:0\" required\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_19\" value=\"1\" style = \"margin:0\"\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_19\" value=\"2\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_19\" value=\"3\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_19\" value=\"4\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_19\" value=\"5\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_19\" value=\"6\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n    \u003C\u002Ftr\u003E\n\n    \u003C!-- Question 5 --\u003E\n    \u003Ctr\u003E\n      \u003Ctd style=\"padding-left: 10%;\"\u003E\u003Cstrong\u003Eatomic number\u003C\u002Fstrong\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_20\" value=\"0\" style = \"margin:0\" required\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_20\" value=\"1\" style = \"margin:0\"\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_20\" value=\"2\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_20\" value=\"3\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_20\" value=\"4\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_20\" value=\"5\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_20\" value=\"6\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n    \u003C\u002Ftr\u003E\n\n    \u003C!-- Question 6 --\u003E\n    \u003Ctr\u003E\n      \u003Ctd style=\"padding-left: 10%;\"\u003E\u003Cstrong\u003Ehydroponics\u003C\u002Fstrong\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_21\" value=\"0\" style = \"margin:0\" required\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_21\" value=\"1\" style = \"margin:0\"\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_21\" value=\"2\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_21\" value=\"3\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_21\" value=\"4\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_21\" value=\"5\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_21\" value=\"6\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n    \u003C\u002Ftr\u003E\n\n    \u003C!-- Question 7 --\u003E\n    \u003Ctr\u003E\n      \u003Ctd style=\"padding-left: 10%;\"\u003E\u003Cstrong\u003Ealloy\u003C\u002Fstrong\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_22\" value=\"0\" style = \"margin:0\" required\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_22\" value=\"1\" style = \"margin:0\"\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_22\" value=\"2\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_22\" value=\"3\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_22\" value=\"4\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_22\" value=\"5\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_22\" value=\"6\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n    \u003C\u002Ftr\u003E\n\n    \u003C!-- Question 8 --\u003E\n    \u003Ctr\u003E\n      \u003Ctd style=\"padding-left: 10%;\"\u003E\u003Cstrong\u003Eplate tectonics\u003C\u002Fstrong\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_23\" value=\"0\" style = \"margin:0\" required\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_23\" value=\"1\" style = \"margin:0\"\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_23\" value=\"2\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_23\" value=\"3\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_23\" value=\"4\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_23\" value=\"5\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_23\" value=\"6\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n    \u003C\u002Ftr\u003E\n\n    \u003C!-- Question 9 --\u003E\n    \u003Ctr\u003E\n      \u003Ctd style=\"padding-left: 10%;\"\u003E\u003Cstrong\u003Ephoton\u003C\u002Fstrong\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_24\" value=\"0\" style = \"margin:0\" required\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_24\" value=\"1\" style = \"margin:0\"\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_24\" value=\"2\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_24\" value=\"3\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_24\" value=\"4\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_24\" value=\"5\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_24\" value=\"6\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n    \u003C\u002Ftr\u003E\n\n    \u003C!-- Question 10 --\u003E\n    \u003Ctr\u003E\n      \u003Ctd style=\"padding-left: 10%;\"\u003E\u003Cstrong\u003Eultra-lipid\u003C\u002Fstrong\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_25\" value=\"0\" style = \"margin:0\" required\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_25\" value=\"1\" style = \"margin:0\"\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_25\" value=\"2\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_25\" value=\"3\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_25\" value=\"4\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_25\" value=\"5\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_25\" value=\"6\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n    \u003C\u002Ftr\u003E\n\n    \u003C!-- Question 11 --\u003E\n    \u003Ctr\u003E\n      \u003Ctd style=\"padding-left: 10%;\"\u003E\u003Cstrong\u003Ecentripetal force\u003C\u002Fstrong\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_26\" value=\"0\" style = \"margin:0\" required\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_26\" value=\"1\" style = \"margin:0\"\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_26\" value=\"2\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_26\" value=\"3\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_26\" value=\"4\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_26\" value=\"5\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_26\" value=\"6\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n    \u003C\u002Ftr\u003E\n\n    \u003C!-- Question 12 --\u003E\n    \u003Ctr\u003E\n      \u003Ctd style=\"padding-left: 10%;\"\u003E\u003Cstrong\u003Eplates of parallax\u003C\u002Fstrong\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_27\" value=\"0\" style = \"margin:0\" required\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_27\" value=\"1\" style = \"margin:0\"\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_27\" value=\"2\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_27\" value=\"3\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_27\" value=\"4\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_27\" value=\"5\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_27\" value=\"6\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n    \u003C\u002Ftr\u003E\n\n    \u003C!-- Question 13 --\u003E\n    \u003Ctr\u003E\n      \u003Ctd style=\"padding-left: 10%;\"\u003E\u003Cstrong\u003Enebula\u003C\u002Fstrong\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_28\" value=\"0\" style = \"margin:0\" required\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_28\" value=\"1\" style = \"margin:0\"\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_28\" value=\"2\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_28\" value=\"3\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_28\" value=\"4\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_28\" value=\"5\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_28\" value=\"6\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n    \u003C\u002Ftr\u003E\n\n    \u003C!-- Question 14 --\u003E\n    \u003Ctr\u003E\n      \u003Ctd style=\"padding-left: 10%;\"\u003E\u003Cstrong\u003Eparticle accelerator\u003C\u002Fstrong\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_29\" value=\"0\" style = \"margin:0\" required\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_29\" value=\"1\" style = \"margin:0\"\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_29\" value=\"2\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_29\" value=\"3\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_29\" value=\"4\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_29\" value=\"5\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_29\" value=\"6\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n    \u003C\u002Ftr\u003E\n\n    \u003C!-- Question 15 --\u003E\n    \u003Ctr\u003E\n      \u003Ctd style=\"padding-left: 10%;\"\u003E\u003Cstrong\u003Esatellite\u003C\u002Fstrong\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_30\" value=\"0\" style = \"margin:0\" required\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_30\" value=\"1\" style = \"margin:0\"\u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_30\" value=\"2\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_30\" value=\"3\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_30\" value=\"4\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_30\" value=\"5\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n      \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"OCQ_30\" value=\"6\" style = \"margin:0\" \u003E\u003C\u002Ftd\u003E\n    \u003C\u002Ftr\u003E\n\n\n\u003C\u002Ftbody\u003E\n\u003C\u002Ftable\u003E\n\u003C\u002Fdiv\u003E\n\n\u003C\u002Fform\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Press this \u003Cbutton type=\"submit\" form=\"OCQ_2\"\u003E button \u003C\u002Fbutton\u003E in order to continue.\n\u003C\u002Ffooter\u003E",
              "files": {},
              "parameters": {},
              "responses": {},
              "messageHandlers": {},
              "title": "Part 2 (Physical Sciences)"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "BCTI (Conspiratorial Thinking)",
          "content": [
            {
              "type": "lab.html.Form",
              "content": "\u003Cform id =\"BCTI_1\" required\u003E\n\n\u003Cdiv class=\"wrap\"\u003E\n  \n  \u003Ch2 class=\"likert-header\"\u003EThere has been much debate about various historical events, suggesting that the ‘official version’ of the truth of those events is something of a cover-up. Below is a list of events for which the official version has been disputed. For each event, we would like you to indicate to what extent you believe the cover-up version of events is true or false by circling the appropriate numerical value.\n  \u003C\u002Fh2\u003E\n\n  \u003Ch2 class=\"likert-header\"\u003E\n  \u003C\u002Fh2\u003E\n\n  \u003Cform action=\"\"\u003E\n\n\u003C!-- Question 1 --\u003E\n\n    \u003Clabel class=\"statement\"\u003E A powerful and secretive group, known as the New World Order, are planning to eventually rule the world through an autonomous world government, which would replace sovereign government.\u003C\u002Flabel\u003E\n   \n    \u003Cul class= \"likert\" required\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q1_BCTI\" value=\"1\" required\u003E\n        \u003Clabel\u003E1. Completely False\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\u003Cinput type=\"radio\" name=\"Q1_BCTI\" value=\"2\"\u003E\n        \u003Clabel\u003E2\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\u003Cinput type=\"radio\" name=\"Q1_BCTI\" value=\"3\"\u003E\n        \u003Clabel\u003E3\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\u003Cinput type=\"radio\" name=\"Q1_BCTI\" value=\"4\"\u003E\n        \u003Clabel\u003E4\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\u003Cinput type=\"radio\" name=\"Q1_BCTI\" value=\"5\"\u003E\n        \u003Clabel\u003E5\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\u003Cinput type=\"radio\" name=\"Q1_BCTI\" value=\"6\"\u003E\n        \u003Clabel\u003E6\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\u003Cinput type=\"radio\" name=\"Q1_BCTI\" value=\"7\"\u003E\n        \u003Clabel\u003E7\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\u003Cinput type=\"radio\" name=\"Q1_BCTI\" value=\"8\"\u003E\n        \u003Clabel\u003E8\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\u003Cinput type=\"radio\" name=\"Q1_BCTI\" value=\"9\"\u003E\n        \u003Clabel\u003E9. Completely True\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n    \u003C\u002Ful\u003E\n\n\n\n\u003C!-- Question 2 --\u003E\n\n    \u003Clabel class=\"statement\"\u003ESARS (Severe Acute Respiratory Syndrome) was produced under laboratory conditions as a biological weapon.\u003C\u002Flabel\u003E\n    \u003Cul class= \"likert\"\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q2_BCTI\" value=\"1\" required\u003E\n        \u003Clabel\u003E1. Completely False \u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q2_BCTI\" value=\"2\"\u003E\n        \u003Clabel\u003E2\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q2_BCTI\" value=\"3\"\u003E\n        \u003Clabel\u003E3\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q2_BCTI\" value=\"4\"\u003E\n        \u003Clabel\u003E4\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q2_BCTI\" value=\"5\"\u003E\n        \u003Clabel\u003E5\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q2_BCTI\" value=\"6\"\u003E\n        \u003Clabel\u003E6\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q2_BCTI\" value=\"7\"\u003E\n        \u003Clabel\u003E7\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q2_BCTI\" value=\"8\"\u003E\n        \u003Clabel\u003E8\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q2_BCTI\" value=\"9\"\u003E\n        \u003Clabel\u003E9. Completely True\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n    \u003C\u002Ful\u003E\n\n\n\n\u003C!-- Question 3 --\u003E\n    \u003Clabel class=\"statement\"\u003EThe US government had foreknowledge about the Japanese attack on Pearl Harbour, but allowed the attack to take place so as to be able to enter the Second World War.\u003C\u002Flabel\u003E\n   \u003Cul class= \"likert\"\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q3_BCTI\" value=\"1\" required\u003E\n        \u003Clabel\u003E1. Completely False \u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q3_BCTI\" value=\"2\"\u003E\n        \u003Clabel\u003E2\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q3_BCTI\" value=\"3\"\u003E\n        \u003Clabel\u003E3\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q3_BCTI\" value=\"4\"\u003E\n        \u003Clabel\u003E4\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q3_BCTI\" value=\"5\"\u003E\n        \u003Clabel\u003E5\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q3_BCTI\" value=\"6\"\u003E\n        \u003Clabel\u003E6\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q3_BCTI\" value=\"7\"\u003E\n        \u003Clabel\u003E7\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q3_BCTI\" value=\"8\"\u003E\n        \u003Clabel\u003E8\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q3_BCTI\" value=\"9\"\u003E\n        \u003Clabel\u003E9. Completely True\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n    \u003C\u002Ful\u003E\n\n\n   \u003C!-- Question 4 --\u003E\n    \u003Clabel class=\"statement\"\u003EUS agencies intentionally created the AIDS epidemic and administered it to Black and gay men in the 1970s.\u003C\u002Flabel\u003E\n   \u003Cul class= \"likert\"\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q4_BCTI\" value=\"1\" required\u003E\n        \u003Clabel\u003E1. Completely False \u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q4_BCTI\" value=\"2\"\u003E\n        \u003Clabel\u003E2\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q4_BCTI\" value=\"3\"\u003E\n        \u003Clabel\u003E3\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q4_BCTI\" value=\"4\"\u003E\n        \u003Clabel\u003E4\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q4_BCTI\" value=\"5\"\u003E\n        \u003Clabel\u003E5\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q4_BCTI\" value=\"6\"\u003E\n        \u003Clabel\u003E6\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q4_BCTI\" value=\"7\"\u003E\n        \u003Clabel\u003E7\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q4_BCTI\" value=\"8\"\u003E\n        \u003Clabel\u003E8\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q4_BCTI\" value=\"9\"\u003E\n        \u003Clabel\u003E9. Completely True\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n    \u003C\u002Ful\u003E\n\n\n    \u003C!-- Question 5 --\u003E\n    \u003Clabel class=\"statement\"\u003EThe assassination of Martin Luther King, Jr., was the result of an organised conspiracy by US government agencies such as the CIA and FBI.\u003C\u002Flabel\u003E\n   \u003Cul class= \"likert\"\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q5_BCTI\" value=\"1\" required\u003E\n        \u003Clabel\u003E1. Completely False \u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q5_BCTI\" value=\"2\"\u003E\n        \u003Clabel\u003E2\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q5_BCTI\" value=\"3\"\u003E\n        \u003Clabel\u003E3\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q5_BCTI\" value=\"4\"\u003E\n        \u003Clabel\u003E4\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q5_BCTI\" value=\"5\"\u003E\n        \u003Clabel\u003E5\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q5_BCTI\" value=\"6\"\u003E\n        \u003Clabel\u003E6\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q5_BCTI\" value=\"7\"\u003E\n        \u003Clabel\u003E7\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q5_BCTI\" value=\"8\"\u003E\n        \u003Clabel\u003E8\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q5_BCTI\" value=\"9\"\u003E\n        \u003Clabel\u003E9. Completely True\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n    \u003C\u002Ful\u003E\n\n\u003C\u002Fform\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Press this \u003Cbutton type=\"submit\" form=\"BCTI_1\"\u003E button \u003C\u002Fbutton\u003E in order to continue.\n\u003C\u002Ffooter\u003E",
              "files": {},
              "parameters": {},
              "responses": {},
              "messageHandlers": {},
              "title": "Part 1"
            },
            {
              "type": "lab.html.Form",
              "content": "\u003Cform id =\"BCTI_2\" required\u003E\n\n\u003Cdiv class=\"wrap\"\u003E\n  \n  \u003Ch2 class=\"likert-header\"\u003E\n  \u003C\u002Fh2\u003E\n\n  \u003Cform action=\"\"\u003E\n\n\u003C!-- Question 6 --\u003E\n\n    \u003Clabel class=\"statement\"\u003E The Apollo moon landings never happened and were staged in a Hollywood film studio.\u003C\u002Flabel\u003E\n   \n    \u003Cul class= \"likert\" required\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q6_BCTI\" value=\"1\" required\u003E\n        \u003Clabel\u003E1. Completely False\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\u003Cinput type=\"radio\" name=\"Q6_BCTI\" value=\"2\"\u003E\n        \u003Clabel\u003E2\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\u003Cinput type=\"radio\" name=\"Q6_BCTI\" value=\"3\"\u003E\n        \u003Clabel\u003E3\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\u003Cinput type=\"radio\" name=\"Q6_BCTI\" value=\"4\"\u003E\n        \u003Clabel\u003E4\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\u003Cinput type=\"radio\" name=\"Q6_BCTI\" value=\"5\"\u003E\n        \u003Clabel\u003E5\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\u003Cinput type=\"radio\" name=\"Q6_BCTI\" value=\"6\"\u003E\n        \u003Clabel\u003E6\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\u003Cinput type=\"radio\" name=\"Q6_BCTI\" value=\"7\"\u003E\n        \u003Clabel\u003E7\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\u003Cinput type=\"radio\" name=\"Q6_BCTI\" value=\"8\"\u003E\n        \u003Clabel\u003E8\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\u003Cinput type=\"radio\" name=\"Q6_BCTI\" value=\"9\"\u003E\n        \u003Clabel\u003E9. Completely True\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n    \u003C\u002Ful\u003E\n\n\n\n\u003C!-- Question 7 --\u003E\n\n    \u003Clabel class=\"statement\"\u003EArea 51 in Nevada, US, is a secretive military base that contains hidden alien spacecraft and\u002For alien bodies.\u003C\u002Flabel\u003E\n    \u003Cul class= \"likert\"\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q7_BCTI\" value=\"1\" required\u003E\n        \u003Clabel\u003E1. Completely False \u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q7_BCTI\" value=\"2\"\u003E\n        \u003Clabel\u003E2\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q7_BCTI\" value=\"3\"\u003E\n        \u003Clabel\u003E3\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q7_BCTI\" value=\"4\"\u003E\n        \u003Clabel\u003E4\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q7_BCTI\" value=\"5\"\u003E\n        \u003Clabel\u003E5\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q7_BCTI\" value=\"6\"\u003E\n        \u003Clabel\u003E6\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q7_BCTI\" value=\"7\"\u003E\n        \u003Clabel\u003E7\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q7_BCTI\" value=\"8\"\u003E\n        \u003Clabel\u003E8\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q7_BCTI\" value=\"9\"\u003E\n        \u003Clabel\u003E9. Completely True\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n    \u003C\u002Ful\u003E\n\n\n\n\u003C!-- Question 8 --\u003E\n    \u003Clabel class=\"statement\"\u003EThe US government allowed the 9\u002F11 attacks to take place so that it would have an excuse to achieve foreign (e.g., wars in Afghanistan and Iraq) and domestic (e.g., attacks on civil liberties) goals that had been determined prior to the attacks.\u003C\u002Flabel\u003E\n   \u003Cul class= \"likert\"\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q8_BCTI\" value=\"1\" required\u003E\n        \u003Clabel\u003E1. Completely False \u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q8_BCTI\" value=\"2\"\u003E\n        \u003Clabel\u003E2\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q8_BCTI\" value=\"3\"\u003E\n        \u003Clabel\u003E3\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q8_BCTI\" value=\"4\"\u003E\n        \u003Clabel\u003E4\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q8_BCTI\" value=\"5\"\u003E\n        \u003Clabel\u003E5\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q8_BCTI\" value=\"6\"\u003E\n        \u003Clabel\u003E6\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q8_BCTI\" value=\"7\"\u003E\n        \u003Clabel\u003E7\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q8_BCTI\" value=\"8\"\u003E\n        \u003Clabel\u003E8\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q8_BCTI\" value=\"9\"\u003E\n        \u003Clabel\u003E9. Completely True\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n    \u003C\u002Ful\u003E\n\n\n   \u003C!-- Question 9 --\u003E\n    \u003Clabel class=\"statement\"\u003EThe assassination of John F. Kennedy was not committed by the lone gunman, Lee Harvey Oswald, but was rather a detailed, organised conspiracy to kill the President.\u003C\u002Flabel\u003E\n   \u003Cul class= \"likert\"\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q9_BCTI\" value=\"1\" required\u003E\n        \u003Clabel\u003E1. Completely False \u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q9_BCTI\" value=\"2\"\u003E\n        \u003Clabel\u003E2\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q9_BCTI\" value=\"3\"\u003E\n        \u003Clabel\u003E3\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q9_BCTI\" value=\"4\"\u003E\n        \u003Clabel\u003E4\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q9_BCTI\" value=\"5\"\u003E\n        \u003Clabel\u003E5\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q9_BCTI\" value=\"6\"\u003E\n        \u003Clabel\u003E6\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q9_BCTI\" value=\"7\"\u003E\n        \u003Clabel\u003E7\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q9_BCTI\" value=\"8\"\u003E\n        \u003Clabel\u003E8\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q9_BCTI\" value=\"9\"\u003E\n        \u003Clabel\u003E9. Completely True\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n    \u003C\u002Ful\u003E\n\n\n    \u003C!-- Question 10 --\u003E\n    \u003Clabel class=\"statement\"\u003EIn July 1947, the US military recovered the wreckage of an alien craft from Roswell, New Mexico, and covered up the fact.\u003C\u002Flabel\u003E\n   \u003Cul class= \"likert\"\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q10_BCTI\" value=\"1\" required\u003E\n        \u003Clabel\u003E1. Completely False \u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q10_BCTI\" value=\"2\"\u003E\n        \u003Clabel\u003E2\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q10_BCTI\" value=\"3\"\u003E\n        \u003Clabel\u003E3\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q10_BCTI\" value=\"4\"\u003E\n        \u003Clabel\u003E4\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q10_BCTI\" value=\"5\"\u003E\n        \u003Clabel\u003E5\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q10_BCTI\" value=\"6\"\u003E\n        \u003Clabel\u003E6\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q10_BCTI\" value=\"7\"\u003E\n        \u003Clabel\u003E7\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q10_BCTI\" value=\"8\"\u003E\n        \u003Clabel\u003E8\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q10_BCTI\" value=\"9\"\u003E\n        \u003Clabel\u003E9. Completely True\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n    \u003C\u002Ful\u003E\n\n\u003C\u002Fform\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Press this \u003Cbutton type=\"submit\" form=\"BCTI_2\"\u003E button \u003C\u002Fbutton\u003E in order to continue.\n\u003C\u002Ffooter\u003E",
              "files": {},
              "parameters": {},
              "responses": {},
              "messageHandlers": {},
              "title": "Part 2"
            },
            {
              "type": "lab.html.Form",
              "content": "\u003Cform id =\"BCTI_3\" required\u003E\n\n\u003Cdiv class=\"wrap\"\u003E\n  \n  \u003Ch2 class=\"likert-header\"\u003E\n  \u003C\u002Fh2\u003E\n\n  \u003Cform action=\"\"\u003E\n\n\u003C!-- Question 11 --\u003E\n\n    \u003Clabel class=\"statement\"\u003E Princess Diana’s death was not an accident, but rather an organised assassination by members of the British royal family who disliked her.\u003C\u002Flabel\u003E\n   \n    \u003Cul class= \"likert\" required\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q11_BCTI\" value=\"1\" required\u003E\n        \u003Clabel\u003E1. Completely False\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\u003Cinput type=\"radio\" name=\"Q11_BCTI\" value=\"2\"\u003E\n        \u003Clabel\u003E2\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\u003Cinput type=\"radio\" name=\"Q11_BCTI\" value=\"3\"\u003E\n        \u003Clabel\u003E3\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\u003Cinput type=\"radio\" name=\"Q11_BCTI\" value=\"4\"\u003E\n        \u003Clabel\u003E4\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\u003Cinput type=\"radio\" name=\"Q11_BCTI\" value=\"5\"\u003E\n        \u003Clabel\u003E5\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\u003Cinput type=\"radio\" name=\"Q11_BCTI\" value=\"6\"\u003E\n        \u003Clabel\u003E6\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\u003Cinput type=\"radio\" name=\"Q11_BCTI\" value=\"7\"\u003E\n        \u003Clabel\u003E7\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\u003Cinput type=\"radio\" name=\"Q11_BCTI\" value=\"8\"\u003E\n        \u003Clabel\u003E8\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\u003Cinput type=\"radio\" name=\"Q11_BCTI\" value=\"9\"\u003E\n        \u003Clabel\u003E9. Completely True\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n    \u003C\u002Ful\u003E\n\n\n\n\u003C!-- Question 12 --\u003E\n\n    \u003Clabel class=\"statement\"\u003EThe Oklahoma City bombers, Timothy McVeigh and Terry Nichols, did not act alone, but rather received assistance from neo-Nazi groups.\u003C\u002Flabel\u003E\n    \u003Cul class= \"likert\"\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q12_BCTI\" value=\"1\" required\u003E\n        \u003Clabel\u003E1. Completely False \u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q12_BCTI\" value=\"2\"\u003E\n        \u003Clabel\u003E2\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q12_BCTI\" value=\"3\"\u003E\n        \u003Clabel\u003E3\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q12_BCTI\" value=\"4\"\u003E\n        \u003Clabel\u003E4\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q12_BCTI\" value=\"5\"\u003E\n        \u003Clabel\u003E5\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q12_BCTI\" value=\"6\"\u003E\n        \u003Clabel\u003E6\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q12_BCTI\" value=\"7\"\u003E\n        \u003Clabel\u003E7\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q12_BCTI\" value=\"8\"\u003E\n        \u003Clabel\u003E8\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q12_BCTI\" value=\"9\"\u003E\n        \u003Clabel\u003E9. Completely True\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n    \u003C\u002Ful\u003E\n\n\n\n\u003C!-- Question 13 --\u003E\n    \u003Clabel class=\"statement\"\u003EThe Coca Cola company intentionally changed to an inferior formula with the intent of driving up demand for their classic product, later reintroducing it for their financial gain.\u003C\u002Flabel\u003E\n   \u003Cul class= \"likert\"\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q13_BCTI\" value=\"1\" required\u003E\n        \u003Clabel\u003E1. Completely False \u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q13_BCTI\" value=\"2\"\u003E\n        \u003Clabel\u003E2\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q13_BCTI\" value=\"3\"\u003E\n        \u003Clabel\u003E3\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q13_BCTI\" value=\"4\"\u003E\n        \u003Clabel\u003E4\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q13_BCTI\" value=\"5\"\u003E\n        \u003Clabel\u003E5\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q13_BCTI\" value=\"6\"\u003E\n        \u003Clabel\u003E6\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q13_BCTI\" value=\"7\"\u003E\n        \u003Clabel\u003E7\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q13_BCTI\" value=\"8\"\u003E\n        \u003Clabel\u003E8\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q13_BCTI\" value=\"9\"\u003E\n        \u003Clabel\u003E9. Completely True\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n    \u003C\u002Ful\u003E\n\n\n   \u003C!-- Question 14 --\u003E\n    \u003Clabel class=\"statement\"\u003ESpecial interest groups are suppressing, or have suppressed in the past, technologies that could provide energy at reduced cost or reduced pollution output.\u003C\u002Flabel\u003E\n   \u003Cul class= \"likert\"\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q14_BCTI\" value=\"1\" required\u003E\n        \u003Clabel\u003E1. Completely False \u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q14_BCTI\" value=\"2\"\u003E\n        \u003Clabel\u003E2\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q14_BCTI\" value=\"3\"\u003E\n        \u003Clabel\u003E3\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q14_BCTI\" value=\"4\"\u003E\n        \u003Clabel\u003E4\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q14_BCTI\" value=\"5\"\u003E\n        \u003Clabel\u003E5\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q14_BCTI\" value=\"6\"\u003E\n        \u003Clabel\u003E6\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q14_BCTI\" value=\"7\"\u003E\n        \u003Clabel\u003E7\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q14_BCTI\" value=\"8\"\u003E\n        \u003Clabel\u003E8\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q14_BCTI\" value=\"9\"\u003E\n        \u003Clabel\u003E9. Completely True\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n    \u003C\u002Ful\u003E\n\n\n    \u003C!-- Question 15 --\u003E\n    \u003Clabel class=\"statement\"\u003EGovernment agencies in the UK are involved in the distribution of illegal drugs to ethnic minorities.\u003C\u002Flabel\u003E\n   \u003Cul class= \"likert\"\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q15_BCTI\" value=\"1\" required\u003E\n        \u003Clabel\u003E1. Completely False \u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q15_BCTI\" value=\"2\"\u003E\n        \u003Clabel\u003E2\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q15_BCTI\" value=\"3\"\u003E\n        \u003Clabel\u003E3\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q15_BCTI\" value=\"4\"\u003E\n        \u003Clabel\u003E4\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q15_BCTI\" value=\"5\"\u003E\n        \u003Clabel\u003E5\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q15_BCTI\" value=\"6\"\u003E\n        \u003Clabel\u003E6\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q15_BCTI\" value=\"7\"\u003E\n        \u003Clabel\u003E7\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q15_BCTI\" value=\"8\"\u003E\n        \u003Clabel\u003E8\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n      \u003Cli\u003E\n        \u003Cinput type=\"radio\" name=\"Q15_BCTI\" value=\"9\"\u003E\n        \u003Clabel\u003E9. Completely True\u003C\u002Flabel\u003E\n      \u003C\u002Fli\u003E\n    \u003C\u002Ful\u003E\n\n\u003C\u002Fform\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Press this \u003Cbutton type=\"submit\" form=\"BCTI_3\"\u003E button \u003C\u002Fbutton\u003E in order to continue.\n\u003C\u002Ffooter\u003E",
              "files": {},
              "parameters": {},
              "responses": {},
              "messageHandlers": {},
              "title": "Part 3"
            }
          ]
        },
        {
          "type": "lab.html.Form",
          "content": "  \u003Cheader\u003E\u003Ch2 style=\"color:blue\"\u003E In the following task you will be asked a series of short math problems. \u003C\u002Fh2\u003E\u003C\u002Fheader\u003E\n\n  \u003Cstyle\u003E \n    td:not(:first-child) {\n    padding-top:25pt;\n    padding-bottom:25pt;\n    }\n  \u003C\u002Fstyle\u003E \n\n \u003Cmain class=\"fullscreen\"\u003E\n   \u003C!-- ask 3 questions: age, gender, education --\u003E\n      \n    \u003Cform id =\"Cognitive_Reflection_Test\" required\u003E\n      \u003Ctable\u003E\n\n        \u003Ctr\u003E\n          \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;\"\u003E\n              \u003Clabel for=\"CRT_Q1\"\u003EQ1. The ages of Mark and Adam add up to 28 years total. Mark is 20 years older than Adam. How many years old is Adam?\u003C\u002Flabel\u003E\n          \u003C\u002Fth\u003E\n          \u003Ctd style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n            \u003Cinput name=\"CRT_Q1\" type=\"text\" id=\"CRT_Q1\" required\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n\n        \u003Ctr\u003E\n          \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;\"\u003E\n              \u003Clabel for=\"CRT_Q2\"\u003EQ2. If it takes 10 seconds for 10 printers to print out 10 pages of paper, how many seconds will it take 50 printers to print out 50 pages of paper?\u003C\u002Flabel\u003E\n          \u003C\u002Fth\u003E\n          \u003Ctd style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n            \u003Cinput name=\"CRT_Q2\" type=\"text\" id=\"CRT_Q2\" required\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n\n        \u003Ctr\u003E\n          \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;\"\u003E\n              \u003Clabel for=\"CRT_Q3\"\u003EQ3. On a loaf of bread, there is a patch of mold. Every day, the patch doubles in size. If it takes 40 days for the patch to cover the entire loaf of bread, how many days would it take for the patch to cover half of the loaf of bread?\u003C\u002Flabel\u003E\n          \u003C\u002Fth\u003E\n          \u003Ctd style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n            \u003Cinput name=\"CRT_Q3\" type=\"text\" id=\"CRT_Q3\" required\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n\n        \u003Ctr\u003E\n          \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;\"\u003E\n              \u003Clabel for=\"CRT_Q4\"\u003EQ4. If you’re running a race and you pass the person in second place, what place are you in? \u003C\u002Flabel\u003E\n          \u003C\u002Fth\u003E\n          \u003Ctd style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n            \u003Cinput name=\"CRT_Q4\" type=\"text\" id=\"CRT_Q4\" required\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n\n        \u003Ctr\u003E\n          \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;\"\u003E\n              \u003Clabel for=\"CRT_Q5\"\u003EQ5. A farmer had 15 sheep and all but 8 died. How many are left? \u003C\u002Flabel\u003E\n          \u003C\u002Fth\u003E\n          \u003Ctd style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n            \u003Cinput name=\"CRT_Q5\" type=\"text\" id=\"CRT_Q5\" required\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n\n        \u003Ctr\u003E\n          \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;\"\u003E\n              \u003Clabel for=\"CRT_Q6\"\u003EQ6. Emily’s father has three daughters. The first two are named April and May. What is the third daughter’s name? \u003C\u002Flabel\u003E\n          \u003C\u002Fth\u003E\n          \u003Ctd style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n            \u003Cinput name=\"CRT_Q6\" type=\"text\" id=\"CRT_Q6\" required\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n\n        \u003Ctr\u003E\n          \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;\"\u003E\n              \u003Clabel for=\"CRT_Q7\"\u003EQ7. How many cubic feet of dirt are there in a hole that is 3’ deep x 3’ wide x 3’ long? \u003C\u002Flabel\u003E\n          \u003C\u002Fth\u003E\n          \u003Ctd style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n            \u003Cinput name=\"CRT_Q7\" type=\"text\" id=\"CRT_Q7\" required\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n\n        \u003Ctr\u003E\n          \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;\"\u003E\n             \u003Clabel for=\"CRT_Q8\"\u003E Have you encountered or completed any of these questions before? \u003C\u002Flabel\u003E\n          \u003C\u002Fth\u003E\n          \u003Ctd style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%; padding-bottom: 5pt\"\u003E\n              \u003Cselect name=\"CRT_Q8\" id=\"CRT_Q8\" required\u003E\n                \u003Coption value=\"\"\u003E ----- \u003C\u002Foption\u003E\n                \u003Coption value=\"yes\"\u003E Yes \u003C\u002Foption\u003E\n                \u003Coption value=\"no\"\u003E No \u003C\u002Foption\u003E\n                \u003Coption value= \"maybe\"\u003E Maybe \u003C\u002Foption\u003E\n                \u003C\u002Fselect\u003E \n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n        \n        \u003Ctr\u003E\n          \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;\"\u003E\n              \u003Clabel for=\"CRT_Q9\"\u003E If so, how many items have you encountered? \u003C\u002Flabel\u003E\n          \u003C\u002Fth\u003E\n          \u003Ctd style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n            \u003Cinput name=\"CRT_Q9\" type=\"number\" id=\"CRT_Q9\" min=\"0\" max = \"7\"\u003E\n          \u003C\u002Ftd\u003E\n    \n        \u003C\u002Ftr\u003E\n        \u003Ctr\u003E\n\n        \u003C\u002Ftable\u003E\n      \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Press this \u003Cbutton type=\"submit\" form=\"Cognitive_Reflection_Test\"\u003E button \u003C\u002Fbutton\u003E in order to continue.\n\u003C\u002Ffooter\u003E",
          "scrollTop": true,
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "CRT (Cognitive Ability)"
        }
      ]
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cheader\u003E\n    \u003Ch1\u003EThis is the final question of the experiment\u003C\u002Fh1\u003E\n\u003C\u002Fheader\u003E\n\n\u003Cmain style=\"text-align:left; font-family:Helvetica; font-size: 18pt; margin:1%\"\u003E\n\n\u003Cform id =\"Deepfake_Check\"\u003E\n    \u003Cdiv style=\" text-align:left color:rgb(20,20,100); font-size:19pt\"\u003E\n     \u003Cp\u003E The video recording that you watched in this experiment was NOT taken from a YouTube channel. Instead it was 'deepfaked' (i.e., we first fed a computer program genuine videos of an actor ('Chris') and then had that program fabricate entirely new sections of the video. Simply put, Chris never said many of the things you heard in the video. Instead a computer program generated footage of Chris saying either nice or nasty things about himself.\n       \n       \u003Cp\u003E \u003C\u002Fp\u003E\n       \n       It is very important that you answer the following question honestly: \u003Cstrong\u003E ***When you were watching the video *** \u003C\u002Fstrong\u003E did you realise that it had been deepfaked? \u003C\u002Fp\u003E \n       \u003Cbr\u003E\n      \n        \u003Clabel for=\"Deepfake_Video_Check\"\u003E Please indicate your answer using the textbox below.\u003Cbr\u003E\u003Cbr\u003E\u003C\u002Flabel\u003E\n         \n     \u003Cp\u003E\n\u003Ctextarea name = \"Deepfake_Video_Check\" id=\"Deepfake_Video_Check\" size = \"35\" style = \"width: 1000px; height: 250px;\" autocomplete = \"off\" required\u003E\u003C\u002Ftextarea\u003E\n\u003C\u002Fp\u003E\n    \n        \u003Clabel for=\"Deepfake_Concept_Check\"\u003E \u003Cstrong\u003E Before taking part in this study \u003C\u002Fstrong\u003E, did you know that videos could be 'deepfaked'? Please indicate your answer using the textbox below. \u003Cbr\u003E\u003Cbr\u003E\u003C\u002Flabel\u003E\n         \n     \u003Cp\u003E\n\u003Ctextarea name = \"Deepfake_Concept_Check\" id=\"Deepfake_Concept_Check\" size = \"35\" style = \"width: 1000px; height: 250px;\" autocomplete = \"off\" required\u003E\u003C\u002Ftextarea\u003E\n\u003C\u002Fp\u003E\n\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:18pt;text-align:center;\"\u003E\n    Please click this \u003Cbutton type=\"submit\" form=\"Deepfake_Check\"\u003E Button \u003C\u002Fbutton\u003E in order to continue.\n\u003C\u002Ffooter\u003E",
      "scrollTop": true,
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "Deepfake_Check_Genuine_Video"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cheader\u003E\n    \u003Ch1\u003EThe study is now over. Did you encounter any issues when doing it?\u003C\u002Fh1\u003E\n\u003C\u002Fheader\u003E\n\n\u003Cmain style=\"text-align:left; font-family:Helvetica; font-size: 18pt; margin:1%\"\u003E\n\n\u003Cform id =\"Issues_with_Study\"\u003E\n    \u003Cdiv style=\" text-align:left color:rgb(20,20,100); font-size:19pt\"\u003E\n     \u003Cp\u003EDid you encounter any problems during this study? For instance, could you see everything OK and did all the response options work for you? \u003C\u002Fp\u003E \n       \n       \u003Cp\u003E If you encountered ANY issues please describe them here. You made it to the end of the experiment, so you will get paid for your time. Telling us about any problems here will not affect your payment at all. But it will help us make the experiment better in the future\u003C\u002Fp\u003E\u003Cbr\u003E\n      \n        \u003Clabel for=\"Issues_with_Study\"\u003EAre there any issues you would like to report (please write 'no issues' if you encountered no problems)?\u003Cbr\u003E\u003Cbr\u003E\u003C\u002Flabel\u003E\n         \n     \u003Cp\u003E\n\u003Ctextarea name = \"Issues_with_Study\" id=\"Issues_with_Study\" size = \"35\" style = \"width: 1000px; height: 250px;\" autocomplete = \"off\" required\u003E\u003C\u002Ftextarea\u003E\n\u003C\u002Fp\u003E\n\n\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:18pt;text-align:center;\"\u003E\n    Please click this \u003Cbutton type=\"submit\" form=\"Issues_with_Study\"\u003E Button \u003C\u002Fbutton\u003E in order to continue.\n\u003C\u002Ffooter\u003E",
      "files": {},
      "parameters": {},
      "responses": {},
      "messageHandlers": {},
      "title": "Issues"
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {
        "keypress(Space)": "continue"
      },
      "messageHandlers": {},
      "title": "Debriefing ",
      "content": "\u003Cheader\u003E\r\n\u003Ch1\u003E The study is now complete!\u003C\u002Fh1\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain\u003E \r\n    \u003Ch2\u003E Below you will find an overview of what we were trying to investigate in this study. If you are not interested in this, you can immediately press the \u003Ckbd\u003E spacebar \u003C\u002Fkbd\u003E to exit the study.\u003C\u002Fh2\u003E \r\n  \u003Cbr\u003E \r\n  \u003Cbr\u003E \r\n  \u003Cp style=\" text-align:left font-size:19pt\"\u003E So what was this study actually about? In this study we were interested in a topic called impression formation (i.e., how we come to like or dislike people that we meet for the first time). During the study you encountered a video recording of a person (Chris) that was supposedly taken from YouTube. We actually created this video ourselves \u003C\u002Fp\u003E \r\n\r\n\u003Cp style=\" text-align:left font-size:19pt\"\u003E Half of the participants in the study encountered a video recording where Chris said three positive things and two neutral things about himself. The other half of participants encountered a video recording where Chris said three negative things and two neutral things about himself. Certain participants encountered genuine videos of Chris saying these things whereas others encountered deepfaked videos of Chris saying these things. \u003C\u002Fp\u003E \r\n\r\n\u003Cp style=\" text-align:left font-size:19pt\"\u003E We then examined if what Chris said was enough to change people's first impressions of him. Specifically, would people in the first group like Chris while people in the second group dislike him? We tested this using self-report measures and a reaction time task. The former was designed to capture people's self-reported thoughts and feelings whereas the latter was designed to capture their more spontaneous or automatic reactions.\u003C\u002Fp\u003E\r\n\r\n\u003Cp style=\" text-align:left font-size:19pt\"\u003E Afterwards we asked you to reflect on the experiment and tell us about your experiences with the task. \u003C\u002Fp\u003E  \r\n\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Ch4\u003E\u003Cb\u003E So that is it. We genuinely appreciate the time and effort you put into this experiment. Press the \u003Ckbd\u003E spacebar \u003C\u002Fkbd\u003E to complete the study.\u003C\u002Fb\u003E\u003C\u002Fh4\u003E \r\n\u003C\u002Ffooter\u003E"
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {},
      "messageHandlers": {},
      "title": "Thanks",
      "content": "\u003C!-- end instruction--\u003E\r\n\u003Cmain class = \"fullscreen\"\u003E\r\n  \u003Cp style=\"color:rgb(20,100,20);font-size:22px;text-align:center\"\u003E \r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbold id=\"fb\"\u003E Thank you!\u003C\u002Fbold\u003E\u003Cbr\u003E\r\n  \u003C\u002Fp\u003E\r\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:18px;text-align:center;padding-left:15vw;padding-right:15vw\"\u003E\r\n    \u003Cp\u003E\r\n     Please click \u003Ca href=\"https:\u002F\u002Fapp.prolific.co\u002Fsubmissions\u002Fcomplete?cc=36EBFA0F\"\u003Ehere\u003C\u002Fa\u003E to indicate that you finished the study.  \r\n    \u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E",
      "timeout": "200"
    }
  ]
})

// Let's go!
study.run()