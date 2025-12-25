## Lecture 5: Intro to OOP: Classes & Objects and More!

# Activity: Specialize a Class (Inheritance) – **UPIWallet**

## **Goal**
- Create a child class that adds **one new field** and **one new rule** while fully reusing parent logic.  
- Base class: **UPIWallet**  
- Child class: **CashbackWallet** with a new field `cashbackRate`

---

## **Rules to Follow**
- The new field must be **private** and validated inside the **child constructor**.  
- Override **exactly one** method.  
  - The overridden method must first call `super(...)`  
  - Additional child logic should only run **if the parent method succeeds**

---

## **Acceptance Checks**
- A **CashbackWallet** with **1% cashback** should add **₹1** cashback on a successful `addMoney(100)` call.