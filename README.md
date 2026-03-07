1️⃣ What is the difference between var, let, and const?
var
JavaScript-এর পুরাতন variable declaration system। আগে বেশি ব্যবহার হতো। declare করার আগে access করলে undefined পাওয়া যায়|
let
ES6 এর পরে এসেছে। যখন কোনো variable এর value ভবিষ্যতে পরিবর্তন হতে পারে তখন let ব্যবহার করা হয়।
const
ES6 এর পরে এসেছে। যখন কোনো variable এর value স্থির থাকবে এবং পরিবর্তন হবে না তখন const ব্যবহার করা হয়।

2️⃣ What is the spread operator (...)?
Spread operator (...) হলো JavaScript-এর একটি syntax যা array বা object এর ভেতরের সব element বা property আলাদা করে ছড়িয়ে (spread করে) দেয়।

3️⃣ What is the difference between map(), filter(), and forEach()?
map()
map() ব্যবহার করা হয় যখন আমরা একটি array এর প্রতিটি element এর উপর কাজ করে একটি নতুন array তৈরি করতে চাই।
filter()
filter() ব্যবহার করা হয় যখন আমরা কোনো condition অনুযায়ী array থেকে কিছু নির্দিষ্ট element বেছে নিতে চাই।
এটাও নতুন একটি array return করে, কিন্তু সেই array তে শুধু condition true হওয়া element গুলো থাকে।
forEach()
forEach() ব্যবহার করা হয় array এর প্রতিটি element এর উপর কোনো কাজ করার জন্য।
এটা সাধারণত loop এর মতো কাজ করে, কিন্তু নতুন কোনো array return করে না।

4️⃣ What is an arrow function?
Arrow function হলো JavaScript-এর একটি ছোট ও সহজ syntax যেটা দিয়ে function লেখা যায়।
এটা ES6 (ECMAScript 2015) এর পরে JavaScript এ যোগ হয়েছে। Arrow function ব্যবহার করলে একই কাজের function আরও ছোট এবং পরিষ্কারভাবে লেখা যায়। => চিহ্নটাকে arrow বলা হয়, তাই এটাকে arrow function বলা হয়।

5️⃣ What are template literals?
Template literals হলো JavaScript-এর একটি আধুনিক string লেখার পদ্ধতি। এটা ES6 এ এসেছে। এর মাধ্যমে string এর ভিতরে সহজে variable বসানো যায় এবং multi-line string লেখা যায়।
Template literal লিখতে backtick (``) ব্যবহার করা হয়, single বা double quote না। ${} এর ভিতরে variable বসানো হয় |
