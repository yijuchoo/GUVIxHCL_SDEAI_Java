## Lecture 5: Intro to OOP: Classes & Objects and More!

# Activity: Specialize a Class (Inheritance) – **TiffinSubscription**

## **Goal**
- Create a child class that adds **one new field** and **one new rule** while fully reusing parent logic.  
- Base class: **TiffinSubscription**  
- Child class: **BonusTiffin ** with a new field `weeklyBonus`

---

## **Rules to Follow**
- The new field must be **private** and validated inside the **child constructor**.  
- Override **exactly one** method.  
  - The overridden method must first call `super(...)`  
  - Additional child logic should only run **if the parent method succeeds**

---

## **Acceptance Checks**
- `PrepaidMetroPass` must block the **4th ride** when the `dailyRideLimit` is **3**.
