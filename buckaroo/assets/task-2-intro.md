# Task 2： Detect and Fix Abnormalities in Food Nutrition Data

In this task, you will work with a USDA Food Nutrition dataset. In the dataset, each record represents a cspecific food item, with its category (`Category`), description (`Description`), and several key nutritional attributes such as calories, protein, carbohydrates, fat, and vitamins.


## Task Instructions

However, the dataset contains various issues introduced during aggregation and data entry:
- Some **food categories are inconsistent or fragmented** (e.g., `"BEEF"`, `"Beef"`, `"beef meat"` all refer to the same group).  
- Some categories have **too few samples** to be statistically meaningful.  
- Numeric columns include **missing, extreme, or invalid values**.  
- Certain numeric attributes contain **non-numeric or text-based errors**.

Your task is to perform **comprehensive cleaning** while preserving as much data as possible.

---

## Estimated Time

Approximately 15 – 25 minutes. But there is no time limit for this task—do your best and submit it once you feel it is complete.

---

## Success Criteria

The following table outlines the key success criteria for this task.  
Additional criteria may also apply depending on your cleaning approach or dataset characteristics.  

| **Criterion** | **Description** |
|----------------|----------------|
| **Group Completeness** | Each category should contain at least **100 valid records**. |
| **Type Consistency** | All numeric fields must be properly converted to **numeric data types**. |
| **Naming Consistency** | Duplicate or similar category names should be **standardized and unified**. |
| **Outlier Repair** | Extreme or missing values should be **handled appropriately** (e.g., imputed or adjusted). |

**Avoid deleting data unless absolutely necessary** — prioritize transformations that preserve the dataset’s structure and meaning.



Click **"I understand"** to proceed to the task page. You can review these task instructions at any time by clicking the Help button in the upper-right corner after leaving this page.