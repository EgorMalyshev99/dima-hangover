#!/bin/bash

echo "🚀 Начинаем деплой на GitHub Pages..."

# Проверяем, что мы в git репозитории
if [ ! -d ".git" ]; then
    echo "❌ Ошибка: Это не git репозиторий!"
    exit 1
fi

# Проверяем статус git
echo "📊 Проверяем статус git..."
git status

# Спрашиваем пользователя о коммите
echo ""
read -p "💬 Введите сообщение для коммита: " commit_message

if [ -z "$commit_message" ]; then
    commit_message="Обновление сайта $(date '+%Y-%m-%d %H:%M:%S')"
fi

# Собираем проект
echo "🔨 Собираем проект..."
pnpm build:prod

if [ $? -ne 0 ]; then
    echo "❌ Ошибка сборки! Проверьте логи выше."
    exit 1
fi

echo "✅ Проект успешно собран!"

# Добавляем все файлы
echo "📁 Добавляем файлы в git..."
git add .

# Коммитим изменения
echo "💾 Коммитим изменения..."
git commit -m "$commit_message"

# Пушим в main/master
echo "🚀 Пушим в удаленный репозиторий..."
current_branch=$(git branch --show-current)
git push origin "$current_branch"

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 Деплой запущен!"
    echo "📱 GitHub Actions автоматически задеплоит сайт"
    echo "⏱️  Обычно это занимает 2-5 минут"
    echo ""
    echo "🔍 Проверить статус можно:"
    echo "   - GitHub Actions: Actions → Deploy to GitHub Pages"
    echo "   - GitHub Pages: Settings → Pages"
    echo ""
    echo "🌐 Ваш сайт будет доступен по адресу:"
    echo "   https://your-username.github.io/dima/"
    echo ""
    echo "💡 Замените 'your-username' на ваше имя пользователя GitHub"
else
    echo "❌ Ошибка при push! Проверьте настройки git."
    exit 1
fi
