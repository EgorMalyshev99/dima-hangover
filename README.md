# 🍺 Мальчишник 2025 - Лендинг-приглашение

Веселый и стильный лендинг-приглашение на мальчишник в преддверии свадьбы! Создан с использованием современного стека: Vite + Tailwind CSS + JavaScript ES6+.

## ✨ Особенности

- 🎨 Современный дизайн с Tailwind CSS
- 📱 Полностью адаптивный для всех устройств
- 🎭 Анимации при прокрутке (AOS library)
- 🎸 Декоративные элементы: гитара, дом на колесах, Макс Корж
- 🕐 Обратный отсчет до события
- 🎥 Видео-фон в hero секции
- 👥 Информация о команде (8-9 участников)
- 🎉 Интерактивные эффекты и анимации
- 🎮 Скрытый Easter Egg (Konami Code)
- 🍺 Юмористические фразы и элементы
- ⚡ Быстрая разработка с Vite
- 🎨 Utility-first стилизация с Tailwind CSS
- 🚀 pnpm для быстрой установки зависимостей
- ✨ Prettier для автоматического форматирования кода

## 🚀 Технологии

- **Vite** - современный сборщик и dev-сервер
- **Tailwind CSS** - utility-first CSS фреймворк
- **HTML5** - семантическая разметка
- **JavaScript (ES6+)** - интерактивность и анимации
- **AOS (Animate On Scroll)** - анимации при прокрутке
- **PostCSS** - обработка CSS
- **pnpm** - быстрый и эффективный пакетный менеджер
- **Prettier** - автоматическое форматирование кода

## 📁 Структура проекта

```
dima/
├── src/
│   ├── main.js             # Основной JavaScript файл
│   └── style.css           # Tailwind CSS и кастомные стили
├── index.html              # Главная страница
├── package.json            # Зависимости и скрипты
├── pnpm-workspace.yaml     # pnpm workspace конфигурация
├── .npmrc                  # pnpm настройки
├── .prettierrc             # Prettier конфигурация
├── .prettierignore         # Prettier ignore файл
├── vite.config.js          # Конфигурация Vite
├── tailwind.config.js      # Конфигурация Tailwind CSS
├── postcss.config.js       # Конфигурация PostCSS
├── .gitignore              # Git ignore файл
└── README.md               # Документация
```

## 🛠️ Установка и запуск

### Предварительные требования

- Node.js (версия 22 или выше)
- pnpm (версия 10 или выше)

### Установка pnpm

Если у вас не установлен pnpm:

```bash
# Через npm
npm install -g pnpm

# Через curl (macOS/Linux)
curl -fsSL https://get.pnpm.io/install.sh | sh -

# Через PowerShell (Windows)
iwr https://get.pnpm.io/install.ps1 -useb | iex
```

### Установка зависимостей

```bash
# Установка всех зависимостей
pnpm install

# Или короткая версия
pnpm i
```

### Команды разработки

```bash
# Запуск dev-сервера
pnpm dev

# Сборка для продакшена
pnpm build

# Превью собранного проекта
pnpm preview

# Очистка проекта
pnpm clean

# Переустановка зависимостей
pnpm reinstall
```

### Команды форматирования

```bash
# Форматирование всех файлов
pnpm format

# Проверка форматирования без изменений
pnpm format:check

# Форматирование с игнорированием неизвестных файлов
pnpm format:fix
```

### Дополнительные команды

```bash
# Добавление новой зависимости
pnpm add package-name

# Добавление dev-зависимости
pnpm add -D package-name

# Удаление зависимости
pnpm remove package-name

# Обновление зависимостей
pnpm update

# Проверка outdated пакетов
pnpm outdated
```

## 🌐 Развертывание

### GitHub Pages (Автоматический деплой)

Проект настроен для автоматического деплоя на GitHub Pages!

#### Настройка GitHub Pages:

1. **Включите GitHub Pages** в настройках репозитория:
   - Перейдите в `Settings` → `Pages`
   - В разделе `Source` выберите `Deploy from a branch`
   - Выберите ветку `gh-pages` и папку `/ (root)`
   - Нажмите `Save`

2. **Настройте GitHub Actions** (уже настроено):
   - При каждом push в ветку `main` или `master` автоматически запускается сборка
   - Сайт деплоится в ветку `gh-pages`
   - URL будет: `https://your-username.github.io/dima/`

#### Ручной деплой:

```bash
# Сборка для продакшена
pnpm build:prod

# Или
pnpm deploy
```

#### Проверка деплоя:

- GitHub Actions: `Actions` → `Deploy to GitHub Pages`
- Статус деплоя: `Settings` → `Pages` → `Your site is live at...`

### Vercel (рекомендуется)

1. Подключите репозиторий к Vercel
2. Vercel автоматически определит настройки Vite
3. Сайт будет автоматически деплоиться при каждом push

### Netlify

1. Подключите репозиторий к Netlify
2. Настройки сборки:
   - Build command: `pnpm build`
   - Publish directory: `dist`

