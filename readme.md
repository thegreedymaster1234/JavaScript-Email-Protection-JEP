# JavaScript Email Protection (JEP)

JEP is a simple JavaScript function that **protects email addresses** from bots scraping raw HTML. It dynamically writes obfuscated email links to the DOM.

## 🚀 Features
✅ **Obfuscates emails** using HTML character codes  
✅ **Prevents basic scrapers** from reading raw email addresses  
✅ **No manual decoding required** – browsers display the email correctly  
✅ **Lightweight & simple** – only a few lines of JavaScript  

## 📂 Project Structure
```
📂 jep-email-protection
│── 📄 index.html       # Example usage
│── 📄 jep.js           # JEP function
│── 📄 README.md        # Documentation
```

## 🛠️ Usage

### 1️⃣ **Include the JavaScript File**
Add `jep.js` to your project and include it in your HTML:

```html
<script src="jep.js"></script>
```

### 2️⃣ **Call `jep_link(domain, user)`** in Your HTML
Use the `jep_link` function to insert an email link:

```html
<p>Contact: <script>jep_link("example.com", "mailbox")</script></p>
```

This dynamically generates:

```html
<a href="mailto:mailbox@example.com">mailbox@example.com</a>
```

But in the **HTML source**, it appears obfuscated:

```html
<a href="mailto:mailbox@example.com">&#109;&#97;&#105;&#108;&#98;&#111;&#120;&#64;&#101;&#120;&#97;&#109;&#112;&#108;&#101;&#46;&#99;&#111;&#109;</a>
```

## 🔐 How It Works
1. **Scrapers scanning raw HTML won’t see the email** – only encoded characters.  
2. **Browsers automatically decode the characters**, displaying a normal email link.  
3. **Users can click the email as usual**, but bots won’t extract it easily.

## 📌 Future Improvements
- Add **randomized obfuscation** to make detection harder.
- Use **JavaScript decryption** for even stronger protection.

---

## 🤝 Contributing
Feel free to improve the project and submit a pull request! 🚀  

