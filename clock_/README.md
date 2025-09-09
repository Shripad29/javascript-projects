# 🕒 Analog Clock Project

This is a responsive analog clock built using **HTML**, **CSS**, and **JavaScript**. The project dynamically updates the clock hands (hour, minute, second) based on the user's current time. The design is inspired by a luxury watch aesthetic, with a Rolex logo placed at the center top for visual flair.

---

## 🛠️ Technologies Used

- **HTML5** – Markup for the clock structure
- **CSS3** – For styling and positioning
- **JavaScript** – For real-time functionality and rotation of clock hands

---

## 🧠 Features

- Real-time analog clock
- Moving hour, minute, and second hands
- Rolex-themed logo in the center
- Responsive design
- Minimal and clean UI

  
## 📌 How It Works

- `JavaScript` fetches the current time using the `Date` object.
- Each second, it updates the rotation of:
  - Hour hand (`hour / 12 * 360`)
  - Minute hand (`minute / 60 * 360`)
  - Second hand (`second / 60 * 360`)
- CSS uses `transform: rotate()` with a common pivot point to animate the hands.
