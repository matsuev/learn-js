
if (!("a" in window)) {
   var a = 1;
}
alert(a);   // undefined

// Переменные, объявленные с ключевым словом var, обрабатываются до начала
// выполнения функции (или запуска скрипта, если находятся в глобальной
// области видимости).

// Переменная <a> будет инициализирована и доступна за пределами блока
// if () {...}, т.е. попадет в глобальную область видимости - объект window
// (если этот код выполняется в браузере).
 
// Значение 1 переменной <a> будет присвоено, только если выполнится условие
// if (!("a" in window)) – если объект window не содержит поле с именем <a>.

// А это условие всегда будет ложным, т.к. объект window теперь содержит
// поле с именем <a>. Таким образом получаем, что <a> равняется undefined.



var b = function a(x) {
   x && a(--x);
};
alert(a);      // не выведет ничего, т.к. выполнение прервется с ошибкой

// В глобальной области видимости инициализируется переменная <b>.
// Функция <a> – это значение, которое мы записываем в переменную <b>.
// Идентификатор <a> не определен в глобальной области видимости и
// будет доступен только внутри самой функции <a>.

// Таким образом скрипт прервется с ошибкой "значение <а> не задано".



function a(x) {
   return x * 2;
}
var a;
alert(a);      // function a(x) { return x * 2; }

// Переменные, объявленные с ключевым словом var, обрабатываются до начала
// выполнения функции (или запуска скрипта, если находятся в глобальной
// области видимости).

// Таким образом, сначала инициализируется переменная с именем <a>, далее
// в эту переменную помещается функция с совпадающим именем <a>

// В alert мы передаем идентификатор переменной а не вызов функции,
// и в результате получаем содержимое переменной.



function b(x, y, a) {
   console.log(arguments)
   arguments[2] = 10;
   alert(a);
}
b(1, 2, 3);    // если использовать 'use strict' – 3, иначе – 10

// Поведение функции будет зависеть от того, используется ли в скрипте 'use strict'

// В старом стандарте JavaScript переменные и массив <arguments> ссылались на
// одни и те же значения, следовательно <a> и arguments[2] – одна переменная

// В современном стандарте, при вызове функции значения переменных копируются
// в псевдо-массив <arguments>, т.е. изменение значений в массиве не влияет
// на значения переменных (и наоборот).



function a() {
   alert(this);
}
a.call(null);  // если использовать 'use strict' – null, иначе – object Window

// Поведение функции будет зависеть от того, используется ли в скрипте 'use strict'

// В старом стандарте JavaScript, при вызове call/apply с аргументом null или
// undefined, функция получает this = window

// В современном стандарте, this будет равно переданному аргументу.