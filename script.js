// عنصرهای مهمی که داخل index.html هستن و با کلاس پیدا می‌شن:
// document.querySelector(".js-game-input")   -> ورودی اسم بازی
// document.querySelector(".js-add-btn")      -> دکمه افزودن
// document.querySelector(".js-game-list")    -> لیست <ul> بازی‌ها
// document.querySelector(".js-empty-state")  -> پیام "هنوز بازی‌ای اضافه نکردی"
// document.querySelector(".js-playing-count"), ".js-done-count", ".js-total-count" -> شمارنده‌های بالای صفحه

// کلاس‌های CSS آماده که در JS بهشون نیاز داری:
// "game-card"   -> کلاس اصلی هر کارت بازی
// "game-name"   -> عنصر داخل کارت که اسم بازی رو نشون میده
// "status-pill" -> دکمه کوچیک وضعیت (در حال بازی / تموم شده)
// "delete-btn"  -> دکمه حذف
// "completed"   -> این کلاس رو به game-card اضافه/حذف کن تا استایل "تموم شده" اعمال بشه
// "hidden"      -> برای مخفی/نمایش پیام js-empty-state

// نکته: چون چند تا کارت بازی داریم (نه فقط یکی)، برای پیدا کردن همه دکمه‌های
// حذف یا همه status-pill ها باید از querySelectorAll استفاده کنی، نه querySelector.
