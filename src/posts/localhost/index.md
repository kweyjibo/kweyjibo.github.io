---
title:  'Ubuntu - настройка виртуальных хостов'
dsc:    'Для настройки виртуальных хостов необходимо проделать несколько операций. Настраивала я все это счастье под Ubuntu 12.10. Так как сайт на php пришлось поставить соответствующие инструменты. Откройте терминал.'
date:   2012-11-23
layout: post.njk
tags:
- ubuntu
- localhost
---

Итак, приступим.

Для настройки виртуальных хостов необходимо проделать несколько операций. Настраивала я все это счастье под Ubuntu 12.10. Так как сайт на php, пришлось поставить соответствующие инструменты. Откройте терминал.

Для начала устанавливаем Apache. В окне терминала введите строку:

```terminal
sudo apt-get install apache2
```

Теперь установим PHP:

```terminal
sudo apt-get install php5 php5-mysql libapache2-mod-php5
```

Перезагрузите Apache-сервер, чтобы загрузить php-модули:

```terminal
sudo service apache2 restart
```

Для проверки статуса сервиса, его старта, остановки, рестарта или перезагрузки конфигурационных файлов используются следующие команды:

```terminal
service apache2 status
sudo service apache2 start
sudo service apache2 stop
sudo service apache2 restart
sudo service apache2 reload
```

Файл конфигурации Apache хранится по адресу `/ect/apache2/apache2.conf`. Проверьте его обязательно. У меня была закомментирована строчка `Include sites-enabled/`, в следствии чего не получалось запустить созданный хост из нужного каталога.

В браузере наберите адрес `http://localhost`. Если все хорошо, то должна появится надпись **"It works!"**. Эта надпись выводится из файла `/var/www/index.html`. Можете отредактировать его и убедиться, что все правильно.

Теперь можно приступить к настройке хоста. Я захотела для начала установить у себя фреймворк Symfony2. Создала в домашнем каталоге папку `website`, а в ней `symfony`. Путь к такой папке:

```terminal
/home/User/website/symfony
```

Он нам понадобится для конфигурационных файлов. **User** - это ваше имя в системе (пользователь/логин). Затем закачала туда файлы. И теперь мне нужно, чтобы по ссылке `symfony.me` открывалось окно с приветствием данного фреймворка.

Зайдем в папку `/etc/apache2`:

```terminal
cd /etc/apache2
ls
```

Командой `ls` посмотрите, что находится в данной директории. Нас интересуют два каталога — `sites-available` и `sites-enabled`. В папке `sites-available` хранится информация о существующих хостах, а в папке `sites-enabled` о подключенных, причем файлы в ней являются символическими ссылками на файлы из папки `sites-available`

#### Шаг 1
Создадим в каталоге `sites-available` файл `symfony.me` (к слову, назвать его можно как угодно, но так просто легче не запутаться) и откроем его для редактирования.

```terminal
sudo gedit /etc/apache2/sites-available/symfony.me
```

Откроется пустой файл. Можете скопировать в него полностью содержимое файла `/etc/apache2/sites-available/default` (отрыть для чтения его можно просто двойным кликом, зайдя в эту папку):

```terminal
	&ltVirtualHost *:80&gt
		ServerAdmin webmaster@symfony.me
					ServerName symfony.me
		DocumentRoot /home/user/website/symfony
		&ltDirectory&gt
			Options FollowSymLinks
			AllowOverride None
		&lt/Directory&gt
		&ltDirectory /home/user/website/symfony>
			Options Indexes FollowSymLinks MultiViews
			AllowOverride All
			Order allow,deny
			allow from all
		&lt/Directory&gt
		ErrorLog /var/log/apache2/error.log
		LogLevel debug
		CustomLog /var/log/apache2/access.log combined
	&lt/VirtualHost&gt
```

Внесем некоторые изменения: отредактируйте `ServerName`:

```terminal
ServerName symfony.me
```

Заменим адрес директории `DocumentRoot` на свою:

```terminal
DocumentRoot /home/user/website/symfony
```

Изменим строчку `Directory /var/www/`:

```terminal
Directory /home/user/website/symfony
```

И изменим значение `AllowOverride None` на:

```terminal
AllowOverride All
```

#### Шаг 2
Теперь отредактируем файл `hosts`:

```terminal
sudo gedit /etc/hosts
terminal
```

У меня он выглядит так:

```terminal
127.0.0.1 localhost.localdomain localhost HOME-SP
127.0.0.1 symfony.me 

# The following lines are desirable for IPv6 capable hosts
::1 ip6-localhost ip6-loopback
fe00::0 ip6-localnet
ff00::0 ip6-mcastprefix
ff02::1 ip6-allnodes
ff02::2 ip6-allrouters
```

Вам нужно добавить строчку:

```terminal
127.0.0.1 symfony.me
```

#### Шаг 3
Теперь включим наш сайт

```terminal
sudo a2ensite symfony.me
```

Чтобы выключить сайт

```terminal
sudo a2dissite symfony.me
```

#### Шаг 4
Перезагружаем Apache

```terminal
sudo service apache2 restart
```

Идем в браузер и в набираем адрес хоста, в моем случае это `symfony.me/web/app_dev.php`. У меня конечно не с первого раза вышло. Это уже вопрос фреймворка. В `php.ini` пришлось отредактировать строчку `date.timezone`:

```terminal
sudo gedit /etc/php5/apache2/php.ini
```

Раскомментировать и прописать `Europe/Moscow`.

```terminal
date.timezone = Europe/Moscow
```