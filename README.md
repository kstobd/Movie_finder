# Movie_finder

Сайт для поиска фильмов и добавления их в "Избранное" с использованием **TMDb API**. 
Для реализации используется **React + TypeScript + Vite**

## Возможности
- Поиск фильмов по названию
- Просмотр наиболее популярных сейчас фильмов
- Добавление фильмов в "Избранное"
- Удаление фильмов из "Избранного"
- Если обложки в карточке нет, то генерируется карточка заглушка с названием в фильма
  
## Скриншоты

### Главная страница
<img width="1440" alt="image" src="https://github.com/user-attachments/assets/75f85f77-da1b-4bbd-97b1-af3d540c77d7" />


### Страница поиска
<img width="1435" alt="image" src="https://github.com/user-attachments/assets/0113235c-6de8-4b47-b428-bf3240d1b093" />

### Пагинация
<img width="1440" alt="image" src="https://github.com/user-attachments/assets/f1ac5755-1b09-43eb-98d7-d8d6fb9450f7" />

### Избранное
<img width="1440" alt="image" src="https://github.com/user-attachments/assets/f10c0e2f-a576-4f2d-b7b9-b239e1654c16" />

## Популярное 
<img width="1287" alt="image" src="https://github.com/user-attachments/assets/0bcabd2b-bed8-4be5-a82a-f9d66c5d094e" />


## Установка и настройка
1. Клонируйте репозиторий:
   ```
   git clone https://github.com/kstobd/Movie_finder.git
   cd Movie_finder
   ```
2. Установите зависимости:
   ```
   yarn install
   ```
3. Создайте файл `.env` в корневом каталоге и добавьте ваш TMDb API ключ:
   ```
   VITE_TMDB_API_KEY=your_api_key_here
   ```
4. Запустите сервер разработки:
   ```
   yarn dev
   ```

## Недавние изменения
- Добавлен компонент MovieCard и переделаны все карточки ([commit](https://github.com/kstobd/Movie_finder/commit/22aaa6d9e559551c2085cd3b4474a2649db0881a))
- Завершен поиск ([commit](https://github.com/kstobd/Movie_finder/commit/d655b9cd1ed8823b87741dac3e813d4f69951037))
- Готова подборка популярных фильмов ([commit](https://github.com/kstobd/Movie_finder/commit/72e9282d6823debe73848831c9e54f1124af5c18))

## Credits
This product uses the TMDB API but is not endorsed or certified by TMDB.

