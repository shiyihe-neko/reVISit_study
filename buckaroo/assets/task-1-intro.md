# Task 1: Detect and Fix Abnormal Cupper Points

In this task, you will work with a dataset containing coffee ratings. In the dataset, each row represents a coffee sample from a specific country and owner, evaluated by professional graders ("cuppers") across various sensory attributes such as aroma, flavor, acidity, and sweetness, etc,. 

## Task Instructions
The column **'Cupper.Points'** records the **overall score** for each coffee sample — a key indicator of coffee quality.  
However, this column contains several issues introduced during data entry or aggregation:
- **Type mismatches**
- **Outliers**
- **Missing values** 

Your task is to **detect and repair any anomalies** in the column **'Cupper.Points'** and complete the following steps:

**1. Detect Type Mismatches**  
   - Identify values that are not numeric.  
   - Convert them into numeric values consistent with other entries (e.g., `"12k"` → `12.0`).  

**2. Detect Outliers**  
   - Define outliers as values outside the range of **mean ± 2 × standard deviation**.  
   - Replace these outlier values with the **mean of all valid (non-outlier) values**.

**3. Detect Missing Values**  
   - If there are missing values (`NaN`), fill them using the **mean of all valid (non-missing) values** in the same column.

---

## Estimated Time
Please try to complete this task **within 10 minutes**. Do your best, but avoid spending more than 10 minutes on it. 

---

## Success Criteria
| Criterion | Description |
|------------|--------------|
| **Type Consistency** | All entries in **'Cupper.Points'** should be numeric. |
| **Outlier Repair** | Values beyond mean ± 2σ replaced correctly |
| **Missing Value Repair** | All `NaN`s filled with the mean |


Click **"I understand"** to proceed to the task page. You can review these task instructions at any time by clicking the Help button in the upper-right corner after leaving this page. Once you enter the next page, the timing begins. (Note: there is no built-in timer, so please keep track of your own start time and try not to spend more than 10 minutes on this task.)