## 🎯 Настройка под ваши нужды

### Изменение даты

В файле `src/main.js` найдите строку:

```javascript
const targetDate = new Date("September 5, 2025 18:00:00").getTime();
```

И измените дату на нужную.

### Добавление фотографий

Замените placeholder-фото в `index.html` на реальные изображения:

```html
<div class="placeholder-photo">
  <img
    src="path/to/your/photo.jpg"
    alt="Описание фото"
    class="w-full h-full object-cover"
  />
</div>
```

### Замена видео-фона

Замените ссылку на видео в hero секции в `index.html`:

```html
<video autoplay muted loop playsinline class="w-full h-full object-cover">
  <source src="path/to/your/video.mp4" type="video/mp4" />
  <source src="path/to/your/video.webm" type="video/webm" />
</video>
```

### Кастомизация цветов

В файле `tailwind.config.js` измените цветовую схему:

```javascript
theme: {
  extend: {
    colors: {
      primary: "#ff6b35",    // Основной цвет
      secondary: "#f7931e",  // Вторичный цвет
      accent: "#ffd23f",     // Акцентный цвет
      dark: "#2c3e50"        // Темный цвет
    }
  }
}
```

### Кастомизация Prettier

В файле `.prettierrc` настройте правила форматирования:

```json
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "printWidth": 80
}
```

### Кастомные стили

Добавьте свои стили в `src/style.css` используя директивы Tailwind:

```css
@layer components {
  .my-custom-class {
    @apply bg-primary text-white p-4 rounded-lg;
  }
}
```

## 🎮 Easter Egg

Попробуйте ввести **Konami Code**: ↑↑↓↓←→←→BA
Это активирует специальные эффекты! 🎉

## 📱 Адаптивность

Лендинг полностью адаптивен благодаря Tailwind CSS и корректно отображается на:

- 🖥️ Десктопах (xl, 2xl breakpoints)
- 💻 Ноутбуках (lg breakpoint)
- 📱 Планшетах (md breakpoint)
- 📱 Смартфонах (sm breakpoint и меньше)

## 🎨 Tailwind CSS Utilities

Проект использует множество Tailwind utilities:

- **Layout**: `flex`, `grid`, `container`
- **Spacing**: `p-*`, `m-*`, `gap-*`
- **Typography**: `text-*`, `font-*`
- **Colors**: `bg-*`, `text-*`, `border-*`
- **Effects**: `shadow-*`, `backdrop-blur`, `gradient-*`
- **Animation**: `animate-*`, `transition-*`, `transform`

## 🔧 Отладка

### Проблемы с dev-сервером

```bash
# Очистить кеш и переустановить зависимости
pnpm clean
pnpm install
pnpm dev
```

### Проблемы со сборкой

```bash
# Проверить Tailwind конфигурацию
pnpm exec tailwindcss -i ./src/style.css -o ./dist/output.css --watch
```

### Проблемы с pnpm

```bash
# Очистить pnpm кеш
pnpm store prune

# Проверить версию pnpm
pnpm --version

# Переустановить глобально
npm uninstall -g pnpm
npm install -g pnpm
```

### Проблемы с форматированием

```bash
# Проверить конфигурацию Prettier
pnpm exec prettier --config .prettierrc --check .

# Принудительное форматирование
pnpm format:fix
```

### Проблемы с Tailwind

Убедитесь, что все пути файлов указаны в `tailwind.config.js`:

```javascript
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./*.html"];
```

## 📊 Производительность

- ✅ Vite для быстрой разработки и оптимизированной сборки
- ✅ Tailwind CSS purging неиспользуемых стилей
- ✅ pnpm для быстрой установки и управления зависимостями
- ✅ Prettier для консистентного форматирования кода
- ✅ Оптимизация изображений (рекомендуется)
- ✅ Ленивая загрузка анимаций
- ✅ Минификация при сборке

## 🛠️ Дальнейшее развитие

### Добавление TypeScript

```bash
pnpm add -D typescript @types/node
# Переименуйте main.js в main.ts и обновите импорты
```

### Добавление ESLint

```bash
pnpm add -D eslint eslint-config-prettier eslint-plugin-prettier
```

### Добавление CSS preprocessor

```bash
pnpm add -D sass
# Переименуйте style.css в style.scss
```

### Добавление компонентов

Создайте отдельные JS модули для компонентов:

```javascript
// src/components/Countdown.js
export function createCountdown() {
  // компонент счетчика
}
```

## 📞 Поддержка

Если у вас возникли вопросы или проблемы:

1. Проверьте консоль браузера и терминал
2. Убедитесь в корректности всех конфигурационных файлов
3. Проверьте версии Node.js и pnpm
4. Очистите кеш: `pnpm clean && pnpm install`
5. Проверьте pnpm store: `pnpm store prune`
6. Проверьте форматирование: `pnpm format:check`

## 🎉 Удачи с мальчишником!

Создайте незабываемое событие для Димы! 🍻

---

**Создано с любовью, юмором и современными технологиями для настоящих друзей** ❤️
