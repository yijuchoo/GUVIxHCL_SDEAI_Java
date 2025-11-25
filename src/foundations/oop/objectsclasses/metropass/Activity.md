# Activity: Specialize a Class (Inheritance) – **MetroPass**

## **Goal**
- Create a child class that adds **one new field** and **one new rule** while fully reusing parent logic.  
- Base class: **MetroPass**  
- Child class: **PrepaidMetroPass** with a new field `dailyRideLimit`

---

## **Rules to Follow**
- The new field must be **private** and validated inside the **child constructor**.  
- Override **exactly one** method.  
  - The overridden method must first call `super(...)`  
  - Additional child logic should only run **if the parent method succeeds**

---

## **Acceptance Checks**
- `PrepaidMetroPass` must block the **4th ride** when the `dailyRideLimit` is **3**.
