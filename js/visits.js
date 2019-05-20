function getCookie(byname)
{byname=byname+"=";
    nlen = byname.length;
    fromN = document.cookie.indexOf(byname)+0;
    if((fromN) != -1)
    {fromN +=nlen
        toN=document.cookie.indexOf(";",fromN)+0;
        if(toN == -1) {toN=document.cookie.length;}
        return unescape(document.cookie.substring(fromN,toN));
    }
    return null;
}

function parseCookie()
{ var cookieList = document.cookie.split("; ");
    var cookieArray = new Array();
    for (var i = 0; i < cookieList.length; i++) {
        // Разделение пар имя-значение.
        var name = cookieList[i].split("=");
        // Декодирование и добавление в cookie-массив.
        cookieArray[unescape(name[0])] = unescape(name[1]);
    }
    return cookieArray;
}
function setCookie(visits) {
    /* Счетчик числа посещений с указанием даты последнего посещения
       и определением срока хранения в 1 год. */
    var expireDate = new Date();
    var today = new Date();
    // Установка даты истечения срока хранения.
    expireDate.setDate(365 + expireDate.getDate());
    // Сохранение числа посещений.
    document.cookie = "visits=" + visits +
        "; expires=" + expireDate.toGMTString() + ";";
    // Сохранение настоящей даты как времени последнего посещения.
    document.cookie = "LastVisit=" + escape(today.toGMTString()) +
        "; expires=" + expireDate.toGMTString() + ";";
}

if ("" == document.cookie)
{ // Инициализация cookie.
    setCookie(1);
    document.write("<H3>Поздравляю Вас с первым посещением моего сайта.</H3>");
}
else {
    var cookies = parseCookie();
    // Вывод приветствия, числа посещений и увеличение числа посещений на 1.
    document.write("<H4>Мы снова рады видеть Вас на моем сайте! Число лично ваших посещений - " +
        cookies.visits++ + " !</H4>");
    // Вывод даты последнего посещения.
    document.write("<H4>Последний раз Вы были у меня на сайте: " + cookies.LastVisit + ".</H4>");
    // Обновление cookie.
    setCookie(isNaN(cookies.visits)?1:cookies.visits);
}