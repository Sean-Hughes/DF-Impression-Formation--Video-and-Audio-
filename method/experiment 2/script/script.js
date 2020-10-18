// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata"
    },
    {
      "type": "lab.plugins.Transmit",
      "url": "backend.php"
    }
  ],
  "metadata": {
    "title": "S2_DF_Baseline_Videos_v2",
    "description": "Study 2 examines if new genuine videos are valenced, believable, and diagnostic of the actor's true nature.",
    "repository": "",
    "contributors": "Sean Hughes (sean.hughes@ugent.be)"
  },
  "files": {},
  "responses": {},
  "content": [
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
      "content": "  \u003Cheader\u003E\u003Ch2 style=\"color:blue\"\u003E Demographic information \u003C\u002Fh2\u003E\u003C\u002Fheader\u003E\n\n   \u003Cmain class=\"fullscreen\" style=\"padding-bottom:2pt\"\u003E\n  \u003C!-- ask 3 questions: age, gender, ID --\u003E\n      \n      \u003Cform id =\"Demographics\" required\u003E\n        \u003Ctable\u003E\n          \u003Ctr\u003E\n            \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;\"\u003E\n              \u003Clabel for=\"age\"\u003E1. What is your age?\u003C\u002Flabel\u003E\n            \u003C\u002Fth\u003E\n            \u003Ctd style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Cinput name=\"age\" type=\"number\" id=\"age\" required min=\"18\"\u003E\n            \u003C\u002Ftd\u003E\n          \u003C\u002Ftr\u003E\n          \u003Ctr\u003E\n            \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;\"\u003E\n              \u003Clabel for=\"gender\"\u003E 2. What is your gender? \u003C\u002Flabel\u003E\n            \u003C\u002Fth\u003E\n            \u003Ctd style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Cselect name=\"gender\" id=\"gender\" required\u003E\n                \u003Coption value=\"\"\u003E ----- \u003C\u002Foption\u003E\n                \u003Coption value=\"male\"\u003E Male \u003C\u002Foption\u003E\n                \u003Coption value=\"female\"\u003E Female \u003C\u002Foption\u003E\n                \u003Coption value=\"other\"\u003E Other \u003C\u002Foption\u003E\n                \u003C\u002Fselect\u003E \n            \u003C\u002Ftd\u003E\n          \u003C\u002Ftr\u003E\n           \u003Ctr\u003E\n            \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Clabel for=\"prolific ID\"\u003E 3. Please enter your Prolific ID number below. If you do not have it please retrieve it now. Otherwise you cannot be paid. \u003C\u002Flabel\u003E\n                \u003Cinput name=\"prolific ID\" id=\"prolific ID\" required type=\"text\" cols=\"10\" style=\"width:500pt; height:50pt;\"\u003E\n          \u003C\u002Fth\u003E\n           \u003C\u002Ftr\u003E\n        \u003C\u002Ftable\u003E\n      \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Press this \u003Cbutton type=\"submit\" form=\"Demographics\"\u003E button \u003C\u002Fbutton\u003E in order to continue.\n\u003C\u002Ffooter\u003E",
      "files": {},
      "parameters": {},
      "responses": {},
      "messageHandlers": {},
      "title": "Demographics"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cheader\u003E\n    \u003Ch1\u003EInformed Consent\u003C\u002Fh1\u003E\n\u003C\u002Fheader\u003E\n\n\u003Cmain style=\"text-align:left; font-family:Helvetica; font-size: 18pt; margin:1%\"\u003E\n\n\u003Cform id =\"InformedConsent\"\u003E\n        \u003Cp style=\"font-size: 18pt\"\u003E\u003Cb\u003E\u003Cbr\u003E Project Title: YOUTUBE VIDEO STUDY \u003C\u002Fb\u003E\u003C\u002Fp\u003E\n\n    \u003Cp style=\"font-size: 16pt\"\u003E\u003Cb\u003EOverview and Procedures:\u003C\u002Fb\u003E\n        The purpose of this study is to examine how people remember and react to what they see online. During the study you will watch a video taken from a YouTube channel. You will be asked to watch this video and remember what the person said. Afterwards you will be asked to answer some questions and take part in a reaction time task. \u003C\u002Fp\u003E\n        \n    \u003Cp style=\"font-size: 16pt\"\u003E\u003Cb\u003ERisk and Benefits.\u003C\u002Fb\u003E\n\t\tThis study involves no more risk to your physical or psychological health beyond those encountered in the normal course of everyday life.\n\t\tYou may benefit by gaining a better understanding of psychological research. No other risks or benefits are anticipated.\u003C\u002Fp\u003E\n\n    \u003Cp style=\"font-size: 16pt\"\u003E\u003Cb\u003EConfidentiality.\u003C\u002Fb\u003E\n\t\tAny information obtained in this study will be kept strictly confidential and used solely for research purposes. We do not ask any identifying information and responses will be kept completely anonymous. Your anonymised data may be posted to a public repository for other researchers to make use of.\u003C\u002Fp\u003E\n\n    \u003Cp style=\"font-size: 16pt\"\u003E\u003Cb\u003ECompensation.\u003C\u002Fb\u003E\n        You will receive a sum of money for participating.\u003C\u002Fp\u003E\n\n\t\u003Cp style=\"font-size: 16pt\"\u003E\u003Cb\u003EYour Rights.\u003C\u002Fb\u003E\n        Your decision to participate in this research is voluntary. You can withdraw from the study at any time without penalty.\n\t\tYou do not have to answer any questions you do not want to.\u003C\u002Fp\u003E\n\n\t\u003Cp style=\"font-size: 16pt\"\u003E\u003Cb\u003EContact Information. \u003C\u002Fb\u003E\n        If you have any questions or issues with this study please contact the principle investigator (Sean Hughes) at sean.hughes@ugent.be who can review the matter and provide further information.\n\n\t\u003Cp style=\"font-size: 16pt\"\u003EYou must be 18 years of age or older to participate in this research study.\u003C\u002Fp\u003E\n\t\n\t\u003Cp\u003EPlease let the experimenter know if you would like a copy of this form for your records.\u003C\u002Fp\u003E\n\u003C\u002Fmain\u003E\n\u003C\u002Fform\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:18pt;text-align:center;\"\u003E\n    Please click this \u003Cbutton type=\"submit\" form=\"InformedConsent\"\u003E Button \u003C\u002Fbutton\u003E in order to continue.\n\u003C\u002Ffooter\u003E",
      "files": {},
      "parameters": {},
      "responses": {},
      "messageHandlers": {},
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
this.state.condition = this.random.choice(['C1. Positive_Video_IAT_First (Con B First)', 'C2. Positive_Video_SR_First (Con B First)','C7. Negative_Video_IAT_First (Con B First)', 'C8. Negative_Video_SR_First (Con B First)'])

}
      },
      "title": "Counterbalancing",
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
              "title": "Video_Positive_Baseline",
              "content": "\u003Cheader\u003E\r\n  \u003Ch3\u003E\u003Cp\u003E Please watch the video from start to finish and pay attention to what Chris says.\u003C\u002Fp\u003E \u003Cp\u003EMake sure your volume is turned up and the subtitles are switched on. \u003C\u002Fp\u003E \u003C\u002Fh3\u003E \u003C\u002Fheader\u003E\r\n\r\n\u003Cmain style=\"margin:0%; content-horizontal-center content-vertical-center\"\u003E\r\n\r\n\u003Ciframe width=\"1000pt\" height=\"700pt\"\r\nsrc=\"https:\u002F\u002Fwww.youtube-nocookie.com\u002Fembed\u002FI9g97biJ7bo?cc_load_policy=1&autoplay=0\" allow=\"autoplay\"\u003E\r\n\u003C\u002Fiframe\u003E\r\n\r\n\u003C\u002Fmain\u003E​\r\n\r\n\u003Cfooter style=\"padding:5pt; font-size:18pt;text-align:center;\"\u003E\r\n    Please only press the \u003Ckbd\u003E Enter key \u003C\u002Fkbd\u003E once you have watched the entire video from start to finish. \r\n    \u003C\u002Ffooter\u003E\r\n    \r\n"
            },
            {
              "type": "lab.html.Form",
              "content": "\u003Chead\u003E\n\u003Cstyle\u003E\ntable, td, th {border: 0pt solid black;}\n\ntable {border-collapse: collapse;width: 90%;}\n\nth {height: 90%;}\n\u003C\u002Fstyle\u003E\n\u003C\u002Fhead\u003E\n\n\u003Cheader\u003E\u003Ch3 style=\"color:green; font-size:22pt\"\u003E Final Questions (Part 1)\u003C\u002Fh3\u003E \n\u003C!-- instructions --\u003E\n\n\u003Cmain\u003E\n  \u003C!-- ask 4 questions:  --\u003E\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:16pt;\"\u003E\n    \u003Cform id =\"Memory_And_Diagnosticity_Questions\" required\u003E\n      \u003Ctable id=\"Memory_of_Video_Content\"\u003E\n                 \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Clabel for=\"Memory_of_Video_Content\"\u003E  \u003Cp\u003E 1. You just watched a Youtube video from a person called Chris. What were the main things that Chris said in his video? Please try to remember as much from the video as possible. \u003C\u002Fp\u003E \u003C\u002Flabel\u003E\n  \n  \u003Cinput type=\"text\" name=\"Memory_of_Video_Content\"id=\"Memory_of_Video_Content\" required style=\"text-align:left; width:500pt; height:150pt\"\u003E \u003C\u002Finput\u003E\n              \u003C\u002Fth\u003E\n            \n      \u003Ctable id=\"Diagnosticity_Question\"\u003E\n                 \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Clabel for=\"Diagnosticity_Question\"\u003E  2. During the video Chris provided information about himself. Do you think that this information revealed something about the type of person Chris really is (i.e., his true character)? \u003C\u002Flabel\u003E\n            \u003C\u002Fth\u003E\n               \u003Ctr\u003E\n            \u003Ctd style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Cselect name=\"Diagnosticity_Question\" id=\"Diagnosticity_Question\" required\u003E\n                \u003Coption value=\"\"\u003E ----- \u003C\u002Foption\u003E\n                \u003Coption value=\"Strongly_Diagnostic\"\u003E The info completely revealed Chris' true character \u003C\u002Foption\u003E\n                \u003Coption value=\"Moderately_Diagnostic\"\u003E The info was moderately revealing of Chris' true character   \u003C\u002Foption\u003E\n                \u003Coption value=\"Slightly_Diagnostic\"\u003E The info only slightly revealed Chris' true character \u003C\u002Foption\u003E\n                \u003Coption value=\"Not_Diagnostic\"\u003E The info revealed nothing about Chris' true character \u003C\u002Foption\u003E\n                \u003C\u002Fselect\u003E \n            \u003C\u002Ftd\u003E\n          \u003C\u002Ftr\u003E\n      \u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Please click on this \u003Cbutton type=\"submit\" form=\"Memory_And_Diagnosticity_Questions\"\u003E Submit \u003C\u002Fbutton\u003E button to continue.\n\u003C\u002Ffooter\u003E",
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
                  "tardy": false,
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
                  "content": "\u003Chead\u003E\n  \u003Cstyle type=\"text\u002Fcss\"\u003E\n    #likert { text-align:center; }\n    #likert td { width: 13%; }\n   \u003C\u002Fstyle\u003E\n\u003C\u002Fhead\u003E\n \n\u003C!-- Say thank you --\u003E\n\u003Cheader style = \"top:110pt;left:110pt\"\u003E\n\u003Cimg src=\"static\u002FChris.jpg\" width=\"280pt\"\u003E\n  \u003C\u002Fheader \u003E\n\n\u003Cmain\u003E\n  \u003C!-- ask 3 questions:  --\u003E\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:20pt;\"\u003E\n    \u003Cstrong style=\"font-size:20pt;\"\u003EPlease indicate how you feel about Chris\u003C\u002Fstrong\u003E\n    \u003Cform id =\"Ratings_Negative_Positive\" required\u003E\n      \u003Ctable border-collapse: collapse; id=\"likert\"\u003E\n        \u003Ctr\u003E\n          \u003Cth colspan=\"7;\"\u003E\u003C\u002Fth\u003E\u003C\u002Ftr\u003E\n        \u003Ctr\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"-3\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"-2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"-1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"0\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"3\" required\u003E\u003C\u002Ftd\u003E\n         \u003C\u002Ftr\u003E\n         \u003Ctr\u003E\n         \u003Ctd\u003E-3 = Negative\u003C\u002Ftd\u003E\n         \u003Ctd\u003E-2\u003C\u002Ftd\u003E\n         \u003Ctd\u003E-1\u003C\u002Ftd\u003E\n         \u003Ctd\u003E0 = Neutral\u003C\u002Ftd\u003E\n         \u003Ctd\u003E1\u003C\u002Ftd\u003E\n         \u003Ctd\u003E2\u003C\u002Ftd\u003E\n         \u003Ctd\u003E3 = Positive\u003C\u002Ftd\u003E\n         \u003C\u002Ftr\u003E    \n      \u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Please click on this \u003Cbutton type=\"submit\" form=\"Ratings_Negative_Positive\"\u003E Submit \u003C\u002Fbutton\u003E button to continue.\n\u003C\u002Ffooter\u003E",
                  "files": {},
                  "parameters": {},
                  "responses": {},
                  "messageHandlers": {},
                  "title": "Ratings_Negative_Positive"
                },
                {
                  "type": "lab.html.Form",
                  "content": "\u003Chead\u003E\n  \u003Cstyle type=\"text\u002Fcss\"\u003E\n    #likert { text-align:center; }\n    #likert td { width: 13%; }\n   \u003C\u002Fstyle\u003E\n\u003C\u002Fhead\u003E\n \n\u003C!-- Say thank you --\u003E\n\u003Cheader style = \"top:110pt;left:110pt\"\u003E\n\u003Cimg src=\"static\u002FChris.jpg\" width=\"280pt\"\u003E\n  \u003C\u002Fheader \u003E\n\n\u003Cmain\u003E\n  \u003C!-- ask 4 questions:  --\u003E\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:20pt;\"\u003E\n    \u003Cstrong style=\"font-size:20pt;\"\u003EPlease indicate how you feel about Chris\u003C\u002Fstrong\u003E\n    \u003Cform id =\"Ratings_Good_Bad\" required\u003E\n      \u003Ctable border-collapse: collapse; id=\"likert\"\u003E\n        \u003Ctr\u003E\n          \u003Cth colspan=\"7;\"\u003E\u003C\u002Fth\u003E\u003C\u002Ftr\u003E\n        \u003Ctr\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"-3\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"-2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"-1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"0\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"3\" required\u003E\u003C\u002Ftd\u003E\n         \u003C\u002Ftr\u003E\n         \u003Ctr\u003E\n         \u003Ctd\u003E-3 = Bad\u003C\u002Ftd\u003E\n         \u003Ctd\u003E-2\u003C\u002Ftd\u003E\n         \u003Ctd\u003E-1\u003C\u002Ftd\u003E\n         \u003Ctd\u003E0 = Neutral\u003C\u002Ftd\u003E\n         \u003Ctd\u003E1\u003C\u002Ftd\u003E\n         \u003Ctd\u003E2\u003C\u002Ftd\u003E\n         \u003Ctd\u003E3 = Good\u003C\u002Ftd\u003E\n         \u003C\u002Ftr\u003E\n        \u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Please click on this \u003Cbutton type=\"submit\" form=\"Ratings_Good_Bad\"\u003E Submit \u003C\u002Fbutton\u003E button to continue.\n\u003C\u002Ffooter\u003E",
                  "files": {},
                  "parameters": {},
                  "responses": {},
                  "messageHandlers": {},
                  "title": "Ratings_Good_Bad"
                },
                {
                  "type": "lab.html.Form",
                  "content": "\u003Chead\u003E\n  \u003Cstyle type=\"text\u002Fcss\"\u003E\n    #likert { text-align:center; }\n    #likert td { width: 13%; }\n   \u003C\u002Fstyle\u003E\n\u003C\u002Fhead\u003E\n \n\u003C!-- Say thank you --\u003E\n\u003Cheader style = \"top:110pt;left:110pt\"\u003E\n\u003Cimg src=\"static\u002FChris.jpg\" width=\"280pt\"\u003E\n  \u003C\u002Fheader \u003E\n\n\u003Cmain\u003E\n  \u003C!-- ask 4 questions:  --\u003E\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:20pt;\"\u003E\n    \u003Cstrong style=\"font-size:20pt;\"\u003EPlease indicate how you feel about Chris\u003C\u002Fstrong\u003E\n    \u003Cform id =\"Ratings_Like_Dislike\" required\u003E\n      \u003Ctable border-collapse: collapse; id=\"likert\"\u003E\n        \u003Ctr\u003E\n          \u003Cth colspan=\"7;\"\u003E\u003C\u002Fth\u003E\u003C\u002Ftr\u003E\n        \u003Ctr\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"-3\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"-2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"-1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"0\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"3\" required\u003E\u003C\u002Ftd\u003E\n         \u003C\u002Ftr\u003E\n         \u003Ctr\u003E\n         \u003Ctd\u003E-3 = I dislike him\u003C\u002Ftd\u003E\n         \u003Ctd\u003E-2\u003C\u002Ftd\u003E\n         \u003Ctd\u003E-1\u003C\u002Ftd\u003E\n         \u003Ctd\u003E0 = Neutral\u003C\u002Ftd\u003E\n         \u003Ctd\u003E1\u003C\u002Ftd\u003E\n         \u003Ctd\u003E2\u003C\u002Ftd\u003E\n         \u003Ctd\u003E3 = I like him\u003C\u002Ftd\u003E\n         \u003C\u002Ftr\u003E\n      \u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Please click on this \u003Cbutton type=\"submit\" form=\"Ratings_Like_Dislike\"\u003E Submit \u003C\u002Fbutton\u003E button to continue.\n\u003C\u002Ffooter\u003E",
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
              "title": "Video_Positive_Baseline",
              "content": "\u003Cheader\u003E\r\n  \u003Ch3\u003E\u003Cp\u003E Please watch the video from start to finish and pay attention to what Chris says.\u003C\u002Fp\u003E \u003Cp\u003EMake sure your volume is turned up and the subtitles are switched on. \u003C\u002Fp\u003E \u003C\u002Fh3\u003E \u003C\u002Fheader\u003E\r\n\r\n\u003Cmain style=\"margin:0%; content-horizontal-center content-vertical-center\"\u003E\r\n\r\n\u003Ciframe width=\"1000pt\" height=\"700pt\"\r\nsrc=\"https:\u002F\u002Fwww.youtube-nocookie.com\u002Fembed\u002FI9g97biJ7bo?cc_load_policy=1&autoplay=0\" allow=\"autoplay\"\u003E\r\n\u003C\u002Fiframe\u003E\r\n\r\n\u003C\u002Fmain\u003E​\r\n\r\n\u003Cfooter style=\"padding:5pt; font-size:18pt;text-align:center;\"\u003E\r\n    Please only press the \u003Ckbd\u003E Enter key \u003C\u002Fkbd\u003E once you have watched the entire video from start to finish. \r\n    \u003C\u002Ffooter\u003E\r\n    \r\n"
            },
            {
              "type": "lab.html.Form",
              "content": "\u003Chead\u003E\n\u003Cstyle\u003E\ntable, td, th {border: 0pt solid black;}\n\ntable {border-collapse: collapse;width: 90%;}\n\nth {height: 90%;}\n\u003C\u002Fstyle\u003E\n\u003C\u002Fhead\u003E\n\n\u003Cheader\u003E\u003Ch3 style=\"color:green; font-size:22pt\"\u003E Final Questions (Part 1)\u003C\u002Fh3\u003E \n\u003C!-- instructions --\u003E\n\n\u003Cmain\u003E\n  \u003C!-- ask 4 questions:  --\u003E\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:16pt;\"\u003E\n    \u003Cform id =\"Memory_And_Diagnosticity_Questions\" required\u003E\n      \u003Ctable id=\"Memory_of_Video_Content\"\u003E\n                 \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Clabel for=\"Memory_of_Video_Content\"\u003E  \u003Cp\u003E 1. You just watched a Youtube video from a person called Chris. What were the main things that Chris said in his video? Please try to remember as much from the video as possible. \u003C\u002Fp\u003E \u003C\u002Flabel\u003E\n  \n  \u003Cinput type=\"text\" name=\"Memory_of_Video_Content\"id=\"Memory_of_Video_Content\" required style=\"text-align:left; width:500pt; height:150pt\"\u003E \u003C\u002Finput\u003E\n              \u003C\u002Fth\u003E\n            \n      \u003Ctable id=\"Diagnosticity_Question\"\u003E\n                 \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Clabel for=\"Diagnosticity_Question\"\u003E  2. During the video Chris provided information about himself. Do you think that this information revealed something about the type of person Chris really is (i.e., his true character)? \u003C\u002Flabel\u003E\n            \u003C\u002Fth\u003E\n               \u003Ctr\u003E\n            \u003Ctd style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Cselect name=\"Diagnosticity_Question\" id=\"Diagnosticity_Question\" required\u003E\n                \u003Coption value=\"\"\u003E ----- \u003C\u002Foption\u003E\n                \u003Coption value=\"Strongly_Diagnostic\"\u003E The info completely revealed Chris' true character \u003C\u002Foption\u003E\n                \u003Coption value=\"Moderately_Diagnostic\"\u003E The info was moderately revealing of Chris' true character   \u003C\u002Foption\u003E\n                \u003Coption value=\"Slightly_Diagnostic\"\u003E The info only slightly revealed Chris' true character \u003C\u002Foption\u003E\n                \u003Coption value=\"Not_Diagnostic\"\u003E The info revealed nothing about Chris' true character \u003C\u002Foption\u003E\n                \u003C\u002Fselect\u003E \n            \u003C\u002Ftd\u003E\n          \u003C\u002Ftr\u003E\n      \u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Please click on this \u003Cbutton type=\"submit\" form=\"Memory_And_Diagnosticity_Questions\"\u003E Submit \u003C\u002Fbutton\u003E button to continue.\n\u003C\u002Ffooter\u003E",
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
                  "content": "\u003Chead\u003E\n  \u003Cstyle type=\"text\u002Fcss\"\u003E\n    #likert { text-align:center; }\n    #likert td { width: 13%; }\n   \u003C\u002Fstyle\u003E\n\u003C\u002Fhead\u003E\n \n\u003C!-- Say thank you --\u003E\n\u003Cheader style = \"top:110pt;left:110pt\"\u003E\n\u003Cimg src=\"static\u002FChris.jpg\" width=\"280pt\"\u003E\n  \u003C\u002Fheader \u003E\n\n\u003Cmain\u003E\n  \u003C!-- ask 3 questions:  --\u003E\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:20pt;\"\u003E\n    \u003Cstrong style=\"font-size:20pt;\"\u003EPlease indicate how you feel about Chris\u003C\u002Fstrong\u003E\n    \u003Cform id =\"Ratings_Negative_Positive\" required\u003E\n      \u003Ctable border-collapse: collapse; id=\"likert\"\u003E\n        \u003Ctr\u003E\n          \u003Cth colspan=\"7;\"\u003E\u003C\u002Fth\u003E\u003C\u002Ftr\u003E\n        \u003Ctr\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"-3\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"-2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"-1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"0\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"3\" required\u003E\u003C\u002Ftd\u003E\n         \u003C\u002Ftr\u003E\n         \u003Ctr\u003E\n         \u003Ctd\u003E-3 = Negative\u003C\u002Ftd\u003E\n         \u003Ctd\u003E-2\u003C\u002Ftd\u003E\n         \u003Ctd\u003E-1\u003C\u002Ftd\u003E\n         \u003Ctd\u003E0 = Neutral\u003C\u002Ftd\u003E\n         \u003Ctd\u003E1\u003C\u002Ftd\u003E\n         \u003Ctd\u003E2\u003C\u002Ftd\u003E\n         \u003Ctd\u003E3 = Positive\u003C\u002Ftd\u003E\n         \u003C\u002Ftr\u003E    \n      \u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Please click on this \u003Cbutton type=\"submit\" form=\"Ratings_Negative_Positive\"\u003E Submit \u003C\u002Fbutton\u003E button to continue.\n\u003C\u002Ffooter\u003E",
                  "files": {},
                  "parameters": {},
                  "responses": {},
                  "messageHandlers": {},
                  "title": "Ratings_Negative_Positive"
                },
                {
                  "type": "lab.html.Form",
                  "content": "\u003Chead\u003E\n  \u003Cstyle type=\"text\u002Fcss\"\u003E\n    #likert { text-align:center; }\n    #likert td { width: 13%; }\n   \u003C\u002Fstyle\u003E\n\u003C\u002Fhead\u003E\n \n\u003C!-- Say thank you --\u003E\n\u003Cheader style = \"top:110pt;left:110pt\"\u003E\n\u003Cimg src=\"static\u002FChris.jpg\" width=\"280pt\"\u003E\n  \u003C\u002Fheader \u003E\n\n\u003Cmain\u003E\n  \u003C!-- ask 4 questions:  --\u003E\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:20pt;\"\u003E\n    \u003Cstrong style=\"font-size:20pt;\"\u003EPlease indicate how you feel about Chris\u003C\u002Fstrong\u003E\n    \u003Cform id =\"Ratings_Good_Bad\" required\u003E\n      \u003Ctable border-collapse: collapse; id=\"likert\"\u003E\n        \u003Ctr\u003E\n          \u003Cth colspan=\"7;\"\u003E\u003C\u002Fth\u003E\u003C\u002Ftr\u003E\n        \u003Ctr\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"-3\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"-2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"-1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"0\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"3\" required\u003E\u003C\u002Ftd\u003E\n         \u003C\u002Ftr\u003E\n         \u003Ctr\u003E\n         \u003Ctd\u003E-3 = Bad\u003C\u002Ftd\u003E\n         \u003Ctd\u003E-2\u003C\u002Ftd\u003E\n         \u003Ctd\u003E-1\u003C\u002Ftd\u003E\n         \u003Ctd\u003E0 = Neutral\u003C\u002Ftd\u003E\n         \u003Ctd\u003E1\u003C\u002Ftd\u003E\n         \u003Ctd\u003E2\u003C\u002Ftd\u003E\n         \u003Ctd\u003E3 = Good\u003C\u002Ftd\u003E\n         \u003C\u002Ftr\u003E\n        \u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Please click on this \u003Cbutton type=\"submit\" form=\"Ratings_Good_Bad\"\u003E Submit \u003C\u002Fbutton\u003E button to continue.\n\u003C\u002Ffooter\u003E",
                  "files": {},
                  "parameters": {},
                  "responses": {},
                  "messageHandlers": {},
                  "title": "Ratings_Good_Bad"
                },
                {
                  "type": "lab.html.Form",
                  "content": "\u003Chead\u003E\n  \u003Cstyle type=\"text\u002Fcss\"\u003E\n    #likert { text-align:center; }\n    #likert td { width: 13%; }\n   \u003C\u002Fstyle\u003E\n\u003C\u002Fhead\u003E\n \n\u003C!-- Say thank you --\u003E\n\u003Cheader style = \"top:110pt;left:110pt\"\u003E\n\u003Cimg src=\"static\u002FChris.jpg\" width=\"280pt\"\u003E\n  \u003C\u002Fheader \u003E\n\n\u003Cmain\u003E\n  \u003C!-- ask 4 questions:  --\u003E\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:20pt;\"\u003E\n    \u003Cstrong style=\"font-size:20pt;\"\u003EPlease indicate how you feel about Chris\u003C\u002Fstrong\u003E\n    \u003Cform id =\"Ratings_Like_Dislike\" required\u003E\n      \u003Ctable border-collapse: collapse; id=\"likert\"\u003E\n        \u003Ctr\u003E\n          \u003Cth colspan=\"7;\"\u003E\u003C\u002Fth\u003E\u003C\u002Ftr\u003E\n        \u003Ctr\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"-3\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"-2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"-1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"0\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"3\" required\u003E\u003C\u002Ftd\u003E\n         \u003C\u002Ftr\u003E\n         \u003Ctr\u003E\n         \u003Ctd\u003E-3 = I dislike him\u003C\u002Ftd\u003E\n         \u003Ctd\u003E-2\u003C\u002Ftd\u003E\n         \u003Ctd\u003E-1\u003C\u002Ftd\u003E\n         \u003Ctd\u003E0 = Neutral\u003C\u002Ftd\u003E\n         \u003Ctd\u003E1\u003C\u002Ftd\u003E\n         \u003Ctd\u003E2\u003C\u002Ftd\u003E\n         \u003Ctd\u003E3 = I like him\u003C\u002Ftd\u003E\n         \u003C\u002Ftr\u003E\n      \u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Please click on this \u003Cbutton type=\"submit\" form=\"Ratings_Like_Dislike\"\u003E Submit \u003C\u002Fbutton\u003E button to continue.\n\u003C\u002Ffooter\u003E",
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
                  "tardy": false,
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
          "title": "C7. Negative_Video_IAT_First (Con B First)",
          "tardy": true,
          "skip": "${ this.state.condition !== 'C7. Negative_Video_IAT_First (Con B First)' }",
          "content": [
            {
              "type": "lab.html.Screen",
              "files": {},
              "parameters": {},
              "responses": {
                "keypress(Enter)": "Continue"
              },
              "messageHandlers": {},
              "title": "Video_Negative_Baseline",
              "content": "\u003Cheader\u003E\r\n  \u003Ch3\u003E\u003Cp\u003E Please watch the video from start to finish and pay attention to what Chris says.\u003C\u002Fp\u003E \u003Cp\u003EMake sure your volume is turned up and the subtitles are switched on. \u003C\u002Fp\u003E \u003C\u002Fh3\u003E \u003C\u002Fheader\u003E\r\n\r\n\u003Cmain style=\"margin:0%; content-horizontal-center content-vertical-center\"\u003E\r\n\r\n\u003Ciframe width=\"1000pt\" height=\"700pt\"\r\nsrc=\"https:\u002F\u002Fwww.youtube-nocookie.com\u002Fembed\u002F7CEpYHJdVxA?cc_load_policy=1&autoplay=0\" allow=\"autoplay\"\u003E\r\n\u003C\u002Fiframe\u003E\r\n\r\n\u003C\u002Fmain\u003E​\r\n\r\n\u003Cfooter style=\"padding:5pt; font-size:18pt;text-align:center;\"\u003E\r\n    Please only press the \u003Ckbd\u003E Enter key \u003C\u002Fkbd\u003E once you have watched the entire video from start to finish. \r\n    \u003C\u002Ffooter\u003E\r\n    \r\n"
            },
            {
              "type": "lab.html.Form",
              "content": "\u003Chead\u003E\n\u003Cstyle\u003E\ntable, td, th {border: 0pt solid black;}\n\ntable {border-collapse: collapse;width: 90%;}\n\nth {height: 90%;}\n\u003C\u002Fstyle\u003E\n\u003C\u002Fhead\u003E\n\n\u003Cheader\u003E\u003Ch3 style=\"color:green; font-size:22pt\"\u003E Final Questions (Part 1)\u003C\u002Fh3\u003E \n\u003C!-- instructions --\u003E\n\n\u003Cmain\u003E\n  \u003C!-- ask 4 questions:  --\u003E\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:16pt;\"\u003E\n    \u003Cform id =\"Memory_And_Diagnosticity_Questions\" required\u003E\n      \u003Ctable id=\"Memory_of_Video_Content\"\u003E\n                 \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Clabel for=\"Memory_of_Video_Content\"\u003E  \u003Cp\u003E 1. You just watched a Youtube video from a person called Chris. What were the main things that Chris said in his video? Please try to remember as much from the video as possible. \u003C\u002Fp\u003E \u003C\u002Flabel\u003E\n  \n  \u003Cinput type=\"text\" name=\"Memory_of_Video_Content\"id=\"Memory_of_Video_Content\" required style=\"text-align:left; width:500pt; height:150pt\"\u003E \u003C\u002Finput\u003E\n              \u003C\u002Fth\u003E\n            \n      \u003Ctable id=\"Diagnosticity_Question\"\u003E\n                 \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Clabel for=\"Diagnosticity_Question\"\u003E  2. During the video Chris provided information about himself. Do you think that this information revealed something about the type of person Chris really is (i.e., his true character)? \u003C\u002Flabel\u003E\n            \u003C\u002Fth\u003E\n               \u003Ctr\u003E\n            \u003Ctd style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Cselect name=\"Diagnosticity_Question\" id=\"Diagnosticity_Question\" required\u003E\n                \u003Coption value=\"\"\u003E ----- \u003C\u002Foption\u003E\n                \u003Coption value=\"Strongly_Diagnostic\"\u003E The info completely revealed Chris' true character \u003C\u002Foption\u003E\n                \u003Coption value=\"Moderately_Diagnostic\"\u003E The info was moderately revealing of Chris' true character   \u003C\u002Foption\u003E\n                \u003Coption value=\"Slightly_Diagnostic\"\u003E The info only slightly revealed Chris' true character \u003C\u002Foption\u003E\n                \u003Coption value=\"Not_Diagnostic\"\u003E The info revealed nothing about Chris' true character \u003C\u002Foption\u003E\n                \u003C\u002Fselect\u003E \n            \u003C\u002Ftd\u003E\n          \u003C\u002Ftr\u003E\n      \u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Please click on this \u003Cbutton type=\"submit\" form=\"Memory_And_Diagnosticity_Questions\"\u003E Submit \u003C\u002Fbutton\u003E button to continue.\n\u003C\u002Ffooter\u003E",
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
                  "tardy": false,
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
                  "content": "\u003Chead\u003E\n  \u003Cstyle type=\"text\u002Fcss\"\u003E\n    #likert { text-align:center; }\n    #likert td { width: 13%; }\n   \u003C\u002Fstyle\u003E\n\u003C\u002Fhead\u003E\n \n\u003C!-- Say thank you --\u003E\n\u003Cheader style = \"top:110pt;left:110pt\"\u003E\n\u003Cimg src=\"static\u002FChris.jpg\" width=\"280pt\"\u003E\n  \u003C\u002Fheader \u003E\n\n\u003Cmain\u003E\n  \u003C!-- ask 3 questions:  --\u003E\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:20pt;\"\u003E\n    \u003Cstrong style=\"font-size:20pt;\"\u003EPlease indicate how you feel about Chris\u003C\u002Fstrong\u003E\n    \u003Cform id =\"Ratings_Negative_Positive\" required\u003E\n      \u003Ctable border-collapse: collapse; id=\"likert\"\u003E\n        \u003Ctr\u003E\n          \u003Cth colspan=\"7;\"\u003E\u003C\u002Fth\u003E\u003C\u002Ftr\u003E\n        \u003Ctr\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"-3\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"-2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"-1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"0\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"3\" required\u003E\u003C\u002Ftd\u003E\n         \u003C\u002Ftr\u003E\n         \u003Ctr\u003E\n         \u003Ctd\u003E-3 = Negative\u003C\u002Ftd\u003E\n         \u003Ctd\u003E-2\u003C\u002Ftd\u003E\n         \u003Ctd\u003E-1\u003C\u002Ftd\u003E\n         \u003Ctd\u003E0 = Neutral\u003C\u002Ftd\u003E\n         \u003Ctd\u003E1\u003C\u002Ftd\u003E\n         \u003Ctd\u003E2\u003C\u002Ftd\u003E\n         \u003Ctd\u003E3 = Positive\u003C\u002Ftd\u003E\n         \u003C\u002Ftr\u003E    \n      \u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Please click on this \u003Cbutton type=\"submit\" form=\"Ratings_Negative_Positive\"\u003E Submit \u003C\u002Fbutton\u003E button to continue.\n\u003C\u002Ffooter\u003E",
                  "files": {},
                  "parameters": {},
                  "responses": {},
                  "messageHandlers": {},
                  "title": "Ratings_Negative_Positive"
                },
                {
                  "type": "lab.html.Form",
                  "content": "\u003Chead\u003E\n  \u003Cstyle type=\"text\u002Fcss\"\u003E\n    #likert { text-align:center; }\n    #likert td { width: 13%; }\n   \u003C\u002Fstyle\u003E\n\u003C\u002Fhead\u003E\n \n\u003C!-- Say thank you --\u003E\n\u003Cheader style = \"top:110pt;left:110pt\"\u003E\n\u003Cimg src=\"static\u002FChris.jpg\" width=\"280pt\"\u003E\n  \u003C\u002Fheader \u003E\n\n\u003Cmain\u003E\n  \u003C!-- ask 4 questions:  --\u003E\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:20pt;\"\u003E\n    \u003Cstrong style=\"font-size:20pt;\"\u003EPlease indicate how you feel about Chris\u003C\u002Fstrong\u003E\n    \u003Cform id =\"Ratings_Good_Bad\" required\u003E\n      \u003Ctable border-collapse: collapse; id=\"likert\"\u003E\n        \u003Ctr\u003E\n          \u003Cth colspan=\"7;\"\u003E\u003C\u002Fth\u003E\u003C\u002Ftr\u003E\n        \u003Ctr\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"-3\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"-2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"-1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"0\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"3\" required\u003E\u003C\u002Ftd\u003E\n         \u003C\u002Ftr\u003E\n         \u003Ctr\u003E\n         \u003Ctd\u003E-3 = Bad\u003C\u002Ftd\u003E\n         \u003Ctd\u003E-2\u003C\u002Ftd\u003E\n         \u003Ctd\u003E-1\u003C\u002Ftd\u003E\n         \u003Ctd\u003E0 = Neutral\u003C\u002Ftd\u003E\n         \u003Ctd\u003E1\u003C\u002Ftd\u003E\n         \u003Ctd\u003E2\u003C\u002Ftd\u003E\n         \u003Ctd\u003E3 = Good\u003C\u002Ftd\u003E\n         \u003C\u002Ftr\u003E\n        \u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Please click on this \u003Cbutton type=\"submit\" form=\"Ratings_Good_Bad\"\u003E Submit \u003C\u002Fbutton\u003E button to continue.\n\u003C\u002Ffooter\u003E",
                  "files": {},
                  "parameters": {},
                  "responses": {},
                  "messageHandlers": {},
                  "title": "Ratings_Good_Bad"
                },
                {
                  "type": "lab.html.Form",
                  "content": "\u003Chead\u003E\n  \u003Cstyle type=\"text\u002Fcss\"\u003E\n    #likert { text-align:center; }\n    #likert td { width: 13%; }\n   \u003C\u002Fstyle\u003E\n\u003C\u002Fhead\u003E\n \n\u003C!-- Say thank you --\u003E\n\u003Cheader style = \"top:110pt;left:110pt\"\u003E\n\u003Cimg src=\"static\u002FChris.jpg\" width=\"280pt\"\u003E\n  \u003C\u002Fheader \u003E\n\n\u003Cmain\u003E\n  \u003C!-- ask 4 questions:  --\u003E\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:20pt;\"\u003E\n    \u003Cstrong style=\"font-size:20pt;\"\u003EPlease indicate how you feel about Chris\u003C\u002Fstrong\u003E\n    \u003Cform id =\"Ratings_Like_Dislike\" required\u003E\n      \u003Ctable border-collapse: collapse; id=\"likert\"\u003E\n        \u003Ctr\u003E\n          \u003Cth colspan=\"7;\"\u003E\u003C\u002Fth\u003E\u003C\u002Ftr\u003E\n        \u003Ctr\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"-3\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"-2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"-1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"0\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"3\" required\u003E\u003C\u002Ftd\u003E\n         \u003C\u002Ftr\u003E\n         \u003Ctr\u003E\n         \u003Ctd\u003E-3 = I dislike him\u003C\u002Ftd\u003E\n         \u003Ctd\u003E-2\u003C\u002Ftd\u003E\n         \u003Ctd\u003E-1\u003C\u002Ftd\u003E\n         \u003Ctd\u003E0 = Neutral\u003C\u002Ftd\u003E\n         \u003Ctd\u003E1\u003C\u002Ftd\u003E\n         \u003Ctd\u003E2\u003C\u002Ftd\u003E\n         \u003Ctd\u003E3 = I like him\u003C\u002Ftd\u003E\n         \u003C\u002Ftr\u003E\n      \u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Please click on this \u003Cbutton type=\"submit\" form=\"Ratings_Like_Dislike\"\u003E Submit \u003C\u002Fbutton\u003E button to continue.\n\u003C\u002Ffooter\u003E",
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
          "title": "C8. Negative_Video_SR_First (Con B First)",
          "tardy": true,
          "skip": "${ this.state.condition !== 'C8. Negative_Video_SR_First (Con B First)' }",
          "content": [
            {
              "type": "lab.html.Screen",
              "files": {},
              "parameters": {},
              "responses": {
                "keypress(Enter)": "Continue"
              },
              "messageHandlers": {},
              "title": "Video_Negative_Baseline",
              "content": "\u003Cheader\u003E\r\n  \u003Ch3\u003E\u003Cp\u003E Please watch the video from start to finish and pay attention to what Chris says.\u003C\u002Fp\u003E \u003Cp\u003EMake sure your volume is turned up and the subtitles are switched on. \u003C\u002Fp\u003E \u003C\u002Fh3\u003E \u003C\u002Fheader\u003E\r\n\r\n\u003Cmain style=\"margin:0%; content-horizontal-center content-vertical-center\"\u003E\r\n\r\n\u003Ciframe width=\"1000pt\" height=\"700pt\"\r\nsrc=\"https:\u002F\u002Fwww.youtube-nocookie.com\u002Fembed\u002F7CEpYHJdVxA?cc_load_policy=1&autoplay=0\" allow=\"autoplay\"\u003E\r\n\u003C\u002Fiframe\u003E\r\n\r\n\u003C\u002Fmain\u003E​\r\n\r\n\u003Cfooter style=\"padding:5pt; font-size:18pt;text-align:center;\"\u003E\r\n    Please only press the \u003Ckbd\u003E Enter key \u003C\u002Fkbd\u003E once you have watched the entire video from start to finish. \r\n    \u003C\u002Ffooter\u003E\r\n    \r\n"
            },
            {
              "type": "lab.html.Form",
              "content": "\u003Chead\u003E\n\u003Cstyle\u003E\ntable, td, th {border: 0pt solid black;}\n\ntable {border-collapse: collapse;width: 90%;}\n\nth {height: 90%;}\n\u003C\u002Fstyle\u003E\n\u003C\u002Fhead\u003E\n\n\u003Cheader\u003E\u003Ch3 style=\"color:green; font-size:22pt\"\u003E Final Questions (Part 1)\u003C\u002Fh3\u003E \n\u003C!-- instructions --\u003E\n\n\u003Cmain\u003E\n  \u003C!-- ask 4 questions:  --\u003E\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:16pt;\"\u003E\n    \u003Cform id =\"Memory_And_Diagnosticity_Questions\" required\u003E\n      \u003Ctable id=\"Memory_of_Video_Content\"\u003E\n                 \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Clabel for=\"Memory_of_Video_Content\"\u003E  \u003Cp\u003E 1. You just watched a Youtube video from a person called Chris. What were the main things that Chris said in his video? Please try to remember as much from the video as possible. \u003C\u002Fp\u003E \u003C\u002Flabel\u003E\n  \n  \u003Cinput type=\"text\" name=\"Memory_of_Video_Content\"id=\"Memory_of_Video_Content\" required style=\"text-align:left; width:500pt; height:150pt\"\u003E \u003C\u002Finput\u003E\n              \u003C\u002Fth\u003E\n            \n      \u003Ctable id=\"Diagnosticity_Question\"\u003E\n                 \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Clabel for=\"Diagnosticity_Question\"\u003E  2. During the video Chris provided information about himself. Do you think that this information revealed something about the type of person Chris really is (i.e., his true character)? \u003C\u002Flabel\u003E\n            \u003C\u002Fth\u003E\n               \u003Ctr\u003E\n            \u003Ctd style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Cselect name=\"Diagnosticity_Question\" id=\"Diagnosticity_Question\" required\u003E\n                \u003Coption value=\"\"\u003E ----- \u003C\u002Foption\u003E\n                \u003Coption value=\"Strongly_Diagnostic\"\u003E The info completely revealed Chris' true character \u003C\u002Foption\u003E\n                \u003Coption value=\"Moderately_Diagnostic\"\u003E The info was moderately revealing of Chris' true character   \u003C\u002Foption\u003E\n                \u003Coption value=\"Slightly_Diagnostic\"\u003E The info only slightly revealed Chris' true character \u003C\u002Foption\u003E\n                \u003Coption value=\"Not_Diagnostic\"\u003E The info revealed nothing about Chris' true character \u003C\u002Foption\u003E\n                \u003C\u002Fselect\u003E \n            \u003C\u002Ftd\u003E\n          \u003C\u002Ftr\u003E\n      \u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Please click on this \u003Cbutton type=\"submit\" form=\"Memory_And_Diagnosticity_Questions\"\u003E Submit \u003C\u002Fbutton\u003E button to continue.\n\u003C\u002Ffooter\u003E",
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
                  "content": "\u003Chead\u003E\n  \u003Cstyle type=\"text\u002Fcss\"\u003E\n    #likert { text-align:center; }\n    #likert td { width: 13%; }\n   \u003C\u002Fstyle\u003E\n\u003C\u002Fhead\u003E\n \n\u003C!-- Say thank you --\u003E\n\u003Cheader style = \"top:110pt;left:110pt\"\u003E\n\u003Cimg src=\"static\u002FChris.jpg\" width=\"280pt\"\u003E\n  \u003C\u002Fheader \u003E\n\n\u003Cmain\u003E\n  \u003C!-- ask 3 questions:  --\u003E\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:20pt;\"\u003E\n    \u003Cstrong style=\"font-size:20pt;\"\u003EPlease indicate how you feel about Chris\u003C\u002Fstrong\u003E\n    \u003Cform id =\"Ratings_Negative_Positive\" required\u003E\n      \u003Ctable border-collapse: collapse; id=\"likert\"\u003E\n        \u003Ctr\u003E\n          \u003Cth colspan=\"7;\"\u003E\u003C\u002Fth\u003E\u003C\u002Ftr\u003E\n        \u003Ctr\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"-3\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"-2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"-1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"0\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"pos_neg\" value=\"3\" required\u003E\u003C\u002Ftd\u003E\n         \u003C\u002Ftr\u003E\n         \u003Ctr\u003E\n         \u003Ctd\u003E-3 = Negative\u003C\u002Ftd\u003E\n         \u003Ctd\u003E-2\u003C\u002Ftd\u003E\n         \u003Ctd\u003E-1\u003C\u002Ftd\u003E\n         \u003Ctd\u003E0 = Neutral\u003C\u002Ftd\u003E\n         \u003Ctd\u003E1\u003C\u002Ftd\u003E\n         \u003Ctd\u003E2\u003C\u002Ftd\u003E\n         \u003Ctd\u003E3 = Positive\u003C\u002Ftd\u003E\n         \u003C\u002Ftr\u003E    \n      \u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Please click on this \u003Cbutton type=\"submit\" form=\"Ratings_Negative_Positive\"\u003E Submit \u003C\u002Fbutton\u003E button to continue.\n\u003C\u002Ffooter\u003E",
                  "files": {},
                  "parameters": {},
                  "responses": {},
                  "messageHandlers": {},
                  "title": "Ratings_Negative_Positive"
                },
                {
                  "type": "lab.html.Form",
                  "content": "\u003Chead\u003E\n  \u003Cstyle type=\"text\u002Fcss\"\u003E\n    #likert { text-align:center; }\n    #likert td { width: 13%; }\n   \u003C\u002Fstyle\u003E\n\u003C\u002Fhead\u003E\n \n\u003C!-- Say thank you --\u003E\n\u003Cheader style = \"top:110pt;left:110pt\"\u003E\n\u003Cimg src=\"static\u002FChris.jpg\" width=\"280pt\"\u003E\n  \u003C\u002Fheader \u003E\n\n\u003Cmain\u003E\n  \u003C!-- ask 4 questions:  --\u003E\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:20pt;\"\u003E\n    \u003Cstrong style=\"font-size:20pt;\"\u003EPlease indicate how you feel about Chris\u003C\u002Fstrong\u003E\n    \u003Cform id =\"Ratings_Good_Bad\" required\u003E\n      \u003Ctable border-collapse: collapse; id=\"likert\"\u003E\n        \u003Ctr\u003E\n          \u003Cth colspan=\"7;\"\u003E\u003C\u002Fth\u003E\u003C\u002Ftr\u003E\n        \u003Ctr\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"-3\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"-2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"-1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"0\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"good_bad\" value=\"3\" required\u003E\u003C\u002Ftd\u003E\n         \u003C\u002Ftr\u003E\n         \u003Ctr\u003E\n         \u003Ctd\u003E-3 = Bad\u003C\u002Ftd\u003E\n         \u003Ctd\u003E-2\u003C\u002Ftd\u003E\n         \u003Ctd\u003E-1\u003C\u002Ftd\u003E\n         \u003Ctd\u003E0 = Neutral\u003C\u002Ftd\u003E\n         \u003Ctd\u003E1\u003C\u002Ftd\u003E\n         \u003Ctd\u003E2\u003C\u002Ftd\u003E\n         \u003Ctd\u003E3 = Good\u003C\u002Ftd\u003E\n         \u003C\u002Ftr\u003E\n        \u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Please click on this \u003Cbutton type=\"submit\" form=\"Ratings_Good_Bad\"\u003E Submit \u003C\u002Fbutton\u003E button to continue.\n\u003C\u002Ffooter\u003E",
                  "files": {},
                  "parameters": {},
                  "responses": {},
                  "messageHandlers": {},
                  "title": "Ratings_Good_Bad"
                },
                {
                  "type": "lab.html.Form",
                  "content": "\u003Chead\u003E\n  \u003Cstyle type=\"text\u002Fcss\"\u003E\n    #likert { text-align:center; }\n    #likert td { width: 13%; }\n   \u003C\u002Fstyle\u003E\n\u003C\u002Fhead\u003E\n \n\u003C!-- Say thank you --\u003E\n\u003Cheader style = \"top:110pt;left:110pt\"\u003E\n\u003Cimg src=\"static\u002FChris.jpg\" width=\"280pt\"\u003E\n  \u003C\u002Fheader \u003E\n\n\u003Cmain\u003E\n  \u003C!-- ask 4 questions:  --\u003E\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:20pt;\"\u003E\n    \u003Cstrong style=\"font-size:20pt;\"\u003EPlease indicate how you feel about Chris\u003C\u002Fstrong\u003E\n    \u003Cform id =\"Ratings_Like_Dislike\" required\u003E\n      \u003Ctable border-collapse: collapse; id=\"likert\"\u003E\n        \u003Ctr\u003E\n          \u003Cth colspan=\"7;\"\u003E\u003C\u002Fth\u003E\u003C\u002Ftr\u003E\n        \u003Ctr\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"-3\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"-2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"-1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"0\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"1\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"2\" required\u003E\u003C\u002Ftd\u003E\n         \u003Ctd\u003E\u003Cinput type=\"radio\" name=\"like_dislike\" value=\"3\" required\u003E\u003C\u002Ftd\u003E\n         \u003C\u002Ftr\u003E\n         \u003Ctr\u003E\n         \u003Ctd\u003E-3 = I dislike him\u003C\u002Ftd\u003E\n         \u003Ctd\u003E-2\u003C\u002Ftd\u003E\n         \u003Ctd\u003E-1\u003C\u002Ftd\u003E\n         \u003Ctd\u003E0 = Neutral\u003C\u002Ftd\u003E\n         \u003Ctd\u003E1\u003C\u002Ftd\u003E\n         \u003Ctd\u003E2\u003C\u002Ftd\u003E\n         \u003Ctd\u003E3 = I like him\u003C\u002Ftd\u003E\n         \u003C\u002Ftr\u003E\n      \u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Please click on this \u003Cbutton type=\"submit\" form=\"Ratings_Like_Dislike\"\u003E Submit \u003C\u002Fbutton\u003E button to continue.\n\u003C\u002Ffooter\u003E",
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
                  "tardy": false,
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
      "content": "\u003Chead\u003E\n\u003Cstyle\u003E\ntable, td, th {border: 0pt solid black;}\n\ntable {border-collapse: collapse;width: 90%;}\n\nth {height: 90%;}\n\u003C\u002Fstyle\u003E\n\u003Cscript\u003E\nfunction goBack() {\n  window.history.back()\n}\n\u003C\u002Fscript\u003E\n\n\u003C\u002Fhead\u003E\n\n\u003Cheader\u003E\u003Ch3 style=\"color:green; font-size:22pt\"\u003E Final Questions (Part 2)\u003C\u002Fh3\u003E \n\u003C!-- instructions --\u003E\n\n\u003Cmain\u003E\n  \u003C!-- ask 4 questions:  --\u003E\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:16pt;\"\u003E\n    \u003Cform id =\"Exploratory_Questions\" required\u003E   \n      \u003Ctable id=\"Demand\"\u003E\n                 \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Clabel for=\"Demand\"\u003E  1. Earlier, we asked you to indicate how you felt about Chris (e.g., whether he was good or bad). Did you tell us the truth about how you felt? Or did you just fake your response (i.e., tell us what you thought we wanted to hear)? Please be honest here (it will not affect payment in any way) \u003C\u002Flabel\u003E\n            \u003C\u002Fth\u003E\n               \u003Ctr\u003E\n            \u003Ctd style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Cselect name=\"Demand\" id=\"Demand\" required\u003E\n               \u003Coption value=\"\"\u003E ----- \u003C\u002Foption\u003E\n                \u003Coption value=\"Demand\"\u003E Yes - I faked my response based on what I thought the researchers wanted to find \u003C\u002Foption\u003E\n                \u003Coption value=\"No Demand\"\u003E No - my responses were based on how I genuinely felt \u003C\u002Foption\u003E\n                \u003Coption value=\"I don't know\"\u003E I don't know \u003C\u002Foption\u003E\n                \u003C\u002Fselect\u003E \n            \u003C\u002Ftd\u003E\n          \u003C\u002Ftr\u003E\n\n      \u003Ctable id=\"Reactance\"\u003E\n                 \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Clabel for=\"Reactance\"\u003E  2. Earlier, we asked you to indicate how you felt about Chris (e.g., whether he was good or bad). When answering that question did you consciously \u003Cstrong\u003E resist \u003C\u002Fstrong\u003E what (you thought) the researchers wanted you to feel towards Chris?\u003C\u002Flabel\u003E\n            \u003C\u002Fth\u003E\n               \u003Ctr\u003E\n            \u003Ctd style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Cselect name=\"Reactance\" id=\"Reactance\" required\u003E\n                \u003Coption value=\"\"\u003E ----- \u003C\u002Foption\u003E\n                \u003Coption value=\"Reactance\"\u003E Yes- I resisted what I thought the researchers wanted me to say \u003C\u002Foption\u003E\n                \u003Coption value=\"No Reactance\"\u003E No - my responses were based on how I genuinely felt \u003C\u002Foption\u003E\n                \u003Coption value=\"I don't know\"\u003E I don't know \u003C\u002Foption\u003E\n                \u003C\u002Fselect\u003E \n            \u003C\u002Ftd\u003E\n          \u003C\u002Ftr\u003E\n\n      \u003Ctable id=\"hypothesis_awareness\"\u003E\n                 \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Clabel for=\"hypothesis_awareness\"\u003E  \u003Cp\u003E 3. What do you think the researchers were trying to achieve in this study? \u003C\u002Fp\u003E \u003C\u002Flabel\u003E\n  \n            \u003Cinput type=\"text\" name=\"hypothesis_awareness\"id=\"hypothesis_awareness\" required style=\"text-align:left; width:500pt; height:150pt\"\u003E \u003C\u002Finput\u003E\n              \u003C\u002Fth\u003E\n\n      \u003Ctable id=\"influence_awareness\"\u003E\n                 \u003Cth style=\"text-align:left; font-family: Helvetica; font-size: 18pt;line-height: 150%\"\u003E\n              \u003Clabel for=\"influence_awareness\"\u003E  \u003Cp\u003E 4. Think back to the YouTube video we showed you. Do you think this video influenced how much you subsequently liked or disliked Chris? Please be honest here. \u003C\u002Fp\u003E \u003C\u002Flabel\u003E\n  \n              \u003Cinput type=\"text\" name=\"influence_awareness\"id=\"influence_awareness\" required style=\"text-align:left; width:500pt; height:150pt\"\u003E \u003C\u002Finput\u003E\n              \u003C\u002Fth\u003E\n\n      \u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:17pt\"\u003E\n    Please click on this \u003Cbutton type=\"submit\" form=\"Exploratory_Questions\"\u003E Submit \u003C\u002Fbutton\u003E button to continue\n\u003C\u002Ffooter\u003E",
      "files": {},
      "parameters": {},
      "responses": {},
      "messageHandlers": {},
      "title": "Exploratory Questions"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cheader\u003E\n    \u003Ch1\u003EDid you encounter any issues with this study?\u003C\u002Fh1\u003E\n\u003C\u002Fheader\u003E\n\n\u003Cmain style=\"text-align:left; font-family:Helvetica; font-size: 18pt; margin:1%\"\u003E\n\n\u003Cform id =\"Issues_with_Study\"\u003E\n    \u003Cdiv style=\" text-align:left color:rgb(20,20,100); font-size:19pt\"\u003E\n     \u003Cp\u003EDid you encounter any problems during this study? For instance, could you see everything OK and did all the response options work for you? \u003C\u002Fp\u003E \n       \n       \u003Cp\u003E If you encountered ANY issues please describe them here. You made it to the end of the experiment, so you will get paid for your time. Telling us about any problems here will not affect your payment at all. But it will help us make the experiment better in the future\u003C\u002Fp\u003E\u003Cbr\u003E\n      \n        \u003Clabel for=\"Issues_with_Study\"\u003EAre there any issues you would like to report (please write 'no issues' if you encountered no problems)?\u003Cbr\u003E\u003Cbr\u003E\u003C\u002Flabel\u003E\n         \n      \u003Ctextarea name=\"Issues_with_Study\"id=\"Issues_with_Study\" required type=\"text\" rows = \"4\" cols=\"10\" style=\"text-align:left; width:500pt; height:250pt\"\u003E\u003C\u002Ftextarea\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E\n\n\u003C!-- submit form to continue --\u003E\n\u003Cfooter style=\"padding:10pt; font-size:18pt;text-align:center;\"\u003E\n    Please click this \u003Cbutton type=\"submit\" form=\"Issues_with_Study\"\u003E Button \u003C\u002Fbutton\u003E in order to continue.\n\u003C\u002Ffooter\u003E",
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
      "content": "\u003Cheader\u003E\r\n\u003Ch1\u003E The study is now complete!\u003C\u002Fh1\u003E\r\n\u003C\u002Fheader\u003E\r\n\r\n\u003Cmain\u003E \r\n    \u003Ch2\u003E Below you will find an overview of what we were trying to investigate in this study. If you are not interested in this, you can immediately press the \u003Ckbd\u003E spacebar \u003C\u002Fkbd\u003E to exit the study.\u003C\u002Fh2\u003E \r\n  \u003Cbr\u003E \r\n  \u003Cbr\u003E \r\n  \u003Cp style=\" text-align:left font-size:19pt\"\u003E So what was this study actually about? In this study we were interested in a topic called impression formation (i.e., how we come to like or dislike people that we meet for the first time). During the study you encountered a video of a person (Chris) that was supposedly taken from YouTube. We actually created this video ourselves\u003C\u002Fp\u003E \r\n\r\n\u003Cp style=\" text-align:left font-size:19pt\"\u003E Half of the participants in the study encountered a video where Chris said three positive things and two neutral things about himself. The other half of participants encountered a video where Chris said three negative things and two neutral things about himself.\u003C\u002Fp\u003E \r\n\r\n\u003Cp style=\" text-align:left font-size:19pt\"\u003E We then examined if what Chris said was enough to change people's first impressions of him. Specifically, would people in the first group like Chris while people in the second group dislike him? We tested this using self-report measures and a reaction time task. The former was designed to capture people's self-reported thoughts and feelings whereas the latter was designed to capture their more spontaneous or automatic reactions.\u003C\u002Fp\u003E\r\n\r\n\u003Cp style=\" text-align:left font-size:19pt\"\u003E Afterwards we asked you to reflect on the experiment and tell us about your experiences with the task. \u003C\u002Fp\u003E  \r\n\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Ch4\u003E\u003Cb\u003E So that is it. We genuinely appreciate the time and effort you put into this experiment. Press the \u003Ckbd\u003E spacebar \u003C\u002Fkbd\u003E to complete the study.\u003C\u002Fb\u003E\u003C\u002Fh4\u003E \r\n\u003C\u002Ffooter\u003E"
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {},
      "messageHandlers": {},
      "title": "Thanks",
      "content": "\u003C!-- end instruction--\u003E\r\n\u003Cmain class = \"fullscreen\"\u003E\r\n  \u003Cp style=\"color:rgb(20,100,20);font-size:22px;text-align:center\"\u003E \r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbold id=\"fb\"\u003E Thank you!\u003C\u002Fbold\u003E\u003Cbr\u003E\r\n  \u003C\u002Fp\u003E\r\n  \u003Cdiv style=\"color:rgb(20,20,100);font-size:18px;text-align:center;padding-left:15vw;padding-right:15vw\"\u003E\r\n    \u003Cp\u003E\r\n     Please click \u003Ca href=\"https:\u002F\u002Fapp.prolific.co\u002Fsubmissions\u002Fcomplete?cc=327E7D49\"\u003Ehere\u003C\u002Fa\u003E to indicate that you finished the study.  \r\n    \u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E",
      "timeout": "200"
    }
  ]
})

// Let's go!
study.run()