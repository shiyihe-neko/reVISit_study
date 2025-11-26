# Task 1: Cleaning Game Rating Dataset

You are a data analyst at a gaming media outlet, and you need to analyze how User Scores have trended by Genre since the year 2000. The raw data is currently too messy for the pipeline. Please clean it using the assigned tool.

In this task, you will clean the provided dataset using the assigned tool. Your goal is to prepare a dataset in which all fields relevant to the analysis are clean, consistent, and ready for computing annual average scores. Please select appropriate cleaning strategies and correct abnormal values where necessary.

## Your Goal:

**Filter**: You are only interested in the modern era. Please exclude any records released prior to 2000.

**Standardize**: Ensure **'User_Score'** is numeric and ready for aggregation.

**Quality Control**: We need a high-quality dataset. Trends will be invisible if the data contains nulls, type errors, or significant outliers. So please choose reasonable strategies to deal with those abnormals.

## Notification:

**Be Conservative**: Do not aggressively delete rows. If data is messy, try to save the record by imputing values based on reasonable logic. Only delete rows if the data is unrecoverable.

**Context Matters**: Be careful when flagging outliers. A value that looks strange globally might be normal within its specific subgroup. Think of housing prices as an example: a price that is an outlier for the whole country might be normal for a city like New York. Verifying anomalies within their groups before removing them is valuable.


## Estimated Time
Please try to complete this task **within 10 minutes**. Do your best, but avoid spending more than 10 minutes on it. 

Click **"I understand"** to proceed to the task page. You can review these task instructions at any time by clicking the Help button in the upper-right corner after leaving this page. Once you enter the next page, the timing begins. (Note: there is no built-in timer, so please keep track of your own start time and try not to spend more than 10 minutes on this task.) Please remember that this is a **Think-Aloud** study. You are required to verbalize your thoughts, including any questions, confusions while using the tool, or decisions you make while completing the task.