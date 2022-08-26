$('#myId') // <div id='myId'></div>

// 과제: class myClass DOM들을 찾아라.
$('.myClass')

// 과제: name attribute value가 surname인 input DOM을 찾아라.
$('input[name="surname"]') // <input name='surname'/>

$('#contents ul.people li')
// 위 selector에 해당하는 HTML code를 작성하라.
// collection 이라 모든 <li> 2개가 담긴다.
{/* <div id='contents'>
    <ul class='people'>
        <li></li>
        <li></li>
    </ul>
</div> */}

$('a.external:first')
/*
<a class='external'></a>
<a class='external'></a>
*/

$('li:odd')
/* 홀수번째 li만 선택된다.
<ul>
    <li> 0 </li>
    <li> 1 </li>
    <li> 2 </li>
    <li> 3 </li>
</ul>
*/

$('div:visible')

$('div:gt(1)')
/* n번보다 큰 경우만 선택된다.
<div> 0 </div>
<div> 1 </div>
<div> 2 </div>
*/

$('div:animated')
// 현재 동작 중인 것들을 선택한다.
$('a[rel$="thinger"]')
/* rel이 thinger로 끝나는 것을 선택한다.
<a rel='do-nothinger'></a>
<a rel='so-thinger'></a>
*/

$('div.foo').has('p')
/* .has 자식을 가진 경우를 골라낸다.
<div class='foo'>
    <p></p>
</div>
<div class='foo'>
</div>
*/

$('ul li').filter('.current')
/* .filter 속성을 가진 경우를 골라낸다.
<ul>
    <li class='current'><li>
    <li></li>
</ul>
*/

$('ul li').not('.current')
// .not 속성을 가지지 않은 경우를 골라낸다.

$('ul li').eq(1)
// n번 index만 선택한다. collection으로 리턴한다.

$('form :button')
/* 버튼 라이트
    <form>
        <button></button>
        <input type='button'>
    </form>
*/

$('form :rabio') // <input type='radio'/>
$('form :checkbox') // <input type='checkbox'/>

$('form :checked')
/* 체크 된 경우를 찾는다.
<input type='radio'/>
<input type='checkbox'/>
<select><option></option></select>
*/

$('form :selected')
/*
<select><option></option></select>
*/

$('form :enabled')
$('form :disabled')

$('form :file') // <input type='file'/>

$('form :input')
/*
<input type='text'/>
<textarea></textarea>
<select></select>
<button type='submit'></button>
*/

$('form :text') // <input type='text'/>

$('form :password') // <input type='password'/>

$('form input[name="gender"]:radio')
// : 띄어쓰기 차이는 자식이면 띄어쓰고 아니면 붙여쓴다.
// 과제: 위 selector에 해당하는 html code를 작성하라.
{/* <form>
    <input name='gender' type='radio'></input>
</form> */}

$('form :reset') // <input type= 'reset'/>

$('form: submit') // <input type= 'submit'/>