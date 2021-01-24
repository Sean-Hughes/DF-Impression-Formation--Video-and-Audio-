
library(tidyverse)

setwd("~/git/evaluative learning via deepfaking/analyses/plots")

figure_1 <- read_rds("figure_1.rds")
  
pdf(NULL)
dev.control(displaylist = "enable")

figure_1

p1 <- recordPlot()
invisible(dev.off())
pdf("figure_1.pdf",
    width = 7.5, 
    height = 3.2)
p1
dev.off()
