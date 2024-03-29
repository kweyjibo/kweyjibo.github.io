---
title:  'Организация стилей. Группировка по стилевому назначению'
dsc:    'Немного поделюсь опытом по оранизации стилей'
date:   2020-10-17
tags:
- development
- css
layout: post.njk
---

Не знаю, как происходит это у других разработчиков, но я всегда любила
группировать стили по назначению. Сейчас вкратце расскажу о чем я.

Возьмем небольшой пример. Пусть будет самостоятельный section на странице, который нужно как-то покрасить, задать
размеры отступов, с помощью псевдоэлементов прикрутить красивости и etc.

```scss
  .header {
    border: 1px solid #cfc8c8;
    border-bottom-color: 1px solid red;
    font-size: 12px;
    background-image: url("path/pic.png");
    background-size: 562px;
    width: 980px;
    padding: 20px 20px;
    font-weight: bold;
    height: 110px;
    color: #666;
    margin: 24px 0 0;

    &:before {
      position: absolute;
      content: '';
      width: 10px;
      height: 10px;
      background-color: #f1ece8;
      bottom: 0;
      left: 50px;
    }

     &:after {
      position: absolute;
      content: '';
      width: 10px;
      height: 10px;
      background-color: #f45674;
      bottom: 0;
      right: 50px;
    }
  }
```

И вот когда видишь такую мешанину, немного становится дурно. Такой код я встретила в первую неделю работы, когда вышла
на последнее место. С одной стороны, кому от этого плохо? Никому. С другой,  мне. Я получила от руководителя таску
на внесение изменений в стили согласно макету. Головная боль меня сопровождала несколько дней, пока я не сдалась.
В общем, я решила просто отрефакторить куски стилей. При чем мне нужно было сделать не только тех частей, которые
затрагивали мои правки, а всего кода. Но, поверьте, уж лучше так, чем месить намешанное.

```scss
  .header {
    margin-top: 24px;
    padding: 20px;

    width: 980px;
    height: 110px;
    
    font-size: 12px;
    font-weight: bold;
    color: #666;

    border: 1px solid #cfc8c8;
    border-bottom-color: 1px solid red;
    background-image: url("path/pic.png");
    background-size: 562px;

    &:before,
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
    
      width: 10px;
      height: 10px;  
    }

    &:before {
      left: 50px;
      background-color: #f1ece8;
    }

     &:after {
      background-color: #f45674;
      right: 50px;
    }
  }
```

Я считаю, что это хорошее стилевое оформление позволит быстрее разбираться в коде и вносить в него правки. 
Стили сгруппированы по назначению: все что касается отступов - в одном блоке, оформление текста - в другом, и так далее.
Это позволит сэкономить время разработчику. Проверено на опыте. И я не раз получала респект от коллег.

Так же, если у вас есть элементы, которые сильно похожи, но отличаются друг от друга парами свойств, то неплохо их группировать.

Иногда возникают спорные моменты, и не знаешь как сгруппировать правильнее. Можно отталкиваться от того, где вес свойства важнее, 
и приписывать его к необходимому блоку свойств.

В данной статье я не стану углубляться в оптимизацию свойств, как и стилей в целом. Просто хочу обратить внимание
на небольшое удобство в оформлении. Для примера я использую код на основе препроцессора. Какого - это не так важно. 
Главное для меня объяснить суть.
