
---

# Checkout with Stripe at Magnet

This package allows you to import [Stripe.js](https://stripe.com/docs/stripe-js) as a CommonJS or ES module.

### ⚠️ **Important Note**:
To be [PCI compliant](https://stripe.com/docs/security/guide#validating-pci-compliance), you **must** load Stripe.js directly from `https://js.stripe.com`. You cannot include it in a bundle or host it yourself. This package wraps the global `Stripe` function provided by the Stripe.js script as an ES module.

> **Note**: Calling `loadStripe` always loads the latest version of Stripe.js, regardless of which version of `@stripe/stripe-js` you use. Updates for this package impact tooling around the `loadStripe` helper and TypeScript type definitions but do not affect runtime availability of features of Stripe.js.

---

## 🌐 Minimum Requirements

- **Node.js**: v20.11.0

---

## ⚙️ Technology Stack

| Component      | Technology               |
|----------------|--------------------------|
| **Frontend**   | React.js, Redux, CSS      |
| **Backend**    | Node.js, Express.js      |
| **Database**   | MongoDB                  |
| **Styling**    | CSS                      |

---

## 🚀 Getting Started

### 1️⃣ Start the Frontend Development Server:

Navigate to the `client` folder and run the following command to start the development server:

```bash
cd client
npm run dev
```

### 2️⃣ Start the Backend Server:

Navigate to the `server` folder and use the following command to start the backend server:

```bash
cd server
nodemon server.js
```

---

## 📦 Installation

### 1️⃣ Clone the Repository:

```bash
git clone https://github.com/BhushanPandagre/Checkout_with_Stripe_at_magnet.git
cd Checkout_with_Stripe_at_magnet
```

### 2️⃣ Install Dependencies:

Install all required dependencies using the following command:

```bash
npm install
```

### 3️⃣ Install the Stripe.js Module:

```bash
npm install @stripe/stripe-js
```

### 4️⃣ Set Up Environment Variables:

Create a `.env` file in the root directory of your project and include the following key:

```bash
PORT=5000
```

---

## 💡 Usage

### `loadStripe`

The `loadStripe` function returns a `Promise` that resolves with a newly created `Stripe` object once Stripe.js has loaded. It works as follows:

```js
import { loadStripe } from '@stripe/stripe-js';

const stripe = await loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
```

> **Note**: Replace the random API key with your actual [publishable API keys](https://dashboard.stripe.com/account/apikeys).

For more information, check the [Stripe.js API reference](https://stripe.com/docs/js) or learn to [accept a payment](https://stripe.com/docs/payments/accept-a-payment).

### Import as a Side Effect

To ensure the Stripe.js script is loaded as soon as possible, import it as a side effect in your root module:

```js
import '@stripe/stripe-js';
```

---

## 📚 Stripe.js Documentation

- [Stripe.js Docs](https://stripe.com/docs/stripe-js)
- [Stripe.js API Reference](https://stripe.com/docs/js)
- [React Stripe.js Docs](https://stripe.com/docs/stripe-js/react)

---

## 👨‍💻 Developed By

**[Bhushan Pandagre]**  
🚀 **Developer | Programmer | Innovator**

📧 **Contact**: [pandagrebhushan3@gmail.com]  
🌐 **Portfolio**: [Visit Portfolio](https://portfolio-bhushan-ra9f.vercel.app/)  
💼 **LinkedIn**: [Visit LinkedIn](https://www.linkedin.com/in/bhushan-pandagre)

---

